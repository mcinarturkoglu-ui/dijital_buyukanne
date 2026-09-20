"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Baby, ChevronRight, ArrowUpRight } from "lucide-react";

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
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-turquoise via-teal-500 to-navy flex items-center justify-center shadow-md shadow-turquoise/20 group-hover:scale-105 transition-all duration-200">
              <Baby className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-navy leading-tight">
                Dijital<span className="text-turquoise">Büyükanne</span>
              </span>
              <span className="text-[10px] text-navy/50 font-medium tracking-wider hidden sm:block">
                0–24 Ay Aile Ekosistemi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Spacious & Elegant */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-50/80 px-3 py-1.5 rounded-2xl border border-gray-100/80">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "text-turquoise bg-white shadow-sm font-bold"
                      : "text-navy/75 hover:text-turquoise hover:bg-white/60"
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-turquoise" />
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
              className="px-5 py-2.5 text-xs xl:text-sm font-bold rounded-xl bg-coral text-white hover:bg-[#e8634f] active:bg-[#d9523e] transition-all shadow-md shadow-coral/20 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-1.5"
            >
              <span>Kurumsal Demo</span>
              <ChevronRight size={15} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-2xl text-navy hover:bg-slate-100 transition-colors border border-gray-200"
            aria-label="Menüyü aç/kapat"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl px-4 py-5 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                pathname === "/" ? "bg-turquoise/10 text-turquoise font-bold" : "text-navy hover:bg-slate-50"
              }`}
            >
              <span>Ana Sayfa</span>
              <ChevronRight size={16} className="opacity-50" />
            </Link>

            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive ? "bg-turquoise/10 text-turquoise font-bold" : "text-navy hover:bg-slate-50"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} className="opacity-50" />
                </Link>
              );
            })}

            {/* Mobile Actions */}
            <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-2">
              <Link
                href="/kurumlar"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3 text-center text-sm font-bold rounded-xl bg-coral text-white shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Kurumsal Demo İstiyorum</span>
                <ChevronRight size={16} />
              </Link>
              <Link
                href="/uygulama"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3 text-center text-sm font-bold rounded-xl border border-navy/20 text-navy hover:bg-slate-50 transition-all"
              >
                Mobil Uygulamayı Keşfet
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
