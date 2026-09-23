"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  Play,
  Pause,
  Award,
  Activity,
  Smartphone,
  ShieldCheck,
  Scale,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2,
  Heart
} from "lucide-react";

// Official Rotary Wheel SVG
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
      <circle cx="50" cy="50" r="8" fill="#17458F" />
      <rect x="47.5" y="42" width="5" height="6" fill="#17458F" />
    </svg>
  );
}

interface RotaryEcosystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RotaryEcosystemModal({ isOpen, onClose }: RotaryEcosystemModalProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Auto progression every 4 seconds when playing
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4200);
    return () => clearInterval(timer);
  }, [isOpen, isPlaying]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const steps = [
    {
      id: 0,
      title: "1. Rotary Kulüp Destekleri",
      subtitle: "Hibe, Sponsorluk & Sosyal Adalet Gücü",
      badge: "KENDİNDEN ÖNCE HİZMET",
      badgeColor: "bg-[#F7A81B]/20 text-[#B87A00] border-[#F7A81B]/50",
      accentBg: "from-[#F7A81B]/15 to-amber-500/5",
      accentBorder: "border-[#F7A81B]",
      accentText: "text-[#B87A00]",
      glowColor: "rgba(247, 168, 27, 0.4)",
      headline: "Rotaryenlerin İyilik Hareketi Bebeklere Umut Oluyor",
      desc: "Rotary Kulübü bütçeleri, District Grant ve Global Grant eşleştirmeli fonlarıyla yüzlerce ailenin evine yapay zekâ destekli sağlık güvencesi %100 ücretsiz ulaştırılır.",
      icon: (
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#F7A81B]/25 blur-xl animate-pulse" />
          <div className="text-[#F7A81B] animate-[spin_20s_linear_infinite]">
            <RotaryWheelInsignia className="w-24 h-24 drop-shadow-lg" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[10px] font-black text-white bg-[#17458F] px-2 py-0.5 rounded shadow">
              ROTARY
            </span>
          </div>
        </div>
      ),
      bullets: [
        "Kulübünüz adına %100 ücretsiz aile lisansları",
        "Rotary Vakfı 7 Odak Alanı: Anne ve Çocuk Sağlığı",
        "Canlı şeffaf yönetim ve denetim paneli"
      ]
    },
    {
      id: 1,
      title: "2. Mobil Uygulama Sistemimiz",
      subtitle: "BabySensAI & Prechtl GMA Kinematik Analiz",
      badge: "BİLİMSEL YAPAY ZEKÂ",
      badgeColor: "bg-[#00A2E0]/20 text-[#007AA8] border-[#00A2E0]/50",
      accentBg: "from-[#00A2E0]/15 to-cyan-500/5",
      accentBorder: "border-[#00A2E0]",
      accentText: "text-[#007AA8]",
      glowColor: "rgba(0, 162, 224, 0.4)",
      headline: "Hastaneye Gitmeden, Evden 2 Dakikalık Video ile Tarama",
      desc: "Evde telefonla çekilen kısa videodan bebeğin 18 eklem noktası taranır. Avrupa Prechtl standardındaki hareket analizi ve 7/24 pediatrik yapay zekâ asistanı aileye rehberlik eder.",
      icon: (
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#00A2E0]/20 blur-xl animate-pulse" />
          <div className="relative w-20 h-28 rounded-2xl bg-[#17458F] border-2 border-[#00A2E0] p-2 shadow-xl flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-shimmer-sweep" />
            <div className="flex items-center justify-between border-b border-white/20 pb-1">
              <span className="w-2 h-2 rounded-full bg-[#00A2E0] animate-ping" />
              <span className="text-[8px] font-mono text-cyan-200">GMA AI</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Activity size={22} className="text-cyan-300 animate-pulse" />
              <span className="text-[8px] font-bold text-white mt-1">18 Eklem HUD</span>
            </div>
            <div className="bg-[#00A2E0]/30 rounded py-0.5 text-center text-[7px] text-white font-bold">
              %98.4 Doğruluk
            </div>
          </div>
        </div>
      ),
      bullets: [
        "Prechtl GMA video analizi ile nöromotor tarama",
        "Yapay zekâ destekli pediatrik ön değerlendirmeler",
        "Gece 03:00'te bile kesintisiz 7/24 aile asistanı"
      ]
    },
    {
      id: 2,
      title: "3. Bebek & Erken Teşhis Kalkanı",
      subtitle: "0–6 Ay Geri Dönülemez Müdahale Penceresi",
      badge: "KRİTİK PLASTİSİTE",
      badgeColor: "bg-[#D41367]/20 text-[#A00E4D] border-[#D41367]/50",
      accentBg: "from-[#D41367]/15 to-pink-500/5",
      accentBorder: "border-[#D41367]",
      accentText: "text-[#D41367]",
      glowColor: "rgba(212, 19, 103, 0.4)",
      headline: "İlk 6 Ayda Teşhis: Bir İnsanın Yürümesini Sağlar",
      desc: "Bebek beyninin gelişim hızı (plastisite) ilk 6 ayda zirvededir. Serebral palsi veya motor gerilik bu evrede yakalanıp fizik tedaviye başlandığında, kalıcı sakatlık riski nötralize edilir.",
      icon: (
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#D41367]/25 blur-xl animate-pulse" />
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-rose-100 to-pink-50 p-2 shadow-2xl border-2 border-[#D41367]/40 flex items-center justify-center animate-subtle-float">
            <Image
              src="/images/mascot.png"
              alt="Dijital Büyükanne Bebeği"
              width={72}
              height={72}
              className="w-full h-full object-contain filter drop-shadow-md"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#009739] text-white flex items-center justify-center shadow-lg border-2 border-white">
            <ShieldCheck size={18} />
          </div>
        </div>
      ),
      bullets: [
        "Serebral palsi ve gelişimsel motor risklerin erken tespiti",
        "Zamanında pediatrik fizyoterapi ve hekim yönlendirmesi",
        "Ailede panik yerine bilinçli ve sevgi dolu takip"
      ]
    },
    {
      id: 3,
      title: "4. Engelleri Aşan Aydınlık Bir Gelecek",
      subtitle: "Sosyo-Ekonomik Eşitlik & Bağımsız Yarınlar",
      badge: "KALICI TOPLUMSAL ETKİ",
      badgeColor: "bg-[#009739]/20 text-[#006626] border-[#009739]/50",
      accentBg: "from-[#009739]/15 to-emerald-500/5",
      accentBorder: "border-[#009739]",
      accentText: "text-[#009739]",
      glowColor: "rgba(0, 151, 57, 0.4)",
      headline: "Her Bebeğe Eşit Fırsat, Bağımsız ve Aydınlık Bir Ömür",
      desc: "İster metropolde ister Anadolu'nun bir köyünde doğsun; Rotary ve Dijital Büyükanne sayesinde en ileri yapay zekâ her bebeğe eşit ulaşır. Hedefimiz: Kendi ayakları üzerinde durabilen, tekerlekli sandalyeye mahkûm olmayan nesiller yetiştirmektir.",
      icon: (
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-[#009739]/25 blur-xl animate-pulse" />
          <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#009739] to-emerald-400 text-white shadow-2xl flex flex-col items-center justify-center p-3 text-center border-2 border-white">
            <Scale size={32} className="text-white drop-shadow" />
            <span className="text-[9px] font-black uppercase tracking-wider text-emerald-100 mt-1">
              ADİL EŞİTLİK
            </span>
          </div>
          <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#F7A81B] text-[#17458F] flex items-center justify-center shadow-lg font-black text-xs border-2 border-white">
            ★
          </div>
        </div>
      ),
      bullets: [
        "Maddi durumu ne olursa olsun her bebeğe %100 eşit hak",
        "Ömür boyu yatağa bağımlılığı önleyen erken teşhis gücü",
        "Rotary'nin 'Kendinden Önce Hizmet' mirasının en somut eseri"
      ]
    }
  ];

  const current = steps[activeStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-md animate-fade-in">
      
      {/* Modal Dialog Card */}
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header Bar */}
        <div className="bg-gradient-to-r from-[#17458F] via-[#103E8A] to-[#0A2668] px-5 py-4 text-white flex items-center justify-between border-b border-amber-300/30">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 p-1 flex items-center justify-center text-[#F7A81B]">
              <RotaryWheelInsignia className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F7A81B] bg-white/10 px-2 py-0.5 rounded">
                  ROTARY ORTAKLIK VİZYONU
                </span>
                <span className="text-xs text-cyan-200 font-mono hidden sm:inline">
                  Canlı Ekosistem Haritası
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-white">
                Bebek Sağlığı • Rotary Destekleri • Mobil Yapay Zekâ
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title={isPlaying ? "Durdur" : "Otomatik Oynat"}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-rose-600 text-white transition-colors cursor-pointer"
              aria-label="Kapat"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Creative Slogan Ribbon */}
        <div className="bg-gradient-to-r from-[#FFF9E6] via-[#FFF3D1] to-[#FFF9E6] border-b border-[#F7A81B]/40 px-4 py-2.5 text-center">
          <p className="text-xs sm:text-sm font-extrabold text-[#7A4B00] flex items-center justify-center gap-1.5 flex-wrap">
            <Sparkles size={15} className="text-[#F7A81B] shrink-0" />
            <span>&ldquo;Engelleri Aşan İlk Adımlar: Her Bebeğe Bağımsız ve Aydınlık Bir Gelecek&rdquo;</span>
          </p>
        </div>

        {/* 4 Steps Interactive Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 bg-slate-50 border-b border-slate-200">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setActiveStep(idx);
                  setIsPlaying(false);
                }}
                className={`py-3 px-3 text-left transition-all border-b-2 cursor-pointer relative ${
                  isActive
                    ? `bg-white border-[#17458F] shadow-sm`
                    : "border-transparent hover:bg-slate-100 text-slate-500"
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span
                    className={`w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center shrink-0 ${
                      isActive
                        ? "bg-[#17458F] text-white"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <span className={`text-[11px] font-bold truncate ${isActive ? "text-[#17458F]" : "text-slate-600"}`}>
                    {s.title.split(". ")[1]}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 truncate hidden sm:block">
                  {s.subtitle.split("&")[0]}
                </p>
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-[#F7A81B]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Modal Main Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-gradient-to-b from-white to-slate-50">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Visual Icon / Animation */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-inner">
              {current.icon}
              <div className="mt-4">
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase border ${current.badgeColor}`}>
                  {current.badge}
                </span>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  {current.subtitle}
                </p>
              </div>
            </div>

            {/* Right Detailed Copy */}
            <div className="md:col-span-8 space-y-4 text-left">
              <div className="space-y-1">
                <span className="text-[11px] font-extrabold text-[#17458F] uppercase tracking-wider">
                  AŞAMA {activeStep + 1} / 4
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  {current.headline}
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {current.desc}
              </p>

              {/* Bullet Checklist */}
              <div className="space-y-2 pt-1">
                {current.bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 size={16} className="text-[#009739] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Step Highlights Box */}
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${current.accentBg} border ${current.accentBorder} text-xs text-slate-700 flex items-center justify-between gap-4 mt-2`}>
                <div className="flex items-center gap-2">
                  <Zap size={16} className={current.accentText} />
                  <span>
                    <strong>Rotary Etkisi:</strong> Bu adım, Rotary kulübünüzün kamuoyundaki saygınlığını ve sosyal gücünü pekiştirir.
                  </span>
                </div>
                <button
                  onClick={() => {
                    setActiveStep((prev) => (prev + 1) % 4);
                    setIsPlaying(false);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-white shadow-sm border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 shrink-0 cursor-pointer flex items-center gap-1"
                >
                  <span>Sonraki</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer & CTA Bar */}
        <div className="bg-slate-100 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="w-2 h-2 rounded-full bg-[#009739] animate-pulse" />
            <span>Rotary 2420, 2430 ve 2440. Bölgeler İçin Hazır Protokol Formatı</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href="#etki-hesaplayici"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs text-center transition-all cursor-pointer"
            >
              Simülatörü Gör
            </a>
            <a
              href="mailto:kurumsal@dijitalbuyukanne.com?subject=Rotary%20Kul%C3%BCp%20Ortakl%C4%B1k%20Bilgisi"
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F7A81B] to-amber-500 text-[#17458F] font-black text-xs text-center shadow-md hover:scale-105 transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Kulüp Bilgisi & İletişim</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
