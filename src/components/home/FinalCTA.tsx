"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  Heart, 
  Sparkles, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink, 
  ShieldCheck, 
  FileText, 
  Smartphone,
  CheckCircle2
} from "lucide-react";
import siteContent from "@/data/site-content.json";

export default function FinalCTA() {
  const content = siteContent.finalCTA || {};

  return (
    <section className="relative w-full max-w-7xl 2xl:max-w-[1360px] mx-auto px-4 sm:px-6">
      {/* Container Card */}
      <div className="relative bg-gradient-to-br from-[#0B1E3B] via-[#0E264B] to-[#07152B] text-white rounded-3xl p-6 sm:p-8 lg:p-9 border border-white/15 shadow-2xl overflow-hidden backdrop-blur-xl">
        
        {/* Ambient lighting glows */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-coral/15 rounded-full blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #38BDF8 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Top Eyebrow Header */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 mb-4 border-b border-white/10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-semibold backdrop-blur-md border border-white/15 shadow-xs">
            <Heart size={12} className="text-coral fill-coral animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider">
              {content.eyebrow || "Bir Bebeğin Geleceğine Birlikte Dokunalım"}
            </span>
            <Sparkles size={12} className="text-sky-300" />
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 text-[11px] text-white/70 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Ar-Ge: OMÜ Kurupelit Kampüsü Samsun Teknopark</span>
          </div>
        </div>

        {/* Main Content Grid: Left (Vision & CTA) + Right (Contact & Ar-Ge Center) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-stretch relative z-10">
          
          {/* Left Column (7 cols): Vision & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight mb-2.5 leading-tight text-white">
                {content.title || "Bir bebeğe destek olmak, bir geleceğe dokunmaktır."}
              </h2>
              
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                {content.subtitle || "Belediyeler, kamu kurumları ve sivil toplum iş birliğiyle; Türkiye'nin dört bir yanındaki bebeklerimize eşit, bilimsel ve erken gelişim desteği sunuyoruz. Erken tanı gecikmelerini önleyelim, geleceğimizi birlikte büyütelim."}
              </p>

              {/* 3 Compact Trust & Value Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-5">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-left">
                  <div className="flex items-center gap-1.5 text-coral text-xs font-bold mb-1">
                    <CheckCircle2 size={13} className="shrink-0" />
                    <span>Erken Teşhise Köprü</span>
                  </div>
                  <p className="text-[11px] text-white/70 leading-snug">
                    Prechtl GMs & Derma-41 ile doğru zamanda uzmana sevk.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-left">
                  <div className="flex items-center gap-1.5 text-sky-300 text-xs font-bold mb-1">
                    <Building2 size={13} className="shrink-0" />
                    <span>Sosyal Belediyecilik</span>
                  </div>
                  <p className="text-[11px] text-white/70 leading-snug">
                    Hoş Geldin Bebek paketine entegre ölçülebilir hizmet.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-left">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold mb-1">
                    <ShieldCheck size={13} className="shrink-0" />
                    <span>Klinik & KVKK</span>
                  </div>
                  <p className="text-[11px] text-white/70 leading-snug">
                    Anonim biyometrik veri ve 256-bit şifreleme güvencesi.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <Link
                href="/kurumlar"
                className="px-5 py-2.5 bg-gradient-to-r from-coral to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-coral/20 hover:-translate-y-0.5 flex items-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                <Building2 size={15} />
                <span>{content.primaryButton || "Kurumsal Protokol & Demo"}</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/uygulama"
                className="px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl transition-all border border-white/20 hover:border-white/35 flex items-center gap-2 text-xs sm:text-sm backdrop-blur-sm cursor-pointer"
              >
                <Smartphone size={14} className="text-sky-300" />
                <span>{content.secondaryButton || "Uygulamayı İncele"}</span>
              </Link>

              <Link
                href="/sunum"
                target="_blank"
                className="px-3.5 py-2.5 bg-sky-950/60 hover:bg-sky-900/60 text-sky-200 hover:text-white font-semibold rounded-xl transition-all border border-sky-400/25 flex items-center gap-1.5 text-xs backdrop-blur-sm cursor-pointer"
              >
                <FileText size={14} />
                <span>Sunum PDF</span>
              </Link>
            </div>
          </div>

          {/* Right Column (5 cols): Official Contact & Headquarters Card */}
          <div className="lg:col-span-5 bg-white/[0.06] border border-white/15 rounded-2xl p-4 sm:p-5 flex flex-col justify-between backdrop-blur-md">
            <div>
              {/* Card Title */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Resmî İletişim & Ar-Ge Merkezi
                  </h3>
                  <p className="text-[11px] text-white/60 font-mono">
                    Adapha Yapay Zeka & BabySensAI
                  </p>
                </div>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30">
                  Genel Merkez
                </span>
              </div>

              {/* Contact Details List */}
              <div className="space-y-2.5 text-xs text-white/80">
                {/* Address */}
                <div className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono text-white/50 block">Ar-Ge & İnovasyon Üssü</span>
                    <span className="text-[11px] text-white/90 leading-tight">
                      OMÜ Kurupelit Kampüsü Samsun Teknopark No: 124, Atakum / Samsun
                    </span>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-2.5">
                  <Phone size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div className="w-full">
                    <span className="text-[10px] font-mono text-white/50 block">Kurumsal Çağrı & İletişim</span>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 font-mono text-[11px]">
                      <a href="tel:05428461232" className="text-emerald-300 hover:text-white transition-colors">
                        0542 846 12 32
                      </a>
                      <span className="text-white/30">•</span>
                      <a href="tel:03622301919" className="text-white/80 hover:text-white transition-colors">
                        0362 230 19 19
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-2.5">
                  <Mail size={14} className="text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono text-white/50 block">E-Posta Kanalları</span>
                    <div className="flex flex-wrap items-center gap-x-3 font-mono text-[11px]">
                      <a href="mailto:info@adapha.com" className="text-sky-300 hover:text-white transition-colors">
                        info@adapha.com
                      </a>
                      <span className="text-white/30">•</span>
                      <a href="mailto:kurumsal@dijitalbuyukanne.com" className="text-white/80 hover:text-white transition-colors">
                        kurumsal@dijitalbuyukanne.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-2.5">
                  <Clock size={14} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono text-white/50 block">Çalışma Saatleri</span>
                    <span className="text-[11px] text-white/90">
                      Hafta içi 08:30 – 18:00 <span className="text-emerald-400 font-mono">(AI Asistan: 7/24 Kesintisiz)</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Ecosystem Web Links */}
            <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
              <span className="text-white/50 font-mono text-[10px]">Doğrudan Erişim:</span>
              <div className="flex items-center gap-2.5 font-semibold">
                <a
                  href="https://babysensai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-300 hover:text-white transition-colors inline-flex items-center gap-1 hover:underline"
                >
                  <span>babysensai.com</span>
                  <ExternalLink size={10} />
                </a>
                <span className="text-white/20">|</span>
                <a
                  href="https://www.adapha.com/tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-1 hover:underline"
                >
                  <span>adapha.com/tr</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Trust Guarantee Strip */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] text-white/60">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sky-200/90 font-semibold flex items-center gap-1">
              <ShieldCheck size={12} className="text-emerald-400" />
              TÜBİTAK & KOSGEB Destekli Ar-Ge
            </span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="text-white/70">
              Pediatrik ve Nörolojik Danışma Kurulu
            </span>
            <span className="hidden md:inline text-white/20">•</span>
            <span className="text-white/70">
              KVKK & 256-Bit SSL Anonim Sağlık Verisi
            </span>
          </div>

          <div className="text-[10px] font-mono text-white/50">
            Tanı koymaz &bull; Bilgilendirir &bull; Erken fark ettirir &bull; Uzmana yönlendirir
          </div>
        </div>

      </div>
    </section>
  );
}
