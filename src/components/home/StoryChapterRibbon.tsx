'use client';

interface StoryChapterRibbonProps {
  chapterNumber: string;
  chapterTitle: string;
  headline: string;
  description: string;
  anchorId?: string;
  theme?: 'light' | 'dark';
  accent?: 'turquoise' | 'coral' | 'emerald';
}

export default function StoryChapterRibbon({
  chapterNumber,
  chapterTitle,
  headline,
  description,
  anchorId,
  theme = 'light',
  accent = 'turquoise',
}: StoryChapterRibbonProps) {
  const isDark = theme === 'dark';

  const accentStyles = {
    turquoise: {
      badgeBg: 'bg-turquoise/10 border-turquoise/30 text-turquoise',
      dot: 'bg-turquoise',
      glow: 'shadow-turquoise/30',
      line: 'via-turquoise/40',
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
      className={`relative py-14 md:py-20 px-4 select-none overflow-hidden transition-colors border-y ${
        isDark
          ? 'bg-gradient-to-b from-[#061e32] via-[#082A46] to-[#061e32] text-white border-white/5'
          : 'bg-gradient-to-b from-slate-50 via-white to-slate-50 text-navy border-slate-100'
      }`}
    >
      {/* Central architectural connector line */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent ${accentStyles.line} to-transparent opacity-50 pointer-events-none`}
      />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Institutional Section Eyebrow Badge */}
        <div
          className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-[11px] font-semibold tracking-wider uppercase backdrop-blur-md mb-4 shadow-sm ${accentStyles.badgeBg}`}
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
          className={`mt-3.5 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-normal ${
            isDark ? 'text-slate-300/80' : 'text-slate-600'
          }`}
        >
          {description}
        </p>

        {/* Subtle geometric precision indicator */}
        <div className="mt-7 flex items-center gap-2 opacity-50">
          <div className={`w-8 h-[1px] bg-gradient-to-r from-transparent ${accentStyles.line}`} />
          <div className={`w-1.5 h-1.5 rounded-full ${accentStyles.dot}`} />
          <div className={`w-8 h-[1px] bg-gradient-to-l from-transparent ${accentStyles.line}`} />
        </div>
      </div>
    </div>
  );
}

