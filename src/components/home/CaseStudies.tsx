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
  Sparkles,
  Clock,
  ShieldCheck
} from 'lucide-react';

export default function CaseStudies({ cmsData }: {
  cmsData?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    cases?: any[];
  };
} = {}) {
  // Purge any old deprecated admin cache from user's browser
  useEffect(() => {
    try {
      localStorage.removeItem('dijitalbuyukanne_site_content');
    } catch {}
  }, []);

  const activeCms = cmsData;
  const finalCases: any[] = activeCms?.cases || [];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (finalCases.length === 0) return;
    const container = scrollRef.current;
    if (!container) return;
    let animationId: number;
    const scrollSpeed = 0.7;

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
  }, [isHovered, isDragging, finalCases.length]);

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

  const scrollPrev = () => {
    scrollRef.current?.scrollBy({ left: -360, behavior: 'smooth' });
  };
  const scrollNext = () => {
    scrollRef.current?.scrollBy({ left: 360, behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 via-white to-[#F5F8FD] relative overflow-hidden" id="basari-hikayeleri">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-sky-700 bg-sky-50 border border-sky-200 px-3.5 py-1 rounded-full mb-3 shadow-2xs">
            <Heart size={13} className="text-coral fill-coral" />
            <span>{activeCms?.eyebrow || 'GERÇEK HAYATTAN ETKİ HİKAYELERİ'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B1E3B] tracking-tight leading-tight">
            {activeCms?.title ? (
              <span dangerouslySetInnerHTML={{ __html: activeCms.title }} />
            ) : (
              <>
                Teknoloji bilimdir. Bir bebeğin adımı ise <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] to-coral">
                  hayata tutunan bir mucizedir.
                </span>
              </>
            )}
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            {activeCms?.subtitle || 'DijitalBüyükanne ekosistemiyle erken fark edilen, zamanında desteklenen ailelerimizin ve öncü belediyelerimizin başarı yolculukları.'}
          </p>

          {finalCases.length > 0 && (
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-semibold text-slate-600 shadow-2xs">
              <MousePointer size={12} className="text-[#0284C7]" />
              <span>Fareyle tutup sürükleyebilir veya oklara basarak ileri-geri gidebilirsiniz</span>
            </div>
          )}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          HİKAYELER ALANI (GÜNCELLEME AŞAMASINDA BİLGİLENDİRME KARTI)
          ───────────────────────────────────────────────────────────── */}
      {finalCases.length === 0 ? (
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-sm border border-slate-200/90 shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200/60 flex items-center justify-center mx-auto shadow-inner">
              <Clock size={22} className="text-amber-600 animate-pulse" />
            </div>
            
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100/70 text-amber-800 text-[10px] font-bold font-mono uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                <span>Güncelleme Aşamasında</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-[#0B1E3B]">
                Gerçek Hayat ve Saha Hikayeleri Hazırlanıyor
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                Klinik etik protokolleri ve ailelerimizin resmî izin/onay süreçleri doğrultusunda, sahada doğrulanmış gelişim hikayeleri ve başarı deneyimleri çok yakında bu alanda paylaşılacaktır.
              </p>
            </div>

            <div className="pt-1 flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-600">
                <ShieldCheck size={12} className="text-sky-600" />
                <span>KVKK & Etik İzin Süreci Devam Ediyor</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-600">
                <CheckCircle2 size={12} className="text-emerald-500" />
                <span>Doğrulanmış Klinik Veri</span>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full max-w-[1440px] mx-auto px-4 py-4 group select-none">
          <button
            onClick={scrollPrev}
            aria-label="Geri Kaydır"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/95 text-slate-800 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-[#0B1E3B] hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer opacity-80 hover:opacity-100"
            title="Geri Kaydır"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={scrollNext}
            aria-label="İleri Kaydır"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/95 text-slate-800 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-[#0B1E3B] hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer opacity-80 hover:opacity-100"
            title="İleri Kaydır"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50 via-slate-50/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#F5F8FD] via-[#F5F8FD]/70 to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsHovered(true)}
            className="flex gap-6 overflow-x-auto no-scrollbar py-2 px-2 select-none cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...finalCases, ...finalCases].map((item, idx) => (
              <div
                key={idx}
                className="w-[340px] sm:w-[380px] bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-sky-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shrink-0 overflow-hidden group/card"
              >
                <div>
                  {item.image && (
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={item.image}
                        alt={item.title || 'Hikaye'}
                        fill
                        sizes="(max-width: 768px) 340px, 380px"
                        className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        {item.category && (
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[#0B1E3B] shadow-xs">
                            {item.category}
                          </span>
                        )}
                        {item.badge && (
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-black/50 text-white backdrop-blur-md">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {item.resultBadge && (
                        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold bg-[#0284C7]/90 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-xs">
                            {item.resultBadge}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-5">
                    {item.babyAge && (
                      <span className="text-[11px] font-mono font-semibold text-[#0284C7] block mb-1">
                        {item.babyAge}
                      </span>
                    )}
                    
                    {item.title && (
                      <h3 className="text-sm sm:text-base font-black text-[#0B1E3B] leading-snug mb-1.5 group-hover/card:text-[#0284C7] transition-colors">
                        {item.title}
                      </h3>
                    )}

                    {item.summary && (
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        {item.summary}
                      </p>
                    )}

                    {item.journey && item.journey.length > 0 && (
                      <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 space-y-1.5 mb-3">
                        {item.journey.map((j: any, jIdx: number) => (
                          <div key={jIdx} className="flex items-start gap-2 text-xs">
                            <span className="text-[9px] font-black uppercase text-[#0284C7] bg-white border border-sky-100 px-1 py-0.5 rounded shrink-0">
                              {j.label}
                            </span>
                            <span className="text-slate-600 text-[10px] leading-tight">
                              {j.step}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.quote && (
                      <div className="p-3 rounded-2xl bg-gradient-to-r from-sky-50/60 to-rose-50/40 border border-slate-100 text-xs italic text-slate-700 leading-relaxed relative">
                        <Quote size={12} className="text-[#0284C7] mb-0.5 opacity-70" />
                        &ldquo;{item.quote}&rdquo;
                      </div>
                    )}
                  </div>
                </div>

                {(item.author || item.location) && (
                  <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs shadow-xs">
                        {item.avatar || item.emoji || '👶'}
                      </div>
                      <div>
                        {item.author && (
                          <h4 className="text-xs font-bold text-[#0B1E3B] leading-tight">
                            {item.author}
                          </h4>
                        )}
                        {item.location && (
                          <p className="text-[10px] text-slate-500 font-mono">
                            {item.location}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 font-mono">
                      <CheckCircle2 size={12} />
                      <span>Doğrulanmış Vaka</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
