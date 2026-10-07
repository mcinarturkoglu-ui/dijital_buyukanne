'use client';

import { useState } from 'react';
import {
  Camera,
  Cpu,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Layers,
  Activity,
  HeartHandshake,
  ShieldCheck,
  Droplets,
  HelpCircle,
  Info,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import PhoneMockup from '@/components/ui/PhoneMockup';

const stoolSamples = [
  {
    id: 'mustard',
    title: 'Hardal Sarısı / Taneli',
    category: 'Normal Anne Sütü',
    badgeColor: 'bg-emerald-500/15 text-emerald-600 border-emerald-500/30',
    statusDot: 'bg-emerald-500',
    colorHex: '#e9b32a',
    bgGradient: 'from-[#e9b32a]/30 via-[#d4971c]/20 to-[#f9f3e3]',
    urgency: 'Normal (Gelişimle Uyumlu)',
    consistency: 'Yumuşak / Taneli (İdeal)',
    hydration: '%82 Optimal',
    findings: 'Tipik anne sütü sindirim paterni. Mukus, kan veya safra tıkanıklığı bulgusu saptanmadı.',
    advice: 'Mevcut beslenme düzenine devam ediniz. Bebeğin kilo alımı ve bez sayısı düzenli.',
  },
  {
    id: 'green',
    title: 'Yeşilimsi & Yoğun',
    category: 'Mama / Demir Desteği',
    badgeColor: 'bg-emerald-500/15 text-emerald-600 border-emerald-500/30',
    statusDot: 'bg-emerald-500',
    colorHex: '#52796f',
    bgGradient: 'from-[#52796f]/30 via-[#354f52]/20 to-[#f9f3e3]',
    urgency: 'Normal (Beslenme Kaynaklı)',
    consistency: 'Kıvamlı / Macunsu',
    hydration: '%76 Dengeli',
    findings: 'Demir takviyesi veya formül mama içeriğindeki sindirilmiş safra pigmentleri kaynaklı doğal renk değişimi.',
    advice: 'Genellikle geçicidir ve normal kabul edilir. Kusma veya ateş eşlik etmiyorsa endişe edilmemelidir.',
  },
  {
    id: 'mucus',
    title: 'Mukuslu & Köpüksü',
    category: 'Olası Alerji Şüphesi',
    badgeColor: 'bg-amber-500/15 text-amber-600 border-amber-500/30',
    statusDot: 'bg-amber-500',
    colorHex: '#d4a373',
    bgGradient: 'from-[#d4a373]/40 via-[#b5838d]/25 to-[#f9f3e3]',
    urgency: 'Takip Gerektirir (Hekim Bilgisi)',
    consistency: 'Akışkan / Mukuslu Ağ Yapısı',
    hydration: '%88 Yüksek Sıvı',
    findings: 'Bağırsak mukozasında hafif irritasyon veya inek sütü proteini alerjisi (CMPA) ön sinyali olabilir.',
    advice: 'Ebeveyn beslenme günlüğü tutulması ve 48 saat içinde çocuk hekimine danışılması önerilir.',
  },
  {
    id: 'pale',
    title: 'Soluk / Beyaz (Kil Rengi)',
    category: 'Kritik Erken Uyarı',
    badgeColor: 'bg-red-500/15 text-red-600 border-red-500/30',
    statusDot: 'bg-red-500',
    colorHex: '#e5e5e5',
    bgGradient: 'from-[#dcdcdc]/60 via-[#f0ece9]/40 to-[#ffffff]',
    urgency: 'ACİL HEKİM MUAYENESİ',
    consistency: 'Kuru / Tebeşirimsi',
    hydration: '%60 Düşük',
    findings: 'Dışkıda solukluk (akolik renk tonu). Pediatrik renk skalasına göre gecikmeden çocuk hekimi muayenesi önerilir.',
    advice: 'Vakit kaybetmeden en yakın çocuk sağlığı ve hastalıkları hekimine başvurunuz.',
  },
];

const clinicalSteps = [
  {
    step: '1',
    title: 'Doğal Işıkta Bez Fotoğrafı',
    desc: 'Bebeğinizin altını değiştirirken bezi doğal gün ışığında veya flaşsız net bir açıyla görüntüleyin.',
    icon: Camera,
    color: 'text-coral',
    bgColor: 'bg-coral',
  },
  {
    step: '2',
    title: 'Pediatrik Spektrum & Doku Eşleştirmesi',
    desc: 'BabySensAI renk kalibrasyonu yaparak dışkıyı uluslararası Pediatrik Dışkı Renk Kartı ile karşılaştırır.',
    icon: Cpu,
    color: 'text-turquoise',
    bgColor: 'bg-turquoise',
  },
  {
    step: '3',
    title: 'Anlık Ön Değerlendirme & Hekim Tavsiyesi',
    desc: 'Normal gelişim onayı veya acil hekim yönlendirmesi saniyeler içinde telefon ekranınızda belirir.',
    icon: ShieldCheck,
    color: 'text-navy',
    bgColor: 'bg-navy',
  },
];

function DiaperPhoneContent({
  activeSample,
  setActiveSample,
}: {
  activeSample: (typeof stoolSamples)[0];
  setActiveSample: (s: (typeof stoolSamples)[0]) => void;
}) {
  const [isScanning, setIsScanning] = useState(false);
  const [hasFlayed, setHasFlayed] = useState(false);

  const handleScan = () => {
    setHasFlayed(true);
    setIsScanning(true);
    setTimeout(() => setHasFlayed(false), 200);
    setTimeout(() => setIsScanning(false), 1200);
  };

  return (
    <div className="h-full flex flex-col bg-slate-950 text-white select-none">
      {/* App Header */}
      <div className="bg-slate-900/90 backdrop-blur-md px-3.5 py-3 flex items-center justify-between border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-coral/20 flex items-center justify-center">
            <Droplets className="w-4 h-4 text-coral" />
          </div>
          <div>
            <span className="text-white font-bold text-xs leading-none block">AI Bebek Bezi Analizi</span>
            <span className="text-[9px] text-white/50">StoolColorVision v2.3</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-turquoise/15 text-turquoise px-2 py-0.5 rounded-full text-[9px] font-mono border border-turquoise/30 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-ping" />
          <span>CANLI HUD</span>
        </div>
      </div>

      {/* Main Viewport: Optical Diaper HUD */}
      <div className="flex-1 p-3 flex flex-col gap-2.5 overflow-hidden">
        
        {/* Diaper Capture Viewport */}
        <div className="relative aspect-[4/3] rounded-2xl bg-slate-950 border-2 border-white/20 overflow-hidden flex items-center justify-center">
          
          {/* Simulated Diaper Cotton Background & Stool Color Area */}
          <div className={`absolute inset-0 bg-gradient-to-tr ${activeSample.bgGradient} transition-all duration-500`} />

          {/* Diaper Fabric Texture Lines */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#082A46 1px, transparent 1px)',
              backgroundSize: '12px 12px',
            }}
          />

          {/* Shutter Flash Effect */}
          {hasFlayed && (
            <div className="absolute inset-0 bg-white z-50 animate-fade-out pointer-events-none" />
          )}

          {/* Sample Stool Spot simulation */}
          <div className="relative flex items-center justify-center">
            <div
              className="w-20 h-20 rounded-full blur-md opacity-85 transition-colors duration-500"
              style={{ backgroundColor: activeSample.colorHex }}
            />
            <div
              className="absolute w-12 h-12 rounded-full blur-xs opacity-95 transition-colors duration-500"
              style={{ backgroundColor: activeSample.colorHex }}
            />
          </div>

          {/* AI Color Sampling Reticle */}
          <div className="absolute w-28 h-28 border-2 border-dashed border-turquoise rounded-2xl flex flex-col items-center justify-between p-1.5 pointer-events-none shadow-[0_0_15px_rgba(20,187,183,0.4)]">
            <div className="w-full flex justify-between">
              <span className="w-3 h-3 border-t-2 border-l-2 border-turquoise" />
              <span className="w-3 h-3 border-t-2 border-r-2 border-turquoise" />
            </div>
            <div className="text-[8px] font-mono text-turquoise font-bold bg-black/75 px-2 py-0.5 rounded backdrop-blur-sm">
              RGB: {activeSample.colorHex}
            </div>
            <div className="w-full flex justify-between">
              <span className="w-3 h-3 border-b-2 border-l-2 border-turquoise" />
              <span className="w-3 h-3 border-b-2 border-r-2 border-turquoise" />
            </div>
          </div>

          {/* Scanning line */}
          {isScanning && (
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-turquoise to-transparent shadow-[0_0_10px_#14BBB7] animate-laser-scan pointer-events-none" />
          )}

          {/* Viewport Top Badge */}
          <div className="absolute top-2 left-2 flex items-center gap-1.5">
            <span className="bg-black/70 backdrop-blur-md text-[8px] font-mono px-2 py-0.5 rounded text-white/90 border border-white/10 uppercase font-semibold">
              {activeSample.title}
            </span>
          </div>

          {/* Urgency indicator */}
          <div className="absolute bottom-2 right-2">
            <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full border backdrop-blur-md ${activeSample.badgeColor}`}>
              {activeSample.urgency}
            </span>
          </div>
        </div>

        {/* Sample Palette Switcher inside Phone */}
        <div className="flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-xl border border-white/10 overflow-x-auto">
          {stoolSamples.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSample(s)}
              className={`flex-1 min-w-[70px] py-1.5 px-2 rounded-lg text-[10px] font-bold transition-all text-center truncate cursor-pointer ${
                activeSample.id === s.id
                  ? 'bg-turquoise text-navy font-black shadow-sm'
                  : 'text-white/70 hover:text-white bg-white/5'
              }`}
            >
              {s.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* AI Findings Card */}
        <div className="bg-slate-900 rounded-xl p-3 border border-white/10 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                {isScanning ? (
                  <RefreshCw size={12} className="text-turquoise animate-spin" />
                ) : (
                  <CheckCircle2 size={13} className="text-emerald-400" />
                )}
                <span>Pediatrik Ön Değerlendirme</span>
              </span>
              <span className="text-[10px] font-mono text-turquoise font-bold">
                {isScanning ? 'Taranıyor...' : '%98.9 Güven'}
              </span>
            </div>

            <p className="text-[11px] text-white/80 leading-relaxed">
              {activeSample.findings}
            </p>

            <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/70">
              <span>Kıvam: <strong className="text-white">{activeSample.consistency}</strong></span>
              <span>Hidrasyon: <strong className="text-emerald-400">{activeSample.hydration}</strong></span>
            </div>
          </div>

          {/* Trigger Scan Button */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-[9px] text-white/50">DSÖ Pediatrik Renk Skalası</span>
            <button
              onClick={handleScan}
              className="text-[10px] font-bold text-navy bg-turquoise hover:bg-white px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm cursor-pointer"
            >
              <Camera size={12} />
              <span>Yeniden Tara</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StoolAnalysis() {
  const [activeSample, setActiveSample] = useState(stoolSamples[0]);

  return (
    <section className="py-2 px-2 sm:px-4 bg-transparent relative overflow-hidden w-full flex flex-col justify-center my-auto" id="bez-analizi">
      {/* Decorative ambient background */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1360px] mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-turquoise bg-turquoise/5 border border-turquoise/15 px-3.5 py-1 rounded-full mb-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-pulse" />
            <span>AI Bebek Bezi & Dışkı Analizi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-navy">
            Bebek bezindeki ipuçlarını yapay zekâ ile saniyeler içinde anlayın.
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-navy/70 leading-relaxed max-w-2xl mx-auto">
            Bebeğinizin bezindeki dışkı rengi, dokusu ve kıvamı; sindirim sistemi, beslenme uyumu ve genel gelişim hakkında en erken sinyalleri verir.
          </p>
        </div>

        {/* 4 Stool Color Categories Preview Bar */}
        <div className="mb-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          {stoolSamples.map((sample) => (
            <button
              key={sample.id}
              onClick={() => setActiveSample(sample)}
              className={`premium-card p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                activeSample.id === sample.id
                  ? 'border-turquoise bg-turquoise/5 shadow-md shadow-turquoise/15 scale-102 ring-2 ring-turquoise/30'
                  : 'border-gray-200/90 hover:border-turquoise/40 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className="w-4 h-4 rounded-full border border-black/10 shadow-sm shrink-0"
                  style={{ backgroundColor: sample.colorHex }}
                />
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${sample.badgeColor}`}>
                  {sample.category}
                </span>
              </div>
              <h4 className="font-bold text-navy text-xs sm:text-sm group-hover:text-turquoise transition-colors truncate">
                {sample.title}
              </h4>
              <p className="text-[10px] text-navy/60 mt-0.5 truncate">
                {sample.urgency}
              </p>
            </button>
          ))}
        </div>

        {/* Main Grid: Steps & Phone Mockup */}
        <div className="mt-2.5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          
          {/* LEFT 7 COLS: Information, Pediatric Importance & Stepper */}
          <div className="lg:col-span-7 flex flex-col gap-2">
            
            {/* Active Sample Medical Insight Box */}
            <div className="bg-gradient-to-br from-[#082A46] via-[#093254] to-[#0d3455] text-white p-3 rounded-2xl shadow-md border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between gap-2 mb-1">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${activeSample.statusDot} animate-pulse`} />
                  <span className="text-[10px] font-mono font-bold text-turquoise uppercase tracking-wider">
                    {activeSample.category}
                  </span>
                </div>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${activeSample.badgeColor}`}>
                  {activeSample.urgency}
                </span>
              </div>

              <h3 className="text-sm font-bold text-white mb-0.5">{activeSample.title}</h3>
              <p className="text-[11px] text-white/80 leading-snug line-clamp-2 mb-1.5">
                {activeSample.findings}
              </p>

              {/* Clinical Advice */}
              <div className="bg-white/10 rounded-xl p-1.5 px-2.5 border border-white/10">
                <div className="flex items-center gap-1.5 text-turquoise text-[10px] font-bold mb-0.5">
                  <HeartHandshake size={11} />
                  <span>Uzman & Ebeveyn Rehberliği</span>
                </div>
                <p className="text-[10px] text-white/90 leading-snug line-clamp-2">
                  {activeSample.advice}
                </p>
              </div>
            </div>

            {/* Step list */}
            <div className="flex flex-col gap-2">
              {clinicalSteps.map((step) => {
                return (
                  <div
                    key={step.step}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-gray-200/80 shadow-2xs hover:border-turquoise/50 transition-all"
                  >
                    <div className={`w-7 h-7 rounded-lg ${step.bgColor} text-white flex items-center justify-center shrink-0 font-bold text-xs`}>
                      {step.step}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h5 className="font-bold text-xs sm:text-sm text-navy truncate">
                        {step.title}
                      </h5>
                      <p className="text-[11px] text-slate-500 leading-tight line-clamp-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT 5 COLS: Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-coral/20 rounded-[40px] blur-2xl opacity-40 scale-95" />
              <PhoneMockup size="md" dark label="AI Bez & Dışkı Taraması">
                <DiaperPhoneContent
                  activeSample={activeSample}
                  setActiveSample={setActiveSample}
                />
              </PhoneMockup>
            </div>
          </div>
        </div>

        {/* Disclaimer Card */}
        <div className="mt-2 bg-slate-50 border-l-2 border-turquoise rounded-xl p-1.5 px-2.5 max-w-3xl mx-auto flex items-center gap-2">
          <Info size={12} className="text-turquoise shrink-0" />
          <p className="text-[9px] text-navy/70 leading-tight">
            <strong className="font-bold text-navy">Önemli Bilgilendirme: </strong>
            Pediatrik dışkı renk skalası ile görsel ön değerlendirme sunar; kesin tanı koymaz.
          </p>
        </div>
      </div>
    </section>
  );
}
