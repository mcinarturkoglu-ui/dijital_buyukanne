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
    label: 'Hareket (GMA)',
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
    aiRole: 'Dışkı rengini Biliyer Atrezi ve süt alerjisi kartıyla eşleştirir.',
    expertRole: 'Çocuk hekimi acil safra veya alerji tetkiklerini başlatır.',
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
    <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-white via-soft-gray/30 to-white relative overflow-hidden" id="insan-ve-ai">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-turquoise/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="İnsan + Yapay Zekâ Dengesi"
          title="Yapay zekâ 7/24 destekler. Uzman hekim güvenin merkezindedir."
          subtitle="Teknoloji bilgiye ve takibe erişimi demokratikleştirirken, klinik karar ve şefkat her zaman hekim ve uzmanlarımızın rehberliğinde kalır."
          centered
        />

        {/* Interactive Neural Radar Area */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT 6 COLS: The High-Tech Radial Neural Radar */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center select-none">
              
              {/* Outer Pulsing Rings */}
              <div className="absolute inset-0 rounded-full border border-turquoise/20 animate-spin" style={{ animationDuration: '40s' }} />
              <div className="absolute inset-6 rounded-full border border-dashed border-turquoise/30 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
              <div className="absolute inset-16 rounded-full bg-gradient-to-tr from-turquoise/10 via-transparent to-coral/10 animate-pulse-glow" />

              {/* Central Doctor / Expert Node */}
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-navy via-[#0d3455] to-navy flex flex-col items-center justify-center p-3 text-center shadow-2xl border-4 border-white z-20 group hover:scale-105 transition-transform duration-300">
                <div className="w-8 h-8 rounded-full bg-turquoise/20 flex items-center justify-center mb-1 text-turquoise">
                  <Stethoscope size={16} />
                </div>
                <span className="text-white font-extrabold text-[11px] leading-tight">UZMAN</span>
                <span className="text-turquoise font-bold text-[9px] uppercase tracking-wider">DESTEĞİ</span>
                <span className="absolute -bottom-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Orbiting Modules */}
              {modules.map((mod) => {
                const rad = (mod.angle - 90) * (Math.PI / 180);
                const radius = 135;
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
                      className={`px-3 py-2 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-1.5 shadow-md ${
                        isSelected
                          ? 'bg-turquoise text-navy scale-110 shadow-lg shadow-turquoise/30 ring-4 ring-turquoise/20'
                          : 'bg-white text-navy/80 hover:bg-slate-50 hover:text-navy border border-gray-200'
                      }`}
                    >
                      <Icon size={12} className={isSelected ? 'text-navy' : 'text-turquoise'} />
                      <span className="whitespace-nowrap">{mod.label}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT 6 COLS: Live Interactive Insight Box */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-turquoise animate-pulse" />
                  <span className="text-xs font-bold text-navy uppercase tracking-wider">
                    {activeModule.label} Entegrasyonu
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-turquoise/10 text-turquoise px-2.5 py-0.5 rounded-full font-bold">
                  Birlikte Çalışma Prensibi
                </span>
              </div>

              {/* AI Layer */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 mb-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <Zap size={15} className="text-turquoise" />
                  <h4 className="text-xs font-bold text-navy uppercase tracking-wider">1. Yapay Zekâ (BabySensAI)</h4>
                </div>
                <p className="text-xs sm:text-sm text-navy/75 leading-relaxed">
                  {activeModule.aiRole}
                </p>
              </div>

              {/* Specialist Layer */}
              <div className="bg-gradient-to-br from-[#082A46] to-[#0c3556] text-white rounded-2xl p-4 shadow-md">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck size={15} className="text-emerald-400" />
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">2. Uzman Hekim & Pedagog</h4>
                </div>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                  {activeModule.expertRole}
                </p>
              </div>

              {/* Tip */}
              <div className="mt-4 flex items-center justify-between text-[11px] text-navy/50">
                <span>Modüllere tıklayarak işleyişi inceleyebilirsiniz</span>
                <span className="text-turquoise font-semibold">Güven + Bilim</span>
              </div>
            </div>

            {/* Bottom summary pills */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-turquoise/15 text-turquoise flex items-center justify-center font-black text-sm">
                  24/7
                </div>
                <div>
                  <p className="text-xs font-bold text-navy leading-none">Anlık İzlem</p>
                  <p className="text-[10px] text-navy/50 mt-0.5">Kesintisiz erişim</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-coral/15 text-coral flex items-center justify-center font-black text-sm">
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
