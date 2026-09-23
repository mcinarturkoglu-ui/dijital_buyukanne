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
  Play
} from "lucide-react";
import RotaryEcosystemModal from "@/components/rotary/RotaryEcosystemModal";

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

  // Calculate projected impacts dynamically
  const gmaScans = babyCount;
  const earlyDetectedRisks = Math.round(babyCount * 0.035); // ~%3.5 nöromotor risk
  const pediatricHours = babyCount * 24; // 24 sessions/year per baby

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
              Rotary kulübünüzün desteğiyle yüzlerce bebeğe <strong>0–6 Ay Prechtl GMA Kinematik Hareket Analizi</strong> ile serebral palsi erken teşhisi, <strong>pediatrik ön taramalar</strong> ve <strong>7/24 kesintisiz uzman desteği</strong> armağan edin.
            </p>
          </div>

          {/* Creative Slogan Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-50 border border-[#F7A81B]/50 text-amber-900 text-xs sm:text-sm font-bold shadow-sm">
            <Sparkles size={16} className="text-[#F7A81B] shrink-0" />
            <span>&ldquo;Engelleri Aşan İlk Adımlar: Her Bebeğe Bağımsız ve Aydınlık Bir Gelecek&rdquo;</span>
          </div>

          {/* Clean, High-Impact CTA Area */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            
            {/* Pop-up Pencereyi Aç Butonu */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#17458F] hover:bg-[#103E8A] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-[#17458F]/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <div className="w-6 h-6 rounded-full bg-[#F7A81B] text-[#17458F] flex items-center justify-center shrink-0">
                <Play size={12} className="fill-current ml-0.5" />
              </div>
              <span>Canlı Ekosistem Animasyonunu İzle (Popup)</span>
            </button>

            <a
              href="#etki-hesaplayici"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm sm:text-base border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <BarChart3 size={17} className="text-[#17458F]" />
              <span>Sosyal Etki Simülatörü</span>
            </a>
          </div>

          {/* 3 Balanced Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-4 text-left">
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-[#B87A00] flex items-center justify-center shrink-0">
                <Award size={18} />
              </div>
              <div>
                <p className="text-xs font-black text-[#17458F]">Yüksek Public Image</p>
                <p className="text-[11px] text-slate-500">Mobil uygulamada kalıcı kulüp logonuz</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sky-100 text-[#0067C8] flex items-center justify-center shrink-0">
                <Activity size={18} />
              </div>
              <div>
                <p className="text-xs font-black text-[#17458F]">Hayat Kurtaran Teşhis</p>
                <p className="text-[11px] text-slate-500">0–6 ay nöromotor erken risk taraması</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#009739] flex items-center justify-center shrink-0">
                <Globe2 size={18} />
              </div>
              <div>
                <p className="text-xs font-black text-[#17458F]">District & Global Grant</p>
                <p className="text-[11px] text-slate-500">Rotary Vakfı hibe kriterleriyle tam uyumlu</p>
              </div>
            </div>
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
          4. ROTARY 4'LÜ ÖZDENETİM (THE 4-WAY TEST) UYUMU
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-[#17458F] font-mono text-xs font-bold tracking-widest uppercase">
              ETİK VE KUSURSUZ DEĞERLER
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Rotary&apos;nin 4&apos;lü Özdenetim İlkelerine %100 Uyum
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
              Düşündüğümüz, söylediğimiz ve yaptığımız her şeyde Rotary felsefesine tam sadakat:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#17458F] transition-all space-y-2 shadow-sm">
              <span className="text-[#F7A81B] font-mono font-bold text-xs bg-amber-50 px-2 py-0.5 rounded">1. SORU</span>
              <p className="text-xs font-bold text-[#17458F]">Gerçeğe uygun mu?</p>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Avrupa Pediatri ve Prechtl GMA standartlarında, bilimsel olarak kanıtlanmış kinematik algoritma.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#17458F] transition-all space-y-2 shadow-sm">
              <span className="text-[#F7A81B] font-mono font-bold text-xs bg-amber-50 px-2 py-0.5 rounded">2. SORU</span>
              <p className="text-xs font-bold text-[#17458F]">İlgililerin tümü için adil mi?</p>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Sosyoekonomik durumuna bakılmaksızın her bebeğe eşit ve %100 ücretsiz erişim imkânı.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#17458F] transition-all space-y-2 shadow-sm">
              <span className="text-[#F7A81B] font-mono font-bold text-xs bg-amber-50 px-2 py-0.5 rounded">3. SORU</span>
              <p className="text-xs font-bold text-[#17458F]">Dostluk ve iyi niyeti geliştirir mi?</p>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Rotary kulübü ile toplum arasında ömür boyu sürecek derin bir şefkat, minnet ve güven bağı kurar.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#17458F] transition-all space-y-2 shadow-sm">
              <span className="text-[#F7A81B] font-mono font-bold text-xs bg-amber-50 px-2 py-0.5 rounded">4. SORU</span>
              <p className="text-xs font-bold text-[#17458F]">İlgililerin tümü için yararlı mı?</p>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Bebek için sağlıklı bir gelecek, aile için huzur, sağlık sistemi için erken tanı verimliliği.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. ROTARY GÖRÜNÜRLÜK & PUBLIC IMAGE VİTRİNİ
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

                {/* Prechtl GMA Module Card */}
                <div className="p-3 rounded-2xl bg-[#0F2D6B] border border-cyan-400/50 space-y-2 shadow-md">
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-cyan-300 font-bold flex items-center gap-1">
                      <Activity size={12} />
                      Prechtl GMA Nöromotor Analiz
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
          7. İNTERAKTİF ROTARY SOSYAL ETKİ SİMÜLATÖRÜ
          ───────────────────────────────────────────────────────────── */}
      <section id="etki-hesaplayici" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F0F5FC] to-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-9">
          
          <div className="text-center space-y-2.5">
            <span className="text-[#17458F] font-mono text-xs font-bold tracking-widest uppercase">
              ÖLÇÜLEBİLİR VE DENETLENEBİLİR ÇIKTI
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Rotary Sosyal Etki Simülatörü
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Kulübünüzün hedeflediği bebek sayısını seçin; projenizin yaratacağı somut sağlık etkisini anında görün.
            </p>
          </div>

          {/* Baby Count Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {[100, 250, 500, 1000, 2500].map((count) => (
              <button
                key={count}
                onClick={() => setBabyCount(count)}
                className={`px-6 py-2.5 rounded-2xl font-black text-sm sm:text-base transition-all cursor-pointer ${
                  babyCount === count
                    ? "bg-[#17458F] text-white shadow-lg shadow-[#17458F]/30 scale-105"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-300"
                }`}
              >
                {count >= 1000 ? `${count / 1000}K Bebek` : `${count} Bebek`}
              </button>
            ))}
          </div>

          {/* Dynamic Impact Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-3xl bg-white border border-slate-200 text-center space-y-1.5 shadow-sm">
              <div className="text-3xl sm:text-4xl font-black text-[#17458F] font-mono">
                {gmaScans.toLocaleString("tr-TR")}
              </div>
              <p className="text-xs font-bold text-[#0067C8] uppercase tracking-wider">
                Prechtl GMA Taraması
              </p>
              <p className="text-[11px] text-slate-500">
                0–6 ay döneminde video tabanlı nöromotor izlem sayısı
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-amber-50/70 border border-[#F7A81B] text-center space-y-1.5 shadow-sm relative overflow-hidden">
              <div className="text-3xl sm:text-4xl font-black text-[#B87A00] font-mono">
                ~{earlyDetectedRisks} Bebek
              </div>
              <p className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                Erken Teşhis Potansiyeli
              </p>
              <p className="text-[11px] text-slate-600">
                Serebral palsi veya gelişim riski erken evrede yakalanan vaka
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-slate-200 text-center space-y-1.5 shadow-sm">
              <div className="text-3xl sm:text-4xl font-black text-[#00A2E0] font-mono">
                {pediatricHours.toLocaleString("tr-TR")}
              </div>
              <p className="text-xs font-bold text-[#007AA8] uppercase tracking-wider">
                7/24 Rehberlik Seansı
              </p>
              <p className="text-[11px] text-slate-500">
                Uykusuz gecelerde anne ve babaya verilen pediatrik cevap
              </p>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-slate-200 text-center space-y-1.5 shadow-sm">
              <div className="text-3xl sm:text-4xl font-black text-[#009739] font-mono">
                %100
              </div>
              <p className="text-xs font-bold text-[#009739] uppercase tracking-wider">
                Şeffaf Raporlanabilirlik
              </p>
              <p className="text-[11px] text-slate-500">
                Rotary Vakfı ve Guvernörlük için hazır denetim çıktısı
              </p>
            </div>

          </div>

          {/* Rotary Impact Statement */}
          <div className="p-5 rounded-3xl bg-[#17458F] border border-[#F7A81B] text-center space-y-1.5 text-white shadow-lg">
            <p className="text-sm font-bold text-white">
              💡 {babyCount} Ailelik bir Rotary projesi ile yalnızca bir teknoloji lisansı vermezsiniz;
            </p>
            <p className="text-xs text-amber-200">
              Ömür boyu yatağa veya tekerlekli sandalyeye bağımlı kalma riski taşıyan bebeklerin ilk 6 ayda hekime yönlendirilmesini sağlayarak <strong>bir insan hayatının rotasını değiştirirsiniz.</strong>
            </p>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. ROTARY FONLAMA VE HİBE MODELLERİ (3 PAKET)
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
                  <li className="flex items-center gap-2">✓ 0-6 ay GMA hareket analizi taraması</li>
                  <li className="flex items-center gap-2">✓ Pediatrik ön değerlendirme & gelişim takibi</li>
                  <li className="flex items-center gap-2">✓ 7/24 dijital aile rehberliği</li>
                  <li className="flex items-center gap-2">✓ Kulüp yönetim paneli erişimi</li>
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
          9. SADE & ŞIK KURUMSAL İLETİŞİM ŞERİDİ
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
          10. ROTARY FOOTER
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
