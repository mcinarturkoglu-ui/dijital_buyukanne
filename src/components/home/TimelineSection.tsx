'use client';

const timelinePoints = [
  {
    emoji: '😊',
    ageBadge: '2–3 Ay',
    milestone: 'İlk Gülümseme',
    description:
      'Sosyal gülümseme, bebeğin çevresine tepki verdiğinin ilk işaretlerinden biri.',
  },
  {
    emoji: '🔄',
    ageBadge: '4–6 Ay',
    milestone: 'Dönüş',
    description:
      'Sırtüstünden yüzüstüne geçiş, kas gelişiminde kritik bir aşamayı gösterir.',
  },
  {
    emoji: '🧸',
    ageBadge: '6–9 Ay',
    milestone: 'Oturuş',
    description:
      'Desteksiz oturabilmek, üst gövde kontrolünün ve denge gelişiminin habercisidir.',
  },
  {
    emoji: '👣',
    ageBadge: '9–18 Ay',
    milestone: 'İlk Adımlar',
    description:
      'Bağımsız yürüme, motor gelişimin en heyecan verici dönüm noktalarından biridir.',
  },
];

export default function TimelineSection() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-turquoise/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-turquoise bg-turquoise/5 border border-turquoise/15 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-pulse" />
              Gelişim Yolculuğu
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#082A46] leading-tight">
            İlk 24 ay, gelişimin en önemli dönemlerinden biri.
          </h2>
        </div>

        {/* Timeline — horizontal scroll on mobile */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0">
          <div className="relative min-w-[640px] md:min-w-0">

            {/* Connecting line — desktop with animated gradient */}
            <div className="absolute top-10 left-[calc(12.5%-2px)] right-[calc(12.5%-2px)] h-0.5 hidden md:block overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-turquoise/10 via-turquoise/30 to-turquoise/10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-turquoise/50 to-transparent animate-gradient-shift" style={{ backgroundSize: '200% 100%' }} />
            </div>

            <div className="grid grid-cols-4 gap-4 md:gap-6">
              {timelinePoints.map((point, i) => (
                <div key={i} className="flex flex-col items-center text-center group">

                  {/* Icon circle with dot */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-turquoise/5 border-2 border-turquoise/20 group-hover:border-turquoise group-hover:bg-turquoise/10 group-hover:shadow-card-glow transition-all duration-500 flex items-center justify-center">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-500">{point.emoji}</span>
                    </div>
                    {/* Pulse ring effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-turquoise/30 animate-ring-pulse pointer-events-none" />
                    {/* Dot on line */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-turquoise border-2 border-white shadow-md group-hover:scale-125 transition-transform duration-300" />
                  </div>

                  {/* Age badge */}
                  <span className="inline-block bg-turquoise/10 text-turquoise text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-2 border border-turquoise/15">
                    {point.ageBadge}
                  </span>

                  {/* Milestone name */}
                  <h3 className="font-bold text-[#082A46] text-sm mb-2 group-hover:text-turquoise transition-colors duration-300">{point.milestone}</h3>

                  {/* Description */}
                  <p className="text-[#082A46]/50 text-xs leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blockquote */}
        <div className="mt-16 flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-turquoise to-teal-400 mb-6" />
          <blockquote className="text-[#082A46]/65 text-lg md:text-xl italic leading-relaxed">
            &ldquo;Erken farkındalık, ihtiyaç duyulduğunda doğru desteğe daha erken ulaşmayı
            kolaylaştırabilir.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
