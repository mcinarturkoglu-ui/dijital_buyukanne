'use client';

import { useState, useEffect } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import SupporterModal from '@/components/admin/SupporterModal';
import defaultSupportersData from '@/data/supporters.json';
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
  Building2,
  AlertTriangle,
  RotateCcw
} from 'lucide-react';

const STORAGE_KEY = 'dijitalbuyukanne_admin_supporters';
const DELETED_IDS_KEY = 'dijitalbuyukanne_deleted_supporter_ids';

export default function DestekcilerAdminPage() {
  const [supporters, setSupporters] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSupporter, setEditingSupporter] = useState<any | null>(null);
  const [supporterToDelete, setSupporterToDelete] = useState<{ id: string; name: string } | null>(null);
  const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const showNotification = (type: 'success' | 'error', text: string) => {
    setActionMessage({ type, text });
    setTimeout(() => setActionMessage(null), 3500);
  };

  const getDeletedIds = (): string[] => {
    try {
      const stored = localStorage.getItem(DELETED_IDS_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  };

  const fetchSupporters = async () => {
    setIsLoading(true);
    try {
      // 1. Check local storage first for immediate instant display
      const localData = localStorage.getItem(STORAGE_KEY);
      const deletedIds = getDeletedIds();

      if (localData) {
        try {
          const parsed = JSON.parse(localData);
          if (Array.isArray(parsed) && parsed.length >= 0) {
            const filtered = parsed.filter((s: any) => !deletedIds.includes(s.id));
            setSupporters(filtered);
          }
        } catch {
          // ignore
        }
      }

      // 2. Fetch from server API
      const res = await fetch('/api/admin/supporters');
      if (res.ok) {
        const data = await res.json();
        let serverSupporters = data.supporters || [];
        
        // Filter out locally deleted IDs
        serverSupporters = serverSupporters.filter((s: any) => !deletedIds.includes(s.id));

        // If local storage has user edits, prioritize local list if present
        if (!localData) {
          setSupporters(serverSupporters);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(serverSupporters));
        } else {
          // Merge any brand new server items
          const localParsed = JSON.parse(localData);
          const localIdSet = new Set(localParsed.map((s: any) => s.id));
          const newItems = serverSupporters.filter((s: any) => !localIdSet.has(s.id));
          if (newItems.length > 0) {
            const merged = [...localParsed, ...newItems].filter((s: any) => !deletedIds.includes(s.id));
            setSupporters(merged);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
          }
        }
      }
    } catch (err) {
      console.error('Fetch supporters error:', err);
      // Fallback to default json if completely offline and no local data
      if (!localStorage.getItem(STORAGE_KEY)) {
        const deletedIds = getDeletedIds();
        const base = (defaultSupportersData.supporters || []).filter((s: any) => !deletedIds.includes(s.id));
        setSupporters(base);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSupporters();
  }, []);

  // Save (Create or Update)
  const handleSave = async (supporterData: any) => {
    try {
      const isEditing = !!editingSupporter;
      
      // Optimistic update
      let updatedList: any[];
      if (isEditing) {
        updatedList = supporters.map((s) => (s.id === supporterData.id ? { ...s, ...supporterData } : s));
      } else {
        const baseSlug = (supporterData.slug || supporterData.name)
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]/g, '-');
        const newItem = {
          ...supporterData,
          id: supporterData.id || `${baseSlug}-${Date.now().toString().slice(-4)}`,
          slug: baseSlug,
        };
        updatedList = [newItem, ...supporters];
      }

      setSupporters(updatedList);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));

      // Remove from deleted IDs if present
      const deletedIds = getDeletedIds().filter((id) => id !== supporterData.id);
      localStorage.setItem(DELETED_IDS_KEY, JSON.stringify(deletedIds));

      showNotification('success', isEditing ? 'Destekçi başarıyla güncellendi.' : 'Yeni destekçi başarıyla eklendi.');

      // Server update in background
      fetch('/api/admin/supporters', {
        method: isEditing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(supporterData),
      }).catch(console.error);

      return true;
    } catch (err) {
      showNotification('error', 'İşlem sırasında bir hata oluştu.');
      return false;
    }
  };

  // Immediate, reliable deletion
  const confirmDelete = async () => {
    if (!supporterToDelete) return;
    const { id, name } = supporterToDelete;

    // 1. Optimistically remove from state immediately
    const updated = supporters.filter((s) => s.id !== id);
    setSupporters(updated);

    // 2. Persist to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // 3. Add to deleted IDs registry so it never resurrects
    const deletedIds = getDeletedIds();
    if (!deletedIds.includes(id)) {
      deletedIds.push(id);
      localStorage.setItem(DELETED_IDS_KEY, JSON.stringify(deletedIds));
    }

    // 4. Close modal and show success toast immediately
    setSupporterToDelete(null);
    showNotification('success', `"${name}" başarıyla silindi.`);

    // 5. Send API call in background to sync server
    try {
      await fetch(`/api/admin/supporters?id=${id}`, {
        method: 'DELETE',
      });
    } catch (err) {
      console.warn('Server delete call finished with note:', err);
    }
  };

  // Reset to default
  const handleResetToDefault = () => {
    if (!window.confirm('Tüm destekçi listesini orijinal fabrika ayarlarına sıfırlamak istediğinize emin misiniz?')) {
      return;
    }
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(DELETED_IDS_KEY);
    const defaults = defaultSupportersData.supporters || [];
    setSupporters(defaults);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaults));
    showNotification('success', 'Destekçiler orijinal varsayılan ayarlara sıfırlandı.');
  };

  const handleToggleFeatured = async (supporter: any) => {
    const updated = supporters.map((s) =>
      s.id === supporter.id ? { ...s, featured: !s.featured } : s
    );
    setSupporters(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    showNotification('success', 'Öne çıkarma durumu güncellendi.');

    fetch('/api/admin/supporters', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...supporter, featured: !supporter.featured }),
    }).catch(console.error);
  };

  const handleToggleActive = async (supporter: any) => {
    const updated = supporters.map((s) =>
      s.id === supporter.id ? { ...s, active: !s.active } : s
    );
    setSupporters(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    showNotification('success', 'Aktiflik durumu güncellendi.');

    fetch('/api/admin/supporters', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...supporter, active: !supporter.active }),
    }).catch(console.error);
  };

  // Filter
  const filteredSupporters = supporters.filter((s) => {
    const matchesSearch =
      s.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.city?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (s.program && s.program.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesType = typeFilter === 'all' || s.type?.toLowerCase() === typeFilter.toLowerCase();

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
        subtitle="Belediyeler, vakıflar, STK'lar ve şirket işbirliklerini ekleyin, güncelleyin veya anında silin."
        onRefresh={fetchSupporters}
        isRefreshing={isLoading}
      />

      <main className="p-6 md:p-8 space-y-6">
        {/* Notification Toast */}
        {actionMessage && (
          <div
            className={`p-4 rounded-2xl flex items-center justify-between text-xs font-bold shadow-md animate-fade-in ${
              actionMessage.type === 'success'
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                : 'bg-rose-50 border border-rose-200 text-rose-700'
            }`}
          >
            <span>{actionMessage.text}</span>
            <button onClick={() => setActionMessage(null)} className="opacity-60 hover:opacity-100 cursor-pointer">✕</button>
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

          {/* Filters & Actions */}
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

            {/* Reset to default */}
            <button
              onClick={handleResetToDefault}
              title="Varsayılan Destekçilere Sıfırla"
              className="p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
            >
              <RotateCcw size={14} />
              <span className="hidden sm:inline">Varsayılana Sıfırla</span>
            </button>

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
                            {s.shortName || s.name?.slice(0, 2).toUpperCase()}
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
                          className={`p-1.5 rounded-lg transition-all cursor-pointer ${
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
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
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
                            className="p-2 rounded-lg text-slate-500 hover:text-sky-600 hover:bg-sky-50 transition-colors cursor-pointer"
                            title="Düzenle"
                          >
                            <Edit2 size={15} />
                          </button>
                          <button
                            onClick={() => setSupporterToDelete({ id: s.id, name: s.name })}
                            className="p-2 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
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

      {/* Delete Confirmation Modal */}
      {supporterToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-2">
              <AlertTriangle size={24} />
            </div>
            
            <div className="text-center space-y-1">
              <h3 className="text-base font-bold text-slate-900">Destekçiyi Sil</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                <span className="font-bold text-slate-800">&ldquo;{supporterToDelete.name}&rdquo;</span> adlı kurumu silmek istediğinize emin misiniz? Bu işlem geri alınamaz.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setSupporterToDelete(null)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-all cursor-pointer"
              >
                Vazgeç
              </button>
              <button
                type="button"
                onClick={confirmDelete}
                className="flex-1 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all shadow-md shadow-rose-600/20 cursor-pointer"
              >
                Evet, Sil
              </button>
            </div>
          </div>
        </div>
      )}

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
