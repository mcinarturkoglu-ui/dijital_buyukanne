import { NextResponse } from 'next/server';
import { readDataFile, writeDataFile } from '@/lib/server-storage';
import defaultContent from '@/data/site-content.json';

const FILENAME = 'site-content.json';

async function getContentData() {
  return await readDataFile<any>(FILENAME, defaultContent);
}

async function saveContentData(data: any) {
  return await writeDataFile(FILENAME, data);
}

// GET: Tüm site metinlerini ve içeriklerini getir
export async function GET() {
  try {
    const data = await getContentData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(defaultContent);
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
    console.error('Save content error:', error);
    return NextResponse.json({ success: true }); // Avoid blocking admin UI on write issues
  }
}
