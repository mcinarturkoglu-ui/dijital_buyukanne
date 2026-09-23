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
    <section id="dijitalbuyukanne" className="py-20 md:py-28 px-4 md:px-8 bg-[#F7FAFA]">
      <div className="max-w-6xl mx-auto">

        <SectionHeader
          eyebrow="Çözüm & Güvenlik"
          title="Ailenin yanında dijital bir yol arkadaşı ve uzman hekim güvencesi."
          subtitle="Yapay zekâ 7/24 ön tarama ve takip sağlar; kritik durumlarda uzman hekimlerimiz ve danışmanlarımız kontrolü devralır."
          centered
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Phone Mockup */}
          <div className="flex flex-col items-center gap-4">
            {/* Tab switcher */}
            <div className="flex gap-1 bg-white rounded-2xl p-1 shadow-sm border border-gray-100">
              {appTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    activeTab === i
                      ? 'bg-[#14BBB7] text-white shadow-sm'
                      : 'text-[#082A46]/50 hover:text-[#082A46]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 rounded-[40px] blur-3xl opacity-20 scale-90"
                style={{ background: 'radial-gradient(circle, #14BBB7 0%, transparent 70%)' }}
              />
              <PhoneMockup size="md" label="Örnek görünüm">
                <div className="flex flex-col h-full bg-[#F7FAFA] rounded-[28px] overflow-hidden">
                  {/* App Header */}
                  <div className="bg-[#082A46] px-4 pt-5 pb-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#14BBB7] flex items-center justify-center">
                      <Baby size={12} className="text-white" />
                    </div>
                    <span className="text-white font-bold text-xs">DijitalBüyükanne</span>
                  </div>

                  {/* Tab nav in phone */}
                  <div className="flex border-b border-gray-100 bg-white px-2 pt-1">
                    {appTabs.map((tab, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTab(i)}
                        className={`flex-1 pb-1.5 text-[8px] font-semibold transition-colors ${
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
                  <div className="flex-1 overflow-hidden pt-3">
                    <AppMockupScreen activeTab={activeTab} />
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>

          {/* RIGHT — Feature Cards */}
          <div className="flex flex-col gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="premium-card border border-gray-100/80 hover:border-turquoise/30 p-6 flex gap-5 items-start group cursor-default relative"
              >
                {/* Left accent gradient bar */}
                <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-turquoise/15 group-hover:bg-gradient-to-b group-hover:from-turquoise group-hover:to-teal-400 group-hover:w-1 rounded-full transition-all duration-500" />

                {/* Number badge + icon */}
                <div className="shrink-0 flex flex-col items-center gap-2 pl-2">
                  <span className="text-xs font-black text-turquoise/30 group-hover:text-turquoise tracking-wider transition-colors duration-300">{feature.number}</span>
                  <div className="w-12 h-12 rounded-2xl bg-turquoise/10 text-turquoise flex items-center justify-center group-hover:bg-turquoise group-hover:text-white group-hover:scale-110 group-hover:shadow-md group-hover:shadow-turquoise/25 transition-all duration-500">
                    {feature.icon}
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="font-bold text-navy text-base mb-1.5 group-hover:text-turquoise transition-colors duration-300">{feature.title}</h3>
                  <p className="text-navy/55 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Slogan Footer */}
        <div className="mt-20 text-center">
          <div className="shimmer-btn inline-flex items-center gap-3 bg-gradient-to-r from-[#082A46] via-[#0e3b61] to-[#082A46] rounded-3xl px-8 py-5 shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-turquoise animate-pulse" />
            <p className="text-white font-extrabold text-xl md:text-2xl tracking-tight">
              Tek uygulama.{' '}
              <span className="text-turquoise">Beş güçlü hizmet.</span>
            </p>
            <span className="w-2.5 h-2.5 rounded-full bg-coral animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
