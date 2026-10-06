'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface StorySectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  chapterBadge?: string;
  storyStep?: string;
}

export default function StorySection({
  children,
  id,
  className = '',
  chapterBadge,
  storyStep,
}: StorySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Active when at least 25% of the section is visible in viewport
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: [0.15, 0.4],
        rootMargin: '-5% 0px -5% 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={`story-section relative transition-all duration-700 ease-out ${
        isInView
          ? 'opacity-100 scale-100 filter-none translate-y-0'
          : 'opacity-40 scale-[0.985] blur-[1px] translate-y-3 pointer-events-none sm:pointer-events-auto'
      } ${className}`}
    >
      {/* Chapter Indicator Bar on Focus */}
      {chapterBadge && (
        <div
          className={`absolute top-4 left-6 z-20 pointer-events-none transition-all duration-500 hidden xl:flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase border shadow-2xs ${
            isInView
              ? 'opacity-100 -translate-y-0 bg-white/95 text-[#0B1E3B] border-sky-200'
              : 'opacity-0 -translate-y-2 bg-transparent text-transparent border-transparent'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-pulse" />
          <span className="font-bold">{chapterBadge}</span>
          {storyStep && (
            <>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500 font-sans">{storyStep}</span>
            </>
          )}
        </div>
      )}

      {children}
    </div>
  );
}
