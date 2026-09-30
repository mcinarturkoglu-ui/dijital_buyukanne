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
  RotateCcw,
  Sparkles,
  Layers,
  FileCheck,
  Clock,
  HardDrive,
  Info,
  Maximize2,
  Trash2
} from 'lucide-react';
import {
  savePdfToStorage,
  getPdfFromStorage,
  removePdfFromStorage,
  StoredPdf
} from '@/lib/pdf-storage';

interface PresentationInfo {
  title: string;
  filename: string;
  size: number;
  lastUpdated: string;
  isCustom: boolean;
  downloadUrl: string;
}

export default function AdminSunumPage() {
  const [activeDeck, setActiveDeck] = useState<'general' | 'rotary'>('general');
  const [meta, setMeta] = useState<Record<string, PresentationInfo> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  // Client-side IndexedDB stored PDF
  const [localStoredPdf, setLocalStoredPdf] = useState<StoredPdf | null>(null);
  const [blobPreviewUrl, setBlobPreviewUrl] = useState<string | null>(null);
  const [previewVersion, setPreviewVersion] = useState<number>(Date.now());
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load metadata from API & local storage
  const loadData = async () => {
    setIsLoading(true);
    try {
      // 1. Fetch server metadata
      const res = await fetch('/api/admin/presentation');
      if (res.ok) {
        const data = await res.json();
        setMeta(data);
      }

      // 2. Check client-side IndexedDB for local custom PDF
      const stored = await getPdfFromStorage(activeDeck);
      setLocalStoredPdf(stored);
      if (stored) {
        if (blobPreviewUrl) URL.revokeObjectURL(blobPreviewUrl);
        const url = URL.createObjectURL(stored.blob);
        setBlobPreviewUrl(url);
      } else {
        if (blobPreviewUrl) URL.revokeObjectURL(blobPreviewUrl);
        setBlobPreviewUrl(null);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    return () => {
      if (blobPreviewUrl) URL.revokeObjectURL(blobPreviewUrl);
    };
  }, [activeDeck]);

  const showNotification = (type: 'success' | 'error', text: string) => {
    setNotification({ type, text });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
        showNotification('error', 'Lütfen yalnızca geçerli bir .pdf dosyası seçin.');
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
        showNotification('error', 'Lütfen yalnızca geçerli bir .pdf dosyası seçin.');
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
      // 1. Save directly into browser's IndexedDB (100% persistent in this browser)
      await savePdfToStorage(activeDeck, selectedFile, selectedFile.name);

      // Create object URL for instant preview
      if (blobPreviewUrl) URL.revokeObjectURL(blobPreviewUrl);
      const newUrl = URL.createObjectURL(selectedFile);
      setBlobPreviewUrl(newUrl);
      setLocalStoredPdf({
        blob: selectedFile,
        filename: selectedFile.name,
        size: selectedFile.size,
        uploadedAt: new Date().toISOString(),
        type: activeDeck,
      });

      // 2. Also send to server API for backend storage
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('type', activeDeck);

      await fetch('/api/admin/presentation', {
        method: 'POST',
        body: formData,
      });

      showNotification('success', `"${selectedFile.name}" başarıyla yüklendi ve yayına alındı!`);
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      setPreviewVersion(Date.now());
      
      // Refresh server meta
      const res = await fetch('/api/admin/presentation');
      if (res.ok) setMeta(await res.json());

    } catch (err) {
      console.error(err);
      showNotification('error', 'PDF kaydedilirken bir hata oluştu.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleResetToDefault = async () => {
    if (!window.confirm('Özel yüklediğiniz PDF sunumunu silip hazır orijinal sistem sunumuna geri dönmek istediğinize emin misiniz?')) {
      return;
    }

    try {
      // Remove from IndexedDB
      await removePdfFromStorage(activeDeck);
      if (blobPreviewUrl) URL.revokeObjectURL(blobPreviewUrl);
      setBlobPreviewUrl(null);
      setLocalStoredPdf(null);

      // Call server reset
      await fetch(`/api/admin/presentation?type=${activeDeck}`, {
        method: 'DELETE',
      });

      showNotification('success', 'Sunum dosyası orijinal varsayılan haline sıfırlandı.');
      setPreviewVersion(Date.now());
      
      const res = await fetch('/api/admin/presentation');
      if (res.ok) setMeta(await res.json());

    } catch (err) {
      showNotification('error', 'Sıfırlama işlemi sırasında hata oluştu.');
    }
  };

  const currentInfo = meta ? meta[activeDeck] : null;
  const isCustomActive = !!localStoredPdf || !!currentInfo?.isCustom;
  const activeFileName = localStoredPdf?.filename || currentInfo?.filename || (activeDeck === 'rotary' ? 'rotary-dijital-buyukanne-sunum.pdf' : 'dijital-buyukanne-sunum.pdf');
  const activeFileSize = localStoredPdf?.size || currentInfo?.size || 0;
  
  // Active viewer URL: prefers client Blob URL if exists, else server API
  const activePdfUrl = blobPreviewUrl || `/api/presentation/file?type=${activeDeck}&v=${previewVersion}`;
  const publicSunumUrl = activeDeck === 'rotary' ? '/sunum?deck=rotary' : '/sunum';

  const formatFileSize = (bytes: number) => {
    if (!bytes) return '0 KB';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <>
      <AdminHeader
        title="PDF Sunum Dosyaları Yönetimi"
        subtitle="Yalnızca admin tarafından PDF sunumu yüklenebilir. Sitedeki ziyaretçiler ve misafirler sunumu sadece inceleyebilir, indirme seçenekleri kapalıdır."
        onRefresh={loadData}
        isRefreshing={isLoading}
      />

      <main className="p-4 sm:p-6 md:p-8 space-y-6 max-w-5xl mx-auto">
        {/* Bildirim Çubuğu */}
        {notification && (
          <div
            className={`p-4 rounded-2xl flex items-center justify-between text-xs sm:text-sm font-bold shadow-md animate-fade-in ${
              notification.type === 'success'
                ? 'bg-emerald-50 border border-emerald-300 text-emerald-800'
                : 'bg-rose-50 border border-rose-300 text-rose-800'
            }`}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className={notification.type === 'success' ? 'text-emerald-600' : 'text-rose-600'} />
              <span>{notification.text}</span>
            </div>
            <button onClick={() => setNotification(null)} className="opacity-60 hover:opacity-100 cursor-pointer p-1">✕</button>
          </div>
        )}

        {/* 1. Sunum Türü Seçici (Sadece 2 Net Seçenek) */}
        <div className="bg-white rounded-2xl p-1.5 border border-slate-200 shadow-sm flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setActiveDeck('general');
              setSelectedFile(null);
            }}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeDeck === 'general'
                ? 'bg-[#0B1E3B] text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <FileText size={16} className={activeDeck === 'general' ? 'text-sky-400' : 'text-slate-400'} />
            <span>Genel Kurumsal Sunum</span>
            {isCustomActive && activeDeck === 'general' && (
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono border border-emerald-400/30">
                Özel PDF
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveDeck('rotary');
              setSelectedFile(null);
            }}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeDeck === 'rotary'
                ? 'bg-[#17458F] text-[#F7A81B] shadow-sm font-black'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Layers size={16} className={activeDeck === 'rotary' ? 'text-[#F7A81B]' : 'text-slate-400'} />
            <span>Rotary Özel Sunumu</span>
            {isCustomActive && activeDeck === 'rotary' && (
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono border border-emerald-400/30">
                Özel PDF
              </span>
            )}
          </button>
        </div>

        {/* 2. Aktif Sunum Durumu Kartı */}
        <div className="bg-gradient-to-r from-[#0B1E3B] via-[#0E2A54] to-[#0A1A33] text-white rounded-3xl p-5 sm:p-6 border border-white/10 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-sky-300 border border-white/15 text-[10px] font-mono font-bold uppercase tracking-wider">
                {activeDeck === 'rotary' ? 'ROTARY ÖZEL SUNUMU' : 'GENEL KURUMSAL SUNUM'}
              </span>
              {isCustomActive ? (
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} />
                  <span>Sizin Yüklediğiniz PDF Yayında</span>
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full bg-sky-400/20 text-sky-200 border border-sky-400/30 text-[11px] font-bold flex items-center gap-1">
                  <Sparkles size={12} />
                  <span>Orijinal Sistem Sunumu Yayında</span>
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-white/80">
              <span className="font-bold text-white flex items-center gap-1.5">
                <FileCheck size={15} className="text-sky-400" />
                <span>{activeFileName}</span>
              </span>
              <span>&bull;</span>
              <span>{formatFileSize(activeFileSize)}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={activePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer border border-white/15"
            >
              <Maximize2 size={13} />
              <span>Ayrı Sekmede Aç</span>
            </a>

            <a
              href={activePdfUrl}
              download={activeFileName}
              className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
            >
              <Download size={13} />
              <span>İndir</span>
            </a>

            <Link
              href={publicSunumUrl}
              target="_blank"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-coral to-[#e8634f] hover:from-coral-600 text-white font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
            >
              <ExternalLink size={13} />
              <span>Sitedeki Sayfayı Gör</span>
            </Link>

            {isCustomActive && (
              <button
                type="button"
                onClick={handleResetToDefault}
                className="px-3 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-400/30 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ml-1"
                title="Yüklediğiniz PDF'i kaldırıp orijinal varsayılan sunuma döner"
              >
                <RotateCcw size={13} />
                <span>Varsayılana Dön</span>
              </button>
            )}
          </div>
        </div>

        {/* 3. Sade & Net PDF Yükleme Kutusu */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <UploadCloud size={18} className="text-sky-500" />
                <span>Bilgisayarınızdan Hazır PDF Sunumu Yükleyin</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Kendi hazırladığınız slayt dosyasını (.pdf) yükleyin. Sitedeki sunum ekranı ve indirme butonları doğrudan bu dosyanızı gösterecektir.
              </p>
            </div>
          </div>

          <form onSubmit={handleUpload} className="space-y-4">
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all cursor-pointer ${
                selectedFile
                  ? 'border-sky-500 bg-sky-50/70 ring-2 ring-sky-500/20'
                  : 'border-slate-300 hover:border-sky-400 bg-slate-50/70 hover:bg-white'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />

              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto mb-2 shadow-inner">
                {selectedFile ? <FileCheck size={24} /> : <UploadCloud size={24} />}
              </div>

              {selectedFile ? (
                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-800">{selectedFile.name}</p>
                  <p className="text-xs text-sky-600 font-semibold">{formatFileSize(selectedFile.size)} &bull; Yüklemeye Hazır</p>
                  <p className="text-[11px] text-slate-400 pt-1">Değiştirmek için tıklayın veya yeni dosya sürükleyin</p>
                </div>
              ) : (
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm font-bold text-slate-700">PDF dosyanızı buraya sürükleyin veya <span className="text-sky-600 underline">dosya seçin</span></p>
                  <p className="text-[11px] text-slate-400">Yalnızca .PDF dosyaları desteklenir</p>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={!selectedFile || isUploading}
              className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-600 disabled:opacity-40 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <UploadCloud size={16} />
              <span>{isUploading ? 'PDF Yükleniyor ve Canlıya Alınıyor...' : 'PDF Sunumunu Canlıya Al'}</span>
            </button>
          </form>
        </div>

        {/* 4. Canlı PDF Önizleme Penceresi */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
              <Eye size={16} className="text-sky-500" />
              <span>Canlı PDF Sunumu Önizlemesi</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              {activeFileName}
            </span>
          </div>

          <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-inner">
            <iframe
              key={`${activeDeck}-${previewVersion}-${blobPreviewUrl ? 'blob' : 'api'}`}
              src={`${activePdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
              className="w-full h-full border-0"
              title="Canlı PDF Önizleme"
            />
          </div>
        </div>
      </main>
    </>
  );
}
