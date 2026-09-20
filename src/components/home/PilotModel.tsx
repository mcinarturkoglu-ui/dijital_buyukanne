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
    <section className="py-20 md:py-28 px-4 md:px-8 bg-navy">
      <div className="max-w-6xl mx-auto">
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
                  <ChevronRight className="w-6 h-6 text-turquoise/50" strokeWidth={2.5} />
                </div>
              )}

              <div className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/10 hover:border-turquoise/30 transition-all duration-300 flex flex-col h-full">
                {/* Number */}
                <span className="text-turquoise/30 font-black text-5xl leading-none mb-4 select-none">
                  {number}
                </span>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-turquoise/15 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-turquoise" />
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg tracking-wide mb-2">{title}</h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed flex-1">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message + CTA */}
        <div className="mt-16 flex flex-col items-center text-center gap-6">
          <p className="text-white/80 text-lg md:text-xl max-w-xl leading-relaxed">
            Büyük bütçe ayırmadan önce pilot ile başlayabilirsiniz.
          </p>
          <Link
            href="/kurumlar#form"
            className="inline-flex items-center gap-2 bg-coral text-white font-semibold px-8 py-4 rounded-2xl hover:bg-coral/90 transition-all duration-200 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Pilot Program Görüşmesi Planla
            <ArrowRight className="w-5 h-5" />
          </Link>

        </div>
      </div>
    </section>
  );
}
