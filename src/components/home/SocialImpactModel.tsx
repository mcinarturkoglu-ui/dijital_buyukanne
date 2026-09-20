import SectionHeader from '@/components/ui/SectionHeader';
import { Check, Plus } from 'lucide-react';

const institutionBullets = [
  'Sosyal sorumluluk gücü',
  'Ailelere erişim',
  'Program desteği',
  'Toplumsal görünürlük',
];

const platformBullets = [
  'Yapay zekâ altyapısı',
  'Dijital takip',
  'Uzman desteği',
  'Teknik ve bilimsel altyapı',
];

export default function SocialImpactModel() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-soft-gray">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Sosyal Etki Modeli"
          title="Teknoloji bizden. Sosyal etki birlikte."
          subtitle="Kurumunuzun gücü ile DijitalBüyükanne'nin teknolojisi birleşince sürdürülebilir bir etki doğar."
          centered
        />

        {/* Three-column layout */}
        <div className="mt-14 flex flex-col md:flex-row items-stretch gap-4 md:gap-0">

          {/* Left: Institution Card */}
          <div className="flex-1 bg-navy rounded-3xl p-8 md:rounded-r-none md:rounded-l-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="mb-2">
              <span className="text-xs font-bold tracking-wider uppercase text-turquoise bg-turquoise/10 px-3 py-1 rounded-full inline-block">
                Destekçi Kurum
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-6 leading-snug">
              DESTEKÇİ KURUM
            </h3>
            <ul className="space-y-3.5">
              {institutionBullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-turquoise/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-turquoise transition-colors">
                    <Check className="w-3 h-3 text-turquoise group-hover:text-navy transition-colors" strokeWidth={2.5} />
                  </div>
                  <span className="text-white/90 text-sm leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Connector */}
          <div className="flex md:flex-col items-center justify-center px-4 md:px-0 py-4 md:py-0 md:w-28 gap-4 md:gap-0 z-10">
            {/* Top line */}
            <div className="hidden md:block flex-1 w-0.5 bg-gradient-to-b from-navy via-turquoise to-turquoise" />

            {/* Plus badge */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-turquoise/40 animate-bounce" style={{ animationDuration: '3s' }}>
                <Plus className="w-6 h-6 text-navy" strokeWidth={3} />
              </div>
              <span className="text-[11px] font-black tracking-widest uppercase text-navy bg-white rounded-full px-3 py-1 shadow-md border border-gray-100">
                BİRLİKTE
              </span>
            </div>

            {/* Bottom line */}
            <div className="hidden md:block flex-1 w-0.5 bg-gradient-to-b from-turquoise to-turquoise" />

            {/* Mobile horizontal lines */}
            <div className="flex-1 h-0.5 bg-gradient-to-r from-navy to-turquoise md:hidden" />
            <div className="flex-1 h-0.5 bg-gradient-to-r from-turquoise to-navy md:hidden" />
          </div>


          {/* Right: Platform Card */}
          <div className="flex-1 bg-turquoise rounded-3xl p-8 md:rounded-l-none md:rounded-r-3xl">
            <div className="mb-2">
              <span className="text-xs font-semibold tracking-wider uppercase text-white/70">
                Platform
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 leading-snug">
              DİJİTALBÜYÜKANNE /<br />BABYSENSAI
            </h3>
            <ul className="space-y-3">
              {platformBullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Big closing message */}
        <div className="mt-14 text-center">
          <div className="inline-block bg-white rounded-3xl shadow-card px-8 py-6 max-w-2xl">
            <p className="text-2xl md:text-3xl font-bold text-navy leading-snug">
              Daha fazla bebeğe ulaşan{' '}
              <span className="text-turquoise">sürdürülebilir destek modeli.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
