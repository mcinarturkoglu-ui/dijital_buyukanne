import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import { readDataFile, writeDataFile } from '@/lib/server-storage';
import defaultMeta from '@/data/presentation-meta.json';

export const dynamic = 'force-dynamic';

const FILENAME = 'presentation-meta.json';

// Global in-memory storage for uploaded PDF buffers
const globalStore = globalThis as unknown as {
  __pdfPresentationBuffers?: Record<string, { buffer: Buffer; filename: string; mimeType: string }>;
};

if (!globalStore.__pdfPresentationBuffers) {
  globalStore.__pdfPresentationBuffers = {};
}

// GET: Mevcut sunum dosyalarının meta bilgilerini getir
export async function GET() {
  try {
    const meta = await readDataFile(FILENAME, defaultMeta);
    return NextResponse.json(meta);
  } catch (error) {
    return NextResponse.json(defaultMeta);
  }
}

// POST: Yönetim panelinden yeni hazır PDF sunumu yükle
export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let pdfBuffer: Buffer;
    let originalName = 'sunum.pdf';
    let type = 'general'; // 'general' veya 'rotary'
    let customTitle = '';

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      const file = formData.get('file') as File | null;
      type = (formData.get('type') as string) || 'general';
      customTitle = (formData.get('title') as string) || '';

      if (!file) {
        return NextResponse.json({ error: 'Lütfen bir PDF dosyası seçin.' }, { status: 400 });
      }

      const bytes = await file.arrayBuffer();
      pdfBuffer = Buffer.from(bytes);
      originalName = file.name || `${type}-sunum.pdf`;
    } else {
      // JSON Base64 fallback
      const body = await request.json();
      if (!body.base64) {
        return NextResponse.json({ error: 'PDF verisi bulunamadı.' }, { status: 400 });
      }
      type = body.type || 'general';
      originalName = body.filename || `${type}-sunum.pdf`;
      customTitle = body.title || '';

      const base64Data = body.base64.replace(/^data:application\/pdf;base64,/, '');
      pdfBuffer = Buffer.from(base64Data, 'base64');
    }

    // PDF geçerlilik kontrolü (PDF başlığı %PDF- ile başlamalıdır)
    const headerStr = pdfBuffer.slice(0, 8).toString('ascii');
    if (!headerStr.includes('%PDF')) {
      return NextResponse.json({ error: 'Geçersiz dosya formatı. Lütfen geçerli bir .pdf dosyası yükleyin.' }, { status: 400 });
    }

    const targetFilename = type === 'rotary' ? 'rotary-dijital-buyukanne-sunum.pdf' : 'dijital-buyukanne-sunum.pdf';

    // 1. Global in-memory cache'e yaz
    if (globalStore.__pdfPresentationBuffers) {
      globalStore.__pdfPresentationBuffers[type] = {
        buffer: pdfBuffer,
        filename: originalName,
        mimeType: 'application/pdf',
      };
    }

    // 2. /tmp dizinine yaz (Vercel serverless'ta çalışır)
    try {
      const tmpPath = path.join(os.tmpdir(), targetFilename);
      await fs.writeFile(tmpPath, pdfBuffer);
    } catch (err) {
      console.warn('Could not write to tmp:', err);
    }

    // 3. public/docs dizinine yaz (yerel ortamda çalışır)
    try {
      const publicPath = path.join(process.cwd(), 'public/docs', targetFilename);
      await fs.writeFile(publicPath, pdfBuffer);
    } catch {
      // Vercel serverless ortamında read-only olduğu için hata fırlatabilir, sessizce geç
    }

    // 4. Meta veriyi güncelle ve kaydet
    const currentMeta = await readDataFile<any>(FILENAME, defaultMeta);
    const updatedMeta = {
      ...currentMeta,
      [type]: {
        title: customTitle || (type === 'rotary' ? 'Rotary & DijitalBüyükanne Resmî Sunumu' : 'DijitalBüyükanne Kurumsal Sunumu'),
        filename: originalName,
        size: pdfBuffer.length,
        lastUpdated: new Date().toISOString(),
        isCustom: true,
        downloadUrl: `/api/presentation/file?type=${type}&t=${Date.now()}`,
      },
    };

    await writeDataFile(FILENAME, updatedMeta);

    return NextResponse.json({
      success: true,
      message: 'PDF sunumu başarıyla yüklendi ve canlıya alındı!',
      meta: updatedMeta[type],
    });
  } catch (error) {
    console.error('PDF upload error:', error);
    return NextResponse.json({ error: 'PDF dosyası yüklenirken bir hata oluştu.' }, { status: 500 });
  }
}

// DELETE: Orijinal hazır PDF sunumuna geri dön (sıfırla)
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'general';

    // Bellekteki özel buffer'ı temizle
    if (globalStore.__pdfPresentationBuffers && globalStore.__pdfPresentationBuffers[type]) {
      delete globalStore.__pdfPresentationBuffers[type];
    }

    // /tmp'deki geçici özel dosyayı sil
    try {
      const targetFilename = type === 'rotary' ? 'rotary-dijital-buyukanne-sunum.pdf' : 'dijital-buyukanne-sunum.pdf';
      const tmpPath = path.join(os.tmpdir(), targetFilename);
      await fs.unlink(tmpPath);
    } catch {
      // ignore
    }

    // Meta veriyi varsayılana döndür
    const currentMeta = await readDataFile<any>(FILENAME, defaultMeta);
    const defaultItem = (defaultMeta as any)[type];
    const updatedMeta = {
      ...currentMeta,
      [type]: {
        ...defaultItem,
        isCustom: false,
        lastUpdated: new Date().toISOString(),
      },
    };

    await writeDataFile(FILENAME, updatedMeta);

    return NextResponse.json({
      success: true,
      message: 'Sunum dosyası orijinal varsayılan haline sıfırlandı.',
      meta: updatedMeta[type],
    });
  } catch (error) {
    console.error('PDF reset error:', error);
    return NextResponse.json({ error: 'Sıfırlama işlemi sırasında hata oluştu.' }, { status: 500 });
  }
}
