import { Camera, Cpu, BookOpen } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import PhoneMockup from '@/components/ui/PhoneMockup';

const steps = [
  {
    number: '1',
    icon: Camera,
    label: 'Fotoğraf',
    desc: 'Cilt fotoğrafını çek veya galeriden yükle',
    iconColor: 'text-coral',
    circleBg: 'bg-coral',
  },
  {
    number: '2',
    icon: Cpu,
    label: 'Yapay zekâ analizi',
    desc: 'AI modeli görüntüyü inceler ve değerlendirir',
    iconColor: 'text-turquoise',
    circleBg: 'bg-turquoise',
  },
  {
    number: '3',
    icon: BookOpen,
    label: 'Bilgilendirme / yönlendirme',
    desc: 'Aileye yönelik ön bilgilendirme ve gerekirse uzman yönlendirmesi',
    iconColor: 'text-navy',
    circleBg: 'bg-navy',
  },
];

function SkinAnalysisPhoneContent() {
  return (
    <div className="h-full flex flex-col bg-off-white">
      {/* App header */}
      <div className="bg-turquoise px-3 py-3 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center">
          <Camera className="w-3.5 h-3.5 text-white" />
        </div>
        <span className="text-white font-bold text-xs">Cilt Analizi</span>
      </div>

      {/* Upload area */}
      <div className="mx-3 mt-3 rounded-xl border-2 border-dashed border-turquoise/40 bg-white flex flex-col items-center justify-center py-5 gap-2">
        <Camera className="w-7 h-7 text-turquoise" />
        <p className="text-[9px] text-navy/60 text-center px-2">Fotoğraf yükle veya çek</p>
        <div className="bg-turquoise text-white text-[8px] font-semibold px-3 py-1 rounded-full">
          Fotoğraf Seç
        </div>
      </div>

      {/* Result card */}
      <div className="mx-3 mt-3 bg-white rounded-xl p-3 shadow-sm border border-soft-gray">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-turquoise" />
          <p className="text-[9px] font-bold text-navy">Ön Değerlendirme</p>
        </div>
        <p className="text-[8px] text-navy/70 leading-relaxed">
          Görüntü incelendi. Olası irritasyon belirtileri saptandı. Uzman görüşü önerilir.
        </p>
        <div className="mt-2 bg-turquoise/10 rounded-lg px-2 py-1.5">
          <p className="text-[8px] text-turquoise font-semibold">→ Uzman Yönlendirmesi</p>
        </div>
      </div>

      {/* Steps mini */}
      <div className="mx-3 mt-3 flex flex-col gap-1.5">
        {['Fotoğraf yüklendi', 'Analiz tamamlandı', 'Rapor hazır'].map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-turquoise flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[6px] font-bold">{i + 1}</span>
            </div>
            <p className="text-[8px] text-navy/70">{s}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkinAnalysis() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-soft-gray">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Cilt Analizi"
          title="Fotoğraf çek. Yükle. Ön değerlendirme al."
          centered
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Steps + Info card */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-0">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex flex-col">
                    <div className="flex items-start gap-5">
                      {/* Number + connector */}
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full ${step.circleBg} flex items-center justify-center shadow-md flex-shrink-0`}
                        >
                          <span className="text-white font-bold text-sm">{step.number}</span>
                        </div>
                        {i < steps.length - 1 && (
                          <div className="w-0.5 h-10 border-l-2 border-dashed border-navy/20 mt-1" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="bg-white rounded-2xl p-5 flex-1 shadow-sm flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-soft-gray flex items-center justify-center flex-shrink-0">
                          <Icon className={`w-5 h-5 ${step.iconColor}`} />
                        </div>
                        <div>
                          <p className="font-bold text-navy text-base">{step.label}</p>
                          <p className="text-sm text-navy/60 mt-1 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Info card */}
            <div className="bg-white border-l-4 border-turquoise rounded-2xl p-6 shadow-card">
              <p className="text-sm text-navy/70 leading-relaxed">
                Klinik karar yerine aileyi bilgilendirmeyi ve gerektiğinde uygun desteğe yönlendirmeyi
                amaçlayan dijital yardımcı hizmet.
              </p>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="flex justify-center">
            <PhoneMockup size="md" label="Cilt Analizi Ekranı">
              <SkinAnalysisPhoneContent />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
}
