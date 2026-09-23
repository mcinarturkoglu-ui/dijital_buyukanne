'use client';

import { useState, useEffect } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import { Save, CheckCircle, Baby, Users, Building, MapPin, Activity, HeartHandshake, Star } from 'lucide-react';

export default function IstatistiklerAdminPage() {
  const [stats, setStats] = useState({
    babies: 0,
    families: 0,
    institutions: 0,
    cities: 0,
    evaluations: 0,
    expertSessions: 0,
    satisfactionRate: 0,
  });

  const [note, setNote] = useState('');
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const fetchStats = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/stats');
      if (res.ok) {
        const data = await res.json();
        if (data.stats) setStats(data.stats);
        if (data.note) setNote(data.note);
        if (data.lastUpdated) setLastUpdated(data.lastUpdated);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setNotification(null);

    try {
      const res = await fetch('/api/admin/stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...stats,
          note,
        }),
      });

      if (res.ok) {
        const result = await res.json();
        setLastUpdated(result.data?.lastUpdated || new Date().toISOString());
        setNotification({ type: 'success', text: 'İstatistikler başarıyla kaydedildi ve yayınlandı.' });
      } else {
        setNotification({ type: 'error', text: 'Kayıt sırasında bir hata oluştu.' });
      }
    } catch (err) {
      setNotification({ type: 'error', text: 'Sunucuyla bağlantı kurulamadı.' });
    } finally {
      setIsSaving(false);
    }
  };

  const fields = [
    { key: 'babies', label: 'Desteklenen Bebek Sayısı', icon: Baby, color: 'text-sky-600', unit: 'Bebek' },
    { key: 'families', label: 'Ulaşılan Aile Sayısı', icon: Users, color: 'text-indigo-600', unit: 'Aile' },
    { key: 'institutions', label: 'İşbirliği Yapılan Kurum', icon: Building, color: 'text-emerald-600', unit: 'Kurum' },
    { key: 'cities', label: 'Ulaşılan Şehir Sayısı', icon: MapPin, color: 'text-purple-600', unit: 'İl' },
    { key: 'evaluations', label: 'Tamamlanan Değerlendirme', icon: Activity, color: 'text-teal-600', unit: 'Analiz' },
    { key: 'expertSessions', label: 'Uzman Görüşmesi / Seans', icon: HeartHandshake, color: 'text-rose-600', unit: 'Seans' },
    { key: 'satisfactionRate', label: 'Memnuniyet Oranı (%)', icon: Star, color: 'text-amber-500', unit: '%' },
  ];

  return (
    <>
      <AdminHeader
        title="Sosyal Etki & İstatistik Yönetimi"
        subtitle="Web sitesi ve etki raporundaki canlı sayısal metrikleri buradan güncelleyebilirsiniz."
        onRefresh={fetchStats}
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
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
              <div>
                <h3 className="font-bold text-slate-800 text-base">Sayısal Göstergeler</h3>
                <p className="text-xs text-slate-500">Değiştirmek istediğiniz rakamları girin</p>
              </div>
              {lastUpdated && (
                <span className="text-[11px] text-slate-400 font-mono">
                  Son güncelleme: {new Date(lastUpdated).toLocaleString('tr-TR')}
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {fields.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.key} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-2">
                    <label className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <Icon size={16} className={f.color} />
                      <span>{f.label}</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="0"
                        value={(stats as any)[f.key] || 0}
                        onChange={(e) =>
                          setStats({
                            ...stats,
                            [f.key]: Number(e.target.value),
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 bg-white"
                      />
                      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-medium">
                        {f.unit}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Etki Raporu Dipnotu / Bilgilendirme
              </label>
              <textarea
                rows={2}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Örn: Bu veriler periyodik olarak doğrulanmaktadır..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 bg-white"
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              disabled={isSaving}
              className="px-6 py-3 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-sky-500/20 transition-all disabled:opacity-50 cursor-pointer"
            >
              <Save size={16} />
              <span>{isSaving ? 'Kaydediliyor...' : 'Değişiklikleri Kaydet & Yayınla'}</span>
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
