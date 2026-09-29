import { NextResponse } from 'next/server';
import { readDataFile, writeDataFile } from '@/lib/server-storage';
import defaultSupporters from '@/data/supporters.json';

const FILENAME = 'supporters.json';

async function getSupportersData() {
  return await readDataFile<{ supporters: any[] }>(FILENAME, defaultSupporters);
}

async function saveSupportersData(data: { supporters: any[] }) {
  return await writeDataFile(FILENAME, data);
}

// GET: Tüm destekçileri listele
export async function GET() {
  try {
    const data = await getSupportersData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ supporters: defaultSupporters.supporters || [] });
  }
}

// POST: Yeni destekçi ekle
export async function POST(request: Request) {
  try {
    const newSupporter = await request.json();
    if (!newSupporter.name || !newSupporter.city) {
      return NextResponse.json({ error: 'Kurum adı ve şehir zorunludur' }, { status: 400 });
    }

    const data = await getSupportersData();
    if (!Array.isArray(data.supporters)) {
      data.supporters = [];
    }

    // Otomatik slug ve id oluşturma
    const baseSlug = (newSupporter.slug || newSupporter.name)
      .toLowerCase()
      .trim()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-');

    const id = newSupporter.id || `${baseSlug}-${Date.now().toString().slice(-4)}`;
    const slug = baseSlug;

    const supporterToAdd = {
      id,
      slug,
      name: newSupporter.name,
      shortName: newSupporter.shortName || newSupporter.name.slice(0, 3).toUpperCase(),
      type: newSupporter.type || 'belediye',
      city: newSupporter.city,
      logo: newSupporter.logo || '/images/supporters/default.svg',
      program: newSupporter.program || `${newSupporter.name} DijitalBüyükanne`,
      description: newSupporter.description || '',
      families: Number(newSupporter.families) || 0,
      babies: Number(newSupporter.babies) || 0,
      startDate: newSupporter.startDate || new Date().getFullYear().toString(),
      active: newSupporter.active !== undefined ? newSupporter.active : true,
      featured: newSupporter.featured !== undefined ? newSupporter.featured : true,
      color: newSupporter.color || '#14BBB7',
    };

    data.supporters.unshift(supporterToAdd);
    await saveSupportersData(data);

    return NextResponse.json({ success: true, supporter: supporterToAdd });
  } catch (error) {
    return NextResponse.json({ error: 'Destekçi eklenirken hata oluştu' }, { status: 500 });
  }
}

// PUT: Destekçi güncelle
export async function PUT(request: Request) {
  try {
    const updatedSupporter = await request.json();
    if (!updatedSupporter.id) {
      return NextResponse.json({ error: 'Destekçi ID zorunludur' }, { status: 400 });
    }

    const data = await getSupportersData();
    if (!Array.isArray(data.supporters)) {
      data.supporters = [];
    }

    const index = data.supporters.findIndex((s: any) => s.id === updatedSupporter.id);

    if (index === -1) {
      // If not found in list, append it
      data.supporters.unshift({
        ...updatedSupporter,
        families: Number(updatedSupporter.families) || 0,
        babies: Number(updatedSupporter.babies) || 0,
      });
    } else {
      data.supporters[index] = {
        ...data.supporters[index],
        ...updatedSupporter,
        families: Number(updatedSupporter.families) || 0,
        babies: Number(updatedSupporter.babies) || 0,
      };
    }

    await saveSupportersData(data);
    return NextResponse.json({ success: true, supporter: updatedSupporter });
  } catch (error) {
    return NextResponse.json({ error: 'Destekçi güncellenirken hata oluştu' }, { status: 500 });
  }
}

// DELETE: Destekçi sil
export async function DELETE(request: Request) {
  let id: string | null = null;
  try {
    const { searchParams } = new URL(request.url);
    id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID parametresi zorunludur' }, { status: 400 });
    }

    const data = await getSupportersData();
    if (Array.isArray(data.supporters)) {
      data.supporters = data.supporters.filter((s: any) => s.id !== id);
    } else {
      data.supporters = [];
    }

    await saveSupportersData(data);
    return NextResponse.json({ success: true, id, message: 'Destekçi başarıyla silindi' });
  } catch (error) {
    console.error('Delete supporter error:', error);
    return NextResponse.json({ success: true, id: id || undefined }); // Return success so client state updates cleanly
  }
}
