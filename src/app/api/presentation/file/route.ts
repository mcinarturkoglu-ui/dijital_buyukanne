import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

export const dynamic = 'force-dynamic';

const globalStore = globalThis as unknown as {
  __pdfPresentationBuffers?: Record<string, { buffer: Buffer; filename: string; mimeType: string }>;
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'general';
    const isDownload = searchParams.get('download') === 'true';

    const defaultFilename = type === 'rotary' ? 'rotary-dijital-buyukanne-sunum.pdf' : 'dijital-buyukanne-sunum.pdf';
    let fileBuffer: Buffer | null = null;
    let servedFilename = defaultFilename;

    // 1. Check in-memory buffer (if custom uploaded recently)
    if (globalStore.__pdfPresentationBuffers && globalStore.__pdfPresentationBuffers[type]) {
      fileBuffer = globalStore.__pdfPresentationBuffers[type].buffer;
      servedFilename = globalStore.__pdfPresentationBuffers[type].filename || defaultFilename;
    }

    // 2. Check /tmp directory
    if (!fileBuffer) {
      try {
        const tmpPath = path.join(os.tmpdir(), defaultFilename);
        fileBuffer = await fs.readFile(tmpPath);
      } catch {
        // Not in tmp
      }
    }

    // 3. Check public/docs directory (bundled default PDF)
    if (!fileBuffer) {
      try {
        const publicPath = path.join(process.cwd(), 'public/docs', defaultFilename);
        fileBuffer = await fs.readFile(publicPath);
      } catch {
        // Not in public/docs
      }
    }

    if (!fileBuffer) {
      return NextResponse.json({ error: 'Sunum PDF dosyası bulunamadı.' }, { status: 404 });
    }

    const disposition = isDownload ? 'attachment' : 'inline';

    return new Response(new Uint8Array(fileBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `${disposition}; filename="${encodeURIComponent(servedFilename)}"`,
        'Content-Length': fileBuffer.length.toString(),
        'Cache-Control': 'public, max-age=60, s-maxage=60',
      },
    });
  } catch (error) {
    console.error('Serve PDF error:', error);
    return NextResponse.json({ error: 'Dosya okunurken bir hata oluştu.' }, { status: 500 });
  }
}
