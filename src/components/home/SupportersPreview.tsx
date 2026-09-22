import Link from 'next/link';
import { MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const supporters = [
  {
    initials: 'AB',
    name: 'Örnek Belediye A',
    program: 'Ankara DijitalBüyükanne',
    city: 'Ankara',
    description:
      'Bölgedeki genç ailelerin bebek gelişim süreçlerini desteklemek amacıyla başlatılan pilot program.',
    color: '#082A46',
    accent: '#14BBB7',
  },
  {
    initials: 'KV',
    name: 'Örnek Vakıf B',
    program: 'İstanbul DijitalBüyükanne',
    city: 'İstanbul',
    description:
      'Sosyal etki odaklı yatırım anlayışıyla desteklenen, şehir genelinde yaygınlaştırılması planlanan program.',
    color: '#14BBB7',
    accent: '#082A46',
  },
  {
    initials: 'ŞF',
    name: 'Örnek Şirket C',
    program: 'İzmir DijitalBüyükanne',
    city: 'İzmir',
    description:
      'KSS stratejisi kapsamında erken çocukluk gelişimine katkı sağlamak üzere yürütülen bölgesel program.',
    color: '#FF7965',
    accent: '#082A46',
  },
];

export default function SupportersPreview() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-off-white relative overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Destekçilerimiz"
          title="Bu yolculuğu birlikte büyütüyoruz."
          subtitle="Programı hayata geçiren kurumların katkısıyla daha fazla bebeğe ve aileye ulaşıyoruz."
          centered
        />

        {/* Supporter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {supporters.map((s, i) => (
            <div
              key={i}
              className="premium-card overflow-hidden flex flex-col border border-gray-100/80 group"
            >
              {/* Card top accent bar — gradient */}
              <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${s.color}, ${s.accent})` }} />

              <div className="p-7 flex flex-col flex-1">
                {/* Logo placeholder */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-5 flex-shrink-0 shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-500"
                  style={{ backgroundColor: s.color }}
                >
                  {s.initials}
                </div>

                {/* Institution name */}
                <h3 className="text-navy font-bold text-lg leading-tight group-hover:text-turquoise transition-colors duration-300">{s.name}</h3>

                {/* Program name */}
                <p
                  className="text-sm font-semibold mt-1 mb-1"
                  style={{ color: s.color }}
                >
                  {s.program}
                </p>

                {/* City */}
                <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{s.city}</span>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{s.description}</p>

                {/* Link */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <Link
                    href="/destekciler"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all duration-300 group/link"
                    style={{ color: s.color }}
                  >
                    Detayları Gör
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:rotate-12 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-gray-400 mt-8 italic">
          Yukarıdaki kartlar örnek görünüm amacıyla tasarlanmıştır. Gerçek destekçi bilgileri programa katılım sonrası güncellenir.
        </p>

        {/* CTA */}
        <div className="flex justify-center mt-8">
          <Link
            href="/destekciler"
            className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-7 py-3.5 rounded-xl hover:bg-navy hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Tüm Destekçileri Gör
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
