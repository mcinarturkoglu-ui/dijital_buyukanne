import SectionHeader from '@/components/ui/SectionHeader';
import { Users, MessageSquare, Heart, Building2 } from 'lucide-react';

const valueCards = [
  {
    icon: Users,
    iconColor: 'text-turquoise',
    iconBg: 'bg-turquoise/10',
    title: 'Aileye Erişim',
    description:
      'Doğrudan iletişim. Belediye ve kurumların ailelerle kurduğu doğrudan, anlamlı bağ.',
    gradient: 'from-turquoise/10 to-transparent',
    border: 'border-turquoise/15',
    accent: 'bg-gradient-to-b from-turquoise to-teal-400',
    hoverBorder: 'hover:border-turquoise/40',
  },
  {
    icon: MessageSquare,
    iconColor: 'text-navy',
    iconBg: 'bg-navy/10',
    title: 'Sürekli İletişim',
    description:
      'Aile ile kesintisiz dijital bağlantı. Tek seferlik değil, bebeğin tüm gelişim sürecinde.',
    gradient: 'from-navy/5 to-transparent',
    border: 'border-navy/10',
    accent: 'bg-gradient-to-b from-navy to-navy-700',
    hoverBorder: 'hover:border-navy/30',
  },
  {
    icon: Heart,
    iconColor: 'text-coral',
    iconBg: 'bg-coral/10',
    title: 'Sosyal Etki',
    description:
      'Toplumsal faydanın artırılması. Ölçülebilir çıktılarla hesap verebilir bir sosyal yatırım.',
    gradient: 'from-coral/10 to-transparent',
    border: 'border-coral/15',
    accent: 'bg-gradient-to-b from-coral to-coral-600',
    hoverBorder: 'hover:border-coral/40',
  },
  {
    icon: Building2,
    iconColor: 'text-navy',
    iconBg: 'bg-navy/10',
    title: 'Dijital Belediyecilik',
    description:
      'Modern, veri destekli sosyal hizmet yönetimi. Geleceğin belediyeciliğine bugünden adım atın.',
    gradient: 'from-navy/5 to-transparent',
    border: 'border-navy/10',
    accent: 'bg-gradient-to-b from-navy to-navy-700',
    hoverBorder: 'hover:border-navy/30',
  },
];

export default function InstitutionValue() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-turquoise/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="Bir mobil uygulamadan fazlası."
          subtitle="DijitalBüyükanne, kurumunuzun ailelerle kurduğu ilişkinin dijital omurgasıdır."
          centered
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {valueCards.map(({ icon: Icon, iconColor, iconBg, title, description, gradient, border, accent, hoverBorder }) => (
            <div
              key={title}
              className={`premium-card border ${border} ${hoverBorder} p-8 relative overflow-hidden group`}
            >
              {/* Gradient wash */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`} />

              {/* Accent bar */}
              <div className={`absolute top-0 left-0 w-1 h-full ${accent} rounded-l-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10 flex flex-col gap-5">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className={`w-7 h-7 ${iconColor}`} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-turquoise transition-colors duration-300">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>

                {/* Bottom accent */}
                <div className="w-10 h-0.5 bg-turquoise/15 group-hover:w-20 group-hover:bg-turquoise/40 rounded-full transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
