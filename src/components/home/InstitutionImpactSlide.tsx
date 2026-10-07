'use client';

import React, { useState } from 'react';
import { Building2, Calculator, Rocket } from 'lucide-react';
import InstitutionsHero from './InstitutionsHero';
import SocialImpactCalculator from './SocialImpactCalculator';
import FinalCTA from './FinalCTA';

export default function InstitutionImpactSlide() {
  const [activeTab, setActiveTab] = useState<'calc' | 'institutions' | 'cta'>('calc');

  return (
    <div className="w-full h-full flex flex-col justify-between py-2">
      {/* Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-3 shrink-0">
        <button
          onClick={() => setActiveTab('calc')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeTab === 'calc'
              ? 'bg-sky-600 text-white shadow-md shadow-sky-500/20'
              : 'bg-white hover:bg-sky-50 text-slate-700 border border-slate-200'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>1. Sosyal Etki & Tasarruf Simülasyonu</span>
        </button>

        <button
          onClick={() => setActiveTab('institutions')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeTab === 'institutions'
              ? 'bg-[#0B1E3B] text-white shadow-md shadow-slate-900/20'
              : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
          }`}
        >
          <Building2 className="w-4 h-4 text-sky-400" />
          <span>2. Kurumsal & Belediye İş Birliği</span>
        </button>

        <button
          onClick={() => setActiveTab('cta')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeTab === 'cta'
              ? 'bg-rose-600 text-white shadow-md shadow-rose-500/20'
              : 'bg-white hover:bg-rose-50 text-slate-700 border border-slate-200'
          }`}
        >
          <Rocket className="w-4 h-4" />
          <span>3. Büyük Katılım Çağrısı</span>
        </button>
      </div>

      {/* Content Chamber */}
      <div className="flex-1 w-full overflow-y-auto lg:overflow-hidden rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs p-1 sm:p-3">
        {activeTab === 'calc' && <SocialImpactCalculator />}
        {activeTab === 'institutions' && <InstitutionsHero />}
        {activeTab === 'cta' && <FinalCTA />}
      </div>
    </div>
  );
}
