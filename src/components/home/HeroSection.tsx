'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PhoneMockup from '@/components/ui/PhoneMockup';
import {
  Baby,
  ScanLine,
  ChevronDown,
  Play,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Activity,
  Heart,
  MessageCircle,
  Eye,
  CheckCircle2,
  Clock,
  TrendingUp,
  FileText,
} from 'lucide-react';

function HeroAppScreen({
  activeScreen,
  setActiveScreen,
}: {
  activeScreen: 'video' | 'scan' | 'assistant';
  setActiveScreen: (s: 'video' | 'scan' | 'assistant') => void;
}) {
  const [videoProgress, setVideoProgress] = useState(35);
  const [scanPulse, setScanPulse] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);

  const startSimulation = () => {
    setIsSimulating(true);
    setSimStep(1);
    setTimeout(() => setSimStep(2), 1000);
    setTimeout(() => setSimStep(3), 2200);
    setTimeout(() => {
      setIsSimulating(false);
      setSimStep(0);
    }, 4500);
  };

  // Video scanner animation
  useEffect(() => {
    if (activeScreen !== 'video') return;
    const t = setInterval(() => {
      setVideoProgress((prev) => (prev >= 96 ? 12 : prev + 2));
    }, 120);
    return () => clearInterval(t);
  }, [activeScreen]);

  // Scan pulse animation
  useEffect(() => {
    if (activeScreen !== 'scan') return;
    const t = setInterval(() => {
      setScanPulse((prev) => !prev);
    }, 1200);
    return () => clearInterval(t);
  }, [activeScreen]);

  const assistantPrompts = [
    {
      q: 'Bebeğim gece aniden uyandı ve huzursuz. Ne yapmalıyım?',
      a: 'Derin bir nefes alın 🌿 4. ay atak döneminde gece uyanmaları çok doğaldır. Işıkları açmadan ten teması kurup hafifçe pışpışlayın; adım adım sakinleştireceğiz.',
      badge: 'Gece 03:24 • Uyku Rutini',
    },
    {
      q: 'Bezinde hafif yeşilimsi renk gördüm, endişelenmeli miyim?',
      a: 'Bebek bezindeki yeşil ton genellikle hızlı bağırsak geçişinden veya beslenme değişiminden kaynaklanır. Renk taramamız güvenli aralıkta; genel neşesi iyiyse gözleme devam edin 🍼',
      badge: 'Sabah 09:15 • Sindirim İzlemi',
    },
    {
      q: 'Yüzünde küçük kızarıklıklar çıktı, alerji olabilir mi?',
      a: 'Yenidoğanlarda toksik eritem veya sıcaklık döküntüsü yaygındır. Cilt fotoğraflı ön taramamız alerjik bir bariyer hasarı tespit etmedi; serin tutarak izleyebilirsiniz 🩺',
      badge: 'Öğle 14:02 • Cilt Hassasiyeti',
    },
  ];

  return (
    <div className="flex flex-col h-full bg-[#121633] text-white rounded-[28px] overflow-hidden select-none border border-white/15 shadow-2xl">
      {/* App Header */}
      <div className="bg-gradient-to-r from-[#1E2554] via-[#2A346C] to-[#1E2554] px-4 pt-5 pb-3 flex items-center justify-between border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center p-0.5 shadow-sm overflow-hidden">
            <Image
              src="/images/mascot.png"
              alt="Dijital Büyükanne Maskot"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-white font-black text-xs tracking-wide block leading-none">DijitalBüyükanne</span>
            <span className="text-[8px] text-indigo-300 font-mono">DEMO</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-indigo-500/20 px-2.5 py-1 rounded-full border border-indigo-400/40">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-300 animate-pulse" />
          <span className="text-[8px] font-mono text-indigo-200 font-bold uppercase tracking-wider">
            BabySensAI v2.4
          </span>
        </div>
      </div>

      {/* Screen Mode Switcher Tabs inside Phone */}
      <div className="flex items-center justify-between bg-slate-900/90 p-1.5 border-b border-white/10 shrink-0 gap-1.5">
        <button
          onClick={() => setActiveScreen('video')}
          className={`flex-1 py-1.5 rounded-xl text-[9px] font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeScreen === 'video'
              ? 'bg-gradient-to-r from-coral to-[#e8634f] text-white shadow-md shadow-coral/30 ring-1 ring-white/20'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <Activity size={11} className={activeScreen === 'video' ? 'animate-pulse' : ''} />
          <span>Hareket Analizi</span>
        </button>

        <button
          onClick={() => setActiveScreen('scan')}
          className={`flex-1 py-1.5 rounded-xl text-[9px] font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeScreen === 'scan'
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-md shadow-indigo-500/30 ring-1 ring-white/20'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <ScanLine size={11} />
          <span>Bez & Cilt Analizi</span>
        </button>

        <button
          onClick={() => setActiveScreen('assistant')}
          className={`flex-1 py-1.5 rounded-xl text-[9px] font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeScreen === 'assistant'
              ? 'bg-gradient-to-r from-violet-600 to-indigo-700 text-white shadow-md shadow-violet-500/30 ring-1 ring-white/20'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <MessageCircle size={11} />
          <span>Dijital Asistan</span>
        </button>
      </div>

      {/* Main Content Body */}
      <div className="flex-1 overflow-hidden flex flex-col justify-between p-3 relative">
        
        {/* SCREEN 1: AI VIDEO KİNEMATİK GMA HAREKET ANALİZİ */}
        {activeScreen === 'video' && (
          <div className="flex-1 flex flex-col justify-between bg-slate-950/90 rounded-2xl border border-white/10 p-3 relative overflow-hidden backdrop-blur-md">
            {/* Luminous laser scanline */}
            <div
              className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_12px_#38BDF8] pointer-events-none transition-all duration-75"
              style={{ top: `${videoProgress}%` }}
            />

            {/* Video HUD Telemetry bar */}
            <div className="flex items-center justify-between text-[8px] font-mono text-white/90 pb-1 border-b border-white/10">
              <span className="flex items-center gap-1 text-coral font-bold bg-coral/15 px-2 py-0.5 rounded-full border border-coral/30">
                <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
                60 FPS HAREKET
              </span>
              <span className="text-sky-300 font-bold bg-sky-400/15 px-2 py-0.5 rounded-full border border-sky-400/30">
                Motor Akış: %98.4
              </span>
            </div>

            {/* Video Motion Skeleton SVG with Glowing Landmarks */}
            <div className="relative w-full h-40 sm:h-44 flex items-center justify-center my-auto">
              <svg viewBox="0 0 160 120" className="w-full h-full stroke-sky-400 stroke-[2] fill-none drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
                {/* Torso / Omurga Ekseni */}
                <line x1="80" y1="42" x2="80" y2="70" stroke="#38BDF8" strokeWidth="2.5" />
                
                {/* Head */}
                <circle cx="80" cy={34 + Math.sin(videoProgress * 0.1) * 3} r="8" fill="#082A46" stroke="#38BDF8" strokeWidth="2" />
                
                {/* Shoulder Line */}
                <line x1="68" y1="46" x2="92" y2="46" stroke="#38BDF8" strokeWidth="1.5" />

                {/* Left Arm & Joints */}
                <line x1="68" y1="46" x2={52 + Math.cos(videoProgress * 0.15) * 6} y2={54 + Math.sin(videoProgress * 0.15) * 4} />
                <line x1={52 + Math.cos(videoProgress * 0.15) * 6} y1={54 + Math.sin(videoProgress * 0.15) * 4} x2={42 + Math.sin(videoProgress * 0.2) * 6} y2={42 + Math.cos(videoProgress * 0.2) * 5} />
                <circle cx={52 + Math.cos(videoProgress * 0.15) * 6} cy={54 + Math.sin(videoProgress * 0.15) * 4} r="2.5" fill="#FF7965" />
                <circle cx={42 + Math.sin(videoProgress * 0.2) * 6} cy={42 + Math.cos(videoProgress * 0.2) * 5} r="2.5" fill="#38BDF8" />

                {/* Right Arm & Joints */}
                <line x1="92" y1="46" x2={108 + Math.sin(videoProgress * 0.15) * 6} y2={54 + Math.cos(videoProgress * 0.15) * 4} />
                <line x1={108 + Math.sin(videoProgress * 0.15) * 6} y1={54 + Math.cos(videoProgress * 0.15) * 4} x2={118 + Math.cos(videoProgress * 0.2) * 6} y2={42 + Math.sin(videoProgress * 0.2) * 5} />
                <circle cx={108 + Math.sin(videoProgress * 0.15) * 6} cy={54 + Math.cos(videoProgress * 0.15) * 4} r="2.5" fill="#FF7965" />
                <circle cx={118 + Math.cos(videoProgress * 0.2) * 6} cy={42 + Math.sin(videoProgress * 0.2) * 5} r="2.5" fill="#38BDF8" />

                {/* Pelvis / Kalça Hattı */}
                <line x1="72" y1="70" x2="88" y2="70" stroke="#38BDF8" strokeWidth="1.5" />

                {/* Left Leg & Joints */}
                <line x1="72" y1="70" x2={60 + Math.sin(videoProgress * 0.2) * 8} y2={88 + Math.cos(videoProgress * 0.2) * 4} />
                <line x1={60 + Math.sin(videoProgress * 0.2) * 8} y1={88 + Math.cos(videoProgress * 0.2) * 4} x2={54 + Math.cos(videoProgress * 0.25) * 7} y2={104 + Math.sin(videoProgress * 0.25) * 4} />
                <circle cx={60 + Math.sin(videoProgress * 0.2) * 8} cy={88 + Math.cos(videoProgress * 0.2) * 4} r="2.5" fill="#FF7965" />
                <circle cx={54 + Math.cos(videoProgress * 0.25) * 7} cy={104 + Math.sin(videoProgress * 0.25) * 4} r="2.5" fill="#38BDF8" />

                {/* Right Leg & Joints */}
                <line x1="88" y1="70" x2={100 + Math.cos(videoProgress * 0.2) * 8} y2={88 + Math.sin(videoProgress * 0.2) * 4} />
                <line x1={100 + Math.cos(videoProgress * 0.2) * 8} y1={88 + Math.sin(videoProgress * 0.2) * 4} x2={106 + Math.sin(videoProgress * 0.25) * 7} y2={104 + Math.cos(videoProgress * 0.25) * 4} />
                <circle cx={100 + Math.cos(videoProgress * 0.2) * 8} cy={88 + Math.sin(videoProgress * 0.2) * 4} r="2.5" fill="#FF7965" />
                <circle cx={106 + Math.sin(videoProgress * 0.25) * 7} cy={104 + Math.cos(videoProgress * 0.25) * 4} r="2.5" fill="#38BDF8" />
              </svg>
            </div>

            {/* Live Kinematic Diagnostics Card */}
            <div className="bg-white/[0.07] rounded-xl p-2.5 flex flex-col gap-1.5 border border-white/10">
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-sky-400 via-cyan-300 to-coral rounded-full transition-all duration-100"
                  style={{ width: `${videoProgress}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[8px] font-mono">
                <span className="text-white/70">Açı: 114° • Hız: 0.42 m/s</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 size={10} className="text-emerald-400" />
                  Nörolojik ve Kas: Normal
                </span>
              </div>
            </div>

            {/* Live Interactive Trigger Button */}
            <button
              onClick={startSimulation}
              disabled={isSimulating}
              className={`w-full py-1.5 px-3 rounded-xl text-[9px] font-black tracking-wide flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer mt-1 ${
                isSimulating
                  ? 'bg-emerald-500 text-white animate-pulse'
                  : 'bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white'
              }`}
            >
              <Sparkles size={11} className={isSimulating ? 'animate-spin' : ''} />
              <span>
                {isSimulating
                  ? simStep === 1
                    ? '18 Eklem Konumlandırılıyor...'
                    : simStep === 2
                    ? 'Nörolojik ve Kas Hız & Açı Hesaplanıyor...'
                    : '✓ Sonuç: Gelişimsel Simetri Optimal'
                  : '⚡ Canlı Taramayı Test Et (3 sn)'}
              </span>
            </button>
          </div>
        )}

        {/* SCREEN 2: BEBEK BEZİ & CİLT ANALİZİ */}
        {activeScreen === 'scan' && (
          <div className="flex-1 flex flex-col justify-between bg-slate-950/90 rounded-2xl border border-white/10 p-3 backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-bold text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Eye size={12} className="text-sky-400" />
                  Optik Analiz
                </span>
                <span className="text-[8px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                  ✓ Güvenli Referans
                </span>
              </div>

              {/* Optical Reticle Card */}
              <div className="relative my-2 p-3 rounded-2xl bg-white/[0.04] border border-sky-400/40 flex items-center gap-3 overflow-hidden">
                {/* Reticle Brackets in Corners */}
                <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-sky-400" />
                <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-sky-400" />
                <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-sky-400" />
                <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-sky-400" />

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 flex items-center justify-center font-mono font-bold text-[10px] text-navy shadow-inner border border-white/30 shrink-0 transition-transform ${
                  scanPulse ? 'scale-105' : 'scale-100'
                }`}>
                  #E5B842
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-white">Altın Sarısı / Normal Renk</p>
                  <p className="text-[8px] text-white/60 mt-0.5">Sindirim dengesi ve safra pigmenti olağan</p>
                  <div className="mt-1.5 flex items-center gap-1.5 text-[8px] text-sky-300 font-semibold">
                    <ShieldCheck size={11} />
                    <span>Pediatrik Kart No. 4 Eşleşmesi (%99.1)</span>
                  </div>
                </div>
              </div>

              {/* Color spectrum mini bar */}
              <div className="flex gap-1 items-center justify-between px-1 my-2">
                {['#E8E8E8', '#F5D77F', '#E5B842', '#C68B2C', '#6B8E23'].map((c, i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full border ${i === 2 ? 'ring-2 ring-sky-400 ring-offset-1 ring-offset-slate-900 border-white' : 'border-transparent opacity-60'}`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-2.5 border border-white/5 text-[9px] leading-relaxed text-white/85">
              <span className="text-sky-300 font-bold block mb-0.5">Klinik Değerlendirme Köprüsü:</span>
              Dışkı ve cilt bariyeri olağan seyrinde. Acil hekim müdahalesi gerekmemekte; rutin aile hekimi izlemi önerilir.
            </div>
          </div>
        )}

        {/* SCREEN 3: 7/24 ŞEFKATLİ DİJİTAL ASİSTAN */}
        {activeScreen === 'assistant' && (
          <div className="flex-1 flex flex-col justify-between bg-slate-950/90 rounded-2xl border border-white/10 p-2.5 backdrop-blur-md">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[8px] text-white/60 border-b border-white/10 pb-1.5">
                <span className="flex items-center gap-1.5 font-bold text-blue-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  {assistantPrompts[selectedPrompt].badge}
                </span>
                <span className="text-emerald-400 font-bold">7/24 Aktif</span>
              </div>

              {/* Parent chat message */}
              <div className="bg-white/10 text-white text-[9px] p-2.5 rounded-2xl rounded-tr-none ml-3 leading-relaxed border border-white/10 shadow-sm">
                {assistantPrompts[selectedPrompt].q}
              </div>

              {/* Assistant response message */}
              <div className="bg-gradient-to-br from-sky-500/20 via-sky-900/30 to-blue-900/20 text-white text-[9px] p-2.5 rounded-2xl rounded-tl-none mr-2 leading-relaxed border border-sky-400/30 shadow-md">
                <span className="text-sky-300 font-bold block mb-0.5 flex items-center gap-1 text-[10px]">
                  <Sparkles size={11} className="text-sky-300" />
                  DijitalBüyükanne Rehberliği:
                </span>
                {assistantPrompts[selectedPrompt].a}
              </div>
            </div>

            {/* Quick interactive prompt selector */}
            <div className="flex gap-1.5 overflow-x-auto pt-1.5 border-t border-white/10">
              {['Gece Uyanması', 'Bez Rengi', 'Cilt Döküntüsü'].map((label, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPrompt(idx)}
                  className={`text-[8px] font-bold px-2 py-1 rounded-xl transition-all shrink-0 border ${
                    selectedPrompt === idx
                      ? 'bg-sky-400 text-navy border-sky-400 font-black shadow-sm'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 border-white/10'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Nav */}
        <div className="bg-slate-900/90 border border-white/10 rounded-xl px-3 py-1.5 flex justify-around items-center shrink-0 mt-2">
          {['Hareket', 'Tarama', 'Asistan'].map((nav, i) => (
            <span
              key={i}
              className={`text-[8px] font-bold transition-colors ${
                (activeScreen === 'video' && i === 0) ||
                (activeScreen === 'scan' && i === 1) ||
                (activeScreen === 'assistant' && i === 2)
                  ? 'text-sky-300'
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
  const [activeScreen, setActiveScreen] = useState<'video' | 'scan' | 'assistant'>('video');

  return (
    <section
      className="relative overflow-hidden py-1 sm:py-2 lg:py-3 w-full bg-transparent"
    >
      {/* Spectacular ambient glowing aurora orbs - radiant sky cyan, warm peach & mint */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 right-1/4 w-[600px] h-[600px] rounded-full opacity-35 blur-3xl animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, #38BDF8 0%, #BAE6FD 50%, transparent 80%)' }}
        />
        <div
          className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, #FF7965 0%, #FED7AA 50%, transparent 80%)', animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, #2DD4BF 0%, transparent 70%)' }}
        />
        
        {/* Subtle geometric precision ring */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.05] pointer-events-none"
          style={{ border: '1.5px dashed #0284C7' }}
        />
        
        {/* Precision micro-grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#0284C7 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1360px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* SOL KOLON — MANŞET & DEĞER ÖNERMESİ */}
          <div className="lg:col-span-7 flex flex-col items-start hero-fade-left">
            
            {/* Luminous System Indicator Pill with 3D Mascot */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-sky-200/90 text-sky-950 text-xs font-bold tracking-wider uppercase mb-3 sm:mb-4 shadow-xs backdrop-blur-md">
              <div className="w-5 h-5 rounded-full bg-sky-50 border border-sky-200/80 flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src="/images/mascot.png"
                  alt="Dijital Büyükanne Maskot"
                  width={18}
                  height={18}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold text-[#0B1E3B] tracking-normal">0–24 AY BEBEK VE AİLE DESTEK EKOSİSTEMİ</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse hidden sm:inline-block" />
              <span className="text-[10px] text-emerald-700 font-mono font-bold hidden sm:inline">KLİNİK STANDART</span>
            </div>

            {/* H1 — Dramatik, İç Açıcı ve Güven Veren Başlık */}
            <h1 className="text-3xl sm:text-4xl lg:text-[45px] xl:text-[50px] font-black text-[#0B1E3B] leading-[1.12] mb-3.5 tracking-tight">
              Her bebeğin bir{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#FF5A43]">
                  Dijital Büyükannesi
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-[3.5px] bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#FF5A43] rounded-full opacity-80" />
              </span>{' '}
              olsun.
            </h1>

            {/* Description — Sade, Empatik ve Vizyoner */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-[16px] leading-relaxed mb-4 sm:mb-5 max-w-xl font-normal">
              Geleneksel büyükanne şefkatini modern <strong>klinik yapay zekâ teknolojisiyle</strong> buluşturuyoruz. Bebeğinizin nöromotor hareketini, cildini ve gelişimini ev konforunda uzman hekim güvencesiyle takip edin.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full max-w-xl mb-4 sm:mb-5">
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-system-story-modal'));
                }}
                className="px-5 py-2.5 sm:py-3 rounded-2xl bg-gradient-to-r from-coral via-[#FF6D55] to-[#f0442b] hover:from-coral-600 text-white font-black text-xs sm:text-sm flex items-center gap-2.5 shadow-lg shadow-coral/25 hover:shadow-xl hover:shadow-coral/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <Play size={15} className="fill-white group-hover:scale-110 transition-transform" />
                <span>Nasıl Çalışır? Canlı Sinematik Tur</span>
              </button>

              <a
                href="#sosyal-etki"
                className="px-4.5 py-2.5 sm:py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm flex items-center gap-2 border border-slate-200 shadow-xs hover:border-sky-300 hover:text-sky-700 transition-all cursor-pointer"
              >
                <TrendingUp size={15} className="text-[#0284C7]" />
                <span>Sosyal Etkiyi Simüle Et</span>
              </a>
            </div>

            {/* 3 Somut Hizmet Kartı — İnteraktif Ekran Değiştirici */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full max-w-xl">
              {/* Hizmet 1: Hareket Analizi */}
              <div
                onClick={() => setActiveScreen('video')}
                className={`p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer text-left relative overflow-hidden group ${
                  activeScreen === 'video'
                    ? 'bg-white border-sky-400 ring-2 ring-sky-400/25 shadow-md shadow-sky-500/10'
                    : 'bg-white/85 border-slate-200/80 hover:bg-white hover:border-sky-300 hover:shadow-xs'
                }`}
              >
                {activeScreen === 'video' && (
                  <div className="absolute top-0 right-0 w-12 h-12 bg-sky-500/10 rounded-bl-full pointer-events-none" />
                )}
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5 text-sky-950 font-black text-xs">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${activeScreen === 'video' ? 'bg-sky-500 text-white' : 'bg-sky-100 text-sky-600'}`}>
                      <Activity size={13} />
                    </div>
                    <span>0–6 Ay Hareket</span>
                  </div>
                  <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${activeScreen === 'video' ? 'bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-500'}`}>
                    60 FPS
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  18 eklem Prechtl GMs nörolojik ve kas motor takibi.
                </p>
              </div>

              {/* Hizmet 2: Bez & Cilt */}
              <div
                onClick={() => setActiveScreen('scan')}
                className={`p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer text-left relative overflow-hidden group ${
                  activeScreen === 'scan'
                    ? 'bg-white border-indigo-400 ring-2 ring-indigo-400/25 shadow-md shadow-indigo-500/10'
                    : 'bg-white/85 border-slate-200/80 hover:bg-white hover:border-indigo-300 hover:shadow-xs'
                }`}
              >
                {activeScreen === 'scan' && (
                  <div className="absolute top-0 right-0 w-12 h-12 bg-indigo-500/10 rounded-bl-full pointer-events-none" />
                )}
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5 text-indigo-950 font-black text-xs">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${activeScreen === 'scan' ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-600'}`}>
                      <ScanLine size={13} />
                    </div>
                    <span>Bez & Cilt</span>
                  </div>
                  <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${activeScreen === 'scan' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-500'}`}>
                    9 Seviye
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Fotoğraftan dışkı rengi ve pişik optik taraması.
                </p>
              </div>

              {/* Hizmet 3: Asistan */}
              <div
                onClick={() => setActiveScreen('assistant')}
                className={`p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer text-left relative overflow-hidden group ${
                  activeScreen === 'assistant'
                    ? 'bg-white border-coral ring-2 ring-coral/25 shadow-md shadow-coral/10'
                    : 'bg-white/85 border-slate-200/80 hover:bg-white hover:border-coral/40 hover:shadow-xs'
                }`}
              >
                {activeScreen === 'assistant' && (
                  <div className="absolute top-0 right-0 w-12 h-12 bg-coral/10 rounded-bl-full pointer-events-none" />
                )}
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5 text-coral font-black text-xs">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${activeScreen === 'assistant' ? 'bg-coral text-white' : 'bg-coral/10 text-coral'}`}>
                      <MessageCircle size={13} />
                    </div>
                    <span>7/24 Asistan</span>
                  </div>
                  <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${activeScreen === 'assistant' ? 'bg-coral/15 text-coral-700' : 'bg-slate-100 text-slate-500'}`}>
                    Canlı AI
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Uyku, beslenme ve güvenilir klinik yönlendirme.
                </p>
              </div>
            </div>
          </div>

          {/* SAĞ KOLON — İNTERAKTİF TELEFON VE ROZETLER */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end hero-fade-right">
            <div className="relative animate-float-slow w-full max-w-[360px] lg:max-w-[390px] xl:max-w-[410px]">
              
              {/* Luminous Phone Glow Effect */}
              <div
                className="absolute inset-0 rounded-[48px] blur-3xl opacity-35 scale-95 pointer-events-none animate-pulse-glow"
                style={{ background: 'radial-gradient(circle, #38BDF8 0%, #FF7965 60%, transparent 80%)' }}
              />

              {/* Yüzen Rozet 1: Kinematik Video */}
              <button
                onClick={() => setActiveScreen('video')}
                className={`hidden sm:flex items-center gap-2.5 absolute -left-10 lg:-left-12 top-10 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-xl border transition-all duration-300 cursor-pointer z-20 ${
                  activeScreen === 'video'
                    ? 'bg-white text-sky-950 border-sky-300 ring-2 ring-sky-400/30 scale-105 shadow-sky-500/15'
                    : 'bg-white/95 text-slate-700 border-sky-100 hover:scale-105'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-coral animate-ping shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-black text-[#0B1E3B] flex items-center gap-1.5">
                    <span>🎥 18 Eklem Nöromotor Takibi</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">Prechtl GMs Standardı</div>
                </div>
              </button>

              {/* Yüzen Rozet 2: Hekim Köprüsü */}
              <div className="hidden sm:flex items-center gap-2.5 absolute -right-8 lg:-right-10 bottom-12 bg-white/95 text-[#0B1E3B] px-4 py-2.5 rounded-2xl shadow-xl border border-sky-100 backdrop-blur-xl z-20">
                <div className="w-7 h-7 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-black text-[#0B1E3B]">🩺 Uzman Hekim Köprüsü</div>
                  <div className="text-[10px] text-emerald-600 font-bold">Klinik Doğrulama Güvencesi</div>
                </div>
              </div>

              {/* The Phone Shell */}
              <PhoneMockup size="hero" dark label="Canlı Mobil Deneyim">
                <HeroAppScreen activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
              </PhoneMockup>
            </div>
          </div>

        </div>
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
