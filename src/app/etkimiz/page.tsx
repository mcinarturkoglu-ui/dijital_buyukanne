'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Heart,
  Users,
  Building2,
  MapPin,
  Activity,
  Stethoscope,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  FileText,
  Calculator,
  Baby,
  TrendingUp,
  Globe2,
  Smile,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

export default function EtkimizPage() {
  // Mini Kurumsal Etki Simülatörü state
  const [babyCount, setBabyCount] = useState<number>(500);

  // Hesaplanmış metrikler
  const estimatedScreenings = babyCount * 6; // Yıllık ortalama 6 tarama/bebek
  const estimatedEarlyDetections = Math.round(babyCount * 0.045); // %4.5 erken risk tespiti
  const estimatedConsultations = Math.round(babyCount * 0.85); // %85 rehberlik etkileşimi

  const realMetrics = [
    {
      value: '1.250+',
      label: 'Takip Edilen Bebek',
      desc: 'Samsun pilot bölgesi ve kurumsal programlar',
      icon: Baby,
      badge: 'Aktif Protokol',
      color: 'text-[#0284C7] bg-sky-50 border-sky-100',
    },
    {
      value: '850+',
      label: 'Düzenli Takip Yapan Aile',
      desc: 'Mobil uygulama üzerinden haftalık gelişim kaydı',
      icon: Users,
      badge: 'Kullanıcı Güveni',
      color: 'text-emerald-700 bg-emerald-50 border-emerald-100',
    },
    {
      value: '4.800+',
      label: 'AI Gelişim Taraması',
      desc: 'Video hareket, cilt anomalisi ve dışkı rengi analizi',
      icon: Activity,
      badge: 'Biyometrik Veri',
      color: 'text-rose-700 bg-rose-50 border-rose-100',
    },
    {
      value: '%92',
      label: 'Erken Farkındalık Oranı',
      desc: 'Ailelerin gelişim gecikmelerini zamanında fark etmesi',
      icon: TrendingUp,
      badge: 'Klinik Etki',
      color: 'text-indigo-700 bg-indigo-50 border-indigo-100',
    },
    {
      value: '%85+',
      label: 'Hekime Zamanında Yönlendirme',
      desc: 'Risk sinyali alındığında gecikmesiz uzman başvurusu',
      icon: Stethoscope,
      badge: 'Tıbbi Köprü',
      color: 'text-amber-700 bg-amber-50 border-amber-100',
    },
    {
      value: '17 İlçe',
      label: 'Coğrafi Yaygınlık',
      desc: 'Samsun geneli ve genişleyen etki havzası',
      icon: MapPin,
      badge: 'Saha Erişimi',
      color: 'text-teal-700 bg-teal-50 border-teal-100',
    },
  ];

  const impactPillars = [
    {
      title: 'Fırsat Eşitliği ve Erken Müdahale',
      subtitle: 'Her bebek için eşit başlangıç hakkı',
      desc: 'Sosyoekonomik durum veya coğrafi mesafe ne olursa olsun; her bebeğin nörolojik ve kas hastalıkları standartlarında nöromotor hareket analizine ve pediatrik cilt taramasına ücretsiz ulaşmasını sağlıyoruz.',
      icon: Heart,
      accent: 'from-rose-500 to-pink-600',
      tag: 'Sosyal Adalet',
    },
    {
      title: 'Sosyal Belediyecilik ve Kamu Entegrasyonu',
      subtitle: 'Yerel yönetimlerin şefkatli dijital köprüsü',
      desc: 'Belediyeler, yeni doğum yapan ailelerine "Dijital Hoş Geldin Bebek" paketiyle kurumsal yapay zekâ desteği sunarak doğrudan hanelere dokunan ölçülebilir bir sosyal hizmet üretir.',
      icon: Building2,
      accent: 'from-sky-500 to-blue-600',
      tag: 'Kamu Ortaklığı',
    },
    {
      title: 'Akademik ve Klinik Doğrulama',
      subtitle: 'OMÜ Tıp Fakültesi ve Teknopark Güvencesi',
      desc: 'Adapha Yapay Zeka algoritmaları keyfi değil; Ondokuz Mayıs Üniversitesi Tıp Fakültesi Çocuk Nörolojisi ve Pediatri uzmanlarının klinik danışmanlığında sürekli kalibre edilir.',
      icon: ShieldCheck,
      accent: 'from-emerald-500 to-teal-600',
      tag: 'Kanıta Dayalı',
    },
    {
      title: 'Aile Psikolojisi ve 7/24 Şefkat',
      subtitle: 'Lohusalık hüznü ve acemilik kaygısına son',
      desc: 'Annelerin uykusuz gecelerdeki endişelerini doğru bilimsel bilgiyle yatıştıran, gereksiz acil servis yığılmalarını önlerken kritik semptomlarda hayat kurtaran 7/24 yapay zekâ asistanı.',
      icon: Sparkles,
      accent: 'from-purple-500 to-indigo-600',
      tag: 'Bütüncül Destek',
    },
  ];

  const cityShowcases = [
    {
      city: 'Samsun',
      role: 'Aktif Saha Pilot Uygulaması',
      partner: 'Samsun Büyükşehir Belediyesi & OMÜ Teknopark',
      status: 'CANLI & AKTİF',
      statusColor: 'bg-emerald-500 text-white',
      coverage: '17 İlçe Genelinde',
      babies: '1.250+ Bebek',
      desc: 'Kadın ve Aile Hizmetleri Dairesi koordinasyonunda yeni doğan tüm hanelere dijital tarama erişimi sağlandı.',
      highlight: true,
    },
    {
      city: 'Ankara',
      role: 'Bölgesel Genişleme Etabı',
      partner: 'Rotary Bölge 2430 & Yerel Paydaşlar',
      status: 'HAZIRLIK AŞAMASINDA',
      statusColor: 'bg-sky-500 text-white',
      coverage: 'Merkez & Çevre İlçeler',
      babies: 'Hedef: 2.500 Bebek',
      desc: 'Anne ve çocuk sağlığı odak alanında toplum merkezleri ve aile sağlığı birimleriyle entegrasyon planı.',
      highlight: false,
    },
    {
      city: 'İstanbul & Metropoller',
      role: '2025-2026 Ölçekleme Modeli',
      partner: 'İlçe Belediyeleri ve Sosyal Vakıflar',
      status: 'GÖRÜŞMELER SÜRÜYOR',
      statusColor: 'bg-amber-500 text-white',
      coverage: 'Büyükşehir Ağları',
      babies: 'Hedef: 10.000+ Bebek',
      desc: 'Kreş öncesi dönemde erken nöromotor farkındalığın kreşler ve anne merkezleriyle yaygınlaştırılması.',
      highlight: false,
    },
  ];

  return (
    <div className="pt-20 bg-[#F8FAFC]">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO BÖLÜMÜ (PREMIUM DARK GRADIENT)
          ───────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#07172E] via-[#0B2546] to-[#0A1E38] text-white py-20 lg:py-28 px-4 md:px-8 relative overflow-hidden">
        {/* Glow ambient orbs */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0284C7]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sky-200 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-xs">
            <Award size={14} className="text-emerald-400" />
            <span>ÖLÇÜLEBİLİR SOSYAL ETKİ VE KÜRESEL VİZYON</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
            Birlikte Yarattığımız <br />
            <span className="bg-gradient-to-r from-sky-300 via-teal-200 to-rose-300 bg-clip-text text-transparent">
              Ölçülebilir Sosyal Etki
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light mb-10">
            Teknoloji bilimden, şefkatli dokunuş iş birliklerimizden. Samsun Büyükşehir Belediyesi pilot protokolü, 
            OMÜ Tıp Fakültesi ve Samsun Teknopark Ar-Ge güvencesiyle; ulaşılan her hane ve takip edilen her bebek için şeffaf göstergeler.
          </p>

          {/* Hızlı Kurumsal Güven Rozetleri */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white flex items-center gap-1.5">
              <Building2 size={13} className="text-emerald-400" />
              Samsun Büyükşehir Pilot Protokolü
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-sky-300" />
              OMÜ Tıp Fakültesi Klinik Güvencesi
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white flex items-center gap-1.5">
              <Globe2 size={13} className="text-teal-300" />
              UN SDG 3, 10 & 17 Uyumu
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CANLI SAHA GÖSTERGELERİ (6 BÜYÜK ETKİ METRİĞİ)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#0284C7] block mb-2">
            ŞEFFAF SAHA VERİLERİ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1E3B] tracking-tight">
            Somut Rakamlarla Değişen Hayatlar
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            DijitalBüyükanne ve BabySensAI algoritmalarının sahadaki canlı performansı ve ailelerin deneyimleri.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {realMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${metric.color} group-hover:scale-110 transition-transform`}>
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {metric.badge}
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-black text-[#0B1E3B] tracking-tight mb-1 group-hover:text-[#0284C7] transition-colors">
                    {metric.value}
                  </div>
                  <h3 className="text-base font-bold text-slate-800 mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {metric.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                  <CheckCircle2 size={13} />
                  <span>Doğrulanmış Saha İndeksi</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. 4 STRATEJİK SOSYAL ETKİ SÜTUNU
            ───────────────────────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#0284C7] block mb-2">
              BÜTÜNCÜL STRATEJİ
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1E3B] tracking-tight">
              Sosyal Etkimizin 4 Temel Taşı
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Kamu, akademi, teknoloji ve aileyi aynı amaç etrafında buluşturan sürdürülebilir mimari.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {impactPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 flex items-center justify-center text-[#0B1E3B] group-hover:bg-[#0284C7] group-hover:text-white transition-colors duration-300 shrink-0">
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {pillar.tag}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-[#0284C7] block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-[#0B1E3B] mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            4. TÜRKİYE YAYGINLAŞMA & ŞEHİRLER VİTRİNİ (YENİLENMİŞ KARTLAR)
            ───────────────────────────────────────────────────────────── */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-lg mb-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-slate-100">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-[#0284C7] tracking-wider block mb-1">
                YAYGINLAŞMA AĞI
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0B1E3B] tracking-tight">
                Türkiye Genelinde Sosyal Etki Ağı
              </h3>
              <p className="text-slate-600 text-sm mt-1 max-w-xl">
                Belediyeler ve sivil toplum paydaşlarıyla genişleyen yenilikçi aile kapısı.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-2 rounded-2xl text-xs font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Samsun Büyükşehir Pilot Protokolü Sahada</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cityShowcases.map((city, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  city.highlight
                    ? 'bg-gradient-to-b from-sky-50/70 via-white to-sky-50/30 border-[#0284C7]/40 shadow-md ring-2 ring-[#0284C7]/10'
                    : 'bg-slate-50/70 border-slate-200 hover:bg-white hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-black text-[#0B1E3B]">
                      {city.city}
                    </span>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full ${city.statusColor}`}>
                      {city.status}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#0284C7] block mb-1">
                    {city.role}
                  </span>
                  <p className="text-xs font-medium text-slate-700 mb-3">
                    {city.partner}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {city.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#0B1E3B]">
                  <span>{city.coverage}</span>
                  <span className="text-[#0284C7]">{city.babies}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            5. ETKİLEŞİMLİ KURUMSAL ETKİ SİMÜLATÖRÜ (İNTERAKTİF)
            ───────────────────────────────────────────────────────────── */}
        <div className="bg-gradient-to-br from-[#0B1E3B] via-[#0E2C52] to-[#0A1E38] rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-20 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Calculator size={14} />
              <span>İNTERAKTİF ETKİ SİMÜLATÖRÜ</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              Kurumunuz Kaç Haneye ve Bebeğe Ulaşabilir?
            </h3>
            <p className="text-sm text-white/80 leading-relaxed mb-8">
              İlçenizdeki veya hedef kitlenizdeki yıllık yeni doğan bebek sayısını seçin; sistemin üreteceği tahmini erken tarama ve klinik sevk çıktısını inceleyin.
            </p>

            {/* Slider Kontrolü */}
            <div className="bg-white/10 p-6 rounded-2xl border border-white/15 backdrop-blur-md mb-8">
              <div className="flex items-center justify-between mb-3 text-sm font-bold">
                <span>Hedef Bebek Sayısı:</span>
                <span className="text-2xl font-black text-emerald-400 font-mono">
                  {babyCount.toLocaleString('tr-TR')} Bebek / Yıl
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="100"
                value={babyCount}
                onChange={(e) => setBabyCount(Number(e.target.value))}
                className="w-full h-2.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] text-white/50 font-mono mt-2">
                <span>100 Bebek (Pilot)</span>
                <span>1.000 Bebek (İlçe)</span>
                <span>2.500 Bebek (Orta Ölçek)</span>
                <span>5.000 Bebek (Büyükşehir)</span>
              </div>
            </div>

            {/* Hesaplanan Sonuç Kartları */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <span className="text-xs text-white/70 block">Yıllık AI Gelişim Taraması</span>
                <span className="text-2xl font-black text-sky-300 font-mono">
                  ~{estimatedScreenings.toLocaleString('tr-TR')}
                </span>
                <span className="text-[10px] text-white/50 block mt-1">Hareket & Cilt Analizi</span>
              </div>

              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <span className="text-xs text-white/70 block">Erken Yakalanan Risk Tahmini</span>
                <span className="text-2xl font-black text-rose-300 font-mono">
                  ~{estimatedEarlyDetections.toLocaleString('tr-TR')} Bebek
                </span>
                <span className="text-[10px] text-white/50 block mt-1">Zamanında Müdahale Penceresi</span>
              </div>

              <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                <span className="text-xs text-white/70 block">Düzenli Aile Etkileşimi</span>
                <span className="text-2xl font-black text-emerald-300 font-mono">
                  ~{estimatedConsultations.toLocaleString('tr-TR')} Hane
                </span>
                <span className="text-[10px] text-white/50 block mt-1">%85+ Memnuniyet Oranı</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            6. GERÇEK HAYATTAN ETKİ ÖYKÜLERİ (2 ÖZEL VAKA)
            ───────────────────────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#0284C7] block mb-2">
              DOKUNDUĞUMUZ HAYATLAR
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1E3B] tracking-tight">
              Gerçek Hayattan Etki Öyküleri
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Vaka 1 */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                  Erken Nöromotor Müdahale
                </span>
                <span className="text-xs font-mono text-slate-400">32. Hafta Prematüre</span>
              </div>

              <h3 className="text-lg font-bold text-[#0B1E3B] mb-2">
                Zeynep Bebeğin Bağımsız İlk Adımları
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Prematüre doğan Zeynep&apos;in bacak itişindeki asimetri, ev ortamında çekilen kısa video analiziyle 9. haftada fark edildi. Çocuk hekimi ve fizyoterapist eşliğinde başlatılan ev egzersizleriyle Zeynep 14. ayında bağımsız yürüyüşe kavuştu.
              </p>

              <blockquote className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs italic text-slate-700">
                “İyi ki zamanla geçer diyerek beklememişiz. DijitalBüyükanne ve BabySensAI sayesinde en kritik ilk 3 ayı en verimli şekilde değerlendirdik.”
              </blockquote>
              <div className="mt-3 text-right text-[11px] font-bold text-slate-500">
                — Elif K. (Zeynep&apos;in Annesi)
              </div>
            </div>

            {/* Vaka 2 */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                  Bebek Bezi & Sindirim Desteği
                </span>
                <span className="text-xs font-mono text-slate-400">1. Ay Taraması</span>
              </div>

              <h3 className="text-lg font-bold text-[#0B1E3B] mb-2">
                Emir Bebekte Erken Yakalanan Sindirim İpucu
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Bebeğin bezindeki olağandışı renk tonu, sistemin pediatrik renk skalası analizinde erken uyarı sinyali verdi. Aile vakit kaybetmeden çocuk hekimine başvurdu; erken müdahale ile gelişim eğrisi normale döndü.
              </p>

              <blockquote className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs italic text-slate-700">
                “Acemi bir anne olarak bezdeki o hafif solukluğu fark edemezdim. Bizi panikletmeden doğrudan doğru uzman hekime yönlendirdi.”
              </blockquote>
              <div className="mt-3 text-right text-[11px] font-bold text-slate-500">
                — Merve T. (Samsun)
              </div>
            </div>

          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            7. KURUMSAL ÇAĞRI (CTA)
            ───────────────────────────────────────────────────────────── */}
        <div className="bg-gradient-to-r from-[#0B1E3B] to-[#082347] text-white rounded-3xl p-8 sm:p-12 text-center border border-white/10 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coral/20 text-coral text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Heart size={14} />
            <span>TOPLUMSAL GELECEĞE YATIRIM</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
            Şehrinizin Bebekleri İçin Bu Harekete Katılın
          </h3>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Kurumunuz, belediyeniz veya sivil toplum kuruluşunuz adına kaç aileye ulaşabileceğimizi birlikte planlayalım. 
            Hazır kurumsal altyapı ve yönetim paneliyle hemen başlayın.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/kurumlar"
              className="px-8 py-4 bg-gradient-to-r from-coral to-[#e8634f] hover:from-coral-600 text-white font-bold rounded-2xl transition-all shadow-lg shadow-coral/30 hover:shadow-coral/50 inline-flex items-center gap-2"
            >
              <span>Kurum Olarak Başvurun</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/sunum"
              target="_blank"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-2xl transition-all inline-flex items-center gap-2"
            >
              <FileText size={16} className="text-sky-300" />
              <span>Kurumsal Sunumu İncele</span>
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}
