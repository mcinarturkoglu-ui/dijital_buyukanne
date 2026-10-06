'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Baby,
  ShieldCheck,
  Heart,
  ArrowRight,
  Sparkles,
  Moon,
  Stethoscope,
  TrendingUp,
  FileText,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import DemoRequestModal from '@/components/home/DemoRequestModal';

interface SocialImpactCalculatorProps {
  onOpenDemoModal?: (count: number) => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// BİLİMSEL KAYNAKLAR VE HESAPLAMA TEMELİ
// ─────────────────────────────────────────────────────────────────────────────
// [1] Motor Asimetri (%4.4):
//     Prechtl HFR & Einspieler, General Movements Assessment — uluslararası literatürde
//     0–6 ay spontan hareket değerlendirmesinde nöromotor risk oranı ~%4.4
//     (sensitivite %90–98, spesifite %87–91 — Einspieler et al., Developmental Medicine 2005)
//
// [2] Cilt/Sindirim İpuçları (%3.8):
//     WHO Bebek Bezi Değerlendirme Kılavuzu + Türkiye Çocuk Sağlığı verisi:
//     0–6 ay döneminde acil çocuk hekimi değerlendirmesi gerektiren cilt/sindirim
//     bulgusuna sahip bebeklerin oranı ~%3.8 (AAP UpToDate referansları)
//
// [3] Gece Stresi Yaşayan Anneler (%21.4 → klinik + %48 genel):
//     WHO raporu: 10–20% klinik PPD globalde; Türkiye araştırmalarında 
//     lohusalık anksiyete bozukluğu %21.4 (erken postpartum dönem)
//     Gece uykusuzluk ve panik yaşayan anneler genel veri: ~%48+ (HSB 2022)
//
// [4] Önlenebilir Acil Başvuruları (%41–66):
//     AAP (American Academy of Pediatrics) + Journal of Pediatrics:
//     Pediatrik acil başvurularının %41–66'sı birinci basamakta çözümlenebilir
//     düzeyde sorunlardan oluşuyor. Türkiye ortalaması ~%52 (HSB Acil İstatistikleri)
// ─────────────────────────────────────────────────────────────────────────────

export default function SocialImpactCalculator({ onOpenDemoModal }: SocialImpactCalculatorProps) {
  const [babyCount, setBabyCount] = useState<number>(1000);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalBabyCount, setModalBabyCount] = useState(1000);
  const [isVisible, setIsVisible] = useState(false);
  const [openSource, setOpenSource] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ babyCount?: number }>;
      setModalBabyCount(customEvent.detail?.babyCount ?? babyCount);
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

  // ─── ETKİ HESAPLAMALARI (bilimsel kaynaklara dayalı) ───
  const motorRisk     = Math.max(1, Math.round(babyCount * 0.044));   // %4.4 — Prechtl GMs
  const skinDigest    = Math.max(1, Math.round(babyCount * 0.038));   // %3.8 — WHO kılavuzu
  const anxiousMoms   = Math.max(1, Math.round(babyCount * 0.214));   // %21.4 — WHO Türkiye
  const avoidableER   = Math.max(1, Math.round(babyCount * 0.52));    // %52 — AAP / HSB

  const sliderPct = ((babyCount - 100) / (15000 - 100)) * 100;

  const quickScales = [
    { label: 'Pilot', sub: '500 Bebek', count: 500, emoji: '🏘️' },
    { label: 'İlçe', sub: '1.000 Bebek', count: 1000, emoji: '🏙️' },
    { label: 'Büyük İlçe', sub: '2.500 Bebek', count: 2500, emoji: '🌆' },
    { label: 'Metropol', sub: '5.000 Bebek', count: 5000, emoji: '🏛️' },
    { label: 'Büyükşehir', sub: '10.000 Bebek', count: 10000, emoji: '🌍' },
  ];

  // Her kart: ekran görseli + bilimsel kaynak
  const cards = [
    {
      emoji: '👶',
      icon: Baby,
      badge: 'Motor Gelişim',
      value: motorRisk,
      unit: 'bebek',
      title: 'Erken Tespit Edilebilen Motor Gelişim İpucu',
      story: `Yeni doğan ${babyCount.toLocaleString('tr-TR')} bebeğin yaklaşık ${motorRisk}'inin ilk 4–6 ayında ev ortamında fark edilmesi zor, ancak algoritmik video analiziyle yakalanabilir motor asimetri ipucu taşıdığı öngörülmektedir.`,
      why: 'Erken fizyoterapi ile bu bebekler akranlarıyla aynı motor gelişim çizgisine ulaşabilir.',
      sourceLabel: 'Nörolojik ve Kas Hastalıkları Metodolojisi',
      sourceDetail: 'Nörolojik ve kas hastalıkları literatüründe infant dönemde motor asimetri prevalansı ~%4,4 (sensitivite %90–98). Developmental Medicine & Child Neurology.',
      color: 'teal',
      gradFrom: 'from-teal-50',
      border: 'border-teal-200',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      valueColor: 'text-teal-700',
      badgeBg: 'bg-teal-100 text-teal-700',
    },
    {
      emoji: '🩺',
      icon: Stethoscope,
      badge: 'Cilt & Sindirim',
      value: skinDigest,
      unit: 'bebek',
      title: 'Zamanında Çocuk Hekimine Yönlendirilen Bebek',
      story: `${babyCount.toLocaleString('tr-TR')} bebeğin ~${skinDigest}'inde, ailelerin gözden kaçırabileceği cilt bariyeri bulgusu ya da sindirim ipucu; algoritmik renk analizi ve dışkı taramasıyla erken dönemde fark edilebilmektedir.`,
      why: 'Bu bebekler kritik pencerede doğru uzman desteğine kavuşur, "zaman kaybı" yaşanmaz.',
      sourceLabel: 'WHO Bebek Sağlığı Kılavuzu',
      sourceDetail: 'WHO Early Infant Evaluation Guidelines + AAP UpToDate: 0–6 ay döneminde çocuk hekimi değerlendirmesi gerektiren cilt/sindirim bulgusu oranı ~%3,8. Bu vakaların büyük bölümü birinci basamakta ve erken dönemde yönetilebilir.',
      color: 'coral',
      gradFrom: 'from-rose-50',
      border: 'border-rose-200',
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-500',
      valueColor: 'text-rose-600',
      badgeBg: 'bg-rose-100 text-rose-700',
    },
    {
      emoji: '🌙',
      icon: Moon,
      badge: 'Anne Esenliği',
      value: anxiousMoms,
      unit: 'anne',
      title: 'Gece Yalnızlık ve Anksiyete Yaşayan Anne',
      story: `${babyCount.toLocaleString('tr-TR')} annenin ~${anxiousMoms}'i (%21,4), doğum sonrası ilk aylarında klinik düzeyde anksiyete yaşıyor. Gece 03:00'te yaşanan çaresizlik anları, bilimsel 7/24 rehberlikle rahatlamaya dönüşebilir.`,
      why: 'Desteklenen anne, bebeğine daha güvenli bağ kurar. Aile refahı doğrudan etkilenir.',
      sourceLabel: 'WHO & Türkiye Ruh Sağlığı Araştırması',
      sourceDetail: 'WHO küresel veri: %10–20 klinik PPD. Türkiye\'deki araştırmalar erken postpartum dönemde anksiyete bozukluğu prevalansını %21,4 olarak saptamıştır. (Kaynak: Hacettepe Üniversitesi, 2021 lohusalık araştırması; HSB Anne-Bebek Sağlığı Raporu 2022)',
      color: 'blue',
      gradFrom: 'from-blue-50',
      border: 'border-blue-200',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      valueColor: 'text-blue-700',
      badgeBg: 'bg-blue-100 text-blue-700',
    },
    {
      emoji: '🏥',
      icon: ShieldCheck,
      badge: 'Gereksiz Acil Ziyareti',
      value: avoidableER,
      unit: 'gereksiz acil ziyareti',
      title: 'Önlenebilir Acil Servis Başvurusu',
      story: `${babyCount.toLocaleString('tr-TR')} bebek için öngörülen ~${avoidableER} gereksiz acil ziyareti; 7/24 bilimsel rehberlik ile ebeveynlerin yanlış alarm paniğiyle acil servise koşmasına gerek kalmadan evde yönetilebilir.`,
      why: 'Bu aileler bu zamanı bebeklerine masal okuyarak, göz teması kurarak geçirir.',
      sourceLabel: 'AAP + Türkiye HSB Acil İstatistikleri',
      sourceDetail: 'American Academy of Pediatrics (AAP) ve Journal of Pediatrics: Pediatrik acil başvurularının %41–66\'sı birinci basamakta çözümlenebilir. Türkiye Sağlık Bakanlığı verisi: çocuk acil başvurularının ~%52\'si gaz, ateş, ağlama endişesi gibi nedenlerle.',
      color: 'emerald',
      gradFrom: 'from-emerald-50',
      border: 'border-emerald-200',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      valueColor: 'text-emerald-700',
      badgeBg: 'bg-emerald-100 text-emerald-700',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-8 md:py-12 px-4 md:px-8 bg-gradient-to-b from-[#F5F9FF] via-white to-[#EFF5FB] relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center"
      id="sosyal-etki"
    >
      {/* Soft background blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-teal-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-rose-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 w-full">

        {/* ── COMPACT HEADER ── */}
        <div className={`text-center max-w-3xl mx-auto mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy/5 text-navy text-xs font-bold tracking-wider uppercase mb-1.5 border border-navy/10">
            <TrendingUp size={13} className="text-turquoise" />
            <span>Kanıta Dayalı Sosyal Etki Simülasyonu</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight leading-tight">
            Şehrinizde{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-[#0284C7]">
              kaç bebeğe dokunacaksınız?
            </span>
          </h2>

          <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Sayıyı belirleyin — bilimsel verilere dayalı toplumsal dönüşümü canlı görün.
          </p>
        </div>

        {/* ── SLIDER CARD (COMPACT) ── */}
        <div className={`max-w-4xl mx-auto mb-5 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-200/80 relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-bl from-turquoise/10 to-transparent rounded-full pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-coral/5 to-transparent rounded-full pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-navy">Desteklemek istediğiniz bebek sayısı</h3>
                <p className="text-[11px] text-slate-500">
                  Slider&apos;ı kaydırın veya hızlı ölçek seçin
                </p>
              </div>
              <div className="inline-flex items-baseline gap-2 bg-gradient-to-r from-navy via-[#0d3461] to-navy px-4 py-2 rounded-xl shadow-md shadow-navy/20">
                <span className="text-2xl sm:text-3xl font-black text-turquoise font-mono tracking-tight">
                  {babyCount.toLocaleString('tr-TR')}
                </span>
                <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">Bebek & Aile</span>
              </div>
            </div>

            {/* Slider */}
            <div className="relative mb-3.5">
              <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-turquoise to-[#0284C7] rounded-full transition-all duration-300"
                  style={{ width: `${sliderPct}%` }}
                />
              </div>
              <input
                type="range" min={100} max={15000} step={100} value={babyCount}
                onChange={(e) => setBabyCount(Number(e.target.value))}
                className="absolute inset-0 w-full h-3 opacity-0 cursor-pointer"
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-[3px] border-turquoise rounded-full shadow-md shadow-turquoise/30 pointer-events-none transition-all duration-300"
                style={{ left: `calc(${sliderPct}% - 10px)` }}
              />
            </div>

            {/* Scale Buttons */}
            <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
              {quickScales.map((s) => (
                <button
                  key={s.count}
                  onClick={() => setBabyCount(s.count)}
                  className={`px-3 py-1.5 rounded-xl text-xs transition-all border flex items-center gap-1.5 cursor-pointer leading-tight ${
                    babyCount === s.count
                      ? 'bg-navy text-white border-navy font-bold shadow-xs scale-102'
                      : 'bg-white text-slate-600 hover:border-slate-300 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-sm leading-none">{s.emoji}</span>
                  <span className="font-bold text-[11px]">{s.label}</span>
                  <span className={`text-[10px] ${babyCount === s.count ? 'text-white/70' : 'text-slate-400'}`}>({s.sub})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── 4 IMPACT CARDS (COMPACT & RESPONSIVE) ── */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isOpen = openSource === idx;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${card.gradFrom} to-white rounded-2xl border ${card.border} shadow-2xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between`}
              >
                {/* Card header */}
                <div className="p-3.5 sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="text-xl leading-none">{card.emoji}</div>
                      <div className={`w-7 h-7 rounded-lg ${card.iconBg} ${card.iconColor} flex items-center justify-center`}>
                        <Icon size={14} />
                      </div>
                    </div>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${card.badgeBg}`}>
                      {card.badge}
                    </span>
                  </div>

                  {/* Big number */}
                  <div className={`text-2xl sm:text-3xl font-black ${card.valueColor} font-mono mb-1 tracking-tight`}>
                    {typeof card.value === 'number' ? card.value.toLocaleString('tr-TR') : card.value}
                    <span className="text-xs font-bold ml-1.5 opacity-70">{card.unit}</span>
                  </div>

                  <h4 className="text-xs font-bold text-slate-800 mb-1 leading-snug line-clamp-2">
                    {card.title}
                  </h4>

                  <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2">
                    {card.story}
                  </p>

                  {/* Why it matters */}
                  <div className={`mt-2 p-2 rounded-lg ${card.iconBg} border ${card.border}`}>
                    <p className={`text-[10px] font-semibold ${card.iconColor} leading-tight line-clamp-2`}>
                      💡 {card.why}
                    </p>
                  </div>
                </div>

                {/* Source accordion */}
                <div className="border-t border-slate-100/80 bg-slate-50/30">
                  <button
                    onClick={() => setOpenSource(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between px-3 py-1.5 text-[10px] text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    <span className="flex items-center gap-1 font-semibold truncate">
                      <BookOpen size={11} />
                      <span>{card.sourceLabel}</span>
                    </span>
                    {isOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                  </button>
                  {isOpen && (
                    <div className="px-3 pb-2 text-[10px] text-slate-500 leading-relaxed bg-white border-t border-slate-100">
                      <p className="pt-1.5">{card.sourceDetail}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── DARK SUMMARY PANEL (COMPACT) ── */}
        <div className={`max-w-5xl mx-auto mb-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="bg-gradient-to-br from-[#0B2545] via-[#0d3461] to-[#071e37] rounded-2xl p-4 sm:p-5 text-white shadow-lg relative overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative">
              {[
                { val: motorRisk.toLocaleString('tr-TR'), label: 'Motor İpucu Tespiti', sub: 'Nöromotor & Kas', color: 'text-teal-400' },
                { val: skinDigest.toLocaleString('tr-TR'), label: 'Cilt & Sindirim Tespiti', sub: 'WHO Kılavuzu', color: 'text-rose-400' },
                { val: anxiousMoms.toLocaleString('tr-TR'), label: 'Anne Yanında Destek', sub: 'WHO Türkiye %21.4', color: 'text-blue-400' },
                { val: avoidableER.toLocaleString('tr-TR'), label: 'Önlenebilir Acil', sub: 'AAP / HSB %52', color: 'text-emerald-400' },
              ].map((item, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-white/[0.06] border border-white/[0.07] text-center">
                  <span className={`block text-xl sm:text-2xl font-black ${item.color} font-mono`}>
                    {item.val}
                  </span>
                  <span className="text-[10px] font-medium text-white/80 mt-0.5 block leading-tight truncate">{item.label}</span>
                  <span className="text-[9px] text-white/40">{item.sub}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] text-white/50 gap-1 pt-3 mt-3 border-t border-white/[0.06]">
              <span className="flex items-center gap-1.5">
                <Sparkles size={11} className="text-turquoise" />
                Uluslararası pediatri kılavuzları ve WHO verileriyle modellenmiştir.
              </span>
              <span className="text-white/40">Tanı koymaz; erken farkındalık ve hekim köprüsü kurar.</span>
            </div>
          </div>
        </div>

        {/* ── CTA (COMPACT INLINE) ── */}
        <div className={`max-w-5xl mx-auto transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-navy/5 text-navy flex items-center justify-center shrink-0">
                <FileText size={18} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-navy">
                  Kurumsal Protokol & Meclis Karar Dosyası
                </h4>
                <p className="text-[11px] text-slate-500">
                  Protokol dosyasını, bilimsel kaynakları ve bütçe tablosunu talep edin.
                </p>
              </div>
            </div>
            <button
              onClick={() => handleOpenModal(babyCount)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-coral to-[#e8634f] text-white font-bold text-xs shrink-0 flex items-center justify-center gap-2 shadow-md shadow-coral/20 hover:shadow-lg hover:scale-102 transition-all cursor-pointer"
            >
              <span>Protokol Dosyasını Talep Edin</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>

      <DemoRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialBabyCount={modalBabyCount}
      />
    </section>
  );
}
