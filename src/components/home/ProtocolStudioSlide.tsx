'use client';

import React, { useState } from 'react';
import { Video, Sparkles, Activity } from 'lucide-react';
import MotionAnalysis from './MotionAnalysis';
import SkinAnalysis from './SkinAnalysis';
import StoolAnalysis from './StoolAnalysis';

export default function ProtocolStudioSlide() {
  const [activeTab, setActiveTab] = useState<'motion' | 'skin' | 'stool'>('motion');

  const tabs = [
    {
      id: 'motion' as const,
      name: '1. AI Hareket Analizi',
      standard: 'Prechtl GMs Standardı',
      icon: Video,
      color: 'text-sky-600',
      activeBg: 'bg-sky-600 text-white shadow-md shadow-sky-500/20',
      inactiveBg: 'bg-white hover:bg-sky-50 text-slate-700 border border-slate-200',
    },
    {
      id: 'skin' as const,
      name: '2. AI Cilt Analizi',
      standard: 'Derma-41 Parametresi',
      icon: Sparkles,
      color: 'text-teal-600',
      activeBg: 'bg-teal-600 text-white shadow-md shadow-teal-500/20',
      inactiveBg: 'bg-white hover:bg-teal-50 text-slate-700 border border-slate-200',
    },
    {
      id: 'stool' as const,
      name: '3. AI Bez & Dışkı Analizi',
      standard: 'DSÖ & SB Renk Skalası',
      icon: Activity,
      color: 'text-rose-600',
      activeBg: 'bg-rose-600 text-white shadow-md shadow-rose-500/20',
      inactiveBg: 'bg-white hover:bg-rose-50 text-slate-700 border border-slate-200',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between py-2">
      {/* Protocol Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-3 shrink-0">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mr-2 hidden sm:inline">
          Protokol Seçin:
        </span>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                isActive ? tab.activeBg : tab.inactiveBg
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{tab.name}</span>
              <span className={`text-[10px] font-normal px-2 py-0.5 rounded-md ${
                isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                {tab.standard}
              </span>
            </button>
          );
        })}
      </div>

      {/* Protocol View Chamber */}
      <div className="flex-1 w-full overflow-y-auto lg:overflow-hidden rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs p-1 sm:p-3">
        {activeTab === 'motion' && <MotionAnalysis />}
        {activeTab === 'skin' && <SkinAnalysis />}
        {activeTab === 'stool' && <StoolAnalysis />}
      </div>
    </div>
  );
}
