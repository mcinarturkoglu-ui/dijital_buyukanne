'use client';

import { useState, useEffect } from 'react';
import {
  Users,
  Activity,
  ShieldCheck,
  Award,
  Sparkles,
  Heart,
  TrendingUp,
  Clock,
  ArrowRight,
} from 'lucide-react';

const liveActivities = [
  {
    city: 'Ankara',
    text: 'Bir anne 3 aylık bebeği için nörolojik ve kas hastalıkları hareket analizi başlattı.',
    time: 'Az önce',
    icon: '🎥',
  },
  {
    city: 'İstanbul',
    text: 'Yenidoğan bebek bezi renk taraması tamamlandı: Değerler güvenli aralıkta.',
    time: '2 dk önce',
    icon: '🩺',
  },
  {
    city: 'İzmir',
    text: 'Gece uyanması yaşayan bir anne 7/24 asistanla sakinleşme rutini oluşturdu.',
    time: '4 dk önce',
    icon: '🌙',
  },
  {
    city: 'Bursa',
    text: 'İlçe belediyesi 500 yeni anneye ücretsiz aktivasyon kartı ulaştırdı.',
    time: '6 dk önce',
    icon: '🏛️',
  },
  {
    city: 'Antalya',
    text: 'Pediatrik fizyoterapi danışmanı onaylı ev egzersiz programı iletildi.',
    time: '8 dk önce',
    icon: '🌱',
  },
];

export default function EcosystemPulseTicker() {
  const [activityIdx, setActivityIdx] = useState(0);
  const [familiesCount, setFamiliesCount] = useState(12250);
  const [scansCount, setScansCount] = useState(48120);

  // Rotate activities
  useEffect(() => {
    const timer = setInterval(() => {
      setActivityIdx((prev) => (prev + 1) % liveActivities.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Subtle live counter drift
  useEffect(() => {
    const interval = setInterval(() => {
      setFamiliesCount((prev) => prev + Math.floor(Math.random() * 2) + 1);
      setScansCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentActivity = liveActivities[activityIdx];

  return (
    <div className="w-full max-w-7xl 2xl:max-w-[1360px] mx-auto mt-2 lg:mt-3 shrink-0">
      <div className="bg-white/95 rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-sky-100 shadow-xl shadow-sky-500/5 backdrop-blur-xl flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
        
        {/* Sol Taraf: Canlı Nabız Göstergesi & Canlı Akış Bildirimi */}
        <div className="flex items-center gap-3.5 min-w-0">
          {/* Pulsing Dot */}
          <div className="relative flex items-center justify-center shrink-0">
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-ping absolute" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 relative" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md">
                CANLI EKOSİSTEM NABZI
              </span>
              <span className="text-[11px] text-slate-400 hidden sm:inline">•</span>
              <span className="text-[11px] font-bold text-slate-700 hidden sm:inline">
                {currentActivity.city}
              </span>
            </div>
            
            {/* Animated activity transition */}
            <p className="text-xs text-slate-600 truncate mt-0.5 flex items-center gap-1.5 font-medium">
              <span>{currentActivity.icon}</span>
              <span className="truncate">{currentActivity.text}</span>
              <span className="text-[10px] text-slate-400 font-mono shrink-0">({currentActivity.time})</span>
            </p>
          </div>
        </div>

        {/* Sağ Taraf: 4 Canlı Metrik Sayacı */}
        <div className="flex items-center gap-4 sm:gap-7 shrink-0 border-t lg:border-t-0 lg:border-l border-slate-100 pt-2 lg:pt-0 lg:pl-6 overflow-x-auto">
          
          <div className="text-left shrink-0">
            <div className="text-base sm:text-lg font-black text-[#0B1E3B] font-mono leading-none">
              {familiesCount.toLocaleString('tr-TR')}+
            </div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1 block">
              Kayıtlı Aile
            </span>
          </div>

          <div className="w-px h-7 bg-slate-200 shrink-0" />

          <div className="text-left shrink-0">
            <div className="text-base sm:text-lg font-black text-[#0284C7] font-mono leading-none">
              {scansCount.toLocaleString('tr-TR')}+
            </div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1 block">
              Tamamlanan Tarama
            </span>
          </div>

          <div className="w-px h-7 bg-slate-200 shrink-0" />

          <div className="text-left shrink-0">
            <div className="text-base sm:text-lg font-black text-[#FF5A43] font-mono leading-none">
              7/24
            </div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1 block">
              Uzman Sevk Köprüsü
            </span>
          </div>

          <div className="w-px h-7 bg-slate-200 shrink-0 hidden sm:block" />

          <div className="text-left shrink-0 hidden sm:block">
            <div className="text-base sm:text-lg font-black text-emerald-600 font-mono leading-none">
              %98,4
            </div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1 block">
              Aile Memnuniyeti
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
