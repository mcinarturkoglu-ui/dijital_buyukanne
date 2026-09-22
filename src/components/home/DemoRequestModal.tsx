'use client';

import { useState, useEffect } from 'react';
import { X, Building2, CheckCircle2, Send, Sparkles, Phone, Mail, User, MapPin } from 'lucide-react';

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBabyCount?: number;
}

export default function DemoRequestModal({
  isOpen,
  onClose,
  initialBabyCount = 500,
}: DemoRequestModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    institutionName: '',
    institutionType: 'belediye',
    contactName: '',
    title: '',
    email: '',
    phone: '',
    city: '',
    babyCount: initialBabyCount,
    notes: '',
  });

  useEffect(() => {
    if (initialBabyCount) {
      setFormData((prev) => ({ ...prev, babyCount: initialBabyCount }));
    }
  }, [initialBabyCount]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 z-10 my-8 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-turquoise/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-coral/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-navy/70 hover:text-navy flex items-center justify-center transition-all"
        >
          <X size={18} />
        </button>

        {submitted ? (
          /* Success Screen */
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-black text-navy mb-2">Protokol Talebiniz Alındı!</h3>
            <p className="text-sm text-navy/70 max-w-md mx-auto leading-relaxed mb-6">
              Sayın <span className="font-bold text-navy">{formData.contactName || 'Yetkili'}</span>,{' '}
              <span className="font-bold text-turquoise">{formData.institutionName || 'Kurumunuz'}</span> için{' '}
              <span className="font-bold text-navy">{formData.babyCount} bebeklik</span> pilot protokol taslağı ve 
              15 dakikalık online demo takvimi en geç 24 saat içinde e-posta adresinize gönderilecektir.
            </p>
            <div className="p-4 bg-soft-gray rounded-2xl text-xs text-navy/60 max-w-sm mx-auto mb-6">
              Acil sorularınız veya doğrudan randevu için:{' '}
              <a href="mailto:kurumsal@dijitalbuyukanne.com" className="font-bold text-turquoise underline">
                kurumsal@dijitalbuyukanne.com
              </a>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-navy text-white text-xs font-bold hover:bg-navy/90 transition-all"
            >
              Tamamla ve Kapat
            </button>
          </div>
        ) : (
          /* Form Screen */
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-turquoise/15 text-turquoise flex items-center justify-center font-bold">
                <Building2 size={16} />
              </div>
              <span className="text-xs font-bold text-turquoise uppercase tracking-widest">
                Kurumsal & Belediye İş Birliği
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-navy leading-tight mb-2">
              Şehrinize Özel DijitalBüyükanne Protokolü İsteyin
            </h3>
            <p className="text-xs text-navy/65 mb-6 leading-relaxed">
              İlçenizdeki aileler için özelleştirilmiş mobil uygulama, yönetim paneli ve etki raporlaması hakkında detaylı bilgi alın.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                    Kurum / Belediye Adı *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Keçiören Belediyesi"
                    value={formData.institutionName}
                    onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-navy font-medium focus:bg-white focus:border-turquoise focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                    Kurum Türü
                  </label>
                  <select
                    value={formData.institutionType}
                    onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-navy font-medium focus:bg-white focus:border-turquoise focus:outline-none transition-all"
                  >
                    <option value="belediye">Belediye (İlçe / Büyükşehir)</option>
                    <option value="kaymakamlik">Kaymakamlık / Valilik</option>
                    <option value="vakif">Sosyal Yardım Vakfı / STK</option>
                    <option value="ozel">Özel Kurum / Sponsor Şirket</option>
                    <option value="hastane">Sağlık Grubu / Hastane</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                    Yetkili Ad Soyad *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Adınız ve Soyadınız"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-navy font-medium focus:bg-white focus:border-turquoise focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                    Göreviniz / Unvanınız
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: Sosyal Hizmetler Md."
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-navy font-medium focus:bg-white focus:border-turquoise focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                    Kurumsal E-posta *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="yetkili@belediye.bel.tr"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-navy font-medium focus:bg-white focus:border-turquoise focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                    Telefon Numarası *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="05XX XXX XX XX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-navy font-medium focus:bg-white focus:border-turquoise focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                    Şehir / İlçe
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: Ankara / Keçiören"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-navy font-medium focus:bg-white focus:border-turquoise focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                    Hedef Bebek Sayısı
                  </label>
                  <input
                    type="number"
                    min={50}
                    step={50}
                    value={formData.babyCount}
                    onChange={(e) => setFormData({ ...formData, babyCount: Number(e.target.value) })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-navy font-medium focus:bg-white focus:border-turquoise focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-navy uppercase tracking-wider mb-1">
                  Ek Not veya Özel Talepleriniz
                </label>
                <textarea
                  rows={2}
                  placeholder="İlçemizdeki yeni doğan hediye paketine mobil uygulama erişim kodlarını da dahil etmek istiyoruz..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-navy font-medium focus:bg-white focus:border-turquoise focus:outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-coral hover:bg-coral/95 text-white text-xs sm:text-sm font-bold shadow-lg shadow-coral/25 flex items-center justify-center gap-2 transition-all mt-4 disabled:opacity-70"
              >
                {loading ? (
                  <span>Gönderiliyor...</span>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Demo ve Protokol Taslağını Gönder</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
