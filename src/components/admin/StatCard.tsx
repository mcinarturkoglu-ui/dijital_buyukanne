import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  color?: 'sky' | 'coral' | 'emerald' | 'purple' | 'navy';
}

const colorMap = {
  sky: {
    bg: 'bg-sky-50',
    border: 'border-sky-100',
    iconBg: 'bg-sky-500/10',
    iconText: 'text-sky-600',
  },
  coral: {
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    iconBg: 'bg-rose-500/10',
    iconText: 'text-rose-600',
  },
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    iconBg: 'bg-emerald-500/10',
    iconText: 'text-emerald-600',
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    iconBg: 'bg-purple-500/10',
    iconText: 'text-purple-600',
  },
  navy: {
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    iconBg: 'bg-slate-800/10',
    iconText: 'text-slate-800',
  },
};

export default function StatCard({ title, value, subtitle, icon: Icon, color = 'sky' }: StatCardProps) {
  const styles = colorMap[color] || colorMap.sky;

  return (
    <div className={`p-5 rounded-2xl border ${styles.border} ${styles.bg} transition-all duration-200 hover:shadow-md`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{title}</span>
        <div className={`w-10 h-10 rounded-xl ${styles.iconBg} ${styles.iconText} flex items-center justify-center`}>
          <Icon size={20} />
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <h3 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">{value}</h3>
      </div>
      {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
    </div>
  );
}
