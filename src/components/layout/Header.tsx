"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";

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
          ? "bg-white/95 backdrop-blur-xl border-b border-sky-100 shadow-xs py-2.5"
          : "bg-white/85 backdrop-blur-md border-b border-sky-100/60 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <Image
              src="/images/logo.png"
              alt="Dijital Büyükanne"
              width={200}
              height={65}
              priority
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-102 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation Links — Translucent Pill */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 hover:bg-slate-100/95 backdrop-blur-xl px-3 py-1.5 rounded-full border border-slate-200/70 shadow-xs transition-colors">
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
                      ? "text-sky-950 bg-white shadow-xs font-bold border border-sky-200/80"
                      : "text-slate-600 hover:text-sky-950 hover:bg-white/60"
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
                  )}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Action Button */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/kurumlar"
              className="relative overflow-hidden group px-5 py-2.5 text-xs xl:text-sm font-bold rounded-full bg-gradient-to-r from-coral to-[#e8634f] text-white shadow-md shadow-coral/25 hover:shadow-lg hover:shadow-coral/35 active:scale-98 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-1.5"
            >
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
              <span className="relative z-10">Kurumsal Demo</span>
              <ChevronRight size={15} className="relative z-10 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-indigo-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all duration-200"
            aria-label="Menüyü aç/kapat"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-200 shadow-2xl px-4 overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-[600px] py-5 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
              pathname === "/"
                ? "bg-indigo-50 text-indigo-950 font-bold border border-indigo-200"
                : "text-slate-700 hover:bg-slate-50 hover:text-indigo-950"
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
                    ? "bg-indigo-50 text-indigo-950 font-bold border border-indigo-200"
                    : "text-slate-700 hover:bg-slate-50 hover:text-indigo-950"
                }`}
                style={{ transitionDelay: `${index * 25}ms` }}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} className="opacity-50" />
              </Link>
            );
          })}

          {/* Mobile Actions */}
          <div className="pt-4 mt-2 border-t border-slate-200 flex flex-col gap-2">
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
              className="w-full py-3 text-center text-sm font-bold rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-all duration-200"
            >
              Mobil Uygulamayı Keşfet
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
