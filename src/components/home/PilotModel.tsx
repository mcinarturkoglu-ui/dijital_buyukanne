import Link from 'next/link';
import { Target, BarChart2, Settings, Maximize2, ArrowRight, ChevronRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const phases = [
  {
    number: '01',
    title: 'PİLOT',
    description: 'Belirli sayıda aileyle başla.',
    icon: Target,
  },
  {
    number: '02',
    title: 'ÖLÇ',
    description: 'Kullanım ve sosyal etki göstergelerini izle.',
    icon: BarChart2,
  },
  {
    number: '03',
    title: 'GELİŞTİR',
    description: 'Saha geri bildirimleriyle modeli iyileştir.',
    icon: Settings,
  },
  {
    number: '04',
    title: 'YAYGINLAŞTIR',
    description: 'Programı ilçe veya şehir geneline ölçekle.',
    icon: Maximize2,
  },
];

export default function PilotModel() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-navy relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-turquoise/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Başlamak Kolay"
          title="Pilotla başla. Ölç. Geliştir. Yaygınlaştır."
          centered
          light
        />

        {/* Phase Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {phases.map(({ number, title, description, icon: Icon }, i) => (
            <div key={i} className="relative flex flex-col">
              {/* Connecting arrow — visible on lg between cards */}
              {i < phases.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 items-center">
                  <ChevronRight className="w-6 h-6 text-turquoise/40 animate-pulse" strokeWidth={2.5} style={{ animationDelay: `${i * 0.3}s` }} />
                </div>
              )}

              <div className="glass-card-dark rounded-3xl p-7 hover:bg-white/10 hover:border-turquoise/40 hover:shadow-2xl hover:shadow-turquoise/10 hover:-translate-y-3 transition-all duration-500 flex flex-col h-full group cursor-default">
                {/* Number */}
                <span className="text-turquoise/20 group-hover:text-turquoise/50 font-black text-5xl leading-none mb-4 select-none transition-colors duration-500">
                  {number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-turquoise/10 group-hover:bg-turquoise group-hover:text-navy flex items-center justify-center mb-5 transition-all duration-500 shadow-sm group-hover:shadow-md group-hover:shadow-turquoise/25 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-turquoise group-hover:text-navy transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg tracking-wide mb-2 group-hover:text-turquoise transition-colors duration-300">{title}</h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed flex-1">{description}</p>

                {/* Bottom accent */}
                <div className="mt-4 w-8 h-0.5 bg-turquoise/20 group-hover:w-full group-hover:bg-turquoise/40 rounded-full transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>


        {/* Bottom message + CTA */}
        <div className="mt-16 flex flex-col items-center text-center gap-6">
          <p className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed">
            Büyük bütçe ayırmadan önce pilot ile başlayabilirsiniz.
          </p>
          <Link
            href="/kurumlar#form"
            className="shimmer-btn inline-flex items-center gap-2 bg-gradient-to-r from-coral to-coral-600 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-base shadow-lg hover:shadow-xl hover:shadow-coral/25 hover:-translate-y-1"
          >
            Pilot Program Görüşmesi Planla
            <ArrowRight className="w-5 h-5" />
          </Link>

        </div>
      </div>
    </section>
  );
}
