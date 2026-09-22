'use client';

import { useState, useEffect } from 'react';
import {
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Activity,
  HeartHandshake,
  ShieldCheck,
  Brain,
  Baby,
  Smile,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

interface StageData {
  age: string;
  badge: string;
  title: string;
  subtitle: string;
  supported: {
    heading: string;
    points: string[];
    status: string;
    statValue: string;
    statLabel: string;
  };
  unsupported: {
    heading: string;
    points: string[];
    status: string;
    statValue: string;
    statLabel: string;
  };
}

const journeyStages: StageData[] = [
  {
    age: '0–3 Ay',
    badge: '1. Aşama: Erken AI Taraması',
    title: 'Spontan Hareket Analizi & Erken Sinyal',
    subtitle: 'Bebek yatağında hareket ederken BabySensAI video analizi minik asimetrileri erkenden tespit eder.',
    supported: {
      heading: 'Dijital Büyükanne Erken Müdahalesi',
      status: 'Erken Farkındalık Aktif',
      points: [
        'Kamera ile çekilen 2 dakikalık video yapay zekâ modelince analiz edildi.',
        'Sol bacak spontan itiş gücündeki hafif asimetri tespit edilip aile sakin bir dille bilgilendirildi.',
        'Sistem doğrudan bölgedeki Çocuk Fizyoterapisti ve hekim ile randevu köprüsü kurdu.',
      ],
      statValue: '9 Ay',
      statLabel: 'Ortalama Erken Teşhis Kazancı',
    },
    unsupported: {
      heading: 'Geleneksel / Desteksiz Süreç',
      status: 'Gecikme Riski',
      points: [
        'Bebekteki asimetri çıplak gözle fark edilemez veya "zamanla düzelir" denir.',
        'Düzenli tarama olmadığı için ailenin endişesi artar ancak doğru adıma ulaşılamaz.',
        'Beyin gelişiminin en esnek olduğu kritik ilk 3 ay müdahalesiz geçer.',
      ],
      statValue: '-12 Ay',
      statLabel: 'Kaybedilen Kritik Gelişim Süresi',
    },
  },
  {
    age: '3–6 Ay',
    badge: '2. Aşama: Uzman Müdahalesi',
    title: 'Kişiselleştirilmiş Egzersiz & Nöroplastisite',
    subtitle: 'Çocuk hekimi ve fizyoterapist kontrolünde evde uygulanabilen nörogelişimsel destek egzersizleri başlar.',
    supported: {
      heading: 'Dijital Büyükanne Erken Müdahalesi',
      status: 'Aktif Egzersiz & Takip',
      points: [
        'Fizyoterapist aileye özel günde 2 kez 10 dakikalık destekleyici oyunlar tanımladı.',
        'Boyun ve gövde kontrolü (tummy-time) desteklenerek kas tonusu dengelendi.',
        'Mobil uygulama üzerinden haftalık gelişim videolarıyla uzman ilerlemeyi denetledi.',
      ],
      statValue: '%85',
      statLabel: 'Nöroplastisite Sayesinde Fonksiyonel Uyum',
    },
    unsupported: {
      heading: 'Geleneksel / Desteksiz Süreç',
      status: 'Aksayan Kas Tonusu',
      points: [
        'Bebek başını tutmakta ve dönmekte zorlanır, gövdede asimetrik duruş oturmaya başlar.',
        'Uzman yönlendirmesi olmadığı için hatalı kucaklama ve yatırma pozisyonları uygulanır.',
        'Kas gerginlikleri kalıcı hareket kısıtlılığına dönüşme riski taşır.',
      ],
      statValue: '%30',
      statLabel: 'Geç Dönemde Tedaviye Yanıt Oranı',
    },
  },
  {
    age: '6–12 Ay',
    badge: '3. Aşama: Postür & Denge',
    title: 'Desteksiz Oturma, Emekleme & Güçlenme',
    subtitle: 'Düzenli takip sayesinde gövde kasları güçlenir; çocuk çevreye merakla uzanır ve desteksiz oturur.',
    supported: {
      heading: 'Dijital Büyükanne Erken Müdahalesi',
      status: 'Güçlü Denge & Hareket',
      points: [
        'Bebek desteksiz oturma ve nesneleri iki eliyle dengeli tutma becerisi kazandı.',
        'Çapraz emekleme koordinasyonu güçlendirildi; motor ve bilişsel gelişim akranlarını yakaladı.',
        'Aile, uzman topluluğu ve rehber içeriklerle her an güvende hissetti.',
      ],
      statValue: '%92',
      statLabel: 'Akran Düzeyine Yakın Motor Başarı',
    },
    unsupported: {
      heading: 'Geleneksel / Desteksiz Süreç',
      status: 'Denge & Postür Bozukluğu',
      points: [
        'Oturma dengesi sağlanamaz, çocuk sürekli yana veya arkaya devrilir.',
        'Emekleme aşaması atlanabilir veya asimetrik sürünme alışkanlık haline gelir.',
        'Aile artık gecikmeyi net görür ve yoğun, masraflı klinik tedavilere geç kalınarak başlanır.',
      ],
      statValue: '2x',
      statLabel: 'Daha Ağır ve Uzun Rehabilitasyon Yükü',
    },
  },
  {
    age: '12–24 Ay',
    badge: '4. Aşama: Bağımsız Gelecek',
    title: 'Bağımsız İlk Adımlar & Sağlıklı Büyüme',
    subtitle: 'Zamanında atılan adımlar kalıcı kısıtlılık riskini minimuma indirir; çocuk kendi ayakları üzerinde durur.',
    supported: {
      heading: 'Dijital Büyükanne Erken Müdahalesi',
      status: 'Bağımsız Yaşam & Mutlu Gelecek',
      points: [
        'Çocuk minimum veya sıfır dış destekle ilk bağımsız adımlarını güvenle attı!',
        'Sosyal hayata, oyun alanlarına ve akran oyunlarına tam katılım sağlandı.',
        'Erken sevgi, bilim ve düzenli takip sayesinde engeller aşıldı, umut gerçeğe dönüştü.',
      ],
      statValue: 'Tam',
      statLabel: 'Sosyal & Fiziksel Bağımsızlık',
    },
    unsupported: {
      heading: 'Geleneksel / Desteksiz Süreç',
      status: 'Kalıcı Hareket Kısıtlılığı',
      points: [
        'Yürüme 24+ aya kadar gecikebilir, kalıcı ortopedik yürüteç veya cihaz desteği gerekebilir.',
        'Cerrahi müdahale ihtiyacı ihtimali yükselir.',
        'Ailenin hem psikolojik hem de ekonomik yükü yıllarca devam eder.',
      ],
      statValue: 'Kısıtlı',
      statLabel: 'Yardımcı Cihazlara Bağımlılık Riski',
    },
  },
];

/* Interactive SVG Canvas for Child Growth Simulation */
function ChildGrowthVisual({ stageIndex, isSupported }: { stageIndex: number; isSupported: boolean }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => (prev + 1) % 360);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const rad = (tick * Math.PI) / 180;
  const kickSmooth = Math.sin(rad * 4) * 12;
  const kickStiff = isSupported ? kickSmooth : Math.sin(rad * 2) * 5;
  const bounce = Math.abs(Math.sin(rad * 3)) * 6;

  const outfitPrimary = isSupported ? '#14BBB7' : '#64748B';
  const accentColor = isSupported ? '#FF7965' : '#94A3B8';
  const auraColor = isSupported ? 'from-turquoise/25 via-emerald-500/15' : 'from-slate-400/20 via-slate-600/10';

  return (
    <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[320px] mx-auto flex items-center justify-center select-none">
      {/* Dynamic Ambient Background Aura */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${auraColor} to-transparent blur-2xl animate-pulse-glow`} />

      {/* Orbit ring */}
      <div
        className={`absolute inset-3 rounded-full border border-dashed ${
          isSupported ? 'border-turquoise/35' : 'border-slate-300/40'
        } animate-spin`}
        style={{ animationDuration: '30s' }}
      />

      <svg viewBox="-120 -100 240 200" className="w-full h-full relative z-10 drop-shadow-xl overflow-visible">
        <defs>
          <linearGradient id="growthSkin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffdfba" />
            <stop offset="100%" stopColor="#fec89a" />
          </linearGradient>
          <linearGradient id="growthOutfit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={outfitPrimary} />
            <stop offset="100%" stopColor={isSupported ? '#082A46' : '#334155'} />
          </linearGradient>
          <linearGradient id="growthAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accentColor} />
            <stop offset="100%" stopColor={isSupported ? '#f43f5e' : '#475569'} />
          </linearGradient>
          <radialGradient id="stageGlowRadial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={isSupported ? '#14BBB7' : '#94a3b8'} stopOpacity="0.25" />
            <stop offset="100%" stopColor={isSupported ? '#14BBB7' : '#94a3b8'} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Stage Floor Spotlight */}
        <ellipse cx="0" cy="55" rx="75" ry="18" fill="url(#stageGlowRadial)" />

        {/* AŞAMA 0: 0-3 AY (Yatarak Hareket Tarama) */}
        {stageIndex === 0 && (
          <g transform="translate(0, 0)">
            {/* Soft Bed Mat */}
            <ellipse cx="0" cy="46" rx="68" ry="20" fill="#EDF3F4" stroke={outfitPrimary} strokeWidth="1.5" strokeDasharray="4 3" />

            {/* AI Scanning Waves */}
            {isSupported && (
              <g>
                <circle cx="0" cy="10" r="45" fill="none" stroke="#14BBB7" strokeWidth="1" strokeDasharray="4 2" className="animate-ping" opacity="0.4" />
                <path d="M -50 -10 L 50 -10" stroke="#14BBB7" strokeWidth="1.5" strokeDasharray="2 4" opacity="0.6" />
                <rect x="-44" y="-38" width="88" height="18" rx="9" fill="#14BBB7" opacity="0.95" />
                <text x="0" y="-26" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="bold" fontFamily="monospace">
                  AI ASİMETRİ TARAMASI
                </text>
              </g>
            )}

            {/* Baby Body */}
            <ellipse cx="0" cy="14" rx="26" ry="22" fill="url(#growthOutfit)" />

            {/* Kicking Legs */}
            <g transform={`translate(-14, 26) rotate(${kickStiff})`}>
              <rect x="-4.5" y="0" width="9" height="20" rx="4.5" fill="url(#growthSkin)" />
              <circle cx="0" cy="20" r="6" fill="url(#growthAccent)" />
              {isSupported && <circle cx="0" cy="20" r="10" fill="none" stroke="#14BBB7" strokeWidth="1" className="animate-ping" />}
            </g>
            <g transform={`translate(14, 26) rotate(${-kickSmooth})`}>
              <rect x="-4.5" y="0" width="9" height="20" rx="4.5" fill="url(#growthSkin)" />
              <circle cx="0" cy="20" r="6" fill="url(#growthAccent)" />
            </g>

            {/* Arms */}
            <g transform="translate(-24, 6) rotate(-25)">
              <rect x="-4" y="0" width="8" height="18" rx="4" fill="url(#growthSkin)" />
            </g>
            <g transform="translate(24, 6) rotate(25)">
              <rect x="-4" y="0" width="8" height="18" rx="4" fill="url(#growthSkin)" />
            </g>

            {/* Head */}
            <circle cx="0" cy="-18" r="22" fill="url(#growthSkin)" />
            <circle cx="-7" cy="-20" r="3" fill="#082A46" />
            <circle cx="7" cy="-20" r="3" fill="#082A46" />
            {isSupported ? (
              <path d="M -5 -12 Q 0 -6 5 -12" stroke="#082A46" strokeWidth="2" fill="none" strokeLinecap="round" />
            ) : (
              <line x1="-4" y1="-10" x2="4" y2="-10" stroke="#082A46" strokeWidth="2" strokeLinecap="round" />
            )}
            <circle cx="-10" cy="-14" r="3.5" fill="#ff7965" opacity={isSupported ? 0.5 : 0.2} />
            <circle cx="10" cy="-14" r="3.5" fill="#ff7965" opacity={isSupported ? 0.5 : 0.2} />
          </g>
        )}

        {/* AŞAMA 1: 3-6 AY (Gövde & Baş Desteği / Egzersiz) */}
        {stageIndex === 1 && (
          <g transform={`translate(0, 5) rotate(${isSupported ? Math.sin(rad * 2) * 5 : -4})`}>
            {/* Supporting Hands or Therapy Guide */}
            {isSupported ? (
              <g opacity="0.9">
                <ellipse cx="0" cy="38" rx="42" ry="12" fill="#14BBB7" opacity="0.2" />
                <path d="M -48 24 Q -35 8 -24 16" stroke="#14BBB7" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 48 24 Q 35 8 24 16" stroke="#14BBB7" strokeWidth="3" fill="none" strokeLinecap="round" />
                <text x="0" y="52" textAnchor="middle" fill="#14BBB7" fontSize="7.5" fontWeight="bold">
                  UZMAN DESTEKLİ EGZERSİZ
                </text>
              </g>
            ) : (
              <g opacity="0.6">
                <text x="0" y="52" textAnchor="middle" fill="#94A3B8" fontSize="7" fontWeight="bold">
                  DESTEKSİZ / GECİKMİŞ BAŞ KONTROLÜ
                </text>
              </g>
            )}

            {/* Torso in prone / tummy position */}
            <ellipse cx="0" cy="14" rx="28" ry="18" fill="url(#growthOutfit)" />

            {/* Little Feet */}
            <circle cx="-16" cy="30" r="7" fill="url(#growthAccent)" />
            <circle cx="16" cy="30" r="7" fill="url(#growthAccent)" />

            {/* Supporting Forearms */}
            <g transform="translate(-20, 10) rotate(15)">
              <rect x="-4" y="0" width="8" height="20" rx="4" fill="url(#growthSkin)" />
            </g>
            <g transform="translate(20, 10) rotate(-15)">
              <rect x="-4" y="0" width="8" height="20" rx="4" fill="url(#growthSkin)" />
            </g>

            {/* Head lifting */}
            <g transform={`translate(0, ${isSupported ? -18 : -10})`}>
              <circle cx="0" cy="0" r="22" fill="url(#growthSkin)" />
              <circle cx="-6" cy="-2" r="3" fill="#082A46" />
              <circle cx="6" cy="-2" r="3" fill="#082A46" />
              {isSupported ? (
                <path d="M -5 6 Q 0 12 5 6" stroke="#082A46" strokeWidth="2" fill="none" strokeLinecap="round" />
              ) : (
                <path d="M -4 8 Q 0 4 4 8" stroke="#082A46" strokeWidth="2" fill="none" strokeLinecap="round" />
              )}
              {isSupported && (
                <g transform="translate(0, -32)">
                  <polygon points="0,-6 2,-1 7,-1 3,2 5,7 0,4 -5,7 -3,2 -7,-1 -2,-1" fill="#FF7965" />
                </g>
              )}
            </g>
          </g>
        )}

        {/* AŞAMA 2: 6-12 AY (Desteksiz Oturma & Güçlü Denge) */}
        {stageIndex === 2 && (
          <g transform={`translate(0, ${isSupported ? -bounce * 0.4 : 5})`}>
            {/* Sitting Legs */}
            <ellipse cx="-20" cy="36" rx="16" ry="10" fill="url(#growthOutfit)" />
            <ellipse cx="20" cy="36" rx="16" ry="10" fill="url(#growthOutfit)" />
            <circle cx="-32" cy="38" r="7" fill="url(#growthAccent)" />
            <circle cx="32" cy="38" r="7" fill="url(#growthAccent)" />

            {/* Sitting Upright Torso */}
            <ellipse cx="0" cy="12" rx="25" ry="24" fill="url(#growthOutfit)" />

            {/* Arms Playing & Clapping */}
            {isSupported ? (
              <g>
                <g transform={`translate(${-12 + Math.sin(rad * 5) * 5}, 8) rotate(20)`}>
                  <rect x="-4" y="0" width="8" height="18" rx="4" fill="url(#growthSkin)" />
                </g>
                <g transform={`translate(${12 - Math.sin(rad * 5) * 5}, 8) rotate(-20)`}>
                  <rect x="-4" y="0" width="8" height="18" rx="4" fill="url(#growthSkin)" />
                </g>
                <circle cx="0" cy="10" r="3" fill="#14BBB7" className="animate-ping" />
              </g>
            ) : (
              <g>
                <g transform="translate(-18, 12) rotate(40)">
                  <rect x="-4" y="0" width="8" height="22" rx="4" fill="url(#growthSkin)" />
                </g>
                <g transform="translate(18, 12) rotate(-40)">
                  <rect x="-4" y="0" width="8" height="22" rx="4" fill="url(#growthSkin)" />
                </g>
              </g>
            )}

            {/* Head */}
            <g transform={`translate(0, ${isSupported ? -24 : -18})`}>
              <circle cx="0" cy="0" r="22" fill="url(#growthSkin)" />
              <circle cx="-7" cy="-2" r="3" fill="#082A46" />
              <circle cx="7" cy="-2" r="3" fill="#082A46" />
              {isSupported ? (
                <path d="M -6 5 Q 0 14 6 5 Z" fill="#082A46" />
              ) : (
                <ellipse cx="0" cy="6" rx="3" ry="2" fill="#082A46" />
              )}
              <circle cx="-10" cy="3" r="3.5" fill="#ff7965" opacity={isSupported ? 0.5 : 0.2} />
              <circle cx="10" cy="3" r="3.5" fill="#ff7965" opacity={isSupported ? 0.5 : 0.2} />
            </g>
          </g>
        )}

        {/* AŞAMA 3: 12-24 AY (Bağımsız Adımlar & Sağlıklı Büyüme!) */}
        {stageIndex === 3 && (
          <g
            transform={
              isSupported
                ? `translate(0, ${-Math.abs(Math.sin(rad * 4)) * 10}) rotate(${Math.sin(rad * 4) * 4})`
                : 'translate(0, 10)'
            }
          >
            {/* Walking Legs */}
            {isSupported ? (
              <g>
                <g transform={`translate(-10, 26) rotate(${Math.sin(rad * 5) * 30})`}>
                  <rect x="-5" y="0" width="10" height="28" rx="5" fill="url(#growthOutfit)" />
                  <rect x="-6" y="22" width="14" height="7" rx="3.5" fill="url(#growthAccent)" />
                </g>
                <g transform={`translate(10, 26) rotate(${-Math.sin(rad * 5) * 30})`}>
                  <rect x="-5" y="0" width="10" height="28" rx="5" fill="url(#growthOutfit)" />
                  <rect x="-6" y="22" width="14" height="7" rx="3.5" fill="url(#growthAccent)" />
                </g>
              </g>
            ) : (
              <g>
                {/* Dependent stance with walker line */}
                <rect x="-10" y="24" width="8" height="24" rx="4" fill="#64748B" />
                <rect x="2" y="24" width="8" height="24" rx="4" fill="#64748B" />
                <line x1="-28" y1="10" x2="-28" y2="48" stroke="#94A3B8" strokeWidth="3" strokeDasharray="3 2" />
                <line x1="28" y1="10" x2="28" y2="48" stroke="#94A3B8" strokeWidth="3" strokeDasharray="3 2" />
                <line x1="-32" y1="10" x2="32" y2="10" stroke="#94A3B8" strokeWidth="2.5" />
              </g>
            )}

            {/* Standing Upright Body */}
            <ellipse cx="0" cy="8" rx="23" ry="25" fill="url(#growthOutfit)" />

            {/* Arms */}
            {isSupported ? (
              <g>
                <g transform="translate(-18, -2) rotate(-35)">
                  <rect x="-4.5" y="0" width="9" height="22" rx="4.5" fill="url(#growthSkin)" />
                </g>
                <g transform="translate(18, -2) rotate(35)">
                  <rect x="-4.5" y="0" width="9" height="22" rx="4.5" fill="url(#growthSkin)" />
                </g>
              </g>
            ) : (
              <g>
                <rect x="-24" y="6" width="16" height="7" rx="3.5" fill="url(#growthSkin)" />
                <rect x="8" y="6" width="16" height="7" rx="3.5" fill="url(#growthSkin)" />
              </g>
            )}

            {/* Cheerful Head */}
            <g transform="translate(0, -26)">
              <circle cx="0" cy="0" r="23" fill="url(#growthSkin)" />
              <circle cx="-7" cy="-2" r="3.2" fill="#082A46" />
              <circle cx="7" cy="-2" r="3.2" fill="#082A46" />
              {isSupported ? (
                <path d="M -6 4 Q 0 15 6 4 Z" fill="#082A46" />
              ) : (
                <line x1="-4" y1="5" x2="4" y2="5" stroke="#082A46" strokeWidth="2" strokeLinecap="round" />
              )}
              <circle cx="-10" cy="4" r="4" fill="#ff7965" opacity={isSupported ? 0.5 : 0.2} />
              <circle cx="10" cy="4" r="4" fill="#ff7965" opacity={isSupported ? 0.5 : 0.2} />
            </g>

            {/* Victory Confetti & Sparkles */}
            {isSupported && (
              <g>
                <polygon points="38,-35 41,-28 48,-26 42,-22 44,-15 38,-19 32,-15 34,-22 28,-26 35,-28" fill="#FF7965" className="animate-spin" style={{ animationDuration: '5s' }} />
                <polygon points="-42,-25 -39,-18 -32,-16 -38,-12 -36,-5 -42,-9 -48,-5 -46,-12 -52,-16 -45,-18" fill="#14BBB7" className="animate-spin" style={{ animationDuration: '6s' }} />
                <circle cx="-25" cy="55" r="4" fill="#14BBB7" opacity="0.6" />
                <circle cx="25" cy="52" r="4" fill="#14BBB7" opacity="0.6" />
              </g>
            )}
          </g>
        )}
      </svg>
    </div>
  );
}

export default function InclusiveAccess() {
  const [activeStage, setActiveStage] = useState(0);
  const [mode, setMode] = useState<'supported' | 'unsupported'>('supported');
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % journeyStages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentStage = journeyStages[activeStage];
  const isSupported = mode === 'supported';
  const stageData = isSupported ? currentStage.supported : currentStage.unsupported;

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-navy via-[#07253e] to-navy text-white relative overflow-hidden" id="kapsayici-erisim">
      {/* Background radial glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-turquoise/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-turquoise bg-turquoise/15 border border-turquoise/30 px-4 py-1.5 rounded-full mb-4">
            <HeartHandshake size={14} className="text-turquoise" />
            <span>Kapsayıcı Sağlık & Erken Müdahale Modeli</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Gelişimsel risk taşıyan her bebek, <br className="hidden sm:inline" />
            <span className="text-turquoise">zamanında destekle özgürce yürüyebilir.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed font-normal">
            Serebral palsi riski, prematüre doğum veya motor gecikmelerde ilk 24 ayın nöroplastisitesi eşsizdir. 
            Aşağıdaki canlı simülasyonla erken müdahalenin bir çocuğun hayatını nasıl dönüştürdüğünü adım adım keşfedin.
          </p>
        </div>

        {/* Dual Mode Switcher Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto mb-8 bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
          <button
            onClick={() => setMode('supported')}
            className={`w-full sm:w-1/2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              mode === 'supported'
                ? 'bg-gradient-to-r from-turquoise to-emerald-500 text-navy shadow-lg shadow-turquoise/25 scale-[1.02]'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <ShieldCheck size={16} />
            <span>Dijital Büyükanne Erken Müdahalesi</span>
            <span className="text-[10px] bg-navy/20 px-1.5 py-0.5 rounded font-mono font-bold">Önerilen</span>
          </button>

          <button
            onClick={() => setMode('unsupported')}
            className={`w-full sm:w-1/2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
              mode === 'unsupported'
                ? 'bg-slate-700 text-white shadow-lg shadow-black/30 border border-slate-600 scale-[1.02]'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <AlertCircle size={16} className="text-amber-400" />
            <span>Geleneksel / Desteksiz Süreç</span>
            <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded font-mono">Gecikmeli</span>
          </button>
        </div>

        {/* 4-Stage Stepper Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 max-w-4xl mx-auto mb-8">
          {journeyStages.map((stage, idx) => (
            <button
              key={stage.age}
              onClick={() => setActiveStage(idx)}
              className={`p-3.5 rounded-2xl text-left transition-all border ${
                activeStage === idx
                  ? isSupported
                    ? 'bg-white/15 border-turquoise shadow-md shadow-turquoise/20'
                    : 'bg-slate-800 border-slate-500 shadow-md'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-turquoise">{stage.age}</span>
                {activeStage === idx && <span className="w-2 h-2 rounded-full bg-turquoise animate-ping" />}
              </div>
              <p className="text-xs sm:text-sm font-bold text-white truncate">{stage.title}</p>
            </button>
          ))}
        </div>

        {/* Main Simulation Theater Card */}
        <div
          className={`rounded-3xl p-6 sm:p-9 border transition-all duration-500 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
            isSupported
              ? 'bg-white/[0.07] border-turquoise/30 shadow-2xl shadow-turquoise/10'
              : 'bg-slate-900/90 border-slate-700 shadow-2xl'
          }`}
        >
          {/* Left Column: Stage Story & Evidence (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full border ${
                  isSupported
                    ? 'bg-turquoise/20 text-turquoise border-turquoise/40'
                    : 'bg-slate-700 text-slate-300 border-slate-600'
                }`}
              >
                {currentStage.badge}
              </span>
              <span className="text-xs font-mono text-white/60 bg-white/10 px-2.5 py-1 rounded-full">
                {currentStage.age}
              </span>
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full ml-auto ${
                  isSupported ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                }`}
              >
                {stageData.status}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              {currentStage.title}
            </h3>

            <p className="text-sm text-white/75 leading-relaxed">
              {currentStage.subtitle}
            </p>

            {/* Dynamic Evidence Bullet Points */}
            <div
              className={`p-4 rounded-2xl border flex flex-col gap-2.5 ${
                isSupported
                  ? 'bg-turquoise/10 border-turquoise/25'
                  : 'bg-slate-800/80 border-slate-700'
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-white/90">
                {stageData.heading}
              </p>
              {stageData.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                  {isSupported ? (
                    <CheckCircle2 size={16} className="text-turquoise shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  )}
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Impact Metric Bar */}
            <div className="flex items-center gap-4 pt-2">
              <div
                className={`px-4 py-2.5 rounded-2xl border flex items-center gap-3 ${
                  isSupported ? 'bg-white/10 border-turquoise/30' : 'bg-slate-800 border-slate-700'
                }`}
              >
                <div className="text-2xl font-black text-turquoise">{stageData.statValue}</div>
                <div className="text-[11px] text-white/70 font-medium leading-tight max-w-[180px]">
                  {stageData.statLabel}
                </div>
              </div>

              {/* Play / Next Controls */}
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`p-2.5 rounded-xl border transition-all text-xs font-bold flex items-center gap-1.5 ${
                    isPlaying
                      ? 'bg-turquoise text-navy border-turquoise'
                      : 'bg-white/10 text-white hover:bg-white/20 border-white/20'
                  }`}
                  title={isPlaying ? 'Durdur' : 'Otomatik Oynat'}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  <span className="hidden sm:inline">{isPlaying ? 'Durdur' : 'Otomatik Simülasyon'}</span>
                </button>

                <button
                  onClick={() => setActiveStage((prev) => (prev + 1) % journeyStages.length)}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all"
                  title="Sonraki Aşama"
                >
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic SVG Canvas (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 bg-black/20 rounded-3xl border border-white/10 relative">
            <div className="flex items-center justify-between w-full mb-2 px-2 text-[10px] font-mono">
              <span className="text-turquoise font-bold flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isSupported ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`} />
                {isSupported ? 'ERKEN MÜDAHALE SİMÜLATÖRÜ' : 'GELENEKSEL İZLEM SİMÜLATÖRÜ'}
              </span>
              <span className="text-white/40">{currentStage.age}</span>
            </div>

            {/* Child SVG Character */}
            <ChildGrowthVisual stageIndex={activeStage} isSupported={isSupported} />

            {/* Bottom Caption Pill */}
            <div className="mt-3 text-center bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15">
              <p className="text-xs font-bold text-white">
                {isSupported ? 'Sağlıklı & Güvenli Motor İlerleme' : 'Desteklenmeyen Gelişimsel Kısıt'}
              </p>
              <p className="text-[10px] text-turquoise">BabySensAI Nörogelişim İzlemi</p>
            </div>
          </div>
        </div>

        {/* 4 Inclusive Target Group Cards */}
        <div className="mt-14">
          <div className="text-center mb-6">
            <p className="text-xs font-bold text-turquoise tracking-widest uppercase">Kapsayıcı Hizmet Alanlarımız</p>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Kimler İçin Hayati Bir Değer Taşır?</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-card-dark rounded-2xl p-5 border border-turquoise/20 hover:border-turquoise/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-turquoise/20 text-turquoise flex items-center justify-center mb-3 font-bold">
                <Activity size={20} />
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">Prematüre Doğan Bebekler</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Erken doğan bebeklerde nörolojik ve motor takip hayati önem taşır; evde dijital video izlemi süreci hızlandırır.
              </p>
            </div>

            <div className="glass-card-dark rounded-2xl p-5 border border-coral/20 hover:border-coral/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-coral/20 text-coral flex items-center justify-center mb-3 font-bold">
                <Brain size={20} />
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">Serebral Palsi & Motor Risk</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                General Movements (GMs) benzeri spontan hareket taramaları, kalıcı engellilik riskini erken aşamada azaltır.
              </p>
            </div>

            <div className="glass-card-dark rounded-2xl p-5 border border-white/15 hover:border-white/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-white/15 text-white flex items-center justify-center mb-3 font-bold">
                <TrendingUp size={20} />
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">Gelişimsel Takip İhtiyacı</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Oturma, dönme veya yürümede aksama yaşayan bebekler için düzenli ve yapılandırılmış egzersiz rehberliği.
              </p>
            </div>

            <div className="glass-card-dark rounded-2xl p-5 border border-turquoise/20 hover:border-turquoise/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-turquoise/20 text-turquoise flex items-center justify-center mb-3 font-bold">
                <HeartHandshake size={20} />
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">Eşit Sağlık Erişimi</h4>
              <p className="text-xs text-white/60 leading-relaxed">
                Sosyoekonomik imkânı kısıtlı ailelerin uzman fizyoterapist ve hekim desteğine teknolojiyle ücretsiz erişebilmesi.
              </p>
            </div>
          </div>
        </div>

        {/* Responsible AI Disclaimer */}
        <div className="mt-10 p-4 rounded-2xl bg-white/5 border border-white/10 text-center max-w-3xl mx-auto">
          <p className="text-[11px] text-white/60 leading-relaxed">
            <span className="font-bold text-turquoise">Bilgilendirme ve Etik İlke: </span>
            DijitalBüyükanne ve BabySensAI klinik kesin tanı koymaz. Amacımız, 0–24 ay nöroplastisite penceresinde ailelerin 
            erken farkındalık kazanmasını ve ihtiyaç duyulduğunda en doğru çocuk hekimlerine ve fizyoterapistlere zaman kaybetmeden ulaşmasını sağlamaktır.
          </p>
        </div>

      </div>
    </section>
  );
}
