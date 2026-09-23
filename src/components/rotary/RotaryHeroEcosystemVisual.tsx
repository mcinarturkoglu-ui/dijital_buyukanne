"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Heart,
  Activity,
  Smartphone,
  Scale,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Globe2,
  Users
} from "lucide-react";

// Official Rotary Wheel SVG for the visual
function RotaryWheelInsignia({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="4" />
      {Array.from({ length: 24 }).map((_, i) => (
        <rect
          key={i}
          x="47.5"
          y="0"
          width="5"
          height="8"
          rx="1"
          transform={`rotate(${i * 15} 50 50)`}
          fill="currentColor"
        />
      ))}
      <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="4" />
      {Array.from({ length: 6 }).map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2="50"
          y2="12"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          transform={`rotate(${i * 60} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="16" fill="currentColor" />
      <circle cx="50" cy="50" r="8" fill="#0A276E" />
      <rect x="47.5" y="42" width="5" height="6" fill="#0A276E" />
    </svg>
  );
}

export default function RotaryHeroEcosystemVisual() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  // Auto rotate tabs every 4.5 seconds for lively presentation
  useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(interval);
  }, [autoRotate]);

  const pillars = [
    {
      id: 0,
      title: "Rotary Destekleri",
      subtitle: "Hibe, Sponsorluk & Sosyal Güç",
      badge: "KENDİNDEN ÖNCE HİZMET",
      color: "from-amber-400 to-[#F7A81B]",
      textColor: "text-[#F7A81B]",
      borderColor: "border-[#F7A81B]",
      glowColor: "rgba(247, 168, 27, 0.4)",
      desc: "Rotary kulüplerinin hibe ve sponsorluk gücü, her bebeğe ücretsiz ulaşan teknolojik altyapının finansal ve etik motorudur."
    },
    {
      id: 1,
      title: "Mobil Uygulama Sistemi",
      subtitle: "BabySensAI & Prechtl GMA",
      badge: "YAPAY ZEKÂ TARAMA ALTYAPISI",
      color: "from-cyan-400 to-teal-400",
      textColor: "text-cyan-300",
      borderColor: "border-cyan-400",
      glowColor: "rgba(34, 211, 238, 0.4)",
      desc: "Evde çekilen kısa videodan 18 eklem kinematik takibiyle nöromotor riskleri ve serebral palsiyi aylar öncesinden tespit eder."
    },
    {
      id: 2,
      title: "Bebek & Koruyucu Sağlık",
      subtitle: "0–24 Ay Yaşam Güvencesi",
      badge: "ERKEN MÜDAHALE PENCERESİ",
      color: "from-rose-400 to-pink-400",
      textColor: "text-rose-300",
      borderColor: "border-rose-400",
      glowColor: "rgba(244, 63, 94, 0.4)",
      desc: "Beyin plastisitesinin en taze olduğu ilk 6 ayda yakalanan anomaliler, bebeğin ömür boyu yürüyebilmesini ve engelsiz büyümesini sağlar."
    },
    {
      id: 3,
      title: "Adil Eşitlik & Sağlıklı Gelecek",
      subtitle: "Toplumsal Dönüşüm & Kalıcı Etki",
      badge: "FIRSAT EŞİTLİĞİ & VİZYON",
      color: "from-emerald-400 to-teal-300",
      textColor: "text-emerald-300",
      borderColor: "border-emerald-400",
      glowColor: "rgba(52, 211, 153, 0.4)",
      desc: "Ailenin maddi durumuna bakılmaksızın tüm bebeklere eşit ve ücretsiz erişim; sağlıklı, bağımsız ve aydınlık nesillerin teminatıdır."
    }
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto my-8">
      {/* Radiant Background Aura */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#F7A81B]/40 via-cyan-400/30 to-[#F7A81B]/40 blur-xl opacity-75 animate-pulse" />

      {/* Main Glass Showcase Container */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#0F378A]/90 via-[#0C307C]/95 to-[#082463]/95 border-2 border-white/20 p-5 sm:p-8 backdrop-blur-xl shadow-2xl shadow-[#001E60]/80 overflow-hidden">
        
        {/* Subtle Cyber Energy Grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#F7A81B 1.2px, transparent 1.2px)",
            backgroundSize: "24px 24px"
          }}
        />

        {/* Top Header Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-6 border-b border-white/15 relative z-10">
          <div className="flex items-center gap-2.5">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F7A81B] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F7A81B]"></span>
            </span>
            <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-amber-200">
              ROTARY × DİJİTAL BÜYÜKANNE ENTEGRE SAĞLIK EKOSİSTEMİ
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-cyan-200 bg-white/10 px-3 py-1 rounded-full border border-cyan-400/30">
            <Sparkles size={13} className="text-[#F7A81B] animate-spin" style={{ animationDuration: "6s" }} />
            <span>Canlı Animasyonlu Süreç Haritası</span>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            THE 3 CORE INTERACTIVE NODES (ROTARY - BABY - MOBILE APP)
            ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 pb-6 relative z-10 items-center">
          
          {/* 1. ROTARY DESTEKLERİ (LEFT NODE) */}
          <div
            onClick={() => { setActiveTab(0); setAutoRotate(false); }}
            className={`relative p-5 rounded-2xl transition-all cursor-pointer group ${
              activeTab === 0
                ? "bg-gradient-to-b from-[#F7A81B]/25 to-white/10 border-2 border-[#F7A81B] shadow-xl shadow-[#F7A81B]/20 scale-[1.02]"
                : "bg-white/[0.06] border border-white/15 hover:bg-white/[0.10] hover:border-amber-400/50"
            }`}
          >
            {/* Spinning Golden Rotary Wheel */}
            <div className="relative mx-auto w-24 h-24 mb-4 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#F7A81B]/20 blur-md animate-pulse" />
              <div className="relative text-[#F7A81B] animate-[spin_24s_linear_infinite]">
                <RotaryWheelInsignia className="w-20 h-20 drop-shadow-[0_0_15px_rgba(247,168,27,0.7)]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[10px] font-black text-amber-200 uppercase bg-[#00246C] px-1.5 py-0.5 rounded shadow">
                  ROTARY
                </span>
              </div>
            </div>

            <div className="text-center space-y-1.5">
              <span className="inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F7A81B]/25 text-[#F7A81B] border border-[#F7A81B]/40">
                1. SPONSORLUK & HİBE
              </span>
              <h3 className="text-base sm:text-lg font-black text-white group-hover:text-[#F7A81B] transition-colors">
                Rotary Destekleri
              </h3>
              <p className="text-xs text-slate-300 leading-snug">
                Kulüp bütçesi, District ve Global Grant fonlarıyla yüzlerce bebeğin sağlık lisansı karşılanır.
              </p>
            </div>

            {/* Connecting Golden Pulse Arrow to Center (Desktop) */}
            <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#F7A81B] text-[#00246C] items-center justify-center shadow-lg shadow-[#F7A81B]/40 animate-pulse">
              <Zap size={16} className="fill-current" />
            </div>
          </div>

          {/* 2. BEBEK & KORUYUCU SAĞLIK (CENTERPIECE) */}
          <div
            onClick={() => { setActiveTab(2); setAutoRotate(false); }}
            className={`relative p-5 rounded-2xl transition-all cursor-pointer group ${
              activeTab === 2
                ? "bg-gradient-to-b from-rose-500/25 to-white/10 border-2 border-rose-400 shadow-xl shadow-rose-500/20 scale-[1.04]"
                : "bg-white/[0.08] border border-white/20 hover:bg-white/[0.12] hover:border-rose-400/50"
            }`}
          >
            {/* Mascot / Baby Avatar with Glowing Halo */}
            <div className="relative mx-auto w-24 h-24 mb-4 flex items-center justify-center">
              {/* Pulsing Aura Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/40 via-rose-400/40 to-[#F7A81B]/40 animate-ping opacity-30" />
              <div className="absolute -inset-2 rounded-full border-2 border-dashed border-rose-300/40 animate-[spin_30s_linear_infinite]" />
              
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-white/20 to-white/5 p-2 backdrop-blur-md border border-white/30 shadow-2xl flex items-center justify-center animate-subtle-float">
                <Image
                  src="/images/mascot.png"
                  alt="Dijital Büyükanne Bebeği"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(255,255,255,0.4)]"
                />
              </div>

              {/* Floating Shield Status */}
              <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg border-2 border-[#0A276E]">
                <ShieldCheck size={16} />
              </div>
            </div>

            <div className="text-center space-y-1.5">
              <span className="inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-500/25 text-rose-300 border border-rose-400/40">
                MERKEZ: KORUNAN BEBEK
              </span>
              <h3 className="text-base sm:text-lg font-black text-white group-hover:text-rose-300 transition-colors">
                Bebek & Anne Kalkanı
              </h3>
              <p className="text-xs text-slate-300 leading-snug">
                0–24 ay koruma zırhı: Serebral palsi ve gelişimsel motor riskleri ilk 6 ayda erkenden yakalanır.
              </p>
            </div>
          </div>

          {/* 3. MOBİL UYGULAMA SİSTEMİMİZ (RIGHT NODE) */}
          <div
            onClick={() => { setActiveTab(1); setAutoRotate(false); }}
            className={`relative p-5 rounded-2xl transition-all cursor-pointer group ${
              activeTab === 1
                ? "bg-gradient-to-b from-cyan-500/25 to-white/10 border-2 border-cyan-400 shadow-xl shadow-cyan-500/20 scale-[1.02]"
                : "bg-white/[0.06] border border-white/15 hover:bg-white/[0.10] hover:border-cyan-400/50"
            }`}
          >
            {/* Connecting Golden Pulse Arrow to Center (Desktop) */}
            <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-cyan-400 text-[#00246C] items-center justify-center shadow-lg shadow-cyan-400/40 animate-pulse">
              <Zap size={16} className="fill-current" />
            </div>

            {/* Mobile Scan Phone Icon with Active Radar Pulse */}
            <div className="relative mx-auto w-24 h-24 mb-4 flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-cyan-500/20 blur-md animate-pulse" />
              <div className="relative w-16 h-22 rounded-2xl bg-gradient-to-b from-[#00246C] to-[#0A1A40] border-2 border-cyan-400/60 p-2 shadow-xl flex flex-col justify-between overflow-hidden">
                {/* Simulated Radar Scan Beam */}
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-shimmer-sweep" />
                
                <div className="flex items-center justify-between border-b border-white/15 pb-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-[7px] font-mono text-cyan-200">GMA AI</span>
                </div>

                <div className="flex flex-col items-center justify-center py-1">
                  <Activity size={18} className="text-cyan-300 animate-pulse" />
                  <span className="text-[7px] font-bold text-white mt-0.5">18 Eklem</span>
                </div>

                <div className="bg-cyan-500/30 rounded py-0.5 text-center">
                  <span className="text-[6px] text-cyan-200 font-bold">%100 Aktif</span>
                </div>
              </div>
            </div>

            <div className="text-center space-y-1.5">
              <span className="inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/25 text-cyan-300 border border-cyan-400/40">
                2. TEKNOLOJİ ALTYAPISI
              </span>
              <h3 className="text-base sm:text-lg font-black text-white group-hover:text-cyan-300 transition-colors">
                Mobil Uygulama Sistemi
              </h3>
              <p className="text-xs text-slate-300 leading-snug">
                BabySensAI yapay zekâsı, Prechtl GMA kinematik video analizi ve 7/24 dijital aile asistanı.
              </p>
            </div>
          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
            4. ADİL EŞİTLİK & SAĞLIKLI GELECEK (FOUNDATION BAR)
            ───────────────────────────────────────────────────────────── */}
        <div
          onClick={() => { setActiveTab(3); setAutoRotate(false); }}
          className={`relative rounded-2xl p-5 sm:p-6 transition-all cursor-pointer group mt-2 ${
            activeTab === 3
              ? "bg-gradient-to-r from-emerald-500/25 via-[#F7A81B]/25 to-teal-500/25 border-2 border-emerald-400 shadow-xl shadow-emerald-500/20"
              : "bg-white/[0.08] border border-white/20 hover:bg-white/[0.12] hover:border-emerald-400/50"
          }`}
        >
          {/* Subtle Glow Connector */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-[#00246C] flex items-center justify-center shrink-0 shadow-lg font-black">
                <Scale size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/25 text-emerald-300 border border-emerald-400/40">
                    ORTAK HEDEFİMİZ
                  </span>
                  <span className="text-[10px] text-amber-200 font-mono hidden sm:inline">
                    Sosyal Adalet + Sağlık Hakkı
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-black text-white group-hover:text-emerald-300 transition-colors mt-0.5">
                  Adil Eşitlik ve Sağlıklı Gelecek
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed mt-1">
                  Maddi imkânı olmayan veya uzman hekime uzak kalan her bebek, <strong>Rotary sponsorluğu sayesinde en ileri yapay zekâ teşhisine tamamen ücretsiz</strong> ulaşır. Böylece ömür boyu engellilik riski daha 6 aylıkken önlenir.
                </p>
              </div>
            </div>

            {/* Impact Metric Pillar Tag */}
            <div className="flex items-center gap-3 shrink-0 bg-black/40 px-4 py-2.5 rounded-xl border border-white/15">
              <div className="text-right">
                <p className="text-[10px] text-slate-400 uppercase font-bold">Kalıcı Toplumsal Etki</p>
                <p className="text-sm font-black text-[#F7A81B]">0 Eşitsizlik • %100 Ücretsiz</p>
              </div>
              <div className="w-2 h-8 bg-gradient-to-b from-[#F7A81B] to-emerald-400 rounded-full" />
            </div>

          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            INTERACTIVE EXPLANATION CARD (CHANGES ON CLICK OR AUTO)
            ───────────────────────────────────────────────────────────── */}
        <div className="mt-5 p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5 text-left">
            <span className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-white/10 ${pillars[activeTab].textColor}`}>
              {pillars[activeTab].badge}
            </span>
            <p className="text-slate-200">
              <strong className="text-white">{pillars[activeTab].title}:</strong> {pillars[activeTab].desc}
            </p>
          </div>

          {/* Quick Pillar Navigation Buttons */}
          <div className="flex items-center gap-1.5 shrink-0">
            {pillars.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => { setActiveTab(idx); setAutoRotate(false); }}
                className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center ${
                  activeTab === idx
                    ? "bg-[#F7A81B] text-[#00246C] font-black scale-110 shadow-md"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
                title={p.title}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
