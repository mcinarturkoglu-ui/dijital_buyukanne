"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Baby, ChevronRight, Sparkles } from "lucide-react";

const navLinks = [
  { href: "/uygulama", label: "Uygulama" },
  { href: "/babysensai", label: "BabySensAI" },
  { href: "/kurumlar", label: "Kurumlar İçin" },
  { href: "/etkimiz", label: "Sosyal Etki" },
  { href: "/destekciler", label: "Destekçiler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#061e33]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/20 py-3"
          : "bg-gradient-to-b from-[#061e33]/80 via-[#061e33]/40 to-transparent backdrop-blur-[6px] border-b border-white/[0.06] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-turquoise via-teal-400 to-[#082A46] flex items-center justify-center shadow-lg shadow-turquoise/20 group-hover:shadow-turquoise/40 group-hover:scale-105 transition-all duration-300 border border-white/20">
                <Baby className="w-5 h-5 text-white stroke-[2.5]" />
              </div>
              {/* Subtle glow ring on hover */}
              <div className="absolute inset-0 rounded-2xl bg-turquoise/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-125" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white leading-tight">
                Dijital<span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise via-teal-300 to-turquoise">Büyükanne</span>
              </span>
              <span className="text-[10px] text-white/60 font-medium tracking-wider hidden sm:block">
                0–24 Ay Aile Ekosistemi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links — Translucent Glass Pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.07] hover:bg-white/[0.10] backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/15 shadow-inner transition-colors">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "text-white bg-white/15 border border-turquoise/50 shadow-sm shadow-turquoise/20 font-bold"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-pulse" />
                  )}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/kurumlar"
              className="relative overflow-hidden group px-5 py-2.5 text-xs xl:text-sm font-bold rounded-full bg-gradient-to-r from-coral to-[#e8634f] text-white shadow-lg shadow-coral/25 hover:shadow-glow-coral active:scale-98 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-1.5"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
              <span className="relative z-10">Kurumsal Demo</span>
              <ChevronRight size={15} className="relative z-10 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-white hover:text-turquoise bg-white/10 hover:bg-white/15 border border-white/15 transition-all duration-200"
            aria-label="Menüyü aç/kapat"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden bg-[#061e33]/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl px-4 overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-[600px] py-5 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
              pathname === "/"
                ? "bg-turquoise/20 text-turquoise font-bold border border-turquoise/30"
                : "text-white/80 hover:bg-white/5 hover:text-white"
            }`}
          >
            <span>Ana Sayfa</span>
            <ChevronRight size={16} className="opacity-50" />
          </Link>

          {navLinks.map((link, index) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                  isActive
                    ? "bg-turquoise/20 text-turquoise font-bold border border-turquoise/30"
                    : "text-white/80 hover:bg-white/5 hover:text-white"
                }`}
                style={{ transitionDelay: `${index * 25}ms` }}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} className="opacity-50" />
              </Link>
            );
          })}

          {/* Mobile Actions */}
          <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="/kurumlar"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 text-center text-sm font-bold rounded-xl bg-gradient-to-r from-coral to-[#e8634f] text-white shadow-md shadow-coral/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Kurumsal Demo İstiyorum</span>
              <ChevronRight size={16} />
            </Link>
            <Link
              href="/uygulama"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 text-center text-sm font-bold rounded-xl border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all duration-200"
            >
              Mobil Uygulamayı Keşfet
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
