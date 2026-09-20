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
    <section className="py-20 md:py-28 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider uppercase text-[#14BBB7] block mb-3">
            Gelişim Yolculuğu
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#082A46] leading-tight">
            İlk 24 ay, gelişimin en önemli dönemlerinden biri.
          </h2>
        </div>

        {/* Timeline — horizontal scroll on mobile */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0">
          <div className="relative min-w-[640px] md:min-w-0">

            {/* Connecting line — desktop */}
            <div className="absolute top-10 left-[calc(12.5%-2px)] right-[calc(12.5%-2px)] h-0.5 bg-[#14BBB7]/20 hidden md:block" />

            <div className="grid grid-cols-4 gap-4 md:gap-6">
              {timelinePoints.map((point, i) => (
                <div key={i} className="flex flex-col items-center text-center group">

                  {/* Icon circle with dot */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-full bg-[#14BBB7]/10 border-2 border-[#14BBB7]/30 group-hover:border-[#14BBB7] group-hover:bg-[#14BBB7]/15 transition-all duration-300 flex items-center justify-center">
                      <span className="text-3xl">{point.emoji}</span>
                    </div>
                    {/* Dot on line */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#14BBB7] border-2 border-white shadow" />
                  </div>

                  {/* Age badge */}
                  <span className="inline-block bg-[#14BBB7]/10 text-[#14BBB7] text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-2">
                    {point.ageBadge}
                  </span>

                  {/* Milestone name */}
                  <h3 className="font-bold text-[#082A46] text-sm mb-2">{point.milestone}</h3>

                  {/* Description */}
                  <p className="text-[#082A46]/55 text-xs leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blockquote */}
        <div className="mt-16 flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="w-10 h-1 rounded-full bg-[#14BBB7] mb-6" />
          <blockquote className="text-[#082A46]/70 text-lg md:text-xl italic leading-relaxed">
            &ldquo;Erken farkındalık, ihtiyaç duyulduğunda doğru desteğe daha erken ulaşmayı
            kolaylaştırabilir.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
