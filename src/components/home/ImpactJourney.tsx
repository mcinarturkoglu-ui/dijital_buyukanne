import SectionHeader from '@/components/ui/SectionHeader';
import { ChevronRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Destekçi Kurum',
    color: 'bg-coral',
    textColor: 'text-coral',
    ringColor: 'ring-coral/20',
    glowColor: 'shadow-coral/20',
  },
  {
    number: 2,
    title: 'Programa Dahil Olma',
    color: 'bg-navy',
    textColor: 'text-navy',
    ringColor: 'ring-navy/20',
    glowColor: 'shadow-navy/20',
  },
  {
    number: 3,
    title: 'Dijital Değerlendirme',
    color: 'bg-turquoise',
    textColor: 'text-turquoise',
    ringColor: 'ring-turquoise/20',
    glowColor: 'shadow-turquoise/20',
  },
  {
    number: 4,
    title: 'Aile Bilgilendirmesi',
    color: 'bg-navy',
    textColor: 'text-navy',
    ringColor: 'ring-navy/20',
    glowColor: 'shadow-navy/20',
  },
  {
    number: 5,
    title: 'Uzman Desteği',
    color: 'bg-coral',
    textColor: 'text-coral',
    ringColor: 'ring-coral/20',
    glowColor: 'shadow-coral/20',
  },
  {
    number: 6,
    title: 'Gelişimsel Takip',
    color: 'bg-turquoise',
    textColor: 'text-turquoise',
    ringColor: 'ring-turquoise/20',
    glowColor: 'shadow-turquoise/20',
  },
];

export default function ImpactJourney() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Etki Yolculuğu"
          title="Bir destek, bir yolculuğa dönüşür."
          centered
        />

        {/* Journey Flow */}
        <div className="mt-14 overflow-x-auto pb-4">
          <div className="flex items-start gap-0 min-w-[720px] md:min-w-0 px-2">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-start flex-1 group">
                {/* Step */}
                <div className="flex flex-col items-center gap-3 flex-1">
                  {/* Circle with glow */}
                  <div className="relative">
                    <div
                      className={`w-14 h-14 rounded-full ${step.color} ring-4 ${step.ringColor} flex items-center justify-center shadow-lg ${step.glowColor} flex-shrink-0 group-hover:scale-110 transition-all duration-300`}
                    >
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                    {/* Animated pulse ring */}
                    <div className={`absolute inset-0 rounded-full ${step.color} opacity-20 animate-ring-pulse pointer-events-none`} />
                  </div>

                  {/* Title */}
                  <p
                    className={`text-xs font-semibold text-center leading-tight max-w-[80px] ${step.textColor} group-hover:font-bold transition-all duration-200`}
                  >
                    {step.title}
                  </p>
                </div>

                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="flex items-center self-start pt-4 flex-shrink-0">
                    <ChevronRight className="w-5 h-5 text-turquoise/30 group-hover:text-turquoise/60 transition-colors duration-300" strokeWidth={2} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar visual */}
        <div className="mt-8 hidden md:flex items-center gap-0 px-2">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1">
              <div className={`h-1.5 flex-1 ${step.color} opacity-30 ${index === 0 ? 'rounded-l-full' : ''} ${index === steps.length - 1 ? 'rounded-r-full' : ''}`} />
            </div>
          ))}
        </div>

        {/* Blockquote */}
        <div className="mt-14 max-w-2xl mx-auto">
          <blockquote className="relative border-l-4 border-gradient-to-b from-turquoise to-teal-400 pl-6 py-2" style={{ borderImage: 'linear-gradient(to bottom, #14BBB7, #0F9290) 1' }}>
            <div className="text-5xl text-turquoise/15 font-serif absolute -top-2 left-2 select-none">&ldquo;</div>
            <p className="text-gray-600 text-lg leading-relaxed italic font-medium relative z-10">
              Destek yalnızca bir hizmet sağlamaz; bebeğin gelişim yolculuğuna eşlik eder.
            </p>

          </blockquote>
        </div>
      </div>
    </section>
  );
}
