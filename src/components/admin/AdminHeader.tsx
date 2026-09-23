'use client';

import { Bell, Globe, RefreshCw } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle?: string;
  onRefresh?: () => void;
  isRefreshing?: boolean;
}

export default function AdminHeader({ title, subtitle, onRefresh, isRefreshing }: HeaderProps) {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 z-20">
      <div>
        <h1 className="text-xl font-bold text-slate-800 leading-tight">{title}</h1>
        {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-3">
        {onRefresh && (
          <button
            onClick={onRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 text-xs font-medium hover:bg-slate-50 transition-colors disabled:opacity-50"
            title="Verileri Yenile"
          >
            <RefreshCw size={14} className={isRefreshing ? 'animate-spin text-sky-500' : ''} />
            <span>Yenile</span>
          </button>
        )}

        <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-slate-700">Yönetici Modu</span>
        </div>
      </div>
    </header>
  );
}
