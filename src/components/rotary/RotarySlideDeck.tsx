'use client';

import React from 'react';
import Image from 'next/image';
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
  Scale,
  Compass,
  Check,
  Gift,
  Baby,
  Stethoscope,
  Moon,
  BookOpen,
  Phone,
  Trash2,
  RotateCcw,
  SlidersHorizontal,
  ExternalLink,
  ChevronRight,
  Quote,
} from 'lucide-react';

export interface SlideDef {
  id: string;
  chapter: string;
  category: string;
  title: string;
  tag: 'kurumsal' | 'klinik' | 'genel';
}

export const ROTARY_SLIDES: SlideDef[] = [
  { id: 'rotary-hero', chapter: 'BÖLÜM 01', category: 'STRATEJİK ORTAKLIK', title: 'Kapak: Rotary & DijitalBüyükanne Anne-Çocuk Sağlığı İttifakı', tag: 'genel' },
  { id: 'rotary-polio', chapter: 'BÖLÜM 01 EK', category: 'TARİHSEL MİSYON', title: 'PolioPlus Kararlılığından 0–6 Ay Bebeklerde Erken Teşhise', tag: 'genel' },
  { id: 'rotary-4way', chapter: 'BÖLÜM 02', category: 'DÖRTLÜ ÖZDENETİM', title: 'Rotary 4-Way Test & Klinik Etik Güvence Matrisi', tag: 'klinik' },
  { id: 'rotary-workflow', chapter: 'BÖLÜM 03', category: 'UYGULAMA MODELİ', title: '4 Aşamalı Rotary Toplum Hizmeti Yol Haritası', tag: 'kurumsal' },
  { id: 'rotary-motion', chapter: 'BÖLÜM 04', category: '18-EKLEM HAREKET AI', title: '0–6 Ay Nörolojik ve Kas Hastalıkları Kinematik Video Taraması', tag: 'klinik' },
  { id: 'rotary-skin-stool', chapter: 'BÖLÜM 04 EK', category: 'CİLT & DIŞKI TARAMASI', title: '41 Cilt Tablosu & DSÖ Renk Kartı ile Erken Çocuk Sağlığı', tag: 'klinik' },
  { id: 'rotary-assistant', chapter: 'BÖLÜM 05', category: '7/24 ŞEFKATLİ ASİSTAN', title: 'Gece 03:00 Büyükanne Desteği & Anne Refahı (Postpartum)', tag: 'genel' },
  { id: 'rotary-gift-kit', chapter: 'BÖLÜM 06', category: 'PRESTİJ HEDİYE KİTİ', title: 'Bursa İpeği Rotary Fuları & QR Kodlu Dijital Erişim Kiti', tag: 'kurumsal' },
  { id: 'rotary-case-studies', chapter: 'BÖLÜM 07', category: 'KULÜP BAŞARI HİKAYELERİ', title: 'Kadıköy, Çankaya, Alsancak & Nilüfer Saha Sonuçları', tag: 'genel' },
  { id: 'rotary-simulator', chapter: 'BÖLÜM 08', category: 'KANITA DAYALI ETKİ', title: '1.000 Bebeklik Projede Rotary Etki & Sağlık Tasarruf Bilançosu', tag: 'kurumsal' },
  { id: 'rotary-packages', chapter: 'BÖLÜM 09', category: 'FONLAMA & GLOBAL GRANT', title: 'Kulüp, Bölge ve Rotary Vakfı (Global Grant) Katılım Paketleri', tag: 'kurumsal' },
  { id: 'rotary-governance', chapter: 'BÖLÜM 10', category: 'BİLİMSEL GÜVENCE', title: 'Bağımsız Danışman Hekimler, KVKK & Hekim Öncelikli Etik İlke', tag: 'klinik' },
  { id: 'rotary-cta', chapter: 'KAPANIŞ', category: 'PROTOKOL & İMZA ÇAĞRISI', title: 'Kendinden Önce Hizmet & 24 Saatte Kulübe Özel Protokol Teslimi', tag: 'kurumsal' },
];

export function RotaryWheel({ className = "w-6 h-6" }: { className?: string }) {
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

// ─────────────────────────────────────────────────────────────────────────────
// ROTARY SLIDE DECK COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
interface RotarySlideDeckProps {
  activeSlides: SlideDef[];
  viewMode: 'all' | 'single';
  safeCurrentIndex: number;
  totalActive: number;
  toggleSlideExclusion: (id: string) => void;
  getSlideIndex: (id: string, slides: SlideDef[]) => number;
  shouldRenderSlide: (id: string, slides: SlideDef[], viewMode: 'all' | 'single', currentIndex: number) => boolean;
}

export default function RotarySlideDeck({
  activeSlides,
  viewMode,
  safeCurrentIndex,
  totalActive,
  toggleSlideExclusion,
  getSlideIndex,
  shouldRenderSlide,
}: RotarySlideDeckProps) {
  return (
    <>
      {/* ═════════════════════════════════════════════════════════════
          SLAYT 1 • BÖLÜM 01: KAPAK (ROTARY & DİJİTALBÜYÜKANNE)
          ═════════════════════════════════════════════════════════════ */}
      {shouldRenderSlide('rotary-hero', activeSlides, viewMode, safeCurrentIndex) && (
        <RotarySlideShell
          id="rotary-hero"
          chapter="BÖLÜM 01"
          category="STRATEJİK ORTAKLIK"
          slideIndex={getSlideIndex('rotary-hero', activeSlides)}
          totalSlides={totalActive}
          onRemove={() => toggleSlideExclusion('rotary-hero')}
          gradientBg="bg-gradient-to-br from-[#0B254E] via-[#17458F] to-[#0A1A36] text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-[#F7A81B]/40 text-[#F7A81B] text-xs font-mono font-bold tracking-widest uppercase">
                <RotaryWheel className="w-4 h-4 text-[#F7A81B]" />
                <span>ROTARY 7 ODAK ALANI • ANNE VE ÇOCUK SAĞLIĞI TOPLUM HİZMETİ</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Polio&apos;yu bitiren Rotary iradesi, şimdi{' '}
                <span className="text-[#F7A81B]">
                  0–6 Ay Bebeklerde Erken Teşhis
                </span>{' '}
                için yapay zekâ ile buluşuyor.
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-3xl">
                Rotary Kulüpleri ve Rotary Vakfı (Global Grant) için anahtar teslim, ölçülebilir ve nesiller boyu anılacak yüksek prestijli toplum sağlığı seferberliği protokolü.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-white flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#F7A81B]" />
                  24 Saatte Hazır Protokol
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-white flex items-center gap-2">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  Klinik ve Hekim Onaylı
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-white flex items-center gap-2">
                  <Gift size={14} className="text-pink-300" />
                  Bursa İpeği Prestij Kiti
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#F7A81B]/20 border border-[#F7A81B]/50 text-xs font-bold text-[#F7A81B] flex items-center gap-2">
                  <Award size={14} />
                  %100 Şeffaf Etki Raporu
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl space-y-4 text-center w-full max-w-sm">
                <div className="w-20 h-20 rounded-2xl bg-white p-3 mx-auto shadow-lg flex items-center justify-center">
                  <RotaryWheel className="w-16 h-16 text-[#17458F]" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-[#F7A81B] tracking-widest uppercase block">
                    KULÜP VE BÖLGE İŞ BİRLİĞİ
                  </span>
                  <h3 className="text-lg font-black text-white">
                    Her Bebeğe Eşit & Bilimsel Şefkat
                  </h3>
                  <p className="text-xs text-slate-300 leading-snug">
                    Bölge Guvernörlükleri ve Kulüp Yönetimleri için tek imzayla hazır sosyal hizmet altyapısı.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-around text-center">
                  <div>
                    <div className="text-xl font-black text-[#F7A81B]">%100</div>
                    <div className="text-[10px] text-slate-300">Ölçülebilir Etki</div>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div>
                    <div className="text-xl font-black text-white">0–24 Ay</div>
                    <div className="text-[10px] text-slate-300">Kesintisiz Takip</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RotarySlideShell>
      )}

      {/* ═════════════════════════════════════════════════════════════
          SLAYT 2 • BÖLÜM 01 EK: TARİHSEL MİSYON (POLIO -> DİJİTAL SAĞLIK)
          ═════════════════════════════════════════════════════════════ */}
      {shouldRenderSlide('rotary-polio', activeSlides, viewMode, safeCurrentIndex) && (
        <RotarySlideShell
          id="rotary-polio"
          chapter="BÖLÜM 01 EK"
          category="TARİHSEL MİSYON"
          slideIndex={getSlideIndex('rotary-polio', activeSlides)}
          totalSlides={totalActive}
          onRemove={() => toggleSlideExclusion('rotary-polio')}
          gradientBg="bg-white text-slate-900 border border-slate-200"
          dark
        >
          <div className="space-y-6 flex-1 flex flex-col justify-between my-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17458F]/10 text-[#17458F] text-xs font-mono font-bold tracking-wider uppercase mb-2">
                <Globe2 size={13} />
                <span>ROTARY&apos;NİN KÜRESEL SAĞLIK DEĞİŞTİRME GÜCÜ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                PolioPlus Mirasından 21. Yüzyılın Bebek Sağlığı Seferberliğine
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl">
                1985&apos;te çocuk felcine karşı başlatılan ve dünyayı felçten arındıran Rotary ruhu; bugün serebral palsi, otizm ve nöromotor asimetri tehdidine karşı yapay zekâ öncülüğünde devam ediyor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sol: 1985 PolioPlus */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-black font-mono">
                    1985 &bull; POLIOPLUS
                  </span>
                  <span className="text-xs text-slate-500 font-bold">Tarihsel Efsane</span>
                </div>
                <h3 className="text-lg font-black text-[#17458F]">
                  Dünyadan Çocuk Felcini Silen İrade
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>3 milyardan fazla çocuğun aşılanmasına Rotaryenler öncülük etti.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Vakalar %99.9 oranında sıfırlandı; kalıcı sakatlıklar önlendi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>Rotary&apos;nin toplum sağlığındaki küresel güvenilirlik çıtası oldu.</span>
                  </li>
                </ul>
              </div>

              {/* Sağ: 2026 Dijital Büyükanne */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#17458F]/5 via-amber-50/50 to-white border-2 border-[#17458F]/30 space-y-3 relative shadow-md">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#17458F] text-[#F7A81B] text-xs font-black font-mono">
                    2026 &bull; DİJİTAL BÜYÜKANNE
                  </span>
                  <span className="text-xs text-[#17458F] font-bold">Yeni Nesil Seferberlik</span>
                </div>
                <h3 className="text-lg font-black text-[#17458F]">
                  0–6 Ay Nöromotor ve Gelişimsel Erken Tarama
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#17458F] shrink-0 mt-0.5" />
                    <span>Beyin plastisitesinin en yüksek olduğu ilk 180 günde erken tanı imkânı.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#17458F] shrink-0 mt-0.5" />
                    <span>Akıllı telefon kamerasıyla her sosyoekonomik aileye eşit ulaşan yapay zekâ.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#17458F] shrink-0 mt-0.5" />
                    <span>Kulüplere özel hazırlanan şeffaf veri ve kanıta dayalı etki karnesi.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50 border border-[#F7A81B]/40 flex items-center justify-between text-xs text-slate-700">
              <span className="font-bold text-[#17458F] flex items-center gap-2">
                <RotaryWheel className="w-4 h-4 text-[#F7A81B]" />
                Rotaryenlerin Yeni Vizyonu:
              </span>
              <span>Her bebeğe doğduğu ilk gün eşit, bilimsel ve şefkatli bir sağlık koruma kalkanı sunmak.</span>
            </div>
          </div>
        </RotarySlideShell>
      )}

      {/* ═════════════════════════════════════════════════════════════
          SLAYT 3 • BÖLÜM 02: DÖRTLÜ ÖZDENETİM & KLİNİK ETİK UYUM
          ═════════════════════════════════════════════════════════════ */}
      {shouldRenderSlide('rotary-4way', activeSlides, viewMode, safeCurrentIndex) && (
        <RotarySlideShell
          id="rotary-4way"
          chapter="BÖLÜM 02"
          category="DÖRTLÜ ÖZDENETİM"
          slideIndex={getSlideIndex('rotary-4way', activeSlides)}
          totalSlides={totalActive}
          onRemove={() => toggleSlideExclusion('rotary-4way')}
          gradientBg="bg-gradient-to-br from-[#0B1E3B] via-[#0D2A54] to-[#07172E] text-white"
        >
          <div className="space-y-5 flex-1 flex flex-col justify-between my-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7A81B]/20 text-[#F7A81B] text-xs font-mono font-bold tracking-wider uppercase mb-2">
                <Scale size={13} />
                <span>ROTARY THE 4-WAY TEST İLE %100 BİREBİR UYUM</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Düşündüğümüz, Söylediğimiz ve Yaptığımız Şeylerin Özdenetimi
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
                DijitalBüyükanne projesi, Rotary&apos;nin 4 temel ahlaki ve etik sorusuna klinik ve toplumsal karşılıklarıyla tam cevap verir:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2">
                <div className="flex items-center gap-2 text-[#F7A81B] font-black text-sm">
                  <span className="w-6 h-6 rounded-full bg-[#F7A81B] text-[#17458F] flex items-center justify-center font-mono text-xs">1</span>
                  <span>Gerçeğe uygun mu? (Is it the TRUTH?)</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  <strong>Klinik Kanıt:</strong> Algoritmalarımız Nörolojik ve Kas Hastalıkları standartları, DSÖ dışkı skalası ve AAP kılavuzlarıyla hekim kontrolünde kalibre edilmiştir. Tıbbi tanı koymaz, gerçek klinik riskleri erken tarar.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2">
                <div className="flex items-center gap-2 text-[#F7A81B] font-black text-sm">
                  <span className="w-6 h-6 rounded-full bg-[#F7A81B] text-[#17458F] flex items-center justify-center font-mono text-xs">2</span>
                  <span>İlgililerin tümü için adil mi? (Is it FAIR to all?)</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  <strong>Sağlıkta Eşitlik:</strong> Özel kliniklere erişemeyen dar gelirli aileler ile metropoldeki anneler aynı yapay zekâ taramasına Rotary bursu ile tamamen ücretsiz ulaşır.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2">
                <div className="flex items-center gap-2 text-[#F7A81B] font-black text-sm">
                  <span className="w-6 h-6 rounded-full bg-[#F7A81B] text-[#17458F] flex items-center justify-center font-mono text-xs">3</span>
                  <span>Dostluk ve iyi niyeti geliştirir mi? (GOODWILL & FRIENDSHIP)</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  <strong>Sosyal Dayanışma:</strong> Gece 03:00&apos;te çaresiz kalan annelere Rotaryenlerin şefkat eli uzanır. Rotary Kulübü, toplum nezdinde ailelerin hayat boyu andığı bir dost olarak konumlanır.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2">
                <div className="flex items-center gap-2 text-[#F7A81B] font-black text-sm">
                  <span className="w-6 h-6 rounded-full bg-[#F7A81B] text-[#17458F] flex items-center justify-center font-mono text-xs">4</span>
                  <span>İlgililerin tümü için yararlı mı? (BENEFICIAL to all?)</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  <strong>Somut Fayda:</strong> Erken fark edilen 1 vaka, bir çocuğu ömür boyu yatağa bağımlı kalmaktan kurtarır; kamu sağlık sistemine milyonlarca liralık tasarruf sağlar.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center text-xs text-slate-300 font-mono">
              Rotary Kulübü Karar Organları İçin %100 İç Denetim & Etik Uyum Güvencesi
            </div>
          </div>
        </RotarySlideShell>
      )}

      {/* ═════════════════════════════════════════════════════════════
          SLAYT 4 • BÖLÜM 03: 4 AŞAMALI UYGULAMA MODELİ
          ═════════════════════════════════════════════════════════════ */}
      {shouldRenderSlide('rotary-workflow', activeSlides, viewMode, safeCurrentIndex) && (
        <RotarySlideShell
          id="rotary-workflow"
          chapter="BÖLÜM 03"
          category="UYGULAMA MODELİ"
          slideIndex={getSlideIndex('rotary-workflow', activeSlides)}
          totalSlides={totalActive}
          onRemove={() => toggleSlideExclusion('rotary-workflow')}
          gradientBg="bg-white text-slate-900 border border-slate-200"
          dark
        >
          <div className="space-y-6 flex-1 flex flex-col justify-between my-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17458F]/10 text-[#17458F] text-xs font-mono font-bold tracking-wider uppercase mb-2">
                <FileCheck2 size={13} />
                <span>KULÜPLER İÇİN SIFIR OPERASYONEL YÜK</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                4 Aşamalı Rotary Toplum Hizmeti Yol Haritası
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl">
                Tüm teknik, lojistik ve tıbbi altyapı ekibimizce yürütülür; kulübünüz yalnızca vizyon, sahiplenme ve etkiyi temsil eder.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 relative">
                <span className="w-7 h-7 rounded-full bg-[#17458F] text-white flex items-center justify-center font-mono font-bold text-xs">
                  01
                </span>
                <h4 className="font-bold text-sm text-[#17458F]">Protokol & Onay</h4>
                <p className="text-xs text-slate-600 leading-snug">
                  Bölge Guvernörlüğü veya Kulüp Yönetim Kurulu ile resmi niyet mektubu ve hizmet protokolü imzalanır.
                </p>
                <div className="text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-200">24 Saatte Hazır</div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50/60 border border-[#F7A81B]/40 space-y-2 relative">
                <span className="w-7 h-7 rounded-full bg-[#F7A81B] text-[#17458F] flex items-center justify-center font-mono font-bold text-xs">
                  02
                </span>
                <h4 className="font-bold text-sm text-[#17458F]">İpek Fular Kiti</h4>
                <p className="text-xs text-slate-600 leading-snug">
                  Kulüp logolu, Bursa ipeğinden Anne Fuları ve QR lisans kartı içeren prestij kiti ailelere takdim edilir.
                </p>
                <div className="text-[10px] font-mono text-[#F7A81B] font-bold pt-2 border-t border-amber-200">Kalıcı Prestij</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 relative">
                <span className="w-7 h-7 rounded-full bg-[#17458F] text-white flex items-center justify-center font-mono font-bold text-xs">
                  03
                </span>
                <h4 className="font-bold text-sm text-[#17458F]">7/24 AI & Hekim</h4>
                <p className="text-xs text-slate-600 leading-snug">
                  Aileler 1 yıl boyunca sınırsız 18-eklem video analizi, cilt/dışkı taraması ve uzman yönlendirmesinden yararlanır.
                </p>
                <div className="text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-200">Kesintisiz Tarama</div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2 relative">
                <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-xs">
                  04
                </span>
                <h4 className="font-bold text-sm text-emerald-900">Etki Karnesi</h4>
                <p className="text-xs text-slate-600 leading-snug">
                  Dönem sonunda kaç riskin erken yakalandığı, kurtarılan bebekler ve kamu tasarrufu guvernörlüğe raporlanır.
                </p>
                <div className="text-[10px] font-mono text-emerald-700 font-bold pt-2 border-t border-emerald-200">Şeffaf Rapor</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#17458F]/5 border border-[#17458F]/20 flex items-center justify-between text-xs text-slate-700">
              <span className="font-bold text-[#17458F]">Lojistik ve Operasyon:</span>
              <span>Kit paketleme, kargo teslimatı, mobil aktivasyon ve hekim iletişim hattı %100 DijitalBüyükanne tarafından yürütülür.</span>
            </div>
          </div>
        </RotarySlideShell>
      )}

      {/* ═════════════════════════════════════════════════════════════
          SLAYT 5 • BÖLÜM 04: 18-EKLEM HAREKET ANALİZİ (0-6 AY)
          ═════════════════════════════════════════════════════════════ */}
      {shouldRenderSlide('rotary-motion', activeSlides, viewMode, safeCurrentIndex) && (
        <RotarySlideShell
          id="rotary-motion"
          chapter="BÖLÜM 04"
          category="18-EKLEM HAREKET AI"
          slideIndex={getSlideIndex('rotary-motion', activeSlides)}
          totalSlides={totalActive}
          onRemove={() => toggleSlideExclusion('rotary-motion')}
          gradientBg="bg-gradient-to-br from-[#0B1E3B] via-[#0D2A54] to-[#07172E] text-white"
        >
          <div className="space-y-5 flex-1 flex flex-col justify-between my-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-mono font-bold tracking-wider uppercase mb-2">
                <Activity size={13} />
                <span>0–6 AY NÖROLOJİK VE KAS HASTALIKLARI VİDEO KİNEMATİK TARAMASI</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                18-Eklem Kinematik Yapay Zekâ ile Serebral Palsi Erken Taraması
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
                Bebeğin sırtüstü uyanıkken çekilen 2-3 dakikalık videosu üzerinden 18 majör eklem açısı taranır ve spontan fidgety hareket kalitesi ölçülür.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-3">
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 space-y-1">
                  <span className="text-xs font-bold text-[#F7A81B] block">Spontan Fidgety Kalitesi</span>
                  <p className="text-xs text-slate-200">
                    Omuz, dirsek, bilek, kalça, diz ve ayak bileklerindeki akıcı ve değişken minik hareketlerin sürekliliği test edilir.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 space-y-1">
                  <span className="text-xs font-bold text-sky-300 block">Sağ/Sol Eklem Asimetri Radarı</span>
                  <p className="text-xs text-slate-200">
                    Hemiparezi ve brakiyal pleksus risklerini ele veren kol-bacak kuvvet eşitsizliği piksel düzeyinde taranır.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 space-y-1">
                  <span className="text-xs font-bold text-emerald-300 block">Rijidite & Monotonluk İndeksi</span>
                  <p className="text-xs text-slate-200">
                    Tekrarlayan sert kramp veya hareket azlığı gibi durumlar nörolojik değerlendirme için işaretlenir.
                  </p>
                </div>
              </div>

              <div className="md:col-span-5 p-5 rounded-2xl bg-white/5 border border-white/15 space-y-3 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#17458F] text-[#F7A81B] mx-auto flex items-center justify-center font-black">
                  18
                </div>
                <h4 className="text-sm font-bold text-white">İskelet Kinematik Haritası</h4>
                <p className="text-xs text-slate-300 leading-snug">
                  Baş, boyun, omuzlar, dirsekler, bilekler, kalça ekseni, dizler ve ayak parmak uçları gerçek zamanlı izlenir.
                </p>
                <div className="pt-2 border-t border-white/10 text-[11px] text-[#F7A81B] font-mono">
                  Tanı Koymaz &bull; Hekime Ön Rapor Sunar
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-sky-950/60 border border-sky-500/30 text-xs text-sky-200 flex items-center justify-between">
              <span className="font-bold">Erken Müdahalenin Gücü:</span>
              <span>İlk 6 ayda başlanan pediatrik fizyoterapi, kalıcı nöromotor kayıp riskini %70&apos;e varan oranda tersine çevirebilir.</span>
            </div>
          </div>
        </RotarySlideShell>
      )}

      {/* ═════════════════════════════════════════════════════════════
          SLAYT 6 • BÖLÜM 04 EK: CİLT VE DIŞKI TARAMASI
          ═════════════════════════════════════════════════════════════ */}
      {shouldRenderSlide('rotary-skin-stool', activeSlides, viewMode, safeCurrentIndex) && (
        <RotarySlideShell
          id="rotary-skin-stool"
          chapter="BÖLÜM 04 EK"
          category="CİLT & DIŞKI TARAMASI"
          slideIndex={getSlideIndex('rotary-skin-stool', activeSlides)}
          totalSlides={totalActive}
          onRemove={() => toggleSlideExclusion('rotary-skin-stool')}
          gradientBg="bg-white text-slate-900 border border-slate-200"
          dark
        >
          <div className="space-y-6 flex-1 flex flex-col justify-between my-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-mono font-bold tracking-wider uppercase mb-2">
                <Sparkles size={13} />
                <span>GÖRSEL YAPAY ZEKÂ İLE PEDİATRİK ERKEN FARKINDALIK</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                41 Pediatrik Cilt Tablosu & DSÖ Dışkı Renk Kartı Taraması
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl">
                Bebeklerde en sık görülen döküntüler ve yenidoğan sarılığı/safra yolu anomalileri fotoğrafla taranarak aileye güvenilir rehberlik sağlanır.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cilt Analizi */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#17458F] flex items-center gap-1.5">
                    <Sparkles size={16} className="text-[#0284C7]" />
                    41 Pediatrik Cilt Tablosu
                  </span>
                  <span className="text-xs font-mono bg-sky-100 text-sky-800 px-2 py-0.5 rounded font-bold">Kamera Tarama</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Konak, atopik dermatit, bebek egzaması, isilik, toksik eritem ve yenidoğan sivilcesi piksel düzeyinde eşleştirilir.
                </p>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                  <div className="font-bold text-slate-900">Aileye Sağlanan Fayda:</div>
                  <div>Gereksiz kortizonlu krem ve yanlış ilaç kullanımını önler; hekim öncesi ev bakım önerileri sunar.</div>
                </div>
              </div>

              {/* Dışkı / Bez Analizi */}
              <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#17458F] flex items-center gap-1.5">
                    <ShieldCheck size={16} className="text-amber-600" />
                    DSÖ & AAP Dışkı Renk Skalası
                  </span>
                  <span className="text-xs font-mono bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">6 Seviyeli Kart</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bebek bezi fotoğrafı üzerinden beyaz/akolik dışkı taranarak safra yolu atrezisi (biliary atresia) erken fark edilir.
                </p>
                <div className="p-3 bg-white rounded-xl border border-amber-200 text-xs text-slate-700 space-y-1">
                  <div className="font-bold text-slate-900">Hayat Kurtaran Pencere:</div>
                  <div>İlk 60 günde tespit edilen biliyer atrezi, Kasai ameliyatı ile karaciğer yetmezliğinin ve nakil ihtiyacının önüne geçer.</div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="font-bold text-[#17458F]">Acil Servis Başvurusu Tasarrufu:</span>
              <span>Anlamsız panikle acil servise gitme oranını %52 oranında azaltarak sağlık sistemine nefes aldırır.</span>
            </div>
          </div>
        </RotarySlideShell>
      )}

      {/* ═════════════════════════════════════════════════════════════
          SLAYT 7 • BÖLÜM 05: 7/24 ŞEFKATLİ ASİSTAN & ANNE REFAHI
          ═════════════════════════════════════════════════════════════ */}
      {shouldRenderSlide('rotary-assistant', activeSlides, viewMode, safeCurrentIndex) && (
        <RotarySlideShell
          id="rotary-assistant"
          chapter="BÖLÜM 05"
          category="7/24 ŞEFKATLİ ASİSTAN"
          slideIndex={getSlideIndex('rotary-assistant', activeSlides)}
          totalSlides={totalActive}
          onRemove={() => toggleSlideExclusion('rotary-assistant')}
          gradientBg="bg-gradient-to-br from-[#0B1E3B] via-[#0D2A54] to-[#07172E] text-white"
        >
          <div className="space-y-5 flex-1 flex flex-col justify-between my-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-mono font-bold tracking-wider uppercase mb-2">
                <Heart size={13} />
                <span>POSTPARTUM ANKSİYETE & LOHUSA ANNE DESTEK AĞI</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Gece 03:00 Büyükanne Şefkati & Kesintisiz Bilimsel Rehberlik
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
                Doğum sonrası annelerin %21&apos;inde görülen kaygı ve çaresizlik hissine karşı, güvenilir ve hekim rehberliğinde 7/24 anlık yapay zekâ asistanı.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2">
                <Moon size={20} className="text-amber-300" />
                <h4 className="font-bold text-sm text-white">Gece Nöbeti Şefkati</h4>
                <p className="text-xs text-slate-300 leading-snug">
                  Bebek ağladığında, emzirme sıkıntısında veya ateş panikinde anneye panik yapmadan ne yapacağını adım adım anlatır.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2">
                <Stethoscope size={20} className="text-sky-300" />
                <h4 className="font-bold text-sm text-white">Klinik Doğruluk</h4>
                <p className="text-xs text-slate-300 leading-snug">
                  Sosyal medyadaki tehlikeli kocakarı ilaçları veya asılsız forum tavsiyeleri yerine onaylı tıbbi pediatri protokollerini aktarır.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2">
                <Baby size={20} className="text-emerald-300" />
                <h4 className="font-bold text-sm text-white">Hekim Hazırlık Modu</h4>
                <p className="text-xs text-slate-300 leading-snug">
                  Hekim randevusuna gitmeden önce annenin sorması gereken 5 kritik soruyu ve bebeğin son 48 saatlik semptom özetini hazırlar.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/15 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#F7A81B]">Rotaryenlerin İyilik İmzası:</span>
                <span className="text-slate-400 font-mono">Toplum Sağlığı Etkisi</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                Her annenin telefonunda beliren <em>&ldquo;Bu şefkatli rehberlik [Kulüp Adı] Rotary Kulübü toplum hizmeti projesi ile sunulmaktadır&rdquo;</em> ibaresi, kulübünüzün iyi niyetini doğrudan ailelerin yüreğine kazır.
              </p>
            </div>
          </div>
        </RotarySlideShell>
      )}

      {/* ═════════════════════════════════════════════════════════════
          SLAYT 8 • BÖLÜM 06: PRESTİJ HEDİYE KİTİ (BURSA İPEĞİ)
          ═════════════════════════════════════════════════════════════ */}
      {shouldRenderSlide('rotary-gift-kit', activeSlides, viewMode, safeCurrentIndex) && (
        <RotarySlideShell
          id="rotary-gift-kit"
          chapter="BÖLÜM 06"
          category="PRESTİJ HEDİYE KİTİ"
          slideIndex={getSlideIndex('rotary-gift-kit', activeSlides)}
          totalSlides={totalActive}
          onRemove={() => toggleSlideExclusion('rotary-gift-kit')}
          gradientBg="bg-white text-slate-900 border border-slate-200"
          dark
        >
          <div className="space-y-6 flex-1 flex flex-col justify-between my-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold tracking-wider uppercase mb-2">
                <Gift size={13} className="text-[#F7A81B]" />
                <span>AİLELERE UNUTULMAZ BİR ROTARY DOKUNUŞU</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Bursa İpeği Rotary Anne Fuları & QR Kodlu Prestij Kiti
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl">
                Proje kapsamında doğan veya taranan her bebeğin annesine, lüks kutusunda Rotary armalı el yapımı ipek fular ve sisteme 1 yıllık erişim kartı hediye edilir.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 space-y-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-sm text-[#17458F] block">El Dokuması Bursa İpeği Fular</span>
                  <p className="text-xs text-slate-600">
                    Geleneksel Türk dokuma sanatıyla hazırlanan, zarif Rotary çarkı motifli ve antialerjik bebek dostu ipek kumaş.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-sm text-[#17458F] block">Kişiye Özel QR Erişim Sertifikası</span>
                  <p className="text-xs text-slate-600">
                    Anne kamerasını okuttuğu anda 1 yıllık tam yapay zekâ tarama lisansını anında aktif hale getirir.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-[#F7A81B]/40 space-y-1">
                  <span className="font-bold text-sm text-[#17458F] block">Kulüp Başkanından Islak İmzalı Tebrik Mektubu</span>
                  <p className="text-xs text-slate-700">
                    Rotary Kulübü Başkanı&apos;nın anneye yazdığı duygusal &ldquo;Hoş Geldin Bebek&rdquo; mektubu ailenin anı defterinde saklanır.
                  </p>
                </div>
              </div>

              <div className="md:col-span-6 p-6 rounded-3xl bg-gradient-to-br from-[#17458F]/5 via-amber-50/40 to-slate-50 border-2 border-[#17458F]/20 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#17458F] text-[#F7A81B] mx-auto flex items-center justify-center shadow-md">
                  <Gift size={30} />
                </div>
                <div>
                  <h4 className="font-black text-base text-[#17458F]">
                    Kalıcı & Nesiller Boyu Süren İtibar
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto leading-relaxed">
                    Sıradan broşürler atılır; ancak Bursa ipeği fular ve şık Rotary hediye kutusu evin baş köşesinde yıllarca saklanır.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200 flex items-center justify-around text-xs font-mono font-bold text-slate-700">
                  <span>%100 Doğal İpek</span>
                  <span>&bull;</span>
                  <span>Kulüp Logolu</span>
                  <span>&bull;</span>
                  <span>QR Entegre</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 text-center font-mono">
              Tüm kutulama, kişiselleştirme ve dağıtım lojistiği proje ekibimiz tarafından yürütülmektedir.
            </div>
          </div>
        </RotarySlideShell>
      )}

      {/* ═════════════════════════════════════════════════════════════
          SLAYT 9 • BÖLÜM 07: KULÜP BAŞARI HİKAYELERİ
          ═════════════════════════════════════════════════════════════ */}
      {shouldRenderSlide('rotary-case-studies', activeSlides, viewMode, safeCurrentIndex) && (
        <RotarySlideShell
          id="rotary-case-studies"
          chapter="BÖLÜM 07"
          category="KULÜP BAŞARI HİKAYELERİ"
          slideIndex={getSlideIndex('rotary-case-studies', activeSlides)}
          totalSlides={totalActive}
          onRemove={() => toggleSlideExclusion('rotary-case-studies')}
          gradientBg="bg-gradient-to-br from-[#0B1E3B] via-[#0D2A54] to-[#07172E] text-white"
        >
          <div className="space-y-5 flex-1 flex flex-col justify-between my-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold tracking-wider uppercase mb-2">
                <Award size={13} />
                <span>SAHADA GERÇEKLEŞEN HAYAT KURTARAN DÖNÜŞÜMLER</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Rotary Kulüpleri Saha Başarı ve Etki Hikayeleri
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
                Rotaryenlerin desteğiyle erken dönemde fark edilen bebeklerin hayata tutunma yolculukları:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Kadıköy Rotary */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[#F7A81B]">Kadıköy Rotary Kulübü</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">14. Ayda Yürüdü</span>
                </div>
                <h4 className="font-bold text-sm text-white">32 Haftalık Zeynep Bebeğin Bağımsız Adımları</h4>
                <p className="text-xs text-slate-300 leading-snug">
                  Bacak itişindeki asimetri 9. haftada video kinematik analizle saptandı. Erken fizyoterapi ile 14. ayda desteksiz yürüdü.
                </p>
                <div className="text-[10px] text-slate-400 italic border-t border-white/10 pt-2">
                  &ldquo;İyi ki beklememişiz, en kritik 3 ayı değerlendirdik.&rdquo; &mdash; Elif K. (Anne)
                </div>
              </div>

              {/* Çankaya Rotary */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[#F7A81B]">Çankaya Rotary Kulübü</span>
                  <span className="text-[10px] bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded font-bold">38. Günde Teşhis</span>
                </div>
                <h4 className="font-bold text-sm text-white">Kaan Bebeğin Karaciğer & Safra Yolu Taraması</h4>
                <p className="text-xs text-slate-300 leading-snug">
                  Dışkı renk kartı analiziyle akolik dışkı erken tespit edildi. 43. günde yapılan başarılı operasyonla nakil riski önlendi.
                </p>
                <div className="text-[10px] text-slate-400 italic border-t border-white/10 pt-2">
                  &ldquo;Hekimimiz &apos;bir hafta gecikseydiniz geri dönüşü yoktu&apos; dedi.&rdquo; &mdash; Derya B. (Anne)
                </div>
              </div>

              {/* Alsancak Rotary */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[#F7A81B]">Alsancak Rotary Kulübü</span>
                  <span className="text-[10px] bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded font-bold">350 Depremzede Anne</span>
                </div>
                <h4 className="font-bold text-sm text-white">İpek Fular Kiti ile 350 Anneye Şefkat Ağı</h4>
                <p className="text-xs text-slate-300 leading-snug">
                  Konteyner kentteki 350 anneye 7/24 pediatrik yapay zekâ rehberliği ve bebek sağlığı izlemi ulaştırıldı.
                </p>
                <div className="text-[10px] text-slate-400 italic border-t border-white/10 pt-2">
                  &ldquo;Gece bebeğim ateşlendiğinde yapayalnız kalmadım.&rdquo; &mdash; Hatice T. (Anne)
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-slate-300 font-mono">
              <span>Nilüfer Rotary & Seyhan Rotary Saha Projeleri Devam Ediyor</span>
              <span className="text-[#F7A81B] font-bold">5 Kulüp &bull; 2.500+ Bebek Sahada Korundu</span>
            </div>
          </div>
        </RotarySlideShell>
      )}

      {/* ═════════════════════════════════════════════════════════════
          SLAYT 10 • BÖLÜM 08: KANITA DAYALI ETKİ SİMÜLASYONU
          ═════════════════════════════════════════════════════════════ */}
      {shouldRenderSlide('rotary-simulator', activeSlides, viewMode, safeCurrentIndex) && (
        <RotarySlideShell
          id="rotary-simulator"
          chapter="BÖLÜM 08"
          category="KANITA DAYALI ETKİ"
          slideIndex={getSlideIndex('rotary-simulator', activeSlides)}
          totalSlides={totalActive}
          onRemove={() => toggleSlideExclusion('rotary-simulator')}
          gradientBg="bg-white text-slate-900 border border-slate-200"
          dark
        >
          <div className="space-y-6 flex-1 flex flex-col justify-between my-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17458F]/10 text-[#17458F] text-xs font-mono font-bold tracking-wider uppercase mb-2">
                <BarChart3 size={13} />
                <span>1.000 BEBEKLİK BİR PROJENİN 1 YILLIK ETKİ KARNESİ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Kanıta Dayalı Rotary Toplum Sağlığı Bilançosu
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl">
                Kulübünüzün veya Bölgenizin fonladığı her 1.000 bebekte bilimsel olarak ölçülen ve raporlanan somut çıktılar:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1.5">
                <div className="text-3xl sm:text-4xl font-black text-[#17458F]">44</div>
                <div className="text-xs font-bold text-slate-800">Nöromotor Risk</div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  İlk 90 günde tespit edilip erken fizyoterapiye yönlendirilen bebek
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/60 border border-[#F7A81B]/40 text-center space-y-1.5">
                <div className="text-3xl sm:text-4xl font-black text-[#F7A81B]">38</div>
                <div className="text-xs font-bold text-slate-800">Cilt ve Sindirim Riski</div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Dışkı renk skalası ve cilt analiziyle erken yakalanan vaka
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-pink-50/70 border border-pink-200 text-center space-y-1.5">
                <div className="text-3xl sm:text-4xl font-black text-pink-600">214</div>
                <div className="text-xs font-bold text-slate-800">Anne Refahı</div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Postpartum depresyon ve kaygı sendromu önlenen lohusa anne
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1.5">
                <div className="text-3xl sm:text-4xl font-black text-emerald-600">520</div>
                <div className="text-xs font-bold text-slate-800">Önlenebilir Acil Servis</div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Yapay zekâ ön taraması ile gereksiz acil servise gitmekten kurtulan aile
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#17458F] to-[#0A1A36] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#F7A81B] block">KAMUSAL EKONOMİK KATMA DEĞER</span>
                <span className="text-xl sm:text-2xl font-black">~₺9.700.000 Sağlık Sistemi Tasarrufu</span>
              </div>
              <div className="text-xs text-slate-300 text-right sm:max-w-xs">
                Her ₺1&apos;lik Rotary katkısı, kamuda ₺12&apos;lik bakım ve engellilik maliyetini ortadan kaldırır.
              </div>
            </div>
          </div>
        </RotarySlideShell>
      )}

      {/* ═════════════════════════════════════════════════════════════
          SLAYT 11 • BÖLÜM 09: FONLAMA VE GLOBAL GRANT PAKETLERİ
          ═════════════════════════════════════════════════════════════ */}
      {shouldRenderSlide('rotary-packages', activeSlides, viewMode, safeCurrentIndex) && (
        <RotarySlideShell
          id="rotary-packages"
          chapter="BÖLÜM 09"
          category="FONLAMA & GLOBAL GRANT"
          slideIndex={getSlideIndex('rotary-packages', activeSlides)}
          totalSlides={totalActive}
          onRemove={() => toggleSlideExclusion('rotary-packages')}
          gradientBg="bg-gradient-to-br from-[#0B1E3B] via-[#0D2A54] to-[#07172E] text-white"
        >
          <div className="space-y-5 flex-1 flex flex-col justify-between my-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7A81B]/20 text-[#F7A81B] text-xs font-mono font-bold tracking-wider uppercase mb-2">
                <Building size={13} />
                <span>KULÜP, BÖLGE VE VAKIF DÜZEYİ FONLAMA MODELLERİ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Rotary Kulüpleri İçin Hazır Proje Katılım Paketleri
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl">
                Bütçenize göre ölçeklendirilebilen, anahtar teslim ve Global Grant eşleşmesine tam uyumlu fonlama alternatifleri:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Paket 1: Kulüp Düzeyi */}
              <div className="p-5 rounded-2xl bg-white/10 border border-white/15 space-y-3 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    KULÜP TOPLUM HİZMETİ
                  </span>
                  <h4 className="text-lg font-black text-white">500 Bebeklik Pilot Proje</h4>
                  <div className="text-2xl font-black text-[#F7A81B] mt-1">₺125.000 <span className="text-xs text-slate-300 font-normal">/ ~$3.800</span></div>
                  <ul className="space-y-1.5 text-xs text-slate-200 mt-3">
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-[#F7A81B]" /> 500 Aileye 1 Yıl Lisans</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-[#F7A81B]" /> 500 Bursa İpeği Prestij Kiti</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-[#F7A81B]" /> Kulüp Adına Özel Mobil Ekran</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-[#F7A81B]" /> Yıl Sonu Basın & Etki Bülteni</li>
                  </ul>
                </div>
                <div className="text-[10px] text-slate-400 font-mono pt-2 border-t border-white/10">Tek Kulüp Bütçesiyle Karşılanabilir</div>
              </div>

              {/* Paket 2: Bölge Ortak Projesi */}
              <div className="p-5 rounded-2xl bg-white/15 border-2 border-[#F7A81B] space-y-3 flex flex-col justify-between shadow-xl relative">
                <div className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full bg-[#F7A81B] text-[#17458F] text-[10px] font-black uppercase">
                  En Popüler
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#F7A81B] uppercase tracking-wider block">
                    BÖLGE ORTAK PROJESİ
                  </span>
                  <h4 className="text-lg font-black text-white">2.500 Bebeklik Bölge Hamlesi</h4>
                  <div className="text-2xl font-black text-[#F7A81B] mt-1">₺550.000 <span className="text-xs text-slate-300 font-normal">/ ~$16.500</span></div>
                  <ul className="space-y-1.5 text-xs text-slate-100 mt-3">
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-[#F7A81B]" /> 3–5 Kulüp Ortak Fonlaması</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-[#F7A81B]" /> 2.500 İpek Fular & QR Kiti</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-[#F7A81B]" /> Bölge Guvernörlüğü Resmî Vitrini</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-[#F7A81B]" /> Ulusal Medya & TV Kampanyası</li>
                  </ul>
                </div>
                <div className="text-[10px] text-[#F7A81B] font-mono pt-2 border-t border-white/10">Kulüp Başına ~₺110.000 Pay</div>
              </div>

              {/* Paket 3: Global Grant */}
              <div className="p-5 rounded-2xl bg-white/10 border border-white/15 space-y-3 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    ROTARY FOUNDATION
                  </span>
                  <h4 className="text-lg font-black text-white">10.000 Bebek Global Grant</h4>
                  <div className="text-2xl font-black text-white mt-1">$65.000 <span className="text-xs text-slate-300 font-normal">Vakıf Eşleşmeli</span></div>
                  <ul className="space-y-1.5 text-xs text-slate-200 mt-3">
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-emerald-400" /> Uluslararası Kulüp Eşleşmesi</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-emerald-400" /> Dünya Vakıf Fonu (TRF) Hibesi</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-emerald-400" /> Üniversite & Tıp Fakültesi Raporu</li>
                    <li className="flex items-center gap-1.5"><Check size={13} className="text-emerald-400" /> Rotary International Ödül Adaylığı</li>
                  </ul>
                </div>
                <div className="text-[10px] text-slate-400 font-mono pt-2 border-t border-white/10">TRF Başvuru Dosyası Hazır</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 text-center font-mono">
              Fatura, makbuz ve tüm harcama kalemleri Rotary Vakfı ve Dernekler Mevzuatına %100 uygundur.
            </div>
          </div>
        </RotarySlideShell>
      )}

      {/* ═════════════════════════════════════════════════════════════
          SLAYT 12 • BÖLÜM 10: BİLİMSEL KURUL & ETİK STANDARTLAR
          ═════════════════════════════════════════════════════════════ */}
      {shouldRenderSlide('rotary-governance', activeSlides, viewMode, safeCurrentIndex) && (
        <RotarySlideShell
          id="rotary-governance"
          chapter="BÖLÜM 10"
          category="BİLİMSEL GÜVENCE"
          slideIndex={getSlideIndex('rotary-governance', activeSlides)}
          totalSlides={totalActive}
          onRemove={() => toggleSlideExclusion('rotary-governance')}
          gradientBg="bg-white text-slate-900 border border-slate-200"
          dark
        >
          <div className="space-y-6 flex-1 flex flex-col justify-between my-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold tracking-wider uppercase mb-2">
                <ShieldCheck size={13} />
                <span>KLİNİK GÜVENCE, KVKK VE BAĞIMSIZ HEKİM DENETİMİ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Bilimsel Danışma Kurulu ve Sorumlu Yapay Zekâ İlkeleri
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-3xl">
                Yapay zekâ algoritmaları, alanında öncü akademisyenler ve hekimler gözetiminde geliştirilir; etik ve yasal güvenceler tavizsiz uygulanır.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#17458F] text-white flex items-center justify-center font-bold text-xs font-mono">
                  01
                </div>
                <h4 className="font-bold text-sm text-[#17458F]">Tanı Koymaz, Yönlendirir</h4>
                <p className="text-xs text-slate-600 leading-snug">
                  Sistem hekim muayenesinin yerine geçmez; hekime erken ve doğru zamanda gidilmesini sağlayarak hayat kurtarır.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#17458F] text-white flex items-center justify-center font-bold text-xs font-mono">
                  02
                </div>
                <h4 className="font-bold text-sm text-[#17458F]">%100 Anonim Veri & KVKK</h4>
                <p className="text-xs text-slate-600 leading-snug">
                  Bebek fotoğrafları ve videoları kimliksizleştirilir; yüzler bulanıklaştırılır ve veriler Türkiye&apos;deki güvenli sunucularda tutulur.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#17458F] text-white flex items-center justify-center font-bold text-xs font-mono">
                  03
                </div>
                <h4 className="font-bold text-sm text-[#17458F]">OMÜ Tıp Fakültesi & Teknopark</h4>
                <p className="text-xs text-slate-600 leading-snug">
                  OMÜ Tıp Neonatoloji Bilim Dalı, Çocuk Sağlığı ve Teknopark yapay zekâ akademisyenlerimizin danışmanlığında geliştirilen protokoller.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-[#17458F] text-white flex items-center justify-center font-bold text-xs font-mono">
                  04
                </div>
                <h4 className="font-bold text-sm text-[#17458F]">T.C. Sağlık Mevzuatı</h4>
                <p className="text-xs text-slate-600 leading-snug">
                  Sağlık Bakanlığı bebek izlem takvimine tam sadakat ve birinci basamak aile hekimliği ile sinerjik çalışma.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-between text-xs text-slate-700">
              <span className="font-bold text-[#17458F]">Akademik Kadro & Kurucu Ekip:</span>
              <span>Öğr. Gör. Dr. Sema Gül (Kurucu), Doç. Dr. Muammer Türkoğlu (Teknik Sorumlu), Prof. Dr. Canan Seren (Klinik Danışman) &bull; adapha.com</span>
            </div>
          </div>
        </RotarySlideShell>
      )}

      {/* ═════════════════════════════════════════════════════════════
          SLAYT 13 • KAPANIŞ: PROTOKOL ÇAĞRISI VE İLETİŞİM
          ═════════════════════════════════════════════════════════════ */}
      {shouldRenderSlide('rotary-cta', activeSlides, viewMode, safeCurrentIndex) && (
        <RotarySlideShell
          id="rotary-cta"
          chapter="KAPANIŞ"
          category="PROTOKOL ÇAĞRISI"
          slideIndex={getSlideIndex('rotary-cta', activeSlides)}
          totalSlides={totalActive}
          onRemove={() => toggleSlideExclusion('rotary-cta')}
          gradientBg="bg-gradient-to-br from-[#0B254E] via-[#17458F] to-[#0A1A36] text-white"
        >
          <div className="space-y-6 flex-1 flex flex-col justify-between my-auto">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#F7A81B]/40 text-[#F7A81B] text-xs font-mono font-bold tracking-widest uppercase">
                <RotaryWheel className="w-4 h-4 text-[#F7A81B]" />
                <span>ROTARY TOPLUM HİZMETİ İŞ BİRLİĞİ ÇAĞRISI</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                &ldquo;Kendinden Önce Hizmet&rdquo; İlkesiyle Bir Bebeğin Hayatına Dokunun
              </h2>
              <p className="text-sm sm:text-base text-slate-200">
                Kulübünüzün veya Bölgenizin dönem hedeflerinde en yüksek takdir ve etkiyi toplayacak Anne ve Çocuk Sağlığı protokolünü birlikte hayata geçirelim.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white/10 border border-white/15 space-y-2 text-center">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-[#F7A81B] mx-auto flex items-center justify-center font-bold">
                  24h
                </div>
                <h4 className="font-bold text-sm text-white">Hazır Protokol Teslimi</h4>
                <p className="text-xs text-slate-300">
                  Kulüp veya Bölgenizin adına özel hazırlanan resmi protokol metni ve yönetim kurulu onay dosyası 24 saatte sunulur.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 border border-white/15 space-y-2 text-center">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-emerald-300 mx-auto flex items-center justify-center font-bold">
                  100%
                </div>
                <h4 className="font-bold text-sm text-white">Sıfır Operasyonel Yük</h4>
                <p className="text-xs text-slate-300">
                  Kit tedariği, mobil altyapı, veri saklama ve aile iletişim desteği uzman kadromuzca eksiksiz sağlanır.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 border border-white/15 space-y-2 text-center">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-pink-300 mx-auto flex items-center justify-center font-bold">
                  TRF
                </div>
                <h4 className="font-bold text-sm text-white">Global Grant Rehberliği</h4>
                <p className="text-xs text-slate-300">
                  Rotary Vakfı Küresel Bağış başvuruları için yabancı kulüp eşleşmesi ve proje dosyalama danışmanlığı verilir.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/15 border border-[#F7A81B]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-mono font-bold text-[#F7A81B] uppercase">Resmî Temas & Protokol Masası</div>
                <div className="text-base font-bold text-white">Doğrudan İletişim: 0542 846 12 32 &bull; info@dijitalbuyukanne.com</div>
                <div className="text-xs text-slate-300">Resmî Partnerler: BabySensAI & Adapha Yapay Zekâ</div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="tel:05428461232"
                  className="px-4 py-2 rounded-xl bg-[#F7A81B] text-[#17458F] font-black text-xs hover:bg-amber-400 transition-colors shadow-lg"
                >
                  Hemen Ara: 0542 846 12 32
                </a>
              </div>
            </div>
          </div>
        </RotarySlideShell>
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ROTARY SLIDE SHELL COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function RotarySlideShell({
  id,
  chapter,
  category,
  slideIndex,
  totalSlides,
  onRemove,
  dark = false,
  gradientBg,
  children,
}: {
  id: string;
  chapter: string;
  category: string;
  slideIndex: number;
  totalSlides: number;
  onRemove: () => void;
  dark?: boolean;
  gradientBg: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`slide-card ${gradientBg}`}>
      {/* Slayt Başlığı */}
      <div className={`flex items-center justify-between pb-3.5 mb-3 border-b ${dark ? 'border-slate-200' : 'border-white/15'}`}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#17458F] border border-[#F7A81B]/50 text-[#F7A81B] flex items-center justify-center shadow-md">
            <RotaryWheel className="w-5 h-5 text-[#F7A81B]" />
          </div>
          <div>
            <span className={`text-[10px] font-mono font-bold tracking-wider uppercase block ${dark ? 'text-[#17458F]' : 'text-[#F7A81B]'}`}>
              {chapter} &bull; {category}
            </span>
            <span className={`text-xs font-black tracking-tight ${dark ? 'text-slate-900' : 'text-white'}`}>
              ROTARY INTERNATIONAL &bull; ANNE VE ÇOCUK SAĞLIĞI PROJESİ
            </span>
          </div>
        </div>

        {/* Numaralandırma & Slayt Çıkarma Butonu */}
        <div className="flex items-center gap-2">
          <button
            onClick={onRemove}
            className={`no-print px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              dark
                ? 'bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200'
                : 'bg-white/10 hover:bg-rose-500/30 text-rose-200 hover:text-white border border-white/20'
            }`}
            title="Bu slaytı sunumdan ve PDF çıktısından çıkar"
          >
            <Trash2 size={12} />
            <span className="hidden sm:inline">Slaytı Çıkar</span>
          </button>

          <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${
            dark ? 'bg-[#17458F]/10 text-[#17458F] border-[#17458F]/20' : 'bg-[#F7A81B]/20 text-[#F7A81B] border-[#F7A81B]/40'
          }`}>
            SLAYT {slideIndex.toString().padStart(2, '0')} / {totalSlides.toString().padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Slayt İçeriği */}
      {children}

      {/* Slayt Alt Bilgisi (Footer) */}
      <div className={`flex items-center justify-between pt-3 mt-3 border-t text-[10px] font-mono ${
        dark ? 'border-slate-200 text-slate-500' : 'border-white/15 text-white/50'
      }`}>
        <span className="flex items-center gap-1.5">
          <RotaryWheel className="w-3.5 h-3.5 text-[#F7A81B]" />
          <span>Rotary Kulüpleri & Vakfı Toplum Hizmeti &bull; Resmî Proje Sunumu</span>
        </span>
        <span>DijitalBüyükanne &bull; Slayt {slideIndex} / {totalSlides}</span>
      </div>
    </div>
  );
}
