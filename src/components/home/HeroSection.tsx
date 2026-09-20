'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import PhoneMockup from '@/components/ui/PhoneMockup';
import {
  Baby,
  Activity,
  ScanLine,
  MessageCircleHeart,
  Stethoscope,
  ChevronDown,
  Play,
  Sparkles,
  Volume2,
  Video,
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

function HeroAppScreen({
  activeScreen,
  setActiveScreen,
}: {
  activeScreen: 'menu' | 'video' | 'voice';
  setActiveScreen: (s: 'menu' | 'video' | 'voice') => void;
}) {
  const [videoProgress, setVideoProgress] = useState(30);

  useEffect(() => {
    if (activeScreen !== 'video') return;
    const t = setInterval(() => {
      setVideoProgress((prev) => (prev >= 98 ? 10 : prev + 2));
    }, 150);
    return () => clearInterval(t);
  }, [activeScreen]);

  return (
    <div className="flex flex-col h-full bg-[#081a2b] text-white rounded-[28px] overflow-hidden select-none">
      {/* App Header */}
      <div className="bg-[#082A46] px-4 pt-5 pb-3 flex items-center justify-between border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#14BBB7] flex items-center justify-center text-white">
            <Baby size={14} />
          </div>
          <span className="text-white font-bold text-xs tracking-wide">DijitalBüyükanne</span>
        </div>
        <span className="text-[8px] font-mono bg-turquoise/20 text-turquoise px-2 py-0.5 rounded-full border border-turquoise/30">
          BabySensAI
        </span>
      </div>

      {/* Screen Mode Switcher Tabs inside Phone */}
      <div className="flex items-center justify-between bg-slate-900/90 p-1.5 border-b border-white/10 shrink-0">
        <button
          onClick={() => setActiveScreen('menu')}
          className={`flex-1 py-1 rounded-lg text-[9px] font-bold transition-all ${
            activeScreen === 'menu' ? 'bg-turquoise text-navy shadow-sm' : 'text-white/60 hover:text-white'
          }`}
        >
          📱 Menü
        </button>
        <button
          onClick={() => setActiveScreen('video')}
          className={`flex-1 py-1 rounded-lg text-[9px] font-bold transition-all flex items-center justify-center gap-1 ${
            activeScreen === 'video' ? 'bg-coral text-white shadow-sm' : 'text-white/60 hover:text-white'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
          <span>🎥 AI Video</span>
        </button>
        <button
          onClick={() => setActiveScreen('voice')}
          className={`flex-1 py-1 rounded-lg text-[9px] font-bold transition-all ${
            activeScreen === 'voice' ? 'bg-turquoise text-navy shadow-sm' : 'text-white/60 hover:text-white'
          }`}
        >
          🎙️ Sesli Not
        </button>
      </div>

      {/* Main Content Body */}
      <div className="flex-1 overflow-hidden flex flex-col justify-between p-3">
        {activeScreen === 'menu' && (
          <div className="flex flex-col gap-2 overflow-y-auto">
            <div className="bg-turquoise/10 p-2.5 rounded-xl border border-turquoise/20">
              <p className="text-[9px] text-turquoise font-bold uppercase tracking-wider">Hoş Geldiniz</p>
              <p className="text-white font-semibold text-[11px] mt-0.5">Bebeğinizin yanındayız 👶</p>
            </div>
            {menuItems.map((item, i) => (
              <div
                key={i}
                className="bg-white/10 hover:bg-white/15 rounded-xl px-3 py-2 flex items-center gap-2.5 border border-white/5 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-turquoise/20 flex items-center justify-center text-turquoise shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-white font-bold text-[10px] leading-tight truncate">{item.label}</p>
                  <p className="text-white/60 text-[8px] leading-tight truncate mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeScreen === 'video' && (
          <div className="flex-1 flex flex-col justify-between bg-slate-950 rounded-2xl border border-white/10 p-2.5 relative overflow-hidden">
            {/* Real-time scanline */}
            <div
              className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-turquoise to-transparent shadow-[0_0_8px_#14BBB7] pointer-events-none"
              style={{ top: `${videoProgress}%` }}
            />

            {/* Video Header overlay */}
            <div className="flex items-center justify-between text-[8px] text-white/80 font-mono">
              <span className="flex items-center gap-1 text-red-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                CANLI ANALİZ
              </span>
              <span>GMA: %98.2</span>
            </div>

            {/* Video Motion Skeleton SVG */}
            <div className="relative w-full h-36 flex items-center justify-center">
              <svg viewBox="0 0 160 120" className="w-full h-full stroke-turquoise stroke-[2] fill-none drop-shadow">
                {/* Moving infant limbs */}
                <circle cx="80" cy={35 + Math.sin(videoProgress * 0.1) * 3} r="7" fill="#082A46" stroke="#14BBB7" strokeWidth="2" />
                <line x1="80" y1="42" x2="80" y2="70" />
                {/* Left Arm */}
                <line x1="80" y1="50" x2={55 + Math.cos(videoProgress * 0.15) * 6} y2={45 + Math.sin(videoProgress * 0.15) * 6} />
                {/* Right Arm */}
                <line x1="80" y1="50" x2={105 + Math.sin(videoProgress * 0.15) * 6} y2={45 + Math.cos(videoProgress * 0.15) * 6} />
                {/* Left Leg */}
                <line x1="80" y1="70" x2={62 + Math.sin(videoProgress * 0.2) * 8} y2={95 + Math.cos(videoProgress * 0.2) * 6} />
                {/* Right Leg */}
                <line x1="80" y1="70" x2={98 + Math.cos(videoProgress * 0.2) * 8} y2={95 + Math.sin(videoProgress * 0.2) * 6} />
              </svg>
            </div>

            {/* Video bottom scrubber */}
            <div className="bg-white/10 rounded-lg p-2 flex flex-col gap-1">
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-turquoise rounded-full transition-all" style={{ width: `${videoProgress}%` }} />
              </div>
              <div className="flex items-center justify-between text-[8px] font-mono text-white/70">
                <span>00:{String(Math.floor(videoProgress / 3)).padStart(2, '0')} / 00:30</span>
                <span className="text-emerald-400 font-bold">Hareket Akıcı</span>
              </div>
            </div>
          </div>
        )}

        {activeScreen === 'voice' && (
          <div className="flex-1 flex flex-col justify-between bg-slate-950 rounded-2xl border border-white/10 p-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-turquoise/20 flex items-center justify-center text-turquoise text-lg">
                👵
              </div>
              <div>
                <p className="text-white font-bold text-[10px]">Büyükanne Sesli Notu</p>
                <p className="text-white/50 text-[8px]">Uyku Rutini Rehberi</p>
              </div>
            </div>

            {/* Animated Soundwave bars */}
            <div className="flex items-center justify-center gap-1 h-12 bg-white/5 rounded-xl px-2">
              {[30, 70, 100, 45, 85, 30, 95, 60, 40, 80, 50, 90, 35].map((h, idx) => (
                <span
                  key={idx}
                  className="w-1.5 rounded-full bg-gradient-to-t from-turquoise to-teal-300 animate-soundwave"
                  style={{
                    height: `${h}%`,
                    animationDelay: `${(idx % 4) * 0.2}s`,
                  }}
                />
              ))}
            </div>

            <p className="text-[9px] text-white/80 italic leading-relaxed text-center bg-white/5 p-2 rounded-xl border border-white/5">
              &ldquo;Kuzum ışıkları açmadan hafifçe pışpışla, şimdi sakinleşecek...&rdquo;
            </p>
          </div>
        )}

        {/* Bottom Nav */}
        <div className="bg-slate-900 border border-white/10 rounded-xl px-3 py-1.5 flex justify-around items-center shrink-0 mt-2">
          {['Ana Sayfa', 'Video', 'Cilt', 'Asistan'].map((nav, i) => (
            <span
              key={i}
              className={`text-[8px] font-bold ${
                (activeScreen === 'menu' && i === 0) ||
                (activeScreen === 'video' && i === 1) ||
                (activeScreen === 'voice' && i === 3)
                  ? 'text-turquoise'
                  : 'text-white/40'
              }`}
            >
              {nav}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [activeScreen, setActiveScreen] = useState<'menu' | 'video' | 'voice'>('video');

  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #082A46 0%, #0a3558 60%, #0d1f30 100%)' }}
    >
      {/* Decorative ambient glowing circles */}
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
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Copy */}
          <div className="flex flex-col items-start hero-fade-left">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#14BBB7] bg-[#14BBB7]/10 border border-[#14BBB7]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-turquoise animate-ping" />
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
              DijitalBüyükanne; ailelerin bebeklerinin gelişim yolculuğunu takip etmelerine yardımcı olan, güvenilir bilgiye erişimi kolaylaştıran, yapay zekâ destekli video hareket ve cilt analizlerini uzman desteğiyle buluşturan yeni nesil dijital platformdur.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <Link
                href="#hareket-analizi"
                className="px-6 py-3.5 text-sm md:text-base font-bold rounded-2xl bg-coral text-white hover:bg-[#e8634f] active:bg-[#d9523e] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
              >
                <Play size={16} className="fill-white" />
                <span>Canlı AI Simülasyonunu İzle</span>
              </Link>
              
              <Link
                href="#dijitalbuyukanne"
                className="px-6 py-3.5 text-sm md:text-base font-bold rounded-2xl border-2 border-white/50 bg-white/5 text-white hover:bg-white hover:text-navy transition-all duration-200 inline-flex items-center justify-center"
              >
                Özellikleri Keşfet
              </Link>

              <Link
                href="/kurumlar"
                className="px-5 py-3.5 text-sm md:text-base font-bold text-turquoise hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>Kurumlar İçin</span>
                <span>→</span>
              </Link>
            </div>

            {/* Trust text */}
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span className="inline-block w-8 h-px bg-[#14BBB7]/60" />
              <span>BabySensAI Kinematik Motoru • Bilim + Yapay Zekâ + Uzman Desteği</span>
            </div>
          </div>

          {/* RIGHT — Interactive Phone Mockup */}
          <div className="flex justify-center lg:justify-end hero-fade-right">
            <div className="relative animate-float-slow">
              <div
                className="absolute inset-0 rounded-[40px] blur-3xl opacity-35 scale-95 animate-pulse-glow"
                style={{ background: 'radial-gradient(circle, #14BBB7 0%, #082A46 80%)' }}
              />

              {/* Interactive pill 1 */}
              <button
                onClick={() => setActiveScreen('video')}
                className="hidden sm:flex items-center gap-2 absolute -left-10 top-16 bg-white/95 backdrop-blur-md text-navy text-xs font-bold px-3.5 py-2 rounded-2xl shadow-xl z-20 border border-white/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span>🎥 AI Video Takibi</span>
              </button>

              {/* Interactive pill 2 */}
              <button
                onClick={() => setActiveScreen('voice')}
                className="hidden sm:flex items-center gap-2 absolute -right-8 bottom-24 bg-white/95 backdrop-blur-md text-navy text-xs font-bold px-3.5 py-2 rounded-2xl shadow-xl z-20 border border-white/40 hover:scale-105 transition-transform cursor-pointer"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-turquoise animate-pulse" />
                <span>🎙️ 7/24 Büyükanne Sesi</span>
              </button>

              <PhoneMockup size="lg" dark label="Canlı İnteraktif Simülatör">
                <HeroAppScreen activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
              </PhoneMockup>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce z-10">
        <span className="text-white/50 text-[11px] tracking-widest uppercase font-semibold">Aşağı Kaydır</span>
        <ChevronDown size={18} className="text-white/50" />
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
