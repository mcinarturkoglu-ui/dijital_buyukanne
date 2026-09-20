"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/#dijitalbuyukanne", label: "DijitalBüyükanne" },
  { href: "/uygulama", label: "Mobil Uygulama" },
  { href: "/kurumlar", label: "Kurumlar İçin" },
  { href: "/etkimiz", label: "Etkimiz" },
  { href: "/destekciler", label: "Destekçilerimiz" },
  { href: "/babysensai", label: "BabySensAI" },
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

  // Is dark hero background
  const hasDarkHero = pathname === "/" || pathname === "/uygulama" || pathname === "/kurumlar" || pathname === "/babysensai" || pathname === "/etkimiz" || pathname === "/hakkimizda" || pathname.startsWith("/destekciler");
  const useLightHeader = isScrolled || !hasDarkHero;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md border-b border-gray-100 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="container-max px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-turquoise to-navy flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <span className="text-white text-xs font-bold tracking-wider">DB</span>
            </div>
            <span className="font-bold text-lg md:text-xl tracking-tight text-navy">
              DijitalBüyükanne
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href) && !link.href.includes("#"));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-xl transition-all ${
                    isActive
                      ? "text-turquoise font-bold bg-turquoise/10"
                      : "text-navy/80 hover:text-turquoise hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/kurumlar"
              className="px-5 py-2.5 text-sm font-bold rounded-xl bg-coral text-white hover:bg-[#e8634f] active:bg-[#d9523e] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Kurumunuz İçin
            </Link>
            <Link
              href="/uygulama"
              className="px-5 py-2.5 text-sm font-bold rounded-xl border-2 border-navy text-navy hover:bg-navy hover:text-white active:bg-[#062035] transition-all duration-200"
            >
              Uygulamayı Kullan
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-xl text-navy hover:bg-slate-100 transition-colors"
            aria-label="Menüyü aç"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>


      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-soft-gray shadow-lg">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-navy font-medium rounded-xl hover:bg-soft-gray hover:text-turquoise transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2 border-t border-gray-100">
              <Link
                href="/kurumlar"
                onClick={() => setMobileOpen(false)}
                className="block w-full py-3 text-center text-sm font-bold rounded-xl bg-coral text-white hover:bg-[#e8634f] active:bg-[#d9523e] transition-all shadow-sm"
              >
                Kurumunuz İçin
              </Link>
              <Link
                href="/uygulama"
                onClick={() => setMobileOpen(false)}
                className="block w-full py-3 text-center text-sm font-bold rounded-xl border-2 border-navy text-navy hover:bg-navy hover:text-white active:bg-[#062035] transition-all"
              >
                Uygulamayı Kullan
              </Link>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
}
