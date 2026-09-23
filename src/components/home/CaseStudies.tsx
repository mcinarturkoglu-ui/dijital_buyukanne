'use client';

import { useState } from 'react';
import {
  Quote,
  Heart,
  Baby,
  Building2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

const cases = [
  {
    category: 'Erken Nöromotor Müdahale',
    badge: 'Prematüre Gelişim',
    title: '32 Haftalık Zeynep Bebeğin Bağımsız Yürüyüşü',
    babyAge: '2. Ayda Farkındalık → 14. Ayda İlk Adımlar',
    color: 'border-turquoise/30',
    accentColor: 'text-turquoise',
    bgLight: 'from-turquoise/10',
    summary:
      '32. haftada prematüre doğan Zeynep’in bacak itişindeki hafif asimetri BabySensAI video analiziyle 9. haftada tespit edildi.',
    journey: [
      '2. Ay: Mobil uygulamadan çekilen 2 dakikalık video nöromotor asimetri sinyali verdi.',
      '3. Ay: Sistem üzerinden pediatrik fizyoterapist ile ev egzersiz programı başlatıldı.',
      '7. Ay: Desteksiz dik oturma ve çevreyle aktif etkileşim kazanıldı.',
      '14. Ay: Zeynep hiçbir yardımcı cihaza gerek kalmadan ilk bağımsız adımlarını attı!',
    ],
    quote:
      'İyi ki "zamanla geçer" diyerek beklememişiz. Dijital Büyükanne sayesinde en kritik ilk 3 ayı değerlendirdik.',
    author: 'Elif K. (Zeynep’in Annesi)',
    location: 'Ankara',
  },
  {
    category: 'Bebek Bezi & Sindirim Desteği',
    badge: 'Sindirim & Besin Uyumu',
    title: 'İlk Aylarda Yakalanan Sindirim İpucu',
    babyAge: 'Erken Renk Taraması → Huzurlu ve Sağlıklı Büyüme',
    color: 'border-coral/30',
    accentColor: 'text-coral',
    bgLight: 'from-coral/10',
    summary:
      'Emir bebeğin bezindeki soluk renk ve sindirim hassasiyeti yapay zekâ destekli renk kartıyla erkenden fark edilerek hekime yönlendirildi.',
    journey: [
      '1. Ay: Anne bez fotoğrafını yükledi; sistem pediatrik renk skalasına göre çocuk hekimi kontrolü önerdi.',
      'Ertesi Gün: Aile hekimi ve çocuk doktoruna başvurularak doğru beslenme ve takip programı oluşturuldu.',
      'Kısa Sürede: Sindirim huzursuzluğu ve kilo alımı takibe alınarak gelişim eğrisi ideal seyrine ulaştı.',
      'Bugün: Emir sağlıklı, neşeli ve akranlarıyla aynı gelişim temposunda güvenle büyüyor.',
    ],
    quote:
      'Erken farkındalık ve hekimimizle doğru zamanda buluşmak, bebeğimizin gelişiminde en büyük güvencemiz ve rehberimiz oldu.',
    author: 'Merve T. (Emir’in Annesi)',
    location: 'İstanbul',
  },
  {
    category: 'Örnek Belediye İş Birliği',
    badge: 'Sosyal Belediyecilik',
    title: '1.200 Aileye Ulaşan Şehir Aile Ekosistemi',
    babyAge: '12 Ayda 1.200 Yeni Doğan Ailesi',
    color: 'border-emerald-300',
    accentColor: 'text-emerald-600',
    bgLight: 'from-emerald-50',
    summary:
      'İlçe belediyesi, yeni doğan ziyaret paketine DijitalBüyükanne erişim kartı ekleyerek tüm ailelere 7/24 uzman desteği sundu.',
    journey: [
      '1.200 aileye ücretsiz DijitalBüyükanne mobil uygulama lisansı dağıtıldı.',
      '28 bebekte erken dönemde motor veya cilt gelişiminde destek ihtiyacı yakalandı.',
      'Belediye sağlık ekipleri ve kadın-aile merkezi doğrudan ailelerle temas kurdu.',
      '%98.4 aile memnuniyetiyle ilçenin en başarılı sosyal sorumluluk projesi seçildi.',
    ],
    quote:
      'Belediyemizin ailelere verdiği en anlamlı hediye oldu. Şehrimizin çocuklarına bilim ve sevgiyle dokunuyoruz.',
    author: 'Sosyal Hizmetler Dairesi Koordinatörü',
    location: 'İlçe Belediyesi',
  },
];

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);
  const current = cases[activeCase];

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-slate-50 via-white to-soft-gray/40 relative overflow-hidden" id="basari-hikayeleri">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-turquoise bg-turquoise/10 border border-turquoise/25 px-4 py-1.5 rounded-full mb-4">
            <Heart size={14} className="text-coral fill-coral" />
            <span>Gerçek Hayattan Etki Hikayeleri</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Teknoloji bilimdir. Bir bebeğin adımı ise <br className="hidden sm:inline" />
            <span className="text-turquoise">hayata tutunan bir mucizedir.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-navy/70 leading-relaxed font-normal">
            DijitalBüyükanne ekosistemiyle erken fark edilen, zamanında desteklenen ailelerimizin ve öncü belediyelerimizin başarı yolculukları.
          </p>
        </div>

        {/* 3 Case Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 max-w-4xl mx-auto mb-8">
          {cases.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCase(idx)}
              className={`p-4 rounded-2xl text-left border transition-all ${
                activeCase === idx
                  ? 'bg-navy text-white border-navy shadow-xl scale-[1.02]'
                  : 'bg-white text-navy hover:bg-slate-50 border-slate-200 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${activeCase === idx ? 'text-turquoise' : 'text-navy/50'}`}>
                  {c.badge}
                </span>
                {activeCase === idx && <span className="w-2 h-2 rounded-full bg-turquoise animate-ping" />}
              </div>
              <h4 className="text-xs sm:text-sm font-bold line-clamp-1">{c.title}</h4>
            </button>
          ))}
        </div>

        {/* Active Featured Case Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Story Timeline (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-turquoise bg-turquoise/10 px-3 py-1 rounded-full border border-turquoise/25">
                {current.category}
              </span>
              <span className="text-xs font-mono font-bold text-navy/60 bg-slate-100 px-2.5 py-1 rounded-full">
                {current.babyAge}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-navy leading-snug">
              {current.title}
            </h3>

            <p className="text-xs sm:text-sm text-navy/70 leading-relaxed font-medium">
              {current.summary}
            </p>

            {/* Timeline Progress */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-2.5 mt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-navy/80">
                Gelişim ve İyileşme Zaman Çizelgesi
              </p>
              {current.journey.map((step, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-navy/75">
                  <CheckCircle2 size={15} className="text-turquoise shrink-0 mt-0.5" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Emotive Quote & Testimonial Box (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-navy via-[#0c395e] to-navy rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-turquoise/20 text-turquoise flex items-center justify-center mb-4">
                <Quote size={20} />
              </div>
              <p className="text-sm sm:text-base font-medium leading-relaxed italic text-white/95">
                &ldquo;{current.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-white/15 mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">{current.author}</h4>
                  <p className="text-[10px] text-turquoise">{current.location}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs">
                  👶🏻
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
