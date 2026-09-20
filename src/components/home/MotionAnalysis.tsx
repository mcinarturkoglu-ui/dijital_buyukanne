import { Video, Cpu, ActivitySquare, UserCheck, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const steps = [
  {
    icon: Video,
    label: 'Video',
    desc: 'Bebeğin hareketleri kayıt altına alınır',
    color: 'bg-coral',
    textColor: 'text-white',
    iconBg: 'bg-coral/20',
  },
  {
    icon: Cpu,
    label: 'Yapay Zekâ Analizi',
    desc: 'AI modeli hareketi değerlendirir',
    color: 'bg-turquoise',
    textColor: 'text-white',
    iconBg: 'bg-turquoise/20',
  },
  {
    icon: ActivitySquare,
    label: 'Gelişimsel İzlem',
    desc: 'Sonuçlar yaşa göre raporlanır',
    color: 'bg-navy',
    textColor: 'text-white',
    iconBg: 'bg-white/10',
  },
  {
    icon: UserCheck,
    label: 'Gerektiğinde Uzman',
    desc: 'Gerekirse uzman yönlendirmesi yapılır',
    color: 'bg-coral',
    textColor: 'text-white',
    iconBg: 'bg-coral/20',
  },
];

export default function MotionAnalysis() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Hareket Analizi"
          title="Bir video, önemli ipuçları sunabilir."
          subtitle="0–6 ay döneminde video tabanlı hareket analizi ile bebeğinizin gelişimini dijital olarak izleyin."
          centered
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Flow diagram */}
          <div className="flex flex-col gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex flex-col items-start gap-2">
                  <div
                    className={`w-full flex items-center gap-4 rounded-2xl p-5 ${step.color} shadow-md`}
                  >
                    <div className={`flex-shrink-0 w-11 h-11 rounded-xl ${step.iconBg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${step.textColor}`} />
                    </div>
                    <div>
                      <p className={`font-bold text-base ${step.textColor}`}>{step.label}</p>
                      <p className={`text-sm ${step.textColor} opacity-80`}>{step.desc}</p>
                    </div>
                    <div className="ml-auto">
                      <span className={`text-xs font-semibold ${step.textColor} opacity-60`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex items-center justify-center w-full">
                      <ArrowRight className="w-5 h-5 text-navy/30 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Illustrated recording visual */}
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="relative w-72 h-72 flex items-center justify-center">
              {/* Outer soft glow */}
              <div className="absolute inset-0 rounded-full bg-turquoise/10 animate-pulse" />
              {/* Inner circle */}
              <div className="relative w-60 h-60 rounded-full bg-soft-gray flex flex-col items-center justify-center shadow-card border-4 border-turquoise/30">
                {/* Baby figure */}
                <div className="flex flex-col items-center gap-1">
                  {/* Baby head */}
                  <div className="w-12 h-12 rounded-full bg-[#FDDBB4] border-2 border-[#e8c49a] shadow-sm flex items-center justify-center">
                    <div className="flex gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-navy" />
                      <div className="w-1 h-1 rounded-full bg-navy" />
                    </div>
                  </div>
                  {/* Baby body */}
                  <div className="w-14 h-10 rounded-2xl bg-turquoise/60 border border-turquoise/40 shadow-sm" />
                  {/* Baby legs */}
                  <div className="flex gap-2">
                    <div className="w-4 h-6 rounded-full bg-turquoise/50 border border-turquoise/30" />
                    <div className="w-4 h-6 rounded-full bg-turquoise/50 border border-turquoise/30" />
                  </div>
                </div>
                {/* Recording badge */}
                <div className="absolute -top-3 -right-3 bg-coral text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse inline-block" />
                  REC
                </div>
                {/* Phone icon bottom-left */}
                <div className="absolute -bottom-3 -left-3 bg-navy text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                  <Video className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Info tag */}
            <div className="bg-navy/5 border border-navy/10 rounded-2xl px-6 py-4 text-center max-w-xs">
              <p className="text-sm font-semibold text-navy">0–6 ay döneminde</p>
              <p className="text-sm text-navy/70 mt-0.5">video tabanlı hareket analizi</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-14 bg-soft-gray border-l-4 border-turquoise rounded-r-2xl px-6 py-4 max-w-3xl mx-auto">
          <p className="text-sm text-navy/70 leading-relaxed">
            <span className="font-semibold text-navy">Not: </span>
            Bu hizmet tanı koymaz; gelişimsel farkındalık ve bilgilendirme amacıyla tasarlanmıştır.
          </p>
        </div>
      </div>
    </section>
  );
}
