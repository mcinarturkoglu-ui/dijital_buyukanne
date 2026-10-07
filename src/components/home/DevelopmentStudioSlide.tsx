'use client';

import React, { useState } from 'react';
import { Calendar, GitCompare } from 'lucide-react';
import TimelineSection from './TimelineSection';
import ProblemSolutionCompare from './ProblemSolutionCompare';

export default function DevelopmentStudioSlide() {
  const [activeTab, setActiveTab] = useState<'timeline' | 'compare'>('timeline');

  return (
    <div className="w-full h-full flex flex-col justify-between py-2">
      {/* Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-3 shrink-0">
        <button
          onClick={() => setActiveTab('timeline')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeTab === 'timeline'
              ? 'bg-[#0284C7] text-white shadow-md shadow-sky-600/20'
              : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>1. 0–24 Ay Gelişim Simülatörü</span>
        </button>

        <button
          onClick={() => setActiveTab('compare')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeTab === 'compare'
              ? 'bg-[#0B1E3B] text-white shadow-md shadow-slate-900/20'
              : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
          }`}
        >
          <GitCompare className="w-4 h-4 text-sky-400" />
          <span>2. Neden DijitalBüyükanne? (Karşılaştırmalı Analiz)</span>
        </button>
      </div>

      {/* Content Chamber */}
      <div className="flex-1 w-full overflow-y-auto lg:overflow-hidden rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs p-1 sm:p-3">
        {activeTab === 'timeline' ? <TimelineSection /> : <ProblemSolutionCompare />}
      </div>
    </div>
  );
}
