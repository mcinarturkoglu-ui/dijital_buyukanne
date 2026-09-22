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
    findings: 'Dışkıda safra boyası eksikliği (akolik dışkı). Biliyer atrezi veya karaciğer fonksiyon anomalisi şüphesi.',
    advice: 'Vakit kaybetmeden en yakın çocuk sağlığı ve hastalıkları hekimine veya acil servise başvurunuz.',
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
              className={`flex-1 min-w-[65px] py-1 px-1.5 rounded-lg text-[8px] font-bold transition-all text-center truncate cursor-pointer ${
                activeSample.id === s.id
                  ? 'bg-turquoise text-navy font-black shadow-sm'
                  : 'text-white/60 hover:text-white bg-white/5'
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
              <span className="text-[10px] font-bold text-white flex items-center gap-1.5">
                {isScanning ? (
                  <RefreshCw size={11} className="text-turquoise animate-spin" />
                ) : (
                  <CheckCircle2 size={12} className="text-emerald-400" />
                )}
                <span>Pediatrik Ön Değerlendirme</span>
              </span>
              <span className="text-[9px] font-mono text-turquoise font-bold">
                {isScanning ? 'Taranıyor...' : '%98.9 Güven'}
              </span>
            </div>

            <p className="text-[9px] text-white/70 leading-relaxed">
              {activeSample.findings}
            </p>

            <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[8px] text-white/60">
              <span>Kıvam: <strong className="text-white">{activeSample.consistency}</strong></span>
              <span>Hidrasyon: <strong className="text-emerald-400">{activeSample.hydration}</strong></span>
            </div>
          </div>

          {/* Trigger Scan Button */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-[8px] text-white/40">Pediatrik renk eşleştirmesi</span>
            <button
              onClick={handleScan}
              className="text-[9px] font-bold text-navy bg-turquoise hover:bg-white px-3 py-1 rounded-lg transition-colors flex items-center gap-1 shadow-sm cursor-pointer"
            >
              <Camera size={11} />
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
    <section className="py-20 md:py-28 px-4 md:px-8 bg-white relative overflow-hidden" id="bez-analizi">
      {/* Decorative ambient background */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="AI Bebek Bezi & Dışkı Analizi"
          title="Bebek bezindeki ipuçlarını yapay zekâ ile saniyeler içinde anlayın."
          subtitle="Bebeğinizin bezindeki dışkı rengi, dokusu ve kıvamı; sindirim sistemi, alerjiler ve karaciğer sağlığı hakkında en erken sinyalleri verir."
          centered
        />

        {/* 4 Stool Color Categories Preview Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3.5">
          {stoolSamples.map((sample) => (
            <button
              key={sample.id}
              onClick={() => setActiveSample(sample)}
              className={`premium-card p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                activeSample.id === sample.id
                  ? 'border-turquoise bg-turquoise/5 shadow-md shadow-turquoise/15 scale-102 ring-2 ring-turquoise/30'
                  : 'border-gray-200/90 hover:border-turquoise/40 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="w-4 h-4 rounded-full border border-black/10 shadow-sm shrink-0"
                  style={{ backgroundColor: sample.colorHex }}
                />
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${sample.badgeColor}`}>
                  {sample.category}
                </span>
              </div>
              <h4 className="font-bold text-navy text-xs md:text-sm group-hover:text-turquoise transition-colors">
                {sample.title}
              </h4>
              <p className="text-[11px] text-navy/60 mt-1 line-clamp-1">
                {sample.urgency}
              </p>
            </button>
          ))}
        </div>

        {/* Main Grid: Steps & Phone Mockup */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT 7 COLS: Information, Pediatric Importance & Stepper */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Active Sample Medical Insight Box */}
            <div className="bg-gradient-to-br from-[#082A46] via-[#093254] to-[#0d3455] text-white p-6 md:p-7 rounded-3xl shadow-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-turquoise/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${activeSample.statusDot} animate-pulse`} />
                  <span className="text-xs font-mono font-bold text-turquoise uppercase tracking-wider">
                    {activeSample.category}
                  </span>
                </div>
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${activeSample.badgeColor}`}>
                  {activeSample.urgency}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{activeSample.title}</h3>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed mb-4">
                {activeSample.findings}
              </p>

              {/* Clinical Advice */}
              <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-turquoise text-xs font-bold mb-1.5">
                  <HeartHandshake size={15} />
                  <span>Uzman & Ebeveyn Rehberliği</span>
                </div>
                <p className="text-xs md:text-sm text-white/90 leading-relaxed">
                  {activeSample.advice}
                </p>
              </div>
            </div>

            {/* Step list */}
            <div className="flex flex-col gap-3">
              {clinicalSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    className="premium-card flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100/90 shadow-sm hover:shadow-card-hover hover:border-turquoise/35 transition-all duration-300 group cursor-default"
                  >
                    <div className={`w-10 h-10 rounded-xl ${step.bgColor} text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      {step.step}
                    </div>
                    <div>
                      <h5 className="font-bold text-navy text-sm group-hover:text-turquoise transition-colors">
                        {step.title}
                      </h5>
                      <p className="text-xs text-navy/60 mt-0.5 leading-relaxed">
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
            <div className="relative animate-float-slow">
              <div className="absolute inset-0 bg-coral/20 rounded-[40px] blur-3xl opacity-40 scale-95" />
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
        <div className="mt-14 bg-soft-gray border-l-4 border-turquoise rounded-2xl p-5 md:p-6 max-w-3xl mx-auto shadow-sm flex items-start gap-3.5">
          <Info size={20} className="text-turquoise shrink-0 mt-0.5" />
          <p className="text-xs md:text-sm text-navy/70 leading-relaxed">
            <strong className="font-bold text-navy">Önemli Klinik Bilgilendirme: </strong>
            Bebek bezi analiz modülü tıbbi laboratuvar testi veya kesin teşhis aracı değildir. Pediatrik dışkı renk skalası ile görsel ön değerlendirme sunarak ebeveynlerde erken farkındalık oluşturmayı ve gerektiğinde hekim muayenesini geciktirmemeyi amaçlar.
          </p>
        </div>
      </div>
    </section>
  );
}
