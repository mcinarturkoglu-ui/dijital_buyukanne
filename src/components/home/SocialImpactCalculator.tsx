'use client';

import { useState, useEffect } from 'react';
import {
  Calculator,
  Users,
  Clock,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Building2,
  Heart,
  ArrowRight,
} from 'lucide-react';
import DemoRequestModal from '@/components/home/DemoRequestModal';

interface SocialImpactCalculatorProps {
  onOpenDemoModal?: (count: number) => void;
}

export default function SocialImpactCalculator({ onOpenDemoModal }: SocialImpactCalculatorProps) {
  const [babyCount, setBabyCount] = useState<number>(1000);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalBabyCount, setModalBabyCount] = useState(1000);

  // Global event listener to allow other components/buttons to open this modal easily
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

  // Evidence-based impact calculations
  const motorRisksDetected = Math.max(1, Math.round(babyCount * 0.042)); // ~4.2% motor risk
  const stoolSkinAlerts = Math.max(1, Math.round(babyCount * 0.028)); // ~2.8% stool/biliary/skin alerts
  const hoursSaved = (babyCount * 18).toLocaleString('tr-TR'); // ~18 hours per family saved in trips/stress
  const nightQuestionsResolved = (babyCount * 12).toLocaleString('tr-TR'); // ~12 night answers per infant

  const presets = [
    { label: 'İlçe Pilot', count: 500 },
    { label: 'Büyüyen İlçe', count: 1500 },
    { label: 'Büyükşehir Kapsama', count: 5000 },
    { label: 'İl Genel Seferberlik', count: 10000 },
  ];

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-slate-50 via-soft-gray/50 to-white relative overflow-hidden" id="sosyal-hesaplayici">
      {/* Background radial soft lights */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-turquoise bg-turquoise/10 border border-turquoise/25 px-4 py-1.5 rounded-full mb-4">
            <Calculator size={14} className="text-turquoise" />
            <span>Kurumsal ve Belediye Etki Simülatörü</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Şehrinizde üreteceğiniz <br className="hidden sm:inline" />
            <span className="text-turquoise">sosyal etkiyi canlı hesaplayın.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-navy/70 leading-relaxed font-normal">
            Aşağıdaki kaydırıcıyı kullanarak desteklemek istediğiniz bebek sayısını belirleyin; sistemin sağlayacağı erken teşhis, kurtarılan saat ve toplumsal katma değeri anında görün.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100 max-w-5xl mx-auto">
          
          {/* Slider & Presets */}
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-navy/70">
                Hedeflenen Bebek & Aile Sayısı:
              </span>
              <div className="inline-flex items-baseline gap-1.5 bg-turquoise/10 px-4 py-1.5 rounded-2xl border border-turquoise/30">
                <span className="text-2xl sm:text-3xl font-black text-navy">{babyCount.toLocaleString('tr-TR')}</span>
                <span className="text-xs font-bold text-turquoise uppercase">Bebek</span>
              </div>
            </div>

            {/* Range Slider */}
            <input
              type="range"
              min={100}
              max={10000}
              step={100}
              value={babyCount}
              onChange={(e) => setBabyCount(Number(e.target.value))}
              className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-turquoise transition-all"
            />

            {/* Preset Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
              <span className="text-[11px] font-bold text-navy/40">Hızlı Paketler:</span>
              <div className="flex flex-wrap gap-2">
                {presets.map((p) => (
                  <button
                    key={p.count}
                    onClick={() => setBabyCount(p.count)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                      babyCount === p.count
                        ? 'bg-navy text-white border-navy shadow-md'
                        : 'bg-slate-50 text-navy/70 hover:bg-turquoise/10 hover:text-navy border-slate-200'
                    }`}
                  >
                    {p.label} ({p.count.toLocaleString('tr-TR')})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Interactive Impact Result Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            
            {/* Card 1: Motor Risk Early Detection */}
            <div className="bg-gradient-to-br from-turquoise/10 via-white to-transparent p-5 rounded-2xl border border-turquoise/30 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-turquoise/20 text-turquoise flex items-center justify-center mb-3">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-3xl font-black text-navy">{motorRisksDetected}</div>
                <p className="text-xs font-bold text-turquoise mt-1">Erken Motor Farkındalık</p>
              </div>
              <p className="text-[11px] text-navy/60 mt-3 leading-relaxed">
                0–6 ayda erken fark edilerek zamanında uzman desteğine yönlendirilecek tahmini bebek sayısı.
              </p>
            </div>

            {/* Card 2: Biliary Atresia & Skin Alerts */}
            <div className="bg-gradient-to-br from-coral/10 via-white to-transparent p-5 rounded-2xl border border-coral/30 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-coral/20 text-coral flex items-center justify-center mb-3">
                  <Heart size={20} />
                </div>
                <div className="text-3xl font-black text-navy">{stoolSkinAlerts}</div>
                <p className="text-xs font-bold text-coral mt-1">Kritik Dışkı / Cilt Uyarısı</p>
              </div>
              <p className="text-[11px] text-navy/60 mt-3 leading-relaxed">
                Bebek bezinde erken safra yolu (biliyer atrezi) veya şiddetli egzama taramasıyla kurtarılacak bebekler.
              </p>
            </div>

            {/* Card 3: Hours Saved by Families */}
            <div className="bg-gradient-to-br from-slate-100 via-white to-transparent p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-navy/10 text-navy flex items-center justify-center mb-3">
                  <Clock size={20} />
                </div>
                <div className="text-3xl font-black text-navy">{hoursSaved}</div>
                <p className="text-xs font-bold text-navy mt-1">Aile Zaman Tasarrufu (Saat)</p>
              </div>
              <p className="text-[11px] text-navy/60 mt-3 leading-relaxed">
                Gereksiz acil başvuruları, ulaşım zorlukları ve bilgi kirliliği yerine ailelerin evinde kazandığı huzurlu vakit.
              </p>
            </div>

            {/* Card 4: SROI Multiplier */}
            <div className="bg-gradient-to-br from-emerald-50 via-white to-transparent p-5 rounded-2xl border border-emerald-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                  <TrendingUp size={20} />
                </div>
                <div className="text-3xl font-black text-emerald-600">5.8x</div>
                <p className="text-xs font-bold text-emerald-700 mt-1">SROI Sosyal Katma Değer</p>
              </div>
              <p className="text-[11px] text-navy/60 mt-3 leading-relaxed">
                Belediyenizin her 1 TL’lik sosyal destek yatırımının ürettiği 5.8 katlık toplumsal ve sağlık faydası katsayısı.
              </p>
            </div>

          </div>

          {/* Action Callout Bar */}
          <div className="p-6 rounded-2xl bg-navy text-white flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Building2 size={16} className="text-turquoise" />
                <span className="text-xs font-bold uppercase tracking-wider text-turquoise">
                  {babyCount.toLocaleString('tr-TR')} Bebek İçin Hazır Kurumsal Paket
                </span>
              </div>
              <p className="text-sm text-white/80 max-w-xl">
                Kurumunuza özel logolu mobil uygulama, yönetim paneli, referans kodu dağıtımı ve aylık sosyal etki raporlama desteği dahildir.
              </p>
            </div>

            <button
              onClick={() => handleOpenModal(babyCount)}
              className="px-6 py-3.5 rounded-xl bg-coral hover:bg-coral/95 text-white font-bold text-xs sm:text-sm shrink-0 flex items-center gap-2 shadow-lg shadow-coral/30 hover:scale-105 transition-all"
            >
              <span>Bu Kapsamda Protokol Taslağı İsteyin</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>

      </div>

      {/* Corporate Demo Request Modal */}
      <DemoRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialBabyCount={modalBabyCount}
      />
    </section>
  );
}
