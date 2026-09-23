import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src/data/impact-stats.json');

async function getStatsData() {
  try {
    const fileContent = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    return {
      stats: {
        babies: 0,
        families: 0,
        institutions: 0,
        cities: 0,
        evaluations: 0,
        expertSessions: 0,
        satisfactionRate: 0,
      },
      note: '',
      lastUpdated: null,
    };
  }
}

async function saveStatsData(data: any) {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), 'utf-8');
}

// GET: İstatistikleri getir
export async function GET() {
  try {
    const data = await getStatsData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'İstatistikler okunamadı' }, { status: 500 });
  }
}

// POST: İstatistikleri güncelle
export async function POST(request: Request) {
  try {
    const newStats = await request.json();
    const data = await getStatsData();

    data.stats = {
      ...data.stats,
      babies: Number(newStats.babies ?? data.stats.babies),
      families: Number(newStats.families ?? data.stats.families),
      institutions: Number(newStats.institutions ?? data.stats.institutions),
      cities: Number(newStats.cities ?? data.stats.cities),
      evaluations: Number(newStats.evaluations ?? data.stats.evaluations),
      expertSessions: Number(newStats.expertSessions ?? data.stats.expertSessions),
      satisfactionRate: Number(newStats.satisfactionRate ?? data.stats.satisfactionRate),
    };

    if (newStats.note !== undefined) {
      data.note = newStats.note;
    }
    data.lastUpdated = new Date().toISOString();

    await saveStatsData(data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'İstatistikler güncellenirken hata oluştu' }, { status: 500 });
  }
}
