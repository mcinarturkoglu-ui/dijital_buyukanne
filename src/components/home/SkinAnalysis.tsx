'use client';

import { useState, useEffect } from 'react';
import { Camera, Cpu, BookOpen, Sparkles, CheckCircle2, Scan, RefreshCw, ZoomIn, Eye, ShieldAlert, Sliders, Info } from 'lucide-react';
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
        <div className="flex items-center gap-1.5 bg-turquoise/15 text-turquoise px-2.5 py-1 rounded-full text-[9px] font-mono border border-turquoise/30 font-bold">
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
            }`}
          >
            {/* Skin Target Ring Area */}
            <div className="w-28 h-28 rounded-full border-2 border-dashed border-coral/80 relative flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-coral/30 blur-md animate-pulse" />
              
              {/* Corner HUD Markers */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-turquoise" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-turquoise" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-turquoise" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-turquoise" />
            </div>
          </div>

          {/* Moving Laser Scanner Line */}
          {scanStep === 1 && (
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-turquoise to-transparent animate-laser-scan shadow-[0_0_12px_#14BBB7]" />
          )}

          {/* Viewfinder Overlay Telemetry */}
          <div className="absolute top-2 left-2 right-2 flex items-center justify-between text-[8px] font-mono text-white/80 pointer-events-none">
            <span className="bg-black/60 px-1.5 py-0.5 rounded backdrop-blur">ISO 100 • F/1.8</span>
            <span className="bg-black/60 px-1.5 py-0.5 rounded backdrop-blur text-turquoise">
              {filterMode.toUpperCase()} MODU
            </span>
          </div>

          {/* Bottom Zoom & Filter Pill in Viewfinder */}
          <div className="absolute bottom-2 inset-x-2 flex items-center justify-between pointer-events-auto">
            <div className="flex gap-1 bg-black/60 p-1 rounded-lg backdrop-blur">
              {(['rgb', 'contrast', 'ai'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setFilterMode(m)}
                  className={`text-[8px] font-mono px-1.5 py-0.5 rounded uppercase font-bold transition-colors ${
                    filterMode === m ? 'bg-turquoise text-navy' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            <button
              onClick={() => setZoomLevel(zoomLevel === '1x' ? '2x' : '1x')}
              className="text-[8px] font-mono bg-black/60 text-white/90 px-2 py-1 rounded-lg backdrop-blur flex items-center gap-1 font-bold"
            >
              <ZoomIn size={9} />
              <span>{zoomLevel}</span>
            </button>
          </div>
        </div>

        {/* Real-time Analysis Card inside Phone */}
        <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-2.5 flex-1 flex flex-col justify-between">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
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
              className="text-[9px] font-bold text-navy bg-turquoise hover:bg-white px-3 py-1 rounded-lg transition-colors flex items-center gap-1 shadow-sm cursor-pointer"
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
    <section className="py-20 md:py-28 px-4 md:px-8 bg-soft-gray relative overflow-hidden" id="cilt-analizi">
      {/* Decorative ambient blur */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-coral/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
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
                          <div className="w-0.5 h-8 border-l-2 border-dashed border-turquoise/40 mt-1" />
                        )}
                      </div>

                      {/* Content Card */}
                      <div className="premium-card bg-white rounded-2xl p-5 flex-1 shadow-sm border border-gray-100/90 hover:shadow-card-hover hover:border-turquoise/40 transition-all duration-300 flex items-start gap-4 group cursor-default">
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
            <div className="bg-white border-l-4 border-turquoise rounded-2xl p-6 shadow-sm border border-gray-100/80 relative overflow-hidden">
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
