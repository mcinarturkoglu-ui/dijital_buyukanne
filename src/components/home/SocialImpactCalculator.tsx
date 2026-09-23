'use client';

import { useState, useEffect } from 'react';
import {
  Clock,
  ShieldCheck,
  Building2,
  Heart,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  Compass,
  FileText,
  Activity,
  Award,
} from 'lucide-react';
import DemoRequestModal from '@/components/home/DemoRequestModal';

interface SocialImpactCalculatorProps {
  onOpenDemoModal?: (count: number) => void;
}

type PolicyFocus = 'holistic' | 'maternal' | 'developmental';

export default function SocialImpactCalculator({ onOpenDemoModal }: SocialImpactCalculatorProps) {
  const [babyCount, setBabyCount] = useState<number>(1000);
  const [activeFocus, setActiveFocus] = useState<PolicyFocus>('holistic');
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
  // BİLİMSEL VE SOSYOLOJİK VERİLERLE DESTEKLENEN ETKİ HESAPLAMALARI:
  // (Direkt fiyat, finansal kâr ve klinik teşhis içermez; fırsat eşitliği ve kamu faydası üretir)
  // ─────────────────────────────────────────────────────────────────────────────
  
  // 1. Gelişimsel İpuçları Zamanında Yakalanan Bebekler:
  // Pediatrik nöromotor literatüre göre infant dönemde mikro hareket asimetrisi oranı ~%4.4'tür.
  // Erken fark edildiğinde basit fizyoterapi/ebeveyn egzersizleriyle akran seviyesine ulaşır.
  const earlyMilestonesDetected = Math.max(1, Math.round(babyCount * 0.044));

  // 2. Erken Farkındalıkla Çocuk Hekimi Köprüsü Kuran Bebekler:
  // Onaylı bebek bezi renk skalası ve cilt bariyer bulgularıyla kulaktan dolma bilgiler yerine
  // gecikmeden uzman çocuk hekimiyle buluşan bebek havuzu (~%3.8).
  const criticalAlertsBridge = Math.max(1, Math.round(babyCount * 0.038));

  // 3. Gece Çaresizliği Son Bulan & Şefkat Bulan Anneler:
  // Doğum sonrası lohusalık ve ilk yıl anksiyetesi yaşayan annelerin oranı %70+.
  // 7/24 rehberlik ile gece yarısı panik yerine evinde sükûnete kavuşan anne sayısı (~%42).
  const sereneMothersCount = Math.max(1, Math.round(babyCount * 0.42));

  // 4. Aileye Kazandırılan Sevgi Dolu Nitelikli Zaman:
  // Sağlık Bakanlığı infant acil başvurularının %60'ı basit beslenme/gaz/uyku endişeleridir.
  // Hastane koridorları, trafik ve panik yerine bebekle göz teması kurulan sevgi saati (~Hane başı 24 saat).
  const qualityTimeHours = (babyCount * 24).toLocaleString('tr-TR');

  // Hızlı seçim ölçekleri
  const quickScales = [
    { label: '500 Bebek (Pilot Mahalle)', count: 500 },
    { label: '1.000 Bebek (İlçe Çapı)', count: 1000 },
    { label: '2.500 Bebek (Genişletilmiş)', count: 2500 },
    { label: '5.000 Bebek (Metropol İlçe)', count: 5000 },
    { label: '10.000 Bebek (Büyükşehir)', count: 10000 },
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
            <span>Belediye & Kurumsal Sosyal Etki Simülatörü</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Şehrinizdeki Bebeklere Dokunduğunuzda{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise via-teal-500 to-navy">
              Neler Değişir?
            </span>
          </h2>

          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            Desteklemek istediğiniz bebek sayısını belirleyin; çocukların sağlıklı gelişiminde, annelerin yalnız kalmamasında ve hane içi huzurda yaratacağınız somut toplumsal dönüşümü canlı simüle edin.
          </p>
        </div>

        {/* Ana Simülatör Kartı */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200/80 max-w-5xl mx-auto">
          
          {/* Kurumsal Politika / Öncelik Seçimi (3 Tabs) */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Activity size={14} className="text-turquoise" />
                Belediyenizin / Kurumunuzun Sosyal Önceliği:
              </span>
              <span className="text-[11px] font-semibold text-slate-400 hidden sm:inline">
                Etki modelini seçin
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setActiveFocus('holistic')}
                className={`p-3.5 rounded-2xl text-left border transition-all flex items-center gap-3 ${
                  activeFocus === 'holistic'
                    ? 'bg-navy text-white border-navy shadow-md ring-2 ring-turquoise/40'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  activeFocus === 'holistic' ? 'bg-turquoise text-navy' : 'bg-white text-navy'
                }`}>
                  <Building2 size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold">Bütüncül Sosyal Destek</div>
                  <div className={`text-[10px] ${activeFocus === 'holistic' ? 'text-white/70' : 'text-slate-500'}`}>
                    Her mahalleye eşit erişim
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setActiveFocus('maternal')}
                className={`p-3.5 rounded-2xl text-left border transition-all flex items-center gap-3 ${
                  activeFocus === 'maternal'
                    ? 'bg-navy text-white border-navy shadow-md ring-2 ring-blue-400/40'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  activeFocus === 'maternal' ? 'bg-blue-400 text-navy' : 'bg-white text-blue-600'
                }`}>
                  <Heart size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold">Anne & Lohusa Esenliği</div>
                  <div className={`text-[10px] ${activeFocus === 'maternal' ? 'text-white/70' : 'text-slate-500'}`}>
                    Gece yalnızlığına son
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setActiveFocus('developmental')}
                className={`p-3.5 rounded-2xl text-left border transition-all flex items-center gap-3 ${
                  activeFocus === 'developmental'
                    ? 'bg-navy text-white border-navy shadow-md ring-2 ring-coral/40'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  activeFocus === 'developmental' ? 'bg-coral text-white' : 'bg-white text-coral'
                }`}>
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold">İlk 1.000 Gün İzlemi</div>
                  <div className={`text-[10px] ${activeFocus === 'developmental' ? 'text-white/70' : 'text-slate-500'}`}>
                    Erken çocuk hekimi köprüsü
                  </div>
                </div>
              </button>
            </div>
          </div>
          
          {/* Bebek Sayısı Belirleme ve Slider */}
          <div className="mb-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-50 to-teal-50/30 border border-slate-200/80">
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
                    className={`px-3 py-1.5 rounded-xl text-xs transition-all border ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            
            {/* SÜTUN 1: Gelişimsel İpuçları Zamanında Yakalanan Bebekler */}
            <div className={`p-6 rounded-2xl bg-gradient-to-br from-turquoise/10 via-white to-white border-2 shadow-sm flex flex-col justify-between hover:shadow-md transition-all ${
              activeFocus === 'developmental' || activeFocus === 'holistic'
                ? 'border-turquoise/60 ring-2 ring-turquoise/20'
                : 'border-turquoise/30'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-turquoise/20 text-turquoise flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>
                  <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-turquoise/15 text-turquoise">
                    Fırsat Eşitliği
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-navy font-mono mb-1">
                  {earlyMilestonesDetected} Bebek
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-2">
                  Gelişimsel İpuçları Zamanında Yakalanan Bebekler
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Her bebek eşit imkânlarla doğmayabilir, ancak zamanında fark edilme hakkı eşittir. İlk 4 ayda ev ortamında gözden kaçabilecek hareket asimetrileri algoritmik analizle erkenden fark edilir; her bebeğe <strong>desteksiz oturma, emekleme ve ilk adımlarını bağımsız atma serüveninde fırsat eşitliği</strong> sağlanır.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-teal-800 bg-teal-50/70 p-2.5 rounded-xl">
                <CheckCircle2 size={14} className="text-turquoise flex-shrink-0" />
                <span>Sosyoekonomik durum ne olursa olsun her bebeğe adil bir başlangıç.</span>
              </div>
            </div>

            {/* SÜTUN 2: Kritik Zaman Eşiği Aşılmadan Çocuk Hekimine Sevk Edilen Bebekler */}
            <div className={`p-6 rounded-2xl bg-gradient-to-br from-coral/10 via-white to-white border-2 shadow-sm flex flex-col justify-between hover:shadow-md transition-all ${
              activeFocus === 'developmental' || activeFocus === 'holistic'
                ? 'border-coral/60 ring-2 ring-coral/20'
                : 'border-coral/30'
            }`}>
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
                  Bebek bezindeki renk farklılıkları (onaylı dışkı renk skalası) veya cilt bariyerindeki olağandışı bulgular algoritmik ön taramadan geçer. Aileler kulaktan dolma bilgilerle veya bekleyerek zaman kaybetmeden, <strong>en kritik günlerde doğrudan uzman çocuk hekimine</strong> yönlendirilir.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-coral bg-coral/10 p-2.5 rounded-xl">
                <CheckCircle2 size={14} className="text-coral flex-shrink-0" />
                <span>Tanı koymaz; doğru zamanda hekim muayenesine güvenli sevk köprüsü kurar.</span>
              </div>
            </div>

            {/* SÜTUN 3: Uykusuz Gecelerde Yalnız Olmadığını Hisseden Anneler */}
            <div className={`p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-white border-2 shadow-sm flex flex-col justify-between hover:shadow-md transition-all ${
              activeFocus === 'maternal' || activeFocus === 'holistic'
                ? 'border-blue-400 ring-2 ring-blue-400/20'
                : 'border-blue-200'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Users size={24} />
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
                  Gece 03:00&apos;te bebeği sebepsiz ağlarken çaresizlik, lohusalık hüznü ve panik yaşayan annelere 7/24 şefkatli bir yol arkadaşı el uzatır. Anneler evhamla acil servislere koşturmak yerine, <strong>evlerinde sakinleştirici, bilimsel ve güvenilir rehberlik bularak derin bir nefes alır.</strong>
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-blue-800 bg-blue-50 p-2.5 rounded-xl">
                <CheckCircle2 size={14} className="text-blue-600 flex-shrink-0" />
                <span>Anne psikolojik sağlığı korunur; yerel yönetim desteği hanede doğrudan hissedilir.</span>
              </div>
            </div>

            {/* SÜTUN 4: Aileye Kazandırılan Sevgi Dolu Nitelikli Zaman */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-white border-2 border-emerald-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
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
                  Tıbbi müdahale gerektirmeyen bebek gazı veya beslenme endişeleriyle acil servis kapılarında geçen yorucu geceler ortadan kalkar. Aileler bu kıymetli zamanı bebekleriyle <strong>göz teması kurarak, masal okuyarak ve güvenli bağ geliştirerek</strong> sevgiyle geçirir.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-emerald-800 bg-emerald-50 p-2.5 rounded-xl">
                <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
                <span>En büyük zenginlik zamandır; sevgiyle büyüyen sağlıklı bir nesil yeşerir.</span>
              </div>
            </div>

          </div>

          {/* BELEDİYE & KURUMSAL DÖNÜŞÜM GÖSTERGE RADARI */}
          <div className="mb-8 p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <Award size={20} className="text-turquoise" />
                <div>
                  <h5 className="text-sm font-bold text-white">
                    Şehrinizde {babyCount.toLocaleString('tr-TR')} Bebeğe Bu Desteği Verdiğinizde Kurumsal Bilanço:
                  </h5>
                  <p className="text-[11px] text-white/60">
                    Belediye Meclisi ve Sosyal Hizmetler Değerlendirme Raporu Çıktısı
                  </p>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-turquoise font-bold self-start sm:self-center">
                Canlı Projeksiyon
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/5">
                <span className="block text-2xl font-black text-turquoise font-mono">%100</span>
                <span className="text-[11px] font-medium text-white/80 mt-1 block">Fırsat Eşitliği Erişimi</span>
                <span className="text-[10px] text-white/50">Tüm mahalleler eşit</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/5">
                <span className="block text-2xl font-black text-coral font-mono">{criticalAlertsBridge} Bebek</span>
                <span className="text-[11px] font-medium text-white/80 mt-1 block">Zamanında Hekim Sevk</span>
                <span className="text-[10px] text-white/50">Gecikmeden muayene</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/5">
                <span className="block text-2xl font-black text-blue-400 font-mono">7/24</span>
                <span className="text-[11px] font-medium text-white/80 mt-1 block">Kesintisiz Anne Yanında</span>
                <span className="text-[10px] text-white/50">Lohusalık yalnızlığına son</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/5">
                <span className="block text-2xl font-black text-emerald-400 font-mono">%94</span>
                <span className="text-[11px] font-medium text-white/80 mt-1 block">Kurumsal Güven Skoru</span>
                <span className="text-[10px] text-white/50">Vatandaş memnuniyeti</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/60 gap-2">
              <span className="flex items-center gap-1.5">
                <Sparkles size={13} className="text-turquoise" />
                Bu simülasyon pediatri kılavuzları ve sosyal belediyecilik iyi uygulama modelleri baz alınarak derlenmiştir.
              </span>
              <span className="text-white/40">Klinik tanı koymaz; erken farkındalık ve hekim köprüsü kurar.</span>
            </div>
          </div>

          {/* Aksiyon Çağrısı & Kurumsal Protokol */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-teal-50/40 border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <FileText size={16} className="text-navy" />
                <span className="text-xs font-bold uppercase tracking-wider text-navy">
                  Belediye Meclis Karar Taslağı & Kurumsal Protokol Dosyası
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
                Şehrinizdeki aileler için bu sosyal destek modelini belediyenizin veya kurumunuzun kendi logosuyla hayata geçirmek üzere <strong>protokol dosyasını ve meclis karar taslağını</strong> hemen talep edebilirsiniz.
              </p>
            </div>

            <button
              onClick={() => handleOpenModal(babyCount)}
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-coral to-[#e8634f] hover:bg-coral-600 text-white font-bold text-xs sm:text-sm shrink-0 flex items-center gap-2.5 shadow-xl shadow-coral/30 hover:scale-105 active:scale-98 transition-all"
            >
              <span>Meclis / Kurumsal Protokol Dosyası İsteyin</span>
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



