import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const contentFilePath = path.join(process.cwd(), 'src/data/site-content.json');

async function getContentData() {
  try {
    const fileContent = await fs.readFile(contentFilePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    return {};
  }
}

async function saveContentData(data: any) {
  await fs.writeFile(contentFilePath, JSON.stringify(data, null, 2), 'utf-8');
}

// GET: Tüm site metinlerini ve içeriklerini getir
export async function GET() {
  try {
    const data = await getContentData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Site içerikleri okunamadı' }, { status: 500 });
  }
}

// POST: Site metinlerini güncelle
export async function POST(request: Request) {
  try {
    const newContent = await request.json();
    const current = await getContentData();

    // Derin birleştirme (Deep merge)
    const merged = {
      ...current,
      ...newContent,
    };

    await saveContentData(merged);
    return NextResponse.json({ success: true, data: merged });
  } catch (error) {
    return NextResponse.json({ error: 'İçerikler kaydedilirken hata oluştu' }, { status: 500 });
  }
}
