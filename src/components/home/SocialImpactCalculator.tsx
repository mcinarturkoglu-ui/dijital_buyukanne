'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Baby,
  ShieldCheck,
  Heart,
  ArrowRight,
  Sparkles,
  Users,
  Moon,
  Stethoscope,
  TrendingUp,
  Award,
  Zap,
  Globe,
  FileText,
} from 'lucide-react';
import DemoRequestModal from '@/components/home/DemoRequestModal';

interface SocialImpactCalculatorProps {
  onOpenDemoModal?: (count: number) => void;
}

export default function SocialImpactCalculator({ onOpenDemoModal }: SocialImpactCalculatorProps) {
  const [babyCount, setBabyCount] = useState<number>(1000);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalBabyCount, setModalBabyCount] = useState(1000);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Global event listener for demo modal
  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ babyCount?: number }>;
      if (customEvent.detail?.babyCount) {
        setModalBabyCount(customEvent.detail.babyCount);
      } else {
        setModalBabyCount(babyCount);
      }
      setIsModalOpen(true);
    };

    window.addEventListener('open-demo-modal', handleOpen);
    return () => window.removeEventListener('open-demo-modal', handleOpen);
  }, [babyCount]);

  const handleOpenModal = (count: number) => {
    setModalBabyCount(count);
    setIsModalOpen(true);
    onOpenDemoModal?.(count);
  };

  // ─── Etki Hesaplamaları ───
  const earlyDetected = Math.max(1, Math.round(babyCount * 0.044));
  const doctorBridge = Math.max(1, Math.round(babyCount * 0.038));
  const sereneMothers = Math.max(1, Math.round(babyCount * 0.42));
  const qualityHours = babyCount * 24;

  // Slider pozisyon yüzdesi
  const sliderPercent = ((babyCount - 100) / (15000 - 100)) * 100;

  const quickScales = [
    { label: 'Pilot Mahalle', count: 500, emoji: '🏘️' },
    { label: 'İlçe Çapı', count: 1000, emoji: '🏙️' },
    { label: 'Genişletilmiş', count: 2500, emoji: '🌆' },
    { label: 'Metropol İlçe', count: 5000, emoji: '🏛️' },
    { label: 'Büyükşehir', count: 10000, emoji: '🌍' },
  ];

  // Animated counter component
  function AnimatedCounter({ value, suffix = '' }: { value: number | string; suffix?: string }) {
    return (
      <span className="tabular-nums">
        {typeof value === 'number' ? value.toLocaleString('tr-TR') : value}{suffix}
      </span>
    );
  }

  const impactCards = [
    {
      icon: Baby,
      value: earlyDetected,
      suffix: ' Bebek',
      title: 'Erken Fark Edilen Gelişimsel İpucu',
      desc: 'Ev ortamında gözden kaçabilecek motor asimetrileri, sizin desteğinizle zamanında fark edilerek her bebeğe eşit başlangıç hakkı sağlanır.',
      footer: 'Fırsat Eşitliği',
      gradient: 'from-turquoise/15 to-emerald-50/50',
      border: 'border-turquoise/40',
      iconBg: 'bg-turquoise/20',
      iconColor: 'text-turquoise',
      valueBg: 'text-turquoise',
      footerBg: 'bg-turquoise/10 text-teal-800',
    },
    {
      icon: Stethoscope,
      value: doctorBridge,
      suffix: ' Bebek',
      title: 'Zamanında Hekim Köprüsü',
      desc: 'Cilt ve sindirim bulgularında aileler kulaktan dolma bilgilerle vakit kaybetmeden doğrudan uzman çocuk hekimiyle buluşur.',
      footer: 'Kritik Pencere Korunur',
      gradient: 'from-coral/10 to-rose-50/50',
      border: 'border-coral/40',
      iconBg: 'bg-coral/20',
      iconColor: 'text-coral',
      valueBg: 'text-coral',
      footerBg: 'bg-coral/10 text-coral',
    },
    {
      icon: Moon,
      value: sereneMothers,
      suffix: ' Anne',
      title: 'Gece Yalnızlığı Son Bulan Anne',
      desc: 'Gece 03:00\'te bebeği ağlarken çaresiz kalan anneler, evlerinde güvenilir ve bilimsel rehberlik bularak derin bir nefes alır.',
      footer: '7/24 Yanlarında',
      gradient: 'from-blue-50 to-indigo-50/50',
      border: 'border-blue-300/50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      valueBg: 'text-blue-600',
      footerBg: 'bg-blue-50 text-blue-800',
    },
    {
      icon: Heart,
      value: qualityHours.toLocaleString('tr-TR'),
      suffix: ' Saat',
      title: 'Bebekle Geçirilen Huzurlu Zaman',
      desc: 'Gereksiz acil servis koşuşturmaları yerine aileler bu zamanı bebeklerine masal okuyarak, göz teması kurarak sevgiyle geçirir.',
      footer: 'Sevgiyle Büyüme',
      gradient: 'from-emerald-50 to-green-50/50',
      border: 'border-emerald-300/50',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      valueBg: 'text-emerald-600',
      footerBg: 'bg-emerald-50 text-emerald-800',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-[#F8FAFD] via-white to-[#F0F5FA] relative overflow-hidden"
      id="sosyal-etki"
    >
      {/* Background elements */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-turquoise/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-coral/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, #0B2545 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ─── HEADER ─── */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-navy/5 to-turquoise/10 text-navy text-xs font-bold tracking-wider uppercase mb-5 border border-navy/10 backdrop-blur-md">
            <Zap size={14} className="text-turquoise" />
            <span>Sosyal Etki Simülasyonu</span>
          </div>

          <h2 className="text-3xl md:text-[3.2rem] font-extrabold text-navy tracking-tight leading-[1.15]">
            Bir Karar Verin,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise via-teal-500 to-[#0284C7]">
              Bin Hayata Dokunun.
            </span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Kaç bebeği desteklemek istediğinizi seçin — sizin bu tek kararınızın şehrinizde yaratacağı 
            toplumsal dönüşümü gözlerinizle görün.
          </p>
        </div>

        {/* ─── SLIDER CONTROL CARD ─── */}
        <div className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 relative overflow-hidden">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-turquoise/10 to-transparent rounded-bl-full pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative">
              <div>
                <h3 className="text-sm font-bold text-navy flex items-center gap-2">
                  <Globe size={16} className="text-turquoise" />
                  Şehrinizde Kaç Bebeğe Ulaşmak İstiyorsunuz?
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Slider&apos;ı kaydırarak veya aşağıdaki ölçeklerden birini seçerek belirleyin.
                </p>
              </div>

              <div className="inline-flex items-baseline gap-2 bg-gradient-to-r from-navy via-[#0d3461] to-navy px-6 py-3 rounded-2xl shadow-lg shadow-navy/20">
                <span className="text-3xl sm:text-4xl font-black text-turquoise font-mono tracking-tight">
                  {babyCount.toLocaleString('tr-TR')}
                </span>
                <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider">
                  Aile
                </span>
              </div>
            </div>

            {/* Custom Slider */}
            <div className="relative mb-6">
              <div className="relative h-4 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-turquoise to-teal-500 rounded-full transition-all duration-300"
                  style={{ width: `${sliderPercent}%` }}
                />
              </div>
              <input
                type="range"
                min={100}
                max={15000}
                step={100}
                value={babyCount}
                onChange={(e) => setBabyCount(Number(e.target.value))}
                className="absolute inset-0 w-full h-4 opacity-0 cursor-pointer"
              />
              {/* Thumb indicator */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-[3px] border-turquoise rounded-full shadow-lg shadow-turquoise/30 pointer-events-none transition-all duration-300"
                style={{ left: `calc(${sliderPercent}% - 12px)` }}
              />
            </div>

            {/* Quick Scale Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {quickScales.map((item) => (
                <button
                  key={item.count}
                  onClick={() => setBabyCount(item.count)}
                  className={`px-3.5 py-2 rounded-xl text-xs transition-all border flex items-center gap-1.5 ${
                    babyCount === item.count
                      ? 'bg-navy text-white border-navy font-bold shadow-md shadow-navy/15'
                      : 'bg-white text-slate-600 hover:border-slate-300 border-slate-200 font-medium hover:bg-slate-50'
                  }`}
                >
                  <span>{item.emoji}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ─── 4 IMPACT CARDS ─── */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto mb-10 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {impactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-3xl bg-gradient-to-br ${card.gradient} border ${card.border} shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Subtle background circle */}
                <div className={`absolute -right-8 -bottom-8 w-32 h-32 ${card.iconBg} rounded-full opacity-30 group-hover:opacity-50 transition-opacity`} />
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${card.iconBg} ${card.iconColor} flex items-center justify-center shadow-sm`}>
                      <Icon size={24} />
                    </div>
                    <span className={`text-xs font-bold font-mono px-3 py-1 rounded-full ${card.footerBg}`}>
                      {card.footer}
                    </span>
                  </div>

                  <div className={`text-3xl sm:text-4xl font-black ${card.valueBg} font-mono mb-1.5 tracking-tight`}>
                    <AnimatedCounter 
                      value={typeof card.value === 'string' ? card.value : card.value} 
                      suffix={card.suffix} 
                    />
                  </div>
                  
                  <h4 className="text-base font-bold text-slate-800 mb-2">
                    {card.title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── SOCIAL TRANSFORMATION RADAR (Dark Section) ─── */}
        <div className={`max-w-5xl mx-auto mb-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-br from-[#0B2545] via-[#0d3461] to-[#071e37] rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-turquoise/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-turquoise/20 text-turquoise flex items-center justify-center">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h5 className="text-base font-bold text-white">
                      Sosyal Dönüşüm Haritası
                    </h5>
                    <p className="text-[11px] text-white/50">
                      {babyCount.toLocaleString('tr-TR')} ailelik programın şehrinize etkileri
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono px-4 py-1.5 rounded-full bg-turquoise/15 text-turquoise font-bold border border-turquoise/20 self-start sm:self-center flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-pulse" />
                  Canlı Projeksiyon
                </span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/[0.08] text-center hover:bg-white/[0.1] transition-colors">
                  <span className="block text-2xl sm:text-3xl font-black text-turquoise font-mono">%100</span>
                  <span className="text-[11px] font-medium text-white/80 mt-1.5 block">Fırsat Eşitliği</span>
                  <span className="text-[10px] text-white/40">Tüm mahalleler eşit</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/[0.08] text-center hover:bg-white/[0.1] transition-colors">
                  <span className="block text-2xl sm:text-3xl font-black text-coral font-mono">{doctorBridge}</span>
                  <span className="text-[11px] font-medium text-white/80 mt-1.5 block">Erken Hekim Sevki</span>
                  <span className="text-[10px] text-white/40">Gecikmesiz muayene</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/[0.08] text-center hover:bg-white/[0.1] transition-colors">
                  <span className="block text-2xl sm:text-3xl font-black text-blue-400 font-mono">7/24</span>
                  <span className="text-[11px] font-medium text-white/80 mt-1.5 block">Kesintisiz Destek</span>
                  <span className="text-[10px] text-white/40">Annelerin yanında</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.06] border border-white/[0.08] text-center hover:bg-white/[0.1] transition-colors">
                  <span className="block text-2xl sm:text-3xl font-black text-emerald-400 font-mono">%94+</span>
                  <span className="text-[11px] font-medium text-white/80 mt-1.5 block">Vatandaş Memnuniyeti</span>
                  <span className="text-[10px] text-white/40">Kurumsal güven</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-2 pt-3 border-t border-white/[0.06]">
                <span className="flex items-center gap-1.5">
                  <Sparkles size={13} className="text-turquoise" />
                  Pediatri kılavuzları ve sosyal belediyecilik iyi uygulama modelleri referans alınmıştır.
                </span>
                <span className="text-white/30">Klinik tanı koymaz; erken farkındalık köprüsü kurar.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── CTA BAR ─── */}
        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-navy/5 text-navy flex items-center justify-center shrink-0">
                <FileText size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-navy mb-1">
                  Kurumsal Protokol & Meclis Karar Dosyası
                </h4>
                <p className="text-xs text-slate-600 max-w-lg leading-relaxed">
                  Bu sosyal destek modelini kurumunuzun kendi logosu ve markasıyla hayata geçirmek için 
                  <strong> protokol dosyasını ve bütçe tablosunu</strong> hemen talep edebilirsiniz.
                </p>
              </div>
            </div>

            <button
              onClick={() => handleOpenModal(babyCount)}
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-coral to-[#e8634f] text-white font-bold text-sm shrink-0 flex items-center gap-2.5 shadow-xl shadow-coral/25 hover:shadow-2xl hover:shadow-coral/30 hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              <span>Protokol Dosyasını Talep Edin</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>

      {/* Demo / Protokol Başvuru Modalı */}
      <DemoRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialBabyCount={modalBabyCount}
      />
    </section>
  );
}
