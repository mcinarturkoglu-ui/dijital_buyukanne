'use client';

import { useState } from 'react';
import {
  Zap,
  ShieldCheck,
  Check,
  Sparkles,
  Stethoscope,
  Activity,
  Droplets,
  Moon,
  Heart,
  ChevronRight,
  Info,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const modules = [
  {
    id: 'hareket',
    label: 'Nöromotor Hareket',
    angle: 0,
    icon: Activity,
    aiRole: '18 eklem noktasının simetri ve hızını saniyeler içinde hesaplar.',
    expertRole: 'Pediatrik fizyoterapist olası nörolojik gecikmeyi teyit eder.',
  },
  {
    id: 'cilt',
    label: 'Cilt Analizi',
    angle: 60,
    icon: Sparkles,
    aiRole: 'Piksel bazlı eritem ve döküntü yayılımını derin öğrenmeyle sınıflandırır.',
    expertRole: 'Çocuk dermatoloğu güvenli krem veya klinik reçete oluşturur.',
  },
  {
    id: 'dışkı',
    label: 'Bez & Dışkı',
    angle: 120,
    icon: Droplets,
    aiRole: 'Dışkı rengini onaylı renk skalası ve besin alerjisi kartlarıyla eşleştirir.',
    expertRole: 'Çocuk hekimi gerektiğinde klinik beslenme ve takip planı oluşturur.',
  },
  {
    id: 'uyku',
    label: '7/24 Uyku Asistanı',
    angle: 180,
    icon: Moon,
    aiRole: 'Gece 03:00’te atak dönemi rutinleri ve beyaz gürültü önerir.',
    expertRole: 'Uyku danışmanı kronik uykusuzlukta özel ebeveyn planı yazar.',
  },
  {
    id: 'beslenme',
    label: 'Beslenme & Emzirme',
    angle: 240,
    icon: Heart,
    aiRole: 'Aylık kilo/bez takibine göre yaşa uygun tokluk göstergelerini analiz eder.',
    expertRole: 'Laktasyon ve beslenme uzmanı kilo duraklamalarında devreye girer.',
  },
  {
    id: 'gelisim',
    label: 'Genel Gelişim',
    angle: 300,
    icon: Stethoscope,
    aiRole: 'Aylık kilometre taşlarını objektif grafiklerle izler.',
    expertRole: 'Pediatrist genel gelişim tablosunu periyodik muayenede onaylar.',
  },
];

export default function HumanAI() {
  const [activeModule, setActiveModule] = useState(modules[0]);

  return (
    <section className="py-2 px-2 sm:px-4 bg-transparent relative overflow-hidden w-full flex flex-col justify-center my-auto" id="insan-ve-ai">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1360px] mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-turquoise bg-turquoise/5 border border-turquoise/15 px-3.5 py-1 rounded-full mb-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-pulse" />
            <span>İnsan + Yapay Zekâ Dengesi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-navy">
            Yapay zekâ 7/24 destekler. Uzman hekim güvenin merkezindedir.
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-navy/70 leading-relaxed max-w-2xl mx-auto">
            Teknoloji bilgiye ve takibe erişimi demokratikleştirirken, klinik karar ve şefkat her zaman hekim ve uzmanlarımızın rehberliğinde kalır.
          </p>
        </div>

        {/* Interactive Neural Radar Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT 6 COLS: The High-Tech Radial Neural Radar */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center select-none">
              
              {/* Outer Pulsing Rings */}
              <div className="absolute inset-0 rounded-full border border-sky-200/60 animate-spin" style={{ animationDuration: '40s' }} />
              <div className="absolute inset-4 rounded-full border border-dashed border-sky-300/50 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
              <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-sky-100/50 via-transparent to-coral/10 animate-pulse-glow" />

              {/* Central Doctor / Expert Node */}
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#0B2545] via-[#0d3461] to-[#0B2545] flex flex-col items-center justify-center p-2 text-center shadow-xl border-4 border-white z-20 group hover:scale-105 transition-transform duration-300">
                <div className="w-6 h-6 rounded-full bg-sky-400/20 flex items-center justify-center mb-0.5 text-sky-300">
                  <Stethoscope size={13} />
                </div>
                <span className="text-white font-extrabold text-[9px] leading-tight">UZMAN</span>
                <span className="text-sky-300 font-bold text-[7px] uppercase tracking-wider">DESTEĞİ</span>
                <span className="absolute -bottom-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Orbiting Modules */}
              {modules.map((mod) => {
                const rad = (mod.angle - 90) * (Math.PI / 180);
                const radius = 118;
                const x = 50 + (radius * Math.cos(rad)) / 1.8;
                const y = 50 + (radius * Math.sin(rad)) / 1.8;
                const isSelected = activeModule.id === mod.id;
                const Icon = mod.icon;

                return (
                  <div
                    key={mod.id}
                    className="absolute flex items-center justify-center z-30 transition-all duration-300"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <button
                      onClick={() => setActiveModule(mod)}
                      className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition-all duration-300 flex items-center gap-1 shadow-sm cursor-pointer ${
                        isSelected
                          ? 'bg-sky-500 text-white scale-105 shadow-md shadow-sky-400/30 ring-2 ring-sky-400/25'
                          : 'bg-white text-navy/80 hover:bg-sky-50 hover:text-navy border border-gray-200'
                      }`}
                    >
                      <Icon size={11} className={isSelected ? 'text-white' : 'text-sky-500'} />
                      <span className="whitespace-nowrap">{mod.label}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT 6 COLS: Live Interactive Insight Box */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-md border border-gray-100 relative overflow-hidden">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  <span className="text-xs font-bold text-navy uppercase tracking-wider">
                    {activeModule.label} Entegrasyonu
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-sky-50 text-sky-600 border border-sky-200 px-2 py-0.5 rounded-full font-bold">
                  Birlikte Çalışma Prensibi
                </span>
              </div>

              {/* AI Layer */}
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80 mb-2.5">
                <div className="flex items-center gap-1.5 mb-1">
                  <Zap size={14} className="text-sky-500" />
                  <h4 className="text-[11px] font-bold text-navy uppercase tracking-wider">1. Yapay Zekâ (BabySensAI)</h4>
                </div>
                <p className="text-xs text-navy/75 leading-relaxed">
                  {activeModule.aiRole}
                </p>
              </div>

              {/* Specialist Layer */}
              <div className="bg-gradient-to-br from-[#0B2545] to-[#0d3461] text-white rounded-xl p-3 shadow-sm">
                <div className="flex items-center gap-1.5 mb-1">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <h4 className="text-[11px] font-bold text-white uppercase tracking-wider">2. Uzman Hekim & Pedagog</h4>
                </div>
                <p className="text-xs text-white/85 leading-relaxed">
                  {activeModule.expertRole}
                </p>
              </div>

              {/* Tip */}
              <div className="mt-2.5 flex items-center justify-between text-[10px] text-navy/50">
                <span>Modüllere tıklayarak işleyişi inceleyebilirsiniz</span>
                <span className="text-sky-500 font-semibold">Güven + Bilim</span>
              </div>
            </div>

            {/* Bottom summary pills */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-white p-2.5 rounded-xl border border-gray-100 shadow-2xs flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-black text-xs border border-sky-100">
                  24/7
                </div>
                <div>
                  <p className="text-xs font-bold text-navy leading-none">Anlık İzlem</p>
                  <p className="text-[10px] text-navy/50 mt-0.5">Kesintisiz erişim</p>
                </div>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-gray-100 shadow-2xs flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-coral/15 text-coral flex items-center justify-center font-black text-xs">
                  100%
                </div>
                <div>
                  <p className="text-xs font-bold text-navy leading-none">Klinik Güven</p>
                  <p className="text-[10px] text-navy/50 mt-0.5">Hekim doğrulaması</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
