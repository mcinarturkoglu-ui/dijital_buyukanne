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
    focus: 'Nörolojik ve Kas Hastalıkları Değerlendirmesi',
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

  // Dynamic Joint Coordinates calculated per frame (centered so legs and feet are 100% visible)
  const t = progress * 0.15;
  const isTummy = activeScenarioIndex === 1;

  // Head
  const headX = 140 + Math.sin(t * 0.9) * 3;
  const headY = isTummy ? 28 + Math.sin(t * 1.2) * 3 : 32 + Math.sin(t * 0.8) * 3;

  // Torso center
  const chestX = 140;
  const chestY = isTummy ? 56 : 62;
  const pelvisX = 140 + Math.sin(t * 0.5) * 2;
  const pelvisY = isTummy ? 86 : 92;

  // Left Arm (upper & hand)
  const lElbowX = isTummy ? 104 + Math.cos(t) * 4 : 100 + Math.cos(t) * 7;
  const lElbowY = isTummy ? 64 : 60 + Math.sin(t * 1.1) * 5;
  const lHandX = isTummy ? 92 + Math.sin(t) * 3 : 78 + Math.cos(t * 1.3) * 9;
  const lHandY = isTummy ? 82 : 54 + Math.sin(t * 1.4) * 7;

  // Right Arm (upper & hand)
  const rElbowX = isTummy ? 176 + Math.sin(t) * 4 : 180 + Math.sin(t) * 7;
  const rElbowY = isTummy ? 64 : 60 + Math.cos(t * 1.1) * 5;
  const rHandX = isTummy ? 188 + Math.cos(t) * 3 : 202 + Math.sin(t * 1.3) * 9;
  const rHandY = isTummy ? 82 : 54 + Math.cos(t * 1.4) * 7;

  // Left Leg (knee & foot)
  const lKneeX = isTummy ? 122 + Math.sin(t * 0.8) * 4 : 118 + Math.sin(t) * 6;
  const lKneeY = isTummy ? 110 : 116 + Math.cos(t * 1.2) * 6;
  const lFootX = isTummy ? 114 + Math.cos(t) * 4 : 106 + Math.sin(t * 1.3) * 8;
  const lFootY = isTummy ? 130 : 138 + Math.cos(t * 1.5) * 8;

  // Right Leg (knee & foot)
  const rKneeX = isTummy ? 158 + Math.cos(t * 0.8) * 4 : 162 + Math.cos(t) * 6;
  const rKneeY = isTummy ? 110 : 116 + Math.sin(t * 1.2) * 6;
  const rFootX = isTummy ? 166 + Math.sin(t) * 4 : 174 + Math.cos(t * 1.3) * 8;
  const rFootY = isTummy ? 130 : 138 + Math.sin(t * 1.5) * 8;

  return (
    <section className="py-2 px-2 sm:px-4 bg-transparent relative overflow-hidden w-full flex flex-col justify-center my-auto" id="hareket-analizi">
      {/* Decorative ambient blur */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1360px] mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-2.5">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-turquoise bg-turquoise/10 border border-turquoise/20 px-3.5 py-1 rounded-full mb-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-pulse" />
            <span>AI Hareket Analizi & Kas Motor Takip Stüdyosu</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-navy">
            Bir video, bebeğinizin gelişiminde binlerce veri noktası sunar.
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-navy/70 leading-relaxed max-w-2xl mx-auto">
            0–6 ay spontan hareketlerini analiz ederek erken gelişimsel farkındalık sağlar.
          </p>
        </div>

        {/* Scenario Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-3.5">
          {scenarios.map((sc, idx) => (
            <button
              key={sc.id}
              onClick={() => {
                setActiveScenarioIndex(idx);
                setProgress(15);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeScenarioIndex === idx
                  ? 'bg-navy text-white shadow-md border border-turquoise ring-1 ring-turquoise/40 scale-102'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeScenarioIndex === idx ? 'bg-turquoise animate-pulse' : 'bg-slate-400'}`} />
              {sc.title}
            </button>
          ))}
        </div>

        {/* Main Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* LEFT 5 COLS: Dynamic Stepper & Active Scenario Info */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            
            {/* Active Scenario Card */}
            <div className="bg-gradient-to-br from-[#082A46] via-[#093254] to-[#0e3b61] text-white p-4 sm:p-5 rounded-3xl shadow-lg border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-turquoise/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="bg-turquoise/20 text-turquoise text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-turquoise/30">
                  {currentScenario.focus}
                </span>
                <span className="text-white/70 text-xs font-semibold">{currentScenario.ageRange}</span>
              </div>

              <h4 className="text-base font-bold text-white mb-1">{currentScenario.title}</h4>
              <p className="text-xs text-white/80 leading-relaxed mb-3">{currentScenario.description}</p>

              {/* Real-time score cards */}
              <div className="grid grid-cols-2 gap-2.5 pt-2.5 border-t border-white/15">
                <div className="bg-white/10 rounded-2xl p-2.5 border border-white/10">
                  <p className="text-[10px] text-white/70 uppercase tracking-wider font-semibold">Motor & Kas Akıcılığı</p>
                  <p className="text-base font-black text-emerald-300 font-mono mt-0.5">{currentScenario.metrics.gma}</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-2.5 border border-white/10">
                  <p className="text-[10px] text-white/70 uppercase tracking-wider font-semibold">Bilateral Simetri</p>
                  <p className="text-base font-black text-turquoise font-mono mt-0.5">{currentScenario.metrics.symmetry}</p>
                </div>
              </div>
            </div>

            {/* Step Indicators */}
            <div className="flex flex-col gap-2">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.label}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-gray-200/90 shadow-2xs hover:border-turquoise/50 transition-all cursor-default"
                  >
                    <div className={`w-9 h-9 rounded-xl ${step.iconBg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-4 h-4 ${step.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-xs sm:text-sm text-navy truncate">
                        {step.label}
                      </p>
                      <p className="text-[11px] text-slate-500 leading-snug truncate">
                        {step.desc}
                      </p>
                    </div>
                    <CheckCircle2 size={16} className="text-turquoise opacity-80 flex-shrink-0" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT 7 COLS: Interactive Video Studio & Live Kinematics Display */}
          <div className="lg:col-span-7 flex flex-col gap-2">
            
            {/* The Video Monitor Screen */}
            <div className="relative w-full aspect-[16/10] h-[360px] sm:h-[390px] lg:h-[410px] bg-[#071726] rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-900 group select-none flex flex-col justify-between">
              
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
              <div className="relative z-20 px-3.5 py-2.5 flex items-center justify-between text-white border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 relative">
                    {isPlaying && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />}
                    <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isPlaying ? 'bg-red-500' : 'bg-gray-400'}`} />
                  </span>
                  <span className="font-mono text-xs tracking-wider uppercase font-bold text-white/90">
                    {isPlaying ? 'CANLI AI VİDEO İŞLEME' : 'DURAKLATILDI'}
                  </span>
                  <span className="hidden sm:inline-block text-[10px] font-mono text-white/50 border-l border-white/20 pl-2">
                    4K • 60 FPS • RAW
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-turquoise/20 border border-turquoise/40 text-turquoise text-[11px] font-mono px-2.5 py-0.5 rounded-full font-bold">
                    <Sparkles size={11} />
                    <span>PoseTracker v2.4</span>
                  </div>
                  <span className="font-mono text-[11px] text-white/80 bg-white/10 px-2 py-0.5 rounded font-bold">
                    FRM #{String(Math.floor(progress * 4.2)).padStart(3, '0')}
                  </span>
                </div>
              </div>

              {/* Center Infant Pose Simulation (Kinematic Video Stream) */}
              <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-2">
                
                {/* SVG Skeleton & Joint Vectors (Centered viewBox so entire infant from head to toes is fully visible) */}
                <svg viewBox="0 0 280 160" className="w-full h-full max-w-[440px] drop-shadow-[0_0_12px_rgba(20,187,183,0.35)]">
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
                  <p className="font-mono text-[9px]">Nöromotor: <span className="text-emerald-400 font-bold">{currentScenario.metrics.gma}</span></p>
                  <p className="font-mono text-[9px]">Sapma: <span className="text-turquoise font-bold">±%0.8 (Normal)</span></p>
                </div>

                {/* Live Kinematics Telemetry Waveform (Positioned in corner so center infant skeleton is unobstructed) */}
                {showTelemetry && (
                  <div className="absolute bottom-2.5 right-3 bg-black/75 backdrop-blur-md rounded-xl p-2 px-3 border border-white/15 flex items-center gap-2.5 pointer-events-none shadow-lg">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-mono text-white/50 uppercase leading-none">Hız Eğrisi</span>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold leading-tight mt-0.5">3.2 cm/s</span>
                    </div>
                    {/* SVG Wave */}
                    <div className="w-20 sm:w-28 h-5 overflow-hidden">
                      <svg viewBox="0 0 200 40" className="w-full h-full">
                        <polyline
                          fill="none"
                          stroke="#14BBB7"
                          strokeWidth="2.5"
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
                <span className="font-bold text-navy">Dijital Nöromotor & Kas Değerlendirmesi:</span>
                <span className="text-navy/70 hidden sm:inline">Akıcı, değişken ve simetrik spontan motor paterni izleniyor.</span>
              </div>
              <span className="text-[11px] font-bold text-turquoise bg-turquoise/10 px-2.5 py-1 rounded-full shrink-0 border border-turquoise/20">
                BabySensAI Core
              </span>
            </div>
          </div>
        </div>

        {/* Clean Footnote */}
        <div className="mt-2.5 text-center max-w-3xl mx-auto">
          <p className="text-[11px] text-slate-500 font-medium">
            <span className="font-bold text-navy">Önemli Bilgilendirme: </span>
            BabySensAI video analiz teknolojisi tanı koymaz; 0–6 ay nöromotor gelişiminde erken farkındalık sağlayarak gerektiğinde hekim yönlendirmesini kolaylaştırır.
          </p>
        </div>
      </div>
    </section>
  );
}
