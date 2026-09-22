"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Building2, Download } from "lucide-react";

export default function StickyBottomCTA() {
  const pathname = usePathname();
  const isInstitutionPage =
    pathname.startsWith("/kurumlar") ||
    pathname.startsWith("/etkimiz") ||
    pathname.startsWith("/destekciler");

  return (
    <div className="sticky-bottom-cta md:hidden safe-area-pb relative">
      {/* Top subtle gradient border line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-turquoise/60 to-transparent pointer-events-none" />

      <div className="flex gap-2.5">
        {isInstitutionPage ? (
          <Link
            href="/kurumlar#form"
            className="btn-primary flex-1 text-center text-sm py-3 flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-transform font-bold"
          >
            <Building2 size={16} />
            <span>Bilgi Al & Demo</span>
          </Link>
        ) : (
          <>
            <Link
              href="/uygulama"
              className="btn-primary flex-1 text-center text-xs sm:text-sm py-3 flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-transform font-bold"
            >
              <Download size={15} />
              <span>Uygulamayı İndir</span>
            </Link>
            <Link
              href="/kurumlar"
              className="btn-secondary flex-1 text-center text-xs sm:text-sm py-3 flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-transform font-bold"
            >
              <Sparkles size={15} className="text-coral" />
              <span>Kurumlar İçin</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
