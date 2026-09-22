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
  Droplets,
  ArrowRight,
  ShieldCheck,
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
    icon: <Droplets size={18} />,
    label: 'Bebek Bezi & Dışkı',
    desc: 'Pediatrik renk ve sindirim takibi',
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
      <div className="bg-gradient-to-r from-[#082A46] to-[#0d3b61] px-4 pt-5 pb-3 flex items-center justify-between border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#14BBB7] to-teal-300 flex items-center justify-center text-[#082A46] font-black shadow-sm">
            <Baby size={14} className="stroke-[2.5]" />
          </div>
          <span className="text-white font-bold text-xs tracking-wide">DijitalBüyükanne</span>
        </div>
        <span className="text-[8px] font-mono bg-turquoise/20 text-turquoise px-2 py-0.5 rounded-full border border-turquoise/40 font-bold">
          BabySensAI
        </span>
      </div>

      {/* Screen Mode Switcher Tabs inside Phone */}
      <div className="flex items-center justify-between bg-slate-900/90 p-1.5 border-b border-white/10 shrink-0 gap-1">
        <button
          onClick={() => setActiveScreen('menu')}
          className={`flex-1 py-1.5 rounded-lg text-[9px] font-bold transition-all ${
            activeScreen === 'menu'
              ? 'bg-turquoise text-navy shadow-sm'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          📱 Menü
        </button>
        <button
          onClick={() => setActiveScreen('video')}
          className={`flex-1 py-1.5 rounded-lg text-[9px] font-bold transition-all flex items-center justify-center gap-1 ${
            activeScreen === 'video'
              ? 'bg-coral text-white shadow-sm'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          <span>🎥 AI Video</span>
        </button>
        <button
          onClick={() => setActiveScreen('voice')}
          className={`flex-1 py-1.5 rounded-lg text-[9px] font-bold transition-all ${
            activeScreen === 'voice'
              ? 'bg-turquoise text-navy shadow-sm'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          🎙️ Sesli Not
        </button>
      </div>

      {/* Main Content Body */}
      <div className="flex-1 overflow-hidden flex flex-col justify-between p-3">
        {activeScreen === 'menu' && (
          <div className="flex flex-col gap-2 overflow-y-auto pr-0.5">
            <div className="bg-gradient-to-r from-turquoise/15 to-turquoise/5 p-2.5 rounded-2xl border border-turquoise/25">
              <p className="text-[9px] text-turquoise font-bold uppercase tracking-wider flex items-center gap-1">
                <Sparkles size={10} />
                Hoş Geldiniz
              </p>
              <p className="text-white font-semibold text-[11px] mt-0.5">Bebeğinizin yanındayız 👶</p>
            </div>
            {menuItems.map((item, i) => (
              <div
                key={i}
                className="bg-white/[0.08] hover:bg-white/[0.14] rounded-2xl px-3 py-2 flex items-center gap-2.5 border border-white/5 transition-all duration-200 group cursor-default"
              >
                <div className="w-7 h-7 rounded-xl bg-turquoise/20 group-hover:bg-turquoise/30 flex items-center justify-center text-turquoise shrink-0 transition-colors">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-white font-bold text-[10px] leading-tight truncate group-hover:text-turquoise transition-colors">
                    {item.label}
                  </p>
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
              className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-turquoise to-transparent shadow-[0_0_10px_#14BBB7] pointer-events-none"
              style={{ top: `${videoProgress}%` }}
            />

            {/* Video Header overlay */}
            <div className="flex items-center justify-between text-[8px] text-white/80 font-mono">
              <span className="flex items-center gap-1 text-red-400 font-bold bg-red-500/10 px-1.5 py-0.5 rounded border border-red-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                CANLI ANALİZ
              </span>
              <span className="text-turquoise font-bold">GMA: %98.2</span>
            </div>

            {/* Video Motion Skeleton SVG */}
            <div className="relative w-full h-36 flex items-center justify-center">
              <svg viewBox="0 0 160 120" className="w-full h-full stroke-turquoise stroke-[2] fill-none drop-shadow-[0_0_6px_rgba(20,187,183,0.4)]">
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
            <div className="bg-white/10 rounded-xl p-2 flex flex-col gap-1 border border-white/5">
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-turquoise to-coral rounded-full transition-all"
                  style={{ width: `${videoProgress}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[8px] font-mono text-white/70">
                <span>00:{String(Math.floor(videoProgress / 3)).padStart(2, '0')} / 00:30</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Hareket Akıcı
                </span>
              </div>
            </div>
          </div>
        )}

        {activeScreen === 'voice' && (
          <div className="flex-1 flex flex-col justify-between bg-slate-950 rounded-2xl border border-white/10 p-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-turquoise/20 flex items-center justify-center text-turquoise text-lg">
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
      className="relative overflow-hidden pt-36 sm:pt-40 lg:pt-44 pb-20 sm:pb-24"
      style={{ background: 'linear-gradient(135deg, #061e33 0%, #082A46 45%, #0a3558 75%, #0d1f30 100%)' }}
    >
      {/* Decorative ambient glowing circles & background mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full opacity-15 animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, #14BBB7 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-48 -left-24 w-[450px] h-[450px] rounded-full opacity-15 animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, #FF7965 0%, transparent 70%)', animationDelay: '1.5s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 pointer-events-none"
          style={{ border: '1px dashed #14BBB7' }}
        />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Copy */}
          <div className="flex flex-col items-start hero-fade-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-wider uppercase text-turquoise bg-turquoise/10 border border-turquoise/30 rounded-full px-4 py-2 mb-6 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-turquoise opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-turquoise" />
              </span>
              <span>0–24 Ay Bebek ve Aile Destek Ekosistemi</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.35rem] font-extrabold text-white leading-[1.15] mb-6 tracking-tight">
              Her bebeğin bir{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise via-teal-300 to-turquoise drop-shadow-sm">
                Dijital Büyükannesi
              </span>{' '}
              olsun.
            </h1>

            {/* Description */}
            <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-xl font-normal">
              DijitalBüyükanne; ailelerin bebeklerinin gelişim yolculuğunu takip etmelerine yardımcı olan, güvenilir bilgiye erişimi kolaylaştıran, yapay zekâ destekli video hareket ve cilt analizlerini uzman desteğiyle buluşturan yeni nesil dijital platformdur.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <Link
                href="#hareket-analizi"
                className="relative overflow-hidden group px-6 py-4 text-sm md:text-base font-bold rounded-2xl bg-gradient-to-r from-coral to-[#e8634f] text-white shadow-lg hover:shadow-glow-coral hover:-translate-y-0.5 active:scale-98 transition-all duration-300 inline-flex items-center justify-center gap-2.5"
              >
                {/* Button shine sweep */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
                <Play size={16} className="fill-white" />
                <span className="relative z-10">Canlı AI Simülasyonunu İzle</span>
              </Link>
              
              <Link
                href="#dijitalbuyukanne"
                className="px-6 py-4 text-sm md:text-base font-bold rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-navy hover:border-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-98 transition-all duration-300 inline-flex items-center justify-center"
              >
                Özellikleri Keşfet
              </Link>

              <Link
                href="/kurumlar"
                className="px-4 py-4 text-sm md:text-base font-bold text-turquoise hover:text-white transition-colors inline-flex items-center gap-1.5 group"
              >
                <span>Kurumlar İçin</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-2.5 text-white/70 text-xs md:text-sm bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
              <ShieldCheck size={16} className="text-turquoise shrink-0" />
              <span>BabySensAI Kinematik Motoru • Bilim + Yapay Zekâ + Uzman Desteği</span>
            </div>
          </div>

          {/* RIGHT — Interactive Phone Mockup */}
          <div className="flex justify-center lg:justify-end hero-fade-right">
            <div className="relative animate-float-slow">
              <div
                className="absolute inset-0 rounded-[40px] blur-3xl opacity-40 scale-95 animate-pulse-glow"
                style={{ background: 'radial-gradient(circle, #14BBB7 0%, #082A46 80%)' }}
              />

              {/* Interactive pill 1 */}
              <button
                onClick={() => setActiveScreen('video')}
                className="hidden sm:flex items-center gap-2 absolute -left-8 sm:-left-12 top-20 bg-[#082A46]/90 backdrop-blur-xl text-white text-xs font-bold px-4 py-2.5 rounded-2xl shadow-2xl z-20 border border-white/20 hover:scale-105 hover:border-coral transition-all duration-200 cursor-pointer group"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-coral animate-ping" />
                <span className="group-hover:text-coral transition-colors">🎥 AI Video Takibi</span>
              </button>

              {/* Interactive pill 2 */}
              <button
                onClick={() => setActiveScreen('voice')}
                className="hidden sm:flex items-center gap-2 absolute -right-6 sm:-right-10 bottom-16 bg-[#082A46]/90 backdrop-blur-xl text-white text-xs font-bold px-4 py-2.5 rounded-2xl shadow-2xl z-20 border border-white/20 hover:scale-105 hover:border-turquoise transition-all duration-200 cursor-pointer group"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-turquoise animate-pulse" />
                <span className="group-hover:text-turquoise transition-colors">🎙️ 7/24 Büyükanne Sesi</span>
              </button>

              <PhoneMockup size="lg" dark label="Canlı İnteraktif Simülatör">
                <HeroAppScreen activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
              </PhoneMockup>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce z-10 pointer-events-none">
        <span className="text-white/60 text-[10px] tracking-widest uppercase font-bold bg-white/10 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
          Aşağı Kaydır
        </span>
        <ChevronDown size={16} className="text-turquoise" />
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
