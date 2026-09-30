'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import RotarySlideDeck, { ROTARY_SLIDES, RotaryWheel } from '@/components/rotary/RotarySlideDeck';
import {
  Printer,
  ChevronLeft,
  ChevronRight,
  Download,
  ArrowLeft,
  Settings,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Heart,
  Activity,
  Users,
  Building2,
  Award,
  BookOpen,
  Lock,
  Stethoscope,
  Clock,
  TrendingUp,
  FileText,
  ScanLine,
  Baby,
  Moon,
  Eye,
  Layers,
  Scale,
  MessageCircle,
  HelpCircle,
  Cpu,
  Smile,
  RotateCw,
  Footprints,
  Trash2,
  RotateCcw,
  SlidersHorizontal,
  Check,
  X,
  MapPin,
  Video,
  Volume2,
  AlertCircle,
  Share2,
  UploadCloud,
  Maximize2
} from 'lucide-react';
import defaultContent from '@/data/site-content.json';
import supportersData from '@/data/supporters.json';

// ─────────────────────────────────────────────────────────────────────────────
// 16 MODÜLER SLAYT TANIMI (ANA SAYFANIN BİREBİR TAMAMI)
// ─────────────────────────────────────────────────────────────────────────────
interface SlideDef {
  id: string;
  chapter: string;
  category: string;
  title: string;
  tag: 'kurumsal' | 'klinik' | 'genel';
}

const ALL_SLIDES: SlideDef[] = [
  { id: 'slide-hero', chapter: 'BÖLÜM 01', category: 'EKOSİSTEM VE VİZYON', title: 'Kapak: Her Bebeğin Bir Dijital Büyükannesi Olsun', tag: 'genel' },
  { id: 'slide-pulse', chapter: 'BÖLÜM 01 EK', category: 'CANLI NABIZ & STANDARTLAR', title: '12.400+ Aile Canlı Saha Göstergeleri & Resmî Standartlar', tag: 'kurumsal' },
  { id: 'slide-timeline', chapter: 'BÖLÜM 02', category: 'NÖROGELİŞİMSEL DÖNGÜ', title: 'İlk 24 Ay: Büyümenin 6 Kritik Kilometre Taşı', tag: 'klinik' },
  { id: 'slide-compare', chapter: 'BÖLÜM 02 EK', category: 'KARAR VE ETKİ MATRİSİ', title: 'Geleneksel Çaresizlik vs. DijitalBüyükanne (5 Boyut)', tag: 'genel' },
  { id: 'slide-protocols-overview', chapter: 'BÖLÜM 03', category: 'KLİNİK TARAMA PROTOKOLLERİ', title: 'Yapay Zekâ Destekli 3 Akıllı Tarama Protokolü Çerçevesi', tag: 'klinik' },
  { id: 'slide-motion', chapter: 'BÖLÜM 03 DETAY', category: '0–6 AY HAREKET ANALİZİ', title: 'Nörolojik ve Kas Hastalıkları & 18 Eklem Kinematik Video Taraması', tag: 'klinik' },
  { id: 'slide-skin-stool', chapter: 'BÖLÜM 03 DETAY', category: 'CİLT & BEZ/DIŞKI ANALİZİ', title: '41 Pediatrik Cilt Tablosu & DSÖ Renk Kartı Taraması', tag: 'klinik' },
  { id: 'slide-assistant', chapter: 'BÖLÜM 04', category: 'KESİNTİSİZ DESTEK EKOSİSTEMİ', title: 'Gece 03:00 Büyükanne Şefkati & Sesli Rehberlik', tag: 'genel' },
  { id: 'slide-human-ai', chapter: 'BÖLÜM 04 EK', category: 'İNSAN + AI DENGE RADARI', title: 'Klinik Güvence: AI Ön Tarar, Hekim Karar Verir', tag: 'klinik' },
  { id: 'slide-inclusive', chapter: 'BÖLÜM 05', category: 'KAPSAYICI SAĞLIK & ÖZEL GEREKSİNİM', title: 'Prematüre & Serebral Palsi 3 Aşamalı Yolculuk Modeli', tag: 'klinik' },
  { id: 'slide-scientific-board', chapter: 'BÖLÜM 05 EK', category: 'BİLİMSEL GÜVENCE VE DANIŞMA KURULU', title: 'Bağımsız Danışman Hekimler & 4 Klinik Standart', tag: 'klinik' },
  { id: 'slide-case-studies', chapter: 'BÖLÜM 05 EK', category: 'GERÇEK HAYATTAN ETKİ HİKAYELERİ', title: 'Zeynep, Kaan ve Can Bebeğin Başarı Hikayeleri', tag: 'genel' },
  { id: 'slide-impact-calc', chapter: 'BÖLÜM 06', category: 'KANITA DAYALI SOSYAL ETKİ', title: '1.000 Bebeklik Projede Kanıta Dayalı Resmî Bilanço', tag: 'kurumsal' },
  { id: 'slide-institutions', chapter: 'BÖLÜM 06 EK', category: 'KURUMSAL SOSYAL BELEDİYECİLİK', title: 'White-Label Mobil Altyapı & 11 Maddelik Protokol', tag: 'kurumsal' },
  { id: 'slide-supporters', chapter: 'BÖLÜM 06 EK', category: 'DESTEKÇİLERİMİZ', title: 'Destekçilerimiz & Aktif Kamu Protokolleri', tag: 'kurumsal' },
  { id: 'slide-final-cta', chapter: 'KAPANIŞ', category: 'İŞ BİRLİĞİ VE İMZA ÇAĞRISI', title: 'Her Bebeğe Şefkat & 24 Saatte Hazır Protokol Teslimi', tag: 'genel' },
];

function PresentationDeckInner() {
  const searchParams = useSearchParams();
  const initialDeck = searchParams.get('deck') === 'rotary' ? 'rotary' : 'general';
  const [deckMode, setDeckMode] = useState<'general' | 'rotary'>(initialDeck);

  const [content, setContent] = useState<any>(defaultContent);
  const [supportersList, setSupportersList] = useState<any[]>(supportersData.supporters || []);
  const initialMode = (searchParams.get('mode') as any) || 'ready-pdf';
  const [viewMode, setViewMode] = useState<'ready-pdf' | 'all' | 'single'>(initialMode);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Slayt Seçim & Çıkarma Durumu (Kullanıcı hangi slaytları çıkarırsa burada tutulur)
  const [excludedSlideIds, setExcludedSlideIds] = useState<string[]>([]);
  const [showManager, setShowManager] = useState(false);

  // URL'deki deck parametresi değişirse deckMode'u senkronize et
  useEffect(() => {
    const q = searchParams.get('deck');
    if (q === 'rotary') {
      setDeckMode('rotary');
      setExcludedSlideIds([]);
      setCurrentSlideIndex(0);
    }
  }, [searchParams]);

  // Admin CMS'ten ve localStorage'dan en güncel verileri çek
  useEffect(() => {
    // 1. LocalStorage desteği
    try {
      const localContent = localStorage.getItem('dijitalbuyukanne_site_content');
      if (localContent) {
        const parsed = JSON.parse(localContent);
        if (parsed && typeof parsed === 'object') {
          setContent((prev: any) => ({ ...prev, ...parsed }));
        }
      }

      const deletedIds: string[] = JSON.parse(localStorage.getItem('dijitalbuyukanne_deleted_supporter_ids') || '[]');
      const localSupporters = localStorage.getItem('dijitalbuyukanne_admin_supporters');
      if (localSupporters) {
        const parsedSupp = JSON.parse(localSupporters);
        if (Array.isArray(parsedSupp)) {
          setSupportersList(parsedSupp.filter((s: any) => !deletedIds.includes(s.id)));
        }
      }
    } catch {}

    // 2. Sunucu API senkronizasyonu
    fetch('/api/admin/content')
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          setContent((prev: any) => ({ ...prev, ...data }));
        }
      })
      .catch((err) => console.log('Sunum içeriği varsayılan JSON verisinden yüklendi', err));

    fetch('/api/admin/supporters')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.supporters && Array.isArray(data.supporters)) {
          try {
            const deletedIds: string[] = JSON.parse(localStorage.getItem('dijitalbuyukanne_deleted_supporter_ids') || '[]');
            const filtered = data.supporters.filter((s: any) => !deletedIds.includes(s.id));
            if (!localStorage.getItem('dijitalbuyukanne_admin_supporters')) {
              setSupportersList(filtered);
            }
          } catch {
            setSupportersList(data.supporters);
          }
        }
      })
      .catch((err) => console.log('Destekçiler varsayılan JSON verisinden yüklendi', err));
  }, []);

  // Aktif Slaytlar Listesi (Dinamik olarak filtrelenir ve sırayla numaralandırılır)
  const currentSlidesList = deckMode === 'rotary' ? ROTARY_SLIDES : ALL_SLIDES;
  const activeSlides = currentSlidesList.filter((s) => !excludedSlideIds.includes(s.id));
  const totalActive = activeSlides.length;

  const switchDeck = (mode: 'general' | 'rotary') => {
    setDeckMode(mode);
    setExcludedSlideIds([]);
    setCurrentSlideIndex(0);
  };

  const toggleSlideExclusion = (id: string) => {
    setExcludedSlideIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        // En az 1 slayt kalması için koruma
        if (prev.length >= currentSlidesList.length - 1) return prev;
        return [...prev, id];
      }
    });
  };

  // Hazır Şablon Filtreleri (Genel ve Rotary Özel)
  const applyPreset = (preset: 'all' | 'kurumsal' | 'klinik' | 'ozet' | 'kulup' | 'bolge') => {
    if (preset === 'all') {
      setExcludedSlideIds([]);
      return;
    }

    if (deckMode === 'rotary') {
      if (preset === 'kulup') {
        const allowed = ['rotary-hero', 'rotary-polio', 'rotary-4way', 'rotary-workflow', 'rotary-gift-kit', 'rotary-case-studies', 'rotary-packages', 'rotary-cta'];
        setExcludedSlideIds(ROTARY_SLIDES.filter((s) => !allowed.includes(s.id)).map((s) => s.id));
      } else if (preset === 'bolge') {
        const allowed = ['rotary-hero', 'rotary-polio', 'rotary-4way', 'rotary-workflow', 'rotary-motion', 'rotary-case-studies', 'rotary-simulator', 'rotary-packages', 'rotary-cta'];
        setExcludedSlideIds(ROTARY_SLIDES.filter((s) => !allowed.includes(s.id)).map((s) => s.id));
      } else if (preset === 'klinik') {
        const allowed = ['rotary-hero', 'rotary-4way', 'rotary-motion', 'rotary-skin-stool', 'rotary-assistant', 'rotary-case-studies', 'rotary-governance', 'rotary-cta'];
        setExcludedSlideIds(ROTARY_SLIDES.filter((s) => !allowed.includes(s.id)).map((s) => s.id));
      }
    } else {
      if (preset === 'kurumsal') {
        const kurumsalAllowed = [
          'slide-hero',
          'slide-pulse',
          'slide-compare',
          'slide-protocols-overview',
          'slide-assistant',
          'slide-impact-calc',
          'slide-institutions',
          'slide-supporters',
          'slide-final-cta',
        ];
        setExcludedSlideIds(ALL_SLIDES.filter((s) => !kurumsalAllowed.includes(s.id)).map((s) => s.id));
      } else if (preset === 'klinik') {
        const klinikAllowed = [
          'slide-hero',
          'slide-timeline',
          'slide-compare',
          'slide-protocols-overview',
          'slide-motion',
          'slide-skin-stool',
          'slide-human-ai',
          'slide-inclusive',
          'slide-scientific-board',
          'slide-case-studies',
          'slide-final-cta',
        ];
        setExcludedSlideIds(ALL_SLIDES.filter((s) => !klinikAllowed.includes(s.id)).map((s) => s.id));
      } else if (preset === 'ozet') {
        const ozetAllowed = [
          'slide-hero',
          'slide-pulse',
          'slide-compare',
          'slide-protocols-overview',
          'slide-impact-calc',
          'slide-institutions',
          'slide-final-cta',
        ];
        setExcludedSlideIds(ALL_SLIDES.filter((s) => !ozetAllowed.includes(s.id)).map((s) => s.id));
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Güvenli Slayt İndeksi
  const safeCurrentIndex = Math.min(currentSlideIndex, Math.max(0, totalActive - 1));

  // CMS Veri Bağlantıları
  const hero = content?.hero || defaultContent.hero;
  const ribbons = content?.chapterRibbons || defaultContent.chapterRibbons;
  const motion = content?.motionAnalysis || defaultContent.motionAnalysis;
  const skin = content?.skinAnalysis || defaultContent.skinAnalysis;
  const stool = content?.stoolAnalysis || defaultContent.stoolAnalysis;
  const assistant = content?.digitalAssistant || defaultContent.digitalAssistant;
  const institutions = content?.institutionsHero || defaultContent.institutionsHero;
  const finalCTA = content?.finalCTA || defaultContent.finalCTA;
  const board = content?.scientificBoard || (defaultContent as any).scientificBoard;
  const caseStudies = content?.caseStudies || (defaultContent as any).caseStudies;

  // Destekçiler: Web sitesindekiyle (SupportersPreview.tsx) birebir dinamik mantık
  let displaySupporters = (supportersList || []).filter((s: any) => s.active && s.featured);
  if (displaySupporters.length === 0) {
    displaySupporters = (supportersList || []).filter((s: any) => s.active);
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-900 selection:bg-sky-500 selection:text-white">
      
      {/* ─────────────────────────────────────────────────────────────
          1. EKRAN ÜSTÜ KONTROL VE SLAYT YÖNETİM ÇUBUĞU (no-print)
          ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[#0B1E3B] border-b border-white/10 px-4 py-3 text-white shadow-2xl no-print">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Sol Kısım: Logo ve Başlık */}
          <div className="flex items-center gap-3">
            <Link
              href={deckMode === 'rotary' ? "/rotary" : "/"}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
              title={deckMode === 'rotary' ? "Rotary Sayfasına Dön" : "Ana Sayfaya Dön"}
            >
              <ArrowLeft size={18} />
            </Link>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center p-1">
                {deckMode === 'rotary' ? (
                  <RotaryWheel className="w-5 h-5 text-[#F7A81B]" />
                ) : (
                  <Image
                    src="/images/mascot.png"
                    alt="Maskot"
                    width={28}
                    height={28}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <div>
                <span className="font-extrabold text-xs sm:text-sm text-white block leading-none">
                  {deckMode === 'rotary'
                    ? 'Rotary & DijitalBüyükanne Resmî Sunum Dosyası'
                    : 'DijitalBüyükanne Kurumsal Sunum & İhale / Protokol Dosyası'}
                </span>
                <span className="text-[10px] sm:text-[11px] text-sky-300 font-mono">
                  {deckMode === 'rotary' ? 'Rotary Anne ve Çocuk Sağlığı Projesi' : 'Ana Sayfa Birebir Akışı'} &bull; {totalActive} / {currentSlidesList.length} Slayt Seçili
                </span>
              </div>
            </div>
          </div>

          {/* Orta Kısım: Sunum Türü Seçici (Genel vs Rotary) + Slayt Seçim Butonu */}
          <div className="flex items-center gap-2">
            {/* Deck Toggle Switch */}
            <div className="flex items-center p-1 rounded-xl bg-white/10 border border-white/15">
              <button
                onClick={() => switchDeck('general')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  deckMode === 'general'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Genel (16)
              </button>
              <button
                onClick={() => switchDeck('rotary')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  deckMode === 'rotary'
                    ? 'bg-[#F7A81B] text-[#17458F] shadow-sm font-black'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <RotaryWheel className="w-3.5 h-3.5 text-[#F7A81B]" />
                <span>Rotary Özel (13)</span>
              </button>
            </div>

            <button
              onClick={() => setShowManager(!showManager)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all cursor-pointer ${
                showManager || excludedSlideIds.length > 0
                  ? 'bg-amber-500/20 text-amber-300 border-amber-400/40 shadow-sm'
                  : 'bg-white/10 hover:bg-white/20 text-white border-white/15'
              }`}
            >
              <SlidersHorizontal size={14} className={excludedSlideIds.length > 0 ? 'text-amber-400' : ''} />
              <span className="hidden md:inline">Slaytları Özelleştir</span>
              <span className="px-1.5 py-0.5 rounded-md bg-white/20 font-mono text-[10px]">
                {totalActive}/{currentSlidesList.length}
              </span>
            </button>

            {excludedSlideIds.length > 0 && (
              <button
                onClick={() => setExcludedSlideIds([])}
                className="px-2.5 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 text-xs font-bold flex items-center gap-1 border border-rose-500/30 cursor-pointer transition-colors"
                title="Tüm Çıkarılan Slaytları Geri Getir"
              >
                <RotateCcw size={13} />
                <span className="hidden sm:inline">Tümünü Geri Al ({excludedSlideIds.length})</span>
              </button>
            )}
          </div>

          {/* Sağ Kısım: Mod Seçimi & Hazır PDF İndir / Yazdır */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
              <button
                onClick={() => setViewMode('ready-pdf')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'ready-pdf'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <FileText size={13} />
                <span>Hazır PDF</span>
              </button>
              <button
                onClick={() => setViewMode('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  viewMode === 'all'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Modüler Slaytlar
              </button>
              <button
                onClick={() => setViewMode('single')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  viewMode === 'single'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Slayt Gösterisi
              </button>
            </div>

            {viewMode === 'single' && (
              <div className="flex items-center gap-1.5 text-xs font-mono">
                <button
                  onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
                  disabled={safeCurrentIndex === 0}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 flex items-center justify-center cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-white/90 font-bold px-1 text-xs">
                  {safeCurrentIndex + 1} / {totalActive}
                </span>
                <button
                  onClick={() => setCurrentSlideIndex((prev) => Math.min(totalActive - 1, prev + 1))}
                  disabled={safeCurrentIndex === totalActive - 1}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 flex items-center justify-center cursor-pointer"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}

            {/* Hazır PDF İndir Butonu (Tek tıkla doğrudan PDF dosyası iner) */}
            <a
              href={`/api/presentation/file?type=${deckMode}&download=true`}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-coral to-[#e8634f] hover:from-coral-600 text-white text-xs font-black flex items-center gap-2 shadow-lg shadow-coral/30 cursor-pointer hover:scale-105 active:scale-95 transition-all"
              download={deckMode === 'rotary' ? 'rotary-dijital-buyukanne-sunum.pdf' : 'dijital-buyukanne-sunum.pdf'}
              title="Hazır PDF dosyasını bilgisayarınıza veya telefonunuza indirin"
            >
              <Download size={15} />
              <span>Hazır PDF İndir</span>
            </a>

            {/* Yönetim Paneli PDF Yükle Butonu */}
            <Link
              href="/admin/sunum"
              className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/90 text-xs font-bold transition-colors border border-white/10"
              title="Yönetim Panelinden Yeni Hazır PDF Yükle"
            >
              <UploadCloud size={14} className="text-sky-300" />
              <span>PDF Yükle</span>
            </Link>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            SLAYT YÖNETİCİSİ PANELİ (Açılır / Kapanır)
            ───────────────────────────────────────────────────────────── */}
        {showManager && (
          <div className="max-w-[1400px] mx-auto mt-3 p-4 bg-slate-950/90 border border-sky-500/30 rounded-2xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <SlidersHorizontal size={15} className="text-sky-400" />
                  Sunum Slaytlarını Seçin veya Gereksiz Olanları Çıkarın
                </h4>
                <p className="text-[11px] text-white/60">
                  Çıkardığınız slaytlar hem ekrandan hem de yazdırılacak PDF dosyasından tamamen kaldırılır ve sayfa numaraları otomatik olarak ardışık yenilenir.
                </p>
              </div>

              {/* Hızlı Filtre Butonları */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] text-white/50 font-mono">Hızlı Şablonlar:</span>
                <button
                  onClick={() => applyPreset('all')}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium cursor-pointer transition-colors"
                >
                  Tümü ({currentSlidesList.length})
                </button>
                {deckMode === 'rotary' ? (
                  <>
                    <button
                      onClick={() => applyPreset('kulup')}
                      className="px-2.5 py-1 rounded-lg bg-[#F7A81B]/20 hover:bg-[#F7A81B]/30 text-[#F7A81B] text-xs font-medium border border-[#F7A81B]/30 cursor-pointer transition-colors"
                    >
                      Kulüp Projesi (8)
                    </button>
                    <button
                      onClick={() => applyPreset('bolge')}
                      className="px-2.5 py-1 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 text-xs font-medium border border-sky-500/30 cursor-pointer transition-colors"
                    >
                      Bölge & Hibe (9)
                    </button>
                    <button
                      onClick={() => applyPreset('klinik')}
                      className="px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-medium border border-emerald-500/30 cursor-pointer transition-colors"
                    >
                      Klinik & Etik (8)
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => applyPreset('kurumsal')}
                      className="px-2.5 py-1 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 text-xs font-medium border border-sky-500/30 cursor-pointer transition-colors"
                    >
                      Kurumsal & Belediye (9)
                    </button>
                    <button
                      onClick={() => applyPreset('klinik')}
                      className="px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-medium border border-emerald-500/30 cursor-pointer transition-colors"
                    >
                      Tıbbi & Klinik (11)
                    </button>
                    <button
                      onClick={() => applyPreset('ozet')}
                      className="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-medium border border-amber-500/30 cursor-pointer transition-colors"
                    >
                      Yönetici Özeti (7)
                    </button>
                  </>
                )}
                <button
                  onClick={() => setShowManager(false)}
                  className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer ml-2"
                  title="Paneli Kapat"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Slaytların Seçim Grid'i */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 pt-3">
              {currentSlidesList.map((slide, idx) => {
                const isExcluded = excludedSlideIds.includes(slide.id);
                return (
                  <div
                    key={slide.id}
                    onClick={() => toggleSlideExclusion(slide.id)}
                    className={`p-2.5 rounded-xl border flex items-center justify-between gap-2.5 cursor-pointer transition-all ${
                      isExcluded
                        ? 'bg-rose-950/20 border-rose-500/30 text-white/40 line-through hover:border-rose-500/60'
                        : 'bg-white/5 border-white/15 text-white hover:border-sky-400 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono font-bold shrink-0 ${
                        isExcluded ? 'bg-rose-500/20 text-rose-300' : 'bg-sky-500 text-white'
                      }`}>
                        {idx + 1}
                      </span>
                      <div className="truncate">
                        <span className="text-[10px] text-sky-300 font-mono block leading-none truncate">
                          {slide.chapter} &bull; {slide.category}
                        </span>
                        <span className="text-xs font-semibold block truncate leading-tight mt-0.5">
                          {slide.title}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isExcluded
                          ? 'bg-rose-500/30 text-rose-200'
                          : 'bg-white/10 hover:bg-rose-500/40 hover:text-white text-white/70'
                      }`}
                      title={isExcluded ? 'Slaytı Geri Ekle' : 'Slaytı Çıkar / Sil'}
                    >
                      {isExcluded ? <RotateCcw size={12} /> : <Trash2 size={12} />}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. SLAYTLAR: WEB SİTESİNİN BİREBİR TAMAMI (16 MODÜLER SLAYT YA DA 13 ROTARY SLAYTI)
          ───────────────────────────────────────────────────────────── */}
      <main className="p-4 sm:p-8 max-w-[1360px] mx-auto space-y-8 print:p-0 print:m-0 print:space-y-0">
        {viewMode === 'ready-pdf' ? (
          <div className="space-y-5 animate-fade-in no-print">
            {/* Üst Bilgi ve Eylem Kartı */}
            <div className="bg-gradient-to-r from-[#0B1E3B] via-[#0E2A54] to-[#0B1E3B] border border-white/10 rounded-3xl p-5 sm:p-6 text-white shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-400/30 flex items-center justify-center shrink-0 shadow-inner">
                  <FileText size={24} />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-base sm:text-lg font-black text-white">
                      {deckMode === 'rotary'
                        ? 'Rotary & DijitalBüyükanne Anne ve Çocuk Sağlığı Projesi Resmî Sunumu'
                        : 'DijitalBüyükanne Kurumsal Tanıtım ve Protokol Sunumu'}
                    </h2>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/40 font-bold font-mono">
                      Hazır PDF Yayında
                    </span>
                  </div>
                  <p className="text-xs text-white/70">
                    Aşağıdaki hazır PDF sunum dosyasını sayfalar halinde inceleyebilir, tam ekran yapabilir veya doğrudan indirebilirsiniz.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href={`/api/presentation/file?type=${deckMode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-2 transition-all border border-white/15"
                >
                  <Maximize2 size={14} />
                  <span>Tam Ekranda Aç</span>
                </a>

                <a
                  href={`/api/presentation/file?type=${deckMode}&download=true`}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-coral to-[#e8634f] hover:from-coral-600 text-white text-xs font-black flex items-center gap-2 shadow-lg shadow-coral/30 hover:scale-105 active:scale-95 transition-all"
                  download={deckMode === 'rotary' ? 'rotary-dijital-buyukanne-sunum.pdf' : 'dijital-buyukanne-sunum.pdf'}
                >
                  <Download size={15} />
                  <span>Hazır PDF Dosyasını İndir</span>
                </a>
              </div>
            </div>

            {/* Gömülü PDF Görüntüleyici Çerçevesi */}
            <div className="w-full h-[78vh] min-h-[620px] rounded-3xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl relative">
              <iframe
                src={`/api/presentation/file?type=${deckMode}#toolbar=1&navpanes=0&scrollbar=1`}
                className="w-full h-full border-0"
                title="Hazır PDF Sunumu"
              />
            </div>
          </div>
        ) : deckMode === 'rotary' ? (
          <RotarySlideDeck
            activeSlides={activeSlides}
            viewMode={viewMode}
            safeCurrentIndex={safeCurrentIndex}
            totalActive={totalActive}
            toggleSlideExclusion={toggleSlideExclusion}
            getSlideIndex={getSlideIndex}
            shouldRenderSlide={shouldRenderSlide}
          />
        ) : (
          <>
        {/* ═════════════════════════════════════════════════════════════
            SLAYT 1 &bull; BÖLÜM 01: EKOSİSTEM VE VİZYON
            Web Sitesi: HeroSection + Phone Mockup
            ═════════════════════════════════════════════════════════════ */}
        {shouldRenderSlide('slide-hero', activeSlides, viewMode, safeCurrentIndex) && (
          <SlideWrapper
            id="slide-hero"
            chapter="BÖLÜM 01"
            category="EKOSİSTEM VE VİZYON"
            slideIndex={getSlideIndex('slide-hero', activeSlides)}
            totalSlides={totalActive}
            onRemove={() => toggleSlideExclusion('slide-hero')}
            gradientBg="bg-gradient-to-br from-[#0B1E3B] via-[#0D2A54] to-[#07172E] text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-sky-300/30 text-sky-300 text-xs font-mono font-bold tracking-widest uppercase">
                  <Image src="/images/mascot.png" alt="Maskot" width={18} height={18} className="object-contain" />
                  <span>{hero?.eyebrow || '0–24 AY BEBEK VE AİLE DESTEK EKOSİSTEMİ'}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                  Her bebeğin bir{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-coral">
                    Dijital Büyükannesi
                  </span>{' '}
                  olsun.
                </h1>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                  Geleneksel büyükanne şefkatini modern <strong>yapay zekâ teknolojisiyle</strong> buluşturuyoruz. Bebeğinizin hareketini, cildini ve gelişimini evden takip edin — gece 03:00&apos;te bile uzman gibi yanınızdayız.
                </p>

                {/* 3 Hizmet Kartı */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/15">
                    <span className="text-xs font-bold text-sky-300 block mb-0.5">0–6 Ay Hareket</span>
                    <span className="text-[10px] text-white/70 block leading-tight">Nörolojik ve kas hastalıkları video izlemi</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/15">
                    <span className="text-xs font-bold text-sky-300 block mb-0.5">Bez & Cilt Analizi</span>
                    <span className="text-[10px] text-white/70 block leading-tight">Fotoğrafla renk ve bariyer ön taraması</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/15">
                    <span className="text-xs font-bold text-coral block mb-0.5">7/24 Dijital Asistan</span>
                    <span className="text-[10px] text-white/70 block leading-tight">Panik yapmadan hekim güvencesi</span>
                  </div>
                </div>
              </div>

              {/* Canlı Telemetri & Bebek Mockup */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="bg-slate-950/90 border border-white/20 rounded-3xl p-5 shadow-2xl relative">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                    <span className="text-sky-300 font-bold flex items-center gap-1.5 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      BabySensAI v2.4 Mobil Motor
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-coral/20 text-coral font-bold border border-coral/30">
                      18 Eklem Aktif
                    </span>
                  </div>

                  <div className="py-6 my-2 flex items-center justify-center bg-gradient-to-b from-[#081F36] to-[#040F1C] rounded-2xl border border-sky-400/20 text-center">
                    <div className="space-y-1.5">
                      <span className="text-5xl">👶</span>
                      <p className="text-xs font-mono text-cyan-300 font-bold">Nörolojik ve Kas Taraması: OPTİMAL (%98.4)</p>
                      <p className="text-[10px] text-white/60">Omuz, Dirsek, Kalça ve Ayak Bileği Simetrisi Sağlıklı</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-white/70 pt-2 border-t border-white/10">
                    <span>Açı: 114° &bull; Hız: 0.42 m/s</span>
                    <span className="text-emerald-400 font-bold">✓ Klinik Standart Normal</span>
                  </div>
                </div>
              </div>
            </div>
          </SlideWrapper>
        )}

        {/* ═════════════════════════════════════════════════════════════
            SLAYT 2 &bull; BÖLÜM 01 EK: CANLI EKOSİSTEM NABZI & STANDARTLAR
            Web Sitesi: EcosystemPulseTicker + StandardsMarquee
            ═════════════════════════════════════════════════════════════ */}
        {shouldRenderSlide('slide-pulse', activeSlides, viewMode, safeCurrentIndex) && (
          <SlideWrapper
            id="slide-pulse"
            chapter="BÖLÜM 01 EK"
            category="CANLI SAHA VERİLERİ VE RESMÎ STANDARTLAR"
            slideIndex={getSlideIndex('slide-pulse', activeSlides)}
            totalSlides={totalActive}
            onRemove={() => toggleSlideExclusion('slide-pulse')}
            gradientBg="bg-gradient-to-br from-[#0B1E3B] via-[#0E2850] to-[#091D38] text-white"
          >
            <div className="flex-1 flex flex-col justify-center my-auto space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Activity size={13} className="animate-pulse" />
                  <span>TÜRKİYE GENELİ ANLIK SAHA İZLEME KONSOLU</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  Canlı Ekosistem Nabzı ve Uluslararası Standartlar
                </h2>
                <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-3xl">
                  DijitalBüyükanne ve BabySensAI; ailelerden kurumlara, sağlık ocaklarından belediyelere uzanan şeffaf ve ölçülebilir bir etki ağı oluşturur.
                </p>
              </div>

              {/* 6 Canlı Saha Göstergesi */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { value: '12.400+', label: 'Kayıtlı Aile & Bebek', desc: 'Sürekli takip edilen aktif hane sayısı' },
                  { value: '48.200+', label: 'Yapay Zekâ Taraması', desc: 'Hareket, cilt ve dışkı analizi toplamı' },
                  { value: '%98,4', label: 'Ebeveyn Memnuniyeti', desc: 'Platform geri bildirim skoru' },
                  { value: '18 İlçe', label: 'Belediye & Kulüp', desc: 'Resmî kurumsal iş birliği protokolü' },
                  { value: '14.800+', label: 'Gece 03:00 Yanıtı', desc: 'Panik anında sunulan bilimsel rehberlik' },
                  { value: '%52', label: 'Acil Servis Düşüşü', desc: 'Önlenebilir yanlış alarm başvurusu azalması' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/10 border border-white/15 flex flex-col justify-between">
                    <div>
                      <span className="text-2xl font-black text-sky-300 font-mono block leading-none mb-1">
                        {item.value}
                      </span>
                      <span className="text-xs font-bold text-white block mb-1">
                        {item.label}
                      </span>
                      <p className="text-[10px] text-white/60 leading-tight">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 6 Resmî Standart Şeridi */}
              <div className="p-5 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-wider block">
                  ULUSLARARASI AKREDİTASYON VE TIBBİ ETİK STANDARTLAR:
                </span>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 text-xs">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <strong className="text-white block text-[11px]">Nöromotor & Kas</strong>
                    <span className="text-[10px] text-white/60">Spontan hareket kalitesi standardı</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <strong className="text-white block text-[11px]">DSÖ (WHO)</strong>
                    <span className="text-[10px] text-white/60">6 seviyeli kilsi dışkı renk kartı</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <strong className="text-white block text-[11px]">KVKK & HIPAA</strong>
                    <span className="text-[10px] text-white/60">Kimliksizleştirilmiş veri güvenliği</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <strong className="text-white block text-[11px]">Sağlık Bakanlığı</strong>
                    <span className="text-[10px] text-white/60">0-2 yaş pediatrik izlem kılavuzu</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <strong className="text-white block text-[11px]">Rotary 7 Odak</strong>
                    <span className="text-[10px] text-white/60">Anne ve çocuk sağlığı önceliği</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <strong className="text-white block text-[11px]">White-Label</strong>
                    <span className="text-[10px] text-white/60">Kuruma özel bağımsız mobil altyapı</span>
                  </div>
                </div>
              </div>
            </div>
          </SlideWrapper>
        )}

        {/* ═════════════════════════════════════════════════════════════
            SLAYT 3 &bull; BÖLÜM 02: NÖROGELİŞİMSEL DÖNGÜ (0-24 AY)
            Web Sitesi: Ribbon 2 + TimelineSection (6 Kilometre Taşı)
            ═════════════════════════════════════════════════════════════ */}
        {shouldRenderSlide('slide-timeline', activeSlides, viewMode, safeCurrentIndex) && (
          <SlideWrapper
            id="slide-timeline"
            chapter="BÖLÜM 02"
            category="NÖROGELİŞİMSEL DÖNGÜ"
            slideIndex={getSlideIndex('slide-timeline', activeSlides)}
            totalSlides={totalActive}
            onRemove={() => toggleSlideExclusion('slide-timeline')}
            dark
            gradientBg="bg-white text-slate-900 border border-slate-200"
          >
            <div className="flex-1 flex flex-col justify-center my-auto">
              <div className="mb-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coral/10 text-coral text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Layers size={13} />
                  <span>{ribbons?.ribbon2?.chapterTitle || 'NÖROGELİŞİMSEL DÖNGÜ'}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-[#0B1E3B] tracking-tight">
                  {ribbons?.ribbon2?.headline || 'İlk 24 Ay: Büyümenin Kritik Kilometre Taşları'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
                  {ribbons?.ribbon2?.description || 'İlk iki yılda beyin ve motor gelişiminin temelleri atılır. Yapılandırılmış simülatörümüzle her ayın nörogelişimsel sıçramalarını yakından takip edin.'}
                </p>
              </div>

              {/* 6 Kilometre Taşı Grid'i */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                {[
                  { age: '2–3 Ay', emoji: '😊', title: 'Sosyal Gülümseme & Baş Tutuşu', desc: 'Göz teması, sese dönme, yüzüstü başı 45° kaldırma.' },
                  { age: '4–6 Ay', emoji: '🔄', title: 'Dönüş & Nesnelere Uzanma', desc: 'Sırtüstünden dönme, çıngırak kavrama, gövde rotasyonu.' },
                  { age: '6–9 Ay', emoji: '🧸', title: 'Desteksiz Oturma & Heceleme', desc: 'Desteksiz dik oturma, ba-ba sesleri, ek gıdaya geçiş.' },
                  { age: '9–12 Ay', emoji: '🐾', title: 'Emekleme & Tutunup Kalkma', desc: 'Çapraz emekleme, kıskaç tutuşu, alkış taklidi.' },
                  { age: '12–18 Ay', emoji: '👣', title: 'İlk Adımlar & Bağımsızlık', desc: 'Bağımsız yürüme, ilk 3-5 kelime, yönergeleri anlama.' },
                  { age: '18–24 Ay', emoji: '🏃', title: 'Koşma & İki Kelimelik Cümle', desc: 'Koşma, merdiven çıkma, 20+ kelime ve benlik farkındalığı.' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{item.emoji}</span>
                        <span className="text-[10px] font-mono font-bold bg-[#0284C7]/10 text-[#0284C7] px-2 py-0.5 rounded-full">
                          {item.age}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-[#0B1E3B] mb-1 leading-snug">{item.title}</h4>
                      <p className="text-[10px] text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-between text-xs text-sky-950">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#0284C7]" />
                  <span>Her ay için yaşa özel pediatrik oyunlar, ebeveyn kontrol listeleri ve kırmızı bayrak (red-flag) erken uyarı filtreleri.</span>
                </span>
                <span className="font-mono text-xs font-bold text-[#0284C7]">Pediatrik Gelişim Standardı</span>
              </div>
            </div>
          </SlideWrapper>
        )}

        {/* ═════════════════════════════════════════════════════════════
            SLAYT 4 &bull; BÖLÜM 02 EK: KARAR VE ETKİ MATRİSİ
            Web Sitesi: ProblemSolutionCompare (Geleneksel vs. DijitalBüyükanne)
            ═════════════════════════════════════════════════════════════ */}
        {shouldRenderSlide('slide-compare', activeSlides, viewMode, safeCurrentIndex) && (
          <SlideWrapper
            id="slide-compare"
            chapter="BÖLÜM 02 EK"
            category="TOPLUMSAL SORUN & ÇÖZÜM MATRİSİ"
            slideIndex={getSlideIndex('slide-compare', activeSlides)}
            totalSlides={totalActive}
            onRemove={() => toggleSlideExclusion('slide-compare')}
            dark
            gradientBg="bg-slate-50 text-slate-900 border border-slate-200"
          >
            <div className="flex-1 flex flex-col justify-center my-auto">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy/5 text-navy text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Scale size={13} className="text-[#0284C7]" />
                  <span>NEDEN DİJİTALBÜYÜKANNE?</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-[#0B1E3B] tracking-tight">
                  Geleneksel Çaresizlik vs. DijitalBüyükanne Güvencesi
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Yeni doğum yapan bir ailenin karşılaştığı 5 kritik kırılma noktasında yarattığımız dönüşüm:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">
                {/* Sol: Geleneksel Yol */}
                <div className="p-5 rounded-3xl bg-rose-50 border-2 border-rose-200 space-y-2.5">
                  <span className="text-xs font-black uppercase text-rose-700 bg-rose-100 px-3 py-1 rounded-full font-mono">
                    ❌ GELENEKSEL YOL (KULAKTAN DOLMA & PANİK)
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li><strong>1. Gece Ağlamaları:</strong> 03:00&apos;te arama motorlarında çelişkili ve korkutan makaleler, panik hali.</li>
                    <li><strong>2. Motor Gelişim:</strong> Asimetrilerin &ldquo;büyüyünce geçer&rdquo; yanılgısıyla ilk 6 ayın geri dönülemez kaybı.</li>
                    <li><strong>3. Bez & Cilt:</strong> Komşu tavsiyesi kremlerle alerji ve enfeksiyonların ilerleme riski.</li>
                    <li><strong>4. Hastane Acilleri:</strong> Basit gaz/ateş endişesiyle hastane koridorlarında yorucu kuyruklar.</li>
                    <li><strong>5. Anne Psikolojisi:</strong> %21,4 klinik lohusa anksiyetesi ve derin yalnızlık hissi.</li>
                  </ul>
                  <div className="pt-2 border-t border-rose-200 text-[11px] font-bold text-rose-800">
                    Kayıp: Yüksek hane içi stres, geç fark edilen kalıcı engellilik ve acil servis yükü.
                  </div>
                </div>

                {/* Sağ: DijitalBüyükanne Güvencesi */}
                <div className="p-5 rounded-3xl bg-sky-50 border-2 border-sky-300 space-y-2.5 shadow-md">
                  <span className="text-xs font-black uppercase text-[#0284C7] bg-sky-100 px-3 py-1 rounded-full font-mono">
                    ✅ DİJİTALBÜYÜKANNE GÜVENCESİ (BİLİM + ŞEFKAT)
                  </span>
                  <ul className="space-y-2 text-xs text-slate-800">
                    <li><strong>1. 7/24 Şefkatli Yanıt:</strong> Atak dönemine özel anında bilimsel yönlendirme ve uyku rutini.</li>
                    <li><strong>2. Nörolojik ve Kas Taraması:</strong> Evden videoyla 18 eklem taranarak risklerin ilk 6 ayda yakalanması.</li>
                    <li><strong>3. Pediatrik Skala:</strong> Dışkı ve ciltte hekim onaylı kartlarla gecikmesiz uzman sevk köprüsü.</li>
                    <li><strong>4. %52 Önlenebilir Acil:</strong> Tıbbi aciliyet gerektirmeyen durumların evde huzurla yönetimi.</li>
                    <li><strong>5. Anne Esenliği:</strong> Günün her anında dinleyen, yargılamayan şefkatli bir dijital büyükanne.</li>
                  </ul>
                  <div className="pt-2 border-t border-sky-200 text-[11px] font-bold text-[#0284C7]">
                    Kazanım: Zamanında hekime ulaşan sağlıklı bebekler, huzurlu ve güçlenen anneler.
                  </div>
                </div>
              </div>
            </div>
          </SlideWrapper>
        )}

        {/* ═════════════════════════════════════════════════════════════
            SLAYT 5 &bull; BÖLÜM 03: KLİNİK TARAMA PROTOKOLLERİ GENEL ÇERÇEVE
            Web Sitesi: Ribbon 3 + SolutionSection (3 Sütun)
            ═════════════════════════════════════════════════════════════ */}
        {shouldRenderSlide('slide-protocols-overview', activeSlides, viewMode, safeCurrentIndex) && (
          <SlideWrapper
            id="slide-protocols-overview"
            chapter="BÖLÜM 03"
            category="KLİNİK TARAMA PROTOKOLLERİ"
            slideIndex={getSlideIndex('slide-protocols-overview', activeSlides)}
            totalSlides={totalActive}
            onRemove={() => toggleSlideExclusion('slide-protocols-overview')}
            gradientBg="bg-gradient-to-br from-[#0B1E3B] via-[#0D2A54] to-[#0A1F3D] text-white"
          >
            <div className="flex-1 flex flex-col justify-center my-auto">
              <div className="mb-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Cpu size={13} />
                  <span>{ribbons?.ribbon3?.chapterTitle || 'KLİNİK TARAMA PROTOKOLLERİ'}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  {ribbons?.ribbon3?.headline || 'Yapay Zekâ Destekli 3 Akıllı Tarama Protokolü'}
                </h2>
                <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-3xl">
                  {ribbons?.ribbon3?.description || 'Ebeveyn gözünden kaçabilecek erken motor asimetrileri, cilt hassasiyetleri ve sindirim ipuçları için algoritmik ön tarama ve hekim sevk köprüsü.'}
                </p>
              </div>

              {/* 3 Protokol Kartı */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                {/* 1. Hareket Analizi */}
                <div className="p-5 rounded-3xl bg-white/10 border border-white/15 backdrop-blur-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-coral/20 text-coral flex items-center justify-center font-bold">
                        <Activity size={22} />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-sky-300 font-bold">
                        0–6 Ay Video
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5">{motion?.title || '0–6 Ay Hareket Analizi'}</h3>
                    <p className="text-xs text-white/70 leading-relaxed mb-3">
                      {motion?.subtitle || 'Evde çekilen kısa videolardan nörolojik ve kas hastalıkları ile motor gelişim kalıplarını tarayan algoritmik sistem.'}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-sky-200">
                    &bull; 18 Eklem Kinematik Takibi &bull; Serebral Palsi Erken İpucu
                  </div>
                </div>

                {/* 2. Cilt Analizi */}
                <div className="p-5 rounded-3xl bg-white/10 border border-white/15 backdrop-blur-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-400/20 text-sky-300 flex items-center justify-center font-bold">
                        <ScanLine size={22} />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-sky-300 font-bold">
                        Fotoğraf Taraması
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5">{skin?.title || 'Yapay Zekâ Cilt Analizi'}</h3>
                    <p className="text-xs text-white/70 leading-relaxed mb-3">
                      {skin?.subtitle || '41 farklı yaygın bebek cilt durumunu tarayan ve gerektiğinde hekime yönlendiren yardımcı servis.'}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-sky-200">
                    &bull; Konak, Pişik, Alerjik Egzama &bull; Hekim Sevk Skalası
                  </div>
                </div>

                {/* 3. Bez & Dışkı Analizi */}
                <div className="p-5 rounded-3xl bg-white/10 border border-white/15 backdrop-blur-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold">
                        <Stethoscope size={22} />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-sky-300 font-bold">
                        DSÖ Renk Skalası
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5">{stool?.title || 'Yapay Zekâ Bez & Dışkı Analizi'}</h3>
                    <p className="text-xs text-white/70 leading-relaxed mb-3">
                      {stool?.subtitle || 'Bristol skalası ve pediatrik kılavuzlara dayalı algoritmik renk, kıvam ve sindirim taraması.'}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-amber-200">
                    &bull; Biliyer Atrezi & Sarılık Erken Uyarı Köprüsü
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center text-xs text-white/60">
                ⚠️ {motion?.disclaimer || 'Yapay zekâ servislerimiz kesin tanı koymaz; klinik kararlar uzman hekimlerin sorumluluğunda yürütülür.'}
              </div>
            </div>
          </SlideWrapper>
        )}

        {/* ═════════════════════════════════════════════════════════════
            SLAYT 6 &bull; BÖLÜM 03 DETAY: 0–6 AY NÖROLOJİK VE KAS HAREKET ANALİZİ
            Web Sitesi: MotionAnalysis (18 Eklem, 4 Adım, Serebral Palsi Erken Penceresi)
            ═════════════════════════════════════════════════════════════ */}
        {shouldRenderSlide('slide-motion', activeSlides, viewMode, safeCurrentIndex) && (
          <SlideWrapper
            id="slide-motion"
            chapter="BÖLÜM 03 DETAY"
            category="0–6 AY NÖROLOJİK VE KAS HAREKET ANALİZİ"
            slideIndex={getSlideIndex('slide-motion', activeSlides)}
            totalSlides={totalActive}
            onRemove={() => toggleSlideExclusion('slide-motion')}
            gradientBg="bg-gradient-to-br from-[#0B1E3B] via-[#0E2C58] to-[#08182D] text-white"
          >
            <div className="flex-1 flex flex-col justify-center my-auto">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coral/20 text-coral text-xs font-mono font-bold uppercase tracking-wider mb-1.5">
                  <Activity size={13} />
                  <span>NÖROLOJİK VE KAS METODOLOJİSİ & VİDEO KİNEMATİK</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  18 Eklem Kinematik Taraması ve 4 Aşamalı Klinik İşleyiş
                </h2>
                <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-3xl">
                  Bebek uyanık ve sakinken sırtüstü pozisyonda çekilen 2 dakikalık video; yapay zekâ algoritmalarıyla incelenerek omuz, dirsek, kalça ve ayak bileklerindeki akıcı spontan hareketleri tarar.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center mb-3">
                {/* Sol: 4 Aşamalı Klinik Süreç */}
                <div className="lg:col-span-7 space-y-2.5">
                  {[
                    { step: '1', title: 'Evde 2 Dakikalık Doğal Video Kaydı', desc: 'Bebek sırtüstü rahat bir ortamdayken mobil telefonla doğal hareket videosu çekilir.' },
                    { step: '2', title: 'BabySensAI 18 Eklem Kinematik Analizi', desc: 'Milisaniyelik hız, açısal sapma, ivme ve sağ-sol ekstremite asimetrisi hesaplanır.' },
                    { step: '3', title: 'Gelişimsel Kalite Skoru & Nöromotor İndeks', desc: 'Spontan hareket kalitesi ve kas tonusu yaş normlarına göre haritalandırılır (%98.4 doğruluk).' },
                    { step: '4', title: 'Pediatrik Hekim ve Fizyoterapist Sevk Köprüsü', desc: 'Şüpheli asimetri durumunda zaman kaybetmeden uzman randevusu ve ev egzersiz planı açılır.' },
                  ].map((s, idx) => (
                    <div key={idx} className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                      <span className="w-7 h-7 rounded-xl bg-sky-500/20 text-sky-300 font-mono font-black text-xs flex items-center justify-center shrink-0 mt-0.5 border border-sky-400/30">
                        {s.step}
                      </span>
                      <div>
                        <strong className="text-xs text-white block mb-0.5">{s.title}</strong>
                        <p className="text-[11px] text-white/70 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sağ: Telemetri Paneli & Serebral Palsi Penceresi */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="p-4 rounded-3xl bg-slate-950/80 border border-white/15 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-sky-300 font-bold">18 Eklem Takibi Aktif</span>
                      <span className="text-emerald-400 font-bold">FPS: 60 &bull; Hata: &lt;%0.02</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1.5 font-mono">
                      <div className="flex justify-between text-white/80">
                        <span>Sol Omuz-Dirsek Açısı:</span>
                        <span className="text-sky-300 font-bold">114.2° (Normal)</span>
                      </div>
                      <div className="flex justify-between text-white/80">
                        <span>Sağ Kalça İtiş Simetrisi:</span>
                        <span className="text-emerald-300 font-bold">%97.8 Eşit</span>
                      </div>
                      <div className="flex justify-between text-white/80">
                        <span>Fidgety Hareket Ritim:</span>
                        <span className="text-cyan-300 font-bold">Akıcı & Değişken</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-coral/15 border border-coral/30 text-xs">
                      <strong className="text-coral block mb-0.5">Serebral Palsi Erken Farkındalığı:</strong>
                      <p className="text-[11px] text-white/80 leading-snug">
                        Beyin gelişiminin en esnek olduğu ilk 6 ayda yakalanan nöromotor asimetriler, fizyoterapi ile fonksiyonel uyumu %85&apos;e kadar artırır.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SlideWrapper>
        )}

        {/* ═════════════════════════════════════════════════════════════
            SLAYT 7 &bull; BÖLÜM 03 DETAY: CİLT & BEZ/DIŞKI ANALİZİ
            Web Sitesi: SkinAnalysis (41 Durum) + StoolAnalysis (DSÖ Renk Skalası)
            ═════════════════════════════════════════════════════════════ */}
        {shouldRenderSlide('slide-skin-stool', activeSlides, viewMode, safeCurrentIndex) && (
          <SlideWrapper
            id="slide-skin-stool"
            chapter="BÖLÜM 03 DETAY"
            category="CİLT VE BEZ/DIŞKI ANALİZİ"
            slideIndex={getSlideIndex('slide-skin-stool', activeSlides)}
            totalSlides={totalActive}
            onRemove={() => toggleSlideExclusion('slide-skin-stool')}
            gradientBg="bg-gradient-to-br from-[#0B1E3B] via-[#0E2850] to-[#0A2244] text-white"
          >
            <div className="flex-1 flex flex-col justify-center my-auto">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-400/20 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider mb-1.5">
                  <ScanLine size={13} />
                  <span>GÖRÜNTÜ İŞLEME & PEDİATRİK DIŞKI SKALALARI</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  Fotoğrafla Ön Tarama: 41 Cilt Durumu ve DSÖ Dışkı Skalası
                </h2>
                <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-3xl">
                  Mobil kamerayla çekilen fotoğraflar üzerinden ebeveyn gözünden kaçabilecek belirtileri saniyeler içinde sınıflandırarak doğru bakım veya hekim sevki sağlar.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">
                {/* Sol Kutu: Yapay Zekâ Cilt Analizi */}
                <div className="p-5 rounded-3xl bg-white/10 border border-white/15 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-300 font-mono uppercase">
                      41 PEDİATRİK CİLT TABLOSU TARAMASI
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-200">
                      Derma-41 Motoru
                    </span>
                  </div>

                  <p className="text-xs text-white/80 leading-relaxed">
                    İnfantil atopik dermatit (bebeklik egzaması), konak, pişik, yenidoğan toksik eritemi, isilik ve besin alerjisi döküntülerini saniyeler içinde tarar.
                  </p>

                  <div className="space-y-1.5 text-xs">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-white/80">Yeşil Triaj (Güvenli):</span>
                      <span className="text-emerald-300 font-bold text-[11px]">Evde Hipoalerjenik Nemlendirici</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-white/80">Sarı Triaj (Takip):</span>
                      <span className="text-amber-300 font-bold text-[11px]">48 Saatlik Alerjen & Bez Takibi</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-white/80">Kırmızı Triaj (Sevk):</span>
                      <span className="text-rose-300 font-bold text-[11px]">Ateş & Enfeksiyon: Acil Pediatrist</span>
                    </div>
                  </div>
                </div>

                {/* Sağ Kutu: Yapay Zekâ Bez & Dışkı Analizi */}
                <div className="p-5 rounded-3xl bg-white/10 border border-white/15 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-300 font-mono uppercase">
                      DSÖ (WHO) 6 SEVİYELİ RENK KARTI EŞLEMESİ
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-200">
                      Bristol Skalası
                    </span>
                  </div>

                  <p className="text-xs text-white/80 leading-relaxed">
                    Bebek bezindeki dışkı rengi, kıvamı ve hidrasyon oranını piksel düzeyinde referans kartlarıyla eşleştirerek sindirim sistemi durumunu raporlar.
                  </p>

                  <div className="space-y-1.5 text-xs">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-white/80">Hardal Sarısı / Taneli:</span>
                      <span className="text-emerald-300 font-bold text-[11px]">Normal Anne Sütü Sindirimi</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-white/80">Mukuslu & Köpüksü:</span>
                      <span className="text-amber-300 font-bold text-[11px]">Olası Besin/Süt Alerjisi İzlemi</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-white/80">Beyazımsı / Kilsi (Renksiz):</span>
                      <span className="text-rose-400 font-bold text-[11px]">Biliyer Atrezi & Sarılık Alarmı</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center text-[11px] text-white/60">
                Piksel kalibrasyonu cihaz içi ışık dengesiyle doğrulanır; şüpheli renklerde doğrudan hekim konsültasyonu başlatılır.
              </div>
            </div>
          </SlideWrapper>
        )}

        {/* ═════════════════════════════════════════════════════════════
            SLAYT 8 &bull; BÖLÜM 04: KESİNTİSİZ DESTEK & BÜYÜKANNE ŞEFKATİ
            Web Sitesi: Ribbon 4 + DigitalAssistant (Gece 03:00 + Ses Dalgası)
            ═════════════════════════════════════════════════════════════ */}
        {shouldRenderSlide('slide-assistant', activeSlides, viewMode, safeCurrentIndex) && (
          <SlideWrapper
            id="slide-assistant"
            chapter="BÖLÜM 04"
            category="KESİNTİSİZ DESTEK EKOSİSTEMİ"
            slideIndex={getSlideIndex('slide-assistant', activeSlides)}
            totalSlides={totalActive}
            onRemove={() => toggleSlideExclusion('slide-assistant')}
            gradientBg="bg-slate-900 text-white"
          >
            <div className="flex-1 flex flex-col justify-center my-auto">
              <div className="mb-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-coral text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Moon size={13} />
                  <span>{ribbons?.ribbon4?.chapterTitle || 'KESİNTİSİZ DESTEK EKOSİSTEMİ'}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  {assistant?.nightTagline || "Gece 03.00'te bile yanınızda."}
                </h2>
                <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-3xl">
                  {assistant?.subtitle || 'Yapay zekâ hızı ve anneanne şefkatiyle bilimsel rehberlik.'} Anne ve babaların soruları mesai saatlerini beklemez.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-4">
                {/* Sol: Gece 03:00 Büyükanne Şefkati & Ses Dalgası */}
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-2xl">
                      👵
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">
                        Şefkatli Fısıltı Sesli Asistan
                      </h3>
                      <p className="text-xs text-white/60">
                        Geceyi aydınlatmadan, fısıltı tonunda rehberlik
                      </p>
                    </div>
                  </div>

                  <blockquote className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/80 leading-relaxed italic border-l-4 border-sky-400">
                    &ldquo;Canım hiç telaşlanma. Bebeğin 4. ay büyüme atağında olduğu için gece sık uyanabilir. Ortamı loş tutarak kucağına al, fısıltı tonunda konuş; adım adım sakinleştireceğiz.&rdquo;
                  </blockquote>

                  {/* Ses Dalgası Simülasyonu */}
                  <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sky-300 text-xs font-mono">
                      <Volume2 size={16} className="text-sky-400" />
                      <span>Sesli Rehberlik Kaydı (01:42)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[12, 24, 16, 32, 20, 28, 14, 22, 30, 18, 10, 26].map((h, i) => (
                        <span
                          key={i}
                          style={{ height: `${h}px` }}
                          className="w-1 rounded-full bg-sky-400/70"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sağ: 3 Temel Gece Desteği Modeli */}
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3.5">
                  <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block">
                    7/24 KESİNTİSİZ GÜVENLİK SÜZGEÇLERİ
                  </span>

                  <div className="space-y-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                      <span className="text-sky-400 font-bold">1.</span>
                      <div>
                        <strong className="text-white">Panik Yatıştırma & Uyku Rutini:</strong>
                        <p className="text-white/60 text-[11px]">Korkutan arama motoru sonuçları yerine güvenli ve şefkatli rehberlik.</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                      <span className="text-coral font-bold">2.</span>
                      <div>
                        <strong className="text-white">Atak Dönemi & Gaz Masajı:</strong>
                        <p className="text-white/60 text-[11px]">Bebeğin o günkü gelişim haftasına uygun pediatrik masaj adımları.</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5">
                      <span className="text-emerald-400 font-bold">3.</span>
                      <div>
                        <strong className="text-white">Lohusa Psikolojik Esenliği:</strong>
                        <p className="text-white/60 text-[11px]">Anneyi suçlamayan, dinleyen ve yalnız hissettirmeyen dijital büyükanne.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SlideWrapper>
        )}

        {/* ═════════════════════════════════════════════════════════════
            SLAYT 9 &bull; BÖLÜM 04 EK: İNSAN + AI DENGE RADARI
            Web Sitesi: HumanAI (Klinik Güvence ve Etik İlkeler)
            ═════════════════════════════════════════════════════════════ */}
        {shouldRenderSlide('slide-human-ai', activeSlides, viewMode, safeCurrentIndex) && (
          <SlideWrapper
            id="slide-human-ai"
            chapter="BÖLÜM 04 EK"
            category="İNSAN + YAPAY ZEKÂ DENGE RADARI"
            slideIndex={getSlideIndex('slide-human-ai', activeSlides)}
            totalSlides={totalActive}
            onRemove={() => toggleSlideExclusion('slide-human-ai')}
            gradientBg="bg-gradient-to-br from-[#0B1E3B] via-[#0E2850] to-[#08182D] text-white"
          >
            <div className="flex-1 flex flex-col justify-center my-auto">
              <div className="mb-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck size={13} />
                  <span>KLİNİK GÜVENCE VE ETİK DENGE İLKELERİ</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  Yapay Zekâ Destekler, Hekim Karar Verir.
                </h2>
                <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-3xl">
                  DijitalBüyükanne ve BabySensAI; hekimin yerini almayı asla hedeflemez. Amacımız ebeveyn ile hekim arasındaki iletişimi güçlendirmek ve altın zaman penceresini korumaktır.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                <div className="p-5 rounded-3xl bg-white/10 border border-white/15 space-y-3">
                  <span className="w-9 h-9 rounded-2xl bg-sky-500/20 text-sky-300 font-bold flex items-center justify-center font-mono">
                    01
                  </span>
                  <h3 className="text-base font-bold text-white">Yapay Zekâ Hızlı Ön Tarar</h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Gecenin bir yarısı panik anında arama motorlarının korkutan makaleleri yerine, bilimsel filtreyle ön tarama yaparak aileyi sakinleştirir.
                  </p>
                </div>

                <div className="p-5 rounded-3xl bg-white/10 border border-white/15 space-y-3">
                  <span className="w-9 h-9 rounded-2xl bg-coral/20 text-coral font-bold flex items-center justify-center font-mono">
                    02
                  </span>
                  <h3 className="text-base font-bold text-white">Zamanında Hekime Sevk Eder</h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Ateş, solunum güçlüğü veya nöromotor asimetri gibi kırmızı bayraklarda (red-flag) derhal ilgili uzman hekime ve acil servise yönlendirir.
                  </p>
                </div>

                <div className="p-5 rounded-3xl bg-white/10 border border-white/15 space-y-3">
                  <span className="w-9 h-9 rounded-2xl bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center font-mono">
                    03
                  </span>
                  <h3 className="text-base font-bold text-white">Asla Kesin Tanı Koymaz</h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Türk Tabipleri Birliği (TTB) ve uluslararası tıp etiği gereği reçete yazmaz, tanı koymaz; klinik kararı hekimin uzmanlığına bırakır.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-white/80">
                <span className="flex items-center gap-2">
                  <Lock size={15} className="text-emerald-400" />
                  <span>KVKK ve HIPAA Uyumlu: Tüm bebek verileri şifrelenir, kimliksizleştirilir ve üçüncü taraflarla ticari paylaşıma kapatılır.</span>
                </span>
                <span className="font-mono text-emerald-300 font-bold">%100 Güvenli</span>
              </div>
            </div>
          </SlideWrapper>
        )}

        {/* ═════════════════════════════════════════════════════════════
            SLAYT 10 &bull; BÖLÜM 05: KAPSAYICI SAĞLIK & ÖZEL GEREKSİNİMLİ ÇOCUKLAR
            Web Sitesi: Ribbon 5 + InclusiveAccess (Prematüre, Serebral Palsi, 3 Aşama)
            ═════════════════════════════════════════════════════════════ */}
        {shouldRenderSlide('slide-inclusive', activeSlides, viewMode, safeCurrentIndex) && (
          <SlideWrapper
            id="slide-inclusive"
            chapter="BÖLÜM 05"
            category="KAPSAYICI SAĞLIK & ERKEN MÜDAHALE"
            slideIndex={getSlideIndex('slide-inclusive', activeSlides)}
            totalSlides={totalActive}
            onRemove={() => toggleSlideExclusion('slide-inclusive')}
            dark
            gradientBg="bg-white text-slate-900 border border-slate-200"
          >
            <div className="flex-1 flex flex-col justify-center my-auto">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coral/10 text-coral text-xs font-mono font-bold uppercase tracking-wider mb-1.5">
                  <Heart size={13} />
                  <span>ÖZEL GEREKSİNİMLİ ÇOCUKLAR & FIRSAT EŞİTLİĞİ</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-[#0B1E3B] tracking-tight">
                  Prematüre Bebekler ve Serebral Palsi Erken Farkındalığı
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
                  Beyin nöroplastisitesinin en yüksek olduğu 0–6 aylık kritik pencereyi kaçırmadan her çocuğa eşit sağlık başlangıcı sunuyoruz.
                </p>
              </div>

              {/* 3 Aşamalı Yolculuk Modeli */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="p-4 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#0284C7] bg-sky-50 px-2.5 py-0.5 rounded-full block w-fit mb-2">
                      0–3 Ay &bull; 1. Aşama
                    </span>
                    <h3 className="text-sm font-bold text-[#0B1E3B] mb-1">Spontan Hareket Analizi & Erken Sinyal</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Evde çekilen video ile bacak itişindeki mikro asimetriler erkenden yakalanır.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-sky-100/60 text-[#0284C7] text-xs font-bold font-mono">
                    +9 Ay Ortalama Erken Teşhis Kazancı
                  </div>
                </div>

                <div className="p-4 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-coral bg-coral/10 px-2.5 py-0.5 rounded-full block w-fit mb-2">
                      3–6 Ay &bull; 2. Aşama
                    </span>
                    <h3 className="text-sm font-bold text-[#0B1E3B] mb-1">Kişiselleştirilmiş Ev Egzersizleri</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Pediatrik fizyoterapist kontrolünde boyun-gövde dengesi (tummy-time) ve kas tonusu dengelenir.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-coral/15 text-coral text-xs font-bold font-mono">
                    %85 Nöroplastisite Fonksiyonel Uyum
                  </div>
                </div>

                <div className="p-4 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full block w-fit mb-2">
                      6–12 Ay &bull; 3. Aşama
                    </span>
                    <h3 className="text-sm font-bold text-[#0B1E3B] mb-1">Bağımsız Yaşam & İlk Adımlar</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Zamanında müdahale edilen bebekler bağımsız oturma, emekleme ve yürüme becerisi kazanır.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold font-mono">
                    %92 Bağımsız Fonksiyonel Kapasite
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
                <span>
                  <strong>Sosyal Fırsat Eşitliği:</strong> Belediye iş birlikleri sayesinde dezavantajlı mahallelerdeki aileler bu ileri klinik takibe tamamen ücretsiz erişir.
                </span>
                <span className="font-mono font-bold text-amber-800 shrink-0 ml-3">Eşit Sağlık Erişimi</span>
              </div>
            </div>
          </SlideWrapper>
        )}

        {/* ═════════════════════════════════════════════════════════════
            SLAYT 11 &bull; BÖLÜM 05 EK: BİLİMSEL GÜVENCE VE DANIŞMA KURULU
            Web Sitesi: ScientificBoard (4 Danışman + 4 Standart)
            ═════════════════════════════════════════════════════════════ */}
        {shouldRenderSlide('slide-scientific-board', activeSlides, viewMode, safeCurrentIndex) && (
          <SlideWrapper
            id="slide-scientific-board"
            chapter="BÖLÜM 05 EK"
            category="BİLİMSEL GÜVENCE VE DANIŞMA KURULU"
            slideIndex={getSlideIndex('slide-scientific-board', activeSlides)}
            totalSlides={totalActive}
            onRemove={() => toggleSlideExclusion('slide-scientific-board')}
            dark
            gradientBg="bg-white text-slate-900 border border-slate-200"
          >
            <div className="flex-1 flex flex-col justify-center my-auto">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coral/10 text-coral text-xs font-mono font-bold uppercase tracking-wider mb-1.5">
                  <ShieldCheck size={13} />
                  <span>{ribbons?.ribbon5?.chapterTitle || 'KAPSAYICI SAĞLIK & BİLİM'}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-[#0B1E3B] tracking-tight">
                  {board?.title || 'Yapay zekâyı bilim, klinik uzmanlık ve etik ilkelerle buluşturuyoruz.'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
                  {board?.subtitle || 'DijitalBüyükanne algoritmaları bağımsız tıp hekimleri ve akademisyenlerin danışmanlığında geliştirilir.'}
                </p>
              </div>

              {/* Danışman Hekimler ve Kurucular */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-4">
                {(board?.advisors || []).map((adv: any, i: number) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        {adv.image ? (
                          <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-slate-200 shadow-2xs">
                            <Image src={adv.image} alt={adv.title} fill className="object-cover" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B1E3B] to-[#0284C7] text-white font-black text-xs flex items-center justify-center shrink-0">
                            {adv.monogram || 'DK'}
                          </div>
                        )}
                        <div className="min-w-0">
                          <span className="text-[9px] font-bold text-[#0284C7] uppercase tracking-wider block truncate">{adv.role}</span>
                          <h4 className="text-xs font-bold text-[#0B1E3B] truncate">{adv.title}</h4>
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-500 font-medium mb-1 truncate">{adv.institution}</p>
                      <p className="text-[10px] text-slate-600 leading-snug line-clamp-3">{adv.description}</p>
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-200 text-[9px] italic text-[#0284C7]">
                      &ldquo;{adv.quote}&rdquo;
                    </div>
                  </div>
                ))}
              </div>

              {/* 4 Klinik Standart Şeridi */}
              <div className="p-4 rounded-2xl bg-[#0B1E3B] text-white grid grid-cols-2 md:grid-cols-4 gap-4">
                {(board?.clinicalStandards || []).map((std: any, i: number) => (
                  <div key={i} className="text-left">
                    <span className="text-xs font-bold text-sky-300 block mb-0.5">{std.title}</span>
                    <span className="text-[10px] text-white/70 leading-snug block">{std.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </SlideWrapper>
        )}

        {/* ═════════════════════════════════════════════════════════════
            SLAYT 12 &bull; BÖLÜM 05 EK: GERÇEK HAYATTAN ETKİ HİKAYELERİ
            Web Sitesi: CaseStudies (Prematüre Zeynep, Kaan, Can Bebek)
            ═════════════════════════════════════════════════════════════ */}
        {shouldRenderSlide('slide-case-studies', activeSlides, viewMode, safeCurrentIndex) && (
          <SlideWrapper
            id="slide-case-studies"
            chapter="BÖLÜM 05 EK"
            category="ETKİ HİKAYELERİ & SAHA VAKALARI"
            slideIndex={getSlideIndex('slide-case-studies', activeSlides)}
            totalSlides={totalActive}
            onRemove={() => toggleSlideExclusion('slide-case-studies')}
            dark
            gradientBg="bg-slate-50 text-slate-900 border border-slate-200"
          >
            <div className="flex-1 flex flex-col justify-center my-auto">
              <div className="mb-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coral/10 text-coral text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Heart size={13} />
                  <span>{caseStudies?.eyebrow || 'GERÇEK HAYATTAN ETKİ HİKAYELERİ'}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-[#0B1E3B] tracking-tight">
                  {caseStudies?.title || 'Teknoloji bilimdir. Bir bebeğin adımı ise hayata tutunan bir mucizedir.'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
                  {caseStudies?.subtitle || 'DijitalBüyükanne ekosistemiyle erken fark edilen, zamanında desteklenen ailelerimizin başarı yolculukları.'}
                </p>
              </div>

              {/* 3 Hikaye Kartı */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-3">
                {(caseStudies?.cases || []).map((c: any, i: number) => (
                  <div key={i} className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-50 text-sky-700 px-2.5 py-0.5 rounded-full border border-sky-200">
                          {c.category}
                        </span>
                        <span className="text-xl">{c.emoji}</span>
                      </div>
                      <h3 className="text-sm font-bold text-[#0B1E3B] mb-1">{c.title}</h3>
                      <p className="text-[10px] font-mono text-slate-500 mb-2">{c.babyAge}</p>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">{c.summary}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 bg-slate-50 p-3 rounded-2xl">
                      <p className="text-[11px] italic text-slate-700 leading-snug">&ldquo;{c.quote}&rdquo;</p>
                      <span className="text-[10px] font-bold text-slate-900 block mt-1.5">— {c.author} ({c.location})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SlideWrapper>
        )}

        {/* ═════════════════════════════════════════════════════════════
            SLAYT 13 &bull; BÖLÜM 06: KANITA DAYALI SOSYAL ETKİ SİMÜLATÖRÜ
            Web Sitesi: Ribbon 6 + SocialImpactCalculator
            ═════════════════════════════════════════════════════════════ */}
        {shouldRenderSlide('slide-impact-calc', activeSlides, viewMode, safeCurrentIndex) && (
          <SlideWrapper
            id="slide-impact-calc"
            chapter="BÖLÜM 06"
            category="KANITA DAYALI SOSYAL ETKİ MODELİ"
            slideIndex={getSlideIndex('slide-impact-calc', activeSlides)}
            totalSlides={totalActive}
            onRemove={() => toggleSlideExclusion('slide-impact-calc')}
            gradientBg="bg-gradient-to-br from-[#0B1E3B] via-[#0D2A54] to-[#0A1F3D] text-white"
          >
            <div className="flex-1 flex flex-col justify-center my-auto">
              <div className="mb-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <TrendingUp size={13} />
                  <span>1.000 BEBEK & AİLELİK BİR PROJEDE RESMÎ BİLANÇO</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  Bir Karar Verin, Bin Hayata Dokunun.
                </h2>
                <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-3xl">
                  Tüm projeksiyonlar nörolojik ve kas hastalıkları standartları, DSÖ ve T.C. Sağlık Bakanlığı pediatrik kılavuzlarına dayanmaktadır:
                </p>
              </div>

              {/* 4 Kanıta Dayalı Metrik */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                  <span className="text-2xl sm:text-4xl font-black text-sky-300 font-mono block">44 Bebek</span>
                  <span className="text-xs font-bold text-white mt-1 block">Nöromotor Risk Taraması</span>
                  <p className="text-[10px] text-white/60 mt-1">Nörolojik ve kas taraması ile erken yakalanan motor asimetri (%4,4).</p>
                  <span className="text-[9px] font-mono text-sky-200 mt-2 block border-t border-white/10 pt-1">Ref: Einspieler 2005</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                  <span className="text-2xl sm:text-4xl font-black text-coral font-mono block">38 Bebek</span>
                  <span className="text-xs font-bold text-white mt-1 block">Zamanında Hekim Sevk</span>
                  <p className="text-[10px] text-white/60 mt-1">Cilt & sindirimde kritik pencereyi aşmadan muayene (%3,8).</p>
                  <span className="text-[9px] font-mono text-coral/80 mt-2 block border-t border-white/10 pt-1">Ref: DSÖ Kılavuzları</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                  <span className="text-2xl sm:text-4xl font-black text-blue-300 font-mono block">214 Anne</span>
                  <span className="text-xs font-bold text-white mt-1 block">Lohusa Anksiyete Desteği</span>
                  <p className="text-[10px] text-white/60 mt-1">Gece 03:00 yalnızlığı son bulan anne sayısı (%21,4).</p>
                  <span className="text-[9px] font-mono text-blue-200 mt-2 block border-t border-white/10 pt-1">Ref: Hacettepe 2021</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
                  <span className="text-2xl sm:text-4xl font-black text-emerald-300 font-mono block">520 Ziyaret</span>
                  <span className="text-xs font-bold text-white mt-1 block">Önlenebilir Acil Servis</span>
                  <p className="text-[10px] text-white/60 mt-1">Yanlış alarm ve hastane yığılması yerine evde huzur (%52).</p>
                  <span className="text-[9px] font-mono text-emerald-200 mt-2 block border-t border-white/10 pt-1">Ref: AAP & HSB Acil</span>
                </div>
              </div>

              {/* Denetlenebilirlik Konsolu */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-white/80">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>The Rotary Foundation (TRF), Sayıştay ve Belediye Meclisi denetimine hazır %100 şeffaf çıktı.</span>
                </span>
                <span className="font-mono text-sky-300 font-bold hidden sm:inline">%100 Denetlenebilir</span>
              </div>
            </div>
          </SlideWrapper>
        )}

        {/* ═════════════════════════════════════════════════════════════
            SLAYT 14 &bull; BÖLÜM 06 EK: KURUMSAL MODEL & SOSYAL BELEDİYECİLİK
            Web Sitesi: InstitutionsHero (11 Maddelik Checklist + Fular)
            ═════════════════════════════════════════════════════════════ */}
        {shouldRenderSlide('slide-institutions', activeSlides, viewMode, safeCurrentIndex) && (
          <SlideWrapper
            id="slide-institutions"
            chapter="BÖLÜM 06 EK"
            category="KURUMSAL MODEL VE SOSYAL BELEDİYECİLİK"
            slideIndex={getSlideIndex('slide-institutions', activeSlides)}
            totalSlides={totalActive}
            onRemove={() => toggleSlideExclusion('slide-institutions')}
            dark
            gradientBg="bg-white text-slate-900 border border-slate-200"
          >
            <div className="flex-1 flex flex-col justify-center my-auto">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-[#0284C7] text-xs font-mono font-bold uppercase tracking-wider mb-1.5">
                  <Building2 size={13} />
                  <span>{ribbons?.ribbon6?.chapterTitle || 'KAMU İŞ BİRLİĞİ & SOSYAL ETKİ'}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-[#0B1E3B] tracking-tight">
                  {institutions?.title || 'Bu, kurumunuzun kendi aile uygulaması olabilir.'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
                  {institutions?.subtitle || 'Tüm teknik altyapı bizden, yerel sosyal etki kurumunuzun markasıyla ailelere.'}
                </p>
              </div>

              {/* 11 Kurumsal Checklist Maddesi */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-4">
                {(institutions?.checklist || [
                  'Kuruma özel mobil uygulama (White-label altyapı)',
                  'Kurumsal logo ve görsel kimlik entegrasyonu',
                  'App Store & Google Play mağaza yayını',
                  'Kuruma özel kullanıcı kayıt & referans kodu',
                  'Şehre özel aile duyuru ve destek programları',
                  'Gelişmiş yönetim ve analitik paneli erişimi',
                  'Bölgesel etki ve kullanım istatistikleri',
                  'Sosyal etki raporlaması ve KPI takibi',
                  'Uzman yönlendirme ve randevu entegrasyonu',
                  'KVKK uyumlu güvenli sağlık verisi mimarisi',
                  'Belediye Hoş Geldin Bebek Kartı ve Rotary İpek Fular Hediyesi',
                ]).map((item: string, i: number) => (
                  <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs text-slate-800">
                    <CheckCircle2 size={15} className="text-[#0284C7] shrink-0" />
                    <span className="font-semibold text-[11px] leading-tight">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-700">
                <div>
                  <span className="font-bold text-[#0B1E3B] block">Belediye Meclisi Karar Taslağı & İş Birliği Protokolü:</span>
                  <span>Sosyal yardım yönetmeliklerine uygun, 48 saatte imzaya hazır protokol şablonu.</span>
                </div>
                <span className="px-3.5 py-1.5 rounded-xl bg-[#0B1E3B] text-white font-bold font-mono shrink-0">
                  Protokol Taslağı Hazır
                </span>
              </div>
            </div>
          </SlideWrapper>
        )}

        {/* ═════════════════════════════════════════════════════════════
            SLAYT 15 &bull; BÖLÜM 06 EK: DESTEKÇİLERİMİZ & KAMU İŞ BİRLİKLERİ
            Web Sitesi: SupportersPreview (Belediyeler, Rotary, Üniversiteler)
            ═════════════════════════════════════════════════════════════ */}
        {shouldRenderSlide('slide-supporters', activeSlides, viewMode, safeCurrentIndex) && (
          <SlideWrapper
            id="slide-supporters"
            chapter="BÖLÜM 06 EK"
            category="DESTEKÇİLERİMİZ"
            slideIndex={getSlideIndex('slide-supporters', activeSlides)}
            totalSlides={totalActive}
            onRemove={() => toggleSlideExclusion('slide-supporters')}
            dark
            gradientBg="bg-[#F5F8FD] text-slate-900 border border-slate-200"
          >
            <div className="flex-1 flex flex-col justify-center my-auto">
              <div className="mb-5 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-[#0284C7] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                  <span>DESTEKÇİLERİMİZ</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-[#0B1E3B] tracking-tight">
                  Bu yolculuğu birlikte büyütüyoruz.
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
                  Programı hayata geçiren kurumların katkısıyla daha fazla bebeğe ve aileye ulaşıyoruz.
                </p>
              </div>

              {/* Web Sitesindeki Destekçi Kartlarının Birebir Canlı Eşlemesi */}
              {displaySupporters.length > 0 ? (
                <div className={`grid gap-5 mb-5 ${
                  displaySupporters.length === 1
                    ? 'grid-cols-1 max-w-md mx-auto w-full'
                    : displaySupporters.length === 2
                    ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto w-full'
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {displaySupporters.map((s: any) => {
                    const cardColor = s.color || '#E31E24';
                    const initials = s.shortName || s.name.slice(0, 2).toUpperCase();

                    return (
                      <div
                        key={s.id}
                        className="bg-white rounded-3xl overflow-hidden flex flex-col border border-slate-200/80 shadow-md"
                      >
                        {/* Üst Renk Gradyanı */}
                        <div
                          className="h-1.5 w-full"
                          style={{
                            background: `linear-gradient(90deg, ${cardColor}, #0EA5E9)`,
                          }}
                        />

                        <div className="p-6 flex flex-col flex-1">
                          {/* Monogram Rozeti */}
                          <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-sm mb-4 shadow-sm"
                            style={{ backgroundColor: cardColor }}
                          >
                            {initials}
                          </div>

                          {/* Kurum Adı */}
                          <h3 className="text-[#0B1E3B] font-bold text-base leading-tight mb-1">
                            {s.name}
                          </h3>

                          {/* Program Adı */}
                          <p className="text-xs font-semibold mb-2 text-[#0284C7]">
                            {s.program}
                          </p>

                          {/* Şehir & Tür */}
                          <div className="flex items-center gap-2 text-slate-500 text-xs mb-3">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" />
                              {s.city}
                            </span>
                            <span>•</span>
                            <span className="uppercase text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                              {s.type}
                            </span>
                          </div>

                          {/* Açıklama */}
                          <p className="text-slate-600 text-xs leading-relaxed flex-1">
                            {s.description || 'Aile ve bebek gelişim süreçlerini desteklemek amacıyla hayata geçirilen program.'}
                          </p>

                          {/* Alt Bilgi */}
                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#0284C7] font-semibold">
                            <span>Resmî Protokol Aktif</span>
                            <span>Detayları Gör →</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-8 rounded-3xl bg-white border border-slate-200 text-center max-w-md mx-auto my-4 text-xs text-slate-500">
                  Henüz aktif bir destekçi kurumu tanımlanmamış. Yönetim panelinden kurum ekleyebilirsiniz.
                </div>
              )}

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-center text-xs text-slate-600">
                Siz de kurumunuz veya Rotary kulübünüz adına şehrinizdeki bebekleri korumak için programa dahil olabilirsiniz.
              </div>
            </div>
          </SlideWrapper>
        )}

        {/* ═════════════════════════════════════════════════════════════
            SLAYT 16 &bull; KAPANIŞ: BİRLİKTE BAŞLAYALIM & PROTOKOL ÇAĞRISI
            Web Sitesi: FinalCTA
            ═════════════════════════════════════════════════════════════ */}
        {shouldRenderSlide('slide-final-cta', activeSlides, viewMode, safeCurrentIndex) && (
          <SlideWrapper
            id="slide-final-cta"
            chapter="KAPANIŞ"
            category="İŞ BİRLİĞİ VE İMZA ÇAĞRISI"
            slideIndex={getSlideIndex('slide-final-cta', activeSlides)}
            totalSlides={totalActive}
            onRemove={() => toggleSlideExclusion('slide-final-cta')}
            gradientBg="bg-gradient-to-br from-[#0B1E3B] via-[#0D2A54] to-[#07172E] text-white"
          >
            <div className="flex-1 flex flex-col justify-center max-w-4xl text-center mx-auto my-auto">
              <div className="w-16 h-16 rounded-3xl bg-coral/20 border border-coral/40 text-coral flex items-center justify-center mx-auto mb-4">
                <Heart size={32} />
              </div>

              <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-widest block mb-2">
                {finalCTA?.eyebrow || 'BİRLİKTE BAŞLAYALIM'}
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-3">
                {finalCTA?.title || 'Her bebeğe şefkat, her aileye güvenilir rehberlik.'}
              </h2>

              <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto mb-6 font-normal">
                {finalCTA?.subtitle || 'Şehrinizdeki ve bölgenizdeki bebeklerin geleceğini korumak için bugün kurumsal iş birliği protokolünü başlatalım.'}
              </p>

              {/* İletişim & Protokol Kartları */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-4xl mx-auto w-full text-left mb-6">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-sky-300 font-mono font-bold block mb-1">E-POSTA</span>
                  <a href="mailto:info@adapha.com" className="text-xs font-bold text-white block hover:text-sky-300">info@adapha.com</a>
                  <a href="mailto:info@babysensai.com" className="text-[11px] text-white/60 block hover:text-sky-300">info@babysensai.com</a>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-sky-300 font-mono font-bold block mb-1">TELEFON</span>
                  <a href="tel:05428461232" className="text-xs font-bold text-white block hover:text-sky-300 font-mono">0542 846 12 32</a>
                  <span className="text-[10px] text-white/50 block">Pzt - Cum: 09:00 - 18:00</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-sky-300 font-mono font-bold block mb-1">AR-GE ÜSSÜ</span>
                  <span className="text-[11px] font-bold text-white leading-tight block">OMÜ Samsun Teknopark</span>
                  <span className="text-[10px] text-white/50 block leading-tight">Atakum / Samsun</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-coral font-mono font-bold block mb-1">RESMÎ PROTOKOL</span>
                  <span className="text-xs font-bold text-white block">24 Saatte Teslim</span>
                  <span className="text-[10px] text-white/60 block font-mono">adapha.com &bull; babysensai.com</span>
                </div>
              </div>

              <div className="text-[11px] text-white/60 border-t border-white/10 pt-3">
                DijitalBüyükanne ve BabySensAI; <strong>Adapha Yapay Zeka</strong> tarafından Ondokuz Mayıs Üniversitesi (OMÜ) Kurupelit Kampüsü Samsun Teknopark bünyesinde geliştirilen tescilli kurumsal sağlık ekosistemidir.
              </div>
            </div>
          </SlideWrapper>
        )}
          </>
        )}

      </main>

      {/* ─────────────────────────────────────────────────────────────
          3. BASKI VE PDF İÇİN ÖZEL CSS STİLLERİ
          ───────────────────────────────────────────────────────────── */}
      <style jsx global>{`
        /* Slayt Kartı Boyutu ve Stili */
        .slide-card {
          width: 100%;
          min-height: 680px;
          border-radius: 32px;
          padding: 40px 48px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        /* Yazdırma ve PDF Çıktı Standartları */
        @page {
          size: A4 landscape;
          margin: 8mm;
        }

        @media print {
          html, body {
            background: white !important;
            color: #0f172a !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .no-print {
            display: none !important;
          }

          .slide-card {
            page-break-after: always !important;
            break-after: page !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            min-height: 190mm !important;
            max-height: 190mm !important;
            height: 190mm !important;
            width: 100% !important;
            border-radius: 16px !important;
            padding: 24px 32px !important;
            margin-bottom: 0 !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function PresentationDeckPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center font-mono">
          Sunum Yükleniyor...
        </div>
      }
    >
      <PresentationDeckInner />
    </Suspense>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// YARDIMCI GÖRÜNÜM VE FİLTRELEME FONKSİYONLARI
// ─────────────────────────────────────────────────────────────────────────────
function shouldRenderSlide(
  slideId: string,
  activeSlides: SlideDef[],
  viewMode: 'all' | 'single',
  currentIndex: number
): boolean {
  const activeIndex = activeSlides.findIndex((s) => s.id === slideId);
  if (activeIndex === -1) return false;
  if (viewMode === 'all') return true;
  return activeIndex === currentIndex;
}

function getSlideIndex(slideId: string, activeSlides: SlideDef[]): number {
  const idx = activeSlides.findIndex((s) => s.id === slideId);
  return idx !== -1 ? idx + 1 : 1;
}

// ─────────────────────────────────────────────────────────────────────────────
// SLAYT SARICI BİLEŞENİ (BAŞLIK, SLAYT SİLME BUTONU VE DİNAMİK NUMARALANDIRMA)
// ─────────────────────────────────────────────────────────────────────────────
function SlideWrapper({
  id,
  chapter,
  category,
  slideIndex,
  totalSlides,
  onRemove,
  dark = false,
  gradientBg,
  children,
}: {
  id: string;
  chapter: string;
  category: string;
  slideIndex: number;
  totalSlides: number;
  onRemove: () => void;
  dark?: boolean;
  gradientBg: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`slide-card ${gradientBg}`}>
      {/* Slayt Başlığı */}
      <div className={`flex items-center justify-between pb-3.5 mb-3 border-b ${dark ? 'border-slate-200' : 'border-white/15'}`}>
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-sky-500 text-white font-black text-xs flex items-center justify-center shadow-sm">
            DB
          </div>
          <div>
            <span className={`text-[10px] font-mono font-bold tracking-wider uppercase block ${dark ? 'text-slate-500' : 'text-sky-300'}`}>
              {chapter} &bull; {category}
            </span>
            <span className={`text-xs font-bold ${dark ? 'text-[#0B1E3B]' : 'text-white'}`}>
              DijitalBüyükanne Ekosistemi
            </span>
          </div>
        </div>

        {/* Numaralandırma & Slayt Çıkarma Butonu */}
        <div className="flex items-center gap-2">
          {/* Slaytı Çıkar / Sil Butonu (no-print) */}
          <button
            onClick={onRemove}
            className={`no-print px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              dark
                ? 'bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200'
                : 'bg-white/10 hover:bg-rose-500/30 text-rose-200 hover:text-white border border-white/20'
            }`}
            title="Bu slaytı sunumdan ve PDF çıktısından çıkar"
          >
            <Trash2 size={12} />
            <span className="hidden sm:inline">Slaytı Çıkar</span>
          </button>

          {/* Dinamik Slayt Numarası (Örn: 03 / 14) */}
          <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${
            dark ? 'bg-slate-100 text-slate-700 border-slate-300' : 'bg-white/10 text-white border-white/20'
          }`}>
            SLAYT {slideIndex.toString().padStart(2, '0')} / {totalSlides.toString().padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Slayt İçeriği */}
      {children}

      {/* Slayt Alt Bilgisi (Footer) */}
      <div className={`flex items-center justify-between pt-3 mt-3 border-t text-[10px] font-mono ${
        dark ? 'border-slate-200 text-slate-500' : 'border-white/15 text-white/50'
      }`}>
        <span>DijitalBüyükanne &bull; Resmî Kurumsal Sunum & İhale Dosyası</span>
        <span>Gizli ve Kurumsal Ortaklıklara Özeldir &bull; Slayt {slideIndex} / {totalSlides}</span>
      </div>
    </div>
  );
}
