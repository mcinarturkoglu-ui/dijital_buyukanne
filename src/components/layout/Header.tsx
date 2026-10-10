"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, ExternalLink, Phone, Newspaper } from "lucide-react";

const navLinks = [
  { href: "/uygulama", label: "Uygulama" },
  { href: "/kurumlar", label: "Kurumlar İçin" },
  { href: "/etkimiz", label: "Sosyal Etki" },
  { href: "/destekciler", label: "Destekçiler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isRotary = pathname === "/rotary" || pathname.startsWith("/rotary");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* ─────────────────────────────────────────────────────────────
          1. ÜST KURUMSAL & TEKNOLOJİ ŞERİDİ (babysensai.com & adapha.com)
          ───────────────────────────────────────────────────────────── */}
      <div className="bg-[#07172E] text-white text-[11px] py-1.5 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto flex items-center justify-between">
          
          {/* Sol Taraf: Ar-Ge Üssü & Basın Onayı */}
          <div className="flex items-center gap-3 text-white/80">
            <span className="inline-flex items-center gap-1.5 font-semibold text-sky-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Ar-Ge: OMÜ Kurupelit Kampüsü Samsun Teknopark
            </span>
          </div>

          {/* Sağ Taraf: babysensai.com ve adapha.com/tr Doğrudan Bağlantıları */}
          <div className="flex items-center gap-4 font-semibold">
            <a
              href="https://babysensai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-300 hover:text-white transition-colors flex items-center gap-1 hover:underline"
              title="BabySensAI Resmî Web Sitesi"
            >
              <span>babysensai.com</span>
              <ExternalLink size={11} />
            </a>
            
            <span className="text-white/20">•</span>

            <a
              href="https://www.adapha.com/tr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors flex items-center gap-1 hover:underline"
              title="Adapha Yapay Zeka Resmî Web Sitesi"
            >
              <span>adapha.com/tr</span>
              <ExternalLink size={11} />
            </a>

            <span className="text-white/20">•</span>

            <a
              href="tel:05428461232"
              className="text-emerald-400 hover:text-emerald-300 font-mono transition-colors flex items-center gap-1"
            >
              <Phone size={10} />
              <span>0542 846 12 32</span>
            </a>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. ANA NAVİGASYON ÇUBUĞU (LOGO + 6 MENÜ + EYLEM BUTONLARI)
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-sky-100 shadow-sm py-2"
            : "bg-white/90 backdrop-blur-md border-b border-sky-100/70 py-2.5"
        }`}
      >
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0 group">
              <Image
                src="/images/logo.png"
                alt="Dijital Büyükanne"
                width={200}
                height={65}
                priority
                className="h-10 sm:h-11 w-auto object-contain group-hover:scale-102 transition-transform duration-300"
              />
            </Link>

            {/* Masaüstü Menü Linkleri (Uygulama, Kurumlar İçin, Sosyal Etki, Destekçiler, Hakkımızda) */}
            <nav className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full bg-slate-100/90 hover:bg-slate-100/95 backdrop-blur-2xl border border-slate-200/90 shadow-sm transition-all duration-300">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-xs xl:text-[13px] font-bold rounded-full transition-all duration-200 flex items-center gap-2 group ${
                      isActive
                        ? "text-[#0B1E3B] bg-white shadow-md shadow-slate-200/70 border border-slate-200/80 -translate-y-0.5"
                        : "text-slate-600 hover:text-[#0B1E3B] hover:bg-white/70"
                    }`}
                  >
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-sky-400 transition-colors" />
                    )}
                    <span className="tracking-tight">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Masaüstü Sağ Butonlar (Kurumsal Demo + SAĞ EN KÖŞEDE Dış Bağlantılar) */}
            <div className="hidden lg:flex items-center gap-2.5 shrink-0">
              {/* Kurumsal Demo Butonu */}
              <Link
                href="/kurumlar"
                className="relative overflow-hidden group px-4 py-2 text-xs xl:text-sm font-bold rounded-full bg-gradient-to-r from-coral to-[#e8634f] text-white shadow-md shadow-coral/25 hover:shadow-lg hover:shadow-coral/35 active:scale-98 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-1.5"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative z-10">Kurumsal Demo</span>
                <ChevronRight size={15} className="relative z-10 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              {/* Dikey Ayırıcı Çizgi */}
              <div className="h-6 w-px bg-slate-200/90 mx-0.5 hidden xl:block" />

              {/* SAĞ EN KÖŞE: BabySensAI & Adapha Dış Bağlantı Rozetleri */}
              <div className="hidden xl:flex items-center gap-1 p-1 bg-slate-100/90 rounded-full border border-slate-200/90 shadow-2xs">
                <a
                  href="https://babysensai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-white text-[#0284C7] hover:bg-sky-50 shadow-xs border border-sky-100 transition-all flex items-center gap-1"
                  title="BabySensAI.com'u Ziyaret Et"
                >
                  <span>BabySensAI</span>
                  <ExternalLink size={10} />
                </a>

                <a
                  href="https://www.adapha.com/tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-[11px] font-bold rounded-full hover:bg-white text-slate-700 hover:text-slate-900 transition-all flex items-center gap-1"
                  title="Adapha Yapay Zeka Resmî Web Sitesi"
                >
                  <span>Adapha</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>

            {/* Mobil Menü Butonu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-indigo-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all duration-200"
              aria-label="Menüyü aç/kapat"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. MOBİL AÇILIR MENÜ (DRAWER)
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`lg:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-200 shadow-2xl px-4 overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-[700px] py-5 opacity-100" : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-1">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
              pathname === "/"
                ? "bg-indigo-50 text-indigo-950 font-bold border border-indigo-200"
                : "text-slate-700 hover:bg-slate-50 hover:text-indigo-950"
            }`}
          >
            <span>Ana Sayfa</span>
            <ChevronRight size={16} className="opacity-50" />
          </Link>

          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                  isActive
                    ? "bg-indigo-50 text-indigo-950 font-bold border border-indigo-200"
                    : "text-slate-700 hover:bg-slate-50 hover:text-indigo-950"
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} className="opacity-50" />
              </Link>
            );
          })}

          {/* Ulusal Basın Linki (Mobil) */}
          <Link
            href="/#medya"
            onClick={() => setMobileOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-semibold text-rose-700 bg-rose-50/70 border border-rose-200 flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <Newspaper size={16} />
              <span>Ulusal Basın & Medya Vitrini</span>
            </span>
            <span className="text-[10px] font-mono font-bold bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full">AA & CNN</span>
          </Link>

          {/* Dış Bağlantılar Kartı (babysensai.com & adapha.com) */}
          <div className="p-3.5 mt-2 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-[11px] font-mono font-bold text-slate-500 uppercase block">
              Resmî Ekosistem Bağlantıları
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-bold">
              <a
                href="https://babysensai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-sky-200 text-[#0284C7] flex items-center justify-between shadow-2xs"
              >
                <span>babysensai.com</span>
                <ExternalLink size={12} />
              </a>
              <a
                href="https://www.adapha.com/tr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 flex items-center justify-between shadow-2xs"
              >
                <span>adapha.com/tr</span>
                <ExternalLink size={12} />
              </a>
            </div>
            <a
              href="tel:05428461232"
              className="text-[11px] font-mono text-emerald-700 flex items-center justify-center gap-1.5 pt-1"
            >
              <Phone size={12} />
              <span>Doğrudan İletişim: 0542 846 12 32</span>
            </a>
          </div>

          {/* Mobil Eylemler */}
          <div className="pt-3 mt-1 border-t border-slate-200 flex flex-col gap-2">
            <Link
              href="/kurumlar"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 text-center text-xs font-bold rounded-xl bg-gradient-to-r from-coral to-[#e8634f] text-white shadow-md shadow-coral/20 flex items-center justify-center gap-2"
            >
              <span>Kurumsal Demo İstiyorum</span>
              <ChevronRight size={15} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
