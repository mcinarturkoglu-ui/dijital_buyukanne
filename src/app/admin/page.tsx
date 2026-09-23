'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AdminHeader from '@/components/admin/AdminHeader';
import StatCard from '@/components/admin/StatCard';
import SupporterModal from '@/components/admin/SupporterModal';
import { 
  Users, 
  HeartHandshake, 
  Baby, 
  MapPin, 
  Plus, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  BarChart3,
  Settings
} from 'lucide-react';

export default function AdminDashboardPage() {
  const [supporters, setSupporters] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [resSupporters, resStats] = await Promise.all([
        fetch('/api/admin/supporters'),
        fetch('/api/admin/stats'),
      ]);

      if (resSupporters.ok) {
        const suppData = await resSupporters.json();
        setSupporters(suppData.supporters || []);
      }

      if (resStats.ok) {
        const statsData = await resStats.json();
        setStats(statsData.stats || null);
      }
    } catch (err) {
      console.error('Veri yüklenirken hata:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSaveSupporter = async (newSupp: any) => {
    try {
      const res = await fetch('/api/admin/supporters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSupp),
      });

      if (res.ok) {
        await fetchData();
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  };

  const featuredCount = supporters.filter((s) => s.featured).length;
  const activeCount = supporters.filter((s) => s.active).length;

  return (
    <>
      <AdminHeader
        title="Genel Bakış & Yönetim Paneli"
        subtitle="Platformun aktif destekçilerini, sosyal etki verilerini ve site ayarlarını buradan yönetin."
        onRefresh={fetchData}
        isRefreshing={isLoading}
      />

      <main className="p-6 md:p-8 space-y-8">
        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatCard
            title="Toplam Destekçi"
            value={supporters.length}
            subtitle={`${activeCount} aktif işbirliği`}
            icon={HeartHandshake}
            color="sky"
          />
          <StatCard
            title="Öne Çıkarılan Kurum"
            value={featuredCount}
            subtitle="Ana sayfada listelenen"
            icon={Sparkles}
            color="purple"
          />
          <StatCard
            title="Kayıtlı Bebek Sayısı"
            value={stats?.babies ? stats.babies.toLocaleString('tr-TR') : '0'}
            subtitle="Etki raporundaki veri"
            icon={Baby}
            color="coral"
          />
          <StatCard
            title="Ulaşılan Aile"
            value={stats?.families ? stats.families.toLocaleString('tr-TR') : '0'}
            subtitle="Doğrudan destek alan"
            icon={Users}
            color="emerald"
          />
        </div>

        {/* Quick Action Banner */}
        <div className="bg-gradient-to-r from-[#0b2842] to-[#12385b] rounded-3xl p-6 md:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-400/20 text-sky-300 border border-sky-400/30">
              Hızlı İşlemler
            </span>
            <h2 className="text-xl md:text-2xl font-bold mt-2">Yeni Bir Kurumsal Paydaş mı Katıldı?</h2>
            <p className="text-slate-300 text-xs md:text-sm mt-1 max-w-xl">
              Belediye, vakıf veya sponsor kurumları ekleyerek ana sayfada ve destekçiler sayfasında otomatik listelenmesini sağlayabilirsiniz.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-3 rounded-2xl bg-coral hover:bg-coral/90 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-coral/25 transition-all cursor-pointer"
            >
              <Plus size={16} />
              <span>Yeni Destekçi Ekle</span>
            </button>
            <Link
              href="/admin/destekciler"
              className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all flex items-center gap-1.5"
            >
              <span>Tümünü Yönet</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Two-Column Grid: Recent Supporters & Management Shortcuts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Supporters (2 Cols) */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-slate-800 text-base">Kayıtlı Destekçiler</h3>
                <p className="text-xs text-slate-500">Sistemde yer alan son işbirlikleri</p>
              </div>
              <Link
                href="/admin/destekciler"
                className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
              >
                Tümünü Gör ({supporters.length})
                <ArrowRight size={12} />
              </Link>
            </div>

            {supporters.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-xs">
                Henüz kayıtlı destekçi bulunmuyor.
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {supporters.slice(0, 5).map((s) => (
                  <div key={s.id} className="py-3.5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-sm"
                        style={{ backgroundColor: s.color || '#0284C7' }}
                      >
                        {s.shortName || s.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-800 text-xs truncate">{s.name}</h4>
                          {s.featured && (
                            <span className="text-[9px] bg-amber-50 text-amber-600 border border-amber-200 font-bold px-1.5 py-0.2 rounded">
                              Öne Çıkan
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 truncate flex items-center gap-1 mt-0.5">
                          <MapPin size={11} className="text-slate-400" />
                          <span>{s.city}</span>
                          <span className="text-slate-300">•</span>
                          <span>{s.program}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          s.active
                            ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {s.active ? 'Aktif' : 'Pasif'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Nav Shortcuts (1 Col) */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-800 text-base">Yönetim Modülleri</h3>
              <p className="text-xs text-slate-500">Yapmak istediğiniz işlemi seçin</p>

              <div className="space-y-2.5 pt-2">
                <Link
                  href="/admin/destekciler"
                  className="p-3.5 rounded-2xl bg-slate-50 hover:bg-sky-50/70 border border-slate-200/80 hover:border-sky-200 flex items-center gap-3.5 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <HeartHandshake size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-xs text-slate-800">Destekçi Kurumlar</p>
                    <p className="text-[10px] text-slate-500 truncate">Ekle, sil, düzenle veya öne çıkar</p>
                  </div>
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
                </Link>

                <Link
                  href="/admin/istatistikler"
                  className="p-3.5 rounded-2xl bg-slate-50 hover:bg-emerald-50/70 border border-slate-200/80 hover:border-emerald-200 flex items-center gap-3.5 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <BarChart3 size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-xs text-slate-800">Etki Verileri</p>
                    <p className="text-[10px] text-slate-500 truncate">Bebek, aile ve memnuniyet sayıları</p>
                  </div>
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
                </Link>

                <Link
                  href="/admin/ayarlar"
                  className="p-3.5 rounded-2xl bg-slate-50 hover:bg-purple-50/70 border border-slate-200/80 hover:border-purple-200 flex items-center gap-3.5 transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Settings size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-xs text-slate-800">Site İletişim Ayarları</p>
                    <p className="text-[10px] text-slate-500 truncate">E-posta, sosyal medya ve mağaza linkleri</p>
                  </div>
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
                </Link>
              </div>
            </div>

            {/* Live System Info Box */}
            <div className="bg-sky-50 rounded-3xl p-5 border border-sky-100 space-y-2">
              <div className="flex items-center gap-2 text-sky-800 font-bold text-xs">
                <CheckCircle2 size={16} className="text-sky-600" />
                <span>Otomatik Senkronizasyon Aktif</span>
              </div>
              <p className="text-[11px] text-sky-700/80 leading-relaxed">
                Bu panelden yaptığınız tüm ekleme ve güncellemeler anında web sitesi arayüzüne ve veritabanı JSON dosyalarına yansır.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      <SupporterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveSupporter}
      />
    </>
  );
}
