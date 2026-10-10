'use client';

import { useState, useEffect } from 'react';
import { Users, Activity, Clock, ShieldCheck, Baby } from 'lucide-react';

export default function EcosystemPulseTicker() {
  const [familiesCount, setFamiliesCount] = useState(12250);
  const [babiesCount, setBabiesCount] = useState(18400);
  const [scansCount, setScansCount] = useState(48120);

  // Hafif canlı sayaç hissi
  useEffect(() => {
    const interval = setInterval(() => {
      setFamiliesCount((prev) => prev + Math.floor(Math.random() * 2) + 1);
      setBabiesCount((prev) => prev + Math.floor(Math.random() * 2) + 1);
      setScansCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-7xl 2xl:max-w-[1360px] mx-auto mt-2 lg:mt-3 shrink-0">
      <div className="bg-white/95 rounded-2xl sm:rounded-3xl p-3 sm:py-3.5 sm:px-6 border border-sky-100 shadow-xl shadow-sky-500/5 backdrop-blur-xl flex flex-wrap items-center justify-around gap-4 sm:gap-6">
        
        {/* Metrik 1: Takip Edilen Bebek */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] shrink-0">
            <Baby size={18} />
          </div>
          <div className="text-left">
            <div className="text-base sm:text-lg font-black text-[#0B1E3B] font-mono leading-none">
              {babiesCount.toLocaleString('tr-TR')}+
            </div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1 block">
              Takip Edilen Bebek
            </span>
          </div>
        </div>

        <div className="w-px h-7 bg-slate-200 hidden sm:block" />

        {/* Metrik 2: Kayıtlı Aile */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
            <Users size={18} />
          </div>
          <div className="text-left">
            <div className="text-base sm:text-lg font-black text-[#0B1E3B] font-mono leading-none">
              {familiesCount.toLocaleString('tr-TR')}+
            </div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1 block">
              Kayıtlı Aile
            </span>
          </div>
        </div>

        <div className="w-px h-7 bg-slate-200 hidden md:block" />

        {/* Metrik 3: Tamamlanan Tarama */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0">
            <Activity size={18} />
          </div>
          <div className="text-left">
            <div className="text-base sm:text-lg font-black text-[#0284C7] font-mono leading-none">
              {scansCount.toLocaleString('tr-TR')}+
            </div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1 block">
              Tamamlanan Tarama
            </span>
          </div>
        </div>

        <div className="w-px h-7 bg-slate-200 hidden lg:block" />

        {/* Metrik 4: Uzman Sevk Köprüsü */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-[#FF5A43] shrink-0">
            <Clock size={18} />
          </div>
          <div className="text-left">
            <div className="text-base sm:text-lg font-black text-[#FF5A43] font-mono leading-none">
              7/24
            </div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1 block">
              Uzman Sevk Köprüsü
            </span>
          </div>
        </div>

        <div className="w-px h-7 bg-slate-200 hidden sm:block" />

        {/* Metrik 5: Aile Memnuniyeti */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
            <ShieldCheck size={18} />
          </div>
          <div className="text-left">
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
