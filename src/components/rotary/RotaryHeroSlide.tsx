'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PhoneMockup from '@/components/ui/PhoneMockup';
import {
  Award,
  Activity,
  ScanLine,
  MessageCircle,
  Play,
  TrendingUp,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Heart,
  Eye,
} from 'lucide-react';
import { RotaryWheel } from '@/components/rotary/RotarySlideDeck';

const rotaryLiveActivities = [
  {
    city: 'Ankara • Çankaya Rotary',
    text: '500 bebek için Nöromotor Erken Teşhis protokolü başlatıldı.',
    time: 'Az önce',
    icon: '🏛️',
  },
  {
    city: 'İstanbul • Kadıköy Rotary',
    text: 'İlk 100 aileye saf ipek hoş geldin bebek fuları ve aktivasyon kartı teslim edildi.',
    time: '3 dk önce',
    icon: '🎁',
  },
  {
    city: 'İzmir • Alsancak Rotary',
    text: '0–6 ay video analizinde yakalanan hafif asimetri için pediatrik fizyoterapi sevk edildi.',
    time: '5 dk önce',
    icon: '🩺',
  },
  {
    city: 'Bursa • Nilüfer Rotary',
    text: 'İlçe hastanesi yenidoğan servisiyle ortak protokol onaylandı.',
    time: '7 dk önce',
    icon: '🤝',
  },
  {
    city: '2430. Bölge Guvernörlüğü',
    text: 'Dönem projesi kapsamında 1.000 bebeklik ortak hibe başvurusu tamamlandı.',
    time: '12 dk önce',
    icon: '🌍',
  },
];

function RotaryAppScreen({
  activeScreen,
  setActiveScreen,
}: {
  activeScreen: 'video' | 'scan' | 'assistant';
  setActiveScreen: (s: 'video' | 'scan' | 'assistant') => void;
}) {
  const [videoProgress, setVideoProgress] = useState(35);
  const [scanPulse, setScanPulse] = useState(false);
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

  useEffect(() => {
    if (activeScreen !== 'video') return;
    const t = setInterval(() => {
      setVideoProgress((prev) => (prev >= 96 ? 12 : prev + 2));
    }, 120);
    return () => clearInterval(t);
  }, [activeScreen]);

  useEffect(() => {
    if (activeScreen !== 'scan') return;
    const t = setInterval(() => {
      setScanPulse((prev) => !prev);
    }, 1200);
    return () => clearInterval(t);
  }, [activeScreen]);

  return (
    <div className="flex flex-col h-full bg-[#0D1D3A] text-white rounded-[28px] overflow-hidden select-none border border-white/15 shadow-2xl">
      {/* App Header with Rotary Wheel */}
      <div className="bg-gradient-to-r from-[#17458F] via-[#1E54A8] to-[#17458F] px-4 pt-5 pb-3 flex items-center justify-between border-b border-white/15 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white p-1 flex items-center justify-center shadow-md overflow-hidden shrink-0">
            <RotaryWheel className="w-full h-full text-[#17458F]" />
          </div>
          <div>
            <span className="text-white font-black text-xs tracking-wide block leading-none">
              ROTARY BEBEK SAĞLIĞI
            </span>
            <span className="text-[9px] text-[#F7A81B] font-mono font-bold">
              Çankaya & Kadıköy RK
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-[#F7A81B]/20 px-2.5 py-1 rounded-full border border-[#F7A81B]/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F7A81B] animate-pulse" />
          <span className="text-[8px] font-mono text-[#F7A81B] font-black uppercase tracking-wider">
            %100 ÜCRETSİZ
          </span>
        </div>
      </div>

      {/* Screen Mode Switcher Tabs inside Phone */}
      <div className="flex items-center justify-between bg-slate-900/90 p-1.5 border-b border-white/10 shrink-0 gap-1.5">
        <button
          onClick={() => setActiveScreen('video')}
          className={`flex-1 py-1.5 rounded-xl text-[9px] font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeScreen === 'video'
              ? 'bg-gradient-to-r from-[#F7A81B] to-[#E09009] text-[#17458F] font-black shadow-md ring-1 ring-white/20'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <Activity size={11} className={activeScreen === 'video' ? 'animate-pulse' : ''} />
          <span>Hareket AI</span>
        </button>

        <button
          onClick={() => setActiveScreen('scan')}
          className={`flex-1 py-1.5 rounded-xl text-[9px] font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeScreen === 'scan'
              ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold shadow-md ring-1 ring-white/20'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <ScanLine size={11} />
          <span>Bez & Cilt</span>
        </button>

        <button
          onClick={() => setActiveScreen('assistant')}
          className={`flex-1 py-1.5 rounded-xl text-[9px] font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeScreen === 'assistant'
              ? 'bg-gradient-to-r from-indigo-600 to-[#17458F] text-white shadow-md ring-1 ring-white/20'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          <MessageCircle size={11} />
          <span>7/24 Asistan</span>
        </button>
      </div>

      {/* Main Content Body */}
      <div className="flex-1 overflow-hidden flex flex-col justify-between p-3 relative">
        {/* SCREEN 1: KİNEMATİK VIDEO HAREKET ANALİZİ */}
        {activeScreen === 'video' && (
          <div className="flex-1 flex flex-col justify-between bg-slate-950/90 rounded-2xl border border-white/10 p-3 relative overflow-hidden backdrop-blur-md">
            <div
              className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F7A81B] to-transparent shadow-[0_0_12px_#F7A81B] pointer-events-none transition-all duration-75"
              style={{ top: `${videoProgress}%` }}
            />

            <div className="flex items-center justify-between text-[8px] font-mono text-white/90 pb-1 border-b border-white/10">
              <span className="flex items-center gap-1 text-[#F7A81B] font-bold bg-[#F7A81B]/15 px-2 py-0.5 rounded-full border border-[#F7A81B]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F7A81B] animate-pulse" />
                60 FPS PRECHTL GMs
              </span>
              <span className="text-sky-300 font-bold bg-sky-400/15 px-2 py-0.5 rounded-full border border-sky-400/30">
                Rotary Güvencesi: %98.4
              </span>
            </div>

            {/* Video Motion Skeleton */}
            <div className="relative w-full h-40 sm:h-44 flex items-center justify-center my-auto">
              <svg viewBox="0 0 160 120" className="w-full h-full stroke-amber-400 stroke-[2] fill-none drop-shadow-[0_0_8px_rgba(247,168,27,0.5)]">
                <line x1="80" y1="42" x2="80" y2="70" stroke="#F7A81B" strokeWidth="2.5" />
                <circle cx="80" cy={34 + Math.sin(videoProgress * 0.1) * 3} r="8" fill="#082A46" stroke="#F7A81B" strokeWidth="2" />
                <line x1="68" y1="46" x2="92" y2="46" stroke="#F7A81B" strokeWidth="1.5" />
                <line x1="68" y1="46" x2={52 + Math.cos(videoProgress * 0.15) * 6} y2={54 + Math.sin(videoProgress * 0.15) * 4} />
                <line x1={52 + Math.cos(videoProgress * 0.15) * 6} y1={54 + Math.sin(videoProgress * 0.15) * 4} x2={42 + Math.sin(videoProgress * 0.2) * 6} y2={42 + Math.cos(videoProgress * 0.2) * 5} />
                <circle cx={52 + Math.cos(videoProgress * 0.15) * 6} cy={54 + Math.sin(videoProgress * 0.15) * 4} r="2.5" fill="#38BDF8" />
                <circle cx={42 + Math.sin(videoProgress * 0.2) * 6} cy={42 + Math.cos(videoProgress * 0.2) * 5} r="2.5" fill="#F7A81B" />
                <line x1="92" y1="46" x2={108 + Math.sin(videoProgress * 0.15) * 6} y2={54 + Math.cos(videoProgress * 0.15) * 4} />
                <line x1={108 + Math.sin(videoProgress * 0.15) * 6} y1={54 + Math.sin(videoProgress * 0.15) * 4} x2={118 + Math.cos(videoProgress * 0.2) * 6} y2={42 + Math.sin(videoProgress * 0.2) * 5} />
                <circle cx={108 + Math.sin(videoProgress * 0.15) * 6} cy={54 + Math.sin(videoProgress * 0.15) * 4} r="2.5" fill="#38BDF8" />
                <circle cx={118 + Math.cos(videoProgress * 0.2) * 6} cy={42 + Math.sin(videoProgress * 0.2) * 5} r="2.5" fill="#F7A81B" />
                <line x1="72" y1="70" x2="88" y2="70" stroke="#F7A81B" strokeWidth="1.5" />
                <line x1="72" y1="70" x2={60 + Math.sin(videoProgress * 0.2) * 8} y2={88 + Math.cos(videoProgress * 0.2) * 4} />
                <line x1={60 + Math.sin(videoProgress * 0.2) * 8} y1={88 + Math.cos(videoProgress * 0.2) * 4} x2={54 + Math.cos(videoProgress * 0.25) * 7} y2={104 + Math.sin(videoProgress * 0.25) * 4} />
                <circle cx={60 + Math.sin(videoProgress * 0.2) * 8} cy={88 + Math.cos(videoProgress * 0.2) * 4} r="2.5" fill="#38BDF8" />
                <circle cx={54 + Math.cos(videoProgress * 0.25) * 7} cy={104 + Math.sin(videoProgress * 0.25) * 4} r="2.5" fill="#F7A81B" />
                <line x1="88" y1="70" x2={100 + Math.cos(videoProgress * 0.2) * 8} y2={88 + Math.sin(videoProgress * 0.2) * 4} />
                <line x1={100 + Math.cos(videoProgress * 0.2) * 8} y1={88 + Math.sin(videoProgress * 0.2) * 4} x2={106 + Math.sin(videoProgress * 0.25) * 7} y2={104 + Math.cos(videoProgress * 0.25) * 4} />
                <circle cx={100 + Math.cos(videoProgress * 0.2) * 8} cy={88 + Math.cos(videoProgress * 0.2) * 4} r="2.5" fill="#38BDF8" />
                <circle cx={106 + Math.sin(videoProgress * 0.25) * 7} cy={104 + Math.cos(videoProgress * 0.25) * 4} r="2.5" fill="#F7A81B" />
              </svg>
            </div>

            {/* Diagnostics Card */}
            <div className="bg-white/[0.08] rounded-xl p-2.5 flex flex-col gap-1.5 border border-white/10">
              <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 via-sky-400 to-emerald-400 rounded-full transition-all duration-100"
                  style={{ width: `${videoProgress}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[8px] font-mono">
                <span className="text-white/80">Simetri: %97.8 • Hız: 0.44 m/s</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 size={10} />
                  Erken Teşhis: Normal
                </span>
              </div>
            </div>

            <button
              onClick={startSimulation}
              disabled={isSimulating}
              className={`w-full py-1.5 px-3 rounded-xl text-[9px] font-black tracking-wide flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer mt-1 ${
                isSimulating
                  ? 'bg-emerald-500 text-white animate-pulse'
                  : 'bg-gradient-to-r from-[#F7A81B] to-[#d48906] text-[#0A1A36]'
              }`}
            >
              <Sparkles size={11} className={isSimulating ? 'animate-spin' : ''} />
              <span>
                {isSimulating
                  ? simStep === 1
                    ? '18 Eklem Taranıyor...'
                    : simStep === 2
                    ? 'Rotary Protokolü Hesaplanıyor...'
                    : '✓ Sonuç: Gelişimsel Simetri Optimal'
                  : '⚡ Rotary Erken Taramayı Test Et (3 sn)'}
              </span>
            </button>
          </div>
        )}

        {/* SCREEN 2: BEBEK BEZİ & CİLT ANALİZİ */}
        {activeScreen === 'scan' && (
          <div className="flex-1 flex flex-col justify-between bg-slate-950/90 rounded-2xl border border-white/10 p-3 backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Eye size={12} className="text-amber-400" />
                  DSÖ & AAP Optik Analiz
                </span>
                <span className="text-[8px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                  ✓ Güvenli Eşleşme
                </span>
              </div>

              <div className="relative my-2 p-3 rounded-2xl bg-white/[0.04] border border-amber-400/40 flex items-center gap-3 overflow-hidden">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 flex items-center justify-center font-mono font-bold text-[10px] text-navy shadow-inner border border-white/30 shrink-0 transition-transform ${
                  scanPulse ? 'scale-105' : 'scale-100'
                }`}>
                  #E5B842
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-white">Altın Sarısı / Sağlıklı Bebek</p>
                  <p className="text-[8px] text-white/60 mt-0.5">Sindirim dengesi ve safra olağan seyrinde</p>
                  <div className="mt-1.5 flex items-center gap-1.5 text-[8px] text-amber-300 font-semibold">
                    <ShieldCheck size={11} />
                    <span>DSÖ Renk Kartı No. 4 Eşleşmesi (%99.4)</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-1 items-center justify-between px-1 my-2">
                {['#E8E8E8', '#F5D77F', '#E5B842', '#C68B2C', '#6B8E23'].map((c, i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full border ${i === 2 ? 'ring-2 ring-amber-400 ring-offset-1 ring-offset-slate-900 border-white' : 'border-transparent opacity-60'}`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-2.5 border border-white/5 text-[9px] leading-relaxed text-white/85">
              <span className="text-amber-300 font-bold block mb-0.5">Rotary Hekim Sevk Köprüsü:</span>
              Dışkı ve cilt bariyeri güvenli aralıkta. Rutin aile hekimi izlemi yeterlidir, gereksiz acil servis paniği önlendi.
            </div>
          </div>
        )}

        {/* SCREEN 3: 7/24 DİJİTAL ASİSTAN */}
        {activeScreen === 'assistant' && (
          <div className="flex-1 flex flex-col justify-between bg-slate-950/90 rounded-2xl border border-white/10 p-2.5 backdrop-blur-md">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[8px] text-white/60 border-b border-white/10 pb-1.5">
                <span className="flex items-center gap-1.5 font-bold text-amber-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Gece 03:15 • Rotary Anne Rehberliği
                </span>
                <span className="text-emerald-400 font-bold">7/24 Kesintisiz</span>
              </div>

              <div className="bg-white/10 text-white text-[9px] p-2.5 rounded-2xl rounded-tr-none ml-3 leading-relaxed border border-white/10 shadow-sm">
                Bebeğim gece aniden uyandı ve huzursuz. Ne yapmalıyım?
              </div>

              <div className="bg-gradient-to-br from-[#17458F]/40 via-[#1E54A8]/30 to-[#0A1A36]/40 text-white text-[9px] p-2.5 rounded-2xl rounded-tl-none mr-2 leading-relaxed border border-[#F7A81B]/40 shadow-md">
                <span className="text-[#F7A81B] font-bold block mb-0.5 flex items-center gap-1 text-[10px]">
                  <Sparkles size={11} className="text-[#F7A81B]" />
                  Rotary Destekli Dijital Büyükanne:
                </span>
                Derin bir nefes alın 🌿 4. ay atak döneminde gece uyanmaları çok doğaldır. Ten teması kurup hafifçe pışpışlayın; yalnız değilsiniz, adım adım sakinleştireceğiz.
              </div>
            </div>

            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-400/30 text-[8px] text-amber-200">
              Rotary Kulübünüzün katkısıyla ailelerin lohusalık ve gece yalnızlığı şefkatle giderilir.
            </div>
          </div>
        )}

        {/* Bottom Nav inside Phone */}
        <div className="bg-slate-900/90 border border-white/10 rounded-xl px-3 py-1.5 flex justify-around items-center shrink-0 mt-2">
          {['Hareket', 'Tarama', 'Asistan'].map((nav, i) => (
            <span
              key={i}
              className={`text-[8px] font-bold transition-colors ${
                (activeScreen === 'video' && i === 0) ||
                (activeScreen === 'scan' && i === 1) ||
                (activeScreen === 'assistant' && i === 2)
                  ? 'text-[#F7A81B]'
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

export default function RotaryHeroSlide({
  onOpenModal,
}: {
  onOpenModal: () => void;
}) {
  const [activeScreen, setActiveScreen] = useState<'video' | 'scan' | 'assistant'>('video');
  const [activityIdx, setActivityIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActivityIdx((prev) => (prev + 1) % rotaryLiveActivities.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  const currentActivity = rotaryLiveActivities[activityIdx];

  return (
    <div className="w-full h-full flex flex-col justify-between items-center my-auto py-1 sm:py-2 select-none">
      
      {/* Upper Main Hero Grid */}
      <div className="w-full flex-1 flex flex-col justify-center">
        <div className="relative z-10 max-w-7xl 2xl:max-w-[1360px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* SOL KOLON — MANŞET VE DEĞER ÖNERMESİ */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Dual Brand Emblem: Rotary Wheel + Mascot */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#17458F]/20 text-[#17458F] text-xs font-bold tracking-wider uppercase mb-3 sm:mb-4 shadow-xs backdrop-blur-md">
                <div className="w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center p-0.5 shrink-0">
                  <RotaryWheel className="w-full h-full text-[#F7A81B]" />
                </div>
                <span className="font-extrabold text-[#17458F]">ROTARY 7 ODAK ALANI • ANNE VE ÇOCUK SAĞLIĞI</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse hidden sm:inline-block" />
                <span className="text-[10px] text-emerald-700 font-mono font-bold hidden sm:inline">GLOBAL GRANT UYUMLU</span>
              </div>

              {/* H1 — Dramatik, Kurumsal ve İlham Veren Başlık */}
              <h1 className="text-3xl sm:text-4xl lg:text-[45px] xl:text-[50px] font-black text-[#0B1E3B] leading-[1.12] mb-3.5 tracking-tight">
                &ldquo;Kendinden Önce Hizmet&rdquo; İlkesi,{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17458F] via-[#0067C8] to-[#F7A81B]">
                    Bebek Sağlığında Yapay Zekâyla
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-[3.5px] bg-gradient-to-r from-[#17458F] via-[#0067C8] to-[#F7A81B] rounded-full opacity-80" />
                </span>{' '}
                Buluşuyor.
              </h1>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base lg:text-[16px] leading-relaxed mb-4 sm:mb-5 max-w-xl font-normal">
                Rotary kulübünüzün desteğiyle yüzlerce bebeğe <strong>0–6 Ay Nöromotor Video Analizi</strong> ile serebral palsi erken teşhisi, <strong>pediatrik ön taramalar</strong> ve <strong>7/24 kesintisiz uzman desteği</strong> armağan edin.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full max-w-xl mb-4 sm:mb-5">
                <Link
                  href="/sunum?deck=rotary"
                  target="_blank"
                  className="px-5 py-2.5 sm:py-3 rounded-2xl bg-gradient-to-r from-[#17458F] via-[#1E54A8] to-[#0A1A36] hover:from-[#123670] text-white font-black text-xs sm:text-sm flex items-center gap-2.5 shadow-lg shadow-[#17458F]/25 hover:shadow-xl hover:shadow-[#17458F]/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
                >
                  <FileText size={15} className="text-[#F7A81B] group-hover:scale-110 transition-transform" />
                  <span>Rotary Resmî Sunumunu İncele</span>
                </Link>

                <button
                  onClick={onOpenModal}
                  className="px-4.5 py-2.5 sm:py-3 rounded-2xl bg-white hover:bg-slate-50 text-[#17458F] font-bold text-xs sm:text-sm flex items-center gap-2 border border-slate-200 shadow-xs hover:border-[#17458F] hover:text-[#17458F] transition-all cursor-pointer"
                >
                  <RotaryWheel className="w-4 h-4 text-[#F7A81B]" />
                  <span>Rotary Ekosistemini İncele</span>
                </button>
              </div>

              {/* 3 İnteraktif Tetikleyici Hizmet Kartı */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full max-w-xl">
                {/* Kart 1: Hareket */}
                <div
                  onClick={() => setActiveScreen('video')}
                  className={`p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer text-left relative overflow-hidden group ${
                    activeScreen === 'video'
                      ? 'bg-white border-[#F7A81B] ring-2 ring-[#F7A81B]/25 shadow-md shadow-[#F7A81B]/15'
                      : 'bg-white/85 border-slate-200/80 hover:bg-white hover:border-[#F7A81B]/60 hover:shadow-xs'
                  }`}
                >
                  {activeScreen === 'video' && (
                    <div className="absolute top-0 right-0 w-12 h-12 bg-[#F7A81B]/10 rounded-bl-full pointer-events-none" />
                  )}
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5 text-[#17458F] font-black text-xs">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${activeScreen === 'video' ? 'bg-[#17458F] text-[#F7A81B]' : 'bg-amber-100 text-[#B87A00]'}`}>
                        <Activity size={13} />
                      </div>
                      <span>0–6 Ay Hareket</span>
                    </div>
                    <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${activeScreen === 'video' ? 'bg-amber-100 text-amber-900' : 'bg-slate-100 text-slate-500'}`}>
                      60 FPS
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    18 eklem Prechtl GMs nörolojik ve kas motor erken teşhisi.
                  </p>
                </div>

                {/* Kart 2: Bez & Cilt */}
                <div
                  onClick={() => setActiveScreen('scan')}
                  className={`p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer text-left relative overflow-hidden group ${
                    activeScreen === 'scan'
                      ? 'bg-white border-sky-400 ring-2 ring-sky-400/25 shadow-md shadow-sky-500/10'
                      : 'bg-white/85 border-slate-200/80 hover:bg-white hover:border-sky-300 hover:shadow-xs'
                  }`}
                >
                  {activeScreen === 'scan' && (
                    <div className="absolute top-0 right-0 w-12 h-12 bg-sky-500/10 rounded-bl-full pointer-events-none" />
                  )}
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5 text-sky-950 font-black text-xs">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${activeScreen === 'scan' ? 'bg-sky-600 text-white' : 'bg-sky-100 text-sky-600'}`}>
                        <ScanLine size={13} />
                      </div>
                      <span>Bez & Cilt</span>
                    </div>
                    <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${activeScreen === 'scan' ? 'bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-500'}`}>
                      DSÖ & AAP
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Dışkı renk kartı eşlemesi ve pişik döküntü ön taraması.
                  </p>
                </div>

                {/* Kart 3: Asistan */}
                <div
                  onClick={() => setActiveScreen('assistant')}
                  className={`p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer text-left relative overflow-hidden group ${
                    activeScreen === 'assistant'
                      ? 'bg-white border-[#17458F] ring-2 ring-[#17458F]/25 shadow-md shadow-[#17458F]/10'
                      : 'bg-white/85 border-slate-200/80 hover:bg-white hover:border-[#17458F]/40 hover:shadow-xs'
                  }`}
                >
                  {activeScreen === 'assistant' && (
                    <div className="absolute top-0 right-0 w-12 h-12 bg-[#17458F]/10 rounded-bl-full pointer-events-none" />
                  )}
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5 text-[#17458F] font-black text-xs">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${activeScreen === 'assistant' ? 'bg-[#17458F] text-white' : 'bg-blue-100 text-[#17458F]'}`}>
                        <MessageCircle size={13} />
                      </div>
                      <span>7/24 Asistan</span>
                    </div>
                    <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${activeScreen === 'assistant' ? 'bg-blue-100 text-blue-900' : 'bg-slate-100 text-slate-500'}`}>
                      Lohusalık
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Gece 03:00 yalnızlığına şefkatli rehberlik ve hekim köprüsü.
                  </p>
                </div>
              </div>
            </div>

            {/* SAĞ KOLON — TELEFON MAKETİ VE ROZETLER */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative animate-float-slow w-full max-w-[360px] lg:max-w-[390px] xl:max-w-[410px]">
                
                {/* Luminous Glow Effect */}
                <div
                  className="absolute inset-0 rounded-[48px] blur-3xl opacity-35 scale-95 pointer-events-none animate-pulse-glow"
                  style={{ background: 'radial-gradient(circle, #F7A81B 0%, #17458F 60%, transparent 80%)' }}
                />

                {/* Yüzen Rozet 1: Prechtl GMs */}
                <button
                  onClick={() => setActiveScreen('video')}
                  className={`hidden sm:flex items-center gap-2.5 absolute -left-10 lg:-left-12 top-10 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-xl border transition-all duration-300 cursor-pointer z-20 ${
                    activeScreen === 'video'
                      ? 'bg-white text-slate-900 border-amber-300 ring-2 ring-amber-400/30 scale-105 shadow-amber-500/15'
                      : 'bg-white/95 text-slate-700 border-slate-200 hover:scale-105'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F7A81B] animate-ping shrink-0" />
                  <div className="text-left">
                    <div className="text-xs font-black text-[#17458F] flex items-center gap-1.5">
                      <span>🎥 18 Eklem Nöromotor Takibi</span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">Prechtl GMs Standardı</div>
                  </div>
                </button>

                {/* Yüzen Rozet 2: Rotary Kulüp İmzası */}
                <div className="hidden sm:flex items-center gap-2.5 absolute -right-8 lg:-right-10 bottom-12 bg-white/95 text-[#0B1E3B] px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200 backdrop-blur-xl z-20">
                  <div className="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center p-0.5 shrink-0">
                    <RotaryWheel className="w-full h-full text-[#F7A81B]" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-black text-[#17458F]">🏆 Kalıcı Kulüp İmzası</div>
                    <div className="text-[10px] text-emerald-600 font-bold">%100 Halka Ücretsiz Erişim</div>
                  </div>
                </div>

                {/* The Phone Shell */}
                <PhoneMockup size="hero" dark label="Canlı Rotary Mobil Uygulama">
                  <RotaryAppScreen activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
                </PhoneMockup>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Live Pulse Ticker Dock Bar */}
      <div className="w-full max-w-7xl 2xl:max-w-[1360px] mx-auto mt-2 lg:mt-3 shrink-0">
        <div className="bg-white/95 rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-[#17458F]/15 shadow-xl shadow-[#17458F]/5 backdrop-blur-xl flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
          
          {/* Sol: Canlı Ortaklık Akışı */}
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="relative flex items-center justify-center shrink-0">
              <span className="w-3.5 h-3.5 rounded-full bg-[#F7A81B] animate-ping absolute" />
              <span className="w-3 h-3 rounded-full bg-[#F7A81B] relative" />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-black uppercase tracking-wider text-[#17458F] bg-blue-50 border border-blue-200/80 px-2 py-0.5 rounded-md">
                  CANLI ROTARY ORTAKLIK NABZI
                </span>
                <span className="text-[11px] text-slate-400 hidden sm:inline">•</span>
                <span className="text-[11px] font-bold text-slate-700 hidden sm:inline">
                  {currentActivity.city}
                </span>
              </div>
              
              <p className="text-xs text-slate-600 truncate mt-0.5 flex items-center gap-1.5 font-medium">
                <span>{currentActivity.icon}</span>
                <span className="truncate">{currentActivity.text}</span>
                <span className="text-[10px] text-slate-400 font-mono shrink-0">({currentActivity.time})</span>
              </p>
            </div>
          </div>

          {/* Sağ: 4 Canlı Metrik Sayacı */}
          <div className="flex items-center gap-4 sm:gap-7 shrink-0 border-t lg:border-t-0 lg:border-l border-slate-100 pt-2 lg:pt-0 lg:pl-6 overflow-x-auto">
            <div className="text-left shrink-0">
              <div className="text-base sm:text-lg font-black text-[#17458F] font-mono leading-none">
                500+
              </div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1 block">
                Desteklenen Bebek
              </span>
            </div>

            <div className="w-px h-7 bg-slate-200 shrink-0" />

            <div className="text-left shrink-0">
              <div className="text-base sm:text-lg font-black text-[#B87A00] font-mono leading-none">
                ~22 Bebek
              </div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1 block">
                Erken Nöromotor Teşhis
              </span>
            </div>

            <div className="w-px h-7 bg-slate-200 shrink-0" />

            <div className="text-left shrink-0">
              <div className="text-base sm:text-lg font-black text-[#0067C8] font-mono leading-none">
                7/24
              </div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1 block">
                Uzman Sevk Köprüsü
              </span>
            </div>

            <div className="w-px h-7 bg-slate-200 shrink-0 hidden sm:block" />

            <div className="text-left shrink-0 hidden sm:block">
              <div className="text-base sm:text-lg font-black text-emerald-600 font-mono leading-none">
                %100
              </div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1 block">
                Ailelere Ücretsiz
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
