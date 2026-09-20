'use client';

import AnimatedCounter from '@/components/ui/AnimatedCounter';
import SectionHeader from '@/components/ui/SectionHeader';

const stats = [
  { label: 'Ulaşılan Bebek', value: 0, suffix: '+' },
  { label: 'Ulaşılan Aile', value: 0, suffix: '+' },
  { label: 'Gerçekleştirilen Değerlendirme', value: 0, suffix: '+' },
  { label: 'Uzman Danışmanlığı', value: 0, suffix: '+' },
  { label: 'Takip Sürekliliği', value: 0, suffix: '+' },
  { label: 'Aile Memnuniyeti', value: 0, suffix: '+' },
  { label: 'İleri Değerlendirmeye Yönlendirme', value: 0, suffix: '+' },
];

const barData = [40, 65, 50, 80, 60, 90, 75];
const linePoints = [20, 35, 28, 55, 45, 70, 65, 85];

export default function MeasurableImpact() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Ölçülebilir Etki"
          title="Desteğin etkisi görülebilir."
          centered
        />

        {/* Örnek Görünüm Badge */}
        <div className="flex justify-center mt-6 mb-10">
          <span className="inline-flex items-center gap-2 bg-turquoise/10 border border-turquoise/30 text-turquoise text-sm font-semibold tracking-wider uppercase px-5 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-turquoise animate-pulse inline-block" />
            Örnek Görünüm
          </span>
        </div>

        {/* Dashboard Mockup */}
        <div className="bg-soft-gray rounded-3xl shadow-card overflow-hidden border border-gray-100">

          {/* Dashboard Header */}
          <div className="bg-navy px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400 opacity-80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
                <span className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
              </div>
              <span className="text-white/60 text-xs font-mono ml-2">DijitalBüyükanne · Yönetim Paneli</span>
            </div>
            <span className="text-white/40 text-xs hidden md:block">Kurum Yöneticisi Görünümü</span>
          </div>

          <div className="p-6 md:p-8">
            {/* Stat Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium leading-tight">{stat.label}</span>
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: i % 2 === 0 ? '#14BBB7' : '#082A46' }}
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
              <div className="bg-turquoise/10 rounded-2xl p-4 border border-turquoise/20 flex flex-col justify-center items-center gap-1 col-span-1">
                <span className="text-turquoise text-2xl font-bold">+</span>
                <span className="text-xs text-gray-400 text-center">Daha fazla gösterge</span>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Bar Chart Placeholder */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-navy uppercase tracking-wide">Aylık Değerlendirme</span>
                  <span className="text-xs text-gray-400 bg-soft-gray px-2 py-0.5 rounded-full">Örnek</span>
                </div>
                <div className="flex items-end gap-2 h-28">
                  {barData.map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t-lg transition-all duration-500"
                        style={{
                          height: `${h}%`,
                          backgroundColor: i % 3 === 0 ? '#14BBB7' : i % 3 === 1 ? '#082A46' : '#14BBB7',
                          opacity: i % 3 === 0 ? 1 : i % 3 === 1 ? 0.5 : 0.25,
                        }}
                      />
                      <span className="text-gray-300 text-[9px]">
                        {['O', 'Ş', 'M', 'N', 'M', 'H', 'T'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Line Chart Placeholder */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-navy uppercase tracking-wide">Aile Katılım Trendi</span>
                  <span className="text-xs text-gray-400 bg-soft-gray px-2 py-0.5 rounded-full">Örnek</span>
                </div>
                <div className="relative h-28 flex items-end">
                  <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="none">
                    {[20, 40, 60].map((y) => (
                      <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#EDF3F4" strokeWidth="1" />
                    ))}
                    <path
                      d={`M 0,${80 - linePoints[0]} ${linePoints.map((v, i) => `L ${i * (200 / 7)},${80 - v}`).join(' ')} L 200,80 L 0,80 Z`}
                      fill="#14BBB7"
                      fillOpacity="0.12"
                    />
                    <polyline
                      points={linePoints.map((v, i) => `${i * (200 / 7)},${80 - v}`).join(' ')}
                      fill="none"
                      stroke="#14BBB7"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    {linePoints.map((v, i) => (
                      <circle key={i} cx={i * (200 / 7)} cy={80 - v} r="3" fill="#14BBB7" />
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-gray-400 mt-6 italic">
          Gerçek veriler kuruma özel yönetim panelinde gösterilir.
        </p>
      </div>
    </section>
  );
}
