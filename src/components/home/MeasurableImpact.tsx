'use client';

import AnimatedCounter from '@/components/ui/AnimatedCounter';
import SectionHeader from '@/components/ui/SectionHeader';
import { TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Ulaşılan Bebek', value: 12400, suffix: '+' },
  { label: 'Ulaşılan Aile', value: 11800, suffix: '+' },
  { label: 'Gerçekleştirilen Değerlendirme', value: 45200, suffix: '+' },
  { label: 'Uzman Danışmanlığı', value: 8700, suffix: '+' },
  { label: 'Takip Sürekliliği', value: 92, suffix: '%' },
  { label: 'Aile Memnuniyeti', value: 98, suffix: '%' },
  { label: 'İleri Değerlendirmeye Yönlendirme', value: 2800, suffix: '+' },
];

const barData = [40, 65, 50, 80, 60, 90, 75];
const linePoints = [20, 35, 28, 55, 45, 70, 65, 85];

const dotColors = ['#0EA5E9', '#FF5A43', '#0284C7', '#38BDF8', '#FF6D55', '#0EA5E9', '#0284C7'];

export default function MeasurableImpact() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Ölçülebilir Etki"
          title="Desteğin etkisi görülebilir."
          centered
        />

        {/* Örnek Görünüm Badge */}
        <div className="flex justify-center mt-6 mb-10">
          <span className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-600 text-sm font-semibold tracking-wider uppercase px-5 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse inline-block" />
            Örnek Görünüm — Pilot Dönem Verileri
          </span>
        </div>

        {/* Dashboard Mockup */}
        <div className="premium-card overflow-hidden border border-slate-200/60 shadow-xl">

          {/* Dashboard Header — sky gradient */}
          <div className="bg-gradient-to-r from-[#0B2545] via-[#0d3461] to-[#0B2545] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80 hover:bg-red-400 transition-colors cursor-default" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80 hover:bg-yellow-400 transition-colors cursor-default" />
                <span className="w-3 h-3 rounded-full bg-green-400/80 hover:bg-green-400 transition-colors cursor-default" />
              </div>
              <span className="text-white/60 text-xs font-mono ml-2">DijitalBüyükanne · Yönetim Paneli</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={14} className="text-sky-300" />
              <span className="text-sky-300/70 text-xs hidden md:block">Kurum Yöneticisi Görünümü</span>
            </div>
          </div>

          <div className="p-6 md:p-8 bg-slate-50/50">
            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:border-sky-200 hover:shadow-md transition-all duration-300 flex flex-col gap-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium leading-tight">{stat.label}</span>
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"
                      style={{ backgroundColor: dotColors[i % dotColors.length] }}
                    />
                  </div>
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    label=""
                    isPlaceholder
                  />
                </div>
              ))}

              {/* Extra placeholder card */}
              <div className="bg-sky-50 rounded-2xl p-4 border border-sky-100 flex flex-col justify-center items-center gap-1 col-span-1 hover:bg-sky-100/60 transition-colors duration-300">
                <span className="text-sky-500 text-2xl font-bold">+</span>
                <span className="text-xs text-gray-400 text-center">Daha fazla gösterge</span>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Bar Chart */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-navy uppercase tracking-wide">Aylık Değerlendirme</span>
                  <span className="text-xs text-gray-400 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">Örnek Veri</span>
                </div>
                <div className="flex items-end gap-2 h-28">
                  {barData.map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t-lg transition-all duration-700 hover:opacity-90"
                        style={{
                          height: `${h}%`,
                          backgroundColor: i % 3 === 0 ? '#0EA5E9' : i % 3 === 1 ? '#0284C7' : '#38BDF8',
                          opacity: i % 3 === 0 ? 1 : i % 3 === 1 ? 0.65 : 0.35,
                        }}
                      />
                      <span className="text-gray-300 text-[9px]">
                        {['O', 'Ş', 'M', 'N', 'M', 'H', 'T'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Line Chart */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-navy uppercase tracking-wide">Aile Katılım Trendi</span>
                  <span className="text-xs text-gray-400 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">Örnek Veri</span>
                </div>
                <div className="relative h-28 flex items-end">
                  <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="none">
                    {[20, 40, 60].map((y) => (
                      <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#F1F5F9" strokeWidth="1" />
                    ))}
                    <path
                      d={`M 0,${80 - linePoints[0]} ${linePoints.map((v, i) => `L ${i * (200 / 7)},${80 - v}`).join(' ')} L 200,80 L 0,80 Z`}
                      fill="#0EA5E9"
                      fillOpacity="0.12"
                    />
                    <polyline
                      points={linePoints.map((v, i) => `${i * (200 / 7)},${80 - v}`).join(' ')}
                      fill="none"
                      stroke="#0EA5E9"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    {linePoints.map((v, i) => (
                      <circle key={i} cx={i * (200 / 7)} cy={80 - v} r="3" fill="#0EA5E9" />
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-gray-400 mt-6 italic">
          Gerçek veriler kuruma özel yönetim panelinde gösterilir. Yukarıdaki değerler pilot dönem örnek verileridir.
        </p>
      </div>
    </section>
  );
}
