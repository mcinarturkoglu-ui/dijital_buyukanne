'use client';

import { useState, useEffect } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import { Save, Mail, Phone, MapPin, Globe, Share2, Smartphone } from 'lucide-react';

export default function AyarlarAdminPage() {
  const [config, setConfig] = useState({
    appStore: '',
    googlePlay: '',
    contact: {
      email: '',
      phone: '',
      address: '',
    },
    social: {
      instagram: '',
      twitter: '',
      linkedin: '',
      youtube: '',
    },
    babySensAI: {
      url: '',
    },
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const fetchConfig = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/config');
      if (res.ok) {
        const data = await res.json();
        setConfig(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchConfig();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setNotification(null);

    try {
      const res = await fetch('/api/admin/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config),
      });

      if (res.ok) {
        setNotification({ type: 'success', text: 'Site ayarları başarıyla güncellendi.' });
      } else {
        setNotification({ type: 'error', text: 'Kayıt sırasında bir hata oluştu.' });
      }
    } catch (err) {
      setNotification({ type: 'error', text: 'Sunucuyla bağlantı kurulamadı.' });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <AdminHeader
        title="Site & İletişim Ayarları"
        subtitle="İletişim e-postası, sosyal medya hesapları ve mobil mağaza indirme bağlantılarını güncelleyin."
        onRefresh={fetchConfig}
        isRefreshing={isLoading}
      />

      <main className="p-6 md:p-8 max-w-4xl space-y-6">
        {notification && (
          <div
            className={`p-4 rounded-2xl flex items-center justify-between text-xs font-bold animate-fade-in ${
              notification.type === 'success'
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                : 'bg-rose-50 border border-rose-200 text-rose-700'
            }`}
          >
            <span>{notification.text}</span>
            <button onClick={() => setNotification(null)} className="opacity-60 hover:opacity-100">✕</button>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6">
          {/* İletişim Bilgileri */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <Mail className="text-sky-500" size={18} />
              <h3 className="font-bold text-slate-800 text-base">İletişim Bilgileri</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">E-Posta Adresi</label>
                <input
                  type="email"
                  value={config.contact?.email || ''}
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      contact: { ...config.contact, email: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Telefon Numarası</label>
                <input
                  type="text"
                  placeholder="+90 5XX XXX XX XX"
                  value={config.contact?.phone || ''}
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      contact: { ...config.contact, phone: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Adres / Lokasyon</label>
              <input
                type="text"
                value={config.contact?.address || ''}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    contact: { ...config.contact, address: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
              />
            </div>
          </div>

          {/* Mobil Uygulama Mağaza Bağlantıları */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <Smartphone className="text-coral" size={18} />
              <h3 className="font-bold text-slate-800 text-base">Uygulama Mağaza Bağlantıları</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Apple App Store URL</label>
                <input
                  type="text"
                  placeholder="https://apps.apple.com/..."
                  value={config.appStore || ''}
                  onChange={(e) => setConfig({ ...config, appStore: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Google Play Store URL</label>
                <input
                  type="text"
                  placeholder="https://play.google.com/..."
                  value={config.googlePlay || ''}
                  onChange={(e) => setConfig({ ...config, googlePlay: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>
            </div>
          </div>

          {/* Sosyal Medya */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <Share2 className="text-purple-500" size={18} />
              <h3 className="font-bold text-slate-800 text-base">Sosyal Medya Hesapları</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Instagram URL</label>
                <input
                  type="text"
                  value={config.social?.instagram || ''}
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      social: { ...config.social, instagram: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">X (Twitter) URL</label>
                <input
                  type="text"
                  value={config.social?.twitter || ''}
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      social: { ...config.social, twitter: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">LinkedIn URL</label>
                <input
                  type="text"
                  value={config.social?.linkedin || ''}
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      social: { ...config.social, linkedin: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">YouTube URL</label>
                <input
                  type="text"
                  value={config.social?.youtube || ''}
                  onChange={(e) =>
                    setConfig({
                      ...config,
                      social: { ...config.social, youtube: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              disabled={isSaving}
              className="px-6 py-3 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-sky-500/20 transition-all disabled:opacity-50 cursor-pointer"
            >
              <Save size={16} />
              <span>{isSaving ? 'Kaydediliyor...' : 'Tüm Ayarları Kaydet'}</span>
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
