import PhoneMockup from '@/components/ui/PhoneMockup';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  Baby,
  MessageCircle,
  Heart,
  Users,
  Bell,
  Calendar,
  FileText,
  Activity,
} from 'lucide-react';

const services = [
  { icon: Baby, label: 'Anne–Bebek Atölyesi', color: 'text-turquoise' },
  { icon: MessageCircle, label: 'Ücretsiz Danışmanlık', color: 'text-coral' },
  { icon: Activity, label: 'Sağlık Taramaları', color: 'text-turquoise' },
  { icon: Users, label: 'Aile Eğitimleri', color: 'text-coral' },
  { icon: Heart, label: 'Sosyal Destekler', color: 'text-turquoise' },
  { icon: Bell, label: 'Belediye Duyuruları', color: 'text-coral' },
  { icon: Calendar, label: 'Etkinlikler', color: 'text-turquoise' },
  { icon: FileText, label: 'Başvurular', color: 'text-coral' },
];

export default function MunicipalityGateway() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-off-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Belediyeler İçin"
          title="Ailenin belediyeye açılan dijital kapısı."
          centered
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Phone Mockup */}
          <div className="flex justify-center">
            <PhoneMockup size="md">
              {/* Municipality App UI */}
              <div className="flex flex-col h-full bg-white">
                {/* App Header */}
                <div className="bg-turquoise px-4 py-3 flex-shrink-0">
                  <p className="text-white font-semibold text-xs text-center leading-tight">
                    Keçiören DijitalBüyükanne
                  </p>
                </div>

                {/* Welcome Banner */}
                <div className="bg-[#0f9a97] px-4 py-2 flex-shrink-0">
                  <p className="text-white text-[10px] text-center opacity-90">
                    Aileniz için tüm hizmetler burada
                  </p>
                </div>

                {/* Service List */}
                <div className="flex-1 overflow-hidden px-3 py-2 space-y-1">
                  {services.map(({ icon: Icon, label, color }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 bg-soft-gray rounded-xl px-3 py-2"
                    >
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                        <Icon className={`w-4 h-4 ${color}`} />
                      </div>
                      <span className="text-navy text-[10px] font-medium leading-tight">
                        {label}
                      </span>
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-turquoise opacity-60" />
                    </div>
                  ))}
                </div>

                {/* Bottom Nav */}
                <div className="bg-white border-t border-soft-gray px-4 py-2 flex justify-around flex-shrink-0">
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-4 h-4 bg-turquoise rounded-full" />
                    <span className="text-[8px] text-turquoise font-semibold">Ana Sayfa</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-4 h-4 bg-soft-gray rounded-full" />
                    <span className="text-[8px] text-gray-400">Hizmetler</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-4 h-4 bg-soft-gray rounded-full" />
                    <span className="text-[8px] text-gray-400">Profil</span>
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </div>

          {/* Right: Explanation */}
          <div className="flex flex-col gap-6">
            {/* Bold Message */}
            <div className="bg-navy rounded-3xl px-8 py-6">
              <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
                Doğru hizmet.{' '}
                <span className="text-turquoise">Doğru aile.</span>{' '}
                <span className="text-coral">Doğru zaman.</span>
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                DijitalBüyükanne, yalnızca bir bebek takip uygulaması değildir. Belediyenizin
                ailelere yönelik tüm hizmetlerini tek bir dijital kanal üzerinden sunmasını
                sağlayan bir platform altyapısıdır.
              </p>
              <p>
                Anne–bebek atölyelerinden sosyal desteklere, sağlık taramalarından etkinlik
                duyurularına kadar her hizmet, ilgili aileye doğru anda ulaşır. Belediye
                logonuzla, kendi markanızla.
              </p>
              <p>
                BabySensAI özellikleriyle de güçlendirilmiş bu platform; yapay zekâ destekli
                gelişimsel izlem, dijital aile asistanı ve uzman erişimi gibi katma değerli
                hizmetleri de kapsar.
              </p>
            </div>

            {/* Key Insight Highlight Box */}
            <div className="border-l-4 border-turquoise bg-white rounded-2xl px-6 py-5 shadow-sm">
              <p className="text-navy text-sm font-semibold leading-relaxed">
                💡 DijitalBüyükanne, belediye veya kurumun ailelere yönelik hizmetlerinin dijital
                dağıtım kanalı haline gelebilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
