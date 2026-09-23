'use client';

import { useState, useEffect } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import { 
  Save, 
  Sparkles, 
  Layout, 
  Layers, 
  Activity, 
  Bot, 
  Building2, 
  Megaphone,
  CheckCircle,
  Plus,
  Trash2,
  Undo2
} from 'lucide-react';

export default function IcerikAdminPage() {
  const [activeTab, setActiveTab] = useState('hero');
  const [content, setContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const fetchContent = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/content');
      if (res.ok) {
        const data = await res.json();
        setContent(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const handleSave = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSaving(true);
    setNotification(null);

    try {
      const res = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });

      if (res.ok) {
        setNotification({ type: 'success', text: 'Tüm metin ve içerik değişiklikleri başarıyla kaydedildi ve yayınlandı!' });
      } else {
        setNotification({ type: 'error', text: 'Kaydetme sırasında bir hata oluştu.' });
      }
    } catch (err) {
      setNotification({ type: 'error', text: 'Sunucuyla bağlantı kurulamadı.' });
    } finally {
      setIsSaving(false);
    }
  };

  const updateField = (section: string, field: string, value: any) => {
    setContent((prev: any) => ({
      ...prev,
      [section]: {
        ...(prev?.[section] || {}),
        [field]: value,
      },
    }));
  };

  const updateRibbon = (ribbonKey: string, field: string, value: any) => {
    setContent((prev: any) => ({
      ...prev,
      chapterRibbons: {
        ...(prev?.chapterRibbons || {}),
        [ribbonKey]: {
          ...(prev?.chapterRibbons?.[ribbonKey] || {}),
          [field]: value,
        },
      },
    }));
  };

  const tabs = [
    { id: 'hero', label: 'Hero & Giriş', icon: Layout },
    { id: 'ribbons', label: 'Bölüm Geçiş Başlıkları', icon: Layers },
    { id: 'skin', label: 'AI Cilt Analizi', icon: Sparkles },
    { id: 'motion', label: 'Hareket Analizi', icon: Activity },
    { id: 'assistant', label: '7/24 Dijital Asistan', icon: Bot },
    { id: 'institutions', label: 'Kurumlar & Belediyeler', icon: Building2 },
    { id: 'finalCta', label: 'Kapanış & Katılım (CTA)', icon: Megaphone },
  ];

  if (isLoading || !content) {
    return (
      <>
        <AdminHeader title="İçerik & Metin Yönetimi" subtitle="Yükleniyor..." />
        <div className="p-12 text-center text-slate-400">Veriler yükleniyor...</div>
      </>
    );
  }

  return (
    <>
      <AdminHeader
        title="İçerik & Metin Yönetimi (CMS)"
        subtitle="Web sitesindeki tüm başlıkları, açıklamaları, butonları ve uyarı metinlerini buradan düzenleyin."
        onRefresh={fetchContent}
        isRefreshing={isLoading}
      />

      <main className="p-6 md:p-8 space-y-6 max-w-6xl">
        {/* Notification Toast */}
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

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl p-2 border border-slate-200 shadow-sm flex items-center gap-1.5 overflow-x-auto">
          {tabs.map((t) => {
            const Icon = t.icon;
            const active = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  active
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon size={15} />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Editor Form */}
        <form onSubmit={handleSave} className="space-y-6">
          {/* 1. HERO TAB */}
          {activeTab === 'hero' && (
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-bold text-slate-800 text-base">Hero (Ana Karşılama) Bölümü Metinleri</h3>
                <p className="text-xs text-slate-500">Ana sayfada ilk açılışta ziyaretçinin gördüğü başlık, alt başlık ve butonlar.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Üst Küçük Başlık (Eyebrow)</label>
                  <input
                    type="text"
                    value={content.hero?.eyebrow || ''}
                    onChange={(e) => updateField('hero', 'eyebrow', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Ana Başlık (H1)</label>
                  <input
                    type="text"
                    value={content.hero?.title || ''}
                    onChange={(e) => updateField('hero', 'title', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Açıklama Metni (Alt Başlık)</label>
                  <textarea
                    rows={3}
                    value={content.hero?.subtitle || ''}
                    onChange={(e) => updateField('hero', 'subtitle', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Birincil Buton Metni (Mercan)</label>
                    <input
                      type="text"
                      value={content.hero?.ctaPrimary || ''}
                      onChange={(e) => updateField('hero', 'ctaPrimary', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">İkincil Buton Metni (Çerçeveli)</label>
                    <input
                      type="text"
                      value={content.hero?.ctaSecondary || ''}
                      onChange={(e) => updateField('hero', 'ctaSecondary', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Güvenilirlik Rozet Metni (Alt Kısım)</label>
                  <input
                    type="text"
                    value={content.hero?.trustBadge || ''}
                    onChange={(e) => updateField('hero', 'trustBadge', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 2. RIBBONS TAB */}
          {activeTab === 'ribbons' && (
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-bold text-slate-800 text-base">Bölüm Geçiş Başlıkları (Ribbon Şeritleri)</h3>
                <p className="text-xs text-slate-500">Ana sayfada bölümler arasındaki kurumsal geçiş şeritlerinin başlık ve metinleri.</p>
              </div>

              {['ribbon2', 'ribbon3', 'ribbon4', 'ribbon5', 'ribbon6'].map((rKey) => {
                const rData = content.chapterRibbons?.[rKey] || {};
                return (
                  <div key={rKey} className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 font-mono">
                        {rData.chapterNumber || rKey.toUpperCase()}
                      </span>
                      <input
                        type="text"
                        placeholder="Bölüm Başlığı (örn: NÖROGELİŞİMSEL DÖNGÜ)"
                        value={rData.chapterTitle || ''}
                        onChange={(e) => updateRibbon(rKey, 'chapterTitle', e.target.value)}
                        className="px-2.5 py-1 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">Ana Manşet Başlığı</label>
                      <input
                        type="text"
                        value={rData.headline || ''}
                        onChange={(e) => updateRibbon(rKey, 'headline', e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">Açıklama</label>
                      <textarea
                        rows={2}
                        value={rData.description || ''}
                        onChange={(e) => updateRibbon(rKey, 'description', e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* 3. SKIN ANALYSIS TAB */}
          {activeTab === 'skin' && (
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-bold text-slate-800 text-base">Yapay Zekâ Cilt Analizi Bölümü</h3>
                <p className="text-xs text-slate-500">41 farklı cilt durumunu tarayan modülün başlık, adımları ve tıbbi uyarı metinleri.</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Üst Başlık (Eyebrow)</label>
                    <input
                      type="text"
                      value={content.skinAnalysis?.eyebrow || ''}
                      onChange={(e) => updateField('skinAnalysis', 'eyebrow', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Bölüm Başlığı</label>
                    <input
                      type="text"
                      value={content.skinAnalysis?.title || ''}
                      onChange={(e) => updateField('skinAnalysis', 'title', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Alt Açıklama</label>
                  <textarea
                    rows={2}
                    value={content.skinAnalysis?.subtitle || ''}
                    onChange={(e) => updateField('skinAnalysis', 'subtitle', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                  />
                </div>

                {/* 3 Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-[10px] font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded">Adım 1</span>
                    <input
                      type="text"
                      placeholder="Adım 1 Başlık"
                      value={content.skinAnalysis?.step1Title || ''}
                      onChange={(e) => updateField('skinAnalysis', 'step1Title', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs font-bold"
                    />
                    <textarea
                      rows={2}
                      placeholder="Adım 1 Açıklama"
                      value={content.skinAnalysis?.step1Desc || ''}
                      onChange={(e) => updateField('skinAnalysis', 'step1Desc', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-[11px]"
                    />
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-[10px] font-bold text-teal-600 bg-teal-100 px-2 py-0.5 rounded">Adım 2</span>
                    <input
                      type="text"
                      placeholder="Adım 2 Başlık"
                      value={content.skinAnalysis?.step2Title || ''}
                      onChange={(e) => updateField('skinAnalysis', 'step2Title', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs font-bold"
                    />
                    <textarea
                      rows={2}
                      placeholder="Adım 2 Açıklama"
                      value={content.skinAnalysis?.step2Desc || ''}
                      onChange={(e) => updateField('skinAnalysis', 'step2Desc', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-[11px]"
                    />
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-[10px] font-bold text-coral bg-rose-100 px-2 py-0.5 rounded">Adım 3</span>
                    <input
                      type="text"
                      placeholder="Adım 3 Başlık"
                      value={content.skinAnalysis?.step3Title || ''}
                      onChange={(e) => updateField('skinAnalysis', 'step3Title', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs font-bold"
                    />
                    <textarea
                      rows={2}
                      placeholder="Adım 3 Açıklama"
                      value={content.skinAnalysis?.step3Desc || ''}
                      onChange={(e) => updateField('skinAnalysis', 'step3Desc', e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-[11px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Yasal / Tıbbi Uyarı Metni</label>
                  <input
                    type="text"
                    value={content.skinAnalysis?.disclaimer || ''}
                    onChange={(e) => updateField('skinAnalysis', 'disclaimer', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 4. MOTION ANALYSIS TAB */}
          {activeTab === 'motion' && (
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-bold text-slate-800 text-base">0–6 Ay Hareket Analizi Bölümü</h3>
                <p className="text-xs text-slate-500">Video tabanlı motor gelişim ön tarama metinleri ve adımları.</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Üst Başlık (Eyebrow)</label>
                    <input
                      type="text"
                      value={content.motionAnalysis?.eyebrow || ''}
                      onChange={(e) => updateField('motionAnalysis', 'eyebrow', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Bölüm Başlığı</label>
                    <input
                      type="text"
                      value={content.motionAnalysis?.title || ''}
                      onChange={(e) => updateField('motionAnalysis', 'title', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Alt Açıklama</label>
                  <textarea
                    rows={2}
                    value={content.motionAnalysis?.subtitle || ''}
                    onChange={(e) => updateField('motionAnalysis', 'subtitle', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Yasal / Tıbbi Uyarı Metni</label>
                  <input
                    type="text"
                    value={content.motionAnalysis?.disclaimer || ''}
                    onChange={(e) => updateField('motionAnalysis', 'disclaimer', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 5. DIGITAL ASSISTANT TAB */}
          {activeTab === 'assistant' && (
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-bold text-slate-800 text-base">7/24 Dijital Asistan Bölümü</h3>
                <p className="text-xs text-slate-500">Gece desteği, Büyükanne tavsiyeleri ve chat deneyimi metinleri.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Bölüm Başlığı</label>
                  <input
                    type="text"
                    value={content.digitalAssistant?.title || ''}
                    onChange={(e) => updateField('digitalAssistant', 'title', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-800"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Gece Sloganı (Örn: Gece 03.00&apos;te bile yanınızda.)</label>
                    <input
                      type="text"
                      value={content.digitalAssistant?.nightTagline || ''}
                      onChange={(e) => updateField('digitalAssistant', 'nightTagline', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Alt Açıklama</label>
                    <input
                      type="text"
                      value={content.digitalAssistant?.subtitle || ''}
                      onChange={(e) => updateField('digitalAssistant', 'subtitle', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Tavsiye Rozet Başlığı</label>
                    <input
                      type="text"
                      value={content.digitalAssistant?.wisdomBadge || ''}
                      onChange={(e) => updateField('digitalAssistant', 'wisdomBadge', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Tavsiye Notu (Örn: Şefkatli & Bilimsel)</label>
                    <input
                      type="text"
                      value={content.digitalAssistant?.wisdomNote || ''}
                      onChange={(e) => updateField('digitalAssistant', 'wisdomNote', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 6. INSTITUTIONS TAB */}
          {activeTab === 'institutions' && (
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-bold text-slate-800 text-base">Kurumlar ve Belediyeler Bölümü</h3>
                <p className="text-xs text-slate-500">&ldquo;Şehrinize Özel DijitalBüyükanne&rdquo; başlığı, kontrol listesi ve demo butonu metinleri.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Bölüm Başlığı</label>
                  <input
                    type="text"
                    value={content.institutionsHero?.title || ''}
                    onChange={(e) => updateField('institutionsHero', 'title', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Alt Açıklama</label>
                  <textarea
                    rows={2}
                    value={content.institutionsHero?.subtitle || ''}
                    onChange={(e) => updateField('institutionsHero', 'subtitle', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">CTA Buton Metni</label>
                  <input
                    type="text"
                    value={content.institutionsHero?.ctaText || ''}
                    onChange={(e) => updateField('institutionsHero', 'ctaText', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                  />
                </div>

                {/* Checklist items */}
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold text-slate-700">Kurumsal Özellik Maddeleri (Checklist)</label>
                    <button
                      type="button"
                      onClick={() => {
                        const currentList = content.institutionsHero?.checklist || [];
                        updateField('institutionsHero', 'checklist', [...currentList, 'Yeni kurumsal özellik']);
                      }}
                      className="text-xs text-sky-600 font-bold flex items-center gap-1 hover:text-sky-700"
                    >
                      <Plus size={14} />
                      <span>Madde Ekle</span>
                    </button>
                  </div>

                  <div className="space-y-2">
                    {(content.institutionsHero?.checklist || []).map((item: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-5 text-[11px] font-bold text-slate-400 font-mono">{idx + 1}.</span>
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => {
                            const updatedList = [...content.institutionsHero.checklist];
                            updatedList[idx] = e.target.value;
                            updateField('institutionsHero', 'checklist', updatedList);
                          }}
                          className="flex-1 px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 bg-white"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updatedList = content.institutionsHero.checklist.filter((_: any, i: number) => i !== idx);
                            updateField('institutionsHero', 'checklist', updatedList);
                          }}
                          className="p-2 text-slate-400 hover:text-rose-600 rounded-lg"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 7. FINAL CTA TAB */}
          {activeTab === 'finalCta' && (
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-bold text-slate-800 text-base">Kapanış & Katılım Çağrısı (Final CTA)</h3>
                <p className="text-xs text-slate-500">Sayfa sonundaki büyük katılım çağrısı metinleri ve butonları.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Üst Başlık (Eyebrow)</label>
                  <input
                    type="text"
                    value={content.finalCTA?.eyebrow || ''}
                    onChange={(e) => updateField('finalCTA', 'eyebrow', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Ana Başlık</label>
                  <input
                    type="text"
                    value={content.finalCTA?.title || ''}
                    onChange={(e) => updateField('finalCTA', 'title', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Açıklama</label>
                  <textarea
                    rows={2}
                    value={content.finalCTA?.subtitle || ''}
                    onChange={(e) => updateField('finalCTA', 'subtitle', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Birincil Buton Metni</label>
                    <input
                      type="text"
                      value={content.finalCTA?.primaryButton || ''}
                      onChange={(e) => updateField('finalCTA', 'primaryButton', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">İkincil Buton Metni</label>
                    <input
                      type="text"
                      value={content.finalCTA?.secondaryButton || ''}
                      onChange={(e) => updateField('finalCTA', 'secondaryButton', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sticky Save Button Bar */}
          <div className="sticky bottom-4 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xl flex items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-medium">
              Yaptığınız değişikliklerin canlıya yansıması için kaydedin.
            </span>
            <button
              type="submit"
              disabled={isSaving}
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all disabled:opacity-50 cursor-pointer"
            >
              <Save size={16} />
              <span>{isSaving ? 'Kaydediliyor...' : 'Değişiklikleri Kaydet & Canlıya Al'}</span>
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
