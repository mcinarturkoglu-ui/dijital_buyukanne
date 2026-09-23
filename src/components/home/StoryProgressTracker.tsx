'use client';

import { useState, useEffect } from 'react';

interface Chapter {
  id: string;
  actNumber: string;
  title: string;
  shortLabel: string;
}

const chapters: Chapter[] = [
  { id: 'bolum-1', actNumber: '01', title: 'Ekosistem ve Vizyon', shortLabel: 'Giriş & Vizyon' },
  { id: 'bolum-2', actNumber: '02', title: '0–24 Ay Gelişim Takibi', shortLabel: 'Gelişim Takibi' },
  { id: 'bolum-3', actNumber: '03', title: 'Yapay Zekâ Tarama Protokolleri', shortLabel: 'Erken Tarama' },
  { id: 'bolum-4', actNumber: '04', title: '7/24 Dijital Asistan & Hekim Güvencesi', shortLabel: 'Klinik Destek' },
  { id: 'bolum-5', actNumber: '05', title: 'Kapsayıcı Sağlık & Bilim Kurulu', shortLabel: 'Kapsayıcılık & Bilim' },
  { id: 'bolum-6', actNumber: '06', title: 'Kurumsal Model & Sosyal Etki', shortLabel: 'Kamu & Sosyal Etki' },
];

export default function StoryProgressTracker() {
  const [activeChapter, setActiveChapter] = useState('bolum-1');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      for (let i = chapters.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapters[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveChapter(chapters[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isVisible) return null;

  return (
    <nav
      aria-label="Sayfa Navigasyon Çubuğu"
      className="fixed right-3 xl:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end select-none pointer-events-auto"
    >
      <div className="bg-slate-950/80 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-2xl flex flex-col gap-2.5">
        {chapters.map((ch) => {
          const isActive = activeChapter === ch.id;
          return (
            <button
              key={ch.id}
              onClick={() => scrollToChapter(ch.id)}
              className="group flex items-center justify-end gap-2.5 transition-all focus:outline-none"
              title={`${ch.actNumber} • ${ch.title}`}
            >
              {/* Tooltip / Label */}
              <div
                className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs transition-all duration-200 pointer-events-none whitespace-nowrap shadow-sm ${
                  isActive
                    ? 'opacity-100 translate-x-0 bg-white text-navy font-bold'
                    : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 bg-slate-900/90 text-white/90 border border-white/10 font-medium'
                }`}
              >
                <span className={`font-mono text-[10px] ${isActive ? 'text-turquoise' : 'text-slate-400'}`}>
                  {ch.actNumber}
                </span>
                <span>{ch.shortLabel}</span>
              </div>

              {/* Indicator Pip */}
              <div
                className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-6 h-6 bg-turquoise/20 border border-turquoise text-turquoise'
                    : 'w-4 h-4 bg-white/10 hover:bg-white/30 border border-white/10'
                }`}
              >
                {isActive ? (
                  <span className="w-2 h-2 rounded-full bg-turquoise shadow-[0_0_8px_rgba(13,177,173,0.8)]" />
                ) : (
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
