'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Maximize2,
  Minimize2,
  FileText,
  Layers
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
  const [fileName, setFileName] = useState(
    initialDeck === 'rotary' ? 'rotary-dijital-buyukanne-sunum.pdf' : 'dijital-buyukanne-sunum.pdf'
  );

  const viewerContainerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

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
          setFileName(local.filename);
          return;
        }

        // 2. Fallback to server API
        const defaultName = deckMode === 'rotary' ? 'rotary-dijital-buyukanne-sunum.pdf' : 'dijital-buyukanne-sunum.pdf';
        setFileName(defaultName);
        setPdfUrl(`/api/presentation/file?type=${deckMode}&t=${Date.now()}`);

        // Fetch meta
        const res = await fetch('/api/admin/presentation');
        if (res.ok) {
          const meta = await res.json();
          if (meta && meta[deckMode]?.filename) {
            setFileName(meta[deckMode].filename);
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

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      viewerContainerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const isRotary = deckMode === 'rotary';

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      {/* ─────────────────────────────────────────────────────────────
          1. SADE & NET ÜST KONTROL ÇUBUĞU (Yalnızca Görüntüleme, İndirme ve Yükleme Yok)
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
                  <span>Resmî Sunum Görüntüleyici</span>
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

          {/* Sağ Kısım: Sadece Tam Ekran Butonu (İndirme ve Yükleme Yok) */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={toggleFullscreen}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-2 transition-all border border-white/15 cursor-pointer hover:scale-102 active:scale-98"
              title={isFullscreen ? "Tam Ekrandan Çık" : "Sunumu Tam Ekranda İncele"}
            >
              {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
              <span>{isFullscreen ? 'Küçült' : 'Tam Ekran'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. CANLI PDF GÖRÜNTÜLEYİCİ ALANI (İndirme/Araç Çubuğu Kapalı)
          ───────────────────────────────────────────────────────────── */}
      <main className="flex-1 p-3 sm:p-6 max-w-[1400px] w-full mx-auto flex flex-col space-y-3">
        {/* Durum Bilgi Şeridi */}
        <div className="bg-slate-950/80 border border-white/10 rounded-2xl px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-white/80">
            <FileText size={15} className="text-sky-400" />
            <span className="font-medium text-[11px] sm:text-xs">
              Resmî Sunum Dosyası: <strong className="text-white font-semibold">{fileName}</strong>
            </span>
          </div>

          <div className="text-white/50 text-[11px]">
            Slaytlar arasında farenizle kaydırarak veya dokunmatik ekranınızla gezinebilirsiniz.
          </div>
        </div>

        {/* Gömülü PDF İframe (toolbar=0 ile indirme ve yazdırma butonları gizlenir) */}
        <div
          ref={viewerContainerRef}
          className={`w-full rounded-3xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl relative ${
            isFullscreen ? 'h-screen rounded-none border-0' : 'flex-1 min-h-[78vh]'
          }`}
        >
          <iframe
            key={`${deckMode}-${pdfUrl}`}
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
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
