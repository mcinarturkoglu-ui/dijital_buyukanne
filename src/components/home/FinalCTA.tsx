import Link from "next/link";
import { ArrowRight, Heart, Sparkles, Baby, Building2 } from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function FinalCTA() {
  const content = siteContent.finalCTA || {};

  return (
    <section className="relative py-28 px-4 md:px-8 bg-gradient-to-br from-[#181D42] via-[#222958] to-[#1E234D] text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-400/8 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #0EA5E9 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 text-sky-300 text-xs md:text-sm font-semibold mb-8 backdrop-blur-md border border-white/10 shadow-sm">
          <Heart size={14} className="text-coral fill-coral animate-pulse" />
          <span>{content.eyebrow || "Bir bebeğin geleceğine birlikte dokunalım"}</span>
          <Sparkles size={14} className="text-sky-400/60" />
        </div>

        {/* Big tagline */}
        <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-white/40 mb-4 flex items-center justify-center gap-3">
          <Baby size={16} className="text-coral/60" />
          Her bebek için
          <span className="text-white/20">·</span>
          Her aile için
          <span className="text-white/20">·</span>
          Her şehir için
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight text-white">
          {content.title || "Bir bebeğe destek olmak, bir geleceğe dokunmaktır."}
        </h2>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          {content.subtitle || "Daha fazla bebeğin ve ailenin gelişim yolculuğunda birlikte yer alabiliriz. Belediyeler, vakıflar ve destekçiler için teknoloji ve sosyal etki bir arada."}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <Link
            href="/kurumlar"
            className="shimmer-btn w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-coral to-coral-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-coral/25 hover:-translate-y-1 flex items-center justify-center gap-2 text-base"
          >
            <Building2 size={18} />
            <span>{content.primaryButton || "Kurum Olarak Destek Ol"}</span>
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/uygulama"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-2xl transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2 text-base backdrop-blur-sm"
          >
            <span>{content.secondaryButton || "Uygulamayı Keşfet"}</span>
          </Link>
        </div>

        {/* Trust footer */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4">
          <p className="text-xs md:text-sm uppercase tracking-widest text-sky-300/60 font-medium">
            Bilim &bull; Yapay Zekâ &bull; Sosyal Sorumluluk
          </p>
          <div className="flex items-center gap-2 text-xs text-white/30">
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Tanı koymaz &bull; Bilgilendirir &bull; Yönlendirir</span>
          </div>
        </div>
      </div>
    </section>
  );
}
