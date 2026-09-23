'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { ShieldCheck, KeyRound, ArrowRight, Sparkles } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Session kontrolü
    const session = localStorage.getItem('db_admin_session');
    if (session === 'true') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAuthError('');

    // Varsayılan yönetici parolası: admin123 (veya 1923)
    if (passwordInput === 'admin123' || passwordInput === '1923' || passwordInput === 'buyukanne2024') {
      localStorage.setItem('db_admin_session', 'true');
      setIsAuthenticated(true);
      setPasswordInput('');
    } else {
      setAuthError('Hatalı yönetici parolası. (İpucu: admin123)');
    }
    setIsSubmitting(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('db_admin_session');
    setIsAuthenticated(false);
  };

  // Yükleme durumu
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-sky-400 border-t-transparent rounded-full animate-spin" />
          <p className="text-xs text-slate-400">Yönetim paneli yükleniyor...</p>
        </div>
      </div>
    );
  }

  // Oturum açılmamışsa Şık Giriş Ekranını göster
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#081e36] via-[#0c2847] to-[#081729] flex items-center justify-center p-4">
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-md w-full bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 relative z-10 animate-fade-in">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-400 to-teal-400 mx-auto flex items-center justify-center text-2xl shadow-lg shadow-sky-500/20 mb-4">
              👵
            </div>
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">DijitalBüyükanne</h1>
            <p className="text-xs text-sky-600 font-bold uppercase tracking-wider mt-1 flex items-center justify-center gap-1">
              <ShieldCheck size={14} />
              Yönetim Paneli Girişi
            </p>
            <p className="text-xs text-slate-500 mt-2">
              Destekçileri, etki istatistiklerini ve site ayarlarını güncellemek için şifrenizi girin.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {authError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-medium text-center">
                {authError}
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <KeyRound size={14} className="text-slate-400" />
                <span>Yönetici Parolası</span>
              </label>
              <input
                type="password"
                required
                autoFocus
                placeholder="Parolanızı girin..."
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
              />
              <p className="text-[10px] text-slate-400 mt-1.5">
                Varsayılan erişim parolası: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-600">admin123</code>
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white font-bold text-sm shadow-md shadow-sky-500/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Panele Giriş Yap</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-100 text-center">
            <a href="/" className="text-xs font-semibold text-slate-400 hover:text-slate-600 transition-colors">
              ← Web Sitesine Geri Dön
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Giriş yapılmışsa Admin panel kabuğunu render et
  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sol Sidebar */}
      <AdminSidebar onLogout={handleLogout} />

      {/* Sağ Ana İçerik */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
