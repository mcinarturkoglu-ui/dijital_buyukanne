'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface StorySectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  chapterBadge?: string;
  storyStep?: string;
  stageRole?: string;
}

export default function StorySection({
  children,
  id,
  className = '',
  chapterBadge,
  storyStep,
  stageRole,
}: StorySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Section is marked active when 20% or more is within view
        setIsActive(entry.isIntersecting);
      },
      {
        threshold: [0.15, 0.4],
        rootMargin: '-8% 0px -8% 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`story-section relative scroll-mt-20 transition-all duration-500 ease-out ${
        isActive
          ? 'ring-1 ring-sky-300/60 shadow-[0_4px_30px_rgba(2,132,199,0.06)] bg-white/95'
          : 'ring-1 ring-slate-100/80 bg-slate-50/40'
      } rounded-3xl mx-2 sm:mx-4 my-6 sm:my-8 overflow-hidden ${className}`}
    >
      {/* Chapter Stage Header Bar (Giriş ve Bölüm Sahnesi Başlığı) */}
      {(chapterBadge || storyStep) && (
        <div
          className={`px-4 sm:px-8 py-3.5 border-b transition-colors flex flex-wrap items-center justify-between gap-3 ${
            isActive
              ? 'bg-gradient-to-r from-sky-50/90 via-white to-sky-50/50 border-sky-200/80'
              : 'bg-slate-50/80 border-slate-200/70'
          }`}
        >
          {/* Sol: Bölüm & Adım */}
          <div className="flex items-center gap-2.5">
            <span
              className={`w-2 h-2 rounded-full transition-all ${
                isActive ? 'bg-[#0284C7] ring-4 ring-sky-100 animate-pulse' : 'bg-slate-300'
              }`}
            />
            {chapterBadge && (
              <span className="font-mono text-[11px] font-bold tracking-wider text-sky-800 bg-sky-100/70 px-2.5 py-0.5 rounded-full border border-sky-200/60">
                {chapterBadge}
              </span>
            )}
            {storyStep && (
              <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight">
                {storyStep}
              </span>
            )}
          </div>

          {/* Sağ: Sisteme Katkısı / Rolü */}
          {stageRole && (
            <div className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200/80 shadow-2xs">
              <span className="text-sky-500 font-bold">●</span>
              <span>{stageRole}</span>
            </div>
          )}
        </div>
      )}

      {/* Ana İçerik: Her zaman %100 keskin, berrak ve okunabilir */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}
