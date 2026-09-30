'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Download,
  Maximize2,
  FileText,
  UploadCloud,
  CheckCircle2,
  Sparkles,
  Layers,
  FileCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { RotaryWheel } from '@/components/rotary/RotarySlideDeck';
import { getPdfFromStorage, StoredPdf } from '@/lib/pdf-storage';

function PresentationDeckInner() {
  const searchParams = useSearchParams();
  const initialDeck = searchParams.get('deck') === 'rotary' ? 'rotary' : 'general';
  const [deckMode, setDeckMode] = useState<'general' | 'rotary'>(initialDeck);
  
  // Stored PDF from client IndexedDB
  const [storedPdf, setStoredPdf] = useState<StoredPdf | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string>(`/api/presentation/file?type=${initialDeck}`);
  const [isCustom, setIsCustom] = useState(false);
  const [fileName, setFileName] = useState(
    initialDeck === 'rotary' ? 'rotary-dijital-buyukanne-sunum.pdf' : 'dijital-buyukanne-sunum.pdf'
  );
  const [fileSize, setFileSize] = useState<number>(0);

  // Sync with searchParams
  useEffect(() => {
    const q = searchParams.get('deck');
    if (q === 'rotary') {
      setDeckMode('rotary');
    } else {
      setDeckMode('general');
    }
  }, [searchParams]);

  // Load PDF (IndexedDB first, fallback to Server API)
  useEffect(() => {
    let activeObjectUrl: string | null = null;

    const loadPresentation = async () => {
      try {
        // 1. Check client IndexedDB
        const local = await getPdfFromStorage(deckMode);
        if (local && local.blob) {
          activeObjectUrl = URL.createObjectURL(local.blob);
          setPdfUrl(activeObjectUrl);
          setStoredPdf(local);
          setIsCustom(true);
          setFileName(local.filename);
          setFileSize(local.size);
          return;
        }

        // 2. Fallback to server API
        setIsCustom(false);
        const defaultName = deckMode === 'rotary' ? 'rotary-dijital-buyukanne-sunum.pdf' : 'dijital-buyukanne-sunum.pdf';
        setFileName(defaultName);
        setPdfUrl(`/api/presentation/file?type=${deckMode}&t=${Date.now()}`);

        // Fetch meta
        const res = await fetch('/api/admin/presentation');
        if (res.ok) {
          const meta = await res.json();
          if (meta && meta[deckMode]) {
            if (meta[deckMode].isCustom) {
              setIsCustom(true);
              setFileName(meta[deckMode].filename || defaultName);
              setFileSize(meta[deckMode].size || 0);
            }
          }
        }
      } catch (err) {
        console.error('Error loading presentation:', err);
      }
    };

    loadPresentation();

    return () => {
      if (activeObjectUrl) {
        URL.revokeObjectURL(activeObjectUrl);
      }
    };
  }, [deckMode]);

  const formatFileSize = (bytes: number) => {
    if (!bytes) return '';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const isRotary = deckMode === 'rotary';

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      {/* ─────────────────────────────────────────────────────────────
          1. SADE & NET ÜST KONTROL ÇUBUĞU (Kullanımı Kolay, Karmaşık Olmayan)
          ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[#0B1E3B] border-b border-white/10 px-4 py-3 shadow-2xl">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Sol Kısım: Geri Dön Butonu & Başlık */}
          <div className="flex items-center gap-3">
            <Link
              href={isRotary ? "/rotary" : "/"}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white cursor-pointer"
              title={isRotary ? "Rotary Sayfasına Dön" : "Ana Sayfaya Dön"}
            >
              <ArrowLeft size={18} />
            </Link>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center p-1">
                {isRotary ? (
                  <RotaryWheel className="w-5 h-5 text-[#F7A81B]" />
                ) : (
                  <Image
                    src="/images/mascot.png"
                    alt="Maskot"
                    width={28}
                    height={28}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <div>
                <span className="font-extrabold text-xs sm:text-sm text-white block leading-none">
                  {isRotary
                    ? 'Rotary & DijitalBüyükanne Resmî Sunumu'
                    : 'DijitalBüyükanne Kurumsal Sunum Dosyası'}
                </span>
                <span className="text-[10px] sm:text-[11px] text-sky-300 font-mono flex items-center gap-1.5 mt-0.5">
                  {isCustom ? (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Özel Yüklenen Güncel PDF Sunumu</span>
                    </>
                  ) : (
                    <span>Hazır PDF Sunum Formatı</span>
                  )}
                  {fileSize > 0 && <span>&bull; {formatFileSize(fileSize)}</span>}
                </span>
              </div>
            </div>
          </div>

          {/* Orta Kısım: Sunum Türü Seçici (Sadece 2 Seçenek: Genel vs Rotary) */}
          <div className="flex items-center p-1 rounded-xl bg-white/10 border border-white/15 text-xs">
            <button
              type="button"
              onClick={() => setDeckMode('general')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                deckMode === 'general'
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Genel Kurumsal Sunum
            </button>
            <button
              type="button"
              onClick={() => setDeckMode('rotary')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                deckMode === 'rotary'
                  ? 'bg-[#F7A81B] text-[#17458F] shadow-sm font-black'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <RotaryWheel className="w-3.5 h-3.5 text-[#F7A81B]" />
              <span>Rotary Özel Sunum</span>
            </button>
          </div>

          {/* Sağ Kısım: PDF İndir & Tam Ekran & PDF Yükle Butonları */}
          <div className="flex items-center gap-2.5">
            {/* Tam Ekranda Aç */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition-all border border-white/15"
              title="Yeni Sekmede Tam Ekran Aç"
            >
              <Maximize2 size={14} />
              <span className="hidden sm:inline">Tam Ekran</span>
            </a>

            {/* Doğrudan PDF İndir Butonu */}
            <a
              href={pdfUrl}
              download={fileName}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-coral to-[#e8634f] hover:from-coral-600 text-white text-xs font-black flex items-center gap-2 shadow-lg shadow-coral/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              title="Hazır PDF dosyasını bilgisayarınıza veya telefonunuza indirin"
            >
              <Download size={15} />
              <span>PDF İndir</span>
            </a>

            {/* Yönetim Paneline Kısayol */}
            <Link
              href="/admin/sunum"
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/90 text-xs font-bold transition-colors border border-white/10"
              title="Yönetim Panelinden Yeni PDF Yükle"
            >
              <UploadCloud size={14} className="text-sky-300" />
              <span>PDF Yükle</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. CANLI PDF GÖRÜNTÜLEYİCİ ALANI (Büyük, Ferah, Odaklanmış)
          ───────────────────────────────────────────────────────────── */}
      <main className="flex-1 p-3 sm:p-6 max-w-[1400px] w-full mx-auto flex flex-col space-y-4">
        {/* Durum Bilgi Şeridi */}
        <div className="bg-slate-950/80 border border-white/10 rounded-2xl px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-sky-400" />
            <span className="font-semibold text-white/90">
              Aktif Belge: <strong className="text-white">{fileName}</strong>
            </span>
            {isCustom && (
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/40 font-bold font-mono">
                Özel Yüklü
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 text-white/60 text-[11px]">
            <span>Tarayıcınızın yerleşik kontrolleriyle sayfaları gezinebilir ve büyütebilirsiniz.</span>
          </div>
        </div>

        {/* Gömülü PDF İframe */}
        <div className="flex-1 w-full min-h-[78vh] rounded-3xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl relative">
          <iframe
            key={`${deckMode}-${pdfUrl}`}
            src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            className="w-full h-full min-h-[78vh] border-0"
            title="PDF Sunum Dosyası"
          />
        </div>
      </main>
    </div>
  );
}

export default function PresentationPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center font-mono">
          Sunum Yükleniyor...
        </div>
      }
    >
      <PresentationDeckInner />
    </Suspense>
  );
}
