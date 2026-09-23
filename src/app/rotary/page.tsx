"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  Users,
  HeartHandshake,
  TrendingUp,
  FileCheck2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  Smartphone,
  Send,
  Building,
  ArrowRight,
  Globe2,
  Heart,
  Activity,
  FileText,
  Clock,
  ChevronRight,
  Share2,
  Scale,
  Compass,
  Check
} from "lucide-react";
import RotaryHeroEcosystemVisual from "@/components/rotary/RotaryHeroEcosystemVisual";

// Rotary Wheel SVG Component (Official 24-cog, 6-spoke precision styling)
function RotaryWheel({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      {/* Outer Gear Ring */}
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="4" />
      {/* 24 Cogs around circumference */}
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
      {/* Inner Rim */}
      <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="4" />
      {/* 6 Spokes */}
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
      {/* Center Hub */}
      <circle cx="50" cy="50" r="16" fill="currentColor" />
      {/* Center Keyway Hole */}
      <circle cx="50" cy="50" r="8" fill="#0A276E" />
      <rect x="47.5" y="42" width="5" height="6" fill="#0A276E" />
    </svg>
  );
}

export default function RotaryPartnershipPage() {
  const [babyCount, setBabyCount] = useState<number>(500);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    clubName: "",
    district: "2420",
    contactName: "",
    role: "Kulüp Dönem Başkanı",
    email: "",
    phone: "",
    targetBabies: "500",
    grantType: "Kulüp Bütçesi & Sponsorluk",
    notes: ""
  });

  // Calculate projected impacts dynamically
  const gmaScans = babyCount;
  const earlyDetectedRisks = Math.round(babyCount * 0.035); // ~%3.5 nöromotor risk
  const pediatricHours = babyCount * 24; // 24 sessions/year per baby

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A2668] via-[#0E3588] to-[#0A225C] text-slate-100 selection:bg-[#F7A81B] selection:text-[#00246C]">
      
      {/* ─────────────────────────────────────────────────────────────
          1. TOP NOTIFICATION BAR (Rotary Core Strategic Alignment)
          ───────────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-[#00246C] via-[#0E3D8F] to-[#00246C] border-b border-[#F7A81B]/50 py-2.5 px-4 text-center text-xs sm:text-sm text-amber-200 flex items-center justify-center gap-2 shadow-lg">
        <span className="w-2.5 h-2.5 rounded-full bg-[#F7A81B] animate-ping" />
        <span className="font-extrabold tracking-wider text-[#F7A81B]">
          ROTARY 7 ODAK ALANI:
        </span>
        <span className="text-white font-semibold">
          Anne ve Çocuk Sağlığı • Hastalıkların Önlenmesi ve Erken Tedavi Stratejik Ortaklığı
        </span>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. HERO SECTION — PRESTIGE, PARTNERSHIP & HISTORICAL MISSION
          ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0A2870] via-[#0F3A94] to-[#0B2B78]">
        {/* Ambient Rotary Royal Navy & Golden Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#1E56C9]/25 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#F7A81B]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-400/15 rounded-full blur-[110px] pointer-events-none" />

        {/* Delicate Starlight Grid */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#38bdf8 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px"
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-8">
          
          {/* Dual Brand Emblem: Rotary Wheel + Dijital Büyükanne Mascot */}
          <div className="inline-flex items-center justify-center gap-3 sm:gap-6 px-6 py-3 rounded-full bg-white/15 backdrop-blur-md border border-[#F7A81B]/60 shadow-2xl shadow-[#001D5A]/50 animate-fade-in">
            <div className="flex items-center gap-2.5 text-[#F7A81B]">
              <RotaryWheel className="w-8 h-8 sm:w-9 sm:h-9 drop-shadow-[0_0_8px_rgba(247,168,27,0.6)]" />
              <div className="text-left">
                <span className="font-black text-xs sm:text-sm tracking-wider uppercase text-white block leading-none">
                  ROTARY INTERNATIONAL
                </span>
                <span className="text-[9px] text-amber-300 font-mono tracking-widest">KULÜPLERİ & VAKFI</span>
              </div>
            </div>
            <span className="text-[#F7A81B] font-bold text-base">×</span>
            <div className="flex items-center gap-2.5 text-left">
              <div className="w-8 h-8 rounded-full bg-white/20 p-1 overflow-hidden shadow-inner">
                <Image
                  src="/images/mascot.png"
                  alt="Dijital Büyükanne"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-xs sm:text-sm text-cyan-200 block leading-none">
                  DijitalBüyükanne
                </span>
                <span className="text-[9px] text-slate-200 font-mono tracking-widest">BEBEK SAĞLIĞI AI</span>
              </div>
            </div>
          </div>

          {/* H1 Main Headline */}
          <div className="space-y-5 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight drop-shadow-md">
              &ldquo;Kendinden Önce Hizmet&rdquo; İlkesi,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7A81B] via-amber-200 to-[#F7A81B]">
                Bebek Sağlığında Çığır Açan Yapay Zekâyla
              </span>{" "}
              Buluşuyor.
            </h1>
            <p className="text-slate-200 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-normal drop-shadow">
              Kulübünüzün adıyla yüzlerce bebeğe <strong>0–6 Ay Prechtl GMA Kinematik Hareket Analizi</strong> ile serebral palsi erken teşhisi, <strong>pediatrik ön taramalar</strong> ve <strong>7/24 kesintisiz aile rehberliği</strong> armağan edin. Tüm sosyal etkiyi kulübünüze özel panelden canlı izleyin, Rotary mirasını geleceğe taşıyın.
            </p>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#rotary-basvuru"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#F7A81B] via-amber-400 to-[#D49B00] text-[#00246C] font-black text-sm sm:text-base shadow-xl shadow-[#F7A81B]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Kulübünüze Özel Protokol Taslağı İsteyin</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#etki-hesaplayici"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/15 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/30 backdrop-blur-md transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <BarChart3 size={18} className="text-[#F7A81B]" />
              <span>Sosyal Etki Simülatörünü İnceleyin</span>
            </a>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              ANIMATED ENTRANCE VISUAL (BEBEK + ROTARY + MOBİL + EŞİTLİK)
              ───────────────────────────────────────────────────────────── */}
          <RotaryHeroEcosystemVisual />

          {/* 3 Core Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-4 text-left">
            <div className="p-4 rounded-2xl bg-white/[0.09] hover:bg-white/[0.14] border border-white/20 hover:border-[#F7A81B]/40 backdrop-blur-md flex items-center gap-3 transition-all shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-[#F7A81B]/25 text-[#F7A81B] flex items-center justify-center shrink-0">
                <Award size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Yüksek Public Image</p>
                <p className="text-[11px] text-slate-200">Mobil uygulamada ve sertifikalarda kalıcı kulüp ambleminiz</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.09] hover:bg-white/[0.14] border border-white/20 hover:border-cyan-400/40 backdrop-blur-md flex items-center gap-3 transition-all shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/25 text-cyan-200 flex items-center justify-center shrink-0">
                <Activity size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Hayat Kurtaran Erken Teşhis</p>
                <p className="text-[11px] text-slate-200">0–6 ay nöromotor tarama ile ömür boyu engellilik riskini önleyin</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.09] hover:bg-white/[0.14] border border-white/20 hover:border-emerald-400/40 backdrop-blur-md flex items-center gap-3 transition-all shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/25 text-emerald-200 flex items-center justify-center shrink-0">
                <Globe2 size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">District & Global Grant</p>
                <p className="text-[11px] text-slate-200">Rotary Vakfı hibe kriterleriyle %100 uyumlu faaliyet raporu</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. HISTORICAL POLIO PARALLEL & SOCIAL IMPACT CORE (ROTARY'S CALLING)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0B2B75] via-[#12429C] to-[#0B2B75] border-y border-[#F7A81B]/40 relative shadow-2xl">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7A81B]/25 text-[#F7A81B] text-xs font-black uppercase tracking-widest border border-[#F7A81B]/40">
              <Compass size={14} />
              <span>TARİHİ BİR MİRASIN DEVAMI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Tıpkı Çocuk Felcine (Polio) Karşı Kazanılan Zafer Gibi: <br className="hidden sm:inline" />
              <span className="text-[#F7A81B]">Şimdi Bebeklerde Nöromotor Erken Teşhis Seferberliği</span>
            </h2>
            <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
              Rotary International, yeryüzünden çocuk felcini silmek için başlattığı <em>&ldquo;End Polio Now&rdquo;</em> hareketiyle tıp tarihine altın harflerle geçti. Bugünün dünyasında ise bebeklik çağının en büyük motor kaybı nedeni <strong>Serebral Palsi ve gelişimsel motor risklerdir.</strong>
            </p>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              0–6 aylık kritik erken müdahale penceresi kaçırıldığında bir bebeğin kaybı ömür boyu sürer. Rotary kulübünüz bu teknolojiyle bir ailenin evine girdiğinde, <strong>yalnızca bir hizmet sunmaz; bir insanın yürüyebilmesini, bağımsız yaşayabilmesini sağlar.</strong>
            </p>
          </div>

          <div className="md:col-span-4 flex justify-center">
            <div className="p-6 rounded-3xl bg-white/[0.12] border border-white/25 backdrop-blur-md text-center space-y-3 shadow-2xl">
              <div className="text-4xl sm:text-5xl font-black text-[#F7A81B] font-mono drop-shadow">
                0–6 Ay
              </div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                Geri Dönülemez Erken Müdahale Penceresi
              </p>
              <p className="text-[11px] text-slate-200 leading-snug">
                Beyin plastisitesinin en yüksek olduğu ilk 6 ayda yakalanan nöromotor riskler, erken terapiyle nötralize edilebilir.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. ROTARY 4'LÜ ÖZDENETİM (THE 4-WAY TEST) UYUMU
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A2668] via-[#0D348A] to-[#0A2668]">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-[#F7A81B] font-mono text-xs font-bold tracking-widest uppercase">
              ETİK VE KUSURSUZ DEĞERLER
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Rotary&apos;nin 4&apos;lü Özdenetim İlkelerine %100 Uyum
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
              Düşündüğümüz, söylediğimiz ve yaptığımız her şeyde Rotary felsefesine tam sadakat:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-[#F7A81B]/50 transition-all space-y-2 shadow-lg backdrop-blur-md">
              <span className="text-[#F7A81B] font-mono font-bold text-xs">1. SORU</span>
              <p className="text-xs font-bold text-white">Gerçeğe uygun mu?</p>
              <p className="text-[11px] text-slate-200 leading-relaxed">
                Avrupa Pediatri ve Prechtl GMA standartlarında, bilimsel olarak kanıtlanmış kinematik algoritma.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-[#F7A81B]/50 transition-all space-y-2 shadow-lg backdrop-blur-md">
              <span className="text-[#F7A81B] font-mono font-bold text-xs">2. SORU</span>
              <p className="text-xs font-bold text-white">İlgililerin tümü için adil mi?</p>
              <p className="text-[11px] text-slate-200 leading-relaxed">
                Sosyoekonomik durumuna bakılmaksızın her bebeğe eşit ve %100 ücretsiz erişim imkânı.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-[#F7A81B]/50 transition-all space-y-2 shadow-lg backdrop-blur-md">
              <span className="text-[#F7A81B] font-mono font-bold text-xs">3. SORU</span>
              <p className="text-xs font-bold text-white">Dostluk ve iyi niyeti geliştirir mi?</p>
              <p className="text-[11px] text-slate-200 leading-relaxed">
                Rotary kulübü ile toplum arasında ömür boyu sürecek derin bir şefkat, minnet ve güven bağı kurar.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 hover:border-[#F7A81B]/50 transition-all space-y-2 shadow-lg backdrop-blur-md">
              <span className="text-[#F7A81B] font-mono font-bold text-xs">4. SORU</span>
              <p className="text-xs font-bold text-white">İlgililerin tümü için yararlı mı?</p>
              <p className="text-[11px] text-slate-200 leading-relaxed">
                Bebek için sağlıklı bir gelecek, aile için huzur, sağlık sistemi için erken tanı verimliliği.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. ROTARY GÖRÜNÜRLÜK & PUBLIC IMAGE VİTRİNİ (Seçkin & Prestijli)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B2A72] via-[#103E9E] to-[#0B2A72] border-y border-white/15 relative">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#F7A81B] font-mono text-xs font-bold tracking-widest uppercase">
              TOPLUMSAL İTİBAR VE PUBLIC IMAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Kulübünüzün İmzası Her Ailenin Hafızasında
            </h2>
            <p className="text-slate-200 text-sm sm:text-base">
              Rotaryenlerin toplumdaki saygınlığını taçlandıran ve kulüp üyelerinizin gururla sahipleneceği 6 boyutlu kurumsal itibar paketi:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* PR Card 1: Uygulama İçi Logo ve Teşekkür */}
            <div className="p-6 rounded-3xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-[#F7A81B]/50 transition-all space-y-4 group shadow-xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#00246C] to-sky-500 flex items-center justify-center text-[#F7A81B] shadow-lg">
                <Smartphone size={24} />
              </div>
              <h3 className="text-lg font-black text-white group-hover:text-[#F7A81B] transition-colors">
                1. Mobil Uygulama İçi Daimi Varlık
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Aileler uygulamayı her açtığında açılış ekranında kulüp logonuz ve şu teşekkür mesajı yer alır:
              </p>
              <div className="p-3.5 rounded-xl bg-[#001D56]/80 border border-[#F7A81B]/40 text-xs text-amber-200 font-medium">
                &ldquo;Bu dijital sağlık lisansı, <strong className="text-white">[X] Rotary Kulübü</strong> katkılarıyla ailenize %100 ücretsiz olarak armağan edilmiştir.&rdquo;
              </div>
            </div>

            {/* PR Card 2: Fiziki 'Rotary Hoş Geldin Bebek' Kartı */}
            <div className="p-6 rounded-3xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-[#F7A81B]/50 transition-all space-y-4 group shadow-xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-[#D49B00] flex items-center justify-center text-white shadow-lg">
                <FileCheck2 size={24} />
              </div>
              <h3 className="text-lg font-black text-white group-hover:text-[#F7A81B] transition-colors">
                2. Fiziki Aile Lisans Kartı & Sertifika
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Kulüp üyelerinizin veya iş birliği yapılan hastanelerin ailelere elden takdim edebileceği Rotary amblemli prestijli kart:
              </p>
              <div className="p-3.5 rounded-xl bg-[#001D56]/80 border border-white/20 text-xs text-slate-200 space-y-1">
                <p className="font-bold text-[#F7A81B]">Rotary Geleceğe Umut Sertifikası</p>
                <p className="text-[11px] text-slate-300">QR Kod ile anında 0–24 ay premium erişim aktivasyonu.</p>
              </div>
            </div>

            {/* PR Card 3: Basın & Medya Lansmanı */}
            <div className="p-6 rounded-3xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-[#F7A81B]/50 transition-all space-y-4 group shadow-xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-white shadow-lg">
                <Share2 size={24} />
              </div>
              <h3 className="text-lg font-black text-white group-hover:text-[#F7A81B] transition-colors">
                3. Ulusal & Yerel Basın Lansmanı
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Proje başlangıcında Rotary Kulüp Başkanı ve Bölge Guvernörü adına basın bültenleri hazırlanır:
              </p>
              <div className="p-3.5 rounded-xl bg-[#001D56]/80 border border-white/20 text-xs text-slate-200 space-y-1">
                <p className="font-bold text-amber-300">&ldquo;Rotary&apos;den Bebek Sağlığına Yapay Zekâ Desteği&rdquo;</p>
                <p className="text-[11px] text-slate-300">Gazete, TV ve dijital mecralarda geniş itibar yansıması.</p>
              </div>
            </div>

            {/* PR Card 4: Guvernörlük & Bölge Konferansı Sunumu */}
            <div className="p-6 rounded-3xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-[#F7A81B]/50 transition-all space-y-4 group shadow-xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-500 to-[#00A896] flex items-center justify-center text-white shadow-lg">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-lg font-black text-white group-hover:text-[#F7A81B] transition-colors">
                4. Bölge Konferansı ve Asamblesi Raporu
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Kulübünüzün dönem ödüllerine aday olmasını sağlayacak profesyonel video ve infografik proje karnesi:
              </p>
              <div className="p-3.5 rounded-xl bg-[#001D56]/80 border border-white/20 text-xs text-slate-200">
                Guvernör ve Bölge Komiteleri için tek tıkla sunulabilir başarı dosyası.
              </div>
            </div>

            {/* PR Card 5: 'The Rotarian' Küresel Makalesi */}
            <div className="p-6 rounded-3xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-[#F7A81B]/50 transition-all space-y-4 group shadow-xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                <Globe2 size={24} />
              </div>
              <h3 className="text-lg font-black text-white group-hover:text-[#F7A81B] transition-colors">
                5. Uluslararası Rotary Başarı Dosyası
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                1.4 milyon Rotaryana ilham vermek üzere Rotary International bülten ve yayınlarına uygun format:
              </p>
              <div className="p-3.5 rounded-xl bg-[#001D56]/80 border border-white/20 text-xs text-slate-200">
                Global Grant başvurularında uluslararası kardeş kulüplerin fon desteğini kolaylaştıran yapı.
              </div>
            </div>

            {/* PR Card 6: Canlı Takip Paneli */}
            <div className="p-6 rounded-3xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-[#F7A81B]/50 transition-all space-y-4 group shadow-xl backdrop-blur-md">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-black text-white group-hover:text-[#F7A81B] transition-colors">
                6. Kulübe Özel Şeffaf Yönetim Paneli
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Kulüp yönetimi projenin her aşamasını 7/24 şeffaf bir ekrandan anlık takip eder:
              </p>
              <div className="p-3.5 rounded-xl bg-[#001D56]/80 border border-white/20 text-xs text-slate-200">
                Kaç bebek kaydoldu, kaç video analiz edildi, kaç erken müdahale sağlandı; hepsi canlı!
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CO-BRANDED MOBİL UYGULAMA GÖRÜNÜMÜ (MOCKUP)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A2668] via-[#0E368C] to-[#0A2668]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7A81B]/25 border border-[#F7A81B]/50 text-[#F7A81B] text-xs font-bold uppercase tracking-wider">
              <RotaryWheel className="w-4 h-4" />
              <span>ORTAK MARKALAMA (CO-BRANDING)</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Her Ailenin Telefonunda <br className="hidden sm:inline" />
              <span className="text-[#F7A81B]">Rotary Kulübünüzün İmzası</span>
            </h2>
            
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Aileler uygulamayı kullandıkları 0–24 ay boyunca, her video hareket analizinde ve gece danışmanlığında arkalarında duran gücün sizin kulübünüz olduğunu bilir.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.08] border border-white/20 shadow-md">
                <CheckCircle2 size={18} className="text-[#F7A81B] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-100">
                  <strong>Kulüp Logolu Başlık:</strong> Uygulama ana ekranında logonuz ve kulüp adınız kesintisiz yer alır.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.08] border border-white/20 shadow-md">
                <CheckCircle2 size={18} className="text-[#F7A81B] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-100">
                  <strong>Başkanın Hoş Geldiniz Mektubu:</strong> Aile ilk kayıt olduğunda kulüp başkanınızın fotoğrafı ve mesajı ile karşılanır.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.08] border border-white/20 shadow-md">
                <CheckCircle2 size={18} className="text-[#F7A81B] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-100">
                  <strong>Rotary Proje Bildirimleri:</strong> Kulübünüzün diğer sosyal sorumluluk etkinlikleri ailelere push bildirimle duyurulabilir.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Phone Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-sm rounded-[42px] bg-gradient-to-b from-[#18347D] to-[#0A1E54] p-3 shadow-2xl border-4 border-[#F7A81B]/50 shadow-[#001D56]/90">
              {/* Screen Top Bar */}
              <div className="bg-gradient-to-b from-[#00246C] to-[#08205C] rounded-[34px] p-4 text-white space-y-3 border border-white/20 shadow-inner">
                
                {/* Header with Rotary Wheel */}
                <div className="flex items-center justify-between pb-2 border-b border-white/15">
                  <div className="flex items-center gap-2">
                    <RotaryWheel className="w-6 h-6 text-[#F7A81B]" />
                    <div>
                      <p className="text-[10px] font-black uppercase text-white leading-tight">
                        ROTARY SAĞLIKLI BEBEK PROJESİ
                      </p>
                      <p className="text-[8px] text-amber-200 font-mono">
                        Kadıköy / Çankaya Rotary Kulübü
                      </p>
                    </div>
                  </div>
                  <span className="text-[8px] bg-[#F7A81B] text-[#00246C] font-extrabold px-2 py-0.5 rounded-full shadow">
                    %100 Ücretsiz
                  </span>
                </div>

                {/* Greeting Card for Family */}
                <div className="p-3 rounded-2xl bg-gradient-to-r from-[#0C3C7C] to-[#00246C] border border-[#F7A81B]/40 space-y-1 shadow">
                  <p className="text-[11px] font-bold text-white flex items-center gap-1.5">
                    <span>👶 Hoş Geldin Canım Bebek</span>
                  </p>
                  <p className="text-[9px] text-slate-100 leading-tight">
                    &ldquo;Rotary Kulübümüzün sevgisiyle, ilk gülümsemenden ilk adımına kadar yanındayız.&rdquo;
                  </p>
                </div>

                {/* Prechtl GMA Module Card */}
                <div className="p-3 rounded-2xl bg-[#05163E]/90 border border-cyan-400/50 space-y-2 shadow-md">
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-cyan-300 font-bold flex items-center gap-1">
                      <Activity size={12} />
                      Prechtl GMA Nöromotor Analiz
                    </span>
                    <span className="bg-cyan-500/30 text-cyan-200 px-1.5 py-0.5 rounded text-[8px] font-mono">
                      Aktif Tarama
                    </span>
                  </div>
                  <div className="h-16 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-xs">
                      🦾
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white">18 Eklem Kinematik Taraması</p>
                      <p className="text-[8px] text-slate-300">Erken teşhis penceresi açık (0–6 Ay)</p>
                    </div>
                  </div>
                </div>

                {/* 24/7 Digital Assistant Card */}
                <div className="p-3 rounded-2xl bg-[#05163E]/90 border border-teal-400/40 space-y-1 shadow-md">
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-teal-300 font-bold">7/24 Dijital Büyükanne Chatbot</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <p className="text-[9px] text-slate-200">
                    &ldquo;Gece 03:00&apos;te bile Rotary rehberliğiyle uzman desteği cebinizde.&rdquo;
                  </p>
                </div>

                {/* Footer Sponsor Badge */}
                <div className="text-center pt-1 border-t border-white/15">
                  <p className="text-[8px] text-amber-200 font-mono">
                    Rotary Vakfı &bull; Anne ve Çocuk Sağlığı Hibe Programı
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. İNTERAKTİF ROTARY SOSYAL ETKİ VE BÜTÇE SİMÜLATÖRÜ
          ───────────────────────────────────────────────────────────── */}
      <section id="etki-hesaplayici" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0B2D78] via-[#1040A0] to-[#0B2D78] border-t border-white/20">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-[#F7A81B] font-mono text-xs font-bold tracking-widest uppercase">
              ÖLÇÜLEBİLİR VE DENETLENEBİLİR ÇIKTI
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Rotary Sosyal Etki Simülatörü
            </h2>
            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto">
              Kulübünüzün veya bölgenizin hedeflediği bebek sayısını seçin; projenizin yaratacağı somut hayat kurtaran sağlık etkisini anında görün.
            </p>
          </div>

          {/* Baby Count Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {[100, 250, 500, 1000, 2500].map((count) => (
              <button
                key={count}
                onClick={() => setBabyCount(count)}
                className={`px-5 py-3 rounded-2xl font-black text-sm sm:text-base transition-all cursor-pointer ${
                  babyCount === count
                    ? "bg-[#F7A81B] text-[#00246C] shadow-lg shadow-[#F7A81B]/40 scale-105"
                    : "bg-white/15 text-white hover:bg-white/25 border border-white/25"
                }`}
              >
                {count >= 1000 ? `${count / 1000}K Bebek` : `${count} Bebek`}
              </button>
            ))}
          </div>

          {/* Dynamic Impact Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-6 rounded-3xl bg-white/[0.09] border border-white/20 text-center space-y-2 backdrop-blur-md shadow-xl">
              <div className="text-3xl sm:text-4xl font-black text-white font-mono drop-shadow">
                {gmaScans.toLocaleString("tr-TR")}
              </div>
              <p className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                Prechtl GMA Taraması
              </p>
              <p className="text-[11px] text-slate-300">
                0–6 ay döneminde video tabanlı nöromotor izlem sayısı
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.09] border border-[#F7A81B]/60 text-center space-y-2 backdrop-blur-md relative overflow-hidden shadow-xl">
              <div className="text-3xl sm:text-4xl font-black text-[#F7A81B] font-mono drop-shadow">
                ~{earlyDetectedRisks} Bebek
              </div>
              <p className="text-xs font-bold text-amber-200 uppercase tracking-wider">
                Erken Teşhis Potansiyeli
              </p>
              <p className="text-[11px] text-slate-300">
                Serebral palsi veya gelişim riski erken evrede yakalanan vaka
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.09] border border-white/20 text-center space-y-2 backdrop-blur-md shadow-xl">
              <div className="text-3xl sm:text-4xl font-black text-teal-300 font-mono drop-shadow">
                {pediatricHours.toLocaleString("tr-TR")}
              </div>
              <p className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                7/24 Rehberlik Seansı
              </p>
              <p className="text-[11px] text-slate-300">
                Uykusuz gecelerde anne ve babaya verilen pediatrik cevap
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/[0.09] border border-white/20 text-center space-y-2 backdrop-blur-md shadow-xl">
              <div className="text-3xl sm:text-4xl font-black text-emerald-300 font-mono drop-shadow">
                %100
              </div>
              <p className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                Şeffaf Raporlanabilirlik
              </p>
              <p className="text-[11px] text-slate-300">
                Rotary Vakfı ve Guvernörlük için hazır denetim çıktısı
              </p>
            </div>

          </div>

          {/* Rotary Impact Statement */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#00246C] via-[#0E3D8F] to-[#00246C] border border-[#F7A81B]/50 text-center space-y-2 shadow-2xl">
            <p className="text-sm sm:text-base font-bold text-white">
              💡 {babyCount} Ailelik bir Rotary projesi ile yalnızca bir teknoloji lisansı vermezsiniz;
            </p>
            <p className="text-xs sm:text-sm text-amber-200">
              Ömür boyu yatağa veya tekerlekli sandalyeye bağımlı kalma riski taşıyan bebeklerin ilk 6 ayda hekime yönlendirilmesini sağlayarak <strong>bir insan hayatının rotasını değiştirirsiniz.</strong>
            </p>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. ROTARY FONLAMA VE HİBE MODELLERİ (3 PAKET)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A2668] via-[#0E378E] to-[#0A2668] border-t border-white/20">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-[#F7A81B] font-mono text-xs font-bold tracking-widest uppercase">
              ESNEK VE GÜÇLÜ FONLAMA MODELLERİ
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Kulüp Düzeyinden Küresel Bağışa (Global Grant)
            </h2>
            <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto">
              Bütçenize ve Rotary dönemi hedeflerinize uygun projelendirme alternatifleri:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Model 1: Kulüp Pilot Projesi */}
            <div className="p-8 rounded-3xl bg-white/[0.08] border border-white/20 hover:border-white/40 transition-all space-y-6 flex flex-col justify-between shadow-xl backdrop-blur-md">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-200 bg-white/15 px-3 py-1 rounded-full">
                  SEVİYE 1 &bull; KULÜP BÜTÇESİ
                </span>
                <h3 className="text-xl font-black text-white">
                  Kulüp Pilot Projesi
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Tek bir Rotary kulübünün kendi dönemsel bütçesiyle bölgesinde başlatacağı hızlı ve yüksek etkili toplum hizmeti projesi.
                </p>
                <div className="text-2xl font-black text-[#F7A81B] drop-shadow">
                  100 – 250 Bebek
                </div>
                <ul className="space-y-2.5 text-xs text-slate-100">
                  <li className="flex items-center gap-2">✓ Kulüp logolu mobil uygulama arayüzü</li>
                  <li className="flex items-center gap-2">✓ 0-6 ay GMA hareket analizi taraması</li>
                  <li className="flex items-center gap-2">✓ Pediatrik ön değerlendirme & gelişim takibi</li>
                  <li className="flex items-center gap-2">✓ 7/24 dijital aile rehberliği</li>
                  <li className="flex items-center gap-2">✓ Kulüp yönetim paneli erişimi</li>
                  <li className="flex items-center gap-2">✓ Dönem sonu etki sertifikası</li>
                </ul>
              </div>

              <a
                href="#rotary-basvuru"
                onClick={() => setFormData({ ...formData, grantType: "Kulüp Bütçesi", targetBabies: "250" })}
                className="w-full py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs text-center transition-all block border border-white/20 cursor-pointer"
              >
                Bu Paketi Seçin
              </a>
            </div>

            {/* Model 2: Bölge Ortak Projesi (District Grant) */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0F3A94] to-[#092468] border-2 border-[#F7A81B] shadow-2xl shadow-[#F7A81B]/25 space-y-6 flex flex-col justify-between relative backdrop-blur-md">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F7A81B] text-[#00246C] text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
                EN ÇOK TERCİH EDİLEN
              </span>

              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-200 bg-[#F7A81B]/25 px-3 py-1 rounded-full border border-[#F7A81B]/40">
                  SEVİYE 2 &bull; DISTRICT GRANT
                </span>
                <h3 className="text-xl font-black text-white">
                  Bölge Ortak Projesi
                </h3>
                <p className="text-xs text-slate-100 leading-relaxed">
                  2 veya daha fazla kardeş Rotary kulübünün Bölge Guvernörlüğü eşleştirmeli fonuyla yürüteceği geniş kapsamlı proje.
                </p>
                <div className="text-2xl font-black text-[#F7A81B] drop-shadow">
                  500 – 1.500 Bebek
                </div>
                <ul className="space-y-2.5 text-xs text-slate-100">
                  <li className="flex items-center gap-2">✓ Çoklu kulüp / Bölge logolu uygulama</li>
                  <li className="flex items-center gap-2">✓ Basın toplantısı ve medya lansmanı paketi</li>
                  <li className="flex items-center gap-2">✓ Fiziki &ldquo;Rotary Bebek Lisans Kartları&rdquo;</li>
                  <li className="flex items-center gap-2">✓ Yapay zekâ destekli pediatrik ön taramalar</li>
                  <li className="flex items-center gap-2">✓ Guvernörlük resmi faaliyet raporu</li>
                  <li className="flex items-center gap-2">✓ Rotary Bölge Asamblesi sunum paketi</li>
                </ul>
              </div>

              <a
                href="#rotary-basvuru"
                onClick={() => setFormData({ ...formData, grantType: "District Grant (Bölge Fonu)", targetBabies: "500" })}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F7A81B] to-amber-400 text-[#00246C] font-black text-xs text-center shadow-xl transition-all block hover:scale-105 cursor-pointer"
              >
                Bölge Projesi Başlatın
              </a>
            </div>

            {/* Model 3: Küresel Bağış (Global Grant) */}
            <div className="p-8 rounded-3xl bg-white/[0.08] border border-white/20 hover:border-white/40 transition-all space-y-6 flex flex-col justify-between shadow-xl backdrop-blur-md">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-200 bg-purple-500/25 px-3 py-1 rounded-full border border-purple-400/40">
                  SEVİYE 3 &bull; GLOBAL GRANT
                </span>
                <h3 className="text-xl font-black text-white">
                  Küresel Bağış Projesi
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Yurt dışı kardeş Rotary kulübü ve Rotary Vakfı (The Rotary Foundation) eşleşmeli küresel hibe programı.
                </p>
                <div className="text-2xl font-black text-[#F7A81B] drop-shadow">
                  2.500+ Bebek
                </div>
                <ul className="space-y-2.5 text-xs text-slate-100">
                  <li className="flex items-center gap-2">✓ İl / Bölge çapında kurumsal dağıtım</li>
                  <li className="flex items-center gap-2">✓ Uluslararası Rotary hibe protokolü tam uyumu</li>
                  <li className="flex items-center gap-2">✓ &ldquo;The Rotarian&rdquo; uluslararası PR</li>
                  <li className="flex items-center gap-2">✓ Üniversite ve hekim bilim kurulu doğrulaması</li>
                  <li className="flex items-center gap-2">✓ Tam kapsamlı akademik sosyal etki raporu</li>
                </ul>
              </div>

              <a
                href="#rotary-basvuru"
                onClick={() => setFormData({ ...formData, grantType: "Global Grant (Küresel Bağış)", targetBabies: "2500" })}
                className="w-full py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs text-center transition-all block border border-white/20 cursor-pointer"
              >
                Global Grant Bilgisi Alın
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. PROTOKOL & İŞ BİRLİĞİ FORMU
          ───────────────────────────────────────────────────────────── */}
      <section id="rotary-basvuru" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A276E] via-[#0D3385] to-[#08205C] border-t border-white/20">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#F7A81B]/25 text-[#F7A81B] mx-auto flex items-center justify-center shadow-xl border border-[#F7A81B]/40">
              <RotaryWheel className="w-8 h-8 drop-shadow" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Kulübünüze Özel Protokol ve Sunum Talep Edin
            </h2>
            <p className="text-slate-200 text-sm sm:text-base">
              Yönetim Kurulunuz veya Vakıf Komiteniz için hazır sunum dosyasını, bütçe tablosunu ve iş birliği protokol taslağını 24 saat içinde iletelim.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.08] border border-white/25 backdrop-blur-xl shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/25 text-emerald-300 mx-auto flex items-center justify-center text-3xl border border-emerald-400/40">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-white">
                  Talebiniz Alındı, Sayın Rotaryen!
                </h3>
                <p className="text-slate-200 text-sm max-w-md mx-auto leading-relaxed">
                  <strong>{formData.clubName || "Rotary Kulübünüz"}</strong> adına talep ettiğiniz ortaklık protokolü ve sunum dosyası hazırlanmıştır. Kurumsal temsilcimiz en kısa sürede sizinle iletişime geçecektir.
                </p>
                <div className="pt-4">
                  <a
                    href="mailto:kurumsal@dijitalbuyukanne.com"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#F7A81B] underline hover:text-amber-200"
                  >
                    Acil sorularınız için: kurumsal@dijitalbuyukanne.com
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase">
                      Rotary Kulüp Adı *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Örn: Kadıköy Rotary Kulübü"
                      value={formData.clubName}
                      onChange={(e) => setFormData({ ...formData, clubName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#071D52]/90 border border-white/25 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#F7A81B] focus:bg-[#092569] shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase">
                      Rotary Bölgesi
                    </label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#071D52]/90 border border-white/25 text-white text-sm focus:outline-none focus:border-[#F7A81B] focus:bg-[#092569] shadow-inner"
                    >
                      <option value="2420">2420. Bölge (İstanbul & Trakya)</option>
                      <option value="2430">2430. Bölge (Ankara & Anadolu)</option>
                      <option value="2440">2440. Bölge (İzmir & Ege)</option>
                      <option value="Diğer / Uluslararası">Diğer / Uluslararası Bölge</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase">
                      Adınız & Soyadınız *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Örn: Rtn. Ahmet Yılmaz"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#071D52]/90 border border-white/25 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#F7A81B] focus:bg-[#092569] shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase">
                      Kulüpteki Göreviniz
                    </label>
                    <input
                      type="text"
                      placeholder="Örn: Dönem Başkanı / Komite Bşk."
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#071D52]/90 border border-white/25 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#F7A81B] focus:bg-[#092569] shadow-inner"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase">
                      E-Posta Adresi *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ahmet@ornek.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#071D52]/90 border border-white/25 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#F7A81B] focus:bg-[#092569] shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase">
                      Telefon Numarası *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0532 000 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#071D52]/90 border border-white/25 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#F7A81B] focus:bg-[#092569] shadow-inner"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase">
                      Hedef Bebek / Aile Sayısı
                    </label>
                    <select
                      value={formData.targetBabies}
                      onChange={(e) => setFormData({ ...formData, targetBabies: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#071D52]/90 border border-white/25 text-white text-sm focus:outline-none focus:border-[#F7A81B] focus:bg-[#092569] shadow-inner"
                    >
                      <option value="100">100 Bebek (Pilot)</option>
                      <option value="250">250 Bebek</option>
                      <option value="500">500 Bebek</option>
                      <option value="1000">1.000 Bebek</option>
                      <option value="2500+">2.500+ Bebek (Global Grant)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase">
                      Düşünülen Fon / Hibe Türü
                    </label>
                    <select
                      value={formData.grantType}
                      onChange={(e) => setFormData({ ...formData, grantType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#071D52]/90 border border-white/25 text-white text-sm focus:outline-none focus:border-[#F7A81B] focus:bg-[#092569] shadow-inner"
                    >
                      <option value="Kulüp Bütçesi & Sponsorluk">Kulüp Öz Bütçesi & Sponsorluk</option>
                      <option value="District Grant (Bölge Fonu)">District Grant (Bölge Fonu)</option>
                      <option value="Global Grant (Küresel Bağış)">Global Grant (Küresel Bağış)</option>
                      <option value="Kurumsal Sponsorluk / Vakıf Fonu">Kurumsal Sponsorluk / Şirket Fonu</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1.5 uppercase">
                    Ek Notlar veya Sorularınız
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Görüşme tarihi, kulüp toplantısı sunum tarihi veya özel isteklerinizi belirtebilirsiniz..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#071D52]/90 border border-white/25 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#F7A81B] focus:bg-[#092569] shadow-inner"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#F7A81B] via-amber-400 to-[#D49B00] text-[#00246C] font-black text-sm sm:text-base shadow-xl shadow-[#F7A81B]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  <span>Kulübümüze Özel Protokol Taslağını Gönderin</span>
                </button>

                <p className="text-[11px] text-center text-slate-300">
                  🔒 Bilgileriniz yalnızca Rotary proje hazırlığı kapsamında gizli tutulur.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. ROTARY FOOTER
          ───────────────────────────────────────────────────────────── */}
      <footer className="py-8 px-4 border-t border-white/20 bg-[#061A4B] text-center text-xs text-slate-300 space-y-2 shadow-inner">
        <div className="flex items-center justify-center gap-2 text-white">
          <RotaryWheel className="w-5 h-5 text-[#F7A81B]" />
          <span className="font-bold">DijitalBüyükanne &bull; Rotary Vakfı ve Kulüpleri Sosyal Sorumluluk Ekosistemi</span>
        </div>
        <p>
          &ldquo;Kendinden Önce Hizmet&rdquo; ilkesiyle her bebeğin hayatına eşit, bilimsel ve şefkatli bir dokunuş.
        </p>
        <div className="pt-2 text-[11px] text-slate-400">
          <Link href="/" className="hover:text-white transition-colors underline mr-4">
            Ana Sayfaya Dön
          </Link>
          <a href="mailto:kurumsal@dijitalbuyukanne.com" className="hover:text-[#F7A81B] transition-colors">
            kurumsal@dijitalbuyukanne.com
          </a>
        </div>
      </footer>

    </div>
  );
}
