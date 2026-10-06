'use client';

import { useState } from 'react';
import PhoneMockup from '@/components/ui/PhoneMockup';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  Activity,
  ScanLine,
  MessageCircleHeart,
  Stethoscope,
  Baby,
  BarChart2,
  Moon,
  ChevronRight,
  Droplets,
} from 'lucide-react';

const features = [
  {
    number: '01',
    icon: <Activity size={20} />,
    title: '0–6 Ay Hareket Analizi',
    description:
      'Kısa videolardan yapay zekâ ön taraması; şüpheli bulgularda pediatrik uzman kontrolü ve hekim yönlendirmesi.',
  },
  {
    number: '02',
    icon: <ScanLine size={20} />,
    title: 'Yapay Zekâ Destekli Cilt Analizi',
    description:
      'Fotoğraf üzerinden eritem ve bariyer analizi; riskli döküntülerde hekim kontrolü köprüsü.',
  },
  {
    number: '03',
    icon: <Droplets size={20} />,
    title: 'Bebek Bezi & Dışkı Analizi',
    description:
      'Pediatrik renk skalası eşleştirmesi; anormal renk ve sindirim ipuçlarında gecikmeden hekim uyarısı.',
  },
  {
    number: '04',
    icon: <MessageCircleHeart size={20} />,
    title: '0–24 Ay Dijital Aile Asistanı',
    description:
      'Uyku, beslenme, emzirme, bakım ve gelişim konularında yaşa uygun 7/24 bilimsel dijital rehberlik.',
  },
  {
    number: '05',
    icon: <Stethoscope size={20} />,
    title: 'Uzman & Doktor Kontrol Güvencesi',
    description: 'Yapay zekâ tek başına karar vermez; kritik süreçlerde çocuk hekimi ve uzmanların rehberliği esastır.',
  },
];

const appTabs = ['Ana Sayfa', 'Analiz', 'Asistan', 'Uzman'];

interface AppMockupScreenProps {
  activeTab: number;
}

function AppMockupScreen({ activeTab }: AppMockupScreenProps) {
  if (activeTab === 0) {
    return (
      <div className="flex flex-col gap-2 px-3 pb-3">
        <div className="bg-[#14BBB7]/10 rounded-2xl p-3">
          <p className="text-[10px] text-[#14BBB7] font-semibold mb-1">Bebeğiniz bu hafta</p>
          <div className="flex items-center gap-2">
            <Baby size={16} className="text-[#082A46]" />
            <p className="text-[#082A46] font-bold text-xs">6 aylık • İlk oturuş dönemi</p>
          </div>
        </div>
        {[
          { icon: <Activity size={12} />, label: 'Hareket Analizi', sub: 'Video yükle' },
          { icon: <ScanLine size={12} />, label: 'Cilt Analizi', sub: 'Fotoğraf çek' },
          { icon: <Moon size={12} />, label: 'Uyku Takibi', sub: 'Kaydet' },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-3 flex items-center gap-2 shadow-sm border border-gray-50">
            <div className="w-7 h-7 rounded-xl bg-[#14BBB7]/10 text-[#14BBB7] flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <div className="flex-1">
              <p className="text-[#082A46] font-semibold text-[10px]">{item.label}</p>
              <p className="text-[#082A46]/40 text-[8px]">{item.sub}</p>
            </div>
            <ChevronRight size={10} className="text-[#082A46]/30" />
          </div>
        ))}
      </div>
    );
  }

  if (activeTab === 1) {
    return (
      <div className="flex flex-col gap-2 px-3 pb-3">
        <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-50">
          <p className="text-[10px] text-[#082A46] font-bold mb-2">Hareket Raporu</p>
          <div className="flex gap-1 items-end h-10">
            {[3, 5, 4, 7, 6, 8, 7].map((h, i) => (
              <div key={i} className="flex-1 bg-[#14BBB7]/20 rounded-sm" style={{ height: `${h * 5}px` }} />
            ))}
          </div>
          <p className="text-[8px] text-[#082A46]/40 mt-1 text-center">Son 7 gün</p>
        </div>
        <div className="bg-[#14BBB7]/5 rounded-2xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <BarChart2 size={12} className="text-[#14BBB7]" />
            <p className="text-[10px] text-[#082A46] font-semibold">Değerlendirme Özeti</p>
          </div>
          <p className="text-[8px] text-[#082A46]/50 leading-relaxed">Yapay zekâ destekli gelişimsel izlem aktif.</p>
        </div>
      </div>
    );
  }

  if (activeTab === 2) {
    return (
      <div className="flex flex-col gap-2 px-3 pb-3">
        <div className="space-y-2">
          <div className="flex justify-start">
            <div className="bg-[#EDF3F4] rounded-2xl rounded-tl-sm px-3 py-2 max-w-[80%]">
              <p className="text-[9px] text-[#082A46]">Bebeğim 3 saatte bir uyanıyor, normal mi?</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#14BBB7] rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%]">
              <p className="text-[9px] text-white">Bu yaşta gece uyanmaları oldukça yaygın. 6 aylıktan sonra uyku düzeni genellikle oturur...</p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-[#EDF3F4] rounded-2xl rounded-tl-sm px-3 py-2 max-w-[80%]">
              <p className="text-[9px] text-[#082A46]">Ne zaman endişelenmeliyim?</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white rounded-2xl px-3 py-2 border border-gray-100 mt-1">
          <input readOnly className="flex-1 text-[8px] text-[#082A46]/40 bg-transparent outline-none" placeholder="Soru sor..." />
          <div className="w-5 h-5 rounded-full bg-[#14BBB7] flex items-center justify-center">
            <ChevronRight size={8} className="text-white" />
          </div>
        </div>
      </div>
    );
  }

  // Tab 3 — Uzman
  return (
    <div className="flex flex-col gap-2 px-3 pb-3">
      {['Pediatri Uzmanı', 'Fizyoterapist', 'Çocuk Psikoloğu'].map((uzman, i) => (
        <div key={i} className="bg-white rounded-2xl p-3 flex items-center gap-2 shadow-sm border border-gray-50">
          <div className="w-8 h-8 rounded-full bg-[#082A46]/10 flex items-center justify-center shrink-0">
            <Stethoscope size={12} className="text-[#082A46]" />
          </div>
          <div className="flex-1">
            <p className="text-[#082A46] font-semibold text-[10px]">{uzman}</p>
            <p className="text-[#082A46]/40 text-[8px]">Online randevu</p>
          </div>
          <span className="text-[8px] text-[#14BBB7] font-bold">Randevu</span>
        </div>
      ))}
    </div>
  );
}

export default function SolutionSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="dijitalbuyukanne" className="py-8 md:py-12 px-4 md:px-8 bg-[#F7FAFA] min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">

        {/* Header - Compact & Balanced */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-3.5 py-1 rounded-full border text-turquoise bg-turquoise/5 border-turquoise/15 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-pulse" />
            <span>Çözüm & Güvenlik</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-navy">
            Ailenin yanında dijital bir yol arkadaşı ve uzman hekim güvencesi.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-navy/60 leading-relaxed max-w-2xl mx-auto">
            Yapay zekâ 7/24 ön tarama ve takip sağlar; kritik durumlarda uzman hekimlerimiz ve danışmanlarımız kontrolü devralır.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* LEFT — Phone Mockup (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center gap-3">
            {/* Tab switcher */}
            <div className="flex gap-1 bg-white rounded-2xl p-1 shadow-xs border border-gray-100">
              {appTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    activeTab === i
                      ? 'bg-[#14BBB7] text-white shadow-xs'
                      : 'text-[#082A46]/60 hover:text-[#082A46]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 rounded-[40px] blur-2xl opacity-20 scale-90"
                style={{ background: 'radial-gradient(circle, #14BBB7 0%, transparent 70%)' }}
              />
              <PhoneMockup size="sm" label="Canlı Uygulama Önizlemesi">
                <div className="flex flex-col h-full bg-[#F7FAFA] rounded-[28px] overflow-hidden">
                  {/* App Header */}
                  <div className="bg-[#082A46] px-3.5 pt-4 pb-2.5 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#14BBB7] flex items-center justify-center">
                      <Baby size={11} className="text-white" />
                    </div>
                    <span className="text-white font-bold text-xs">DijitalBüyükanne</span>
                  </div>

                  {/* Tab nav in phone */}
                  <div className="flex border-b border-gray-100 bg-white px-2 pt-1">
                    {appTabs.map((tab, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTab(i)}
                        className={`flex-1 pb-1 text-[8px] font-semibold transition-colors ${
                          activeTab === i
                            ? 'text-[#14BBB7] border-b-2 border-[#14BBB7]'
                            : 'text-[#082A46]/40'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Screen content */}
                  <div className="flex-1 overflow-hidden pt-2.5">
                    <AppMockupScreen activeTab={activeTab} />
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>

          {/* RIGHT — Feature Cards (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-2.5">
            {features.map((feature, i) => (
              <div
                key={i}
                className="premium-card border border-gray-100/90 hover:border-turquoise/30 p-3 sm:p-3.5 rounded-2xl bg-white shadow-2xs flex gap-3.5 items-center group cursor-default relative transition-all"
              >
                {/* Left accent gradient bar */}
                <div className="absolute left-0 top-3 bottom-3 w-0.5 bg-turquoise/15 group-hover:bg-gradient-to-b group-hover:from-turquoise group-hover:to-teal-400 group-hover:w-1 rounded-full transition-all duration-300" />

                {/* Number badge + icon */}
                <div className="shrink-0 flex items-center gap-2 pl-2">
                  <span className="text-[11px] font-black text-turquoise/40 group-hover:text-turquoise tracking-wider transition-colors duration-300">{feature.number}</span>
                  <div className="w-9 h-9 rounded-xl bg-turquoise/10 text-turquoise flex items-center justify-center group-hover:bg-turquoise group-hover:text-white group-hover:scale-105 group-hover:shadow-xs group-hover:shadow-turquoise/25 transition-all duration-300">
                    {feature.icon}
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-navy text-xs sm:text-sm group-hover:text-turquoise transition-colors duration-300 leading-snug">{feature.title}</h3>
                  <p className="text-navy/60 text-[11px] sm:text-xs leading-relaxed line-clamp-2 mt-0.5">{feature.description}</p>
                </div>
              </div>
            ))}

            {/* Compact Slogan Footer Bar */}
            <div className="pt-1.5 flex items-center justify-between px-4 py-2 rounded-2xl bg-gradient-to-r from-[#082A46] via-[#0e3b61] to-[#082A46] text-white shadow-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-turquoise animate-pulse" />
                <span className="font-extrabold text-xs sm:text-sm tracking-tight">
                  Tek uygulama. <span className="text-turquoise">Beş güçlü hizmet.</span>
                </span>
              </div>
              <span className="text-[10px] text-white/60 font-mono hidden sm:inline">0–24 Ay Ekosistem</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
