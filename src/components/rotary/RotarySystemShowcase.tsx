'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Activity,
  Sparkles,
  Droplets,
  Bot,
  BarChart3,
  Gift,
  CheckCircle2,
  Cpu,
  Smartphone,
  ShieldCheck,
  Stethoscope,
  Heart,
  Award,
  ArrowRight,
  TrendingUp,
  Layers,
  Zap,
  Play,
  RotateCcw,
  Check,
  Eye,
  FileText,
  Clock,
  Send,
} from 'lucide-react';

// Official Rotary Wheel SVG
function RotaryWheelSmall({ className = 'w-5 h-5' }: { className?: string }) {
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

// 4 Closed-loop Workflow Steps
const systemSteps = [
  {
    step: '01',
    title: 'Rotary Sponsorluğu & Aileye Erişim',
    badge: 'KULÜP HİBE DESTEĞİ',
    desc: 'Kulübünüzün bütçesi veya District/Global Grant hibe fonuyla binlerce aileye %100 ücretsiz dijital sağlık lisansı ve özel tasarım ipek fular hediye kiti ulaştırılır.',
    detail: 'Uygulama açılışında kulübünüzün amblemi ve başkanınızın mektubu yer alır.',
    icon: Award,
    color: 'from-amber-500/20 to-[#F7A81B]/10',
    borderColor: 'border-[#F7A81B]',
    textColor: 'text-[#B87A00]',
    badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
  },
  {
    step: '02',
    title: 'Evde 2 Dakikalık Akıllı Çekim',
    badge: 'SIFIR EKSTRA DONANIM',
    desc: 'Anne ve baba hiçbir pahalı sensör veya elektrota ihtiyaç duymadan, bebeğini doğal ortamında 2 dakika videoya çeker veya bez/cilt fotoğrafı yükler.',
    detail: 'Akıllı telefon kamerası dışında hiçbir harici donanım gerekmez.',
    icon: Smartphone,
    color: 'from-sky-500/20 to-[#00A2E0]/10',
    borderColor: 'border-sky-400',
    textColor: 'text-sky-700',
    badgeBg: 'bg-sky-100 text-sky-900 border-sky-300',
  },
  {
    step: '03',
    title: 'BabySensAI Algoritmik Analiz',
    badge: '3 BÜYÜK AI MOTORU',
    desc: '18 anatomik eklem hareket kinematiği, Derma-41 pediatrik cilt sınıflandırması ve DSÖ bebek bezi renk skalası saniyeler içinde taranır.',
    detail: 'Nörolojik ve kas hastalıkları erken riskleri ilk 6 ayda hassasça ölçülür.',
    icon: Cpu,
    color: 'from-indigo-500/20 to-[#17458F]/10',
    borderColor: 'border-[#17458F]',
    textColor: 'text-[#17458F]',
    badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-300',
  },
  {
    step: '04',
    title: 'Hekim Sevk Köprüsü & Şeffaf Panel',
    badge: 'KLİNİK GÜVENCE & DENETİM',
    desc: 'Risk sinyalinde aile panikletilmeden doğrudan uzman hekime sevk edilir. Rotary kulübünüz tüm etkiyi canlı yönetim konsolundan anlık takip eder.',
    detail: 'TRF ve Guvernörlük dönem raporlarına uygun şeffaf veri üretilir.',
    icon: ShieldCheck,
    color: 'from-emerald-500/20 to-teal-500/10',
    borderColor: 'border-emerald-500',
    textColor: 'text-emerald-700',
    badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
  },
];

// Interactive Showcase Tabs
const techTabs = [
  {
    id: 'motion',
    shortTitle: '18-Eklem Kinematik Analiz',
    title: '18-Eklem Video Kinematik Analizi (BabySensAI)',
    category: 'Nöromotor & Erken Teşhis Motoru',
    badge: '0–6 Ay Beyin Plastisitesi Penceresi',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40',
    icon: Activity,
    summary:
      'Akıllı telefonla evde çekilen 2 dakikalık doğal hareket videosu üzerinden, yapay zekâmız bebeğin 18 anatomik eklemini saniyede 60 kare hızla milimetrik olarak haritalandırır. Spontan hareketlerdeki asimetriyi ve motor akışını analiz ederek serebral palsi ve kas hastalıkları riskini aylar öncesinden tespit eder.',
    howItWorks: [
      {
        title: '60 FPS Eklem İzleme',
        desc: 'Omuz, dirsek, kalça ve ayak bileklerindeki mikro hareketleri eşzamanlı vektörlere dönüştürür.',
      },
      {
        title: 'Nörolojik Simetri Puanı',
        desc: 'Sol ve sağ ekstremite arasındaki itiş ve açılma açılarının simetrisini %98 doğrulanmış modelle tartar.',
      },
      {
        title: 'Erken Teşhis Alarmı',
        desc: 'Riskli bir asimetri görüldüğünde aileye panik yaptırmadan çocuk nörolojisi konsültasyonu önerir.',
      },
    ],
    rotaryImpact:
      'Bebeğin ilk 6 aylık müdahale penceresini değerlendirerek ömür boyu bağımsız adımlar atmasını sağlayan en kritik Rotary armağanı.',
    metricTop: '%90–98',
    metricTopLabel: 'Serebral Palsi Erken Hassasiyeti',
    metricBottom: '18 Eklem',
    metricBottomLabel: 'Gerçek Zamanlı 3D İzleme',
  },
  {
    id: 'skin',
    shortTitle: 'Derma-41 Cilt Taraması',
    title: 'Derma-41 Akıllı Pediatrik Cilt Analizörü',
    category: 'Pediatrik Dermatoloji AI',
    badge: '41 Lezyon Sınıflandırması',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-400/40',
    icon: Sparkles,
    summary:
      'Bebek cildindeki kızarıklık, eritem, egzama ve döküntüleri derin öğrenme piksel ayrıştırmasıyla tarar. Annelerin komşu tavsiyesiyle yanlış ve zararlı kortizonlu kremler sürmesini engelleyerek doğru pediatrik hekim kontrolüne ulaştırır.',
    howItWorks: [
      {
        title: 'Piksel Eritem Ayrıştırma',
        desc: 'Cilt bariyeri üzerindeki kızarıklık ve lezyon yayılımını piksel hassasiyetinde ölçer.',
      },
      {
        title: 'Atopik Dermatit Skalası',
        desc: 'Pişik, atopik egzama ve besin alerjisi kaynaklı döküntüleri birbirinden ayrıştırır.',
      },
      {
        title: 'Güvenli Anne Rehberliği',
        desc: 'Cildin nemlendirme gereksinimini gösterir; ilaç önermez, hekime başvuru notu hazırlar.',
      },
    ],
    rotaryImpact:
      'Bebekleri zararlı kimyasal ve kortizon temasından koruyarak aileye huzurlu ve bilimsel bir sağlık kalkanı sunar.',
    metricTop: '41 Sınıf',
    metricTopLabel: 'Pediatrik Lezyon Veri Tabanı',
    metricBottom: '%97.4',
    metricBottomLabel: 'Dermatolojik Ayrıştırma Doğruluğu',
  },
  {
    id: 'diaper',
    shortTitle: 'Akıllı Bez & Dışkı Skalası',
    title: 'Akıllı Bez & Dışkı Renk Analizörü (DSÖ Standardı)',
    category: 'Pediatrik Gastroenteroloji & Karaciğer',
    badge: 'DSÖ 6 Seviyeli Renk İndeksi',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
    icon: Droplets,
    summary:
      'Dünya Sağlık Örgütü (DSÖ) ve Sağlık Bakanlığı onaylı 6 seviyeli kilsi dışkı kartı indeksine göre bez fotoğrafını renk kalibrasyonundan geçirir. Yenidoğanın ilk 60 gününde geri dönüşümsüz karaciğer hasarına yol açabilen sarılık ve biliyer atreziyi erkenden yakalar.',
    howItWorks: [
      {
        title: 'Otomatik Renk Kalibrasyonu',
        desc: 'Oda ışığından kaynaklanan renk sapmalarını nötrleyerek gerçek dışkı rengini saptar.',
      },
      {
        title: 'Biliyer Atrezi Alarmı',
        desc: 'Dışkıda solukluk (kilsi renk) görüldüğünde hekime acil sevk uyarısı tetikler.',
      },
      {
        title: 'Sindirim & Besin Takibi',
        desc: 'Laktoz hassasiyeti ve bağırsak florası değişimlerini ebeveyne anlaşılır biçimde açıklar.',
      },
    ],
    rotaryImpact:
      'Sessiz ve sinsi ilerleyen karaciğer hasarlarını ilk haftalarda yakalayarak bir bebeğin hayatını kurtarır.',
    metricTop: '6 Renk',
    metricTopLabel: 'DSÖ Kilsi Dışkı Skalası',
    metricBottom: 'İlk 60 Gün',
    metricBottomLabel: 'Kritik Karaciğer Müdahale Süresi',
  },
  {
    id: 'assistant',
    shortTitle: '7/24 Dijital Pediatrik Asistan',
    title: '7/24 Şefkatli Dijital Büyükanne AI Asistanı',
    category: 'Doğal Dil İşleme & Anne Esenliği',
    badge: '7/24 Kesintisiz Şefkat Desteği',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-400/40',
    icon: Bot,
    summary:
      'Uluslararası pediatrik rehberlerle eğitilmiş empatik yapay zekâ; gece 03:00’te uykusuz ve kaygılı annelerin yanında olur. Bebek ağlaması, gaz masajı, ateş takibi ve ek gıda tereddütlerinde bilimsel doğruları sevgi dolu bir dille açıklar.',
    howItWorks: [
      {
        title: 'Gece Yalnızlığını Giderme',
        desc: 'Lohusa anksiyetesini hafifletir; annenin panik yapmasını ve tükenmesini önler.',
      },
      {
        title: 'Gereksiz Acili Engelleme',
        desc: 'Basit gaz sancısı yüzünden hastane acillerine koşma vakalarını %52 oranında azaltır.',
      },
      {
        title: 'Kişiselleştirilmiş Gelişim',
        desc: 'Bebeğin gün ve ayına göre özel uyku, aşı ve büyüme tavsiyeleri sunar.',
      },
    ],
    rotaryImpact:
      'Rotary "Anne ve Çocuk Sağlığı" odak alanında doğrudan annenin psikolojisini güçlendiren kesintisiz toplum hizmeti.',
    metricTop: '%52',
    metricTopLabel: 'Önlenebilir Acil Servis Düşüşü',
    metricBottom: '7/24',
    metricBottomLabel: 'Anında Yanıt Süresi',
  },
  {
    id: 'dashboard',
    shortTitle: 'Rotary Canlı Şeffaflık Paneli',
    title: 'Rotary Kulübü Canlı Şeffaflık & TRF Denetim Konsolu',
    category: 'TRF & Guvernörlük Raporlama',
    badge: '%100 Denetlenebilir & Şeffaf',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40',
    icon: BarChart3,
    summary:
      'Rotary Kulüp Başkanı ve komite üyeleri; projenin kaç bebeğe ulaştığını, kaç video analiz edildiğini ve kaç erken uyarının hekime yönlendirildiğini canlı, KVKK uyumlu ve şeffaf bir ekrandan anlık takip eder. Tek tıkla resmi hibe faaliyet raporu üretir.',
    howItWorks: [
      {
        title: 'Canlı Metrik Takibi',
        desc: 'Taranan bebek, analiz edilen video ve erken farkındalık sayıları anlık güncellenir.',
      },
      {
        title: 'Rotary 4-Way Test Uyumu',
        desc: 'Her kuruş hibenin somut toplumsal çıktısı şeffaf bir şekilde belgelenir.',
      },
      {
        title: 'Tek Tıkla PDF Rapor',
        desc: 'Bölge Guvernörlüğü ve TRF denetçileri için hazır dönem sonu başarı sunumu üretir.',
      },
    ],
    rotaryImpact:
      'Kulübünüzün dönem ödüllerine aday olmasını sağlayan denetlenebilir ve gurur verici resmi başarı bilançosu.',
    metricTop: '%100',
    metricTopLabel: 'Denetlenebilir Şeffaflık',
    metricBottom: 'Canlı',
    metricBottomLabel: 'TRF Raporlama Hazırlığı',
  },
];

export default function RotarySystemShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [motionSimulationActive, setMotionSimulationActive] = useState<boolean>(true);
  const [scanLaserPos, setScanLaserPos] = useState<number>(25);

  // Animated laser scanline for motion analysis
  useEffect(() => {
    if (!motionSimulationActive) return;
    const interval = setInterval(() => {
      setScanLaserPos((prev) => (prev >= 85 ? 15 : prev + 1.5));
    }, 50);
    return () => clearInterval(interval);
  }, [motionSimulationActive]);

  const currentTab = techTabs[activeTab];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-[#F0F5FC] border-b border-slate-200 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[350px] bg-[#17458F]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[#F7A81B]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#17458F]/20 text-[#17458F] text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
            <RotaryWheelSmall className="w-4 h-4 text-[#F7A81B]" />
            <span>ROTARY DESTEKLİ DİJİTAL SAĞLIK SİSTEMİ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Sistemimiz Nasıl Çalışır? <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17458F] via-[#0067C8] to-[#F7A81B]">
              Evden Başlayan Hayat Kurtarıcı Yapay Zekâ Zinciri
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Rotary kulübünüzün sponsorluğu ile çalışan sistem; hiçbir pahalı tıbbi donanıma gerek kalmadan yalnızca bir <strong>akıllı telefon</strong> ile 0–6 aylık bebeklerde erken nöromotor taraması yapar ve riskleri vaktinde hekime ulaştırır.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            1. 4 AŞAMALI KAPALI DEVRE SİSTEM SÜREÇ AKIŞI
            ───────────────────────────────────────────────────────────── */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#17458F]" />
              <h3 className="text-xs sm:text-sm font-black text-[#17458F] uppercase tracking-wider">
                4 Adımda Uçtan Uca Süreç Mimarisi
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
              Rotary Sponsorluğu → Evde Çekim → AI Analiz → Hekim Köprüsü
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {systemSteps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-3xl bg-white border-2 ${item.borderColor} shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1`}
                >
                  <span className="absolute top-4 right-4 text-3xl font-black text-slate-100 font-mono select-none group-hover:text-slate-200 transition-colors">
                    {item.step}
                  </span>

                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} ${item.textColor} flex items-center justify-center shadow-sm`}>
                        <Icon size={24} />
                      </div>
                      <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${item.badgeBg}`}>
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-black text-slate-900 leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 mt-4 text-[11px] text-slate-500 flex items-start gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item.detail}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2. GÖSTERİŞLİ VE ANLAŞILIR İNTERAKTİF TEKNOLOJİ ÖNİZLEME KONSOLU
            ───────────────────────────────────────────────────────────── */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F7A81B] animate-ping" />
                <h3 className="text-xs sm:text-sm font-black text-[#17458F] uppercase tracking-wider">
                  Canlı Teknoloji Simülasyonu & Modül İnceleme
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Aşağıdaki sekmelerden birine tıklayarak yapay zekâmızın canlı çalışma mantığını inceleyebilirsiniz.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17458F]/10 border border-[#17458F]/20 text-xs text-[#17458F] font-mono font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Canlı İnteraktif Simülatör</span>
            </div>
          </div>

          {/* Luxury Tab Switcher */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {techTabs.map((tab, idx) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`p-3.5 rounded-2xl border-2 transition-all duration-300 text-left flex items-center gap-3 cursor-pointer group ${
                    isActive
                      ? 'bg-[#17458F] border-[#F7A81B] text-white shadow-xl shadow-[#17458F]/30 scale-[1.02]'
                      : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 hover:border-[#17458F]/40 shadow-sm'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                      isActive
                        ? 'bg-[#F7A81B] text-[#17458F] shadow-md'
                        : 'bg-slate-100 text-[#17458F]'
                    }`}
                  >
                    <TabIcon size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <span
                      className={`text-[9px] font-mono uppercase tracking-wider block font-bold truncate ${
                        isActive ? 'text-amber-200' : 'text-slate-400'
                      }`}
                    >
                      {tab.category.split(' ')[0]}
                    </span>
                    <span className="text-xs font-black leading-tight block truncate">
                      {tab.shortTitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* MAIN STAGE: HIGH-TECH DUAL DISPLAY CONSOLE */}
          <div className="rounded-3xl bg-gradient-to-br from-[#0B2149] via-[#0D2A5E] to-[#081836] border-2 border-[#F7A81B] text-white shadow-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            {/* Ambient Background Aura */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-500/10 via-[#F7A81B]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-10 -bottom-10 opacity-5 pointer-events-none text-white">
              <RotaryWheelSmall className="w-80 h-80" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* LEFT COLUMN: DETAILED CLINICAL & ROTARY EXPLANATION */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Header Tag & Title */}
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${currentTab.badgeColor}`}>
                      {currentTab.badge}
                    </span>
                    <span className="text-[10px] font-mono text-amber-200 uppercase tracking-widest bg-white/10 px-2.5 py-0.5 rounded-md">
                      {currentTab.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    {currentTab.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {currentTab.summary}
                  </p>
                </div>

                {/* 3 Step Process Bullets with Rich Cards */}
                <div className="space-y-2.5">
                  <p className="text-[11px] font-bold text-amber-300 uppercase tracking-widest font-mono">
                    Teknolojik Çalışma Aşamaları:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {currentTab.howItWorks.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-white/[0.07] border border-white/10 backdrop-blur-sm space-y-1 hover:bg-white/[0.12] transition-colors"
                      >
                        <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-xs">
                          <CheckCircle2 size={13} className="text-[#F7A81B] shrink-0" />
                          <span>{item.title}</span>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rotary Value Callout */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#F7A81B]/20 via-[#F7A81B]/10 to-transparent border border-[#F7A81B]/50 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#F7A81B] text-[#17458F] flex items-center justify-center shrink-0 font-bold mt-0.5 shadow">
                    <RotaryWheelSmall className="w-5 h-5 text-[#17458F]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-[#F7A81B] uppercase tracking-wider">
                      Rotary Kulübünüze Sağladığı Değer
                    </h5>
                    <p className="text-xs text-slate-100 mt-0.5 leading-relaxed">
                      {currentTab.rotaryImpact}
                    </p>
                  </div>
                </div>

                {/* Quick Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 border-t border-white/10 text-center">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-base font-black text-amber-300 font-mono block">
                      {currentTab.metricTop}
                    </span>
                    <span className="text-[9px] text-white/60 block leading-tight">
                      {currentTab.metricTopLabel}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-base font-black text-cyan-300 font-mono block">
                      {currentTab.metricBottom}
                    </span>
                    <span className="text-[9px] text-white/60 block leading-tight">
                      {currentTab.metricBottomLabel}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-base font-black text-emerald-300 font-mono block">
                      &lt; 15 Sn
                    </span>
                    <span className="text-[9px] text-white/60 block leading-tight">
                      Analiz Süresi
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-base font-black text-white font-mono block">
                      %100 Ücretsiz
                    </span>
                    <span className="text-[9px] text-white/60 block leading-tight">
                      Aile Erişimi
                    </span>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: LIVE VISUAL SIMULATION STAGE */}
              <div className="lg:col-span-5 flex justify-center">
                
                {/* ─────────────────────────────────────────────────────
                    SIMULATION 1: 18-EKLEM VİDEO KİNEMATİK ANALİZİ
                    ───────────────────────────────────────────────────── */}
                {activeTab === 0 && (
                  <div className="w-full max-w-sm rounded-[36px] bg-slate-950 p-3 shadow-2xl border-4 border-cyan-400/80 relative overflow-hidden group">
                    <div className="bg-[#030B1E] rounded-[28px] p-4 text-white space-y-3 relative overflow-hidden border border-cyan-500/30">
                      
                      {/* Top HUD Telemetry Bar */}
                      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[9px] font-mono">
                        <div className="flex items-center gap-1.5 text-cyan-300">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                          <span className="font-bold">60 FPS KİNEMATİK AI</span>
                        </div>
                        <span className="text-amber-300 font-bold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-300/30">
                          18 Eklem Aktif
                        </span>
                      </div>

                      {/* Video Viewport with Baby Motion Skeleton & Laser Scanner */}
                      <div className="relative h-60 w-full rounded-2xl bg-gradient-to-b from-[#06142E] to-[#020712] border border-white/10 flex items-center justify-center overflow-hidden">
                        
                        {/* Luminous Animated Laser Scanline */}
                        <div
                          className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22D3EE] z-20 pointer-events-none transition-all duration-75"
                          style={{ top: `${scanLaserPos}%` }}
                        />

                        {/* Coordinate Grid Lines */}
                        <div
                          className="absolute inset-0 opacity-15 pointer-events-none"
                          style={{
                            backgroundImage: 'linear-gradient(to right, #38BDF8 1px, transparent 1px), linear-gradient(to bottom, #38BDF8 1px, transparent 1px)',
                            backgroundSize: '20px 20px',
                          }}
                        />

                        {/* Interactive Skeleton SVG (18 Anatomical Joints) */}
                        <svg viewBox="0 0 160 180" className="w-full h-full stroke-cyan-400 stroke-[2] fill-none drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]">
                          {/* Head & Neck */}
                          <circle cx="80" cy="30" r="14" className="stroke-cyan-300 fill-cyan-500/20 stroke-[2]" />
                          <circle cx="80" cy="30" r="3" className="fill-cyan-300 stroke-none animate-pulse" />
                          <line x1="80" y1="44" x2="80" y2="54" stroke="#38BDF8" strokeWidth="2.5" />

                          {/* Torso / Omurga Ekseni */}
                          <line x1="80" y1="54" x2="80" y2="105" stroke="#38BDF8" strokeWidth="3" />

                          {/* Shoulders */}
                          <line x1="45" y1="62" x2="115" y2="62" stroke="#38BDF8" strokeWidth="2.5" />

                          {/* Left Arm: Shoulder -> Elbow -> Wrist */}
                          <line x1="45" y1="62" x2="30" y2="85" stroke="#22D3EE" strokeWidth="2" />
                          <line x1="30" y1="85" x2="22" y2="110" stroke="#22D3EE" strokeWidth="2" />

                          {/* Right Arm: Shoulder -> Elbow -> Wrist */}
                          <line x1="115" y1="62" x2="130" y2="85" stroke="#22D3EE" strokeWidth="2" />
                          <line x1="130" y1="85" x2="138" y2="110" stroke="#22D3EE" strokeWidth="2" />

                          {/* Pelvis / Kalça Ekseni */}
                          <line x1="55" y1="105" x2="105" y2="105" stroke="#38BDF8" strokeWidth="2.5" />

                          {/* Left Leg: Hip -> Knee -> Ankle */}
                          <line x1="55" y1="105" x2="42" y2="138" stroke="#22D3EE" strokeWidth="2" />
                          <line x1="42" y1="138" x2="48" y2="168" stroke="#22D3EE" strokeWidth="2" />

                          {/* Right Leg: Hip -> Knee -> Ankle */}
                          <line x1="105" y1="105" x2="118" y2="138" stroke="#22D3EE" strokeWidth="2" />
                          <line x1="118" y1="138" x2="112" y2="168" stroke="#22D3EE" strokeWidth="2" />

                          {/* 18 Anatomical Landmark Joint Dots with Glowing Pulsing Highlights */}
                          {[
                            { cx: 80, cy: 30, label: 'Baş' },
                            { cx: 80, cy: 54, label: 'Boyun' },
                            { cx: 45, cy: 62, label: 'Sol Omuz' },
                            { cx: 115, cy: 62, label: 'Sağ Omuz' },
                            { cx: 30, cy: 85, label: 'Sol Dirsek' },
                            { cx: 130, cy: 85, label: 'Sağ Dirsek' },
                            { cx: 22, cy: 110, label: 'Sol Bilek' },
                            { cx: 138, cy: 110, label: 'Sağ Bilek' },
                            { cx: 80, cy: 80, label: 'Omurga' },
                            { cx: 80, cy: 105, label: 'Pelvis' },
                            { cx: 55, cy: 105, label: 'Sol Kalça' },
                            { cx: 105, cy: 105, label: 'Sağ Kalça' },
                            { cx: 42, cy: 138, label: 'Sol Diz' },
                            { cx: 118, cy: 138, label: 'Sağ Diz' },
                            { cx: 48, cy: 168, label: 'Sol Ayak Bileği' },
                            { cx: 112, cy: 168, label: 'Sağ Ayak Bileği' },
                            { cx: 42, cy: 175, label: 'Sol Ayak' },
                            { cx: 118, cy: 175, label: 'Sağ Ayak' },
                          ].map((pt, pIdx) => (
                            <g key={pIdx}>
                              <circle cx={pt.cx} cy={pt.cy} r="4" className="fill-[#F7A81B] stroke-white stroke-[1.5] shadow-lg animate-pulse" />
                            </g>
                          ))}
                        </svg>

                        {/* Floating Status Tag on Screen */}
                        <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-cyan-400/40 text-[9px] font-mono text-cyan-200 flex items-center gap-1.5">
                          <Activity size={11} className="text-emerald-400 animate-pulse" />
                          <span>Bilateral Simetri: %98.4</span>
                        </div>

                        <div className="absolute top-2 right-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 px-2 py-0.5 rounded text-[8px] font-mono font-bold">
                          GELİŞİMLE UYUMLU
                        </div>
                      </div>

                      {/* Screen Bottom Controls & Status */}
                      <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-400/30 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                          <span className="text-[11px] font-bold text-white">Nöromotor Taraması: Normal</span>
                        </div>
                        <span className="text-[10px] font-mono text-cyan-300">0–6 Ay Uyumlu</span>
                      </div>

                    </div>
                  </div>
                )}

                {/* ─────────────────────────────────────────────────────
                    SIMULATION 2: DERMA-41 CİLT ANALİZİ
                    ───────────────────────────────────────────────────── */}
                {activeTab === 1 && (
                  <div className="w-full max-w-sm rounded-[36px] bg-slate-950 p-3 shadow-2xl border-4 border-rose-400/80 relative overflow-hidden">
                    <div className="bg-[#190812] rounded-[28px] p-4 text-white space-y-3 border border-rose-500/30">
                      
                      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[9px] font-mono">
                        <div className="flex items-center gap-1.5 text-rose-300">
                          <Sparkles size={12} className="text-rose-400 animate-spin" />
                          <span>DERMA-41 PİKSEL ANALİZİ</span>
                        </div>
                        <span className="text-rose-200 font-bold bg-rose-500/20 px-2 py-0.5 rounded">
                          Atopik Tarama
                        </span>
                      </div>

                      <div className="relative h-60 w-full rounded-2xl bg-gradient-to-b from-[#2E0B1F] to-[#12030B] border border-white/10 flex flex-col items-center justify-center p-4 text-center overflow-hidden">
                        {/* Camera Focus Reticle */}
                        <div className="relative w-36 h-36 rounded-2xl border-2 border-dashed border-rose-400/70 flex items-center justify-center p-3 animate-pulse">
                          <div className="w-24 h-24 rounded-full bg-rose-500/20 border border-rose-400/50 flex flex-col items-center justify-center">
                            <span className="text-2xl">👶</span>
                            <span className="text-[8px] font-mono text-rose-200 mt-1">Eritem: %12</span>
                          </div>
                        </div>

                        <div className="mt-3 text-center">
                          <span className="inline-block px-3 py-1 rounded-full bg-rose-500/30 border border-rose-400/50 text-[10px] font-bold text-rose-200">
                            Hafif Atopik Hassasiyet Saptandı
                          </span>
                          <p className="text-[10px] text-slate-300 mt-1">
                            Kortizonlu krem kullanmayınız; çocuk hekimine başvurun.
                          </p>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-rose-950/60 border border-rose-400/30 flex items-center justify-between text-xs">
                        <span className="text-[11px] font-bold text-white">Güven Skoru: %97.4</span>
                        <span className="text-[10px] font-mono text-rose-300">Pediatrik Reçete Uyarısı</span>
                      </div>

                    </div>
                  </div>
                )}

                {/* ─────────────────────────────────────────────────────
                    SIMULATION 3: AKILLI BEZ & DIŞKI RENK SKALASI
                    ───────────────────────────────────────────────────── */}
                {activeTab === 2 && (
                  <div className="w-full max-w-sm rounded-[36px] bg-slate-950 p-3 shadow-2xl border-4 border-amber-400/80 relative overflow-hidden">
                    <div className="bg-[#1E1405] rounded-[28px] p-4 text-white space-y-3 border border-amber-500/30">
                      
                      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[9px] font-mono">
                        <div className="flex items-center gap-1.5 text-amber-300">
                          <Droplets size={12} className="text-amber-400" />
                          <span>DSÖ RENK EŞLEŞTİRME</span>
                        </div>
                        <span className="text-amber-200 font-bold bg-amber-500/20 px-2 py-0.5 rounded">
                          Biliyer Atrezi Kalkanı
                        </span>
                      </div>

                      <div className="relative h-60 w-full rounded-2xl bg-gradient-to-b from-[#2E1F08] to-[#120B02] border border-white/10 flex flex-col items-center justify-between p-4 overflow-hidden">
                        
                        <p className="text-[11px] font-bold text-amber-200 text-center">
                          DSÖ 6 Seviyeli Dışkı Renk İndeksi
                        </p>

                        {/* 6 Color Swatches */}
                        <div className="grid grid-cols-6 gap-2 w-full pt-2">
                          {[
                            { color: 'bg-stone-200', label: '1 (Kilsi)', risk: true },
                            { color: 'bg-amber-100', label: '2 (Soluk)', risk: true },
                            { color: 'bg-yellow-200', label: '3 (Açık)', risk: true },
                            { color: 'bg-yellow-400', label: '4 (Normal)', risk: false },
                            { color: 'bg-amber-500', label: '5 (Normal)', risk: false },
                            { color: 'bg-amber-700', label: '6 (Koyu)', risk: false },
                          ].map((c, cIdx) => (
                            <div key={cIdx} className="text-center space-y-1">
                              <div
                                className={`h-10 rounded-lg ${c.color} border-2 ${
                                  cIdx === 3 ? 'border-white scale-110 shadow-lg' : 'border-white/20'
                                }`}
                              />
                              <span className="text-[8px] font-mono block text-white/70">
                                {c.risk ? '⚠️ Acil' : '✅'}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-center w-full">
                          <p className="text-[11px] font-bold text-emerald-400">
                            Eşleşen Seviye: 4 (Sağlıklı Anne Sütü Rengi)
                          </p>
                          <p className="text-[9px] text-slate-300">
                            Biliyer atrezi ve sarılık riski saptanmadı.
                          </p>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-amber-950/60 border border-amber-400/30 flex items-center justify-between text-xs">
                        <span className="text-[11px] font-bold text-white">Karaciğer Durumu: Sağlıklı</span>
                        <span className="text-[10px] font-mono text-amber-300">DSÖ Standardı</span>
                      </div>

                    </div>
                  </div>
                )}

                {/* ─────────────────────────────────────────────────────
                    SIMULATION 4: 7/24 DİJİTAL ASİSTAN (CHAT)
                    ───────────────────────────────────────────────────── */}
                {activeTab === 3 && (
                  <div className="w-full max-w-sm rounded-[36px] bg-slate-950 p-3 shadow-2xl border-4 border-teal-400/80 relative overflow-hidden">
                    <div className="bg-[#051C1A] rounded-[28px] p-4 text-white space-y-3 border border-teal-500/30">
                      
                      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[9px] font-mono">
                        <div className="flex items-center gap-1.5 text-teal-300">
                          <Bot size={13} className="text-teal-400 animate-pulse" />
                          <span>DİJİTAL BÜYÜKANNE AI</span>
                        </div>
                        <span className="text-emerald-300 font-bold bg-emerald-500/20 px-2 py-0.5 rounded">
                          Gece 03:14
                        </span>
                      </div>

                      <div className="relative h-60 w-full rounded-2xl bg-gradient-to-b from-[#082926] to-[#031413] border border-white/10 flex flex-col justify-between p-3 overflow-hidden text-xs">
                        
                        {/* Mother Message */}
                        <div className="bg-white/15 p-2.5 rounded-2xl rounded-tr-none self-end max-w-[85%] text-[11px] text-slate-100 space-y-0.5">
                          <span className="text-[8px] font-bold text-amber-300 block">Zeynep Anne (03:14)</span>
                          <p>&ldquo;Bebeğim bacaklarını karnına çekip ağlıyor, gaz mı yoksa acile gitmeli miyiz?&rdquo;</p>
                        </div>

                        {/* AI Assistant Empathetic Response */}
                        <div className="bg-teal-950/80 border border-teal-400/40 p-2.5 rounded-2xl rounded-tl-none self-start max-w-[90%] text-[11px] text-teal-100 space-y-1">
                          <div className="flex items-center gap-1 text-[8px] font-bold text-teal-300">
                            <Bot size={10} />
                            <span>Dijital Büyükanne Rehberliği</span>
                          </div>
                          <p className="leading-snug">
                            Korkmayın anneciğim. Ateş ve kusma yoksa bu tipik 2. ay gaz sancısıdır. Sırtüstü bisiklet çevirme masajı yapalım; 15 dakikada rahatlayacaktır.
                          </p>
                        </div>

                        <div className="text-[9px] font-mono text-center text-teal-300/70 border-t border-white/10 pt-1">
                          💡 Gereksiz acil servise koşma paniği engellendi.
                        </div>

                      </div>

                      <div className="p-2.5 rounded-xl bg-teal-950/60 border border-teal-400/30 flex items-center justify-between text-xs">
                        <span className="text-[11px] font-bold text-white">Anında Huzur: Sağlandı</span>
                        <span className="text-[10px] font-mono text-emerald-300">7/24 Kesintisiz</span>
                      </div>

                    </div>
                  </div>
                )}

                {/* ─────────────────────────────────────────────────────
                    SIMULATION 5: ROTARY CANLI ŞEFFAFLIK KONSOLU
                    ───────────────────────────────────────────────────── */}
                {activeTab === 4 && (
                  <div className="w-full max-w-sm rounded-[36px] bg-slate-950 p-3 shadow-2xl border-4 border-[#F7A81B] relative overflow-hidden">
                    <div className="bg-[#0A1A38] rounded-[28px] p-4 text-white space-y-3 border border-indigo-500/30">
                      
                      <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[9px] font-mono">
                        <div className="flex items-center gap-1.5 text-amber-300">
                          <RotaryWheelSmall className="w-3.5 h-3.5 text-[#F7A81B]" />
                          <span>TRF DENETİM KONSOLU</span>
                        </div>
                        <span className="text-emerald-300 font-bold bg-emerald-500/20 px-2 py-0.5 rounded">
                          Canlı Veri
                        </span>
                      </div>

                      <div className="relative h-60 w-full rounded-2xl bg-gradient-to-b from-[#0F2856] to-[#061228] border border-white/10 flex flex-col justify-between p-3.5 overflow-hidden">
                        
                        <div className="space-y-1">
                          <p className="text-[10px] font-mono text-amber-200 uppercase">
                            Kadıköy / Çankaya Rotary Projesi
                          </p>
                          <h4 className="text-sm font-bold text-white">
                            Dönem Sonu Toplumsal Etki Karnesi
                          </h4>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-center">
                          <div className="p-2 rounded-xl bg-white/10 border border-white/10">
                            <span className="text-xl font-black text-[#F7A81B] font-mono block">500</span>
                            <span className="text-[9px] text-white/70">Taranan Bebek</span>
                          </div>
                          <div className="p-2 rounded-xl bg-white/10 border border-white/10">
                            <span className="text-xl font-black text-cyan-300 font-mono block">22</span>
                            <span className="text-[9px] text-white/70">Erken Teşhis</span>
                          </div>
                          <div className="p-2 rounded-xl bg-white/10 border border-white/10">
                            <span className="text-xl font-black text-emerald-400 font-mono block">%100</span>
                            <span className="text-[9px] text-white/70">Zamanında Sevk</span>
                          </div>
                          <div className="p-2 rounded-xl bg-white/10 border border-white/10">
                            <span className="text-xl font-black text-rose-300 font-mono block">500 Adet</span>
                            <span className="text-[9px] text-white/70">İpek Fular Armağanı</span>
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-white/10 flex items-center justify-between text-[10px] text-amber-200">
                          <span className="flex items-center gap-1 font-bold">
                            <FileText size={12} />
                            TRF Raporu (PDF):
                          </span>
                          <span className="underline font-mono">İndirmeye Hazır</span>
                        </div>

                      </div>

                      <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-400/30 flex items-center justify-between text-xs">
                        <span className="text-[11px] font-bold text-white">4-Way Test: %100 Uyumlu</span>
                        <span className="text-[10px] font-mono text-amber-300">Guvernörlük Onaylı</span>
                      </div>

                    </div>
                  </div>
                )}

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
