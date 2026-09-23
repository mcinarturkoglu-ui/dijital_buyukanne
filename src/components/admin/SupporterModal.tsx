'use client';

import { useState, useEffect } from 'react';
import { X, Check, Building2, MapPin, Sparkles, Palette } from 'lucide-react';

interface SupporterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (supporterData: any) => Promise<boolean>;
  initialData?: any;
}

const colorPresets = [
  { name: 'Turkuaz', hex: '#14BBB7' },
  { name: 'Gök Mavisi', hex: '#0284C7' },
  { name: 'Mercan', hex: '#FF5A43' },
  { name: 'Zümrüt', hex: '#059669' },
  { name: 'Kırmızı', hex: '#E31E24' },
  { name: 'Lacivert', hex: '#082A46' },
  { name: 'Mor', hex: '#7C3AED' },
  { name: 'Turuncu', hex: '#EA580C' },
];

export default function SupporterModal({ isOpen, onClose, onSave, initialData }: SupporterModalProps) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    shortName: '',
    type: 'belediye',
    city: '',
    program: '',
    description: '',
    color: '#14BBB7',
    featured: true,
    active: true,
    families: 0,
    babies: 0,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialData) {
      setFormData({
        id: initialData.id || '',
        name: initialData.name || '',
        shortName: initialData.shortName || '',
        type: initialData.type || 'belediye',
        city: initialData.city || '',
        program: initialData.program || '',
        description: initialData.description || '',
        color: initialData.color || '#14BBB7',
        featured: initialData.featured ?? true,
        active: initialData.active ?? true,
        families: initialData.families || 0,
        babies: initialData.babies || 0,
      });
    } else {
      setFormData({
        id: '',
        name: '',
        shortName: '',
        type: 'belediye',
        city: '',
        program: '',
        description: '',
        color: '#14BBB7',
        featured: true,
        active: true,
        families: 0,
        babies: 0,
      });
    }
    setError('');
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.city.trim()) {
      setError('Kurum adı ve şehir alanları zorunludur.');
      return;
    }

    setIsLoading(true);
    setError('');

    const success = await onSave(formData);
    setIsLoading(false);

    if (success) {
      onClose();
    } else {
      setError('Kaydetme sırasında bir hata oluştu.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-bold shadow-md"
              style={{ backgroundColor: formData.color }}
            >
              <Building2 size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                {initialData ? 'Destekçi Bilgilerini Düzenle' : 'Yeni Destekçi Kurum Ekle'}
              </h2>
              <p className="text-xs text-slate-500">
                {initialData ? `${initialData.name} kaydını güncelleyin` : 'Belediye, STK veya sponsor kurum tanımlayın'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 flex-1">
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-medium">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Kurum Tam Adı *</label>
              <input
                type="text"
                required
                placeholder="Örn: Ankara Büyükşehir Belediyesi"
                value={formData.name}
                onChange={(e) => {
                  const val = e.target.value;
                  setFormData((prev) => ({
                    ...prev,
                    name: val,
                    shortName: prev.shortName || val.slice(0, 3).toUpperCase(),
                    program: prev.program || `${val} DijitalBüyükanne`,
                  }));
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Kısa Ad (Monogram için)</label>
              <input
                type="text"
                placeholder="Örn: ABB"
                value={formData.shortName}
                onChange={(e) => setFormData({ ...formData, shortName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Kurum Türü</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 bg-white"
              >
                <option value="belediye">Belediye</option>
                <option value="stk">STK (Sivil Toplum)</option>
                <option value="vakif">Vakıf</option>
                <option value="dernek">Dernek</option>
                <option value="sirket">Şirket / Sponsor</option>
                <option value="diger">Diğer</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Şehir *</label>
              <input
                type="text"
                required
                placeholder="Örn: Ankara"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Program Başlığı</label>
            <input
              type="text"
              placeholder="Örn: Ankara DijitalBüyükanne Destek Programı"
              value={formData.program}
              onChange={(e) => setFormData({ ...formData, program: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Açıklama</label>
            <textarea
              rows={3}
              placeholder="Kurumun bölgedeki ailelere yönelik sağladığı destek hakkında kısa bilgi..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
            />
          </div>

          {/* Color Picker & Presets */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
              <Palette size={14} className="text-slate-500" />
              <span>Kurumsal Tema Rengi</span>
            </label>
            <div className="flex items-center gap-2 flex-wrap mt-1.5">
              {colorPresets.map((c) => (
                <button
                  type="button"
                  key={c.hex}
                  onClick={() => setFormData({ ...formData, color: c.hex })}
                  className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all ${
                    formData.color.toLowerCase() === c.hex.toLowerCase()
                      ? 'scale-110 ring-2 ring-offset-2 ring-slate-800'
                      : 'hover:scale-105'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                >
                  {formData.color.toLowerCase() === c.hex.toLowerCase() && <Check size={14} className="text-white" />}
                </button>
              ))}
              <input
                type="color"
                value={formData.color}
                onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                className="w-8 h-8 rounded-xl border-0 p-0 cursor-pointer"
                title="Özel Renk Seç"
              />
              <span className="text-[11px] font-mono text-slate-500 ml-1">{formData.color}</span>
            </div>
          </div>

          {/* Toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
            <label className="flex items-center gap-3 p-3 rounded-2xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500"
              />
              <div>
                <p className="text-xs font-bold text-slate-800">Ana Sayfada Göster</p>
                <p className="text-[10px] text-slate-500">Öne çıkan destekçi kartlarında yer alır</p>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-2xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
              <input
                type="checkbox"
                checked={formData.active}
                onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
              />
              <div>
                <p className="text-xs font-bold text-slate-800">Aktif İşbirliği</p>
                <p className="text-[10px] text-slate-500">Listelerde ve aramalarda görünür</p>
              </div>
            </label>
          </div>

          {/* Footer Buttons */}
          <div className="pt-4 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              Vazgeç
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold shadow-md shadow-sky-500/20 transition-all disabled:opacity-50"
            >
              {isLoading ? 'Kaydediliyor...' : initialData ? 'Değişiklikleri Kaydet' : 'Destekçiyi Ekle'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
