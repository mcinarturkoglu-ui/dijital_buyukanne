"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyBottomCTA() {
  const pathname = usePathname();
  const isInstitutionPage =
    pathname.startsWith("/kurumlar") ||
    pathname.startsWith("/etkimiz") ||
    pathname.startsWith("/destekciler");

  return (
    <div className="sticky-bottom-cta md:hidden safe-area-pb">
      <div className="flex gap-3">
        {isInstitutionPage ? (
          <Link
            href="/kurumlar#form"
            className="btn-primary flex-1 text-center text-sm py-3"
          >
            Bilgi Al
          </Link>
        ) : (
          <>
            <Link
              href="/uygulama"
              className="btn-primary flex-1 text-center text-sm py-3"
            >
              Uygulamayı İndir
            </Link>
            <Link
              href="/kurumlar"
              className="btn-secondary flex-1 text-center text-sm py-3"
            >
              Kurumunuz İçin
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
