'use client';

import { useState, useEffect } from 'react';
import {
  Calculator,
  Clock,
  ShieldCheck,
  Building2,
  Heart,
  ArrowRight,
  Stethoscope,
  CheckCircle2,
  Sparkles,
  Users,
  Compass,
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

  // ─────────────────────────────────────────────────────────────────────────────
  // İNSAN ODAKLI & BİLİMSEL ETKİ HESAPLAMALARI (TANI & FİYAT İÇERMEZ):
  // ─────────────────────────────────────────────────────────────────────────────
  
  // 1. Gelişimsel Eşitsizliği Önleme & Zamanında Yakalama:
  // Her 1.000 bebekten yaklaşık 44'ünde motor gelişimde erken fark edilip
  // desteklenmesi gereken mikro asimetriler/ipuçları mevcuttur.
  const earlyMilestonesDetected = Math.max(1, Math.round(babyCount * 0.044));

  // 2. Erken Farkındalık & Çocuk Hekimi Köprüsü:
  // Bebek bezi renk skalası ve cilt hassasiyetlerinde zaman kaybetmeden uzmana sevk edilen bebekler (~%3.2)
  const criticalAlertsBridge = Math.max(1, Math.round(babyCount * 0.032));

  // 3. Gece Yarısı Çaresizliği Biten & Şefkat Bulan Anneler:
  // Acil servis kapılarında panik yaşamak yerine evinde 7/24 şefkatli rehberlikle huzur bulan hane oranı (~%38)
  const sereneMothersCount = Math.max(1, Math.round(babyCount * 0.38));

  // 4. Aileye Kazandırılan Sevgi Dolu Nitelikli Zaman:
  // Hastane koridorları, bilgi kirliliği ve endişe yerine evde bebekle geçirilen huzurlu saatler (~Hane başı 24 saat)
  const qualityTimeHours = (babyCount * 24).toLocaleString('tr-TR');

  // Hızlı seçim paketleri
  const quickScales = [
    { label: '500 Bebek', count: 500 },
    { label: '1.000 Bebek', count: 1000 },
    { label: '2.500 Bebek', count: 2500 },
    { label: '5.000 Bebek', count: 5000 },
    { label: '10.000 Bebek', count: 10000 },
  ];

  return (
    <section
      className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-100/70 relative overflow-hidden"
      id="sosyal-etki"
    >
      {/* Background soft ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-turquoise/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-turquoise/15 text-turquoise text-xs font-bold tracking-wider uppercase mb-4 border border-turquoise/30 backdrop-blur-md">
            <Compass size={14} className="text-turquoise" />
            <span>Toplumsal Dönüşüm & Etki Simülatörü</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Şehrinizdeki Bebeklere Dokunduğunuzda{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise via-teal-500 to-navy">
              Neler Değişir?
            </span>
          </h2>

          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            Şehrinizde desteklemek istediğiniz bebek sayısını belirleyin; çocukların sağlıklı büyümesinde, annelerin yalnız kalmamasında ve hane huzurunda yaratacağınız insani etkiyi canlı görün.
          </p>
        </div>

        {/* Ana Simülatör Kartı */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200/80 max-w-5xl mx-auto">
          
          {/* Bebek Sayısı Belirleme ve Slider */}
          <div className="mb-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-50 to-teal-50/30 border border-slate-200/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Ulaşılacak Bebek & Anne Sayısı
                </span>
                <p className="text-xs text-slate-500 mt-0.5">
                  Şehrinizde koruma kalkanı altına alınacak aile havuzu
                </p>
              </div>

              <div className="inline-flex items-baseline gap-2 bg-navy px-5 py-2.5 rounded-2xl shadow-lg border border-navy/40">
                <span className="text-2xl sm:text-3xl font-black text-turquoise font-mono">
                  {babyCount.toLocaleString('tr-TR')}
                </span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">Bebek & Anne</span>
              </div>
            </div>

            {/* Range Slider */}
            <input
              type="range"
              min={100}
              max={15000}
              step={100}
              value={babyCount}
              onChange={(e) => setBabyCount(Number(e.target.value))}
              className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-turquoise transition-all"
            />

            {/* Hızlı Seçim Butonları */}
            <div className="flex flex-wrap items-center justify-between gap-2 mt-5 pt-3 border-t border-slate-200/60">
              <span className="text-[11px] font-bold text-slate-400">Hızlı Ölçek Seçimi:</span>
              <div className="flex flex-wrap gap-2">
                {quickScales.map((item) => (
                  <button
                    key={item.count}
                    onClick={() => setBabyCount(item.count)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs transition-all border ${
                      babyCount === item.count
                        ? 'bg-turquoise text-navy border-turquoise font-bold shadow-md shadow-turquoise/20'
                        : 'bg-white text-slate-600 hover:border-slate-300 border-slate-200 font-medium'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 4 TEMEL İNSANİ VE SOSYAL ETKİ SÜTUNU */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            
            {/* SÜTUN 1: Gelişimsel İpuçları Zamanında Yakalanan Bebekler */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-turquoise/10 via-white to-white border-2 border-turquoise/40 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-turquoise/20 text-turquoise flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>
                  <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-turquoise/15 text-turquoise">
                    İlk 4 Ay Önemi
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-navy font-mono mb-1">
                  {earlyMilestonesDetected} Bebek
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-2">
                  Gelişimsel İpuçları Zamanında Yakalanan Bebekler
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Her bebek eşit imkânlarla doğmayabilir, ancak zamanında fark edilme hakkı eşittir. İlk aylarda gözden kaçabilecek hareket asimetrileri erkenden fark edilir; bebeğin <strong>desteksiz oturma, emekleme ve ilk adımlarını atma serüveninde fırsat eşitliği</strong> sağlanır.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-teal-700 bg-teal-50/60 p-2.5 rounded-xl">
                <CheckCircle2 size={14} className="text-turquoise flex-shrink-0" />
                <span>Her çocuğun kendi adımlarıyla bağımsız büyüme hakkı korunur.</span>
              </div>
            </div>

            {/* SÜTUN 2: Kritik Dönemde Uzman Hekimle Buluşan Bebekler */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-coral/10 via-white to-white border-2 border-coral/40 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-coral/20 text-coral flex items-center justify-center">
                    <Heart size={24} />
                  </div>
                  <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-coral/15 text-coral">
                    Erken Hekim Köprüsü
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-navy font-mono mb-1">
                  {criticalAlertsBridge} Bebek
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-2">
                  Kritik Eşik Aşılmadan Çocuk Hekimiyle Buluşan Bebekler
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Bebek bezindeki renk değişiklikleri (safra akışı izlemi) veya cilt bariyerindeki erken hassasiyetler algoritmik renk kartlarıyla taranır. Aileler kulaktan dolma bilgilerle zaman kaybetmeden, <strong>en kritik günlerde doğrudan uzman çocuk hekimine</strong> yönlendirilir.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-coral bg-coral/10 p-2.5 rounded-xl">
                <CheckCircle2 size={14} className="text-coral flex-shrink-0" />
                <span>Görünmeyeni erkenden fark eden güvenli bir koruma kalkanı kurulur.</span>
              </div>
            </div>

            {/* SÜTUN 3: Uykusuz Gecelerde Yalnız Olmadığını Hisseden Anneler */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-white border border-blue-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Stethoscope size={24} />
                  </div>
                  <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-blue-100 text-blue-700">
                    7/24 Anne Esenliği
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-navy font-mono mb-1">
                  {sereneMothersCount} Anne
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-2">
                  Uykusuz Gecelerde Yalnız Olmadığını Hisseden Anneler
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Gece 03:00&apos;te bebeği krizle ağlarken çaresizlik, lohusalık hüznü ve panik yaşayan annelere 7/24 şefkatli bir yol arkadaşı uzanır. Anneler evhamla acil servislere koşturmak yerine, <strong>evlerinde sakinleştirici ve güvenilir rehberlik bularak derin bir nefes alır.</strong>
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-blue-800 bg-blue-50 p-2.5 rounded-xl">
                <CheckCircle2 size={14} className="text-blue-600 flex-shrink-0" />
                <span>Anne psikolojik sağlığı desteklenir, hane içine sükûnet ve huzur gelir.</span>
              </div>
            </div>

            {/* SÜTUN 4: Aileye Kazandırılan Sevgi Dolu Nitelikli Zaman */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-white border border-emerald-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Clock size={24} />
                  </div>
                  <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
                    Nitelikli Büyüme
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-emerald-700 font-mono mb-1">
                  {qualityTimeHours} Saat
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-2">
                  Hastane Sıraları Yerine Bebekle Büyüyen Huzurlu Saatler
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Gereksiz hastane koridoru beklemeleri, yanlış bilgiyle yaşanan korku dolu uykusuz saatler ortadan kalkar. Aileler bu kıymetli zamanı bebekleriyle <strong>göz teması kurarak, masal okuyarak ve güvenli bağ kurarak</strong> sevgiyle geçirir.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-emerald-800 bg-emerald-50 p-2.5 rounded-xl">
                <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
                <span>Zaman en büyük zenginliktir; sevgiyle büyüyen sağlıklı bir nesil yetişir.</span>
              </div>
            </div>

          </div>

          {/* İNSANİ VE TOPLUMSAL BİLANÇO VURGU KUTUSU */}
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-navy via-[#0c365a] to-navy text-white border border-white/10 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={18} className="text-turquoise" />
              <span className="text-xs font-bold uppercase tracking-widest text-turquoise">
                Şehrinizde {babyCount.toLocaleString('tr-TR')} Bebeğe Bu Desteği Verdiğinizde:
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="block font-bold text-turquoise mb-1 text-sm">🚼 {earlyMilestonesDetected} Bebek İçin Fırsat Eşitliği</span>
                  <span className="text-white/80 text-xs leading-relaxed">Gelişimsel eşikler vaktinde fark edilir, kendi adımlarıyla özgürce büyür.</span>
                </div>
              </div>

              <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="block font-bold text-turquoise mb-1 text-sm">🌙 {sereneMothersCount} Anne İçin Şefkat Desteği</span>
                  <span className="text-white/80 text-xs leading-relaxed">Gece çaresizliği biter; yerel yönetimin şefkatli desteği hanede hissedilir.</span>
                </div>
              </div>

              <div className="bg-white/10 p-4 rounded-xl border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="block font-bold text-turquoise mb-1 text-sm">⏳ {qualityTimeHours} Saat Sevgi Dolu Büyüme</span>
                  <span className="text-white/80 text-xs leading-relaxed">Endişe ve hastane sırası yerine evde güvenle kurulan anne-bebek bağı.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Aksiyon Çağrısı & Kurumsal Protokol */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Building2 size={16} className="text-navy" />
                <span className="text-xs font-bold uppercase tracking-wider text-navy">
                  Belediye & Kurumsal Sosyal Sorumluluk Protokolü
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Şehrinizdeki aileler için bu sosyal destek modelini kurumsal logonuzla hayata geçirmek üzere meclis karar taslağı ve protokol dosyasını talep edebilirsiniz.
              </p>
            </div>

            <button
              onClick={() => handleOpenModal(babyCount)}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-coral to-[#e8634f] hover:bg-coral-600 text-white font-bold text-xs sm:text-sm shrink-0 flex items-center gap-2 shadow-lg shadow-coral/30 hover:scale-105 active:scale-98 transition-all"
            >
              <span>Sosyal Protokol Dosyası İsteyin</span>
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



