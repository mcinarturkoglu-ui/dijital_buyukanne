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
  Share2
} from "lucide-react";

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
      <circle cx="50" cy="50" r="8" fill="#07153B" />
      <rect x="47.5" y="42" width="5" height="6" fill="#07153B" />
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
    role: "Kulüp Başkanı",
    email: "",
    phone: "",
    targetBabies: "500",
    grantType: "Kulüp Bütçesi",
    notes: ""
  });

  // Calculate projected impacts dynamically
  const gmaScans = babyCount;
  const earlyDetectedRisks = Math.round(babyCount * 0.035); // 3.5% neuro risk
  const pediatricHours = babyCount * 24; // 24 sessions/year per baby
  const costPerBaby = babyCount >= 1000 ? 12 : babyCount >= 500 ? 15 : 19; // Symbolic cost in USD / points

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#071330] text-slate-100 selection:bg-[#F7A81B] selection:text-[#00246C]">
      
      {/* ─────────────────────────────────────────────────────────────
          1. TOP NOTIFICATION BAR (Rotary Focus Area)
          ───────────────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-[#00246C] via-[#0C3C7C] to-[#00246C] border-b border-[#F7A81B]/30 py-2.5 px-4 text-center text-xs sm:text-sm text-amber-200 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#F7A81B] animate-ping" />
        <span className="font-bold tracking-wide">
          ROTARY 7 ODAK ALANI:
        </span>
        <span className="text-white font-medium">
          Anne ve Çocuk Sağlığı • Hastalıkların Önlenmesi ve Tedavisi Tematik Projesi
        </span>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. HERO SECTION — PRESTIGE, PARTNERSHIP & MISSION
          ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Rotary Navy & Gold Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#00246C]/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#F7A81B]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Cyber Matrix / Grid Background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#38bdf8 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10 text-center space-y-8">
          
          {/* Dual Brand Emblem: Rotary Wheel + Dijital Büyükanne Mascot */}
          <div className="inline-flex items-center justify-center gap-3 sm:gap-5 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-[#F7A81B]/40 shadow-xl shadow-black/40 animate-fade-in">
            <div className="flex items-center gap-2 text-[#F7A81B]">
              <RotaryWheel className="w-7 h-7 sm:w-8 sm:h-8" />
              <span className="font-black text-xs sm:text-sm tracking-wider uppercase text-white">
                ROTARY INTERNATIONAL
              </span>
            </div>
            <span className="text-[#F7A81B] font-bold text-sm">×</span>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-white/10 p-0.5 overflow-hidden">
                <Image
                  src="/images/mascot.png"
                  alt="Dijital Büyükanne"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold text-xs sm:text-sm text-cyan-300">
                DijitalBüyükanne
              </span>
            </div>
          </div>

          {/* H1 Main Headline */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
              Rotary&apos;nin &ldquo;Kendinden Önce Hizmet&rdquo; İlkesi,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7A81B] via-amber-200 to-[#F7A81B]">
                Bebek Sağlığında Yapay Zekâ Devrimiyle
              </span>{" "}
              Buluşuyor.
            </h1>
            <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-normal">
              Kulübünüzün adıyla Türkiye&apos;deki yüzlerce bebeğe <strong>0–6 Ay Prechtl GMA Hareket Analizi</strong> ile serebral palsi erken teşhisi, <strong>7/24 pediatrik rehberlik</strong> ve <strong>41 cilt taraması</strong> armağan edin. Tüm etkiyi kulüp panelinizden canlı izleyin, Rotary prestijini zirveye taşıyın.
            </p>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#rotary-basvuru"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#F7A81B] via-amber-400 to-[#D49B00] text-[#00246C] font-black text-sm sm:text-base shadow-xl shadow-[#F7A81B]/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Kulübünüz İçin Protokol Taslağı İsteyin</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#etki-hesaplayici"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <BarChart3 size={18} className="text-[#F7A81B]" />
              <span>Sosyal Etki Simülatörünü İnceleyin</span>
            </a>
          </div>

          {/* 3 Core Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-6 text-left">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F7A81B]/20 text-[#F7A81B] flex items-center justify-center shrink-0">
                <Award size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Rotary Prestiji</p>
                <p className="text-[11px] text-slate-300">Uygulama içinde kulüp logonuz ve teşekkür rozetiniz</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
                <Activity size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">0–6 Ay Erken Teşhis</p>
                <p className="text-[11px] text-slate-300">Serebral Palsi riskini geri dönülemez evreden önce yakalayın</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                <Globe2 size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Global Grant Uyumu</p>
                <p className="text-[11px] text-slate-300">Rotary Vakfı hibe kriterleriyle %100 uyumlu faaliyet raporu</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. ROTARY GÖRÜNÜRLÜK & REKLAM VİTRİNİ (En Kritik İkna Bölümü)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#091838] to-[#071330] border-y border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#F7A81B] font-mono text-xs font-bold tracking-widest uppercase">
              KURUMSAL İTİBAR VE MAKSİMUM GÖRÜNÜRLÜK
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Kulübünüzün ve Rotary&apos;nin Adı Nerede, Nasıl Görünecek?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Rotary&apos;nin toplumdaki saygınlığını artırmak ve kulüp üyelerinizin gurur duyacağı bir miras bırakmak için tasarlanan 5 boyutlu PR ve görünürlük paketi:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* PR Card 1: Uygulama İçi Logo ve Teşekkür */}
            <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-[#F7A81B]/40 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#00246C] to-sky-600 flex items-center justify-center text-[#F7A81B] shadow-lg">
                <Smartphone size={24} />
              </div>
              <h3 className="text-lg font-black text-white group-hover:text-[#F7A81B] transition-colors">
                1. Mobil Uygulama İçi Markalama
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Aileler uygulamayı her açtığında açılış ekranında kulüp logonuz ve şu mesaj yer alır:
              </p>
              <div className="p-3 rounded-xl bg-black/40 border border-[#F7A81B]/30 text-xs text-amber-200 font-medium">
                &ldquo;Bu dijital sağlık lisansı, <strong className="text-white">[X] Rotary Kulübü</strong> katkılarıyla ailenize %100 ücretsiz olarak armağan edilmiştir.&rdquo;
              </div>
            </div>

            {/* PR Card 2: Fiziki 'Rotary Hoş Geldin Bebek' Kartı */}
            <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-[#F7A81B]/40 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-[#D49B00] flex items-center justify-center text-white shadow-lg">
                <FileCheck2 size={24} />
              </div>
              <h3 className="text-lg font-black text-white group-hover:text-[#F7A81B] transition-colors">
                2. Fiziki Aile Lisans Kartı & Sertifika
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Kulüp üyelerinizin veya hastanelerin ailelere elden takdim edebileceği Rotary amblemli prestijli kart:
              </p>
              <div className="p-3 rounded-xl bg-black/40 border border-white/20 text-xs text-slate-200 space-y-1">
                <p className="font-bold text-[#F7A81B]">Rotary Geleceğe Umut Sertifikası</p>
                <p className="text-[11px] text-slate-400">QR Kod ile anında 0–24 ay premium erişim aktivasyonu.</p>
              </div>
            </div>

            {/* PR Card 3: Basın & Medya Lansmanı */}
            <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-[#F7A81B]/40 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-coral flex items-center justify-center text-white shadow-lg">
                <Share2 size={24} />
              </div>
              <h3 className="text-lg font-black text-white group-hover:text-[#F7A81B] transition-colors">
                3. Ulusal & Yerel Basın Lansmanı
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Proje başlangıcında Rotary Kulüp Başkanı ve Bölge Guvernörü adına basın bültenleri hazırlanır:
              </p>
              <div className="p-3 rounded-xl bg-black/40 border border-white/20 text-xs text-slate-200 space-y-1">
                <p className="font-bold text-rose-300">&ldquo;Rotary&apos;den Bebek Sağlığına Yapay Zekâ Desteği&rdquo;</p>
                <p className="text-[11px] text-slate-400">Gazete, TV ve dijital mecralarda geniş itibar yansıması.</p>
              </div>
            </div>

            {/* PR Card 4: Guvernörlük & Bölge Konferansı Sunumu */}
            <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-[#F7A81B]/40 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-500 to-[#00A896] flex items-center justify-center text-white shadow-lg">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-lg font-black text-white group-hover:text-[#F7A81B] transition-colors">
                4. Bölge Konferansı ve Asamblesi Raporu
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Kulübünüzün dönem ödüllerine aday olmasını sağlayacak profesyonel video ve infografik proje karnesi:
              </p>
              <div className="p-3 rounded-xl bg-black/40 border border-white/20 text-xs text-slate-200">
                Guvernör ve Bölge Komiteleri için tek tıkla indirilebilir denetim ve başarı dosyası.
              </div>
            </div>

            {/* PR Card 5: 'The Rotarian' Küresel Makalesi */}
            <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-[#F7A81B]/40 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                <Globe2 size={24} />
              </div>
              <h3 className="text-lg font-black text-white group-hover:text-[#F7A81B] transition-colors">
                5. Uluslararası Rotary Başarı Dosyası
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                1.4 milyon Rotaryana örnek gösterilmek üzere Rotary International bülten ve yayınlarına uygun format:
              </p>
              <div className="p-3 rounded-xl bg-black/40 border border-white/20 text-xs text-slate-200">
                Global Grant başvurularında uluslararası kardeş kulüplerin fon desteğini kolaylaştıran yapı.
              </div>
            </div>

            {/* PR Card 6: Canlı Takip Paneli */}
            <div className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-[#F7A81B]/40 transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-black text-white group-hover:text-[#F7A81B] transition-colors">
                6. Kulübe Özel Şeffaf Yönetim Paneli
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Kulüp yönetimi projenin her aşamasını 7/24 şeffaf bir ekrandan anlık takip eder:
              </p>
              <div className="p-3 rounded-xl bg-black/40 border border-white/20 text-xs text-slate-200">
                Kaç bebek kaydoldu, kaç video analiz edildi, kaç erken müdahale sağlandı; hepsi canlı!
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. CO-BRANDED MOBİL UYGULAMA GÖRÜNÜMÜ (MOCKUP)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#061026]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7A81B]/20 border border-[#F7A81B]/40 text-[#F7A81B] text-xs font-bold uppercase tracking-wider">
              <RotaryWheel className="w-4 h-4" />
              <span>ORTAK MARKALAMA (CO-BRANDING)</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Her Ailenin Telefonunda <br className="hidden sm:inline" />
              <span className="text-[#F7A81B]">Rotary Kulübünüzün İmzası</span>
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Aileler uygulamayı kullandıkları 0–24 ay boyunca, her video hareket analizinde ve gece danışmanlığında arkalarında duran gücün sizin kulübünüz olduğunu bilir.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 size={18} className="text-[#F7A81B] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-200">
                  <strong>Kulüp Logolu Başlık:</strong> Uygulama ana ekranında logonuz ve kulüp adınız kesintisiz yer alır.
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 size={18} className="text-[#F7A81B] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-200">
                  <strong>Başkanın Hoş Geldiniz Mektubu:</strong> Aile ilk kayıt olduğunda kulüp başkanınızın fotoğrafı ve mesajı ile karşılanır.
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <CheckCircle2 size={18} className="text-[#F7A81B] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-200">
                  <strong>Rotary Proje Bildirimleri:</strong> Kulübünüzün diğer sosyal sorumluluk etkinlikleri ailelere push bildirimle duyurulabilir.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Phone Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-sm rounded-[40px] bg-gradient-to-b from-[#1E2554] to-[#0A1024] p-3 shadow-2xl border-4 border-[#F7A81B]/40 shadow-[#00246C]/60">
              {/* Screen Top Bar */}
              <div className="bg-[#00246C] rounded-[32px] p-4 text-white space-y-3 border border-white/10">
                
                {/* Header with Rotary Wheel */}
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
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
                  <span className="text-[8px] bg-[#F7A81B] text-[#00246C] font-extrabold px-2 py-0.5 rounded-full">
                    %100 Ücretsiz
                  </span>
                </div>

                {/* Greeting Card for Family */}
                <div className="p-3 rounded-2xl bg-gradient-to-r from-[#0C3C7C] to-[#00246C] border border-[#F7A81B]/30 space-y-1">
                  <p className="text-[11px] font-bold text-white flex items-center gap-1.5">
                    <span>👶 Hoş Geldin Canım Bebek</span>
                  </p>
                  <p className="text-[9px] text-slate-200 leading-tight">
                    &ldquo;Rotary Kulübümüzün sevgisiyle, ilk gülümsemenden ilk adımına kadar yanındayız.&rdquo;
                  </p>
                </div>

                {/* Prechtl GMA Module Card */}
                <div className="p-3 rounded-2xl bg-slate-900/90 border border-cyan-400/40 space-y-2">
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-cyan-300 font-bold flex items-center gap-1">
                      <Activity size={12} />
                      Prechtl GMA Nöromotor Analiz
                    </span>
                    <span className="bg-cyan-500/20 text-cyan-200 px-1.5 py-0.5 rounded text-[8px] font-mono">
                      Aktif Tarama
                    </span>
                  </div>
                  <div className="h-16 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-xs">
                      🦾
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white">18 Eklem Kinematik Taraması</p>
                      <p className="text-[8px] text-slate-400">Erken teşhis penceresi açık (0–6 Ay)</p>
                    </div>
                  </div>
                </div>

                {/* 24/7 Digital Assistant Card */}
                <div className="p-3 rounded-2xl bg-slate-900/90 border border-teal-400/30 space-y-1">
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-teal-300 font-bold">7/24 Dijital Büyükanne Chatbot</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <p className="text-[9px] text-slate-300">
                    &ldquo;Gece 03:00&apos;te bile Rotary rehberliğiyle uzman desteği cebinizde.&rdquo;
                  </p>
                </div>

                {/* Footer Sponsor Badge */}
                <div className="text-center pt-1 border-t border-white/10">
                  <p className="text-[8px] text-slate-400 font-mono">
                    Rotary Vakfı &bull; Anne ve Çocuk Sağlığı Hibe Programı
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. İNTERAKTİF ROTARY SOSYAL ETKİ VE BÜTÇE SİMÜLATÖRÜ
          ───────────────────────────────────────────────────────────── */}
      <section id="etki-hesaplayici" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#071330] via-[#0A1A40] to-[#071330] border-t border-white/10">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-[#F7A81B] font-mono text-xs font-bold tracking-widest uppercase">
              ÖLÇÜLEBİLİR VE DENETLENEBİLİR ÇIKTI
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Rotary Sosyal Etki ve Bütçe Simülatörü
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Kulübünüzün veya bölgenizin hedeflediği bebek sayısını seçin; projenizin yaratacağı somut sağlık etkisini anında görün.
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
                    ? "bg-[#F7A81B] text-[#00246C] shadow-lg shadow-[#F7A81B]/30 scale-105"
                    : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
                }`}
              >
                {count >= 1000 ? `${count / 1000}K Bebek` : `${count} Bebek`}
              </button>
            ))}
          </div>

          {/* Dynamic Impact Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center space-y-2 backdrop-blur-md">
              <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                {gmaScans.toLocaleString("tr-TR")}
              </div>
              <p className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                Prechtl GMA Taraması
              </p>
              <p className="text-[11px] text-slate-400">
                0–6 ay döneminde video tabanlı nöromotor izlem sayısı
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-amber-400/30 text-center space-y-2 backdrop-blur-md relative overflow-hidden">
              <div className="text-3xl sm:text-4xl font-black text-[#F7A81B] font-mono">
                ~{earlyDetectedRisks} Bebek
              </div>
              <p className="text-xs font-bold text-amber-200 uppercase tracking-wider">
                Erken Teşhis Potansiyeli
              </p>
              <p className="text-[11px] text-slate-400">
                Serebral palsi veya gelişim riski erken evrede yakalanan vaka
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center space-y-2 backdrop-blur-md">
              <div className="text-3xl sm:text-4xl font-black text-teal-300 font-mono">
                {pediatricHours.toLocaleString("tr-TR")}
              </div>
              <p className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                7/24 Rehberlik Seansı
              </p>
              <p className="text-[11px] text-slate-400">
                Uykusuz gecelerde anne ve babaya verilen pediatrik cevap
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-center space-y-2 backdrop-blur-md">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
                %100
              </div>
              <p className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                Şeffaf Raporlanabilirlik
              </p>
              <p className="text-[11px] text-slate-400">
                Rotary Vakfı ve Guvernörlük için hazır denetim çıktısı
              </p>
            </div>

          </div>

          {/* Rotary Impact Statement */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-[#00246C] via-[#0C3C7C] to-[#00246C] border border-[#F7A81B]/40 text-center space-y-2">
            <p className="text-sm sm:text-base font-bold text-white">
              💡 {babyCount} Ailelik bir Rotary projesi ile yalnızca bir sağlık hizmeti vermezsiniz;
            </p>
            <p className="text-xs sm:text-sm text-amber-200">
              Ömür boyu yürüyememe riski taşıyan bebeklerin ilk 6 ayda hekime yönlendirilmesini sağlayarak <strong>bir insan hayatının rotasını değiştirirsiniz.</strong>
            </p>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. ROTARY FONLAMA VE HİBE MODELLERİ (3 PAKET)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#071330] border-t border-white/10">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-[#F7A81B] font-mono text-xs font-bold tracking-widest uppercase">
              ESNEK VE GÜÇLÜ FONLAMA MODELLERİ
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Kulüp Düzeyinden Küresel Bağışa (Global Grant)
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Bütçenize ve Rotary dönemi hedeflerinize uygun projelendirme alternatifleri:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Model 1: Kulüp Pilot Projesi */}
            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 bg-white/10 px-3 py-1 rounded-full">
                  SEVİYE 1 &bull; KULÜP BÜTÇESİ
                </span>
                <h3 className="text-xl font-black text-white">
                  Kulüp Pilot Projesi
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tek bir Rotary kulübünün kendi dönemsel bütçesiyle ilçesinde başlatacağı hızlı sosyal etki projesi.
                </p>
                <div className="text-2xl font-black text-[#F7A81B]">
                  100 – 250 Bebek
                </div>
                <ul className="space-y-2 text-xs text-slate-200">
                  <li className="flex items-center gap-2">✓ Kulüp logolu mobil uygulama</li>
                  <li className="flex items-center gap-2">✓ 0-6 ay GMA hareket analizi</li>
                  <li className="flex items-center gap-2">✓ 7/24 dijital aile asistanı</li>
                  <li className="flex items-center gap-2">✓ Kulüp yönetim paneli erişimi</li>
                  <li className="flex items-center gap-2">✓ Dönem sonu etki sertifikası</li>
                </ul>
              </div>

              <a
                href="#rotary-basvuru"
                onClick={() => setFormData({ ...formData, grantType: "Kulüp Bütçesi", targetBabies: "250" })}
                className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs text-center transition-all block"
              >
                Bu Paketi Seçin
              </a>
            </div>

            {/* Model 2: Bölge Ortak Projesi (District Grant) */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#00246C]/60 to-[#0A1A40] border-2 border-[#F7A81B] shadow-2xl shadow-[#F7A81B]/15 space-y-6 flex flex-col justify-between relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F7A81B] text-[#00246C] text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                EN ÇOK TERCİH EDİLEN
              </span>

              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-200 bg-[#F7A81B]/20 px-3 py-1 rounded-full">
                  SEVİYE 2 &bull; DISTRICT GRANT
                </span>
                <h3 className="text-xl font-black text-white">
                  Bölge Ortak Projesi
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  2 veya daha fazla kardeş Rotary kulübünün Bölge Guvernörlüğü eşleştirmeli fonuyla yürüteceği geniş kapsamlı proje.
                </p>
                <div className="text-2xl font-black text-[#F7A81B]">
                  500 – 1.500 Bebek
                </div>
                <ul className="space-y-2 text-xs text-slate-100">
                  <li className="flex items-center gap-2">✓ Çoklu kulüp / Bölge logolu uygulama</li>
                  <li className="flex items-center gap-2">✓ Basın toplantısı ve medya lansmanı</li>
                  <li className="flex items-center gap-2">✓ Fiziki &ldquo;Rotary Bebek Kartları&rdquo;</li>
                  <li className="flex items-center gap-2">✓ 41 cilt durumu & bez analizi</li>
                  <li className="flex items-center gap-2">✓ Guvernörlük resmi faaliyet raporu</li>
                  <li className="flex items-center gap-2">✓ Rotary Bölge Asamblesi video sunumu</li>
                </ul>
              </div>

              <a
                href="#rotary-basvuru"
                onClick={() => setFormData({ ...formData, grantType: "District Grant (Bölge Fonu)", targetBabies: "500" })}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F7A81B] to-amber-400 text-[#00246C] font-black text-xs text-center shadow-lg transition-all block hover:scale-105"
              >
                Bölge Projesi Başlatın
              </a>
            </div>

            {/* Model 3: Küresel Bağış (Global Grant) */}
            <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
                  SEVİYE 3 &bull; GLOBAL GRANT
                </span>
                <h3 className="text-xl font-black text-white">
                  Küresel Bağış Projesi
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Yurt dışı kardeş Rotary kulübü ve Rotary Vakfı (The Rotary Foundation) eşleşmeli küresel hibe programı.
                </p>
                <div className="text-2xl font-black text-[#F7A81B]">
                  2.500+ Bebek
                </div>
                <ul className="space-y-2 text-xs text-slate-200">
                  <li className="flex items-center gap-2">✓ Şehir / İl çapında kurumsal dağıtım</li>
                  <li className="flex items-center gap-2">✓ Uluslararası Rotary hibe protokolü</li>
                  <li className="flex items-center gap-2">✓ &ldquo;The Rotarian&rdquo; uluslararası PR</li>
                  <li className="flex items-center gap-2">✓ Üniversite ve hekim bilim kurulu bağı</li>
                  <li className="flex items-center gap-2">✓ Tam kapsamlı akademik sosyal etki raporu</li>
                </ul>
              </div>

              <a
                href="#rotary-basvuru"
                onClick={() => setFormData({ ...formData, grantType: "Global Grant (Küresel Bağış)", targetBabies: "2500" })}
                className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs text-center transition-all block"
              >
                Global Grant Bilgisi Alın
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. PROTOKOL & İŞ BİRLİĞİ FORMU
          ───────────────────────────────────────────────────────────── */}
      <section id="rotary-basvuru" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#061026] to-[#040A18] border-t border-white/10">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#F7A81B]/20 text-[#F7A81B] mx-auto flex items-center justify-center shadow-lg">
              <RotaryWheel className="w-8 h-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Kulübünüze Özel Protokol ve Sunum Talep Edin
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Yönetim Kurulunuz veya Vakıf Komiteniz için hazır sunum dosyasını, bütçe tablosunu ve iş birliği protokol taslağını 24 saat içinde iletelim.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.04] border border-white/15 backdrop-blur-xl shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center text-3xl">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-white">
                  Talebiniz Alındı, Sayın Rotaryen!
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  <strong>{formData.clubName || "Rotary Kulübünüz"}</strong> adına talep ettiğiniz ortaklık protokolü ve sunum dosyası hazırlanmıştır. Kurumsal temsilcimiz en kısa sürede sizinle iletişime geçecektir.
                </p>
                <div className="pt-4">
                  <a
                    href="mailto:kurumsal@dijitalbuyukanne.com"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#F7A81B] underline"
                  >
                    Acil sorularınız için: kurumsal@dijitalbuyukanne.com
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                      Rotary Kulüp Adı *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Örn: Kadıköy Rotary Kulübü"
                      value={formData.clubName}
                      onChange={(e) => setFormData({ ...formData, clubName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#F7A81B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                      Rotary Bölgesi
                    </label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/20 text-white text-sm focus:outline-none focus:border-[#F7A81B]"
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
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                      Adınız & Soyadınız *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Örn: Rtn. Ahmet Yılmaz"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#F7A81B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                      Kulüpteki Göreviniz
                    </label>
                    <input
                      type="text"
                      placeholder="Örn: Dönem Başkanı / Komite Bşk."
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#F7A81B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                      E-Posta Adresi *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ahmet@ornek.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#F7A81B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                      Telefon Numarası *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0532 000 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#F7A81B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                      Hedef Bebek / Aile Sayısı
                    </label>
                    <select
                      value={formData.targetBabies}
                      onChange={(e) => setFormData({ ...formData, targetBabies: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/20 text-white text-sm focus:outline-none focus:border-[#F7A81B]"
                    >
                      <option value="100">100 Bebek (Pilot)</option>
                      <option value="250">250 Bebek</option>
                      <option value="500">500 Bebek</option>
                      <option value="1000">1.000 Bebek</option>
                      <option value="2500+">2.500+ Bebek (Global Grant)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                      Düşünülen Fon / Hibe Türü
                    </label>
                    <select
                      value={formData.grantType}
                      onChange={(e) => setFormData({ ...formData, grantType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/20 text-white text-sm focus:outline-none focus:border-[#F7A81B]"
                    >
                      <option value="Kulüp Bütçesi">Kulüp Öz Bütçesi</option>
                      <option value="District Grant (Bölge Fonu)">District Grant (Bölge Fonu)</option>
                      <option value="Global Grant (Küresel Bağış)">Global Grant (Küresel Bağış)</option>
                      <option value="Kurumsal Sponsorluk / Bağış">Kurumsal Sponsorluk / Şirket Fonu</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                    Ek Notlar veya Sorularınız
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Görüşme tarihi, kulüp toplantısı sunum tarihi veya özel isteklerinizi belirtebilirsiniz..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#F7A81B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#F7A81B] via-amber-400 to-[#D49B00] text-[#00246C] font-black text-sm sm:text-base shadow-xl shadow-[#F7A81B]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  <span>Kulübümüze Özel Protokol Taslağını Gönderin</span>
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  🔒 Bilgileriniz yalnızca Rotary proje hazırlığı kapsamında gizli tutulur.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. ROTARY FOOTER
          ───────────────────────────────────────────────────────────── */}
      <footer className="py-8 px-4 border-t border-white/10 bg-[#040A18] text-center text-xs text-slate-400 space-y-2">
        <div className="flex items-center justify-center gap-2 text-white">
          <RotaryWheel className="w-5 h-5 text-[#F7A81B]" />
          <span className="font-bold">DijitalBüyükanne &bull; Rotary Vakfı ve Kulüpleri Sosyal Sorumluluk Ekosistemi</span>
        </div>
        <p>
          &ldquo;Kendinden Önce Hizmet&rdquo; ilkesiyle her bebeğin hayatına eşit, bilimsel ve şefkatli bir dokunuş.
        </p>
        <div className="pt-2 text-[11px] text-slate-500">
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
