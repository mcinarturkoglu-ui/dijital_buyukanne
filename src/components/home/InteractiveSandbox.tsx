'use client';

import { useState, useEffect } from 'react';
import {
  Sparkles,
  Droplets,
  Camera,
  RotateCw,
  CheckCircle2,
  Stethoscope,
  Info,
  Scan,
  Smartphone,
  Play,
  Pause,
  ChevronRight,
  ShieldCheck,
  Zap,
  Layers,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

/* ── 1. CİLT ANALİZİ SENARYOSU: 41 Pediatrik Lezyon Arasından Tespit ── */
const skinDemoStory = {
  title: '41 Pediatrik Cilt Tablosu Taraması',
  shortBadge: '0–2 Yaş Cilt Taraması',
  parentConcern: 'Yanaklarda pütürlü kuruluk ve kızarık döküntü',
  babyAge: 'Ece Bebek • 4 Aylık',
  targetRegion: 'Yanak & Çene Kıvrımı',
  visualGradient: 'from-rose-400 via-red-300 to-amber-200',
  meshPoints: [
    { x: '35%', y: '40%', label: 'Eritem Yoğunluğu: %72' },
    { x: '60%', y: '48%', label: 'Epidermal Bariyer Kaybı' },
    { x: '45%', y: '65%', label: 'Mikro Pullanma Zonları' },
  ],
  aiResult: {
    disease: 'İnfantil Atopik Dermatit (Bebeklik Egzaması)',
    catalog: 'Derma-41 • Tablo No: 04 / 41',
    confidence: '%98.2 Eşleşme',
    summary: 'BabySensAI piksel derinliği taraması, 41 lezyon havuzundan atopik bariyer hasarını doğruladı. Bulaşıcı veya acil bir enfeksiyon tablosu saptanmadı.',
    clinicalAdvice: 'Parfümsüz seramidli bariyer kremiyle günde 2 kez nemlendirin. Kaşıntı uykuyu engelliyorsa çocuk hekiminize danışınız.',
    severity: 'warning' as const,
  },
};

/* ── 2. BEBEK BEZİ & İSHAL SENARYOSU: Renk, İshal & Alerji Taraması ── */
const diaperDemoStory = {
  title: 'Bebek Bezi, Akut İshal & Alerji Taraması',
  shortBadge: 'Sindirim & İshal Skalası',
  parentConcern: 'Bezden taşan su gibi akışkan sarı-yeşil kaka',
  babyAge: 'Ali Bebek • 6 Aylık',
  targetRegion: 'Bebek Bezi Emilim Yüzeyi',
  visualGradient: 'from-yellow-600 via-amber-500 to-lime-700',
  meshPoints: [
    { x: '40%', y: '35%', label: 'Serbest Sıvı Halkası: Geniş' },
    { x: '55%', y: '50%', label: 'Partikülsüz Akışkan Form' },
    { x: '45%', y: '68%', label: 'Dehidrasyon Risk Sinyali' },
  ],
  aiResult: {
    disease: 'Akut Sulu İshal (Gastroenterit / Dehidrasyon Riski)',
    catalog: 'Pediatrik Skala • Akut Sıvı Kaybı',
    confidence: '%96.7 Eşleşme',
    summary: 'Bez dokusunda partikülsüz geniş sıvı emilimi ve hızlı bağırsak geçişi tespit edildi. Dehidrasyon (sıvı kaybı) takibi önceliklidir.',
    clinicalAdvice: 'Emzirmeyi sıklaştırın. Bıngıldak çökmesi, ağlarken gözyaşı olmaması veya bezde idrar kuruluğu varsa vakit kaybetmeden çocuk doktorunuza başvurunuz.',
    severity: 'urgent' as const,
  },
};

export default function InteractiveSandbox() {
  const [activeMode, setActiveMode] = useState<'skin' | 'diaper'>('skin');

  // Animasyon Aşamaları (0: Kamera Vizörü / Hazırlık, 1: Fotoğraf Çekilme / Deklanşör, 2: AI Nöral Tarama, 3: Sonuç Raporu)
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const currentStory = activeMode === 'skin' ? skinDemoStory : diaperDemoStory;

  // Döngüsel otomatik simülasyon akışı
  useEffect(() => {
    if (!isAutoPlaying) return;

    let timer: NodeJS.Timeout;
    if (step === 0) {
      // 2.5 saniye vizörde bekle, sonra fotoğrafı çek
      timer = setTimeout(() => setStep(1), 2500);
    } else if (step === 1) {
      // 0.8 saniye deklanşör flaşı ve fotoğraf donması
      timer = setTimeout(() => setStep(2), 800);
    } else if (step === 2) {
      // 2.4 saniye yapay zeka lazer taraması ve piksel analizi
      timer = setTimeout(() => setStep(3), 2400);
    } else if (step === 3) {
      // 4.5 saniye sonuç raporunu göster, sonra yeni tura geç
      timer = setTimeout(() => setStep(0), 4500);
    }

    return () => clearTimeout(timer);
  }, [step, isAutoPlaying]);

  const stepLabels = [
    { title: '1. Ebeveyn Kamerasını Açar', desc: 'Bölgeyi vizörün içine alır' },
    { title: '2. Fotoğraf Çekilir', desc: 'Net ve doğal ışıkta yakalanır' },
    { title: '3. Yapay Zekâ Tarar', desc: 'Piksel ve renk analizi çalışır' },
    { title: '4. Klinik Rapor Üretilir', desc: 'Doktor protokolüyle sunulur' },
  ];

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-white via-[#F0F8FF]/35 to-white relative overflow-hidden" id="canli-demo">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-coral/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-sky-700 bg-sky-50 border border-sky-200 px-4 py-1.5 rounded-full mb-4 shadow-xs">
            <Sparkles size={14} className="text-sky-600" />
            <span>Kullanım Deneyimi Simülasyonu</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#0B1E3B] tracking-tight leading-tight">
            Ebeveyn fotoğrafı çeker, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#FF5A43]">
              yapay zekâ anında analiz eder.
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            Anne veya babanın tıbbi teşhis bilmesine gerek yoktur. Bebeğin cildindeki kızarıklığı veya bezindeki şüpheli durumu fotoğraflar; yapay zekâmız <strong>41 farklı cilt lezyonu ve kritik dışkı/ishal skalaları</strong> arasından analizi yapıp hekim kontrolü köprüsünü kurar.
          </p>
        </div>

        {/* Tab Switcher: Cilt Fotoğrafı vs. Bebek Bezi Fotoğrafı */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200 shadow-inner">
            <button
              onClick={() => {
                setActiveMode('skin');
                setStep(0);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeMode === 'skin'
                  ? 'bg-[#0B1E3B] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#0B1E3B] hover:bg-white/60'
              }`}
            >
              <Camera size={16} className={activeMode === 'skin' ? 'text-sky-400' : ''} />
              <span>41 Cilt Problemi Taraması</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/15 text-white/90">
                Örnek: Egzama
              </span>
            </button>

            <button
              onClick={() => {
                setActiveMode('diaper');
                setStep(0);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                activeMode === 'diaper'
                  ? 'bg-[#0B1E3B] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#0B1E3B] hover:bg-white/60'
              }`}
            >
              <Droplets size={16} className={activeMode === 'diaper' ? 'text-coral' : ''} />
              <span>Bebek Bezi & İshal Taraması</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-coral/20 text-coral">
                Örnek: Sulu İshal
              </span>
            </button>
          </div>
        </div>

        {/* ── BÜYÜK İNTERAKTİF SİMÜLASYON KARTI ── */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* SOL KOLON (5 COLS): 4 Adımlı Senaryo Akışı & Ebeveyn Gözlemi */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            <div>
              <span className="text-xs font-mono font-bold text-sky-800 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full inline-block mb-3">
                {currentStory.shortBadge}
              </span>
              <h3 className="text-2xl font-black text-[#0B1E3B] leading-tight">
                {currentStory.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Ebeveyn sadece gördüğü belirtiyi fotoğraflar; sistem arka planda 41 cilt tablosu veya pediatrik dışkı skalasıyla anında eşleştirir.
              </p>
            </div>

            {/* Ebeveyn Gözlemi Kutusu */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Ebeveynin Gördüğü Belirti:
              </span>
              <p className="text-sm font-bold text-[#0B1E3B] leading-snug">
                &ldquo;{currentStory.parentConcern}&rdquo;
              </p>
              <div className="flex items-center gap-2 mt-1 text-xs text-slate-500 font-medium">
                <span>{currentStory.babyAge}</span>
                <span>•</span>
                <span className="text-sky-700">{currentStory.targetRegion}</span>
              </div>
            </div>

            {/* 4 Adım İnteraktif İlerleme Listesi */}
            <div className="flex flex-col gap-2.5">
              {stepLabels.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setStep(idx as 0 | 1 | 2 | 3);
                    setIsAutoPlaying(false);
                  }}
                  className={`p-3 rounded-2xl text-left border transition-all flex items-center gap-3 cursor-pointer ${
                    step === idx
                      ? 'bg-sky-50/90 border-sky-400 ring-2 ring-sky-400/25 shadow-xs'
                      : 'bg-white border-slate-200/80 hover:bg-slate-50 opacity-70'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                    step === idx ? 'bg-[#0B1E3B] text-white shadow-sm' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-bold ${step === idx ? 'text-[#0B1E3B]' : 'text-slate-700'}`}>
                      {s.title}
                    </p>
                    <p className="text-[11px] text-slate-500 truncate">{s.desc}</p>
                  </div>
                  {step === idx && (
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse shrink-0" />
                  )}
                </button>
              ))}
            </div>

            {/* Otomatik Oynatma / Durdurma Kontrolü */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 hover:text-sky-950 transition-colors cursor-pointer"
              >
                {isAutoPlaying ? <Pause size={14} /> : <Play size={14} />}
                <span>{isAutoPlaying ? 'Simülasyonu Duraklat' : 'Simülasyonu Oynat'}</span>
              </button>
              <span className="text-[11px] text-slate-400 font-mono">Otomatik Canlandırma</span>
            </div>

          </div>

          {/* SAĞ KOLON (7 COLS): Telefon Çerçevesinde Canlı Mobil Kullanım Animasyonu */}
          <div className="lg:col-span-7 flex justify-center">
            
            {/* Telefon Gövdesi Mockup'ı */}
            <div className="w-full max-w-[340px] sm:max-w-[360px] rounded-[42px] bg-[#0E1526] p-3.5 shadow-2xl border-4 border-slate-800 relative select-none">
              
              {/* Ekran İçi Parlak Cam / Ekran Gövdesi */}
              <div className="w-full rounded-[34px] bg-[#070D19] overflow-hidden flex flex-col text-white relative min-h-[520px]">
                
                {/* 1. Üst Başlık & Dinamik Ada */}
                <div className="pt-3 px-4 pb-2 flex items-center justify-between border-b border-white/10 shrink-0">
                  <span className="text-[10px] font-mono text-white/60">09:41</span>
                  
                  {/* Dynamic Island / Kamera Çentiği */}
                  <div className="w-24 h-4 bg-black rounded-full flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[8px] font-mono text-white/50 tracking-wider">BABYSENSAI</span>
                  </div>

                  <span className="text-[9px] font-bold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded-full border border-sky-500/30">
                    CANLI
                  </span>
                </div>

                {/* 2. Telefon Ekranının Ana İçerik Alanı (Animasyonlu Kamera & Teşhis) */}
                <div className="flex-1 p-3 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* AŞAMA 0: Ebeveyn Kamera Vizörüyle Odaklanıyor */}
                  {step === 0 && (
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
                        {/* Bebek cildi / bez görsel temsili */}
                        <div className={`absolute inset-0 bg-gradient-to-tr ${currentStory.visualGradient} opacity-50 blur-lg`} />

                        {/* Odaklama vizör parantezleri */}
                        <div className="absolute inset-6 border border-dashed border-sky-400/70 rounded-xl flex items-center justify-center animate-pulse">
                          <span className="text-[10px] font-mono bg-black/70 px-2.5 py-1 rounded-full text-sky-300 border border-white/10">
                            Hedef Alan: {currentStory.targetRegion}
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
                          onClick={() => setStep(1)}
                          className="w-14 h-14 rounded-full border-4 border-white bg-white/20 flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg shadow-white/10"
                        >
                          <div className="w-10 h-10 rounded-full bg-white" />
                        </button>
                        <span className="text-[9px] text-slate-400 font-mono">Fotoğraf Çekmek İçin Dokunun</span>
                      </div>
                    </div>
                  )}

                  {/* AŞAMA 1: Fotoğraf Çekildi (Deklanşör Parlaması ve Görüntü Donması) */}
                  {step === 1 && (
                    <div className="flex-1 flex flex-col justify-between animate-fade-in relative">
                      {/* Flaş patlama efekti */}
                      <div className="absolute inset-0 bg-white/90 z-20 animate-fade-out pointer-events-none rounded-2xl" />

                      <div className="flex items-center justify-between text-[11px] text-emerald-400 font-mono">
                        <span className="flex items-center gap-1">
                          <CheckCircle2 size={13} />
                          Fotoğraf Yakalandı
                        </span>
                        <span className="text-white/50">HDR 4K</span>
                      </div>

                      {/* Yakalanan Net Fotoğraf */}
                      <div className="my-auto relative aspect-[4/3] rounded-2xl bg-black border-2 border-emerald-400/50 overflow-hidden flex items-center justify-center shadow-xl">
                        <div className={`absolute inset-0 bg-gradient-to-tr ${currentStory.visualGradient} opacity-70`} />
                        <div className="relative z-10 text-center bg-black/75 px-4 py-2 rounded-xl border border-white/20">
                          <p className="text-xs font-bold text-white">{currentStory.targetRegion}</p>
                          <p className="text-[9px] text-emerald-300 font-mono mt-0.5">Analize Gönderiliyor...</p>
                        </div>
                      </div>

                      <div className="text-center py-2">
                        <span className="text-[10px] font-mono text-slate-300 bg-white/10 px-3 py-1 rounded-full">
                          BabySensAI Nöral Ağına Aktarılıyor...
                        </span>
                      </div>
                    </div>
                  )}

                  {/* AŞAMA 2: Yapay Zekâ Lazer Taraması & Piksel Haritalandırması */}
                  {step === 2 && (
                    <div className="flex-1 flex flex-col justify-between animate-fade-in">
                      <div className="flex items-center justify-between text-[11px] text-sky-300 font-mono">
                        <span className="flex items-center gap-1.5">
                          <RotateCw size={13} className="animate-spin text-sky-400" />
                          {activeMode === 'skin' ? '41 Lezyon Arasında Taranıyor...' : 'İshal & Dışkı Skalası Taranıyor...'}
                        </span>
                        <span className="text-coral font-bold">AI SCAN</span>
                      </div>

                      {/* Lazer Tarama Alanı */}
                      <div className="my-auto relative aspect-[4/3] rounded-2xl bg-black border border-sky-400/50 overflow-hidden flex items-center justify-center shadow-xl">
                        <div className={`absolute inset-0 bg-gradient-to-tr ${currentStory.visualGradient} opacity-60`} />

                        {/* Aşağı yukarı kayan lazer ışığı */}
                        <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-sky-300 to-transparent shadow-[0_0_15px_#38BDF8] animate-laser-scan pointer-events-none" />

                        {/* YZ Tarafından İşaretlenen Noktalar */}
                        {currentStory.meshPoints.map((pt, i) => (
                          <div
                            key={i}
                            className="absolute flex items-center gap-1.5 z-10 animate-fade-in"
                            style={{ top: pt.y, left: pt.x }}
                          >
                            <span className="w-2.5 h-2.5 rounded-full bg-coral animate-ping" />
                            <span className="text-[8px] font-mono font-bold bg-black/80 text-white px-2 py-0.5 rounded-md border border-white/20 whitespace-nowrap shadow-sm">
                              {pt.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Analiz Yüklenme Çubuğu */}
                      <div className="flex flex-col gap-1.5 py-1">
                        <div className="flex justify-between text-[10px] font-mono text-slate-300">
                          <span>Spektral Piksel Sınıflandırması</span>
                          <span className="text-sky-400 font-bold">%88</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-sky-400 to-coral rounded-full animate-pulse" style={{ width: '88%' }} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* AŞAMA 3: Klinik Teşhis & Doktor Protokolü Çıktısı */}
                  {step === 3 && (
                    <div className="flex-1 flex flex-col justify-between animate-fade-in gap-2.5">
                      
                      {/* Üst Onay Rozeti */}
                      <div className="bg-emerald-500/15 border border-emerald-400/40 rounded-xl p-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-emerald-400" />
                          <span className="text-xs font-bold text-white">Analiz Tamamlandı</span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-300 font-bold bg-emerald-950/80 px-2 py-0.5 rounded-full">
                          {currentStory.aiResult.confidence}
                        </span>
                      </div>

                      {/* Teşhis Kartı */}
                      <div className="bg-white/10 border border-white/15 rounded-2xl p-3 flex flex-col gap-1">
                        <span className="text-[9px] font-mono text-sky-300 uppercase tracking-wider font-bold">
                          {currentStory.aiResult.catalog}
                        </span>
                        <h4 className="text-sm font-black text-white leading-snug">
                          {currentStory.aiResult.disease}
                        </h4>
                        <p className="text-[10px] text-white/80 leading-relaxed mt-1">
                          {currentStory.aiResult.summary}
                        </p>
                      </div>

                      {/* Hekim Eylem Protokolü */}
                      <div className={`rounded-2xl p-3 border flex flex-col gap-1 ${
                        currentStory.aiResult.severity === 'urgent'
                          ? 'bg-red-950/80 border-red-500/50 text-red-100'
                          : 'bg-gradient-to-r from-sky-950/80 to-slate-900 border-sky-400/40 text-white'
                      }`}>
                        <div className="flex items-center gap-1.5">
                          <Stethoscope size={13} className={currentStory.aiResult.severity === 'urgent' ? 'text-red-400' : 'text-sky-300'} />
                          <span className="text-[10px] font-bold uppercase tracking-wider">
                            Pediatri ve Hekim Protokolü
                          </span>
                        </div>
                        <p className="text-[10px] leading-relaxed text-white/90">
                          {currentStory.aiResult.clinicalAdvice}
                        </p>
                      </div>

                      {/* Yeniden Başlat Butonu */}
                      <button
                        onClick={() => setStep(0)}
                        className="w-full py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-[10px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <RotateCw size={11} />
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
