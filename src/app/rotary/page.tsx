"use client";

import { useState, useEffect } from "react";
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
  Mail,
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
  Check,
  Play,
  Gift,
  Baby,
  Stethoscope,
  Moon,
  BookOpen,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import RotaryEcosystemModal from "@/components/rotary/RotaryEcosystemModal";
import RotaryCaseStudies from "@/components/rotary/RotaryCaseStudies";
import RotarySystemShowcase from "@/components/rotary/RotarySystemShowcase";

// Official Rotary Wheel SVG Component (Official 24-cog, 6-spoke precision styling)
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
      <circle cx="50" cy="50" r="8" fill="#17458F" />
      <rect x="47.5" y="42" width="5" height="6" fill="#17458F" />
    </svg>
  );
}

export default function RotaryPartnershipPage() {
  const [babyCount, setBabyCount] = useState<number>(500);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [openSourceRotary, setOpenSourceRotary] = useState<number | null>(null);

  // Site açıldığında doğrudan açılabilir pencere (popup) ile açılsın
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Bilimsel literatür ve DSÖ / Nörolojik ve Kas verilerine dayalı dinamik çıktılar
  const motorRiskRotary = Math.max(1, Math.round(babyCount * 0.044));   // %4.4 Nörolojik ve Kas Riski
  const skinDigestRotary = Math.max(1, Math.round(babyCount * 0.038));  // %3.8 DSÖ & AAP
  const anxiousMomsRotary = Math.max(1, Math.round(babyCount * 0.214)); // %21.4 Postpartum Anksiyete
  const avoidableERRotary = Math.max(1, Math.round(babyCount * 0.52));  // %52 Önlenebilir Acil Servis Başvurusu

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 selection:bg-[#F7A81B] selection:text-[#17458F]">
      
      {/* ─────────────────────────────────────────────────────────────
          CANLI POPUP PENCERE (MODAL)
          ───────────────────────────────────────────────────────────── */}
      <RotaryEcosystemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* ─────────────────────────────────────────────────────────────
          1. TOP NOTIFICATION BAR (Rotary Core Strategic Alignment)
          ───────────────────────────────────────────────────────────── */}
      <div className="bg-[#17458F] border-b border-[#F7A81B] py-2 px-4 text-center text-xs sm:text-sm text-white flex items-center justify-center gap-2 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#F7A81B] animate-ping shrink-0" />
        <span className="font-extrabold tracking-wider text-[#F7A81B]">
          ROTARY 7 ODAK ALANI:
        </span>
        <span className="text-white font-medium">
          Anne ve Çocuk Sağlığı • Hastalıkların Önlenmesi ve Erken Tedavi Ortaklığı
        </span>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. HERO SECTION — CLEAN, ELEGANT & UNCLUTTERED
          ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#F0F5FC] via-white to-[#F8FAFC]">
        {/* Soft Ambient Rotary Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#17458F]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#F7A81B]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-7">
          
          {/* Dual Brand Emblem: Rotary Gold Wheel + Dijital Büyükanne Mascot */}
          <div className="inline-flex items-center justify-center gap-3 sm:gap-5 px-5 py-2 rounded-full bg-white border border-[#17458F]/20 shadow-sm">
            <div className="flex items-center gap-2 text-[#17458F]">
              <RotaryWheel className="w-6 h-6 sm:w-7 sm:h-7 text-[#F7A81B]" />
              <div className="text-left">
                <span className="font-black text-xs tracking-wider uppercase text-[#17458F] block leading-none">
                  ROTARY INTERNATIONAL
                </span>
                <span className="text-[9px] text-slate-500 font-mono tracking-widest">KULÜPLERİ & VAKFI</span>
              </div>
            </div>
            <span className="text-[#F7A81B] font-bold text-sm">×</span>
            <div className="flex items-center gap-2 text-left">
              <div className="w-7 h-7 rounded-full bg-slate-100 p-0.5 overflow-hidden border border-slate-200">
                <Image
                  src="/images/mascot.png"
                  alt="Dijital Büyükanne"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-black text-xs text-[#17458F] block leading-none">
                  DijitalBüyükanne
                </span>
                <span className="text-[9px] text-[#00A2E0] font-mono tracking-widest font-bold">BEBEK SAĞLIĞI AI</span>
              </div>
            </div>
          </div>

          {/* H1 Main Headline */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-[1.2] tracking-tight">
              &ldquo;Kendinden Önce Hizmet&rdquo; İlkesi,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17458F] via-[#0067C8] to-[#17458F]">
                Bebek Sağlığında Çığır Açan Yapay Zekâyla
              </span>{" "}
              Buluşuyor.
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              Rotary kulübünüzün desteğiyle yüzlerce bebeğe <strong>0–6 Ay Nörolojik ve Kas Hastalıkları Video Analizi</strong> ile serebral palsi erken teşhisi, <strong>pediatrik ön taramalar</strong> ve <strong>7/24 kesintisiz uzman desteği</strong> armağan edin.
            </p>
          </div>

          {/* Creative Slogan Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-50 border border-[#F7A81B]/50 text-amber-900 text-xs sm:text-sm font-bold shadow-sm">
            <Sparkles size={16} className="text-[#F7A81B]" />
            <span>&ldquo;Engelleri Aşan İlk Adımlar: Her Bebeğe Bağımsız ve Aydınlık Bir Gelecek&rdquo;</span>
          </div>

          {/* 3 Balanced Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 text-left">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#B87A00] flex items-center justify-center shrink-0">
                <Award size={20} />
              </div>
              <div>
                <p className="text-xs font-black text-[#17458F]">Yüksek Public Image</p>
                <p className="text-[11px] text-slate-500">Mobil uygulamada kalıcı kulüp logonuz</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0067C8] flex items-center justify-center shrink-0">
                <Activity size={20} />
              </div>
              <div>
                <p className="text-xs font-black text-[#17458F]">Hayat Kurtaran Teşhis</p>
                <p className="text-[11px] text-slate-500">0–6 ay nöromotor erken risk taraması</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#009739] flex items-center justify-center shrink-0">
                <Globe2 size={20} />
              </div>
              <div>
                <p className="text-xs font-black text-[#17458F]">District & Global Grant</p>
                <p className="text-[11px] text-slate-500">Rotary Vakfı hibe kriterleriyle tam uyumlu</p>
              </div>
            </div>
          </div>

          {/* Hero Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
            <Link
              href="/sunum?deck=rotary"
              target="_blank"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#17458F] to-[#0D2A54] hover:from-[#123670] hover:to-[#091D3B] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#17458F]/25 hover:-translate-y-0.5 group cursor-pointer"
            >
              <FileText size={18} className="text-[#F7A81B] group-hover:scale-110 transition-transform" />
              <span>Rotary Sunum Dosyasını Aç / İndir (13 Slayt PDF)</span>
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-[#17458F] border-2 border-[#17458F]/20 hover:border-[#17458F] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer hover:-translate-y-0.5"
            >
              <RotaryWheel className="w-5 h-5 text-[#F7A81B]" />
              <span>Rotary Ekosistemini İncele</span>
            </button>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. HISTORICAL POLIO PARALLEL (ROTARY'S PROUDEST LEGACY)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#17458F] text-white relative shadow-xl">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-8 space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#F7A81B] text-xs font-black uppercase tracking-widest border border-amber-300/30">
              <Compass size={14} />
              <span>TARİHİ BİR MİRASIN DEVAMI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Tıpkı Çocuk Felcine (Polio) Karşı Kazanılan Zafer Gibi: <br className="hidden sm:inline" />
              <span className="text-[#F7A81B]">Şimdi Bebeklerde Nöromotor Erken Teşhis Seferberliği</span>
            </h2>
            <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
              Rotary International, çocuk felcini dünyadan silmek için başlattığı <em>&ldquo;End Polio Now&rdquo;</em> hareketiyle tıp tarihine geçti. Bugünün dünyasında ise bebeklik çağının en büyük motor kaybı nedeni <strong>Serebral Palsi ve nöromotor gelişim riskleridir.</strong>
            </p>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              0–6 aylık erken müdahale penceresi kaçırıldığında kayıp ömür boyu sürer. Rotary kulübünüz bu teknolojiyle bir ailenin evine girdiğinde, <strong>bir insanın hayat boyu bağımsız yürüyebilmesini sağlar.</strong>
            </p>
          </div>

          <div className="md:col-span-4 flex justify-center">
            <div className="p-6 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md text-center space-y-2.5 shadow-xl max-w-xs">
              <div className="text-4xl font-black text-[#F7A81B] font-mono">
                0–6 Ay
              </div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                Geri Dönülemez Müdahale Penceresi
              </p>
              <p className="text-[11px] text-slate-200 leading-snug">
                Beyin plastisitesinin en yüksek olduğu ilk 6 ayda yakalanan nöromotor riskler erken terapiyle nötralize edilebilir.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. ROTARY 4'LÜ ÖZDENETİM (THE 4-WAY TEST) UYUMU — BÜYÜK VE NET FONT
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-9">
          
          <div className="text-center space-y-2">
            <span className="text-[#17458F] font-mono text-sm sm:text-base font-extrabold tracking-widest uppercase">
              ETİK VE KUSURSUZ DEĞERLER
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Rotary&apos;nin 4&apos;lü Özdenetim İlkelerine %100 Uyum
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium">
              Düşündüğümüz, söylediğimiz ve yaptığımız her şeyde Rotary felsefesine tam sadakat:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="p-6 rounded-3xl bg-slate-50/70 border-2 border-slate-200 hover:border-[#17458F] hover:shadow-lg transition-all space-y-3">
              <span className="text-[#B87A00] font-mono font-black text-xs sm:text-sm bg-amber-100 px-3 py-1 rounded-lg inline-block">
                1. SORU
              </span>
              <h3 className="text-base sm:text-lg font-black text-[#17458F]">
                Gerçeğe uygun mu?
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                Avrupa Pediatri ve nörolojik ve kas hastalıkları standartlarında, bilimsel olarak kanıtlanmış kinematik algoritma.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50/70 border-2 border-slate-200 hover:border-[#17458F] hover:shadow-lg transition-all space-y-3">
              <span className="text-[#B87A00] font-mono font-black text-xs sm:text-sm bg-amber-100 px-3 py-1 rounded-lg inline-block">
                2. SORU
              </span>
              <h3 className="text-base sm:text-lg font-black text-[#17458F]">
                İlgililerin tümü için adil mi?
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                Sosyoekonomik durumuna bakılmaksızın her bebeğe eşit ve %100 ücretsiz erişim imkânı.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50/70 border-2 border-slate-200 hover:border-[#17458F] hover:shadow-lg transition-all space-y-3">
              <span className="text-[#B87A00] font-mono font-black text-xs sm:text-sm bg-amber-100 px-3 py-1 rounded-lg inline-block">
                3. SORU
              </span>
              <h3 className="text-base sm:text-lg font-black text-[#17458F]">
                Dostluk ve iyi niyeti geliştirir mi?
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                Rotary kulübü ile toplum arasında ömür boyu sürecek derin bir şefkat, minnet ve güven bağı kurar.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50/70 border-2 border-slate-200 hover:border-[#17458F] hover:shadow-lg transition-all space-y-3">
              <span className="text-[#B87A00] font-mono font-black text-xs sm:text-sm bg-amber-100 px-3 py-1 rounded-lg inline-block">
                4. SORU
              </span>
              <h3 className="text-base sm:text-lg font-black text-[#17458F]">
                İlgililerin tümü için yararlı mı?
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                Bebek için sağlıklı bir gelecek, aile için huzur, sağlık sistemi için erken tanı verimliliği.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. PROJEMİZ VE SİSTEM MİMARİSİ (4 ADIM & KAYAN TEKNOLOJİ VİTRİNİ)
          ───────────────────────────────────────────────────────────── */}
      <RotarySystemShowcase />

      {/* ─────────────────────────────────────────────────────────────
          6. ROTARY GÖRÜNÜRLÜK & PUBLIC IMAGE VİTRİNİ
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F0F5FC] to-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <span className="text-[#17458F] font-mono text-xs font-bold tracking-widest uppercase">
              TOPLUMSAL İTİBAR VE PUBLIC IMAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Kulübünüzün İmzası Her Ailenin Hafızasında
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Rotaryenlerin toplumdaki saygınlığını taçlandıran ve kulüp üyelerinizin gururla sahipleneceği 6 boyutlu kurumsal itibar paketi:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* PR Card 1 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#17458F] hover:shadow-lg transition-all space-y-3 group">
              <div className="w-11 h-11 rounded-2xl bg-[#17458F] text-[#F7A81B] flex items-center justify-center shadow-md">
                <Smartphone size={22} />
              </div>
              <h3 className="text-base font-black text-slate-900 group-hover:text-[#17458F] transition-colors">
                1. Mobil Uygulama İçi Daimi Varlık
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Aileler uygulamayı her açtığında açılış ekranında kulüp logonuz ve şu teşekkür mesajı yer alır:
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-amber-300 text-xs text-amber-900 font-medium">
                &ldquo;Bu dijital sağlık lisansı, <strong className="text-[#17458F]">[X] Rotary Kulübü</strong> katkılarıyla ailenize %100 ücretsiz olarak armağan edilmiştir.&rdquo;
              </div>
            </div>

            {/* PR Card 2 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#F7A81B] hover:shadow-lg transition-all space-y-3 group">
              <div className="w-11 h-11 rounded-2xl bg-[#F7A81B] text-[#17458F] flex items-center justify-center shadow-md">
                <FileCheck2 size={22} />
              </div>
              <h3 className="text-base font-black text-slate-900 group-hover:text-[#F7A81B] transition-colors">
                2. Fiziki Aile Lisans Kartı & Sertifika
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kulüp üyelerinizin veya iş birliği yapılan hastanelerin ailelere takdim edebileceği Rotary amblemli kart:
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <p className="font-bold text-[#B87A00]">Rotary Geleceğe Umut Sertifikası</p>
                <p className="text-[11px] text-slate-500">QR Kod ile anında 0–24 ay premium erişim aktivasyonu.</p>
              </div>
            </div>

            {/* PR Card 3 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#D41367] hover:shadow-lg transition-all space-y-3 group">
              <div className="w-11 h-11 rounded-2xl bg-[#D41367] text-white flex items-center justify-center shadow-md">
                <Share2 size={22} />
              </div>
              <h3 className="text-base font-black text-slate-900 group-hover:text-[#D41367] transition-colors">
                3. Ulusal & Yerel Basın Lansmanı
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Proje başlangıcında Rotary Kulüp Başkanı ve Bölge Guvernörü adına basın bültenleri hazırlanır:
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-rose-200 text-xs text-slate-700">
                <p className="font-bold text-[#D41367]">&ldquo;Rotary&apos;den Bebek Sağlığına Yapay Zekâ Desteği&rdquo;</p>
                <p className="text-[11px] text-slate-500">Gazete, TV ve dijital mecralarda geniş itibar yansıması.</p>
              </div>
            </div>

            {/* PR Card 4 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#0067C8] hover:shadow-lg transition-all space-y-3 group">
              <div className="w-11 h-11 rounded-2xl bg-[#0067C8] text-white flex items-center justify-center shadow-md">
                <BarChart3 size={22} />
              </div>
              <h3 className="text-base font-black text-slate-900 group-hover:text-[#0067C8] transition-colors">
                4. Bölge Konferansı ve Asamblesi Raporu
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kulübünüzün dönem ödüllerine aday olmasını sağlayacak profesyonel video ve infografik proje karnesi:
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                Guvernör ve Bölge Komiteleri için tek tıkla sunulabilir başarı dosyası.
              </div>
            </div>

            {/* PR Card 5 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#901F93] hover:shadow-lg transition-all space-y-3 group">
              <div className="w-11 h-11 rounded-2xl bg-[#901F93] text-white flex items-center justify-center shadow-md">
                <Globe2 size={22} />
              </div>
              <h3 className="text-base font-black text-slate-900 group-hover:text-[#901F93] transition-colors">
                5. Uluslararası Rotary Başarı Dosyası
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                1.4 milyon Rotaryana ilham vermek üzere Rotary International yayınlarına uygun format:
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                Global Grant başvurularında uluslararası kardeş kulüplerin desteğini kolaylaştıran yapı.
              </div>
            </div>

            {/* PR Card 6 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#009739] hover:shadow-lg transition-all space-y-3 group">
              <div className="w-11 h-11 rounded-2xl bg-[#009739] text-white flex items-center justify-center shadow-md">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-base font-black text-slate-900 group-hover:text-[#009739] transition-colors">
                6. Kulübe Özel Canlı Yönetim Paneli
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kulüp yönetimi projenin her aşamasını 7/24 şeffaf bir ekrandan anlık takip eder:
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                Kaç bebek kaydoldu, kaç video analiz edildi, kaç erken müdahale sağlandı; hepsi canlı.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CO-BRANDED MOBİL UYGULAMA GÖRÜNÜMÜ (MOCKUP)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17458F]/10 border border-[#17458F]/30 text-[#17458F] text-xs font-bold uppercase tracking-wider">
              <RotaryWheel className="w-4 h-4 text-[#F7A81B]" />
              <span>ORTAK MARKALAMA (CO-BRANDING)</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Her Ailenin Telefonunda <br className="hidden sm:inline" />
              <span className="text-[#17458F]">Rotary Kulübünüzün İmzası</span>
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Aileler uygulamayı kullandıkları 0–24 ay boyunca, her video hareket analizinde arkalarında duran gücün sizin kulübünüz olduğunu bilir.
            </p>

            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <CheckCircle2 size={18} className="text-[#17458F] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong className="text-slate-900">Kulüp Logolu Başlık:</strong> Uygulama ana ekranında logonuz ve kulüp adınız kesintisiz yer alır.
                </p>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <CheckCircle2 size={18} className="text-[#17458F] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong className="text-slate-900">Başkanın Hoş Geldiniz Mektubu:</strong> Aile ilk kayıt olduğunda kulüp başkanınızın fotoğrafı ve mesajı ile karşılanır.
                </p>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <CheckCircle2 size={18} className="text-[#17458F] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700">
                  <strong className="text-slate-900">Rotary Proje Bildirimleri:</strong> Kulübünüzün diğer sosyal sorumluluk etkinlikleri ailelere duyurulabilir.
                </p>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-sm rounded-[42px] bg-slate-900 p-3 shadow-2xl border-4 border-[#17458F] shadow-slate-300">
              <div className="bg-[#17458F] rounded-[34px] p-4 text-white space-y-3 border border-white/20">
                
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
                  <span className="text-[8px] bg-[#F7A81B] text-[#17458F] font-extrabold px-2 py-0.5 rounded-full shadow">
                    %100 Ücretsiz
                  </span>
                </div>

                {/* Greeting Card for Family */}
                <div className="p-3 rounded-2xl bg-white/10 border border-[#F7A81B]/40 space-y-1 shadow">
                  <p className="text-[11px] font-bold text-white flex items-center gap-1.5">
                    <span>👶 Hoş Geldin Canım Bebek</span>
                  </p>
                  <p className="text-[9px] text-slate-100 leading-tight">
                    &ldquo;Rotary Kulübümüzün sevgisiyle, ilk gülümsemenden ilk adımına kadar yanındayız.&rdquo;
                  </p>
                </div>

                {/* Nörolojik ve Kas Hastalıkları Modülü */}
                <div className="p-3 rounded-2xl bg-[#0F2D6B] border border-cyan-400/50 space-y-2 shadow-md">
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-cyan-300 font-bold flex items-center gap-1">
                      <Activity size={12} />
                      Nörolojik ve Kas Hastalıkları Analizi
                    </span>
                    <span className="bg-cyan-500/30 text-cyan-200 px-1.5 py-0.5 rounded text-[8px] font-mono">
                      Aktif Tarama
                    </span>
                  </div>
                  <div className="h-16 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center gap-3">
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
                <div className="p-3 rounded-2xl bg-[#0F2D6B] border border-teal-400/40 space-y-1 shadow-md">
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-teal-300 font-bold">7/24 Dijital Büyükanne Chatbot</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <p className="text-[9px] text-slate-200">
                    &ldquo;Gece 03:00&apos;te bile Rotary rehberliğiyle uzman desteği cebinizde.&rdquo;
                  </p>
                </div>

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
          7. ROTARY BEBEK VE ANNE HEDİYE KİTİ (ÖZEL TASARIM İPEK FULAR)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-amber-50/40 to-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-[#B87A00] text-xs font-black uppercase tracking-wider border border-amber-300">
              <Gift size={15} />
              <span>SİSTEMİ KULLANACAK BEBEKLERE KULÜP HEDİYESİ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Her Bebeğe ve Annesine Özel <br className="hidden sm:inline" />
              <span className="text-[#17458F]">Rotary Kulüp İpek Fuları & Hoş Geldin Hediyesi</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Projeniz kapsamında yapay zekâ taramasına dâhil edilen her bebeğe ve annesine, Rotary kulübünüzün sevgisini ve şefkatini simgeleyen <strong>özel tasarım %100 saf ipek bandana ve fular</strong> hediye kutusuyla doğrudan evlerine ulaştırılır.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual: Adapted Rotary Silk Foulard Mockup */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#17458F]/20 bg-white group">
                <Image
                  src="/images/rotary-bebek-hediyesi.jpg"
                  alt="Rotary Bebek ve Anne İpek Fuları Hediyesi"
                  width={750}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#17458F] text-white text-[11px] font-black uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-white/20">
                  <RotaryWheel className="w-3.5 h-3.5 text-[#F7A81B]" />
                  <span>Rotary Kulübü Özel Armağanı</span>
                </div>
              </div>
            </div>

            {/* Content & Details */}
            <div className="lg:col-span-5 space-y-3.5">
              
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#B87A00] flex items-center justify-center shrink-0">
                  <Gift size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#17458F]">Lüks %100 Saf İpek Kumaş</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Bebeğin hassas cildine uygun, nefes alan, yumuşak dokulu saten ipek.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0067C8] flex items-center justify-center shrink-0">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#17458F]">Bebek Bandanası & Anne Fuları</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Bebek için sevimli bir boyun bandanası, anne için zarif bir boyun fuları olarak kullanılabilir.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-[#17458F] flex items-center justify-center shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#17458F]">Kalıcı Kulüp Amblemi</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Altın yaldızlı Rotary Çarkı ve kulüp ismiyle dokunmuş, nesiller boyu saklanacak prestijli bir hatıra.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#009739] flex items-center justify-center shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#17458F]">Doğrudan Evlere Teslimat</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Kulüp başkanınızın iyi dilek mektubu ve aktivasyon sertifikasıyla birlikte ailelerin kapısına teslim edilir.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. İNTERAKTİF ROTARY SOSYAL ETKİ SİMÜLATÖRÜ (KANITA DAYALI & DENETLENEBİLİR)
          ───────────────────────────────────────────────────────────── */}
      <section id="etki-hesaplayici" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F0F5FC] via-white to-[#F0F5FC] border-b border-slate-200 relative overflow-hidden">
        {/* Soft Rotary ambient glow */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[350px] bg-[#17458F]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[350px] bg-[#F7A81B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto space-y-10 relative z-10">
          
          {/* Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#17458F]/10 border border-[#17458F]/20 text-[#17458F] text-xs font-mono font-bold tracking-widest uppercase">
              <TrendingUp size={14} className="text-[#F7A81B]" />
              <span>KANITA DAYALI ROTARY ETKİ VE DENETİM SİMÜLATÖRÜ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Kulübünüz Kaç Bebeğin <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17458F] via-[#0067C8] to-[#F7A81B]">
                Hayatına Dokunacak?
              </span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Hedeflediğiniz bebek ve aile sayısını belirleyin; <strong>Rotary 7 Odak Alanı</strong> standartlarında ve <strong>The Rotary Foundation (TRF)</strong> denetimine hazır somut sağlık dönüşümünü canlı simüle edin.
            </p>
          </div>

          {/* Slider & Scale Selection Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 relative overflow-hidden">
            {/* Corner Emblem Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F7A81B]/15 to-transparent rounded-bl-full pointer-events-none" />

            {/* Visual Baby & Family Journey Strip */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 py-3 px-4 rounded-2xl bg-gradient-to-r from-blue-50 via-amber-50/50 to-emerald-50 border border-slate-200/70">
              <span className="text-2xl sm:text-3xl" title="Aile">👨‍👩‍👶</span>
              <div className="h-0.5 flex-1 bg-gradient-to-r from-[#17458F]/30 via-[#F7A81B]/40 to-[#009739]/40 rounded" />
              <span className="text-xl sm:text-2xl" title="Yeni Doğan Bebek">👶</span>
              <div className="h-0.5 w-6 sm:w-10 bg-slate-200 rounded" />
              <span className="text-xl sm:text-2xl" title="Rotary İpek Bebek Fuları Hediyesi">🎗️</span>
              <div className="h-0.5 w-6 sm:w-10 bg-slate-200 rounded" />
              <span className="text-xl sm:text-2xl" title="Erken Tarama & Sağlık">🩺</span>
              <div className="h-0.5 flex-1 bg-gradient-to-r from-[#F7A81B]/40 via-[#0067C8]/40 to-[#009739]/50 rounded" />
              <span className="text-2xl sm:text-3xl" title="Sağlıklı Gelecek">🌱</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div>
                <h3 className="text-sm font-black text-[#17458F] flex items-center gap-2">
                  <RotaryWheel className="w-5 h-5 text-[#F7A81B]" />
                  Kulübünüzün / Bölgenizin Destekleyeceği Bebek Sayısı:
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Aşağıdaki Rotary proje modellerinden birini seçin veya kaydırıcıyı hareket ettirin.
                </p>
              </div>

              <div className="inline-flex items-baseline gap-2 bg-gradient-to-r from-[#17458F] to-[#0d3461] px-6 py-3 rounded-2xl shadow-lg shadow-[#17458F]/20">
                <span className="text-3xl sm:text-4xl font-black text-[#F7A81B] font-mono tracking-tight">
                  {babyCount.toLocaleString("tr-TR")}
                </span>
                <span className="text-[11px] font-bold text-white/90 uppercase tracking-wider">
                  Bebek & Anne
                </span>
              </div>
            </div>

            {/* Slider */}
            <div className="relative mb-6">
              <div className="relative h-4 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#17458F] via-[#0067C8] to-[#F7A81B] rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, Math.max(0, ((babyCount - 100) / (2500 - 100)) * 100))}%` }}
                />
              </div>
              <input
                type="range"
                min={100}
                max={2500}
                step={50}
                value={babyCount}
                onChange={(e) => setBabyCount(Number(e.target.value))}
                className="absolute inset-0 w-full h-4 opacity-0 cursor-pointer"
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-[3px] border-[#F7A81B] rounded-full shadow-md shadow-[#F7A81B]/40 pointer-events-none transition-all duration-300"
                style={{ left: `calc(${Math.min(100, Math.max(0, ((babyCount - 100) / (2500 - 100)) * 100))}% - 12px)` }}
              />
            </div>

            {/* Rotary Quick Scale Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
              <span className="text-[11px] font-bold text-slate-400 mr-1">Proje Seviyesi:</span>
              {[
                { label: "100 Bebek", tier: "Kulüp Pilotu", count: 100, emoji: "🎯" },
                { label: "250 Bebek", tier: "Genişletilmiş", count: 250, emoji: "🎖️" },
                { label: "500 Bebek", tier: "District Grant", count: 500, emoji: "🏛️" },
                { label: "1.000 Bebek", tier: "Ortak Kulüpler", count: 1000, emoji: "🤝" },
                { label: "2.500 Bebek", tier: "Global Grant", count: 2500, emoji: "🌍" },
              ].map((item) => (
                <button
                  key={item.count}
                  onClick={() => setBabyCount(item.count)}
                  className={`px-3.5 py-2 rounded-xl text-xs transition-all border flex items-center gap-1.5 cursor-pointer ${
                    babyCount === item.count
                      ? "bg-[#17458F] text-white border-[#17458F] font-bold shadow-md shadow-[#17458F]/25 scale-105"
                      : "bg-slate-50 text-slate-700 hover:border-slate-300 border-slate-200 font-medium hover:bg-white"
                  }`}
                >
                  <span>{item.emoji}</span>
                  <span className="font-bold">{item.label}</span>
                  <span className={`text-[10px] ${babyCount === item.count ? "text-amber-300" : "text-slate-400"}`}>
                    ({item.tier})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 4 Kanıta Dayalı Etki Kartı */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Kart 1: Nörolojik ve Kas Hastalıklarında Erken Yakalanan İpucu */}
            <div className="bg-gradient-to-br from-blue-50/60 to-white rounded-3xl border border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl leading-none">👶</span>
                    <div className="w-10 h-10 rounded-xl bg-[#17458F]/10 text-[#17458F] flex items-center justify-center font-bold">
                      <Baby size={22} />
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#17458F]/10 text-[#17458F] border border-[#17458F]/20 font-mono">
                    %4,4 Nöromotor Risk
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-[#17458F] font-mono mb-1 tracking-tight">
                  ~{motorRiskRotary}
                  <span className="text-xl font-bold ml-2 text-slate-600">Bebek</span>
                </div>

                <h4 className="text-base font-black text-slate-900 mb-2 leading-snug">
                  Nörolojik ve Kas Hastalıklarında Erken Yakalanan İpucu
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Projenizin ulaştığı {babyCount.toLocaleString("tr-TR")} bebeğin yaklaşık <strong>{motorRiskRotary}&apos;sinde</strong>, ev ortamında gözden kaçabilecek nörolojik ve kas hastalıkları erken hareket asimetrisi video analiziyle erkenden tespit edilir.
                </p>

                <div className="mt-4 p-3 rounded-xl bg-blue-100/70 border border-blue-200">
                  <p className="text-xs font-semibold text-[#17458F] leading-snug">
                    💡 <strong>Rotary Değeri:</strong> Serebral palsi veya nöromotor engellilik riskini ilk 6 ayda yakalayarak bir çocuğun tüm yaşam rotasını değiştirirsiniz.
                  </p>
                </div>
              </div>

              {/* Source Accordion */}
              <div className="border-t border-slate-100">
                <button
                  onClick={() => setOpenSourceRotary(openSourceRotary === 0 ? null : 0)}
                  className="w-full flex items-center justify-between px-6 py-3 text-xs text-slate-500 hover:text-[#17458F] hover:bg-slate-50/70 transition-colors"
                >
                  <span className="flex items-center gap-1.5 font-bold">
                    <BookOpen size={13} className="text-[#17458F]" />
                    Bilimsel Dayanak: Nörolojik ve Kas Hastalıkları Metodolojisi
                  </span>
                  {openSourceRotary === 0 ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
                {openSourceRotary === 0 && (
                  <div className="px-6 pb-4 text-[11px] text-slate-600 leading-relaxed bg-slate-50/60 border-t border-slate-100">
                    <p className="pt-3">
                      <strong>Referans:</strong> Einspieler C, Prechtl HFR. <em>Assessment of General Movements (Nörolojik ve Kas Hareket Analizi)</em>. Developmental Medicine & Child Neurology, 2005. İnfant dönemde spontan fidgety hareketlerin yokluğu, serebral palsi ve kalıcı motor hasar tahmininde %90–98 sensitiviteye sahiptir.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Kart 2: Zamanında Çocuk Hekimine Sevk Edilen Bebek */}
            <div className="bg-gradient-to-br from-amber-50/50 to-white rounded-3xl border border-amber-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl leading-none">🩺</span>
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#B87A00] flex items-center justify-center font-bold">
                      <Stethoscope size={22} />
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-mono">
                    %3,8 Klinik Öncelik
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-[#B87A00] font-mono mb-1 tracking-tight">
                  ~{skinDigestRotary}
                  <span className="text-xl font-bold ml-2 text-slate-600">Bebek</span>
                </div>

                <h4 className="text-base font-black text-slate-900 mb-2 leading-snug">
                  Kritik Pencere Aşılmadan Çocuk Hekimine Sevk
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Bebek bezi renk analizi (dışkı renk kartı piksel eşleme) ve cilt bariyer taramasıyla {babyCount.toLocaleString("tr-TR")} bebeğin <strong>~{skinDigestRotary}&apos;sinde</strong> kulaktan dolma bilgiler yerine kritik günlerde doğrudan hekim muayenesi sağlanır.
                </p>

                <div className="mt-4 p-3 rounded-xl bg-amber-100/70 border border-amber-200">
                  <p className="text-xs font-semibold text-amber-950 leading-snug">
                    💡 <strong>Rotary Değeri:</strong> &ldquo;Hastalıkların Önlenmesi ve Erken Tedavi&rdquo; odak alanına birebir uyan, gecikmeyi engelleyen hayati sevk köprüsü.
                  </p>
                </div>
              </div>

              {/* Source Accordion */}
              <div className="border-t border-slate-100">
                <button
                  onClick={() => setOpenSourceRotary(openSourceRotary === 1 ? null : 1)}
                  className="w-full flex items-center justify-between px-6 py-3 text-xs text-slate-500 hover:text-[#B87A00] hover:bg-slate-50/70 transition-colors"
                >
                  <span className="flex items-center gap-1.5 font-bold">
                    <BookOpen size={13} className="text-[#B87A00]" />
                    Bilimsel Dayanak: DSÖ & AAP Pediatri Kılavuzları
                  </span>
                  {openSourceRotary === 1 ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
                {openSourceRotary === 1 && (
                  <div className="px-6 pb-4 text-[11px] text-slate-600 leading-relaxed bg-slate-50/60 border-t border-slate-100">
                    <p className="pt-3">
                      <strong>Referans:</strong> World Health Organization (WHO) Early Infant Evaluation Guidelines ve American Academy of Pediatrics (AAP) UpToDate rehberleri. 0-6 ay döneminde acil çocuk hekimi muayenesi gerektiren sarılık, biliyer atrezi ve dermatolojik lezyon oranı ~%3,8&apos;dir.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Kart 3: Gece Yalnızlığı ve Stresi Giderilen Anne */}
            <div className="bg-gradient-to-br from-indigo-50/50 to-white rounded-3xl border border-indigo-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl leading-none">🌙</span>
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                      <Moon size={22} />
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200 font-mono">
                    %21,4 Anne Sağlığı
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-indigo-700 font-mono mb-1 tracking-tight">
                  ~{anxiousMomsRotary}
                  <span className="text-xl font-bold ml-2 text-slate-600">Anne</span>
                </div>

                <h4 className="text-base font-black text-slate-900 mb-2 leading-snug">
                  Gece Yalnızlığı ve Panik Hissi Giderilen Anne
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Doğum sonrası lohusalık anksiyetesi yaşayan <strong>~{anxiousMomsRotary} anneye</strong>, gece 03:00&apos;te bebek ağlarken bilimsel ve şefkatli 7/24 dijital asistan rehberliği el uzatır; evham yerine huzur sağlar.
                </p>

                <div className="mt-4 p-3 rounded-xl bg-indigo-100/70 border border-indigo-200">
                  <p className="text-xs font-semibold text-indigo-950 leading-snug">
                    💡 <strong>Rotary Değeri:</strong> &ldquo;Anne ve Çocuk Sağlığı&rdquo; odak alanında doğrudan annenin psikolojik dayanıklılığını güçlendiren somut sosyal etki.
                  </p>
                </div>
              </div>

              {/* Source Accordion */}
              <div className="border-t border-slate-100">
                <button
                  onClick={() => setOpenSourceRotary(openSourceRotary === 2 ? null : 2)}
                  className="w-full flex items-center justify-between px-6 py-3 text-xs text-slate-500 hover:text-indigo-700 hover:bg-slate-50/70 transition-colors"
                >
                  <span className="flex items-center gap-1.5 font-bold">
                    <BookOpen size={13} className="text-indigo-700" />
                    Bilimsel Dayanak: DSÖ & Türkiye Ruh Sağlığı Verileri
                  </span>
                  {openSourceRotary === 2 ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
                {openSourceRotary === 2 && (
                  <div className="px-6 pb-4 text-[11px] text-slate-600 leading-relaxed bg-slate-50/60 border-t border-slate-100">
                    <p className="pt-3">
                      <strong>Referans:</strong> WHO Postpartum Mental Health Reports ve Türkiye Sağlık Bakanlığı / Hacettepe Üniversitesi araştırmaları: Türkiye&apos;de doğum sonrası erken dönemde klinik anksiyete prevalansı %21,4 düzeyindedir. Sürekli destek mekanizması lohusalık depresyonunu hafifletir.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Kart 4: Önlenebilir Acil Servis Başvurusu */}
            <div className="bg-gradient-to-br from-emerald-50/50 to-white rounded-3xl border border-emerald-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl leading-none">🏥</span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#009739] flex items-center justify-center font-bold">
                      <ShieldCheck size={22} />
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-mono">
                    %52 Önlenebilir Acil
                  </span>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-[#009739] font-mono mb-1 tracking-tight">
                  ~{avoidableERRotary}
                  <span className="text-xl font-bold ml-2 text-slate-600">Başvuru</span>
                </div>

                <h4 className="text-base font-black text-slate-900 mb-2 leading-snug">
                  Önlenebilir Çocuk Acil Başvurusu ve Panik
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Tıbbi müdahale gerektirmeyen gaz sancısı veya basit beslenme tereddütleri yüzünden yaşanan <strong>~{avoidableERRotary} gereksiz acil servise koşma vakası</strong> engellenir; aile evinde huzurla bebeğine sarılır.
                </p>

                <div className="mt-4 p-3 rounded-xl bg-emerald-100/70 border border-emerald-200">
                  <p className="text-xs font-semibold text-emerald-950 leading-snug">
                    💡 <strong>Rotary Değeri:</strong> Sağlık sistemindeki yığılmayı ve ailelerin hastane koridorlarında tükenmesini engelleyen nitelikli huzur saati.
                  </p>
                </div>
              </div>

              {/* Source Accordion */}
              <div className="border-t border-slate-100">
                <button
                  onClick={() => setOpenSourceRotary(openSourceRotary === 3 ? null : 3)}
                  className="w-full flex items-center justify-between px-6 py-3 text-xs text-slate-500 hover:text-[#009739] hover:bg-slate-50/70 transition-colors"
                >
                  <span className="flex items-center gap-1.5 font-bold">
                    <BookOpen size={13} className="text-[#009739]" />
                    Bilimsel Dayanak: AAP & Türkiye Acil Servis İstatistikleri
                  </span>
                  {openSourceRotary === 3 ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
                {openSourceRotary === 3 && (
                  <div className="px-6 pb-4 text-[11px] text-slate-600 leading-relaxed bg-slate-50/60 border-t border-slate-100">
                    <p className="pt-3">
                      <strong>Referans:</strong> American Academy of Pediatrics (AAP) ve Journal of Pediatrics: Pediatrik acil başvurularının %41–66&apos;sı birinci basamakta ve evde yönetilebilir. Türkiye Sağlık Bakanlığı çocuk acil istatistiklerinde acile başvuran bebeklerin ~%52&apos;si gaz, basit ateş ve huzursuzluk kaynaklıdır.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Koyu Rotary Vakfı ve Guvernörlük Denetim Konsolu */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#17458F] via-[#0d3461] to-[#0A2540] border-2 border-[#F7A81B] text-white shadow-2xl relative overflow-hidden">
            {/* Background Rotary Wheel silhouette */}
            <div className="absolute -right-12 -bottom-12 opacity-10 pointer-events-none text-white">
              <RotaryWheel className="w-80 h-80" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/15 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F7A81B] text-[#17458F] flex items-center justify-center font-black">
                    <Award size={22} />
                  </div>
                  <div>
                    <h5 className="text-base font-black text-white">
                      The Rotary Foundation (TRF) ve Guvernörlük Denetim Çıktısı
                    </h5>
                    <p className="text-xs text-amber-200">
                      Kulübünüzün {babyCount.toLocaleString("tr-TR")} ailelik projesi için dönem sonu raporlanabilir resmi etki bilançosu
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-white/10 text-[#F7A81B] border border-[#F7A81B]/40 self-start sm:self-center">
                  Denetime Hazır Çıktı
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-2xl bg-white/[0.08] border border-white/10">
                  <span className="block text-3xl font-black text-[#F7A81B] font-mono">%100</span>
                  <span className="text-xs font-bold text-white mt-1 block">Şeffaf Raporlanabilirlik</span>
                  <span className="text-[10px] text-white/60">TRF & Guvernörlük standart</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.08] border border-white/10">
                  <span className="block text-3xl font-black text-amber-300 font-mono">~{motorRiskRotary}</span>
                  <span className="text-xs font-bold text-white mt-1 block">Nöromotor Risk Taraması</span>
                  <span className="text-[10px] text-white/60">Nörolojik ve kas standardı</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.08] border border-white/10">
                  <span className="block text-3xl font-black text-blue-300 font-mono">~{anxiousMomsRotary}</span>
                  <span className="text-xs font-bold text-white mt-1 block">Anne Esenliği Desteği</span>
                  <span className="text-[10px] text-white/60">7/24 rehberlik seansı</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.08] border border-white/10">
                  <span className="block text-3xl font-black text-emerald-400 font-mono">{babyCount}</span>
                  <span className="text-xs font-bold text-white mt-1 block">Rotary İpek Fuları Armağanı</span>
                  <span className="text-[10px] text-white/60">Bebek & anne hatıra kiti</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/70 gap-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#F7A81B]" />
                  Rotary 4-Way Test (Dörtlü Özdenetim) ve TRF Sürdürülebilir Kalkınma hedefleriyle tam uyumludur.
                </span>
                <span className="text-white/50">Tanı koymaz; erken farkındalık ve hekim sevk köprüsü kurar.</span>
              </div>
            </div>
          </div>

          {/* Rotary Callout Statement */}
          <div className="p-6 rounded-3xl bg-amber-50 border-2 border-[#F7A81B] text-center space-y-2 shadow-md">
            <p className="text-sm sm:text-base font-black text-[#17458F]">
              💡 {babyCount} Ailelik bir Rotary projesi ile yalnızca bir teknoloji lisansı bağışlamazsınız;
            </p>
            <p className="text-xs sm:text-sm text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Ömür boyu yatağa veya tekerlekli sandalyeye bağımlı kalma riski taşıyan bebeklerin ilk 6 ayda hekime yönlendirilmesini sağlayarak <strong>bir insan hayatının ve bir ailenin kaderini değiştirirsiniz.</strong>
            </p>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. ROTARY DESTEKLİ GERÇEK HAYATTAN ETKİ HİKAYELERİ (KAYAN ZEMİN & GÖRSEL VİTRİN)
          ───────────────────────────────────────────────────────────── */}
      <RotaryCaseStudies />

      {/* ─────────────────────────────────────────────────────────────
          10. ROTARY FONLAMA VE HİBE MODELLERİ (3 PAKET)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="text-center space-y-2.5">
            <span className="text-[#17458F] font-mono text-xs font-bold tracking-widest uppercase">
              ESNEK VE GÜÇLÜ FONLAMA MODELLERİ
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Kulüp Düzeyinden Küresel Bağışa (Global Grant)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Bütçenize ve Rotary dönemi hedeflerinize uygun projelendirme alternatifleri:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Model 1: Kulüp Pilot Projesi */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#17458F] transition-all space-y-5 flex flex-col justify-between shadow-sm">
              <div className="space-y-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full">
                  SEVİYE 1 &bull; KULÜP BÜTÇESİ
                </span>
                <h3 className="text-lg font-black text-slate-900">
                  Kulüp Pilot Projesi
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tek bir Rotary kulübünün kendi dönemsel bütçesiyle bölgesinde başlatacağı hızlı ve yüksek etkili toplum hizmeti projesi.
                </p>
                <div className="text-2xl font-black text-[#17458F]">
                  100 – 250 Bebek
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">✓ Kulüp logolu mobil uygulama arayüzü</li>
                  <li className="flex items-center gap-2">✓ 0-6 ay nörolojik ve kas hastalıkları hareket analizi taraması</li>
                  <li className="flex items-center gap-2">✓ Pediatrik ön değerlendirme & gelişim takibi</li>
                  <li className="flex items-center gap-2">✓ 7/24 dijital aile rehberliği</li>
                  <li className="flex items-center gap-2">✓ Kulüp yönetim paneli erişimi</li>
                  <li className="flex items-center gap-2">✓ Bebek & Anne Rotary İpek Fuları armağanı</li>
                  <li className="flex items-center gap-2">✓ Dönem sonu etki sertifikası</li>
                </ul>
              </div>

              <a
                href="mailto:kurumsal@dijitalbuyukanne.com?subject=Rotary%20Kulup%20Pilot%20Projesi%20Bilgisi"
                className="w-full py-3 rounded-xl bg-white hover:bg-slate-100 text-[#17458F] font-bold text-xs text-center transition-all block border border-slate-300 cursor-pointer shadow-sm"
              >
                Bilgi ve Detay Alın
              </a>
            </div>

            {/* Model 2: Bölge Ortak Projesi (District Grant) */}
            <div className="p-7 rounded-3xl bg-gradient-to-b from-white to-amber-50/50 border-2 border-[#F7A81B] shadow-xl space-y-5 flex flex-col justify-between relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F7A81B] text-[#17458F] text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                EN ÇOK TERCİH EDİLEN
              </span>

              <div className="space-y-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                  SEVİYE 2 &bull; DISTRICT GRANT
                </span>
                <h3 className="text-lg font-black text-slate-900">
                  Bölge Ortak Projesi
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  2 veya daha fazla kardeş Rotary kulübünün Bölge Guvernörlüğü eşleştirmeli fonuyla yürüteceği geniş kapsamlı proje.
                </p>
                <div className="text-2xl font-black text-[#B87A00]">
                  500 – 1.500 Bebek
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">✓ Çoklu kulüp / Bölge logolu uygulama</li>
                  <li className="flex items-center gap-2">✓ Bebek & Anne Rotary İpek Fuları hediye kiti</li>
                  <li className="flex items-center gap-2">✓ Basın toplantısı ve medya lansmanı paketi</li>
                  <li className="flex items-center gap-2">✓ Fiziki &ldquo;Rotary Bebek Lisans Kartları&rdquo;</li>
                  <li className="flex items-center gap-2">✓ Yapay zekâ destekli pediatrik ön taramalar</li>
                  <li className="flex items-center gap-2">✓ Guvernörlük resmi faaliyet raporu</li>
                  <li className="flex items-center gap-2">✓ Rotary Bölge Asamblesi sunum paketi</li>
                </ul>
              </div>

              <a
                href="mailto:kurumsal@dijitalbuyukanne.com?subject=Rotary%20District%20Grant%20Projesi%20Bilgisi"
                className="w-full py-3.5 rounded-xl bg-[#17458F] hover:bg-[#103E8A] text-white font-black text-xs text-center shadow-lg transition-all block hover:scale-105 cursor-pointer"
              >
                Bölge Projesi Başlatın
              </a>
            </div>

            {/* Model 3: Küresel Bağış (Global Grant) */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#17458F] transition-all space-y-5 flex flex-col justify-between shadow-sm">
              <div className="space-y-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-900 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
                  SEVİYE 3 &bull; GLOBAL GRANT
                </span>
                <h3 className="text-lg font-black text-slate-900">
                  Küresel Bağış Projesi
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Yurt dışı kardeş Rotary kulübü ve Rotary Vakfı (The Rotary Foundation) eşleşmeli küresel hibe programı.
                </p>
                <div className="text-2xl font-black text-[#901F93]">
                  2.500+ Bebek
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-center gap-2">✓ İl / Bölge çapında kurumsal dağıtım</li>
                  <li className="flex items-center gap-2">✓ Özel amblemli ipek fular & hediye sandığı</li>
                  <li className="flex items-center gap-2">✓ Uluslararası Rotary hibe protokolü tam uyumu</li>
                  <li className="flex items-center gap-2">✓ &ldquo;The Rotarian&rdquo; uluslararası PR</li>
                  <li className="flex items-center gap-2">✓ Üniversite ve hekim bilim kurulu doğrulaması</li>
                  <li className="flex items-center gap-2">✓ Tam kapsamlı akademik sosyal etki raporu</li>
                </ul>
              </div>

              <a
                href="mailto:kurumsal@dijitalbuyukanne.com?subject=Rotary%20Global%20Grant%20Projesi%20Bilgisi"
                className="w-full py-3 rounded-xl bg-white hover:bg-slate-100 text-[#17458F] font-bold text-xs text-center transition-all block border border-slate-300 cursor-pointer shadow-sm"
              >
                Global Grant Bilgisi Alın
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. SADE & ŞIK KURUMSAL İLETİŞİM ŞERİDİ
          ───────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F0F5FC] to-white border-b border-slate-200 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-amber-100 text-[#B87A00] mx-auto flex items-center justify-center shadow-sm border border-amber-300">
            <RotaryWheel className="w-7 h-7 text-[#F7A81B]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Kulübünüzle Birlikte Bebeklerin Hayatını Değiştirelim
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Rotary 2420, 2430 ve 2440. Bölgeler için hazır protokol taslağı, sunum dosyası ve bütçe planlaması için temsilcimizle doğrudan iletişime geçebilirsiniz.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/sunum?deck=rotary"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-[#F7A81B] hover:bg-amber-400 text-[#17458F] font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
            >
              <FileText size={16} />
              <span>Rotary Sunum Dosyasını Aç (13 Slayt PDF)</span>
            </Link>
            <a
              href="mailto:kurumsal@dijitalbuyukanne.com?subject=Rotary%20Kul%C3%BCp%20Ortakl%C4%B1k%20Talebi"
              className="px-6 py-3 rounded-xl bg-[#17458F] hover:bg-[#103E8A] text-white font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail size={16} className="text-[#F7A81B]" />
              <span>kurumsal@dijitalbuyukanne.com</span>
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play size={14} className="text-[#F7A81B] fill-current" />
              <span>Ekosistem Animasyonunu Aç</span>
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          11. ROTARY FOOTER
          ───────────────────────────────────────────────────────────── */}
      <footer className="py-8 px-4 bg-[#0A1E40] text-center text-xs text-slate-300 space-y-2.5">
        <div className="flex items-center justify-center gap-2 text-white">
          <RotaryWheel className="w-5 h-5 text-[#F7A81B]" />
          <span className="font-bold">DijitalBüyükanne &bull; Rotary Vakfı ve Kulüpleri Sosyal Sorumluluk Ekosistemi</span>
        </div>
        <p className="text-slate-400 max-w-xl mx-auto text-[11px]">
          &ldquo;Kendinden Önce Hizmet&rdquo; ilkesiyle her bebeğin hayatına eşit, bilimsel ve şefkatli bir dokunuş.
        </p>
        <div className="pt-1 text-[11px] text-slate-400 flex items-center justify-center gap-3">
          <Link href="/" className="hover:text-white transition-colors underline">
            Ana Sayfaya Dön
          </Link>
          <span>&bull;</span>
          <a href="mailto:kurumsal@dijitalbuyukanne.com" className="hover:text-[#F7A81B] transition-colors">
            kurumsal@dijitalbuyukanne.com
          </a>
        </div>
      </footer>

    </div>
  );
}
