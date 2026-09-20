import SectionHeader from '@/components/ui/SectionHeader';
import { Users, MessageSquare, Heart, Building2 } from 'lucide-react';

const valueCards = [
  {
    icon: Users,
    iconColor: 'text-turquoise',
    iconBg: 'bg-[#e6faf9]',
    title: 'Aileye Erişim',
    description:
      'Doğrudan iletişim. Belediye ve kurumların ailelerle kurduğu doğrudan, anlamlı bağ.',
    gradient: 'from-[#e6faf9] to-white',
    border: 'border-turquoise/20',
    accent: 'bg-turquoise',
  },
  {
    icon: MessageSquare,
    iconColor: 'text-navy',
    iconBg: 'bg-[#e8eef4]',
    title: 'Sürekli İletişim',
    description:
      'Aile ile kesintisiz dijital bağlantı. Tek seferlik değil, bebeğin tüm gelişim sürecinde.',
    gradient: 'from-[#e8eef4] to-white',
    border: 'border-navy/20',
    accent: 'bg-navy',
  },
  {
    icon: Heart,
    iconColor: 'text-coral',
    iconBg: 'bg-[#fff0ed]',
    title: 'Sosyal Etki',
    description:
      'Toplumsal faydanın artırılması. Ölçülebilir çıktılarla hesap verebilir bir sosyal yatırım.',
    gradient: 'from-[#fff0ed] to-white',
    border: 'border-coral/20',
    accent: 'bg-coral',
  },
  {
    icon: Building2,
    iconColor: 'text-navy',
    iconBg: 'bg-[#e8eef4]',
    title: 'Dijital Belediyecilik',
    description:
      'Modern, veri destekli sosyal hizmet yönetimi. Geleceğin belediyeciliğine bugünden adım atın.',
    gradient: 'from-[#e8eef4] to-white',
    border: 'border-navy/20',
    accent: 'bg-navy',
  },
];

export default function InstitutionValue() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Bir mobil uygulamadan fazlası."
          subtitle="DijitalBüyükanne, kurumunuzun ailelerle kurduğu ilişkinin dijital omurgasıdır."
          centered
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {valueCards.map(({ icon: Icon, iconColor, iconBg, title, description, gradient, border, accent }) => (
            <div
              key={title}
              className={`bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 p-8 border ${border} relative overflow-hidden group`}
            >
              {/* Gradient wash */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-300 rounded-3xl`} />

              {/* Accent bar */}
              <div className={`absolute top-0 left-0 w-1 h-full ${accent} rounded-l-3xl`} />

              <div className="relative z-10 flex flex-col gap-5">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-7 h-7 ${iconColor}`} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
