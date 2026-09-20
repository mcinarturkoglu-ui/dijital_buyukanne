'use client';

import { useState, useEffect } from 'react';
import { Camera, Cpu, BookOpen, Sparkles, CheckCircle2, Scan, RefreshCw, ZoomIn, Eye, ShieldAlert, Sliders } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import PhoneMockup from '@/components/ui/PhoneMockup';

const steps = [
  {
    number: '1',
    icon: Camera,
    label: '1. Yüksek Çözünürlüklü Çekim',
    desc: 'Bebeğinizin cildindeki kızarıklık veya döküntüyü doğal ışık altında fotoğraflayın.',
    iconColor: 'text-coral',
    circleBg: 'bg-coral',
  },
  {
    number: '2',
    icon: Cpu,
    label: '2. Multi-Spektral AI Taraması',
    desc: 'BabySensAI piksel renk dağılımını ve eritem yoğunluğunu pediatrik veri havuzuyla eşleştirir.',
    iconColor: 'text-turquoise',
    circleBg: 'bg-turquoise',
  },
  {
    number: '3',
    icon: BookOpen,
    label: '3. Bilgilendirici Ön Rapor ve Tavsiye',
    desc: 'Bebek cildi için güvenli bakım adımları listelenir, gerekiyorsa uzman randevusu önerilir.',
    iconColor: 'text-navy',
    circleBg: 'bg-navy',
  },
];

function SkinAnalysisPhoneContent() {
  const [scanStep, setScanStep] = useState<0 | 1 | 2>(1); // 0: photo, 1: scanning, 2: evaluated
  const [filterMode, setFilterMode] = useState<'rgb' | 'contrast' | 'ai'>('contrast');
  const [zoomLevel, setZoomLevel] = useState<'1x' | '2x'>('1x');
  const [isFlashing, setIsFlashing] = useState(false);

  // Auto scan cycle
  useEffect(() => {
    const cycle = setInterval(() => {
      setScanStep((prev) => ((prev + 1) % 3) as 0 | 1 | 2);
    }, 4000);
    return () => clearInterval(cycle);
  }, []);

  const triggerCapture = () => {
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 200);
    setScanStep(1);
    setTimeout(() => setScanStep(2), 1500);
  };

  return (
    <div className="h-full flex flex-col bg-slate-950 text-white select-none">
      {/* App header */}
      <div className="bg-slate-900/90 backdrop-blur-md px-3.5 py-3 flex items-center justify-between border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-coral/20 flex items-center justify-center">
            <Camera className="w-4 h-4 text-coral" />
          </div>
          <div>
            <span className="text-white font-bold text-xs leading-none block">AI Cilt Kamerası</span>
            <span className="text-[9px] text-white/50">BabySensAI Vision v2.1</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-turquoise/15 text-turquoise px-2.5 py-1 rounded-full text-[9px] font-mono border border-turquoise/30">
          <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-ping" />
          <span>CANLI HUD</span>
        </div>
      </div>

      {/* Main Viewport: Camera Optical HUD */}
      <div className="flex-1 p-3 flex flex-col gap-2.5 overflow-hidden">
        
        {/* Optical Viewfinder Box */}
        <div className="relative aspect-[4/3] rounded-2xl bg-slate-950 border-2 border-white/20 overflow-hidden flex items-center justify-center">
          
          {/* Simulated baby cheek skin gradient according to filter */}
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              filterMode === 'rgb'
                ? 'bg-gradient-to-tr from-[#fcd5ce] via-[#fae1dd] to-[#f8edeb]'
                : filterMode === 'contrast'
                ? 'bg-gradient-to-tr from-[#9d0208]/30 via-[#d00000]/20 to-[#370617]/30 backdrop-contrast-150'
                : 'bg-gradient-to-tr from-[#14BBB7]/40 via-[#082A46] to-[#FF7965]/40'
            }`}
          />

          {/* Shutter Flash Effect */}
          {isFlashing && (
            <div className="absolute inset-0 bg-white z-50 animate-fade-out pointer-events-none" />
          )}

          {/* Optical Zoom Level Transform */}
          <div
            className={`relative transition-transform duration-500 ${
              zoomLevel === '2x' ? 'scale-125' : 'scale-100'
            } flex items-center justify-center`}
          >
            {/* Skin Spot Simulation (Erythema / Irritation) */}
            <div className="relative w-20 h-20 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-red-500/35 blur-md animate-pulse" />
              <div className="w-10 h-10 rounded-full bg-red-600/45 blur-xs" />
            </div>

            {/* AI Real-time Bounding Reticle */}
            <div className="absolute w-24 h-24 border-2 border-dashed border-turquoise rounded-2xl flex flex-col items-center justify-between p-1 pointer-events-none shadow-[0_0_15px_rgba(20,187,183,0.5)]">
              {/* Corner brackets */}
              <div className="w-full flex justify-between">
                <span className="w-2.5 h-2.5 border-t-2 border-l-2 border-turquoise" />
                <span className="w-2.5 h-2.5 border-t-2 border-r-2 border-turquoise" />
              </div>
              <div className="text-[8px] font-mono text-turquoise font-bold bg-black/60 px-1.5 py-0.5 rounded">
                ROI: %99.2 Netlik
              </div>
              <div className="w-full flex justify-between">
                <span className="w-2.5 h-2.5 border-b-2 border-l-2 border-turquoise" />
                <span className="w-2.5 h-2.5 border-b-2 border-r-2 border-turquoise" />
              </div>
            </div>
          </div>

          {/* Vertical Scan Laser */}
          {scanStep === 1 && (
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-turquoise to-transparent shadow-[0_0_10px_#14BBB7] animate-laserscan pointer-events-none" />
          )}

          {/* Filter Badge on Screen */}
          <div className="absolute top-2 left-2 flex items-center gap-1.5">
            <span className="bg-black/70 backdrop-blur-md text-[8px] font-mono px-2 py-0.5 rounded text-turquoise border border-white/10 uppercase">
              {filterMode === 'rgb' ? 'Doğal Işık' : filterMode === 'contrast' ? 'Eritem Kontrastı' : 'AI Isı Modu'}
            </span>
          </div>

          {/* Zoom Toggle Pill */}
          <div className="absolute top-2 right-2">
            <button
              onClick={() => setZoomLevel(zoomLevel === '1x' ? '2x' : '1x')}
              className="bg-black/70 backdrop-blur-md text-[9px] font-mono px-2 py-0.5 rounded text-white border border-white/15 hover:border-turquoise"
            >
              {zoomLevel}
            </button>
          </div>

          {/* Status Label on Viewport */}
          <div className="absolute bottom-2 inset-x-2 flex items-center justify-between pointer-events-none">
            <span className="text-[8px] font-mono bg-black/70 px-2 py-0.5 rounded text-white/80">
              {scanStep === 0 && 'Fotoğraf Alındı'}
              {scanStep === 1 && 'Piksel Yoğunluğu Taranıyor...'}
              {scanStep === 2 && 'Ön Bilgilendirme Çıkarıldı'}
            </span>
            <span className="text-[8px] font-mono text-emerald-400 font-bold bg-black/70 px-2 py-0.5 rounded">
              {scanStep === 0 ? '%35 Hazır' : scanStep === 1 ? '%78 Taranıyor' : '%99.2 Güven'}
            </span>
          </div>
        </div>

        {/* Filter Selection Controls */}
        <div className="flex items-center justify-between gap-1 bg-slate-900/80 p-1.5 rounded-xl border border-white/10">
          {[
            { id: 'rgb', label: 'Doğal RGB' },
            { id: 'contrast', label: 'Eritem / Kontrast' },
            { id: 'ai', label: 'AI Termal' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilterMode(f.id as any)}
              className={`flex-1 py-1 rounded-lg text-[9px] font-bold transition-all ${
                filterMode === f.id
                  ? 'bg-turquoise text-navy shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Dynamic Status / Result Breakdown */}
        <div className="bg-slate-900 rounded-xl p-3 border border-white/10 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold text-white flex items-center gap-1.5">
                {scanStep === 2 ? (
                  <CheckCircle2 size={12} className="text-emerald-400" />
                ) : (
                  <RefreshCw size={11} className={`text-turquoise ${scanStep === 1 ? 'animate-spin' : ''}`} />
                )}
                {scanStep === 2 ? 'Ön Sınıflandırma: Hafif Pişik' : 'Doku Analizi Sürüyor'}
              </span>
              <span className="text-[9px] font-mono text-emerald-400 font-bold">
                {scanStep === 2 ? 'Derece: Hafif / Yüzeysel' : 'Bekleniyor...'}
              </span>
            </div>

            <p className="text-[9px] text-white/70 leading-relaxed">
              {scanStep < 2
                ? 'Kızarıklık yayılım alanı ve doku gözenekleri pediatrik algoritma tarafından inceleniyor...'
                : 'Yanak bölgesinde hafif atopik kuruluk ve tahriş saptandı. Çinko oksit içerikli bariyer krem uygulaması ve tahriş devam ederse hekim muayenesi önerilir.'}
            </p>
          </div>

          {/* Trigger Capture Button */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-[8px] text-white/40">Teşhis amacı taşımaz</span>
            <button
              onClick={triggerCapture}
              className="text-[9px] font-bold text-navy bg-turquoise hover:bg-white px-3 py-1 rounded-lg transition-colors flex items-center gap-1 shadow-sm"
            >
              <Camera size={11} />
              <span>Anında Tara</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SkinAnalysis() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-soft-gray overflow-hidden" id="cilt-analizi">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="AI Cilt Analizi"
          title="Fotoğraf çek. Yükle. Saniyeler içinde ön değerlendirme al."
          subtitle="BabySensAI görüntü işleme teknolojisi, bebeğinizin cildindeki döküntü ve kızarıklıkları analiz ederek sizi bilgilendirir ve doğru desteğe yönlendirir."
          centered
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Steps + Info card */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex flex-col">
                    <div className="flex items-start gap-4">
                      {/* Number badge */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-2xl ${step.circleBg} flex items-center justify-center shadow-md flex-shrink-0 text-white font-bold text-sm`}
                        >
                          {step.number}
                        </div>
                        {i < steps.length - 1 && (
                          <div className="w-0.5 h-8 border-l-2 border-dashed border-navy/20 mt-1" />
                        )}
                      </div>

                      {/* Content Card */}
                      <div className="bg-white rounded-2xl p-5 flex-1 shadow-sm border border-gray-100 hover:shadow-card-hover hover:border-turquoise/30 hover:-translate-x-1.5 transition-all duration-300 flex items-start gap-4 group cursor-default">
                        <div className="w-11 h-11 rounded-xl bg-soft-gray group-hover:bg-turquoise/15 flex items-center justify-center flex-shrink-0 transition-colors">
                          <Icon className={`w-5 h-5 ${step.iconColor} group-hover:scale-110 transition-transform`} />
                        </div>
                        <div>
                          <p className="font-bold text-navy text-base group-hover:text-turquoise transition-colors">{step.label}</p>
                          <p className="text-xs md:text-sm text-navy/60 mt-1 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Info alert card */}
            <div className="bg-white border-l-4 border-turquoise rounded-2xl p-6 shadow-sm border border-gray-100/80">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-turquoise" />
                <span className="text-xs font-bold text-navy uppercase tracking-wider">Erken Farkındalık Rehberi</span>
              </div>
              <p className="text-xs md:text-sm text-navy/70 leading-relaxed font-medium">
                Bu sistem klinik hekim kararının yerini almaz; aileyi ev ortamında bilinçlendirerek gereksiz endişeyi azaltmayı, olası bir enfeksiyon şüphesinde ise gecikmeden çocuk doktoruna başvurulmasını sağlamayı amaçlar.
              </p>
            </div>
          </div>

          {/* Right: Phone mockup with live HUD camera */}
          <div className="flex justify-center">
            <div className="relative animate-float-slow">
              <div className="absolute inset-0 bg-coral/20 rounded-[40px] blur-3xl opacity-40 scale-95" />
              <PhoneMockup size="md" dark label="Canlı Kamera AI Analizi">
                <SkinAnalysisPhoneContent />
              </PhoneMockup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
