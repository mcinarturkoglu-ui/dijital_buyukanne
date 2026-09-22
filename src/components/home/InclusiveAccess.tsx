import SectionHeader from '@/components/ui/SectionHeader';
import { Activity, Eye, HandHeart, BookOpen } from 'lucide-react';

const groups = [
  {
    icon: Activity,
    title: 'Prematüre doğan bebekler',
    description:
      'Erken doğan bebekler, gelişimsel süreçlerinde ek takip ve destek ihtiyacı duyabilir. Dijital izlem, bu süreci kolaylaştırır.',
    iconBg: 'bg-turquoise/20',
    iconColor: 'text-turquoise',
    border: 'border-turquoise/20',
    hoverBorder: 'hover:border-turquoise/50',
  },
  {
    icon: Eye,
    title: 'Gelişimsel takip ihtiyacı bulunan bebekler',
    description:
      'Gelişimsel süreçleri yakından izlenmesi gereken bebekler için düzenli ve yapılandırılmış dijital değerlendirme imkânı.',
    iconBg: 'bg-coral/20',
    iconColor: 'text-coral',
    border: 'border-coral/20',
    hoverBorder: 'hover:border-coral/50',
  },
  {
    icon: HandHeart,
    title: 'Sosyoekonomik desteğe ihtiyaç duyan aileler',
    description:
      'Kaynakların sınırlı olduğu durumlarda, dijital erişim ile kaliteli gelişim desteğini eşit biçimde sunabiliyoruz.',
    iconBg: 'bg-white/15',
    iconColor: 'text-white',
    border: 'border-white/15',
    hoverBorder: 'hover:border-white/40',
  },
  {
    icon: BookOpen,
    title: 'Gelişim rehberliğine ihtiyaç duyan ebeveynler',
    description:
      'İlk kez ebeveyn olan veya rehberlik arayan aileler için güvenilir, bilimsel temelli dijital destek.',
    iconBg: 'bg-turquoise/20',
    iconColor: 'text-turquoise',
    border: 'border-turquoise/20',
    hoverBorder: 'hover:border-turquoise/50',
  },
];

export default function InclusiveAccess() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-navy relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Kapsayıcı Erişim"
          title="Desteğin en değerli olduğu ailelere ulaşabiliriz."
          subtitle="Her aile farklı bir yolculuktadır. DijitalBüyükanne bu yolculukta yanlarında olmak için tasarlanmıştır."
          centered
          light
        />

        {/* Group Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {groups.map(({ icon: Icon, title, description, iconBg, iconColor, border, hoverBorder }) => (
            <div
              key={title}
              className={`glass-card-dark rounded-3xl p-7 border ${border} ${hoverBorder} hover:bg-white/10 transition-all duration-500 group`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon className={`w-6 h-6 ${iconColor}`} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-turquoise transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Text */}
        <div className="mt-14 text-center">
          <p className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Her bebek,{' '}
            <span className="text-turquoise">desteklenmeyi hak eder.</span>
          </p>
          <p className="mt-3 text-white/50 text-sm max-w-md mx-auto">
            Kurumunuzun desteğiyle bu hakkı daha geniş bir kesime sunabiliriz.
          </p>
        </div>
      </div>
    </section>
  );
}
