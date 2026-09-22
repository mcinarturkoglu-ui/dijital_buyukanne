import { Megaphone, FileText, Wifi, Calendar, Award } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const areas = [
  {
    icon: Megaphone,
    title: 'Program İletişim Materyalleri',
    description: 'Broşür, afiş ve tanıtım içeriklerinde kurumsal logonuz ve katkı bilgileriniz yer alır.',
    number: '01',
  },
  {
    icon: FileText,
    title: 'Sosyal Etki Raporu',
    description: 'Her dönem hazırlanan etki raporlarında destekçi kurumlar şeffaf biçimde belirtilir.',
    number: '02',
  },
  {
    icon: Wifi,
    title: 'Dijital İletişim',
    description: 'Web sitesi, uygulama içi görünürlük ve sosyal medya iletişimlerinde kurumsal varlık.',
    number: '03',
  },
  {
    icon: Calendar,
    title: 'Etkinlik Duyuruları',
    description: 'Program lansmanları, eğitim etkinlikleri ve toplantılarda kurumsal temsil.',
    number: '04',
  },
  {
    icon: Award,
    title: 'Kurumsal Sosyal Sorumluluk İletişimi',
    description: 'KSS raporlarınız ve paydaş sunumları için belgelenmiş sosyal etki verileri.',
    number: '05',
  },
];

export default function Visibility() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-turquoise/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Header + blockquote */}
          <div className="lg:sticky lg:top-24">
            <SectionHeader
              eyebrow="Kurumsal Görünürlük"
              title="Sosyal etki görünür hale gelir."
              subtitle="Desteğinizi toplumla buluşturan iletişim kanalları."
            />

            {/* Blockquote */}
            <blockquote className="mt-10 relative pl-6">
              <span
                className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-turquoise to-teal-400"
                aria-hidden="true"
              />
              <p className="text-navy font-medium text-lg leading-relaxed italic">
                &ldquo;Görünürlük desteğin önüne geçmez; oluşturulan sosyal faydayı görünür kılar.&rdquo;
              </p>

              <footer className="mt-3 text-sm text-gray-400">— DijitalBüyükanne İlkeleri</footer>
            </blockquote>
          </div>

          {/* Right: Visibility cards */}
          <div className="space-y-4">
            {areas.map(({ icon: Icon, title, description, number }, i) => (
              <div
                key={i}
                className="group flex items-start gap-5 premium-card border border-gray-100 hover:border-turquoise/20 p-6 relative overflow-hidden"
              >
                {/* Number badge */}
                <span className="absolute top-4 right-5 text-xs font-black text-turquoise/15 group-hover:text-turquoise/30 transition-colors duration-300">{number}</span>

                <div className="w-12 h-12 rounded-xl bg-navy/5 group-hover:bg-turquoise/10 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110">
                  <Icon className="w-5 h-5 text-navy group-hover:text-turquoise transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-navy font-semibold text-base mb-1 group-hover:text-turquoise transition-colors duration-300">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
