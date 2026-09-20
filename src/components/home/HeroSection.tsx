'use client';

import Link from 'next/link';
import PhoneMockup from '@/components/ui/PhoneMockup';
import {
  Baby,
  Activity,
  ScanLine,
  MessageCircleHeart,
  Stethoscope,
  ChevronDown,
} from 'lucide-react';

const menuItems = [
  {
    icon: <Baby size={18} />,
    label: 'Bebeğim',
    desc: 'Gelişim takibi ve günlük kayıtlar',
  },
  {
    icon: <Activity size={18} />,
    label: 'Hareket Analizi',
    desc: 'Yapay zekâ destekli değerlendirme',
  },
  {
    icon: <ScanLine size={18} />,
    label: 'Cilt Analizi',
    desc: 'Fotoğrafla ön bilgilendirme',
  },
  {
    icon: <MessageCircleHeart size={18} />,
    label: "Dijital Büyükanne'ye Sor",
    desc: 'Her soru için güvenilir rehberlik',
  },
  {
    icon: <Stethoscope size={18} />,
    label: 'Uzmanına Danış',
    desc: 'Doğru desteğe kolay erişim',
  },
];

const AppScreen = () => (
  <div className="flex flex-col h-full bg-[#F7FAFA] rounded-[28px] overflow-hidden">
    {/* App Header */}
    <div className="bg-[#082A46] px-4 pt-6 pb-4 flex items-center gap-2">
      <div className="w-7 h-7 rounded-full bg-[#14BBB7] flex items-center justify-center">
        <Baby size={14} className="text-white" />
      </div>
      <span className="text-white font-bold text-sm tracking-wide">DijitalBüyükanne</span>
    </div>

    {/* Greeting Banner */}
    <div className="bg-[#14BBB7]/10 px-4 py-3 border-b border-[#14BBB7]/20">
      <p className="text-[10px] text-[#082A46]/60 font-medium uppercase tracking-wider">Hoş geldiniz</p>
      <p className="text-[#082A46] font-semibold text-xs mt-0.5">Bebeğinizin yanındayız 👶</p>
    </div>

    {/* Menu Items */}
    <div className="flex-1 overflow-hidden px-3 py-3 flex flex-col gap-2">
      {menuItems.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl px-3 py-2.5 flex items-center gap-3 shadow-sm border border-gray-100"
        >
          <div className="w-8 h-8 rounded-xl bg-[#14BBB7]/15 flex items-center justify-center text-[#14BBB7] shrink-0">
            {item.icon}
          </div>
          <div>
            <p className="text-[#082A46] font-semibold text-[11px] leading-tight">{item.label}</p>
            <p className="text-[#082A46]/50 text-[9px] mt-0.5 leading-tight">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom Nav */}
    <div className="bg-white border-t border-gray-100 px-4 py-2 flex justify-around items-center">
      {['Ana Sayfa', 'Bebek', 'Analiz', 'Profil'].map((nav, i) => (
        <div key={i} className={`flex flex-col items-center gap-0.5 ${i === 0 ? 'text-[#14BBB7]' : 'text-gray-300'}`}>
          <div className="w-4 h-4 rounded-full bg-current opacity-60" />
          <span className="text-[7px] font-medium">{nav}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #082A46 0%, #0a3558 60%, #0d1f30 100%)' }}
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10 animate-pulse"
          style={{ background: 'radial-gradient(circle, #14BBB7 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-48 -left-24 w-[400px] h-[400px] rounded-full opacity-10 animate-pulse"
          style={{ background: 'radial-gradient(circle, #FF7965 0%, transparent 70%)', animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-5"
          style={{ border: '1px solid #14BBB7' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-5"
          style={{ border: '1px solid #14BBB7' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Copy */}
          <div className="flex flex-col items-start hero-fade-left">
            {/* Eyebrow */}
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#14BBB7] bg-[#14BBB7]/10 border border-[#14BBB7]/30 rounded-full px-4 py-1.5 mb-6">
              0–24 Ay Bebek ve Aile Destek Ekosistemi
            </span>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-6">
              Her bebeğin bir{' '}
              <span className="text-[#14BBB7]">Dijital Büyükannesi</span>{' '}
              olsun.
            </h1>

            {/* Description */}
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-normal">
              DijitalBüyükanne; ailelerin bebeklerinin gelişim yolculuğunu takip etmelerine yardımcı olan, güvenilir bilgiye erişimi kolaylaştıran, yapay zekâ destekli dijital hizmetleri uzman desteğiyle buluşturan yeni nesil aile destek platformudur.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="#dijitalbuyukanne"
                className="px-7 py-3.5 text-base font-bold rounded-2xl bg-coral text-white hover:bg-[#e8634f] active:bg-[#d9523e] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center"
              >
                DijitalBüyükanne&apos;yi Keşfet
              </Link>
              <Link
                href="/kurumlar"
                className="px-7 py-3.5 text-base font-bold rounded-2xl border-2 border-white/60 bg-white/5 text-white hover:bg-white hover:text-navy active:bg-slate-100 transition-all duration-200 inline-flex items-center justify-center shadow-sm"
              >
                Kurumunuz İçin İnceleyin
              </Link>
            </div>


            {/* Trust text */}
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <span className="inline-block w-8 h-px bg-[#14BBB7]/60" />
              <span>Bilim + Yapay Zekâ + Sosyal Sorumluluk</span>
            </div>
          </div>

          {/* RIGHT — Phone Mockup */}
          <div className="flex justify-center lg:justify-end hero-fade-right">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-[40px] blur-3xl opacity-30 scale-90"
                style={{ background: 'radial-gradient(circle, #14BBB7 0%, transparent 70%)' }}
              />
              <PhoneMockup size="lg" dark label="DijitalBüyükanne Uygulaması">
                <AppScreen />
              </PhoneMockup>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10">
        <span className="text-white/40 text-xs tracking-widest uppercase">Keşfet</span>
        <ChevronDown size={20} className="text-white/40" />
      </div>

      <style>{`
        .hero-fade-left {
          animation: heroFadeLeft 0.8s ease both;
        }
        .hero-fade-right {
          animation: heroFadeRight 0.8s ease 0.2s both;
        }
        @keyframes heroFadeLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroFadeRight {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
