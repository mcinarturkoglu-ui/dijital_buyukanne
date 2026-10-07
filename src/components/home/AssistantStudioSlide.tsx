'use client';

import React, { useState } from 'react';
import { Bot, ShieldCheck } from 'lucide-react';
import DigitalAssistant from './DigitalAssistant';
import HumanAI from './HumanAI';

export default function AssistantStudioSlide() {
  const [activeTab, setActiveTab] = useState<'assistant' | 'radar'>('assistant');

  return (
    <div className="w-full h-full flex flex-col justify-between py-2">
      {/* Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-3 shrink-0">
        <button
          onClick={() => setActiveTab('assistant')}
          className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeTab === 'assistant'
              ? 'bg-[#0B1E3B] text-white shadow-md shadow-slate-900/20'
              : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
          }`}
        >
          <Bot className="w-4 h-4 text-sky-400" />
          <span>1. 7/24 Dijital Aile Asistanı (Canlı Demo)</span>
        </button>

        <button
          onClick={() => setActiveTab('radar')}
          className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeTab === 'radar'
              ? 'bg-[#0284C7] text-white shadow-md shadow-sky-600/20'
              : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-white" />
          <span>2. İnsan + AI Denge Radarı (Klinik Güvence)</span>
        </button>
      </div>

      {/* Content Chamber */}
      <div className="flex-1 w-full overflow-y-auto lg:overflow-hidden rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs p-1 sm:p-3">
        {activeTab === 'assistant' ? <DigitalAssistant /> : <HumanAI />}
      </div>
    </div>
  );
}
