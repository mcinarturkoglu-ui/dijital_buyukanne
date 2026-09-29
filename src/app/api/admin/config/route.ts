import { NextResponse } from 'next/server';
import { readDataFile, writeDataFile } from '@/lib/server-storage';
import defaultConfig from '@/data/config.json';

const FILENAME = 'config.json';

async function getConfigData() {
  return await readDataFile<any>(FILENAME, defaultConfig);
}

async function saveConfigData(data: any) {
  return await writeDataFile(FILENAME, data);
}

// GET: Konfigürasyonu getir
export async function GET() {
  try {
    const data = await getConfigData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(defaultConfig);
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
    console.error('Save config error:', error);
    return NextResponse.json({ success: true });
  }
}
