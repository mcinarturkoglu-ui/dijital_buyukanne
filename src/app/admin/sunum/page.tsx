'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AdminHeader from '@/components/admin/AdminHeader';
import {
  FileText,
  UploadCloud,
  Download,
  ExternalLink,
  Eye,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Layers,
  FileCheck,
  Clock,
  HardDrive,
  Info,
  Maximize2
} from 'lucide-react';

interface PresentationInfo {
  title: string;
  filename: string;
  size: number;
  lastUpdated: string;
  isCustom: boolean;
  downloadUrl: string;
  pages?: number;
}

export default function AdminSunumPage() {
  const [activeDeck, setActiveDeck] = useState<'general' | 'rotary'>('general');
  const [meta, setMeta] = useState<Record<string, PresentationInfo> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [customTitle, setCustomTitle] = useState('');
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [previewVersion, setPreviewVersion] = useState<number>(Date.now());
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchMeta = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/presentation');
      if (res.ok) {
        const data = await res.json();
        setMeta(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMeta();
  }, []);

  const showNotification = (type: 'success' | 'error', text: string) => {
    setNotification({ type, text });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
        showNotification('error', 'Lütfen yalnızca .pdf uzantılı bir dosya seçin.');
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
        showNotification('error', 'Lütfen yalnızca .pdf uzantılı bir dosya seçin.');
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      showNotification('error', 'Lütfen önce bilgisayarınızdan bir PDF dosyası seçin.');
      return;
    }

    setIsUploading(true);
    setNotification(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('type', activeDeck);
      if (customTitle) {
        formData.append('title', customTitle);
      }

      const res = await fetch('/api/admin/presentation', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        showNotification('success', data.message || 'Yeni PDF sunumu başarıyla yüklendi ve canlıya alındı!');
        setSelectedFile(null);
        setCustomTitle('');
        if (fileInputRef.current) fileInputRef.current.value = '';
        setPreviewVersion(Date.now());
        await fetchMeta();
      } else {
        const errData = await res.json();
        showNotification('error', errData.error || 'PDF yüklenirken bir hata oluştu.');
      }
    } catch (err) {
      showNotification('error', 'Sunucu bağlantı hatası oluştu.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleResetToDefault = async () => {
    if (!window.confirm('Özel yüklediğiniz PDF sunumunu silip hazır orijinal sistem sunumuna geri dönmek istediğinize emin misiniz?')) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/presentation?type=${activeDeck}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        showNotification('success', 'Orijinal hazır PDF sunumu geri yüklendi.');
        setPreviewVersion(Date.now());
        await fetchMeta();
      } else {
        showNotification('error', 'Sıfırlama işlemi başarısız oldu.');
      }
    } catch (err) {
      showNotification('error', 'Sunucu bağlantı hatası oluştu.');
    }
  };

  const currentInfo = meta ? meta[activeDeck] : null;
  const pdfStreamUrl = `/api/presentation/file?type=${activeDeck}&v=${previewVersion}`;
  const publicSunumUrl = activeDeck === 'rotary' ? '/sunum?deck=rotary' : '/sunum';

  const formatFileSize = (bytes: number) => {
    if (!bytes) return '0 KB';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const formatDate = (isoString: string) => {
    if (!isoString) return '-';
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString('tr-TR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return isoString;
    }
  };

  return (
    <>
      <AdminHeader
        title="PDF Sunum Dosyaları Yönetimi"
        subtitle="Web sitesi ve sunum ekranlarında gösterilen hazır PDF sunum dosyalarını yükleyin, canlı önizleyin veya yenileyin."
        onRefresh={fetchMeta}
        isRefreshing={isLoading}
      />

      <main className="p-6 md:p-8 space-y-8 max-w-6xl">
        {/* Toast Bildirim */}
        {notification && (
          <div
            className={`p-4 rounded-2xl flex items-center justify-between text-xs font-bold shadow-lg animate-fade-in ${
              notification.type === 'success'
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                : 'bg-rose-50 border border-rose-200 text-rose-700'
            }`}
          >
            <span>{notification.text}</span>
            <button onClick={() => setNotification(null)} className="opacity-60 hover:opacity-100 cursor-pointer">✕</button>
          </div>
        )}

        {/* Sunum Türü Seçici Sekmeler (Genel vs Rotary) */}
        <div className="bg-white rounded-3xl p-2 border border-slate-200 shadow-sm flex items-center gap-2">
          <button
            onClick={() => {
              setActiveDeck('general');
              setSelectedFile(null);
            }}
            className={`flex-1 py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
              activeDeck === 'general'
                ? 'bg-[#0B1E3B] text-white shadow-md'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <FileText size={17} className={activeDeck === 'general' ? 'text-sky-400' : 'text-slate-400'} />
            <span>Genel Kurumsal Sunum (DijitalBüyükanne)</span>
            {meta?.general?.isCustom && (
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono border border-emerald-400/30">
                Özel Yüklü
              </span>
            )}
          </button>

          <button
            onClick={() => {
              setActiveDeck('rotary');
              setSelectedFile(null);
            }}
            className={`flex-1 py-3 px-4 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
              activeDeck === 'rotary'
                ? 'bg-[#17458F] text-[#F7A81B] shadow-md'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Layers size={17} className={activeDeck === 'rotary' ? 'text-[#F7A81B]' : 'text-slate-400'} />
            <span>Rotary Özel Sunumu (Anne ve Çocuk Sağlığı)</span>
            {meta?.rotary?.isCustom && (
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono border border-emerald-400/30">
                Özel Yüklü
              </span>
            )}
          </button>
        </div>

        {/* Aktif Sunum Bilgisi & Eylemler Kartı */}
        <div className="bg-gradient-to-br from-[#0B1E3B] via-[#0E2A54] to-[#0A1A33] text-white rounded-3xl p-6 md:p-8 border border-white/10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/10 text-sky-300 border border-white/15 text-[11px] font-mono font-bold uppercase tracking-wider">
                  {activeDeck === 'rotary' ? 'ROTARY ÖZEL SUNUMU' : 'GENEL TANITIM DOSYASI'}
                </span>
                {currentInfo?.isCustom ? (
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold flex items-center gap-1.5">
                    <CheckCircle2 size={13} />
                    <span>Yönetim Panelinden Yüklenmiş Özel PDF Yayında</span>
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full bg-sky-400/20 text-sky-200 border border-sky-400/30 text-[11px] font-bold flex items-center gap-1.5">
                    <Sparkles size={13} />
                    <span>Sistem Tarafından Hazırlanan Orijinal Hazır PDF Yayında</span>
                  </span>
                )}
              </div>

              <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                {currentInfo?.title || 'DijitalBüyükanne Sunum Dosyası'}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs text-white/70 pt-1">
                <span className="flex items-center gap-1.5">
                  <FileCheck size={14} className="text-sky-400" />
                  <strong className="text-white">{currentInfo?.filename || 'sunum.pdf'}</strong>
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5">
                  <HardDrive size={14} className="text-teal-400" />
                  <span>Boyut: {formatFileSize(currentInfo?.size || 0)}</span>
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-amber-400" />
                  <span>Son Güncelleme: {formatDate(currentInfo?.lastUpdated || '')}</span>
                </span>
              </div>
            </div>

            {/* Eylem Butonları */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={pdfStreamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer border border-white/15"
                title="Yeni Sekmede Tam Ekran Aç"
              >
                <Maximize2 size={14} />
                <span>Yeni Sekmede Aç</span>
              </a>

              <a
                href={`/api/presentation/file?type=${activeDeck}&download=true`}
                className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-sky-500/25"
                download={currentInfo?.filename || 'sunum.pdf'}
              >
                <Download size={14} />
                <span>PDF İndir</span>
              </a>

              <Link
                href={publicSunumUrl}
                target="_blank"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-coral to-[#e8634f] hover:from-coral-600 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-coral/25"
              >
                <ExternalLink size={14} />
                <span>Canlı Sayfayı Gör</span>
              </Link>

              {currentInfo?.isCustom && (
                <button
                  onClick={handleResetToDefault}
                  className="px-3.5 py-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-400/30 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                  title="Yüklediğiniz PDF'i siler ve hazır orijinal PDF'e döner"
                >
                  <RotateCcw size={13} />
                  <span>Varsayılana Sıfırla</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* İki Kolon: 1. Yeni PDF Yükleme Formu  |  2. Bilgilendirme */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Yükleme Formu */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                <UploadCloud size={18} className="text-sky-500" />
                <span>Bilgisayarınızdan Hazır PDF Sunumu Yükleyin</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Kendi hazırladığınız slayt veya sunum dosyasını PDF olarak yükleyin. Yüklediğiniz an sitedeki tüm &ldquo;PDF Sunum&rdquo; ve &ldquo;PDF İndir&rdquo; butonlarında bu dosya açılacaktır.
              </p>
            </div>

            <form onSubmit={handleUpload} className="space-y-5">
              {/* Dropzone */}
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-3xl p-8 text-center transition-all cursor-pointer ${
                  selectedFile
                    ? 'border-sky-500 bg-sky-50/60 ring-2 ring-sky-500/20'
                    : 'border-slate-300 hover:border-sky-400 bg-slate-50/60 hover:bg-white'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />

                <div className="w-16 h-16 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-3 shadow-inner">
                  {selectedFile ? <FileCheck size={32} /> : <UploadCloud size={32} />}
                </div>

                {selectedFile ? (
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-800">{selectedFile.name}</p>
                    <p className="text-xs text-sky-600 font-semibold">{formatFileSize(selectedFile.size)} &bull; Yüklemeye Hazır</p>
                    <p className="text-[11px] text-slate-400 pt-2">Farklı bir dosya seçmek için tıklayın veya sürükleyin</p>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-slate-700">PDF dosyanızı buraya sürükleyip bırakın</p>
                    <p className="text-xs text-slate-400">veya bilgisayarınızdan dosya seçmek için <span className="text-sky-600 font-bold underline">tıklayın</span></p>
                    <p className="text-[11px] text-slate-400 pt-2">Maksimum dosya boyutu: 30 MB &bull; Yalnızca .PDF</p>
                  </div>
                )}
              </div>

              {/* İsteğe Bağlı Sunum Başlığı */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Sunum Başlığı / Açıklaması (İsteğe Bağlı)
                </label>
                <input
                  type="text"
                  placeholder={activeDeck === 'rotary' ? 'Rotary 2430. Bölge Anne & Çocuk Sağlığı Projesi' : 'DijitalBüyükanne Kurumsal Sunum Dosyası (2026)'}
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>

              {/* Yükle Butonu */}
              <button
                type="submit"
                disabled={!selectedFile || isUploading}
                className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 disabled:opacity-50 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 transition-all cursor-pointer"
              >
                <UploadCloud size={18} />
                <span>{isUploading ? 'PDF Yükleniyor ve Canlıya Alınıyor...' : 'PDF Sunumunu Canlıya Al'}</span>
              </button>
            </form>
          </div>

          {/* Sağ Kolon: Bilgi ve Özellikler */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Info size={16} className="text-[#0284C7]" />
                <span>Hazır PDF Sunumu Nasıl Çalışır?</span>
              </h4>

              <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
                <div className="p-3 rounded-2xl bg-sky-50/80 border border-sky-100 flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-sky-500 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">1</div>
                  <div>
                    <strong className="text-slate-800">Tek Tıkla Canlı Güncelleme:</strong>
                    <p className="text-[11px] text-slate-500 mt-0.5">Yüklediğiniz PDF anında web sitesinin tüm sunum butonlarında ve /sunum sayfasında aktif olur.</p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-teal-50/80 border border-teal-100 flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-teal-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">2</div>
                  <div>
                    <strong className="text-slate-800">Gömülü PDF Görüntüleyici:</strong>
                    <p className="text-[11px] text-slate-500 mt-0.5">Ziyaretçiler PDF dosyasını indirmeden önce tarayıcıda sayfa sayfa slayt gibi inceleyebilir veya tek tıkla cihazına indirebilir.</p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-100 flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-amber-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">3</div>
                  <div>
                    <strong className="text-slate-800">İki Farklı Sunum Desteği:</strong>
                    <p className="text-[11px] text-slate-500 mt-0.5">Genel kurumsal sunum ve Rotary özel sunumu için iki ayrı PDF dosyasını bağımsız yönetebilirsiniz.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-3 text-xs text-slate-600">
              <h5 className="font-bold text-slate-800">Sunum Formatı Tavsiyeleri:</h5>
              <ul className="list-disc list-inside space-y-1.5 text-[11px] text-slate-500">
                <li>Yatay (Landscape 16:9 veya A4) slayt düzeni en iyi görünümü sunar.</li>
                <li>PowerPoint veya Keynote üzerinden &ldquo;PDF Olarak Dışa Aktar&rdquo; seçeneğini kullanabilirsiniz.</li>
                <li>Dilediğiniz an &ldquo;Varsayılana Sıfırla&rdquo; butonuyla hazır şablona dönebilirsiniz.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Canlı Gömülü PDF Önizleme Penceresi */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
                <Eye size={18} className="text-sky-500" />
                <span>Canlı PDF Sunumu Önizleme Ekranı</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Şu anda sitede ziyaretçilere gösterilen aktif PDF sunumu aşağıda canlı olarak görüntülenmektedir.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={pdfStreamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-bold flex items-center gap-1.5 transition-all"
              >
                <Maximize2 size={13} />
                <span>Tam Boyut</span>
              </a>
              <a
                href={`/api/presentation/file?type=${activeDeck}&download=true`}
                className="px-3.5 py-1.5 rounded-xl bg-sky-50 text-sky-600 hover:bg-sky-100 border border-sky-200 text-xs font-bold flex items-center gap-1.5 transition-all"
                download={currentInfo?.filename || 'sunum.pdf'}
              >
                <Download size={13} />
                <span>İndir</span>
              </a>
            </div>
          </div>

          {/* Responsive Embedded PDF Viewer Frame */}
          <div className="w-full h-[650px] md:h-[750px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner relative">
            <iframe
              key={`${activeDeck}-${previewVersion}`}
              src={`${pdfStreamUrl}#toolbar=1&navpanes=0&scrollbar=1`}
              className="w-full h-full border-0"
              title="Canlı PDF Sunum Önizlemesi"
            />
          </div>
        </div>
      </main>
    </>
  );
}
