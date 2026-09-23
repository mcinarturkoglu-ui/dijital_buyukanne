'use client';

import { useState, useEffect } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import SupporterModal from '@/components/admin/SupporterModal';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit2, 
  Trash2, 
  Sparkles, 
  MapPin, 
  ExternalLink,
  CheckCircle,
  XCircle,
  Building2
} from 'lucide-react';

export default function DestekcilerAdminPage() {
  const [supporters, setSupporters] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSupporter, setEditingSupporter] = useState<any | null>(null);
  const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const fetchSupporters = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/supporters');
      if (res.ok) {
        const data = await res.json();
        setSupporters(data.supporters || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSupporters();
  }, []);

  const showNotification = (type: 'success' | 'error', text: string) => {
    setActionMessage({ type, text });
    setTimeout(() => setActionMessage(null), 3500);
  };

  const handleSave = async (supporterData: any) => {
    try {
      const isEditing = !!editingSupporter;
      const res = await fetch('/api/admin/supporters', {
        method: isEditing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(supporterData),
      });

      if (res.ok) {
        await fetchSupporters();
        showNotification('success', isEditing ? 'Destekçi başarıyla güncellendi.' : 'Yeni destekçi başarıyla eklendi.');
        return true;
      } else {
        const errorData = await res.json();
        showNotification('error', errorData.error || 'İşlem başarısız oldu.');
        return false;
      }
    } catch (err) {
      showNotification('error', 'Sunucu bağlantı hatası.');
      return false;
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`"${name}" destekçisini silmek istediğinize emin misiniz? Bu işlem geri alınamaz.`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/supporters?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        await fetchSupporters();
        showNotification('success', `"${name}" başarıyla silindi.`);
      } else {
        showNotification('error', 'Silme işlemi gerçekleştirilemedi.');
      }
    } catch (err) {
      showNotification('error', 'Sunucu bağlantı hatası.');
    }
  };

  const handleToggleFeatured = async (supporter: any) => {
    try {
      const res = await fetch('/api/admin/supporters', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...supporter, featured: !supporter.featured }),
      });
      if (res.ok) {
        await fetchSupporters();
        showNotification('success', `Öne çıkarma durumu güncellendi.`);
      }
    } catch (err) {
      showNotification('error', 'Durum değiştirilemedi.');
    }
  };

  const handleToggleActive = async (supporter: any) => {
    try {
      const res = await fetch('/api/admin/supporters', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...supporter, active: !supporter.active }),
      });
      if (res.ok) {
        await fetchSupporters();
        showNotification('success', `Aktiflik durumu güncellendi.`);
      }
    } catch (err) {
      showNotification('error', 'Durum değiştirilemedi.');
    }
  };

  // Filtreleme
  const filteredSupporters = supporters.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (s.program && s.program.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesType = typeFilter === 'all' || s.type.toLowerCase() === typeFilter.toLowerCase();

    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'active' && s.active) ||
      (statusFilter === 'inactive' && !s.active) ||
      (statusFilter === 'featured' && s.featured);

    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <>
      <AdminHeader
        title="Destekçiler & Kurumsal Paydaşlar"
        subtitle="Belediyeler, vakıflar, STK'lar ve şirket işbirliklerini ekleyin, güncelleyin veya kaldırın."
        onRefresh={fetchSupporters}
        isRefreshing={isLoading}
      />

      <main className="p-6 md:p-8 space-y-6">
        {/* Notification Toast */}
        {actionMessage && (
          <div
            className={`p-4 rounded-2xl flex items-center justify-between text-xs font-bold animate-fade-in ${
              actionMessage.type === 'success'
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                : 'bg-rose-50 border border-rose-200 text-rose-700'
            }`}
          >
            <span>{actionMessage.text}</span>
            <button onClick={() => setActionMessage(null)} className="opacity-60 hover:opacity-100">✕</button>
          </div>
        )}

        {/* Action & Filter Toolbar */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Kurum, şehir veya program ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
            />
          </div>

          {/* Filters & Add Button */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Type filter */}
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/20 bg-white cursor-pointer font-medium"
            >
              <option value="all">Tüm Kurum Tipleri</option>
              <option value="belediye">Belediyeler</option>
              <option value="stk">STK</option>
              <option value="vakif">Vakıflar</option>
              <option value="dernek">Dernekler</option>
              <option value="sirket">Şirketler</option>
            </select>

            {/* Status filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/20 bg-white cursor-pointer font-medium"
            >
              <option value="all">Tüm Durumlar</option>
              <option value="featured">Öne Çıkarılanlar</option>
              <option value="active">Yalnızca Aktifler</option>
              <option value="inactive">Pasifler</option>
            </select>

            {/* Add Button */}
            <button
              onClick={() => {
                setEditingSupporter(null);
                setIsModalOpen(true);
              }}
              className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-sky-500/20 transition-all cursor-pointer ml-auto"
            >
              <Plus size={16} />
              <span>Yeni Destekçi Ekle</span>
            </button>
          </div>
        </div>

        {/* Supporters Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-4 px-6">Kurum & Program</th>
                  <th className="py-4 px-6">Tür</th>
                  <th className="py-4 px-6">Şehir</th>
                  <th className="py-4 px-6 text-center">Öne Çıkan</th>
                  <th className="py-4 px-6 text-center">Durum</th>
                  <th className="py-4 px-6 text-right">İşlemler</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredSupporters.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-400">
                      {searchTerm || typeFilter !== 'all' || statusFilter !== 'all'
                        ? 'Arama kriterlerinize uygun destekçi bulunamadı.'
                        : 'Henüz kayıtlı destekçi bulunmamaktadır.'}
                    </td>
                  </tr>
                ) : (
                  filteredSupporters.map((s) => (
                    <tr key={s.id} className="hover:bg-slate-50/70 transition-colors">
                      {/* Kurum */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-sm"
                            style={{ backgroundColor: s.color || '#0284C7' }}
                          >
                            {s.shortName || s.name.slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                              <span>{s.name}</span>
                              <a
                                href={`/destekciler/${s.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-sky-600 transition-colors"
                                title="Detay Sayfasını Aç"
                              >
                                <ExternalLink size={12} />
                              </a>
                            </div>
                            <p className="text-[11px] text-sky-600 font-medium">{s.program}</p>
                          </div>
                        </div>
                      </td>

                      {/* Tür */}
                      <td className="py-4 px-6">
                        <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-semibold text-[10px] uppercase">
                          {s.type}
                        </span>
                      </td>

                      {/* Şehir */}
                      <td className="py-4 px-6">
                        <span className="flex items-center gap-1 text-slate-600 font-medium">
                          <MapPin size={12} className="text-slate-400" />
                          {s.city}
                        </span>
                      </td>

                      {/* Öne Çıkan Toggle */}
                      <td className="py-4 px-6 text-center">
                        <button
                          onClick={() => handleToggleFeatured(s)}
                          className={`p-1.5 rounded-lg transition-all ${
                            s.featured
                              ? 'bg-amber-100 text-amber-600 hover:bg-amber-200'
                              : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
                          }`}
                          title={s.featured ? 'Öne çıkarılmayı kaldır' : 'Ana sayfada öne çıkar'}
                        >
                          <Sparkles size={16} />
                        </button>
                      </td>

                      {/* Aktiflik Durumu */}
                      <td className="py-4 px-6 text-center">
                        <button
                          onClick={() => handleToggleActive(s)}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold transition-all ${
                            s.active
                              ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100'
                              : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                          }`}
                        >
                          {s.active ? <CheckCircle size={11} /> : <XCircle size={11} />}
                          <span>{s.active ? 'Aktif' : 'Pasif'}</span>
                        </button>
                      </td>

                      {/* Aksiyonlar */}
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => {
                              setEditingSupporter(s);
                              setIsModalOpen(true);
                            }}
                            className="p-2 rounded-lg text-slate-500 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                            title="Düzenle"
                          >
                            <Edit2 size={15} />
                          </button>
                          <button
                            onClick={() => handleDelete(s.id, s.name)}
                            className="p-2 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                            title="Sil"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Modal */}
      <SupporterModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingSupporter(null);
        }}
        onSave={handleSave}
        initialData={editingSupporter}
      />
    </>
  );
}
