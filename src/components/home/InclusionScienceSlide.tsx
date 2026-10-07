'use client';

import React, { useState } from 'react';
import { HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import InclusiveAccess from './InclusiveAccess';
import ScientificBoard from './ScientificBoard';
import CaseStudies from './CaseStudies';

interface InclusionScienceSlideProps {
  scientificBoardData: any;
  caseStudiesData: any;
}

export default function InclusionScienceSlide({
  scientificBoardData,
  caseStudiesData,
}: InclusionScienceSlideProps) {
  const [activeTab, setActiveTab] = useState<'access' | 'board' | 'cases'>('access');

  return (
    <div className="w-full h-full flex flex-col justify-between py-2">
      {/* Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-3 shrink-0">
        <button
          onClick={() => setActiveTab('access')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeTab === 'access'
              ? 'bg-rose-600 text-white shadow-md shadow-rose-500/20'
              : 'bg-white hover:bg-rose-50 text-slate-700 border border-slate-200'
          }`}
        >
          <HeartHandshake className="w-4 h-4" />
          <span>1. Kapsayıcı Sağlık & Erken Müdahale</span>
        </button>

        <button
          onClick={() => setActiveTab('board')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeTab === 'board'
              ? 'bg-[#0B1E3B] text-white shadow-md shadow-slate-900/20'
              : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-sky-400" />
          <span>2. Bilimsel Güvence & Danışma Kurulu</span>
        </button>

        <button
          onClick={() => setActiveTab('cases')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeTab === 'cases'
              ? 'bg-teal-600 text-white shadow-md shadow-teal-500/20'
              : 'bg-white hover:bg-teal-50 text-slate-700 border border-slate-200'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>3. Doğrulanmış Etki Hikayeleri</span>
        </button>
      </div>

      {/* Content Chamber */}
      <div className="flex-1 w-full overflow-y-auto lg:overflow-hidden rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs p-1 sm:p-3">
        {activeTab === 'access' && <InclusiveAccess />}
        {activeTab === 'board' && <ScientificBoard cmsData={scientificBoardData} />}
        {activeTab === 'cases' && <CaseStudies cmsData={caseStudiesData} />}
      </div>
    </div>
  );
}
