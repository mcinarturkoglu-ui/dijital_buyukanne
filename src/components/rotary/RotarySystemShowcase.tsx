'use client';

import { useState } from 'react';
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
    detail: 'Akıllı telefon kamerası dışında hiçbir harici maliyet gerekmez.',
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

// 6 Core Technology Modules for Flowing Marquee Track
const technologyModules = [
  {
    id: 'motion',
    title: '18-Eklem Video Kinematik Analizi',
    engine: 'BabySensAI Nöromotor Motoru',
    badge: '0–6 Ay Erken Tanı Penceresi',
    badgeColor: 'bg-cyan-100 text-cyan-900 border-cyan-300',
    accentGradient: 'from-cyan-500 to-[#17458F]',
    icon: Activity,
    stats: '%90–98',
    statsLabel: 'Serebral Palsi Erken Hassasiyeti',
    description:
      'Telefon kamerasıyla çekilen 2 dakikalık doğal hareket videosundan 18 anatomik eklemi saniyede 60 kare hızla takip eder. Spontan hareket akışını ve simetrisini haritalayarak olası nörolojik ve kas hastalıklarını aylar öncesinden yakalar.',
    bullets: [
      'Omuz, dirsek, kalça ve ayak bileği kinematik hız vektörleri',
      'Erken müdahale ile beyin plastisitesi avantajının değerlendirilmesi',
      'Çocuk nörolojisi klinik konsültasyonuna hazır veri seti',
    ],
    rotaryValue:
      'Bir bebeğin hayat boyu tekerlekli sandalyeye bağımlı kalmasını önleyen en hayati Rotary yatırımı.',
    cardBg: 'border-cyan-200 hover:border-cyan-500',
  },
  {
    id: 'skin',
    title: 'Derma-41 Akıllı Pediatrik Cilt Analizi',
    engine: 'Pediatrik Dermatoloji AI',
    badge: '41 Lezyon Sınıflandırması',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-300',
    accentGradient: 'from-rose-500 to-pink-600',
    icon: Sparkles,
    stats: '41 Sınıf',
    statsLabel: 'Bebek Cildi Lezyon Kapsamı',
    description:
      'Bebek cildindeki döküntü, kızarıklık, atopik dermatit ve pişik görüntülerini derin öğrenme piksel ayrıştırmasıyla analiz eder. Annelerin kulaktan dolma bilgilerle yanlış kortizonlu krem kullanmasını engeller.',
    bullets: [
      'Piksel düzeyinde eritem ve lezyon sınır analizi',
      'Atopik egzama ve alerjik reaksiyon ön uyarısı',
      'Güvenli nemlendirme ve hekim kontrol tavsiyesi',
    ],
    rotaryValue:
      'Gereksiz ilaç kullanımını önleyen, anneye güven ve bebeğe anında huzur veren koruyucu destek.',
    cardBg: 'border-rose-200 hover:border-rose-500',
  },
  {
    id: 'diaper',
    title: 'Akıllı Bez & Dışkı Renk Skalası',
    engine: 'Pediatrik Gastroenteroloji AI',
    badge: 'DSÖ 6 Seviyeli Renk İndeksi',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    accentGradient: 'from-[#F7A81B] to-amber-600',
    icon: Droplets,
    stats: '6 Renk',
    statsLabel: 'DSÖ Kilsi Dışkı Kartı Standardı',
    description:
      'Dünya Sağlık Örgütü ve Sağlık Bakanlığı onaylı 6 seviyeli dışkı kartı indeksine göre bez fotoğrafını renk kalibrasyonundan geçirir. Karaciğer yetmezliği, biliyer atrezi ve sarılık belirtilerini ilk 60 günde erkenden saptar.',
    bullets: [
      'Akıllı telefon beyaz dengesi (white balance) kalibrasyonu',
      'Karaciğer ve safra yolu tıkanıklıklarında acil hekim alarmı',
      'Besin intoleransı ve laktoz sindirim takibi',
    ],
    rotaryValue:
      'Biliyer atrezi gibi geri dönüşümsüz karaciğer hasarlarını gün kaybetmeden hekime ulaştıran hayat köprüsü.',
    cardBg: 'border-amber-200 hover:border-amber-500',
  },
  {
    id: 'assistant',
    title: '7/24 Şefkatli Dijital Pediatrik Asistan',
    engine: 'Büyükanne AI Doğal Dil Modeli',
    badge: '24/7 Kesintisiz Aile Rehberliği',
    badgeColor: 'bg-teal-100 text-teal-900 border-teal-300',
    accentGradient: 'from-teal-500 to-[#17458F]',
    icon: Bot,
    stats: '%52',
    statsLabel: 'Önlenebilir Acil Başvurusu Azalması',
    description:
      'Pediatrik tıp kılavuzlarıyla eğitilmiş, sevgi dolu ve bilimsel dijital asistan; gece 03:00’te uykusuz ve kaygılı annelere anında doğru bilgiyi ulaştırır. Gaz sancısı ve basit huzursuzluklarda acil servis paniğini dindirir.',
    bullets: [
      'Doğum sonrası lohusalık anksiyetesini hafifleten psikolojik destek',
      'Aşı takvimi, uyku döngüsü ve ek gıdaya geçiş rehberliği',
      'Tanı koymaz; doğru uzman desteğine köprü kurar',
    ],
    rotaryValue:
      'Anne ve Çocuk Sağlığı odak alanında annenin yalnızlığını ve çaresizliğini ortadan kaldıran şefkat eli.',
    cardBg: 'border-teal-200 hover:border-teal-500',
  },
  {
    id: 'dashboard',
    title: 'Rotary Kulübü Canlı Şeffaflık & Etki Paneli',
    engine: 'TRF & Guvernörlük Denetim Konsolu',
    badge: '100% Şeffaf ve Denetlenebilir',
    badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-300',
    accentGradient: 'from-[#17458F] to-[#0A2540]',
    icon: BarChart3,
    stats: 'Canlı',
    statsLabel: 'KVKK Uyumlu Anonim Metrikler',
    description:
      'Rotary Kulüp Başkanı ve komite üyeleri; projenin kaç bebeğe ulaştığını, kaç video analiz edildiğini ve kaç erken uyarının hekime ulaştırıldığını 7/24 şeffaf bir ekrandan anlık takip eder. Tek tıkla resmi TRF raporu üretir.',
    bullets: [
      'Rotary 4’lü Özdenetim ilkelerine tam sadakat',
      'Guvernörlük ve Bölge Asamblesi dönem sonu sunum dosyası çıktısı',
      'Global Grant ve District Grant hibe kriterleriyle kusursuz uyum',
    ],
    rotaryValue:
      'Kulübünüzün harcadığı her bir kuruşun nereye gittiğini ve hangi hayatı kurtardığını kanıtlayan denetim gücü.',
    cardBg: 'border-indigo-200 hover:border-indigo-500',
  },
  {
    id: 'foulard',
    title: 'Özel Tasarım İpek Fular & Aile Hediye Kiti',
    engine: 'Kurumsal İtibar & Public Image',
    badge: '%100 Saf İpek & Kalıcı Hatıra',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    accentGradient: 'from-[#F7A81B] to-amber-700',
    icon: Gift,
    stats: 'Ömürlük',
    statsLabel: 'Bebek & Anne Hatıra Armağanı',
    description:
      'Projeye dâhil edilen her bebeğe ve annesine, Rotary kulübünüzün sevgisini temsil eden altın yaldızlı amblemli %100 saf ipek bandana ve fular ulaştırılır. Dijital lisans aktivasyon kartı ve başkanınızın mektubu aileye takdim edilir.',
    bullets: [
      'Bebek için nefes alan saten ipek koruyucu boyun bandanası',
      'Anne için zarif ve prestijli Rotary boyun fuları',
      'Bebeğin ilk adımlarında Rotary kulübünüzün kalıcı imzası',
    ],
    rotaryValue:
      'Rotaryenlerin toplumdaki saygınlığını ve şefkatini hanelere taşıyan en zarif kurumsal armağan.',
    cardBg: 'border-amber-300 hover:border-[#F7A81B]',
  },
];

export default function RotarySystemShowcase() {
  const [selectedTech, setSelectedTech] = useState<number>(0);

  // Duplicate for seamless infinite marquee scroll
  const marqueeCards = [...technologyModules, ...technologyModules];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-[#F0F5FC] border-b border-slate-200 relative overflow-hidden">
      {/* Background Ambient Lighting */}
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
            A) 4 AŞAMALI KAPALI DEVRE SİSTEM AKIŞI
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
              Rotary Sponsorluğu → Evde Tarama → AI Analiz → Hekim Sevk
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
                  {/* Step Number Watermark */}
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
            B) KAYAN ZEMİN (INFINITE MARQUEE) — 6 TEKNOLOJİ VE ETKİ MODÜLÜ
            ───────────────────────────────────────────────────────────── */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F7A81B] animate-ping" />
                <h3 className="text-xs sm:text-sm font-black text-[#17458F] uppercase tracking-wider">
                  Sistemi Güçlendiren 6 Temel Teknoloji ve Etki Modülü
                </h3>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Kayan vitrini incelemek için kartların üzerine gelebilirsiniz (üzerine gelindiğinde duraklar).
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-600 font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Canlı Kayan Teknoloji Vitrini</span>
            </div>
          </div>

          {/* INFINITE FLOWING TRACK */}
          <div className="relative w-full overflow-hidden py-4 -mx-4 sm:mx-0">
            {/* Edge Blur Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#F0F5FC] via-[#F0F5FC]/80 to-transparent z-10 pointer-events-none" />

            <div className="flex gap-6 w-max animate-cases-marquee hover:[animation-play-state:paused] px-4">
              {marqueeCards.map((mod, idx) => {
                const Icon = mod.icon;
                return (
                  <div
                    key={`${mod.id}-${idx}`}
                    className={`w-[340px] sm:w-[400px] shrink-0 bg-white rounded-3xl border-2 ${mod.cardBg} shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between group`}
                  >
                    {/* Top Row: Engine Tag & Stat Bubble */}
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${mod.accentGradient} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                            <Icon size={24} />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-slate-400 font-bold block uppercase">
                              {mod.engine}
                            </span>
                            <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${mod.badgeColor}`}>
                              {mod.badge}
                            </span>
                          </div>
                        </div>

                        {/* Stat Badge */}
                        <div className="text-right shrink-0 bg-slate-50 px-3 py-1.5 rounded-2xl border border-slate-200">
                          <span className="text-base font-black text-[#17458F] font-mono block leading-none">
                            {mod.stats}
                          </span>
                          <span className="text-[8px] text-slate-500 font-bold">
                            {mod.statsLabel}
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#17458F] transition-colors leading-snug">
                          {mod.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {mod.description}
                        </p>
                      </div>

                      {/* Bullets */}
                      <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                        {mod.bullets.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2 text-[11px] text-slate-700">
                            <span className="text-[#17458F] font-black mt-0.5">•</span>
                            <span className="leading-tight">{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rotary Specific Value Box */}
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <div className="p-3 rounded-2xl bg-amber-50/70 border border-[#F7A81B]/40 text-xs">
                        <p className="font-bold text-[#B87A00] flex items-center gap-1.5 mb-1">
                          <RotaryWheelSmall className="w-3.5 h-3.5 text-[#F7A81B]" />
                          <span>Rotary Katma Değeri:</span>
                        </p>
                        <p className="text-[11px] text-slate-700 leading-snug">
                          {mod.rotaryValue}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            C) DERİNLEMESİNE İNCELEME KONSOLU (INTERACTIVE DETAIL TAB)
            ───────────────────────────────────────────────────────────── */}
        <div className="bg-gradient-to-br from-[#17458F] via-[#0E3572] to-[#0A2540] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border-2 border-[#F7A81B] relative overflow-hidden">
          {/* Rotary Wheel Background Watermark */}
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none text-white">
            <RotaryWheelSmall className="w-72 h-72" />
          </div>

          <div className="relative z-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#F7A81B] font-bold">
                  İNTERAKTİF TEKNOLOJİ ÖNİZLEME
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {technologyModules[selectedTech].title}
                </h3>
              </div>

              {/* Selector Pills */}
              <div className="flex flex-wrap gap-1.5">
                {technologyModules.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedTech(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedTech === idx
                        ? 'bg-[#F7A81B] text-[#17458F] shadow-md scale-105'
                        : 'bg-white/10 hover:bg-white/20 text-white/80'
                    }`}
                  >
                    {item.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {technologyModules[selectedTech].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/10">
                    <span className="text-[10px] text-amber-300 font-mono block">DOĞRULUK / STANDART</span>
                    <span className="text-lg font-black text-white font-mono">{technologyModules[selectedTech].stats}</span>
                    <span className="text-[9px] text-white/60 block">{technologyModules[selectedTech].statsLabel}</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/10 border border-white/10">
                    <span className="text-[10px] text-cyan-300 font-mono block">KLİNİK REFERANS</span>
                    <span className="text-xs font-bold text-white block mt-1">Uluslararası Tıp Kılavuzları</span>
                    <span className="text-[9px] text-white/60 block">DSÖ & Çocuk Nörolojisi</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/10 border border-white/10">
                    <span className="text-[10px] text-emerald-300 font-mono block">ROTARY UYUMU</span>
                    <span className="text-xs font-bold text-white block mt-1">7 Odak Alanı</span>
                    <span className="text-[9px] text-white/60 block">Anne ve Çocuk Sağlığı</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-black/30 rounded-2xl p-4 border border-white/15 space-y-3">
                <div className="flex items-center justify-between text-xs text-amber-300 font-mono">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Zap size={14} />
                    Canlı Telemetri ve Süreç
                  </span>
                  <span className="text-emerald-400 font-bold">● Aktif Motor</span>
                </div>

                <div className="space-y-2 text-xs text-slate-200">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                    <span>Telefon Kamerası Girişi:</span>
                    <span className="font-mono text-[#F7A81B] font-bold">1080p @ 60 FPS</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                    <span>Analiz Tamamlanma Süresi:</span>
                    <span className="font-mono text-cyan-300 font-bold">&lt; 15 Saniye</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/10">
                    <span>Hekim Sevk Protokolü:</span>
                    <span className="font-mono text-emerald-300 font-bold">Otomatik & Anonim</span>
                  </div>
                </div>

                <p className="text-[11px] text-amber-200/80 italic text-center pt-1">
                  &ldquo;{technologyModules[selectedTech].rotaryValue}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
