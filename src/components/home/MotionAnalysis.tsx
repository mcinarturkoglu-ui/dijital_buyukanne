'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  Video,
  Cpu,
  ActivitySquare,
  UserCheck,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Layers,
  Flame,
  TrendingUp,
  CheckCircle2,
  Info,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const scenarios = [
  {
    id: 'fidgety',
    title: '0–3 Ay: Fidgety (Spontan) Hareketler',
    ageRange: '0–3 Ay',
    focus: 'Genel Spontan Motor Değerlendirmesi (GMA)',
    description: 'Bebek sırtüstü uzanırken omuz, dirsek, kalça ve ayak bileklerindeki akıcı ve değişken spontan hareketler taranır.',
    metrics: { gma: '%98.4 Normal', symmetry: '%97.2', smoothness: 'Optimal', status: 'Gelişimle Uyumlu' },
  },
  {
    id: 'tummy',
    title: '3–6 Ay: Karın Üstü & Baş-Boyun Simetrisi',
    ageRange: '3–6 Ay',
    focus: 'Boyun ve Sırt Kas Tonusu',
    description: 'Yüzüstü pozisyonda başı kaldırma açısı, dirseklerden destek alma dengesi ve iki taraf arasındaki simetri ölçülür.',
    metrics: { gma: '%96.1 Normal', symmetry: '%99.0', smoothness: 'Yüksek', status: 'Simetrik Baş Kontrolü' },
  },
];

const steps = [
  {
    icon: Video,
    label: '1. Kısa Video Kaydı',
    desc: 'Bebeğinizi doğal ve rahat ortamında 30-60 saniye kaydedin.',
    iconBg: 'bg-coral/10',
    color: 'text-coral',
  },
  {
    icon: Cpu,
    label: '2. BabySensAI Kinematik Analiz',
    desc: 'Yapay zekâ 18 eklem noktasını milisaniyelik hız ve ivmeyle izler.',
    iconBg: 'bg-turquoise/15',
    color: 'text-turquoise',
  },
  {
    icon: ActivitySquare,
    label: '3. Gelişimsel Raporlama',
    desc: 'Akıcılık, simetri ve ritim yaş normlarına göre haritalandırılır.',
    iconBg: 'bg-navy/10',
    color: 'text-navy',
  },
  {
    icon: UserCheck,
    label: '4. Gerektiğinde Uzman Hekim',
    desc: 'Olası sapmalarda zaman kaybetmeden çocuk hekimine yönlendirilir.',
    iconBg: 'bg-coral/10',
    color: 'text-coral',
  },
];

export default function MotionAnalysis() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [progress, setProgress] = useState(25);
  const [playbackSpeed, setPlaybackSpeed] = useState<1 | 0.5>(1);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [showTelemetry, setShowTelemetry] = useState(true);

  const currentScenario = scenarios[activeScenarioIndex];

  // Video playback loop
  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = playbackSpeed === 1 ? 120 : 240;
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) return 0;
        return next;
      });
    }, intervalMs);
    return () => clearInterval(timer);
  }, [isPlaying, playbackSpeed]);

  // Wave points for live kinematics trajectory graph
  const wavePoints = useMemo(() => {
    const points: string[] = [];
    for (let x = 0; x <= 200; x += 10) {
      const y = 20 + Math.sin((x + progress * 5) * 0.08) * 10 + Math.cos((x + progress * 3) * 0.05) * 4;
      points.push(`${x},${y.toFixed(1)}`);
    }
    return points.join(' ');
  }, [progress]);

  // Dynamic Joint Coordinates calculated per frame
  const t = progress * 0.15;
  const isTummy = activeScenarioIndex === 1;

  // Head
  const headX = 140 + Math.sin(t * 0.9) * 4;
  const headY = isTummy ? 45 + Math.sin(t * 1.2) * 5 : 50 + Math.sin(t * 0.8) * 4;

  // Torso center
  const chestX = 140;
  const chestY = isTummy ? 85 : 95;
  const pelvisX = 140 + Math.sin(t * 0.5) * 2;
  const pelvisY = isTummy ? 125 : 135;

  // Left Arm (upper & hand)
  const lElbowX = isTummy ? 100 + Math.cos(t) * 4 : 95 + Math.cos(t) * 10;
  const lElbowY = isTummy ? 95 : 90 + Math.sin(t * 1.1) * 8;
  const lHandX = isTummy ? 85 + Math.sin(t) * 3 : 70 + Math.cos(t * 1.3) * 12;
  const lHandY = isTummy ? 120 : 80 + Math.sin(t * 1.4) * 10;

  // Right Arm (upper & hand)
  const rElbowX = isTummy ? 180 + Math.sin(t) * 4 : 185 + Math.sin(t) * 10;
  const rElbowY = isTummy ? 95 : 90 + Math.cos(t * 1.1) * 8;
  const rHandX = isTummy ? 195 + Math.cos(t) * 3 : 210 + Math.sin(t * 1.3) * 12;
  const rHandY = isTummy ? 120 : 80 + Math.cos(t * 1.4) * 10;

  // Left Leg (knee & foot)
  const lKneeX = isTummy ? 115 + Math.sin(t * 0.8) * 5 : 110 + Math.sin(t) * 8;
  const lKneeY = isTummy ? 155 : 165 + Math.cos(t * 1.2) * 10;
  const lFootX = isTummy ? 105 + Math.cos(t) * 6 : 95 + Math.sin(t * 1.3) * 12;
  const lFootY = isTummy ? 180 : 195 + Math.cos(t * 1.5) * 12;

  // Right Leg (knee & foot)
  const rKneeX = isTummy ? 165 + Math.cos(t * 0.8) * 5 : 170 + Math.cos(t) * 8;
  const rKneeY = isTummy ? 155 : 165 + Math.sin(t * 1.2) * 10;
  const rFootX = isTummy ? 175 + Math.sin(t) * 6 : 185 + Math.cos(t * 1.3) * 12;
  const rFootY = isTummy ? 180 : 195 + Math.sin(t * 1.5) * 12;

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-white relative overflow-hidden" id="hareket-analizi">
      {/* Decorative ambient blur */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="AI Hareket Analizi Stüdyosu"
          title="Bir video, bebeğinizin gelişiminde binlerce veri noktası sunar."
          subtitle="BabySensAI derin öğrenme algoritmaları, 0–6 ay bebeğinizin spontan hareketlerini analiz ederek erken gelişimsel farkındalık sağlar."
          centered
        />

        {/* Scenario Selector Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {scenarios.map((sc, idx) => (
            <button
              key={sc.id}
              onClick={() => {
                setActiveScenarioIndex(idx);
                setProgress(15);
              }}
              className={`px-4 py-2.5 rounded-2xl text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeScenarioIndex === idx
                  ? 'bg-gradient-to-r from-navy to-[#0f3454] text-white shadow-lg shadow-navy/20 scale-105 border-2 border-turquoise'
                  : 'bg-soft-gray text-navy/70 hover:bg-turquoise/10 hover:text-navy border border-gray-200 hover:border-turquoise/30'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeScenarioIndex === idx ? 'bg-turquoise animate-pulse' : 'bg-navy/30'}`} />
              {sc.title}
            </button>
          ))}
        </div>

        {/* Main Workspace Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT 5 COLS: Dynamic Stepper & Active Scenario Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Active Scenario Card */}
            <div className="bg-gradient-to-br from-[#082A46] via-[#093254] to-[#0e3b61] text-white p-6 rounded-3xl shadow-xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-turquoise/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="bg-turquoise/20 text-turquoise text-[11px] font-mono font-bold px-3 py-1 rounded-full border border-turquoise/30">
                  {currentScenario.focus}
                </span>
                <span className="text-white/60 text-xs font-semibold">{currentScenario.ageRange}</span>
              </div>

              <h4 className="text-lg font-bold text-white mb-2">{currentScenario.title}</h4>
              <p className="text-xs text-white/80 leading-relaxed mb-4">{currentScenario.description}</p>

              {/* Real-time score cards */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/15">
                <div className="bg-white/10 rounded-2xl p-3 border border-white/5 backdrop-blur-sm">
                  <p className="text-[10px] text-white/60 uppercase tracking-wider font-semibold">GMA Akıcılık</p>
                  <p className="text-base font-extrabold text-emerald-300 font-mono mt-0.5">{currentScenario.metrics.gma}</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-3 border border-white/5 backdrop-blur-sm">
                  <p className="text-[10px] text-white/60 uppercase tracking-wider font-semibold">Bilateral Simetri</p>
                  <p className="text-base font-extrabold text-turquoise font-mono mt-0.5">{currentScenario.metrics.symmetry}</p>
                </div>
              </div>
            </div>

            {/* Step Indicators */}
            <div className="flex flex-col gap-2.5">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.label}
                    className="premium-card flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-gray-100/90 shadow-sm hover:border-turquoise/40 hover:shadow-card-hover transition-all duration-300 group cursor-default"
                  >
                    <div className={`w-10 h-10 rounded-xl ${step.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-5 h-5 ${step.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-xs md:text-sm text-navy group-hover:text-turquoise transition-colors truncate">
                        {step.label}
                      </p>
                      <p className="text-[11px] text-navy/60 leading-tight line-clamp-1 mt-0.5">
                        {step.desc}
                      </p>
                    </div>
                    <CheckCircle2 size={16} className="text-turquoise opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT 7 COLS: Interactive Video Studio & Live Kinematics Display */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            
            {/* The Video Monitor Screen */}
            <div className="relative w-full aspect-[16/10] md:aspect-[16/11] bg-[#071726] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-900 group select-none flex flex-col justify-between">
              
              {/* Studio Canvas Background (Simulated Video Feed) */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#092238] via-[#071c2f] to-[#04101b]">
                {/* Grid Overlay */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: 'linear-gradient(#14BBB7 1px, transparent 1px), linear-gradient(90deg, #14BBB7 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-turquoise/10 via-transparent to-black/75 pointer-events-none" />
              </div>

              {/* Vertical Laser Scanline (Active when playing) */}
              {isPlaying && (
                <div
                  className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-turquoise to-transparent opacity-85 pointer-events-none shadow-[0_0_12px_#14BBB7] transition-all duration-150"
                  style={{ top: `${(progress * 0.8 + 10)}%` }}
                />
              )}

              {/* Top Video HUD Bar */}
              <div className="relative z-20 p-3.5 flex items-center justify-between text-white border-b border-white/10 bg-slate-950/60 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-2.5 w-2.5 relative">
                    {isPlaying && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />}
                    <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isPlaying ? 'bg-red-500' : 'bg-gray-400'}`} />
                  </span>
                  <span className="font-mono text-[10px] tracking-wider uppercase font-bold text-white/90">
                    {isPlaying ? 'CANLI AI VİDEO İŞLEME' : 'DURAKLATILDI'}
                  </span>
                  <span className="hidden sm:inline-block text-[9px] font-mono text-white/40 border-l border-white/20 pl-2">
                    4K • 60 FPS • RAW
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-turquoise/20 border border-turquoise/40 text-turquoise text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold">
                    <Sparkles size={10} />
                    <span>PoseTracker v2.4</span>
                  </div>
                  <span className="font-mono text-[10px] text-white/70 bg-white/10 px-2 py-0.5 rounded">
                    FRM #{String(Math.floor(progress * 4.2)).padStart(3, '0')}
                  </span>
                </div>
              </div>

              {/* Center Infant Pose Simulation (Kinematic Video Stream) */}
              <div className="relative z-10 flex-1 flex items-center justify-center p-4">
                
                {/* SVG Skeleton & Joint Vectors */}
                <svg viewBox="0 0 280 220" className="w-full h-full max-w-[420px] drop-shadow-[0_0_12px_rgba(20,187,183,0.35)]">
                  <defs>
                    {/* Heatmap Gradients */}
                    <radialGradient id="heatGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FF7965" stopOpacity="0.6" />
                      <stop offset="70%" stopColor="#14BBB7" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#14BBB7" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="cyanGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#14BBB7" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#14BBB7" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Optional Heatmap Blobs */}
                  {showHeatmap && (
                    <g className="transition-opacity duration-300">
                      <circle cx={headX} cy={headY} r="28" fill="url(#cyanGlow)" />
                      <circle cx={chestX} cy={chestY} r="35" fill="url(#heatGlow)" />
                      <circle cx={lHandX} cy={lHandY} r="18" fill="url(#cyanGlow)" />
                      <circle cx={rHandX} cy={rHandY} r="18" fill="url(#cyanGlow)" />
                      <circle cx={lFootX} cy={lFootY} r="20" fill="url(#heatGlow)" />
                      <circle cx={rFootX} cy={rFootY} r="20" fill="url(#heatGlow)" />
                    </g>
                  )}

                  {/* Skeleton Vector Lines */}
                  {showSkeleton && (
                    <g strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      {/* Spine / Torso */}
                      <line x1={headX} y1={headY + 12} x2={chestX} y2={chestY} stroke="#14BBB7" strokeDasharray="3 1" />
                      <line x1={chestX} y1={chestY} x2={pelvisX} y2={pelvisY} stroke="#14BBB7" />

                      {/* Left Arm (Clavicle to Hand) */}
                      <line x1={chestX} y1={chestY - 10} x2={lElbowX} y2={lElbowY} stroke="#14BBB7" />
                      <line x1={lElbowX} y1={lElbowY} x2={lHandX} y2={lHandY} stroke="#FF7965" />

                      {/* Right Arm (Clavicle to Hand) */}
                      <line x1={chestX} y1={chestY - 10} x2={rElbowX} y2={rElbowY} stroke="#14BBB7" />
                      <line x1={rElbowX} y1={rElbowY} x2={rHandX} y2={rHandY} stroke="#FF7965" />

                      {/* Left Leg (Pelvis to Foot) */}
                      <line x1={pelvisX} y1={pelvisY} x2={lKneeX} y2={lKneeY} stroke="#14BBB7" />
                      <line x1={lKneeX} y1={lKneeY} x2={lFootX} y2={lFootY} stroke="#FF7965" />

                      {/* Right Leg (Pelvis to Foot) */}
                      <line x1={pelvisX} y1={pelvisY} x2={rKneeX} y2={rKneeY} stroke="#14BBB7" />
                      <line x1={rKneeX} y1={rKneeY} x2={rFootX} y2={rFootY} stroke="#FF7965" />
                    </g>
                  )}

                  {/* Joint Landmark Points with Interactive Rings */}
                  {showSkeleton && (
                    <g>
                      {/* Head */}
                      <circle cx={headX} cy={headY} r="10" fill="#082A46" stroke="#14BBB7" strokeWidth="2.5" />
                      <circle cx={headX} cy={headY} r="3" fill="#ffffff" />

                      {/* Chest & Pelvis */}
                      <circle cx={chestX} cy={chestY} r="4.5" fill="#14BBB7" stroke="#ffffff" strokeWidth="1.5" />
                      <circle cx={pelvisX} cy={pelvisY} r="4.5" fill="#14BBB7" stroke="#ffffff" strokeWidth="1.5" />

                      {/* Left Arm Joints */}
                      <circle cx={lElbowX} cy={lElbowY} r="3.5" fill="#ffffff" stroke="#14BBB7" strokeWidth="1.5" />
                      <circle cx={lHandX} cy={lHandY} r="5" fill="#FF7965" stroke="#ffffff" strokeWidth="1.5" />

                      {/* Right Arm Joints */}
                      <circle cx={rElbowX} cy={rElbowY} r="3.5" fill="#ffffff" stroke="#14BBB7" strokeWidth="1.5" />
                      <circle cx={rHandX} cy={rHandY} r="5" fill="#FF7965" stroke="#ffffff" strokeWidth="1.5" />

                      {/* Left Leg Joints */}
                      <circle cx={lKneeX} cy={lKneeY} r="3.5" fill="#ffffff" stroke="#14BBB7" strokeWidth="1.5" />
                      <circle cx={lFootX} cy={lFootY} r="5" fill="#FF7965" stroke="#ffffff" strokeWidth="1.5" />

                      {/* Right Leg Joints */}
                      <circle cx={rKneeX} cy={rKneeY} r="3.5" fill="#ffffff" stroke="#14BBB7" strokeWidth="1.5" />
                      <circle cx={rFootX} cy={rFootY} r="5" fill="#FF7965" stroke="#ffffff" strokeWidth="1.5" />
                    </g>
                  )}
                </svg>

                {/* Real-time Dynamic Metric Pill on Screen */}
                <div className="absolute top-4 left-4 bg-[#082A46]/90 backdrop-blur-md border border-white/20 rounded-2xl p-3 text-[10px] text-white/90 space-y-1 shadow-2xl pointer-events-none">
                  <div className="flex items-center gap-1.5 text-turquoise font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Kinematik Akış</span>
                  </div>
                  <p className="font-mono text-[9px]">GMA: <span className="text-emerald-400 font-bold">{currentScenario.metrics.gma}</span></p>
                  <p className="font-mono text-[9px]">Sapma: <span className="text-turquoise font-bold">±%0.8 (Normal)</span></p>
                </div>

                {/* Live Kinematics Telemetry Waveform */}
                {showTelemetry && (
                  <div className="absolute bottom-2 left-4 right-4 bg-black/60 backdrop-blur-md rounded-2xl p-2.5 border border-white/10 flex items-center justify-between gap-3 pointer-events-none">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-mono text-white/60 uppercase">Akıcılık Hız Eğrisi</span>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">3.2 cm/sn (Stabil)</span>
                    </div>
                    {/* SVG Wave */}
                    <div className="w-32 sm:w-44 h-7 overflow-hidden">
                      <svg viewBox="0 0 200 40" className="w-full h-full">
                        <polyline
                          fill="none"
                          stroke="#14BBB7"
                          strokeWidth="2"
                          strokeLinecap="round"
                          points={wavePoints}
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Video Controls & Scrub Bar */}
              <div className="relative z-20 bg-slate-950/90 backdrop-blur-md px-4 py-2.5 border-t border-white/10 flex flex-col gap-2">
                
                {/* Scrubber Bar */}
                <div
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const newProgress = Math.max(0, Math.min(100, Math.round((clickX / rect.width) * 100)));
                    setProgress(newProgress);
                  }}
                  className="w-full h-2 bg-white/20 hover:h-2.5 rounded-full overflow-hidden cursor-pointer transition-all"
                  title="İlerleme çubuğuna tıklayın"
                >
                  <div
                    className="h-full bg-gradient-to-r from-turquoise via-teal-300 to-coral transition-all duration-100 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Player Actions & Toggles */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-white">
                  
                  {/* Playback Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-8 h-8 rounded-xl bg-turquoise text-navy hover:bg-white flex items-center justify-center transition-colors font-bold shadow-md cursor-pointer"
                      title={isPlaying ? 'Durdur' : 'Oynat'}
                    >
                      {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
                    </button>

                    <button
                      onClick={() => setProgress(0)}
                      className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white/80 hover:text-white cursor-pointer"
                      title="Başa Al"
                    >
                      <RotateCcw size={13} />
                    </button>

                    <button
                      onClick={() => setPlaybackSpeed(playbackSpeed === 1 ? 0.5 : 1)}
                      className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[10px] font-mono text-white/80 cursor-pointer"
                      title="Oynatma Hızı"
                    >
                      {playbackSpeed}x {playbackSpeed === 0.5 && '(Ağır Çekim)'}
                    </button>

                    <span className="font-mono text-[11px] text-white/70 ml-1">
                      00:{String(Math.floor((progress / 100) * 30)).padStart(2, '0')} / 00:30
                    </span>
                  </div>

                  {/* Layer Toggles */}
                  <div className="flex items-center gap-1 sm:gap-2">
                    <button
                      onClick={() => setShowSkeleton(!showSkeleton)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                        showSkeleton ? 'bg-turquoise/30 text-turquoise border border-turquoise/50' : 'bg-white/5 text-white/40'
                      }`}
                    >
                      <Layers size={10} />
                      <span>İskelet</span>
                    </button>

                    <button
                      onClick={() => setShowHeatmap(!showHeatmap)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                        showHeatmap ? 'bg-coral/30 text-coral border border-coral/50' : 'bg-white/5 text-white/40'
                      }`}
                    >
                      <Flame size={10} />
                      <span>Isı Haritası</span>
                    </button>

                    <button
                      onClick={() => setShowTelemetry(!showTelemetry)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold flex items-center gap-1 transition-all cursor-pointer ${
                        showTelemetry ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/50' : 'bg-white/5 text-white/40'
                      }`}
                    >
                      <TrendingUp size={10} />
                      <span>Eğri</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status bar */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 flex items-center justify-between text-xs text-navy/80 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-navy">Dijital GMA Değerlendirmesi:</span>
                <span className="text-navy/70 hidden sm:inline">Akıcı, değişken ve simetrik spontan motor paterni izleniyor.</span>
              </div>
              <span className="text-[11px] font-bold text-turquoise bg-turquoise/10 px-2.5 py-1 rounded-full shrink-0 border border-turquoise/20">
                BabySensAI Core
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-14 bg-soft-gray border-l-4 border-turquoise rounded-2xl p-5 md:p-6 max-w-3xl mx-auto shadow-sm flex items-start gap-3.5">
          <Info size={20} className="text-turquoise shrink-0 mt-0.5" />
          <p className="text-xs md:text-sm text-navy/70 leading-relaxed">
            <strong className="font-bold text-navy">Önemli Bilgilendirme: </strong>
            DijitalBüyükanne ve BabySensAI teknolojisi tanı ve klinik teşhis koymaz. Hizmet, ailelere erken farkındalık kazandırmak, bebeğin gelişim aşamalarını düzenli kayıt altına almak ve gerektiğinde doğru uzman hekime başvurmayı kolaylaştırmak amacıyla tasarlanmıştır.
          </p>
        </div>
      </div>
    </section>
  );
}
