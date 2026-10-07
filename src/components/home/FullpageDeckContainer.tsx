'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface SlideInfo {
  id: string;
  badge: string;
  title: string;
  shortName: string;
  category: string;
}

export const slides: SlideInfo[] = [
  { id: 'bolum-1', badge: '01 / 13', title: 'Ekosistem & Bütünsel Vizyon', shortName: 'Vizyon', category: 'Giriş' },
  { id: 'bolum-2', badge: '02 / 13', title: '0–24 Ay Gelişim Simülatörü', shortName: 'Gelişim', category: 'Simülatör' },
  { id: 'bolum-3', badge: '03 / 13', title: 'Geleneksel vs. Dijital Dönüşüm', shortName: 'Karşılaştırma', category: 'Klinik Fark' },
  { id: 'bolum-4', badge: '04 / 13', title: 'AI Hareket Analizi (Prechtl GMs)', shortName: 'Hareket', category: 'Tarama 1' },
  { id: 'bolum-5', badge: '05 / 13', title: 'AI Cilt Analizi (Derma-41)', shortName: 'Cilt', category: 'Tarama 2' },
  { id: 'bolum-6', badge: '06 / 13', title: 'AI Bez & Dışkı Analizi (DSÖ)', shortName: 'Bez & Dışkı', category: 'Tarama 3' },
  { id: 'bolum-7', badge: '07 / 13', title: '7/24 Dijital Aile Asistanı', shortName: 'Asistan', category: 'Rehberlik' },
  { id: 'bolum-8', badge: '08 / 13', title: 'İnsan + AI Denge Radarı', shortName: 'Etik & Radar', category: 'Klinik Güvenlik' },
  { id: 'bolum-9', badge: '09 / 13', title: 'Kapsayıcı Erken Müdahale Simülatörü', shortName: 'Erken Müdahale', category: 'Simülatör' },
  { id: 'bolum-10', badge: '10 / 13', title: 'Kapsayıcı Hizmet Alanlarımız', shortName: 'Hedef Gruplar', category: 'Fırsat Eşitliği' },
  { id: 'bolum-11', badge: '11 / 13', title: 'Bilimsel Güvence & Danışma Kurulu', shortName: 'Bilim Kurulu', category: 'Akademik' },
  { id: 'bolum-12', badge: '12 / 13', title: 'Sosyal Etki & Tasarruf Simülasyonu', shortName: 'Etki Simülatörü', category: 'Kamu & SROI' },
  { id: 'bolum-13', badge: '13 / 13', title: 'Büyük Katılım & Ortaklık Çağrısı', shortName: 'Katılım (CTA)', category: 'Gelecek' },
];

export default function FullpageDeckContainer({ children }: { children: React.ReactNode }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const isLockedRef = useRef(false);

  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= slides.length) return;
    setCurrentSlideIndex(index);
  }, []);

  // Hardware-accelerated wheel scroll controller
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Prevent browser default page scrolling
      e.preventDefault();

      if (isLockedRef.current) return;
      if (Math.abs(e.deltaY) < 18) return;

      if (e.deltaY > 0) {
        // Scroll down -> next slide
        if (currentSlideIndex < slides.length - 1) {
          isLockedRef.current = true;
          setCurrentSlideIndex((prev) => prev + 1);
          setTimeout(() => {
            isLockedRef.current = false;
          }, 800);
        }
      } else {
        // Scroll up -> previous slide
        if (currentSlideIndex > 0) {
          isLockedRef.current = true;
          setCurrentSlideIndex((prev) => prev - 1);
          setTimeout(() => {
            isLockedRef.current = false;
          }, 800);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSlideIndex]);

  // Keyboard navigation (Arrow keys, PageUp/PageDown, Space)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLockedRef.current) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        if (currentSlideIndex < slides.length - 1) {
          isLockedRef.current = true;
          setCurrentSlideIndex((prev) => prev + 1);
          setTimeout(() => {
            isLockedRef.current = false;
          }, 700);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSlideIndex > 0) {
          isLockedRef.current = true;
          setCurrentSlideIndex((prev) => prev - 1);
          setTimeout(() => {
            isLockedRef.current = false;
          }, 700);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  // Touch swipe support for mobile & tablets
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isLockedRef.current) return;
      const diff = touchStartY - e.changedTouches[0].clientY;

      if (Math.abs(diff) > 40) {
        if (diff > 0 && currentSlideIndex < slides.length - 1) {
          isLockedRef.current = true;
          setCurrentSlideIndex((prev) => prev + 1);
          setTimeout(() => {
            isLockedRef.current = false;
          }, 700);
        } else if (diff < 0 && currentSlideIndex > 0) {
          isLockedRef.current = true;
          setCurrentSlideIndex((prev) => prev - 1);
          setTimeout(() => {
            isLockedRef.current = false;
          }, 700);
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSlideIndex]);

  return (
    <div className="fixed inset-x-0 bottom-0 top-[5.25rem] overflow-hidden bg-[#FAFBFD] z-10 select-none">
      {/* Right Side Stage Navigation Rail (Ultra-Slim Minimalist Dots) */}
      <nav
        aria-label="Sunum Yol Haritası"
        className="fixed right-2.5 top-1/2 -translate-y-1/2 z-40 select-none pointer-events-auto"
      >
        <div className="flex flex-col items-center gap-2 py-2.5 px-1 bg-slate-900/60 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
          {slides.map((s, idx) => {
            const isActive = currentSlideIndex === idx;
            return (
              <button
                key={s.id}
                onClick={() => goToSlide(idx)}
                className="group relative flex items-center justify-center p-0.5 focus:outline-none cursor-pointer"
                title={`${s.badge} • ${s.title}`}
              >
                {/* Floating Tooltip Label (Pops to the left on hover) */}
                <div className="absolute right-6 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap bg-slate-900 text-white text-[10px] font-bold py-1 px-2.5 rounded-lg border border-white/15 shadow-xl flex items-center gap-1.5">
                  <span className="font-mono text-sky-400 text-[9px]">{s.badge}</span>
                  <span>{s.shortName}</span>
                </div>

                {/* Micro Dot */}
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-2.5 h-2.5 bg-sky-400 ring-2 ring-sky-400/40 shadow-[0_0_8px_#38BDF8]'
                      : 'w-1.5 h-1.5 bg-white/40 group-hover:bg-white group-hover:scale-125'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Hardware-Accelerated Sliding Track */}
      <div
        className="w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `translate3d(0, -${currentSlideIndex * 100}%, 0)` }}
      >
        {children}
      </div>

      {/* Floating Bottom Navigation Stepper */}
      <footer className="fixed bottom-3.5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 pointer-events-auto">
        {currentSlideIndex < slides.length - 1 ? (
          <button
            onClick={() => goToSlide(currentSlideIndex + 1)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 hover:bg-white text-slate-800 hover:text-sky-600 text-xs font-bold shadow-md border border-slate-200/90 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Sonraki: {slides[currentSlideIndex + 1].shortName}</span>
            <ChevronDown className="w-3.5 h-3.5 text-sky-500 animate-bounce" />
          </button>
        ) : (
          <button
            onClick={() => goToSlide(0)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1E3B] text-white hover:bg-sky-700 text-xs font-bold shadow-md transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Başa Dön (01 / 13)</span>
            <ChevronUp className="w-3.5 h-3.5 text-sky-400" />
          </button>
        )}
      </footer>
    </div>
  );
}
