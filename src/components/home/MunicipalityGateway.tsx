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
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  { icon: Baby, label: 'Anne–Bebek Atölyesi', color: 'text-turquoise', bg: 'bg-turquoise/10' },
  { icon: MessageCircle, label: 'Ücretsiz Danışmanlık', color: 'text-coral', bg: 'bg-coral/10' },
  { icon: Activity, label: 'Sağlık Taramaları', color: 'text-turquoise', bg: 'bg-turquoise/10' },
  { icon: Users, label: 'Aile Eğitimleri', color: 'text-coral', bg: 'bg-coral/10' },
  { icon: Heart, label: 'Sosyal Destekler', color: 'text-turquoise', bg: 'bg-turquoise/10' },
  { icon: Bell, label: 'Belediye Duyuruları', color: 'text-coral', bg: 'bg-coral/10' },
  { icon: Calendar, label: 'Etkinlikler', color: 'text-turquoise', bg: 'bg-turquoise/10' },
  { icon: FileText, label: 'Başvurular', color: 'text-coral', bg: 'bg-coral/10' },
];

export default function MunicipalityGateway() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-off-white relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-turquoise/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Belediyeler İçin"
          title="Ailenin belediyeye açılan dijital kapısı."
          subtitle="Tüm yerel aile ve bebek destek hizmetlerini tek bir akıllı mobil kanalda buluşturun."
          centered
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative animate-float-slow">
              <div className="absolute inset-0 bg-turquoise/20 rounded-[40px] blur-3xl opacity-50 scale-95" />
              <PhoneMockup size="md" label="Belediye Mobil Hizmet Arayüzü">
                {/* Municipality App UI */}
                <div className="flex flex-col h-full bg-white select-none">
                  {/* App Header */}
                  <div className="bg-gradient-to-r from-turquoise to-[#0fa29f] px-4 py-3 flex-shrink-0 text-white shadow-sm">
                    <p className="font-bold text-xs text-center leading-tight">
                      Keçiören DijitalBüyükanne
                    </p>
                  </div>

                  {/* Welcome Banner */}
                  <div className="bg-[#0b807d] px-4 py-2 flex-shrink-0">
                    <p className="text-white text-[10px] text-center font-medium opacity-95">
                      Aileniz için tüm belediye hizmetleri burada
                    </p>
                  </div>

                  {/* Service List */}
                  <div className="flex-1 overflow-hidden px-3 py-2 space-y-1.5">
                    {services.map(({ icon: Icon, label, color, bg }) => (
                      <div
                        key={label}
                        className="flex items-center gap-2.5 bg-soft-gray hover:bg-white hover:shadow-sm rounded-xl px-3 py-2 border border-gray-100 transition-all duration-200"
                      >
                        <div className={`w-6 h-6 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-3.5 h-3.5 ${color}`} />
                        </div>
                        <span className="text-navy text-[10px] font-semibold leading-tight flex-1">
                          {label}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-turquoise opacity-60" />
                      </div>
                    ))}
                  </div>

                  {/* Bottom Nav */}
                  <div className="bg-white border-t border-gray-100 px-4 py-2 flex justify-around flex-shrink-0">
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="w-4 h-4 bg-turquoise rounded-full flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                      <span className="text-[8px] text-turquoise font-bold">Ana Sayfa</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 opacity-40">
                      <div className="w-4 h-4 bg-gray-300 rounded-full" />
                      <span className="text-[8px] text-gray-500 font-medium">Hizmetler</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 opacity-40">
                      <div className="w-4 h-4 bg-gray-300 rounded-full" />
                      <span className="text-[8px] text-gray-500 font-medium">Profil</span>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>

          {/* Right: Explanation */}
          <div className="flex flex-col gap-6">
            {/* Bold Message */}
            <div className="bg-gradient-to-br from-[#082A46] via-[#093254] to-[#0a3558] rounded-3xl p-7 md:p-8 shadow-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-turquoise/15 rounded-full blur-2xl pointer-events-none" />
              <p className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
                Doğru hizmet.{' '}
                <span className="text-turquoise">Doğru aile.</span>{' '}
                <span className="text-coral">Doğru zaman.</span>
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-white/70 text-xs">
                <Sparkles size={14} className="text-turquoise" />
                <span>Teknoloji + Sosyal Belediyecilik Entegrasyonu</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-navy/70 text-base leading-relaxed">
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
            <div className="border-l-4 border-turquoise bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-3">
              <span className="text-xl shrink-0 mt-0.5">💡</span>
              <p className="text-navy text-sm font-semibold leading-relaxed">
                DijitalBüyükanne, belediye veya kurumun ailelere yönelik hizmetlerinin dijital
                dağıtım kanalı haline gelebilir.
              </p>
            </div>

            {/* Action link */}
            <div>
              <Link
                href="/kurumlar"
                className="inline-flex items-center gap-2 text-turquoise font-bold text-sm hover:text-navy transition-colors group"
              >
                <span>Belediye İş Birlikleri Hakkında Detaylı Bilgi</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
