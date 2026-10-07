'use client';

import { useState, useEffect } from 'react';
import {
  Camera,
  Cpu,
  Sparkles,
  CheckCircle2,
  Scan,
  RotateCw,
  ZoomIn,
  Stethoscope,
  Info,
  ShieldCheck,
  ChevronRight,
  Zap,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import PhoneMockup from '@/components/ui/PhoneMockup';

/* ── 0–2 Yaş Pediatrik 41 Cilt Tablosu Senaryoları (Ebeveyn Gözlemi ➔ YZ Tespiti) ── */
interface SkinDiagnosisCase {
  id: string;
  parentObservation: string;
  region: string;
  dotColor: string;
  gradientBg: string;
  severity: 'safe' | 'warning' | 'urgent';
  aiDetection: {
    title: string;
    catalog: string;
    confidence: string;
    pattern: string;
    description: string;
    doctorAction: string;
  };
}

const skinCases: SkinDiagnosisCase[] = [
  {
    id: 'case-1',
    parentObservation: 'Yanaklarda pütürlü kuruluk ve kızarık döküntü',
    region: 'Yanak & Çene Kıvrımı • 4. Ay',
    dotColor: '#F43F5E',
    gradientBg: 'from-rose-400/60 via-red-300/40 to-amber-200/40',
    severity: 'warning',
    aiDetection: {
      title: 'İnfantil Atopik Dermatit (Bebeklik Egzaması)',
      catalog: 'Derma-41 / No. 04',
      confidence: '%98.2 Eşleşme',
      pattern: 'Eritem: %72 • Bariyer Hasarı',
      description: 'Yanak yüzeyinde mikro pullanma ve atopik eritem plakları saptandı. Enfeksiyöz veya acil bir mikrobiyal döküntü değildir.',
      doctorAction: 'Parfümsüz ve seramid içerikli hipoalerjenik nemlendiriciyle günde 2 kez bariyer desteği sağlayın. Kaşıntı uykuyu etkiliyorsa çocuk hekiminize danışınız.',
    },
  },
  {
    id: 'case-2',
    parentObservation: 'Gövdede minik sarı-beyaz benekli pembe lekeler',
    region: 'Gövde & Sırt • 5 Günlük',
    dotColor: '#FB7185',
    gradientBg: 'from-amber-200/60 via-rose-300/40 to-slate-100/40',
    severity: 'safe',
    aiDetection: {
      title: 'Toksik Eritem (Yenidoğan Selim Döküntüsü)',
      catalog: 'Derma-41 / No. 12',
      confidence: '%99.1 Eşleşme',
      pattern: 'Fizyolojik Selim Papül Morfolojisi',
      description: 'Yenidoğanların yaklaşık %50’sinde ilk haftalarda görülen tamamen doğal ve selim bir cilt uyumudur. Bebeğe rahatsızlık vermez.',
      doctorAction: 'Herhangi bir merhem, losyon veya tıbbi müdahaleye gerek yoktur; 7-10 günde kendiliğinden geçer. Rutin hekim izlemi yeterlidir.',
    },
  },
  {
    id: 'case-3',
    parentObservation: 'Saçlı deride sarımsı yağlı kabuk ve pulcuklar',
    region: 'Baş Derisi & Kaş • 2. Ay',
    dotColor: '#F59E0B',
    gradientBg: 'from-yellow-400/60 via-amber-300/40 to-orange-200/40',
    severity: 'safe',
    aiDetection: {
      title: 'Seboreik Dermatit (Bebek Konağı)',
      catalog: 'Derma-41 / No. 07',
      confidence: '%98.6 Eşleşme',
      pattern: 'Hiperkeratoz & Sebum Artışı',
      description: 'Yağ bezlerinin geçici fazla çalışmasıyla oluşan zararsız kabuklanmadır. Alerjiye bağlı değildir ve kaşıntı yapmaz.',
      doctorAction: 'Banyo öncesi bebek yağıyla yumuşatıp yumuşak uçlu fırçayla nazikçe tarayınız; kabukları asla tırnakla kazımayınız.',
    },
  },
  {
    id: 'case-4',
    parentObservation: 'Boyunda terleme sonrası minik kırmızı pütürler',
    region: 'Boyun Kıvrımı • Sıcak Ortam',
    dotColor: '#EF4444',
    gradientBg: 'from-red-400/60 via-rose-400/40 to-pink-200/40',
    severity: 'safe',
    aiDetection: {
      title: 'Miliaria Rubra (Kırmızı İsilik)',
      catalog: 'Derma-41 / No. 19',
      confidence: '%98.9 Eşleşme',
      pattern: 'Ter Kanalı Tıkanıklığı',
      description: 'Gelişmekte olan ter bezi kanallarının tıkanmasıyla oluşan ter kabarcıklarıdır; iltihap veya mikrobiyal enfeksiyon içermez.',
      doctorAction: 'Oda sıcaklığını 21-22°C tutun, ince pamuklu giydirin ve ılık suyla ferahlatın; kalın yağlı kremler sürmeyiniz.',
    },
  },
  {
    id: 'case-5',
    parentObservation: 'Ek gıda sonrası aniden kabaran kırmızı harita lekeleri',
    region: 'Tüm Vücut & Bacaklar • 7. Ay',
    dotColor: '#DC2626',
    gradientBg: 'from-red-600/70 via-rose-500/50 to-red-400/40',
    severity: 'urgent',
    aiDetection: {
      title: 'Akut Alerjik Ürtiker (Besin Reaksiyonu)',
      catalog: 'Derma-41 / No. 34',
      confidence: '%96.5 Kritik Uyarı',
      pattern: 'Akut Histaminik Ödem Plakları',
      description: 'Hızlı kabaran ödemli histaminik eritem morfolojisi saptandı. Yeni başlanan gıda içeriğine karşı alerjik tepki gelişmiş olabilir.',
      doctorAction: 'ÖNCELİKLİ HEKİM BAŞVURUSU: Dudak/göz çevresinde şişme veya solunum sıkıntısı varsa acilen acil servise; izole lekelerde çocuk doktorunuza başvurunuz.',
    },
  },
];

/* ── 4 Adımlı Klinik İş Akışı ── */
const clinicalWorkflow = [
  {
    num: '1',
    title: 'Ebeveyn Belirtiyi Fotoğraflar',
    desc: 'Anne veya baba teşhis adı bilmeden sadece gördüğü döküntüyü doğal gün ışığında telefon kamerasıyla çeker.',
  },
  {
    num: '2',
    title: 'BabySensAI 41 Lezyonu Tarar',
    desc: 'Piksel bazlı eritem derinliği, yüzeyel bariyer kaybı ve mikro morfoloji 41 pediatrik cilt tablosu havuzuyla eşleştirilir.',
  },
  {
    num: '3',
    title: 'Anlık Ön Değerlendirme & Bilgilendirme',
    desc: 'Durumun zararsız mı (konak, isilik, toksik eritem), takip mi yoksa öncelikli hekim kontrolü mü olduğu saniyeler içinde sunulur.',
  },
  {
    num: '4',
    title: 'Pediatri ve Hekim Güvencesi Protokolü',
    desc: 'Gereksiz antibiyotik/kortizonlu merhem kullanımının önüne geçilir; kritik durumlarda gecikmeden çocuk hekimi köprüsü kurulur.',
  },
];

export default function SkinAnalysis() {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);
  
  // Animasyon Aşaması: 0: Odaklanma/Vizör, 1: Flaş/Deklanşör, 2: Lazer Taraması, 3: Teşhis & Rapor
  const [animStep, setAnimStep] = useState<0 | 1 | 2 | 3>(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const currentCase = skinCases[selectedCaseIndex];

  // Döngüsel Canlı Mobil Deneyim Akışı
  useEffect(() => {
    if (!isAutoPlay) return;

    let timer: NodeJS.Timeout;
    if (animStep === 0) {
      // 2.6 sn vizör odaklanması
      timer = setTimeout(() => setAnimStep(1), 2600);
    } else if (animStep === 1) {
      // 0.8 sn flaş ve fotoğraf donması
      timer = setTimeout(() => setAnimStep(2), 800);
    } else if (animStep === 2) {
      // 2.4 sn lazer tarama & piksel sınıflandırması
      timer = setTimeout(() => setAnimStep(3), 2400);
    } else if (animStep === 3) {
      // 4.5 sn sonuç raporu gösterimi, sonra başa dön
      timer = setTimeout(() => setAnimStep(0), 4500);
    }

    return () => clearTimeout(timer);
  }, [animStep, isAutoPlay]);

  const handleSelectCase = (idx: number) => {
    setSelectedCaseIndex(idx);
    setAnimStep(0);
  };

  return (
    <section className="py-2 px-2 sm:px-4 bg-transparent relative overflow-hidden w-full flex flex-col justify-center my-auto" id="cilt-analizi">
      {/* Background ambient blur */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1360px] mx-auto relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-2.5">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-sky-700 bg-sky-50 border border-sky-200 px-3.5 py-1 rounded-full mb-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            <span>0–2 Yaş AI Cilt Analizi (Derma-41 Engine)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-navy">
            Ebeveyn fotoğrafı çeker; yapay zekâ 41 cilt tablosu arasından tespit eder.
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-navy/70 leading-relaxed max-w-2xl mx-auto">
            Piksel hassasiyetinde analiz ve hekim güvencesi ile evden anında ön değerlendirme.
          </p>
        </div>

        {/* 41 Cilt Tablosu Hızlı Seçici Butonları */}
        <div className="flex flex-col items-center mb-3">
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl">
            {skinCases.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => handleSelectCase(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  selectedCaseIndex === idx
                    ? 'bg-[#0B1E3B] text-white shadow-md ring-1 ring-sky-400 scale-102'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: c.dotColor }} />
                <span>{c.parentObservation}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Ana İçerik Izgarası (Sol: İş Akışı & Ebeveyn Gözlemi | Sağ: Telefon Simülasyonu) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* SOL KOLON (6 COLS): 4 Adımlı Klinik İş Akışı */}
          <div className="lg:col-span-6 flex flex-col gap-2.5">
            
            {/* Seçili Ebeveyn Gözlem Kartı */}
            <div className="p-3 px-4 rounded-2xl bg-sky-50/80 border border-sky-200 flex items-center justify-between shadow-2xs">
              <span className="text-xs sm:text-sm font-black text-[#0B1E3B] truncate">
                &ldquo;{currentCase.parentObservation}&rdquo;
              </span>
              <span className="text-[11px] font-mono font-bold text-sky-700 bg-white px-2.5 py-0.5 rounded-lg border border-sky-100 shrink-0 ml-2">
                {currentCase.region}
              </span>
            </div>

            {/* 4 Klinik Adım */}
            <div className="flex flex-col gap-2">
              {clinicalWorkflow.map((stepItem, i) => (
                <div
                  key={stepItem.num}
                  className={`p-2.5 px-3 rounded-xl border transition-all flex items-start gap-3 ${
                    animStep === i
                      ? 'bg-white border-sky-400 ring-2 ring-sky-400/20 shadow-xs'
                      : 'bg-white/80 border-slate-200/80 hover:bg-white'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0 ${
                    animStep === i
                      ? 'bg-[#0B1E3B] text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {stepItem.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs sm:text-sm font-bold leading-tight ${animStep === i ? 'text-[#0B1E3B]' : 'text-slate-800'}`}>
                      {stepItem.title}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-1">
                      {stepItem.desc}
                    </p>
                  </div>
                  {animStep === i && (
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse shrink-0 mt-1" />
                  )}
                </div>
              ))}
            </div>

            {/* Bilimsel Sorumluluk & Hekim Güvencesi Notu */}
            <div className="flex items-center gap-2 bg-white/90 p-2.5 rounded-xl border border-slate-200 shadow-2xs text-[11px] text-slate-600 leading-snug">
              <ShieldCheck size={16} className="text-sky-600 shrink-0" />
              <span className="truncate">Tıbbi teşhis koymaz; 41 tablo üzerinden hekim protokolüyle yönlendirir.</span>
            </div>

          </div>

          {/* SAĞ KOLON (6 COLS): Telefon İçinde Canlı Kamera & AI Teşhis Animasyonu */}
          <div className="lg:col-span-6 flex justify-center">
            
            {/* Telefon Mockup'ı */}
            <div className="w-full max-w-[325px] sm:max-w-[340px] rounded-[40px] bg-[#0E1526] p-3 shadow-2xl border-2 border-slate-800 relative select-none">
              
              {/* Ekran İçi Gövde */}
              <div className="w-full rounded-[30px] bg-[#070D19] overflow-hidden flex flex-col text-white relative h-[435px] sm:h-[450px]">
                
                {/* 1. Üst Bar & Dinamik Ada */}
                <div className="pt-2 px-3 pb-1.5 flex items-center justify-between border-b border-white/10 shrink-0">
                  <span className="text-[10px] font-mono text-white/60">09:41</span>
                  
                  {/* Dynamic Island */}
                  <div className="w-24 h-4 bg-black rounded-full flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[8px] font-mono text-white/50 tracking-wider">DERMA-41</span>
                  </div>

                  <span className="text-[9px] font-bold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded-full border border-sky-500/30">
                    CANLI HUD
                  </span>
                </div>

                {/* 2. Telefon İçerik Alanı (Animasyonlu Kamera & Teşhis) */}
                <div className="flex-1 p-3 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* AŞAMA 0: Ebeveyn Kamera Vizörüyle Odaklanıyor */}
                  {animStep === 0 && (
                    <div className="flex-1 flex flex-col justify-between animate-fade-in">
                      <div className="flex items-center justify-between text-[11px] text-slate-300 font-mono">
                        <span className="flex items-center gap-1.5 text-sky-300">
                          <Camera size={13} />
                          Doğal Işıkta Odaklanıyor...
                        </span>
                        <span className="text-white/40">1x Optik</span>
                      </div>

                      {/* Kamera Vizör Alanı */}
                      <div className="my-auto relative aspect-[4/3] rounded-2xl bg-black/60 border border-white/20 overflow-hidden flex items-center justify-center">
                        {/* Cilt lezyonu simülasyon gradyanı */}
                        <div className={`absolute inset-0 bg-gradient-to-tr ${currentCase.gradientBg} blur-lg`} />

                        {/* Odaklama vizör parantezleri */}
                        <div className="absolute inset-6 border border-dashed border-sky-400/80 rounded-xl flex items-center justify-center animate-pulse">
                          <span className="text-[10px] font-mono bg-black/75 px-3 py-1 rounded-full text-sky-300 border border-white/10">
                            Hedef: {currentCase.region}
                          </span>
                        </div>

                        {/* Vizör Köşeleri */}
                        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white" />
                        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white" />
                        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white" />
                        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white" />
                      </div>

                      {/* Deklanşör Düğmesi */}
                      <div className="flex flex-col items-center gap-1 pt-2">
                        <button
                          onClick={() => setAnimStep(1)}
                          className="w-14 h-14 rounded-full border-4 border-white bg-white/20 flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg shadow-white/10"
                        >
                          <div className="w-10 h-10 rounded-full bg-white" />
                        </button>
                        <span className="text-[9px] text-slate-400 font-mono">Fotoğraf Çekmek İçin Dokunun</span>
                      </div>
                    </div>
                  )}

                  {/* AŞAMA 1: Fotoğraf Çekildi (Deklanşör Parlaması ve Görüntü Donması) */}
                  {animStep === 1 && (
                    <div className="flex-1 flex flex-col justify-between animate-fade-in relative">
                      {/* Flaş patlama efekti */}
                      <div className="absolute inset-0 bg-white/95 z-20 animate-fade-out pointer-events-none rounded-2xl" />

                      <div className="flex items-center justify-between text-[11px] text-emerald-400 font-mono">
                        <span className="flex items-center gap-1">
                          <CheckCircle2 size={13} />
                          Fotoğraf Yakalandı
                        </span>
                        <span className="text-white/50">HDR Spektral</span>
                      </div>

                      {/* Yakalanan Net Fotoğraf */}
                      <div className="my-auto relative aspect-[4/3] rounded-2xl bg-black border-2 border-emerald-400/50 overflow-hidden flex items-center justify-center shadow-xl">
                        <div className={`absolute inset-0 bg-gradient-to-tr ${currentCase.gradientBg}`} />
                        <div className="relative z-10 text-center bg-black/75 px-4 py-2 rounded-xl border border-white/20">
                          <p className="text-xs font-bold text-white">{currentCase.region}</p>
                          <p className="text-[9px] text-emerald-300 font-mono mt-0.5">Analize Aktarılıyor...</p>
                        </div>
                      </div>

                      <div className="text-center py-2">
                        <span className="text-[10px] font-mono text-slate-300 bg-white/10 px-3 py-1 rounded-full">
                          BabySensAI Nöral Ağına Aktarılıyor...
                        </span>
                      </div>
                    </div>
                  )}

                  {/* AŞAMA 2: Yapay Zekâ Lazer Taraması & 41 Tablo Eşleştirmesi */}
                  {animStep === 2 && (
                    <div className="flex-1 flex flex-col justify-between animate-fade-in">
                      <div className="flex items-center justify-between text-[11px] text-sky-300 font-mono">
                        <span className="flex items-center gap-1.5">
                          <RotateCw size={13} className="animate-spin text-sky-400" />
                          41 Lezyon Arasında Taranıyor...
                        </span>
                        <span className="text-coral font-bold font-mono">AI SCAN</span>
                      </div>

                      {/* Lazer Tarama Alanı */}
                      <div className="my-auto relative aspect-[4/3] rounded-2xl bg-black border border-sky-400/50 overflow-hidden flex items-center justify-center shadow-xl">
                        <div className={`absolute inset-0 bg-gradient-to-tr ${currentCase.gradientBg}`} />

                        {/* Aşağı yukarı kayan lazer ışığı */}
                        <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-sky-300 to-transparent shadow-[0_0_15px_#38BDF8] animate-laser-scan pointer-events-none" />

                        {/* YZ Tarafından İşaretlenen Noktalar */}
                        <div className="absolute top-[35%] left-[30%] flex items-center gap-1.5 z-10 animate-fade-in">
                          <span className="w-2.5 h-2.5 rounded-full bg-coral animate-ping" />
                          <span className="text-[8px] font-mono font-bold bg-black/80 text-white px-2 py-0.5 rounded-md border border-white/20 whitespace-nowrap shadow-sm">
                            {currentCase.aiDetection.pattern}
                          </span>
                        </div>
                      </div>

                      {/* Analiz Yüklenme Çubuğu */}
                      <div className="flex flex-col gap-1.5 py-1">
                        <div className="flex justify-between text-[10px] font-mono text-slate-300">
                          <span>41 Pediatrik Lezyon Veritabanı Eşleşmesi</span>
                          <span className="text-sky-400 font-bold">%92</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-sky-400 to-coral rounded-full animate-pulse" style={{ width: '92%' }} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* AŞAMA 3: Klinik Teşhis & Doktor Protokolü Çıktısı */}
                  {animStep === 3 && (
                    <div className="flex-1 flex flex-col justify-between animate-fade-in gap-2.5">
                      
                      {/* Üst Onay Rozeti */}
                      <div className="bg-emerald-500/15 border border-emerald-400/40 rounded-xl p-2 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="text-emerald-400" />
                          <span className="text-xs font-bold text-white">Analiz Tamamlandı</span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-300 font-bold bg-emerald-950/80 px-2 py-0.5 rounded-full">
                          {currentCase.aiDetection.confidence}
                        </span>
                      </div>

                      {/* Teşhis Kartı */}
                      <div className="bg-white/10 border border-white/15 rounded-xl p-3 flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-sky-300 uppercase tracking-wider font-bold">
                          {currentCase.aiDetection.catalog}
                        </span>
                        <h4 className="text-sm font-black text-white leading-snug">
                          {currentCase.aiDetection.title}
                        </h4>
                        <p className="text-xs text-white/80 leading-relaxed mt-0.5">
                          {currentCase.aiDetection.description}
                        </p>
                      </div>

                      {/* Hekim Eylem Protokolü */}
                      <div className={`rounded-xl p-3 border flex flex-col gap-1 ${
                        currentCase.severity === 'urgent'
                          ? 'bg-red-950/80 border-red-500/50 text-red-100'
                          : 'bg-gradient-to-r from-sky-950/80 to-slate-900 border-sky-400/40 text-white'
                      }`}>
                        <div className="flex items-center gap-1.5">
                          <Stethoscope size={13} className={currentCase.severity === 'urgent' ? 'text-red-400' : 'text-sky-300'} />
                          <span className="text-[10px] font-bold uppercase tracking-wider">
                            Pediatri ve Hekim Protokolü
                          </span>
                        </div>
                        <p className="text-xs leading-relaxed text-white/90">
                          {currentCase.aiDetection.doctorAction}
                        </p>
                      </div>

                      {/* Yeniden Başlat Butonu */}
                      <button
                        onClick={() => setAnimStep(0)}
                        className="w-full py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        <RotateCw size={12} />
                        <span>Yeni Fotoğraf Çek / Başa Dön</span>
                      </button>

                    </div>
                  )}

                </div>

                {/* Alt Home Çizgisi */}
                <div className="pb-2 flex justify-center">
                  <div className="w-28 h-1 bg-white/20 rounded-full" />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
