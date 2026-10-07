'use client';

import React from 'react';
import { ArrowDown, Cpu, ChevronDown } from 'lucide-react';

interface StoryFlowConnectorProps {
  fromStep: string;
  toStep: string;
  flowText: string;
  theme?: 'light' | 'dark';
  accent?: 'sky' | 'teal' | 'coral' | 'indigo';
}

export default function StoryFlowConnector({
  fromStep,
  toStep,
  flowText,
  theme = 'light',
  accent = 'sky',
}: StoryFlowConnectorProps) {
  const isDark = theme === 'dark';

  const accentColors = {
    sky: {
      line: 'from-sky-300 via-sky-500 to-sky-300',
      badgeBorder: 'border-sky-200 bg-sky-50/90 text-sky-800',
      node: 'bg-sky-500 shadow-sky-400/50',
      arrow: 'text-sky-600',
    },
    teal: {
      line: 'from-teal-300 via-teal-500 to-teal-300',
      badgeBorder: 'border-teal-200 bg-teal-50/90 text-teal-800',
      node: 'bg-teal-500 shadow-teal-400/50',
      arrow: 'text-teal-600',
    },
    coral: {
      line: 'from-rose-300 via-rose-500 to-rose-300',
      badgeBorder: 'border-rose-200 bg-rose-50/90 text-rose-800',
      node: 'bg-rose-500 shadow-rose-400/50',
      arrow: 'text-rose-600',
    },
    indigo: {
      line: 'from-indigo-300 via-indigo-500 to-indigo-300',
      badgeBorder: 'border-indigo-200 bg-indigo-50/90 text-indigo-800',
      node: 'bg-indigo-500 shadow-indigo-400/50',
      arrow: 'text-indigo-600',
    },
  }[accent];

  return (
    <div className={`relative py-6 md:py-8 flex flex-col items-center select-none overflow-hidden ${
      isDark ? 'bg-[#0B1E3B]' : 'bg-gradient-to-b from-white via-slate-50 to-white'
    }`}>
      {/* Vertical pipeline spine line */}
      <div className="absolute inset-y-0 w-0.5 bg-gradient-to-b from-slate-200 via-sky-400 to-slate-200 pointer-events-none" />

      {/* Central narrative connector badge */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 w-full flex flex-col items-center text-center">
        {/* Step Link Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-white border border-slate-200 shadow-xs mb-2">
          <span className="text-slate-500">{fromStep}</span>
          <span className="text-sky-400">───►</span>
          <span className="text-[#0B1E3B]">{toStep}</span>
        </div>

        {/* Narrative Flow Description */}
        <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl border text-xs md:text-sm font-medium shadow-sm backdrop-blur-md transition-all ${
          isDark 
            ? 'bg-slate-900/90 border-slate-700 text-slate-200' 
            : accentColors.badgeBorder
        }`}>
          <Cpu className="w-4 h-4 shrink-0 text-sky-500 animate-pulse" />
          <span className="leading-snug">{flowText}</span>
        </div>

        {/* Interconnection Node & Animated Arrow */}
        <div className="mt-2.5 flex flex-col items-center">
          <div className={`w-2.5 h-2.5 rounded-full ${accentColors.node} ring-4 ring-white shadow-sm`} />
          <ChevronDown className={`w-4 h-4 -mt-0.5 ${accentColors.arrow} animate-bounce`} />
        </div>
      </div>
    </div>
  );
}
