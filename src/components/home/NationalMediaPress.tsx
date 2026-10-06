'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  ExternalLink,
  Tv,
  Newspaper,
  Award,
  ShieldCheck,
  Building2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Radio,
  FileCheck2,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  MousePointer,
} from 'lucide-react';

export default function NationalMediaPress() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Continuous ambient auto-scroll with requestAnimationFrame
  useEffect(() => {
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

  const scrollPrev = () => {
    scrollRef.current?.scrollBy({ left: -360, behavior: 'smooth' });
  };
  const scrollNext = () => {
    scrollRef.current?.scrollBy({ left: 360, behavior: 'smooth' });
  };
  const pressItems = [
    {
      publisher: 'Anadolu Ajansı (AA)',
      category: 'Resmî Haber Ajansı',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      tagColor: 'text-sky-600',
      date: '30 Ağustos 2025',
      title: 'Yapay zeka destekli uygulamayla nörogelişimsel bozuklukların erken tanısı sağlanıyor',
      summary:
        'Samsun Teknopark’ta faaliyet gösteren Adapha Yapay Zeka tarafından geliştirilen BabySensAI, bebeklerin doğal hareket kalıplarını analiz ederek nörogelişimsel bozukluk risklerini ilk 6 ayda tespit ediyor.',
      quote:
        '“Evde çekilen kısa bir video üzerinden bebeklerin 18 eklem kinematik analizini yaparak erken müdahale penceresini yakalıyoruz.”',
      url: 'https://www.aa.com.tr/tr/bilim-teknoloji/yapay-zeka-destekli-uygulamayla-norogelisimsel-bozukluklarin-erken-tanisi-saglaniyor/3672361',
      icon: Newspaper,
      status: 'Doğrulanmış Resmî Haber',
    },
    {
      publisher: 'CNN Türk TV',
      category: 'Ulusal TV Ana Haber',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      tagColor: 'text-rose-600',
      date: 'Ulusal TV Yayını',
      title: 'BabySensAI Projesi CNN Türk Ana Haber Bülteninde',
      summary:
        'Bebeklerde Serebral Palsi (CP) ve motor gelişim risklerinin yapay zekâ video analiziyle taranması projesi ulusal televizyon ekranlarında geniş kitlelere aktarıldı.',
      quote:
        '“Erken teşhis hayat kurtarır; bebeklerde ilk 6 ayda yakalanan motor asimetriler kalıcı engelliliğin önüne geçebiliyor.”',
      url: 'https://babysensai.com',
      icon: Tv,
      status: 'Ulusal TV Yayını',
    },
    {
      publisher: 'Habertürk & Haberler.com',
      category: 'Ulusal Dijital Basın',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      tagColor: 'text-amber-700',
      date: '30 Ağustos 2025',
      title: 'Yapay zeka destekli uygulamayla erken tanı: Bebeklerde nöromotor takip',
      summary:
        'Ondokuz Mayıs Üniversitesi (OMÜ) Tıp Fakültesi ve Adapha iş birliğiyle yürütülen çalışma; ailelerin hekime başvurmadan önce güvenilir bir ön değerlendirme almasını sağlıyor.',
      quote:
        '“Teknoloji sayesinde hekime zamanında yönlendirilen bebeklerin tedaviye yanıt oranı %85’in üzerine çıkıyor.”',
      url: 'https://www.haberturk.com/samsun-haberleri/38954805-yapay-zeka-destekli-uygulamayla-norogelisimsel-bozukluklarin-erken-tanisi-saglaniyor',
      icon: Newspaper,
      status: 'Doğrulanmış Basın',
    },
    {
      publisher: 'Haberler.com & Sondakika',
      category: 'Ulusal Portal',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      tagColor: 'text-indigo-600',
      date: '30 Ağustos 2025',
      title: 'Samsun Teknopark’ta Geliştirilen Yapay Zeka Bebek Sağlığında Çığır Açıyor',
      summary:
        'Bebeklerin fizyolojik gelişim süreçleri, ağlama analizi ve motor kabiliyetleri yapay zekâ algoritmalarıyla kesintisiz olarak değerlendiriliyor.',
      quote:
        '“Türkiye’den dünyaya açılan yerli ve millî pediatrik yapay zekâ teknolojisi klinik sahada.”',
      url: 'https://www.haberler.com/guncel/yapay-zeka-destekli-uygulamayla-norogelisimsel-18967963-haberi/',
      icon: Radio,
      status: 'Doğrulanmış Haber',
    },
    {
      publisher: 'OMÜ Tıp Fakültesi & Teknopark',
      category: 'Klinik Doğrulama Raporu',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      tagColor: 'text-emerald-700',
      date: 'Akademik Protokol',
      title: 'OMÜ Tıp Fakültesi ve Adapha İş Birliğiyle Klinik Doğrulama Protokolü',
      summary:
        'Ondokuz Mayıs Üniversitesi Çocuk Nörolojisi ve Pediatri uzmanları gözetiminde yürütülen klinik testler ile algoritmaların doğruluk payı tescillendi.',
      quote:
        '“Akademik bilgi ile derin öğrenme algoritmalarının birleştiği örnek üniversite-sanayi modeli.”',
      url: 'https://www.adapha.com/tr',
      icon: GraduationCap,
      status: 'Klinik Protokol',
    },
    {
      publisher: 'Demirören Haber Ajansı (DHA)',
      category: 'Ajans & Medya Ağı',
      badgeColor: 'bg-cyan-50 text-cyan-800 border-cyan-200',
      tagColor: 'text-cyan-700',
      date: 'Ulusal Servis',
      title: 'Samsun’dan Dünyaya: Bebeklerin Erken Teşhisinde Yapay Zekâ Gücü',
      summary:
        'Belediyeler ve kamu kurumları için geliştirilen Dijital Büyükanne sosyal etki modeliyle binlerce haneye ücretsiz teknolojik takip ulaştırılıyor.',
      quote:
        '“Teknolojiyi sosyal sorumlulukla buluşturan yenilikçi kamu-üniversite-sanayi iş birliği.”',
      url: 'https://babysensai.com',
      icon: Newspaper,
      status: 'Doğrulanmış Haber',
    },
    {
      publisher: 'Haber1 & Ulusal Sağlık Basını',
      category: 'Sağlık & İnovasyon',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      tagColor: 'text-purple-600',
      date: '31 Ağustos 2025',
      title: 'Pediatride Yapay Zekâ Çağı: Bebek Hareketleri Milimetrik Taranıyor',
      summary:
        'Bebeklerin spontan fidgety hareketleri nörolojik ve kas hastalıkları standardında izlenerek hekimlerin tanı sürecine objektif biyometrik veri sunuluyor.',
      quote:
        '“Hastaneye gitmeden önce anne ve babalara bilimsel rehberlik sunan öncü yapay zekâ modeli.”',
      url: 'https://babysensai.com',
      icon: FileCheck2,
      status: 'Klinik İtibar',
    },
    {
      publisher: 'Adapha Biyomedikal AI',
      category: 'Patentli Teknoloji',
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
      tagColor: 'text-blue-700',
      date: 'Ar-Ge Tescili',
      title: 'Derma-41 ve RYPHA Motor Takip Patentli Çözümleri',
      summary:
        '41 farklı pediatrik cilt anomalisi ve 18 eklem kinematik takibi ile Türkiye’nin en kapsamlı erken çocukluk AI ekosistemi.',
      quote:
        '“Güvenilir, bilimsel ve uluslararası klinik rehberlere tam uyumlu yapay zekâ omurgası.”',
      url: 'https://www.adapha.com/tr',
      icon: ShieldCheck,
      status: 'Tescilli Teknoloji',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-[#F5F8FD] via-white to-[#F5F8FD] relative overflow-hidden" id="medya">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-xs">
            <Award size={14} className="text-rose-600" />
            <span>KLİNİK İTİBAR & RESMÎ AJANS ONAYI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1E3B] tracking-tight leading-tight">
            Ulusal Basın ve Medya Vitrini
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            Türkiye&apos;nin önde gelen ulusal televizyon kanalları, resmi haber ajansları ve sağlık medyası; Samsun Teknopark&apos;ta geliştirdiğimiz yapay zekâ tabanlı bebek erken tanı teknolojimizi haberleştirdi.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-[11px] font-semibold text-slate-600">
            <MousePointer size={12} className="text-[#0284C7]" />
            <span>Fareyle tutup sürükleyebilir veya oklara basarak ileri-geri gidebilirsiniz</span>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          AKAN ZEMİN (FLOWING & DRAGGABLE TRACK) - 8 ADET KAPSAMLI HABER KARTI
          ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-4 group select-none">
        
        {/* Left Arrow */}
        <button
          onClick={scrollPrev}
          aria-label="Geri Kaydır"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/95 text-slate-800 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-[#0B1E3B] hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer opacity-80 hover:opacity-100"
          title="Geri Kaydır"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollNext}
          aria-label="İleri Kaydır"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/95 text-slate-800 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-[#0B1E3B] hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer opacity-80 hover:opacity-100"
          title="İleri Kaydır"
        >
          <ChevronRight size={20} />
        </button>

        {/* Kenar Yumuşatma Gölgeleri (Sol & Sağ Fade) */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#F5F8FD] via-[#F5F8FD]/70 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#F5F8FD] via-[#F5F8FD]/70 to-transparent z-10 pointer-events-none" />

        {/* Draggable Viewport */}
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
          {[...pressItems, ...pressItems].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="w-[340px] sm:w-[390px] bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shrink-0 group/card relative"
              >
                <div>
                  {/* Yayıncı & Kategori & Tarih */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 font-medium">
                      {item.date}
                    </span>
                  </div>

                  {/* Başlık ve İkon */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-[#0B1E3B] shrink-0 group-hover/card:bg-[#0284C7] group-hover/card:text-white transition-colors duration-300">
                      <Icon size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 block leading-tight">
                        {item.publisher}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-[#0B1E3B] group-hover/card:text-[#0284C7] transition-colors duration-300 leading-snug mt-0.5 line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Özet */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {item.summary}
                  </p>

                  {/* Alıntı */}
                  <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-100 text-xs italic text-slate-700 leading-snug">
                    {item.quote}
                  </div>
                </div>

                {/* Alt Link & Doğrulama Rozeti */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    {item.status}
                  </span>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:text-sky-700 group-hover/card:gap-2 transition-all"
                  >
                    <span>Haberi Oku</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Marquee CSS Animasyonu */}
      <style>{`
        @keyframes pressMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-press-marquee {
          animation: pressMarquee 50s linear infinite;
        }
        .animate-press-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ─────────────────────────────────────────────────────────────
          AR-GE VE BİYOMEDİKAL YAPAY ZEKÂ ÜSSÜ BANDI
          ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10 relative z-10">
        <div className="bg-gradient-to-r from-[#0B1E3B] via-[#0E2850] to-[#0A1F3D] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Building2 size={13} className="text-emerald-400" />
              <span>AR-GE VE BİYOMEDİKAL YAPAY ZEKÂ ÜSSÜ</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Adapha Yapay Zeka & BabySensAI Teknolojileri
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-2xl leading-relaxed">
              Tüm algoritmalarımız <strong>Ondokuz Mayıs Üniversitesi (OMÜ) Kurupelit Kampüsü Samsun Teknopark</strong> bünyesinde, 
              OMÜ Tıp Fakültesi ve çocuk sağlığı uzmanları danışmanlığında geliştirilmektedir.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://babysensai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-coral to-[#e8634f] hover:from-coral-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-coral/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <span>BabySensAI.com</span>
              <ExternalLink size={14} />
            </a>

            <a
              href="https://www.adapha.com/tr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            >
              <span>Adapha.com/tr</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
