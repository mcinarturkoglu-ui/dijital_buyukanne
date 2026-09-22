'use client';

import { useState, useEffect } from 'react';
import {
  Baby,
  Smile,
  RotateCw,
  Sparkles,
  Footprints,
  CheckCircle2,
  TrendingUp,
  Heart,
  Award,
  Play,
  RotateCcw,
} from 'lucide-react';

const milestones = [
  {
    age: '2–3 Ay',
    title: 'Sosyal Gülümseme & Baş Tutuşu',
    emoji: '😊',
    icon: Smile,
    badge: 'Erken İletişim',
    highlight: 'Bebeğiniz sizinle ilk göz temasını kurar ve gülümser.',
    description: 'Yüzüstü yatırıldığında başını 45 derece kaldırabilir, sesli uyarılara agulama ve tebessümle yanıt verir.',
    checklist: [
      'Göz teması kurma ve gülümseme',
      'Yüzüstü pozisyonda başı kaldırma',
      'Ses yönüne başını çevirme',
    ],
    stimulusTip: 'Bol bol göz teması kurarak konuşun ve yüzüstü egzersiz (tummy time) yaptırın.',
    motionName: 'Spontan Bacak & Kol Vuruşları',
  },
  {
    age: '4–6 Ay',
    title: 'Dönüş & Nesnelere Uzanma',
    emoji: '🔄',
    icon: RotateCw,
    badge: 'Motor Koordinasyon',
    highlight: 'Sırtüstünden yana ve yüzüstüne dönme hareketleri başlar.',
    description: 'Ellerini orta hatta birleştirir, çıngırak gibi hafif nesnelere iki eliyle uzanıp ağzına götürür.',
    checklist: [
      'Destekle dik oturabilme',
      'Sırtüstünden yüzüstüne dönme',
      'Nesneleri kavrayıp el değiştirebilme',
    ],
    stimulusTip: 'Ulaşabileceği mesafeye renkli oyuncaklar koyarak dönme refleksini teşvik edin.',
    motionName: 'Gövde Rotasyonu & Baş Dengesi',
  },
  {
    age: '6–9 Ay',
    title: 'Desteksiz Oturma & Heceleme',
    emoji: '🧸',
    icon: Baby,
    badge: 'Denge & İfade',
    highlight: 'Kendi başına desteksiz oturabilir, ba-ba, ma-ma sesleri çıkarır.',
    description: 'Üst gövde kontrolü güçlenir. Çift heceli sesler çıkarır, ismine tepki verir ve ek gıdaya adım atar.',
    checklist: [
      'En az 10 saniye desteksiz oturma',
      'Nesneleri bir elden diğerine aktarma',
      'İsmine dönüp bakma',
    ],
    stimulusTip: 'Yere mat serip otururken yanlarına yumuşak yastıklar koyarak denge oyunları oynayın.',
    motionName: 'Postür Denge ve Oturma Kararlılığı',
  },
  {
    age: '9–12 Ay',
    title: 'Emekleme & Tutunup Kalkma',
    emoji: '🐾',
    icon: TrendingUp,
    badge: 'Keşif Dönemi',
    highlight: 'Mobilyalara tutunarak ayağa kalkar ve sıralamaya başlar.',
    description: 'Parmak ucuyla küçük nesneleri tutar (kıskaç hareketi). El sallama ve alkış gibi taklit oyunlarını severek yapar.',
    checklist: [
      'Karnı yerden kaldırıp emekleme',
      'Tutunarak ayağa kalkma (sıralama)',
      'Bay-bay yapma ve el çırpma',
    ],
    stimulusTip: 'Evinizi güvenli hale getirin; alçak sehpalara tutunup adım atması için fırsat tanıyın.',
    motionName: 'Çapraz Emekleme İtme Gücü',
  },
  {
    age: '12–18 Ay',
    title: 'İlk Adımlar & Bağımsızlık',
    emoji: '👣',
    icon: Footprints,
    badge: 'Yürüme Aşaması',
    highlight: 'Bağımsız yürümeye başlar ve bilinçli ilk kelimelerini söyler.',
    description: 'Desteksiz yürür, basit yönergeleri anlar (topu ver, gel). Kendi kendine bardağı tutmaya çalışır.',
    checklist: [
      'Desteksiz birkaç adım atma',
      'En az 3-5 anlamlı kelime kullanma',
      'İşaret parmağıyla istediklerini gösterme',
    ],
    stimulusTip: 'Yürürken elinden tutmak yerine arkasından destekleyin, nesnelerin adlarını bolca tekrar edin.',
    motionName: 'Bipedal Denge & Ayak Basış Simetrisi',
  },
  {
    age: '18–24 Ay',
    title: 'Koşma & İfade Gücü',
    emoji: '🚀',
    icon: Sparkles,
    badge: 'Dil & Sosyal Gelişim',
    highlight: 'Kelime dağarcığı patlama yapar, 2 kelimeli cümleler kurar.',
    description: 'Koşabilir, topa tekme atabilir, basit taklit oyunları kurar (bebeği besleme, araba sürme gibi).',
    checklist: [
      '2 kelimeli cümleler kurma ("anne su")',
      'Merdivenleri destekle çıkma',
      'Kitap sayfalarını tek tek çevirme',
    ],
    stimulusTip: 'Birlikte resimli kitaplar okuyun, "Bu ne?" sorularına sabırla cevap verip hayal gücünü besleyin.',
    motionName: 'Hızlı Koordinasyon & Motor Çeviklik',
  },
];

/* Animated Dynamic SVG Baby Component */
function AnimatedBabyAvatar({ stageIndex }: { stageIndex: number }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => (prev + 1) % 360);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const rad = (tick * Math.PI) / 180;
  const kick1 = Math.sin(rad * 4) * 14;
  const kick2 = Math.cos(rad * 4) * 14;
  const armWave1 = Math.sin(rad * 3) * 12;
  const armWave2 = Math.cos(rad * 3) * 12;
  const bounce = Math.abs(Math.sin(rad * 3)) * 8;

  return (
    <div className="relative w-full aspect-square max-w-[240px] sm:max-w-[260px] mx-auto flex items-center justify-center select-none">
      {/* Ambient glowing radial aura */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-turquoise/20 via-coral/15 to-transparent blur-2xl animate-pulse-glow" />

      {/* Outer spinning orbital indicator */}
      <div className="absolute inset-2 rounded-full border border-dashed border-turquoise/35 animate-spin" style={{ animationDuration: '25s' }} />

      {/* SVG Canvas for Baby Motion - centered at (0, 0) */}
      <svg viewBox="-100 -100 200 200" className="w-full h-full relative z-10 drop-shadow-xl overflow-visible">
        <defs>
          <linearGradient id="babySkin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffdfba" />
            <stop offset="100%" stopColor="#fec89a" />
          </linearGradient>
          <linearGradient id="onesieTurquoise" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14BBB7" />
            <stop offset="100%" stopColor="#082A46" />
          </linearGradient>
          <linearGradient id="coralGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7965" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
          <radialGradient id="stageMatGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#14BBB7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#14BBB7" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft Stage Ground Spotlight */}
        <ellipse cx="0" cy="55" rx="68" ry="18" fill="url(#stageMatGlow)" />

        {/* STAGE 0: 2-3 Ay (Sırtüstü yatarak tekmeleyen & gülen bebek) */}
        {stageIndex === 0 && (
          <g transform="translate(0, 0)">
            {/* Play Mat */}
            <ellipse cx="0" cy="48" rx="65" ry="20" fill="#EDF3F4" stroke="#14BBB7" strokeWidth="2" strokeDasharray="4 2" />
            
            {/* Baby Body (Onesie) */}
            <ellipse cx="0" cy="14" rx="28" ry="22" fill="url(#onesieTurquoise)" />
            <circle cx="0" cy="10" r="2.5" fill="#ffffff" opacity="0.85" />
            <circle cx="0" cy="18" r="2.5" fill="#ffffff" opacity="0.85" />

            {/* Left Leg (kicking) */}
            <g transform={`translate(-16, 26) rotate(${kick1})`}>
              <rect x="-5" y="0" width="10" height="22" rx="5" fill="url(#babySkin)" />
              <circle cx="0" cy="22" r="6.5" fill="url(#coralGlow)" />
            </g>

            {/* Right Leg (kicking opposite) */}
            <g transform={`translate(16, 26) rotate(${kick2})`}>
              <rect x="-5" y="0" width="10" height="22" rx="5" fill="url(#babySkin)" />
              <circle cx="0" cy="22" r="6.5" fill="url(#coralGlow)" />
            </g>

            {/* Left Arm waving */}
            <g transform={`translate(-25, 4) rotate(${-30 + armWave1})`}>
              <rect x="-4.5" y="0" width="9" height="19" rx="4.5" fill="url(#babySkin)" />
              <circle cx="0" cy="19" r="4.5" fill="#ffdfba" />
            </g>

            {/* Right Arm waving */}
            <g transform={`translate(25, 4) rotate(${30 + armWave2})`}>
              <rect x="-4.5" y="0" width="9" height="19" rx="4.5" fill="url(#babySkin)" />
              <circle cx="0" cy="19" r="4.5" fill="#ffdfba" />
            </g>

            {/* Baby Head */}
            <circle cx="0" cy="-22" r="23" fill="url(#babySkin)" stroke="#fec89a" strokeWidth="1.5" />
            {/* Cute Hair curl */}
            <path d="M -2 -45 C 4 -51 10 -43 2 -39" stroke="#082A46" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Happy Eyes */}
            <path d="M -10 -22 Q -6 -27 -2 -22" stroke="#082A46" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 2 -22 Q 6 -27 10 -22" stroke="#082A46" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Rosy Cheeks */}
            <circle cx="-12" cy="-14" r="4.5" fill="#ff7965" opacity="0.5" />
            <circle cx="12" cy="-14" r="4.5" fill="#ff7965" opacity="0.5" />
            {/* Smile */}
            <path d="M -6 -13 Q 0 -6 6 -13" stroke="#082A46" strokeWidth="2.5" fill="#ffffff" strokeLinecap="round" />

            {/* Floating Love Heart */}
            <g transform={`translate(${kick1 * 0.4}, -52)`}>
              <path d="M 0 0 C -4 -5 -10 -2 -6 4 L 0 10 L 6 4 C 10 -2 4 -5 0 0 Z" fill="#FF7965" className="animate-ping" />
            </g>
          </g>
        )}

        {/* STAGE 1: 4-6 Ay (Dönen & Baş Kaldıran Bebek / Tummy Time) */}
        {stageIndex === 1 && (
          <g transform={`rotate(${Math.sin(rad * 2) * 7})`}>
            {/* Rotation Motion Arc */}
            <path d="M -58 35 A 68 68 0 0 1 58 35" fill="none" stroke="#14BBB7" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.8" />
            <polygon points="62,31 56,41 68,39" fill="#14BBB7" />

            {/* Torso on belly */}
            <ellipse cx="0" cy="12" rx="30" ry="20" fill="url(#onesieTurquoise)" />
            {/* Little Feet lifted */}
            <circle cx="-18" cy="30" r="8" fill="url(#coralGlow)" />
            <circle cx="18" cy="30" r="8" fill="url(#coralGlow)" />

            {/* Arms supporting chest */}
            <g transform={`translate(-22, 12) rotate(${Math.sin(rad * 3) * 6})`}>
              <rect x="-4.5" y="0" width="9" height="22" rx="4.5" fill="url(#babySkin)" />
            </g>
            <g transform={`translate(22, 12) rotate(${-Math.sin(rad * 3) * 6})`}>
              <rect x="-4.5" y="0" width="9" height="22" rx="4.5" fill="url(#babySkin)" />
            </g>

            {/* Head Lifting Up with Pride */}
            <g transform={`translate(0, ${-22 + Math.sin(rad * 3) * 4})`}>
              <circle cx="0" cy="0" r="23" fill="url(#babySkin)" stroke="#fec89a" strokeWidth="1.5" />
              {/* Wide Wonder Eyes */}
              <circle cx="-8" cy="-2" r="3.5" fill="#082A46" />
              <circle cx="8" cy="-2" r="3.5" fill="#082A46" />
              <circle cx="-7" cy="-3" r="1.2" fill="#ffffff" />
              <circle cx="9" cy="-3" r="1.2" fill="#ffffff" />
              {/* Rosy Cheeks */}
              <circle cx="-12" cy="5" r="4.5" fill="#ff7965" opacity="0.5" />
              <circle cx="12" cy="5" r="4.5" fill="#ff7965" opacity="0.5" />
              {/* O-shaped wonder mouth */}
              <ellipse cx="0" cy="7" rx="3" ry="4" fill="#082A46" />
            </g>
          </g>
        )}

        {/* STAGE 2: 6-9 Ay (Desteksiz Oturan ve El Çırpan Bebek) */}
        {stageIndex === 2 && (
          <g transform={`translate(0, ${-bounce * 0.4}) rotate(${Math.sin(rad * 2) * 4})`}>
            {/* Sitting legs crossed */}
            <ellipse cx="-22" cy="40" rx="16" ry="10" fill="url(#onesieTurquoise)" />
            <ellipse cx="22" cy="40" rx="16" ry="10" fill="url(#onesieTurquoise)" />
            <circle cx="-35" cy="41" r="7.5" fill="url(#coralGlow)" />
            <circle cx="35" cy="41" r="7.5" fill="url(#coralGlow)" />

            {/* Sitting Body */}
            <ellipse cx="0" cy="14" rx="26" ry="26" fill="url(#onesieTurquoise)" />

            {/* Clapping Hands (Alkış alkış) */}
            <g transform={`translate(${-14 + Math.sin(rad * 5) * 6}, 10) rotate(20)`}>
              <rect x="-4" y="0" width="8" height="18" rx="4" fill="url(#babySkin)" />
            </g>
            <g transform={`translate(${14 - Math.sin(rad * 5) * 6}, 10) rotate(-20)`}>
              <rect x="-4" y="0" width="8" height="18" rx="4" fill="url(#babySkin)" />
            </g>

            {/* Clapping Sparkles */}
            <circle cx="0" cy="12" r="3" fill="#14BBB7" className="animate-ping" />

            {/* Head swaying with balance */}
            <g transform="translate(0, -24)">
              <circle cx="0" cy="0" r="23" fill="url(#babySkin)" stroke="#fec89a" strokeWidth="1.5" />
              {/* Smiling Eyes */}
              <circle cx="-7" cy="-2" r="3.2" fill="#082A46" />
              <circle cx="7" cy="-2" r="3.2" fill="#082A46" />
              {/* Laughing Smile */}
              <path d="M -7 5 Q 0 15 7 5 Z" fill="#082A46" />
              <circle cx="-11" cy="4" r="4" fill="#ff7965" opacity="0.5" />
              <circle cx="11" cy="4" r="4" fill="#ff7965" opacity="0.5" />
            </g>
          </g>
        )}

        {/* STAGE 3: 9-12 Ay (Emekleyen Bebek) */}
        {stageIndex === 3 && (
          <g transform={`translate(${Math.sin(rad * 2) * 8}, ${Math.abs(Math.sin(rad * 4)) * 3})`}>
            {/* Crawling body horizontal */}
            <ellipse cx="4" cy="12" rx="30" ry="20" fill="url(#onesieTurquoise)" />

            {/* Back leg crawling motion */}
            <g transform={`translate(22, 16) rotate(${kick1 * 1.4})`}>
              <rect x="-4.5" y="0" width="9" height="22" rx="4.5" fill="url(#onesieTurquoise)" />
              <circle cx="0" cy="22" r="6" fill="url(#coralGlow)" />
            </g>

            {/* Front arm reaching */}
            <g transform={`translate(-18, 16) rotate(${kick2 * 1.4})`}>
              <rect x="-4.5" y="0" width="9" height="22" rx="4.5" fill="url(#babySkin)" />
              <circle cx="0" cy="22" r="5" fill="#ffdfba" />
            </g>

            {/* Head in front looking forward */}
            <g transform="translate(-26, -8)">
              <circle cx="0" cy="0" r="21" fill="url(#babySkin)" stroke="#fec89a" strokeWidth="1.5" />
              <circle cx="-5" cy="-2" r="3" fill="#082A46" />
              <circle cx="5" cy="-2" r="3" fill="#082A46" />
              <path d="M -4 4 Q 0 9 4 4" stroke="#082A46" strokeWidth="2" fill="none" strokeLinecap="round" />
              <circle cx="-9" cy="3" r="3.5" fill="#ff7965" opacity="0.5" />
              <circle cx="9" cy="3" r="3.5" fill="#ff7965" opacity="0.5" />
            </g>

            {/* Crawl trail dust particles */}
            <circle cx="42" cy="32" r="3.5" fill="#14BBB7" opacity="0.6" className="animate-ping" />
            <circle cx="54" cy="35" r="2.5" fill="#14BBB7" opacity="0.3" />
          </g>
        )}

        {/* STAGE 4: 12-18 Ay (Yürüyen & İlk Adımlar) */}
        {stageIndex === 4 && (
          <g transform={`translate(0, ${-bounce * 0.7}) rotate(${Math.sin(rad * 3) * 4})`}>
            {/* Animated Walking Legs */}
            <g transform={`translate(-11, 30) rotate(${kick1 * 1.6})`}>
              <rect x="-5" y="0" width="10" height="30" rx="5" fill="url(#onesieTurquoise)" />
              <rect x="-6" y="24" width="14" height="7" rx="3.5" fill="url(#coralGlow)" />
            </g>
            <g transform={`translate(11, 30) rotate(${-kick1 * 1.6})`}>
              <rect x="-5" y="0" width="10" height="30" rx="5" fill="url(#onesieTurquoise)" />
              <rect x="-6" y="24" width="14" height="7" rx="3.5" fill="url(#coralGlow)" />
            </g>

            {/* Standing Body */}
            <ellipse cx="0" cy="10" rx="24" ry="26" fill="url(#onesieTurquoise)" />

            {/* Balancing Hands stretched up & out (Toddler walk posture) */}
            <g transform={`translate(-20, -2) rotate(${-40 + armWave1})`}>
              <rect x="-4.5" y="0" width="9" height="23" rx="4.5" fill="url(#babySkin)" />
              <circle cx="0" cy="23" r="5" fill="#ffdfba" />
            </g>
            <g transform={`translate(20, -2) rotate(${40 - armWave2})`}>
              <rect x="-4.5" y="0" width="9" height="23" rx="4.5" fill="url(#babySkin)" />
              <circle cx="0" cy="23" r="5" fill="#ffdfba" />
            </g>

            {/* Happy Walking Head */}
            <g transform="translate(0, -26)">
              <circle cx="0" cy="0" r="23" fill="url(#babySkin)" stroke="#fec89a" strokeWidth="1.5" />
              <path d="M -8 -3 Q -4 -7 0 -3" stroke="#082A46" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M 2 -3 Q 6 -7 10 -3" stroke="#082A46" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <circle cx="-10" cy="4" r="4" fill="#ff7965" opacity="0.5" />
              <circle cx="10" cy="4" r="4" fill="#ff7965" opacity="0.5" />
              <path d="M -5 4 Q 0 12 5 4" stroke="#082A46" strokeWidth="2.5" fill="#ffffff" strokeLinecap="round" />
            </g>

            {/* Footstep footprints appearing */}
            <ellipse cx="-22" cy="65" rx="4.5" ry="2.5" fill="#14BBB7" opacity="0.6" />
            <ellipse cx="22" cy="62" rx="4.5" ry="2.5" fill="#14BBB7" opacity="0.4" />
          </g>
        )}

        {/* STAGE 5: 18-24 Ay (Koşan & Zıplayan Çocuk) */}
        {stageIndex === 5 && (
          <g transform={`translate(0, ${-Math.abs(Math.sin(rad * 4)) * 12}) rotate(${Math.sin(rad * 4) * 5})`}>
            {/* Running legs */}
            <g transform={`translate(-10, 28) rotate(${Math.sin(rad * 6) * 35})`}>
              <rect x="-5.5" y="0" width="11" height="30" rx="5" fill="#082A46" />
              <rect x="-7" y="24" width="15" height="8" rx="4" fill="url(#coralGlow)" />
            </g>
            <g transform={`translate(10, 28) rotate(${-Math.sin(rad * 6) * 35})`}>
              <rect x="-5.5" y="0" width="11" height="30" rx="5" fill="#082A46" />
              <rect x="-7" y="24" width="15" height="8" rx="4" fill="url(#coralGlow)" />
            </g>

            {/* Energetic Body */}
            <ellipse cx="0" cy="8" rx="23" ry="25" fill="url(#onesieTurquoise)" />

            {/* Running arms pumped */}
            <g transform={`translate(-19, 0) rotate(${-Math.sin(rad * 6) * 45})`}>
              <rect x="-4.5" y="0" width="9" height="22" rx="4.5" fill="url(#babySkin)" />
            </g>
            <g transform={`translate(19, 0) rotate(${Math.sin(rad * 6) * 45})`}>
              <rect x="-4.5" y="0" width="9" height="22" rx="4.5" fill="url(#babySkin)" />
            </g>

            {/* Cheerful Head */}
            <g transform="translate(0, -25)">
              <circle cx="0" cy="0" r="23" fill="url(#babySkin)" stroke="#fec89a" strokeWidth="1.5" />
              {/* Winking Eye */}
              <circle cx="-7" cy="-2" r="3.2" fill="#082A46" />
              <path d="M 2 -2 Q 6 -6 10 -2" stroke="#082A46" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              {/* Joyful open mouth */}
              <path d="M -6 4 Q 0 14 6 4 Z" fill="#082A46" />
              <circle cx="-10" cy="4" r="4" fill="#ff7965" opacity="0.5" />
              <circle cx="10" cy="4" r="4" fill="#ff7965" opacity="0.5" />
            </g>

            {/* Sparkle energy stars around */}
            <polygon points="40,-25 43,-18 50,-16 44,-12 46,-5 40,-9 34,-5 36,-12 30,-16 37,-18" fill="#FF7965" className="animate-spin" style={{ animationDuration: '4s' }} />
          </g>
        )}
      </svg>
    </div>
  );
}

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [completedItems, setCompletedItems] = useState<{ [key: string]: boolean }>({
    '0-0': true,
    '0-1': true,
  });

  const activeMilestone = milestones[activeIndex];

  const toggleChecklist = (id: string) => {
    setCompletedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedCount = activeMilestone.checklist.filter((_, i) => completedItems[`${activeIndex}-${i}`]).length;
  const progressPercent = Math.round((completedCount / activeMilestone.checklist.length) * 100);

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-white via-soft-gray/40 to-white relative overflow-hidden" id="gelisim">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-turquoise/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-turquoise bg-turquoise/10 border border-turquoise/25 px-4 py-1.5 rounded-full mb-4">
            <Sparkles size={14} className="text-turquoise animate-spin" style={{ animationDuration: '6s' }} />
            <span>0–24 Ay Canlı Bebek Gelişim Simülatörü</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Her bebeğin büyüme yolculuğu <br className="hidden sm:inline" />
            <span className="text-turquoise">canlı bir mucizedir.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-navy/70 leading-relaxed font-normal">
            Aşağıdaki ay butonlarına tıklayarak bebeğinizin animasyonlu gelişim hareketlerini ve o dönemin kilometre taşlarını canlı simüle edin.
          </p>
        </div>

        {/* Interactive Age Selector Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 justify-start md:justify-center no-scrollbar">
          {milestones.map((m, idx) => (
            <button
              key={m.age}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 shrink-0 border ${
                activeIndex === idx
                  ? 'bg-navy text-white shadow-xl shadow-navy/20 border-turquoise scale-105'
                  : 'bg-white text-navy/70 hover:bg-turquoise/10 hover:text-navy border-gray-200 shadow-sm'
              }`}
            >
              <span className="text-base">{m.emoji}</span>
              <span>{m.age}</span>
              {activeIndex === idx && (
                <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-ping ml-0.5" />
              )}
            </button>
          ))}
        </div>

        {/* Milestone Display Card with 3 Columns: Info, Animated Baby Avatar, Checklist */}
        <div className="mt-6 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          
          {/* Ambient Card Corner Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-turquoise/10 rounded-full blur-3xl pointer-events-none" />

          {/* COL 1: Milestone Text Info (5 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-coral/15 text-coral text-xs font-bold px-3 py-1 rounded-full border border-coral/30">
                {activeMilestone.badge}
              </span>
              <span className="text-xs font-mono font-bold text-navy/60 bg-slate-100 px-2.5 py-1 rounded-full">
                {activeMilestone.age}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-navy leading-tight">
              {activeMilestone.title}
            </h3>

            <p className="text-sm text-turquoise font-semibold leading-relaxed">
              {activeMilestone.highlight}
            </p>

            <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
              {activeMilestone.description}
            </p>

            {/* Stimulus Parent Tip Box */}
            <div className="bg-soft-gray/80 rounded-2xl p-3.5 border border-gray-200/80 flex items-start gap-2.5 mt-2">
              <div className="w-7 h-7 rounded-lg bg-turquoise/20 text-turquoise flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                💡
              </div>
              <div>
                <p className="text-[10px] font-bold text-navy uppercase tracking-wider">Gelişim Önerisi</p>
                <p className="text-[11px] text-navy/75 mt-0.5 leading-relaxed">{activeMilestone.stimulusTip}</p>
              </div>
            </div>
          </div>

          {/* COL 2: ANIMATED BABY THEATER (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-turquoise/5 rounded-3xl p-4 border border-turquoise/20 relative shadow-inner">
            <div className="flex items-center justify-between w-full mb-1 px-2">
              <span className="text-[10px] font-mono font-bold text-turquoise uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                CANLI MOTOR SİMÜLASYONU
              </span>
              <span className="text-[10px] font-bold text-navy/40">{activeMilestone.age}</span>
            </div>

            {/* The Animated SVG Baby */}
            <AnimatedBabyAvatar stageIndex={activeIndex} />

            <div className="mt-2 text-center bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-turquoise/20 shadow-xs">
              <p className="text-[11px] font-bold text-navy">{activeMilestone.motionName}</p>
              <p className="text-[9px] text-turquoise font-semibold">BabySensAI Hareket Paterni</p>
            </div>
          </div>

          {/* COL 3: Interactive Checklist & Score (4 cols) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#082A46] to-[#0c395e] text-white p-5 rounded-3xl shadow-lg border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-white/15">
                <span className="text-xs font-bold uppercase tracking-wider text-turquoise flex items-center gap-1.5">
                  <Award size={14} />
                  <span>Dönem Kazanımı</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-300 font-bold bg-white/10 px-2 py-0.5 rounded">
                  %{progressPercent} Tamamlandı
                </span>
              </div>

              <p className="text-[11px] text-white/80 mb-3">
                Bebeğinizin gösterdiği becerileri işaretleyin:
              </p>

              {/* Checklist items */}
              <div className="flex flex-col gap-2">
                {activeMilestone.checklist.map((item, i) => {
                  const checkKey = `${activeIndex}-${i}`;
                  const isChecked = !!completedItems[checkKey];
                  return (
                    <button
                      key={i}
                      onClick={() => toggleChecklist(checkKey)}
                      className={`w-full p-2.5 rounded-xl text-left text-[11px] font-medium transition-all duration-200 flex items-center justify-between gap-2 border ${
                        isChecked
                          ? 'bg-turquoise/20 border-turquoise text-white shadow-sm'
                          : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                      }`}
                    >
                      <span className="leading-tight">{item}</span>
                      <div className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                        isChecked ? 'bg-turquoise text-navy' : 'border border-white/30'
                      }`}>
                        {isChecked && <CheckCircle2 size={12} className="stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Insight */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60">
              <span className="flex items-center gap-1">
                <Heart size={11} className="text-coral fill-coral" />
                <span>Her bebek özeldir</span>
              </span>
              <span className="text-turquoise font-bold">Objektif Takip</span>
            </div>
          </div>
        </div>

        {/* Quote banner */}
        <div className="mt-10 text-center max-w-2xl mx-auto">
          <blockquote className="text-navy/60 text-xs sm:text-sm italic leading-relaxed">
            &ldquo;Erken farkındalık, ihtiyaç duyulduğunda doğru uzman desteğine zamanında ulaşmayı kolaylaştırır.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
