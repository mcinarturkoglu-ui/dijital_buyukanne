'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings, 
  ExternalLink, 
  LogOut, 
  HeartHandshake,
  ShieldCheck,
  FileText
} from 'lucide-react';

interface SidebarProps {
  onLogout: () => void;
}

export default function AdminSidebar({ onLogout }: SidebarProps) {
  const pathname = usePathname();

  const navItems = [
    {
      label: 'Genel Bakış',
      href: '/admin',
      icon: LayoutDashboard,
      exact: true,
    },
    {
      label: 'İçerik & Metin Yönetimi',
      href: '/admin/icerik',
      icon: FileText,
      exact: false,
    },
    {
      label: 'Destekçiler Yönetimi',
      href: '/admin/destekciler',
      icon: HeartHandshake,
      exact: false,
    },
    {
      label: 'Etki & İstatistikler',
      href: '/admin/istatistikler',
      icon: BarChart3,
      exact: false,
    },
    {
      label: 'Site & İletişim Ayarları',
      href: '/admin/ayarlar',
      icon: Settings,
      exact: false,
    },
  ];

  const isActive = (href: string, exact: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <aside className="w-64 bg-[#0a192f] text-slate-200 min-h-screen flex flex-col border-r border-slate-800 shrink-0">
      {/* Brand Header */}
      <div className="p-6 border-b border-slate-800/80 flex items-center justify-between">
        <Link href="/admin" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-400 to-teal-400 flex items-center justify-center text-navy font-black shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            👵
          </div>
          <div>
            <h1 className="font-extrabold text-white text-base leading-tight tracking-tight">DijitalBüyükanne</h1>
            <p className="text-[11px] text-sky-400 font-mono font-medium flex items-center gap-1 mt-0.5">
              <ShieldCheck size={12} />
              Yönetim Paneli
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="p-4 flex-1 space-y-1.5 overflow-y-auto">
        <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Ana Menü</p>
        {navItems.map((item) => {
          const active = isActive(item.href, item.exact);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                active
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                  : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
              }`}
            >
              <Icon size={18} className={active ? 'text-white' : 'text-slate-400'} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer Actions */}
      <div className="p-4 border-t border-slate-800/80 space-y-2">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
        >
          <span className="flex items-center gap-2">
            <ExternalLink size={15} className="text-sky-400" />
            <span>Siteyi Görüntüle</span>
          </span>
          <span className="text-[9px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">Yeni Sekme</span>
        </a>

        <button
          onClick={onLogout}
          className="w-full flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-500/10 transition-colors"
        >
          <LogOut size={16} />
          <span>Güvenli Çıkış</span>
        </button>
      </div>
    </aside>
  );
}
