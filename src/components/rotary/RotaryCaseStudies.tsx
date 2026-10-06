'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import {
  Quote,
  Heart,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MousePointer,
  Award,
} from 'lucide-react';

// Official Rotary Wheel SVG Component
function RotaryWheelSmall({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="4" />
      {Array.from({ length: 24 }).map((_, i) => (
        <rect
          key={i}
          x="47.5"
          y="0"
          width="5"
          height="8"
          rx="1"
          transform={`rotate(${i * 15} 50 50)`}
          fill="currentColor"
        />
      ))}
      <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="4" />
      {Array.from({ length: 6 }).map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2="50"
          y2="12"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          transform={`rotate(${i * 60} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="16" fill="currentColor" />
      <circle cx="50" cy="50" r="8" fill="#17458F" />
      <rect x="47.5" y="42" width="5" height="6" fill="#17458F" />
    </svg>
  );
}

// Empty array for live deployment; stories will be entered when verified
const rotaryCases: any[] = [];

export default function RotaryCaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate for seamless endless looping
  const displayCases = [...rotaryCases, ...rotaryCases];

  // Continuous ambient auto-scroll with requestAnimationFrame
  useEffect(() => {
    if (rotaryCases.length === 0) return;
    const container = scrollRef.current;
    if (!container) return;
    let animationId: number;

    const scrollSpeed = 0.7; // px per frame

    const autoLoop = () => {
      if (!isHovered && !isDragging) {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollSpeed;
        }
      }
      animationId = requestAnimationFrame(autoLoop);
    };

    animationId = requestAnimationFrame(autoLoop);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeftPos(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  // Manual Arrow Scroll Helpers
  const scrollPrev = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  };
  const scrollNext = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#F0F5FC] via-white to-[#F0F5FC] border-b border-slate-200 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#17458F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#F7A81B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#17458F]/20 text-[#17458F] text-[11px] font-mono font-bold tracking-widest uppercase shadow-xs mb-2">
          <RotaryWheelSmall className="w-4 h-4 text-[#F7A81B]" />
          <span>KULÜPLERİMİZİN DOKUNDUĞU GERÇEK HAYATLAR</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
          Teknoloji Bilimdir. Bir Bebeğin Adımı İse{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17458F] via-[#0067C8] to-[#F7A81B]">
            Hayata Tutunan Bir Mucizedir.
          </span>
        </h2>

        <p className="mt-2 text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Rotary kulüplerimizin &ldquo;Kendinden Önce Hizmet&rdquo; idealiyle desteklediği ailelerimizin gerçek başarı öyküleri.
        </p>

        {rotaryCases.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-[11px] text-slate-600 font-medium">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
              <MousePointer size={12} className="text-[#17458F]" />
              <span>Fareyle tutup sürükleyebilir veya oklarla gezinebilirsiniz</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[#17458F]">
              <Award size={13} className="text-[#F7A81B]" />
              Rotary 7 Odak Alanı Uyumlu
            </span>
          </div>
        )}
      </div>

      {rotaryCases.length === 0 ? (
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#17458F]/10 text-[#17458F] flex items-center justify-center mx-auto shadow-inner">
              <RotaryWheelSmall className="w-6 h-6 text-[#17458F]" />
            </div>
            
            <h3 className="text-base sm:text-lg font-black text-slate-900">
              Doğrulanmış Rotary Kulüp Hikayeleri Yakında
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
              Kulüplerimizin sahadaki anne ve çocuk sağlığı projeleri tamamlandıkça, doğrulanmış etki hikayeleri ve aile kazanımları bu alanda paylaşılacaktır.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-600">
                <CheckCircle2 size={12} className="text-emerald-500" />
                <span>Rotary Anne & Çocuk Sağlığı Standartları</span>
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* DRAGGABLE & INFINITE FLOWING TRACK CONTAINER */
        <div className="relative w-full max-w-[1440px] mx-auto px-4 group">
          {/* Left Manual Arrow Button */}
          <button
            onClick={scrollPrev}
            aria-label="Önceki Slaytlar"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 text-[#17458F] shadow-xl border border-slate-200 flex items-center justify-center hover:bg-[#17458F] hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer opacity-80 hover:opacity-100"
            title="Geri Kaydır"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Manual Arrow Button */}
          <button
            onClick={scrollNext}
            aria-label="Sonraki Slaytlar"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 text-[#17458F] shadow-xl border border-slate-200 flex items-center justify-center hover:bg-[#17458F] hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer opacity-80 hover:opacity-100"
            title="İleri Kaydır"
          >
            <ChevronRight size={20} />
          </button>

          {/* Soft edge gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#F0F5FC] via-[#F0F5FC]/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#F0F5FC] via-[#F0F5FC]/70 to-transparent z-10 pointer-events-none" />

          {/* Scrollable Viewport */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsHovered(true)}
            className="flex gap-4 overflow-x-auto no-scrollbar py-2 px-2 select-none cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {displayCases.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                className="w-[280px] sm:w-[310px] shrink-0 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#17458F] transition-all duration-300 flex flex-col justify-between overflow-hidden group/card"
              >
                {/* Card Header with Compact Photo & Rotary Club Badge */}
                <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-slate-100">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title || 'Rotary Projesi'}
                      fill
                      sizes="(max-width: 640px) 280px, 310px"
                      className="object-cover group-hover/card:scale-105 transition-transform duration-500 pointer-events-none"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/35 to-transparent pointer-events-none" />

                  {item.club && (
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#17458F]/95 backdrop-blur-md text-white text-[10px] font-black shadow-sm border border-white/20">
                      <RotaryWheelSmall className="w-3 h-3 text-[#F7A81B]" />
                      <span>{item.club}</span>
                    </div>
                  )}

                  {item.tier && (
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-[#F7A81B] text-[#17458F] text-[9px] font-black uppercase tracking-wider shadow-xs">
                      {item.tier}
                    </div>
                  )}

                  <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                    {item.resultBadge && (
                      <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-600/90 text-white text-[9px] font-bold backdrop-blur-sm mb-0.5">
                        {item.resultBadge}
                      </span>
                    )}
                    {item.title && (
                      <h3 className="text-xs sm:text-[13px] font-black leading-snug drop-shadow-sm line-clamp-1">
                        {item.title}
                      </h3>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-3.5 space-y-2.5 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1.5 font-mono">
                      <span className="font-bold text-[#17458F] truncate max-w-[150px]">{item.category}</span>
                      {item.babyAge && (
                        <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 font-sans truncate">
                          {item.babyAge.split('→')[0]}
                        </span>
                      )}
                    </div>

                    {item.summary && (
                      <p className="text-[11px] text-slate-600 leading-snug line-clamp-2">
                        {item.summary}
                      </p>
                    )}
                  </div>

                  {item.journey && item.journey.length > 0 && (
                    <div className="space-y-1 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[10px]">
                      <p className="font-bold text-slate-400 uppercase tracking-wider text-[9px]">
                        Gelişim Yolculuğu
                      </p>
                      {item.journey.map((step: any, sIdx: number) => (
                        <div key={sIdx} className="flex items-start gap-1.5 text-slate-700">
                          <span className="font-bold text-[#17458F] shrink-0">
                            {step.label}:
                          </span>
                          <span className="leading-tight text-slate-600 line-clamp-1">{step.step}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.quote && (
                    <div className="relative p-2.5 rounded-xl bg-amber-50/70 border border-[#F7A81B]/30 space-y-1">
                      <Quote size={13} className="text-[#F7A81B] absolute -top-1.5 -left-1 bg-white rounded-full p-0.5 border border-[#F7A81B]/40" />
                      <p className="text-[10px] italic text-slate-700 leading-snug line-clamp-2">
                        &ldquo;{item.quote}&rdquo;
                      </p>

                      <div className="flex items-center justify-between pt-1 border-t border-amber-200/60 text-[10px]">
                        <span className="font-bold text-slate-900 truncate">{item.author}</span>
                        <span className="text-slate-500 font-mono text-[9px] shrink-0">{item.location}</span>
                      </div>
                    </div>
                  )}

                  <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                    <span className="flex items-center gap-1 text-emerald-600 font-bold">
                      <CheckCircle2 size={12} />
                      Rotary Onaylı
                    </span>
                    <span className="text-[9px] text-slate-400 font-mono">0–6 Ay Erken Teşhis</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
