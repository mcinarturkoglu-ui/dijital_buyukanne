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
    border: 'border-turquoise/30',
  },
  {
    icon: Eye,
    title: 'Gelişimsel takip ihtiyacı bulunan bebekler',
    description:
      'Gelişimsel süreçleri yakından izlenmesi gereken bebekler için düzenli ve yapılandırılmış dijital değerlendirme imkânı.',
    iconBg: 'bg-coral/20',
    iconColor: 'text-coral',
    border: 'border-coral/30',
  },
  {
    icon: HandHeart,
    title: 'Sosyoekonomik desteğe ihtiyaç duyan aileler',
    description:
      'Kaynakların sınırlı olduğu durumlarda, dijital erişim ile kaliteli gelişim desteğini eşit biçimde sunabiliyoruz.',
    iconBg: 'bg-white/20',
    iconColor: 'text-white',
    border: 'border-white/30',
  },
  {
    icon: BookOpen,
    title: 'Gelişim rehberliğine ihtiyaç duyan ebeveynler',
    description:
      'İlk kez ebeveyn olan veya rehberlik arayan aileler için güvenilir, bilimsel temelli dijital destek.',
    iconBg: 'bg-turquoise/20',
    iconColor: 'text-turquoise',
    border: 'border-turquoise/30',
  },
];

export default function InclusiveAccess() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-navy">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Kapsayıcı Erişim"
          title="Desteğin en değerli olduğu ailelere ulaşabiliriz."
          subtitle="Her aile farklı bir yolculuktadır. DijitalBüyükanne bu yolculukta yanlarında olmak için tasarlanmıştır."
          centered
          light
        />

        {/* Group Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {groups.map(({ icon: Icon, title, description, iconBg, iconColor, border }) => (
            <div
              key={title}
              className={`bg-white/10 backdrop-blur-sm rounded-3xl p-6 border ${border} hover:bg-white/15 transition-all duration-300 group`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className={`w-6 h-6 ${iconColor}`} strokeWidth={1.8} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-turquoise transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Text */}
        <div className="mt-14 text-center">
          <p className="text-2xl md:text-3xl font-bold text-white">
            Her bebek,{' '}
            <span className="text-turquoise">desteklenmeyi hak eder.</span>
          </p>
          <p className="mt-3 text-white/60 text-sm max-w-md mx-auto">
            Kurumunuzun desteğiyle bu hakkı daha geniş bir kesime sunabiliriz.
          </p>
        </div>
      </div>
    </section>
  );
}
