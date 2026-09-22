'use client';

const milestones = [
  { emoji: '♡', label: 'İlk gülümseme', age: '~6. hafta' },
  { emoji: '↻', label: 'İlk dönüş', age: '~4. ay' },
  { emoji: '👶', label: 'İlk oturuş', age: '~6. ay' },
  { emoji: '👣', label: 'İlk adım', age: '~12. ay' },
];

export default function EmotionalIntro() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Subtle background mesh */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Large centered heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-6">
            Her şey bir bebeğin dünyaya gelmesiyle başlar.
          </h2>
          <p className="text-navy/55 text-lg leading-relaxed">
            Her aile bebeğinin gelişim yolculuğunda güven, doğru bilgi ve destek ister.
          </p>
        </div>

        {/* Milestone Timeline Row */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-turquoise/10 via-turquoise/30 to-turquoise/10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-turquoise/60 to-transparent animate-gradient-shift" style={{ backgroundSize: '200% 100%' }} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {milestones.map((milestone, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center group cursor-default"
              >
                {/* Card */}
                <div className="relative z-10 w-24 h-24 rounded-3xl bg-soft-gray group-hover:bg-white group-hover:shadow-card-glow group-hover:-translate-y-3 transition-all duration-500 flex flex-col items-center justify-center mb-4 border-2 border-transparent group-hover:border-turquoise/40">
                  <span className="text-3xl leading-none mb-1 group-hover:scale-125 transition-transform duration-500">{milestone.emoji}</span>
                  <span className="text-[10px] font-bold text-turquoise tracking-wider uppercase">
                    {milestone.age}
                  </span>
                </div>

                {/* Turquoise accent line */}
                <div className="w-10 h-1 bg-turquoise/20 group-hover:bg-turquoise group-hover:w-16 rounded-full mb-3 transition-all duration-500" />

                {/* Milestone label */}
                <p className="font-bold text-navy text-sm leading-snug group-hover:text-turquoise transition-colors duration-300">{milestone.label}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Divider */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px bg-gradient-to-r from-transparent to-turquoise/20 flex-1 max-w-xs" />
          <div className="w-2.5 h-2.5 rounded-full bg-turquoise/50 animate-pulse" />
          <div className="h-px bg-gradient-to-l from-transparent to-turquoise/20 flex-1 max-w-xs" />
        </div>
      </div>
    </section>
  );
}
