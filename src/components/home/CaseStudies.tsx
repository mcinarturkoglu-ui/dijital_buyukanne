'use client';

import { useState } from 'react';
import {
  Quote,
  Heart,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const cases = [
  {
    category: 'Erken Nöromotor Müdahale',
    badge: 'Prematüre Gelişim',
    title: '32 Haftalık Zeynep Bebeğin Bağımsız Yürüyüşü',
    babyAge: '2. Ayda Farkındalık → 14. Ayda İlk Adımlar',
    resultBadge: '🎉 Bağımsız yürüyüş kazanıldı',
    color: 'border-sky-200',
    accentColor: 'text-sky-600',
    bgLight: 'from-sky-50',
    tagBg: 'bg-sky-50 border-sky-200 text-sky-700',
    activeBg: 'bg-sky-600',
    pingColor: 'bg-sky-400',
    summary:
      "32. haftada prematüre doğan Zeynep'in bacak itişindeki hafif asimetri BabySensAI video analiziyle 9. haftada tespit edildi.",
    journey: [
      { label: '2. Ay', step: 'Mobil uygulamadan çekilen 2 dakikalık video nöromotor asimetri sinyali verdi.' },
      { label: '3. Ay', step: 'Sistem üzerinden pediatrik fizyoterapist ile ev egzersiz programı başlatıldı.' },
      { label: '7. Ay', step: 'Desteksiz dik oturma ve çevreyle aktif etkileşim kazanıldı.' },
      { label: '14. Ay', step: 'Zeynep hiçbir yardımcı cihaza gerek kalmadan ilk bağımsız adımlarını attı!' },
    ],
    quote:
      'İyi ki "zamanla geçer" diyerek beklememişiz. Dijital Büyükanne sayesinde en kritik ilk 3 ayı değerlendirdik.',
    author: "Elif K. (Zeynep'in Annesi)",
    location: 'Ankara',
    emoji: '👶🏻',
  },
  {
    category: 'Bebek Bezi & Sindirim Desteği',
    badge: 'Sindirim & Besin Uyumu',
    title: 'İlk Aylarda Yakalanan Sindirim İpucu',
    babyAge: 'Erken Renk Taraması → Huzurlu ve Sağlıklı Büyüme',
    resultBadge: '✅ Gelişim eğrisi normale döndü',
    color: 'border-coral/30',
    accentColor: 'text-coral',
    bgLight: 'from-orange-50',
    tagBg: 'bg-orange-50 border-orange-200 text-coral',
    activeBg: 'bg-coral',
    pingColor: 'bg-coral',
    summary:
      'Emir bebeğin bezindeki soluk renk ve sindirim hassasiyeti yapay zekâ destekli renk kartıyla erkenden fark edilerek hekime yönlendirildi.',
    journey: [
      { label: '1. Ay', step: 'Anne bez fotoğrafını yükledi; sistem pediatrik renk skalasına göre çocuk hekimi kontrolü önerdi.' },
      { label: 'Ertesi Gün', step: 'Aile hekimi ve çocuk doktoruna başvurularak doğru beslenme ve takip programı oluşturuldu.' },
      { label: 'Kısa Sürede', step: 'Sindirim huzursuzluğu ve kilo alımı takibe alınarak gelişim eğrisi ideal seyrine ulaştı.' },
      { label: 'Bugün', step: 'Emir sağlıklı, neşeli ve akranlarıyla aynı gelişim temposunda güvenle büyüyor.' },
    ],
    quote:
      'Erken farkındalık ve hekimimizle doğru zamanda buluşmak, bebeğimizin gelişiminde en büyük güvencemiz ve rehberimiz oldu.',
    author: "Merve T. (Emir'in Annesi)",
    location: 'İstanbul',
    emoji: '🍼',
  },
  {
    category: 'Örnek Belediye İş Birliği',
    badge: 'Sosyal Belediyecilik',
    title: '1.200 Aileye Ulaşan Şehir Aile Ekosistemi',
    babyAge: '12 Ayda 1.200 Yeni Doğan Ailesi',
    resultBadge: '🏆 %98,4 aile memnuniyeti',
    color: 'border-emerald-300',
    accentColor: 'text-emerald-600',
    bgLight: 'from-emerald-50',
    tagBg: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    activeBg: 'bg-emerald-600',
    pingColor: 'bg-emerald-400',
    summary:
      'İlçe belediyesi, yeni doğan ziyaret paketine DijitalBüyükanne erişim kartı ekleyerek tüm ailelere 7/24 uzman desteği sundu.',
    journey: [
      { label: 'Başlangıç', step: '1.200 aileye ücretsiz DijitalBüyükanne mobil uygulama lisansı dağıtıldı.' },
      { label: '3. Ay', step: '28 bebekte erken dönemde motor veya cilt gelişiminde destek ihtiyacı yakalandı.' },
      { label: '6. Ay', step: 'Belediye sağlık ekipleri ve kadın-aile merkezi doğrudan ailelerle temas kurdu.' },
      { label: 'Sonuç', step: '%98.4 aile memnuniyetiyle ilçenin en başarılı sosyal sorumluluk projesi seçildi.' },
    ],
    quote:
      'Belediyemizin ailelere verdiği en anlamlı hediye oldu. Şehrimizin çocuklarına bilim ve sevgiyle dokunuyoruz.',
    author: 'Sosyal Hizmetler Dairesi Koordinatörü',
    location: 'İlçe Belediyesi',
    emoji: '🏙️',
  },
];

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);
  const current = cases[activeCase];

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-slate-50 via-white to-[#F5F8FD] relative overflow-hidden" id="basari-hikayeleri">
      {/* Background decorations — sky palette */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-sky-600 bg-sky-50 border border-sky-200 px-4 py-1.5 rounded-full mb-4">
            <Heart size={14} className="text-coral fill-coral" />
            <span>Gerçek Hayattan Etki Hikayeleri</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Teknoloji bilimdir. Bir bebeğin adımı ise <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] to-[#FF5A43]">hayata tutunan bir mucizedir.</span>
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
                  ? `${c.activeBg} text-white border-transparent shadow-xl scale-[1.02]`
                  : 'bg-white text-navy hover:bg-slate-50 border-slate-200 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${activeCase === idx ? 'text-white/80' : 'text-navy/50'}`}>
                  {c.badge}
                </span>
                {activeCase === idx && <span className={`w-2 h-2 rounded-full bg-white/80 animate-ping`} />}
              </div>
              <h4 className="text-xs sm:text-sm font-bold line-clamp-2 leading-snug">{c.title}</h4>
            </button>
          ))}
        </div>

        {/* Active Featured Case Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Story Timeline */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${current.tagBg}`}>
                {current.category}
              </span>
              <span className="text-xs font-mono font-bold text-navy/60 bg-slate-100 px-2.5 py-1 rounded-full">
                {current.babyAge}
              </span>
            </div>

            {/* Result badge */}
            <div className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl ${current.tagBg} w-fit`}>
              <CheckCircle2 size={13} />
              {current.resultBadge}
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-navy leading-snug">
              {current.title}
            </h3>

            <p className="text-xs sm:text-sm text-navy/70 leading-relaxed font-medium">
              {current.summary}
            </p>

            {/* Mini Timeline */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 flex flex-col gap-0 mt-2 relative">
              <p className="text-xs font-bold uppercase tracking-wider text-navy/80 mb-3">
                Gelişim ve İyileşme Zaman Çizelgesi
              </p>
              {current.journey.map((item, i) => (
                <div key={i} className="flex items-start gap-3 relative pb-3">
                  {/* Vertical connector line */}
                  {i < current.journey.length - 1 && (
                    <div className="absolute left-[22px] top-6 bottom-0 w-0.5 bg-slate-200" />
                  )}
                  {/* Step dot */}
                  <div className={`w-[18px] h-[18px] rounded-full ${current.activeBg} flex items-center justify-center shrink-0 mt-0.5 z-10 shadow-sm`}>
                    <span className="text-white text-[8px] font-black">{i + 1}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className={`text-[10px] font-black uppercase tracking-wider ${current.accentColor}`}>{item.label}</span>
                    <span className="text-xs text-navy/75 leading-relaxed">{item.step}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Emotive Quote Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B2545] via-[#0c395e] to-[#0B2545] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-400/20 text-sky-300 flex items-center justify-center mb-4">
                <Quote size={22} />
              </div>
              <p className="text-sm sm:text-base font-medium leading-relaxed italic text-white/95">
                &ldquo;{current.quote}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-white/15 mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg flex-shrink-0">
                {current.emoji}
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">{current.author}</h4>
                <p className="text-[10px] text-sky-300">{current.location}</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
