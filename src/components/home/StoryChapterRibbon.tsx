'use client';

interface StoryChapterRibbonProps {
  chapterNumber: string;
  chapterTitle: string;
  headline: string;
  description: string;
  anchorId?: string;
  theme?: 'light' | 'dark';
  accent?: 'turquoise' | 'sky' | 'coral' | 'emerald';
}

export default function StoryChapterRibbon({
  chapterNumber,
  chapterTitle,
  headline,
  description,
  anchorId,
  theme = 'light',
  accent = 'sky',
}: StoryChapterRibbonProps) {
  const isDark = theme === 'dark';

  const accentStyles = {
    turquoise: {
      badgeBg: 'bg-sky-50 border-sky-200 text-sky-600',
      dot: 'bg-sky-500',
      glow: 'shadow-sky-500/30',
      line: 'via-sky-400/40',
    },
    sky: {
      badgeBg: 'bg-sky-50 border-sky-200 text-sky-600',
      dot: 'bg-sky-500',
      glow: 'shadow-sky-500/30',
      line: 'via-sky-400/40',
    },
    coral: {
      badgeBg: 'bg-coral/10 border-coral/30 text-coral',
      dot: 'bg-coral',
      glow: 'shadow-coral/30',
      line: 'via-coral/40',
    },
    emerald: {
      badgeBg: 'bg-emerald-500/10 border-emerald-400/30 text-emerald-400',
      dot: 'bg-emerald-400',
      glow: 'shadow-emerald-500/30',
      line: 'via-emerald-400/40',
    },
  }[accent];

  return (
    <div
      id={anchorId}
      className={`relative py-10 md:py-14 px-4 select-none overflow-hidden transition-colors border-y ${
        isDark
          ? 'bg-gradient-to-b from-[#0B2545] via-[#10345E] to-[#0B2545] text-white border-white/10'
          : 'bg-gradient-to-b from-[#F0F8FF] via-white to-[#F0F8FF] text-[#0B1E3B] border-sky-100/70'
      }`}
    >
      {/* Central architectural connector line running top to bottom */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-sky-400 via-sky-500 to-sky-400 opacity-60 pointer-events-none`}
      />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Top Connecting Node */}
        <div className="mb-4 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-white border-2 border-sky-500 shadow-[0_0_10px_rgba(2,132,199,0.5)]" />
        </div>

        {/* Institutional Section Eyebrow Badge */}
        <div
          className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md mb-3 shadow-xs ${accentStyles.badgeBg}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${accentStyles.dot} animate-pulse`} />
          <span className="font-mono font-bold">{chapterNumber}</span>
          <span className="opacity-40">|</span>
          <span>{chapterTitle}</span>
        </div>

        {/* Corporate Headline */}
        <h3
          className={`text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight max-w-2xl ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          {headline}
        </h3>

        {/* Contextual Description */}
        <p
          className={`mt-3 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-normal ${
            isDark ? 'text-slate-300/80' : 'text-slate-600'
          }`}
        >
          {description}
        </p>

        {/* Bottom Connecting Flow Cue */}
        <div className="mt-6 flex flex-col items-center gap-1.5">
          <span className="text-[10px] font-mono font-bold tracking-widest text-sky-600 uppercase bg-white/80 px-2.5 py-0.5 rounded-full border border-sky-200 shadow-2xs">
            BÖLÜME GİRİŞ YAPILIYOR ▼
          </span>
        </div>
      </div>
    </div>
  );
}

