import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src/data/config.json');

async function getConfigData() {
  try {
    const fileContent = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    return {};
  }
}

async function saveConfigData(data: any) {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
}

// GET: Konfigürasyonu getir
export async function GET() {
  try {
    const data = await getConfigData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Ayarlar okunamadı' }, { status: 500 });
  }
}

// POST: Konfigürasyonu güncelle
export async function POST(request: Request) {
  try {
    const newConfig = await request.json();
    const current = await getConfigData();

    const merged = {
      ...current,
      ...newConfig,
      contact: {
        ...(current.contact || {}),
        ...(newConfig.contact || {}),
      },
      social: {
        ...(current.social || {}),
        ...(newConfig.social || {}),
      },
      seo: {
        ...(current.seo || {}),
        ...(newConfig.seo || {}),
      },
      babySensAI: {
        ...(current.babySensAI || {}),
        ...(newConfig.babySensAI || {}),
      },
    };

    await saveConfigData(merged);
    return NextResponse.json({ success: true, data: merged });
  } catch (error) {
    return NextResponse.json({ error: 'Ayarlar güncellenirken hata oluştu' }, { status: 500 });
  }
}
