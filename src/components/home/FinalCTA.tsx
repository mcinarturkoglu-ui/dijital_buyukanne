import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-28 px-4 md:px-8 bg-gradient-to-br from-[#082A46] via-[#0b3353] to-[#051c30] text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-turquoise/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-turquoise text-xs md:text-sm font-semibold mb-8 backdrop-blur-sm border border-white/10">
          <Heart size={14} className="text-coral fill-coral" />
          <span>Bir bebeğin geleceğine birlikte dokunalım</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight text-white">
          Bir bebeğe destek olmak, <br className="hidden sm:inline" />
          bir geleceğe dokunmaktır.
        </h2>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Daha fazla bebeğin ve ailenin gelişim yolculuğunda birlikte yer alabiliriz.
          Belediyeler, vakıflar ve destekçiler için teknoloji ve sosyal etki bir arada.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <Link
            href="/kurumlar"
            className="w-full sm:w-auto px-8 py-4 bg-coral hover:bg-coral-600 text-white font-bold rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 text-base"
          >
            <span>Kurum Olarak Destek Ol</span>
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/uygulama"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 border-2 border-white/70 hover:bg-white hover:text-navy active:bg-slate-100 text-white font-bold rounded-2xl transition-all duration-200 text-base shadow-sm"
          >
            DijitalBüyükanne&apos;yi Kullan
          </Link>

        </div>

        <div className="pt-6 border-t border-white/10 inline-block">
          <p className="text-xs md:text-sm uppercase tracking-widest text-turquoise-200/80 font-medium">
            Bilim &bull; Yapay Zekâ &bull; Sosyal Sorumluluk
          </p>
        </div>
      </div>
    </section>
  );
}
