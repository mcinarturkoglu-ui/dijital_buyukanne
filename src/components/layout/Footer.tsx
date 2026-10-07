"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Instagram, Twitter, Linkedin, Youtube, Baby, ArrowUpRight, Heart } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/" || pathname === "/sunum" || pathname === "/rotary") return null;

  return (
    <footer className="relative bg-gradient-to-b from-[#1E234D] via-[#161A3A] to-[#0E1128] text-white overflow-hidden">
      {/* Top gradient mesh decorative element */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-coral/10 rounded-full blur-3xl" />
      </div>

      {/* Top accent gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />

      <div className="container-max px-4 md:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group bg-white/95 hover:bg-white rounded-2xl px-3.5 py-2 shadow-sm transition-all duration-300">
              <Image
                src="/images/logo.png"
                alt="Dijital Büyükanne"
                width={170}
                height={55}
                className="h-9 w-auto object-contain group-hover:scale-102 transition-transform duration-300"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-4">
              DijitalBüyükanne; 0–24 ay bebek gelişiminde aileleri, uzman hekimleri ve yerel yönetimleri buluşturan yapay zekâ destekli sosyal etki ekosistemidir.
            </p>

            {/* Teknoloji Sahibi & Ar-Ge Künyesi */}
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 max-w-sm space-y-2 text-xs text-white/80 backdrop-blur-sm mb-5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-turquoise flex items-center gap-1.5 font-mono text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Adapha Yapay Zeka &bull; BabySensAI
                </span>
                <span className="text-[10px] text-white/50 font-mono">Ar-Ge Üssü</span>
              </div>
              <p className="text-[11px] text-white/60 leading-snug">
                Ondokuz Mayıs Üniversitesi Kurupelit Kampüsü, Samsun Teknopark, 55139 Atakum / Samsun
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1.5 border-t border-white/10 text-[11px]">
                <a href="tel:05428461232" className="text-sky-300 hover:text-white transition-colors font-mono">
                  📞 0542 846 12 32
                </a>
                <a href="mailto:info@adapha.com" className="text-sky-300 hover:text-white transition-colors font-mono">
                  ✉️ info@adapha.com
                </a>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-turquoise/30 rounded-xl px-4 py-2.5 transition-all duration-300 backdrop-blur-sm group"
                aria-label="App Store'dan indir"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="opacity-80 group-hover:opacity-100 transition-opacity">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.21 1.29-2.19 3.85.03 3.06 2.69 4.08 2.72 4.09zm-7.9-14.56c.73-.89 1.94-1.56 2.94-1.6.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.01z" />
                </svg>
                <div>
                  <p className="text-white/40 text-xs">İndir</p>
                  <p className="text-white text-sm font-semibold">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-turquoise/30 rounded-xl px-4 py-2.5 transition-all duration-300 backdrop-blur-sm group"
                aria-label="Google Play'den indir"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="opacity-80 group-hover:opacity-100 transition-opacity">
                  <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
                </svg>
                <div>
                  <p className="text-white/40 text-xs">İndir</p>
                  <p className="text-white text-sm font-semibold">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-turquoise" />
              Platform & Ar-Ge
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/#dijitalbuyukanne", label: "DijitalBüyükanne", external: false },
                { href: "/uygulama", label: "Mobil Uygulama", external: false },
                { href: "/babysensai", label: "BabySensAI", external: false },
                { href: "https://babysensai.com", label: "BabySensAI.com", external: true },
                { href: "https://www.adapha.com/tr", label: "Adapha Yapay Zeka", external: true },
              ].map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-turquoise text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-1 group font-medium"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={12} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-turquoise text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumlar */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-coral" />
              Kurumlar
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/kurumlar", label: "Kurumlar İçin" },
                { href: "/kurumlar#pilot", label: "Pilot Program" },
                { href: "/kurumlar#destek", label: "Destekçi Ol" },
                { href: "/etkimiz", label: "Etki Raporları" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-turquoise text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hakkımızda */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-4 rounded-full bg-turquoise" />
              Hakkımızda
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/destekciler", label: "Destekçilerimiz" },
                { href: "/etkimiz", label: "Etkimiz" },
                { href: "/hakkimizda#iletisim", label: "İletişim" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-turquoise text-sm transition-all duration-200 hover:translate-x-1 inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Row */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {[
            { icon: Instagram, label: "Instagram", href: "#" },
            { icon: Twitter, label: "Twitter", href: "#" },
            { icon: Linkedin, label: "LinkedIn", href: "#" },
            { icon: Youtube, label: "YouTube", href: "#" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-turquoise/20 border border-white/10 hover:border-turquoise/30 flex items-center justify-center text-white/50 hover:text-turquoise transition-all duration-300 hover:scale-110"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm flex items-center gap-1.5">
            © 2024 DijitalBüyükanne. Tüm hakları saklıdır.
            <Heart size={12} className="text-coral/50 fill-coral/50" />
          </p>
          <div className="flex items-center gap-6">
            {[
              { href: "/kvkk", label: "KVKK" },
              { href: "/gizlilik", label: "Gizlilik" },
              { href: "/kullanim-kosullari", label: "Kullanım Koşulları" },
              { href: "/cerezler", label: "Çerezler" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/30 hover:text-white/70 text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
