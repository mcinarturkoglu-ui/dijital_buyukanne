'use client';

import Link from 'next/link';
import {
  Smartphone,
  Baby,
  Activity,
  Sparkles,
  MessageCircle,
  UserCheck,
  Moon,
  Apple,
  HeartHandshake,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  Download,
  ArrowRight,
  Droplets,
  Award,
  Video,
  ScanFace,
  Layers,
  FileText,
  QrCode,
} from 'lucide-react';
import { PhoneMockup } from '@/components/ui/PhoneMockup';

export default function UygulamaPage() {
  const aiEngines = [
    {
      title: '0–6 Ay Video Hareket Analizi (BabySensAI)',
      badge: 'Prechtl GMA Standardı',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      icon: Video,
      desc: 'Bebeğinizin sırtüstü uyanıkken çekilen 2-3 dakikalık doğal hareket videosu üzerinden 18 eklem kinematik analizi yapılır; spontan fidgety hareket kalitesi ve olası asimetriler taranır.',
      metrics: ['18 Eklem Kinematiği', 'Serebral Palsi Erken Riski', 'Klinik Rehber Protokolü'],
    },
    {
      title: 'Derma-41 Pediatrik Cilt Taraması',
      badge: '41 Cilt Anomalisi',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      icon: ScanFace,
      desc: 'Bebek cildinde oluşan kızarıklık, pişik, konak, egzama veya döküntülerin fotoğraf üzerinden piksel derinlik analiziyle ön sınıflandırması yapılır ve doğru bakım önerilir.',
      metrics: ['41 Farklı Lezyon Sınıfı', 'Acil Alarm Belirteçleri', 'Ev Bakım Rehberi'],
    },
    {
      title: 'Bebek Bezi & Pediatrik Renk Skalası',
      badge: 'DSÖ 6 Seviyeli Skala',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      icon: Droplets,
      desc: 'Bebek dışkısının rengi ve kıvamı uluslararası pediatrik renk kartlarıyla eşleştirilerek sarılık, safra yolu tıkanıklığı veya sindirim hassasiyeti erken safhada fark edilir.',
      metrics: ['Kilsi Renk Alarmı', 'Sindirim & Besin Uyumu', 'Hekime Doğrudan Sevk'],
    },
  ];

  const modules = [
    { title: 'Bebeğim Günlüğü', desc: 'Kişiselleştirilmiş gelişim takvimi, boy-kilo persentil eğrileri ve anı albümü.', icon: Baby, tag: 'Gelişim' },
    { title: 'Büyükanne’ye Sor', desc: '7/24 pedagog ve çocuk hekimi onaylı yanıtlar sunan yapay zekâ asistanı.', icon: MessageCircle, tag: '7/24 AI' },
    { title: 'Uzmanına Danış', desc: 'Kritik durumlarda pediatrik fizyoterapist ve uzman çocuk doktoru randevusu.', icon: UserCheck, tag: 'Klinik' },
    { title: 'Uyku Düzeni & Rutinler', desc: 'Aylara göre biyolojik uyku pencereleri, beyaz gürültü ve yatış rehberi.', icon: Moon, tag: 'Rutin' },
    { title: 'Ek Gıda & Beslenme', desc: '3 gün kuralı, alerjen takibi, BLW tarifleri ve anne sütü saklama kılavuzu.', icon: Apple, tag: 'Beslenme' },
    { title: 'Emzirme & Süt Artırma', desc: 'Doğru kavrama teknikleri, mastit önleme ve güvenli sağma protokolleri.', icon: HeartHandshake, tag: 'Anne Sağlığı' },
    { title: 'Bebek Bakımı & Masaj', desc: 'Gaz masajı, banyo güvenliği, pişik koruma ve temel yenidoğan hijyeni.', icon: ShieldCheck, tag: 'Günlük Bakım' },
    { title: 'Gelişim Kilometre Taşları', desc: 'Kaba motor, ince motor, dil ve bilişsel becerilerin aylık kontrol listesi.', icon: Calendar, tag: 'Kilometre Taşı' },
  ];

  const steps = [
    {
      step: '01',
      title: 'Bebeğinizin Profilini Oluşturun',
      desc: 'Doğum tarihi, doğum haftası (prematüre düzeltilmiş yaş) ve temel bilgileri sisteme girin.',
    },
    {
      step: '02',
      title: 'Ev Ortamında Kısa Video/Fotoğraf Çekin',
      desc: 'Hastaneye gitmeden, evinizin konforunda 30 saniyelik doğal hareket veya cilt görüntüsü yükleyin.',
    },
    {
      step: '03',
      title: 'Anında Klinik Ön Değerlendirme Alın',
      desc: 'Sistem yapay zekâ taramasını tamamlar; risk varsa sizi en yakın doğru çocuk uzmanına yönlendirir.',
    },
  ];

  return (
    <div className="pt-20 bg-[#F8FAFC]">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO BÖLÜMÜ (MOCKUP + İNDİRME SEÇENEKLERİ)
          ───────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#07172E] via-[#0B2546] to-[#0A1E38] text-white py-16 lg:py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#0284C7]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="max-w-2xl text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sky-200 text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-xs">
              <Award size={14} className="text-emerald-400" />
              <span>0–24 AY BÜTÜNCÜL AİLE DESTEK EKOSİSTEMİ</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
              DijitalBüyükanne <br />
              <span className="bg-gradient-to-r from-sky-300 via-teal-200 to-rose-300 bg-clip-text text-transparent">
                Her An Bebeğinizin Yanında
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 font-light">
              Bebeğinizin ilk 24 aylık gelişim yolculuğunda; BabySensAI patentli video hareket analizi, 
              Derma-41 cilt taraması ve 7/24 pediatrik yapay zekâ rehberliği tek bir şefkatli uygulamada buluştu.
            </p>

            {/* App Store & Google Play Butonları */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#indir"
                className="flex items-center gap-3 bg-white hover:bg-slate-100 text-[#0B1E3B] rounded-2xl px-5 py-3 transition-all shadow-lg hover:shadow-xl hover:scale-102 font-bold text-left"
              >
                <Download size={22} className="text-[#0284C7]" />
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">ÇOK YAKINDA</p>
                  <p className="text-sm font-black">App Store</p>
                </div>
              </a>

              <a
                href="#indir"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-2xl px-5 py-3 transition-all shadow-lg hover:scale-102 font-bold text-left"
              >
                <Download size={22} className="text-emerald-400" />
                <div>
                  <p className="text-[10px] text-white/60 uppercase tracking-wider font-mono">ÇOK YAKINDA</p>
                  <p className="text-sm font-black">Google Play</p>
                </div>
              </a>

              {/* Kurumsal Sürüm Linki */}
              <Link
                href="/kurumlar"
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-coral hover:bg-coral-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-coral/30 transition-all hover:scale-102"
              >
                <span>Kurumunuza Özel Sürüm</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="inline-flex items-center gap-4 p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1 text-[#0B1E3B]">
                <QrCode size={28} />
              </div>
              <div className="text-left text-xs text-white/80">
                <p className="font-bold text-white">Pilot Program ile Kullanımda</p>
                <p>Samsun Büyükşehir Belediyesi Aile Destek Ağı</p>
              </div>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="relative shrink-0">
            <PhoneMockup size="lg" label="DijitalBüyükanne v2.4">
              <div className="bg-slate-50 h-full flex flex-col text-slate-800">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#0B1E3B] to-[#0284C7] text-white p-4 rounded-b-2xl shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm">DijitalBüyükanne</span>
                    <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded-full font-bold">0–24 Ay</span>
                  </div>
                  <p className="text-xs text-white/90">Hoş geldiniz, Selin & Ali (3 Aylık)</p>
                </div>

                {/* Dashboard content */}
                <div className="p-3.5 space-y-2.5 flex-1 overflow-y-auto text-xs">
                  <div className="bg-white p-3 rounded-xl shadow-xs border border-slate-100">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[#0B1E3B]">Gelişimsel Takvim</span>
                      <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">Normale Uygun</span>
                    </div>
                    <p className="text-[11px] text-slate-600">3. ay boyun-baş kontrolü ve sosyal gülümseme dönemi.</p>
                  </div>

                  <div className="bg-rose-50/80 p-3 rounded-xl border border-rose-100">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-rose-800">BabySensAI Hareket Analizi</span>
                      <span className="text-[10px] text-rose-700 font-mono font-bold">0-6 Ay</span>
                    </div>
                    <p className="text-[11px] text-slate-700">Evde çekilen video ile spontan hareket kalitesi testi.</p>
                  </div>

                  <div className="bg-sky-50/80 p-3 rounded-xl border border-sky-100">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sky-900">Büyükanne’ye Sor</span>
                      <span className="text-[10px] text-sky-700 font-mono font-bold">7/24 AI</span>
                    </div>
                    <p className="text-[11px] text-slate-700">&quot;Bebeklerde gece uykusunda gaz sancısı nasıl hafifler?&quot;</p>
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. 3 TEMEL YAPAY ZEKÂ MOTORU (KLİNİK ÖN DEĞERLENDİRME)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#0284C7] block mb-2">
            KLİNİK VE BİYOMETRİK YAPAY ZEKÂ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1E3B] tracking-tight">
            3 Güçlü Yapay Zekâ Analiz Motoru
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Tanı koymaz; uluslararası bilimsel kılavuzlar ışığında objektif ön değerlendirme sunarak doğru hekime sevk eder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {aiEngines.map((engine, idx) => {
            const Icon = engine.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-[#0B1E3B] group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                      <Icon size={22} />
                    </div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${engine.badgeColor}`}>
                      {engine.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B1E3B] mb-2 leading-snug">
                    {engine.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {engine.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {engine.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3. NASIL ÇALIŞIR? (3 ADIMLI SÜREÇ)
            ───────────────────────────────────────────────────────────── */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-md mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#0284C7] block mb-2">
              KULLANIM KOLAYLIĞI
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B1E3B] tracking-tight">
              3 Basit Adımda Güvenli Takip
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((st, idx) => (
              <div key={idx} className="relative text-center md:text-left">
                <span className="text-4xl font-black text-slate-200 font-mono block mb-2">
                  {st.step}
                </span>
                <h4 className="text-base font-bold text-[#0B1E3B] mb-2">
                  {st.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            4. UYGULAMANIN 8 TEMEL MODÜLÜ
            ───────────────────────────────────────────────────────────── */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#0284C7] block mb-2">
              KAPSAMLI DESTEK ALANLARI
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B1E3B] tracking-tight">
              Ailenin İhtiyaç Duyduğu Tüm Bilgi Tek Ekranda
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center">
                        <Icon size={18} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        {m.tag}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-[#0B1E3B] mb-1">
                      {m.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            5. KURUMSAL WHITE-LABEL BANNER
            ───────────────────────────────────────────────────────────── */}
        <div className="bg-gradient-to-r from-[#0B1E3B] via-[#0E2850] to-[#0A1F3D] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-mono font-bold uppercase mb-4">
              <Smartphone size={13} />
              <span>KURUMSAL WHITE-LABEL ÇÖZÜMÜ</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-3">
              Kurumunuzun Adıyla App Store & Google Play&apos;de
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              DijitalBüyükanne ve BabySensAI teknolojisini belediyenizin, vakfınızın veya STK&apos;nızın kendi kurumsal logosu ve renkleriyle ailelerinize ücretsiz bir kamu hizmeti olarak sunabilirsiniz.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/kurumlar"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-coral to-[#e8634f] hover:from-coral-600 text-white font-bold text-sm shadow-lg shadow-coral/30 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <span>Kurumsal Başvuru Yapın</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/sunum"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-all inline-flex items-center gap-2"
            >
              <FileText size={16} className="text-sky-300" />
              <span>PDF Sunum</span>
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
