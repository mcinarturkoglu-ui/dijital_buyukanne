'use client';

import Image from 'next/image';
import {
  Quote,
  Heart,
  CheckCircle2,
  Sparkles,
  Award,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

const cases = [
  {
    category: 'Erken Nöromotor Müdahale',
    badge: 'Prematüre Gelişim',
    title: '32 Haftalık Zeynep Bebeğin Bağımsız Yürüyüşü',
    babyAge: '2. Ayda Farkındalık → 14. Ayda İlk Adımlar',
    resultBadge: '🎉 Bağımsız yürüyüş kazanıldı',
    image: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&auto=format&fit=crop&q=80',
    color: 'border-sky-200',
    accentColor: 'text-sky-600',
    tagBg: 'bg-sky-50 border-sky-200 text-sky-700',
    summary:
      "32. haftada prematüre doğan Zeynep'in bacak itişindeki asimetri, BabySensAI nörolojik ve kas hastalıkları video taramasıyla 9. haftada erkenden tespit edildi.",
    journey: [
      { label: '2. Ay', step: 'Evden çekilen 2 dakikalık video nöromotor asimetri sinyali verdi.' },
      { label: '3. Ay', step: 'Pediatrik fizyoterapist eşliğinde ev egzersiz programı başlatıldı.' },
      { label: '14. Ay', step: 'Zeynep hiçbir destek almadan ilk bağımsız adımlarını güvenle attı!' },
    ],
    quote:
      'İyi ki "zamanla geçer" diyerek beklememişiz. DijitalBüyükanne sayesinde en kritik ilk 3 ayı değerlendirdik.',
    author: "Elif K. (Zeynep'in Annesi)",
    location: 'Ankara',
    avatar: '👩🏻',
  },
  {
    category: 'Bebek Bezi & Sindirim Desteği',
    badge: 'Sindirim & Besin Uyumu',
    title: 'İlk Aylarda Yakalanan Sindirim İpucu',
    babyAge: '1. Ay Taraması → Huzurlu ve Sağlıklı Büyüme',
    resultBadge: '✅ Gelişim eğrisi normale döndü',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&auto=format&fit=crop&q=80',
    color: 'border-amber-200',
    accentColor: 'text-amber-700',
    tagBg: 'bg-amber-50 border-amber-200 text-amber-800',
    summary:
      'Emir bebeğin bezindeki olağandışı renk tonu ve sindirim hassasiyeti pediatrik renk kartıyla erkenden fark edilerek çocuk hekimine yönlendirildi.',
    journey: [
      { label: '1. Ay', step: 'Bez fotoğrafı yüklendi; sistem renk skalasına göre hekim kontrolü önerdi.' },
      { label: 'Ertesi Gün', step: 'Çocuk doktoruna başvurularak doğru beslenme ve takip programı oluşturuldu.' },
      { label: 'Bugün', step: 'Sindirim huzursuzluğu bitti; gelişim eğrisi ideal seyrine ulaştı.' },
    ],
    quote:
      'Acemi bir anne olarak bezdeki o hafif solukluğu fark edemezdim. Bizi panikletmeden doğrudan doğru uzmana yönlendirdi.',
    author: "Merve T. (Emir'in Annesi)",
    location: 'Samsun',
    avatar: '👩🏼',
  },
  {
    category: 'Kas Tonusu & Postür Gelişimi',
    badge: 'Fizyoterapi Desteği',
    title: 'Kerem Bebeğin Boyun ve Gövde Dengesi',
    babyAge: '3. Ay Taraması → Güçlü Baş & Gövde Kontrolü',
    resultBadge: '💪 Baş & gövde kontrolü sağlandı',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&auto=format&fit=crop&q=80',
    color: 'border-teal-200',
    accentColor: 'text-teal-700',
    tagBg: 'bg-teal-50 border-teal-200 text-teal-800',
    summary:
      'Yüzüstü yatışta (tummy-time) boyun kaslarındaki hafif gerginlik nörolojik ve kas hastalıkları takip modülüyle fark edildi.',
    journey: [
      { label: '3. Ay', step: 'Baş tutma testinde sol taraf kas tonusu zayıflığı sinyali alındı.' },
      { label: '4. Ay', step: 'Günde 15 dakikalık eğlenceli ev pozisyonlama oyunları uygulandı.' },
      { label: '6. Ay', step: 'Desteksiz oturma ve mükemmel baş-boyun dengesi kazanıldı.' },
    ],
    quote:
      'Erken fark edip evde uyguladığımız küçük egzersizlerle bebeğimizin duruşu tamamen normale döndü.',
    author: "Selin & Burak A. (Kerem'in Ailesi)",
    location: 'İzmir',
    avatar: '👨‍👩‍👦',
  },
  {
    category: 'Nörolojik ve Kas Takibi',
    badge: 'Spontan Hareket Kalitesi',
    title: 'Alp Bebeğin Erken Dönem Doğrulaması',
    babyAge: '6. Haftada Video Analizi → Huzurlu Aile',
    resultBadge: '🌟 Zamanında klinik doğrulama',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&auto=format&fit=crop&q=80',
    color: 'border-rose-200',
    accentColor: 'text-rose-700',
    tagBg: 'bg-rose-50 border-rose-200 text-rose-800',
    summary:
      'Anne ve babanın hareket kalıbındaki endişesi üzerine evde çekilen 2 dakikalık video üzerinden 18 eklem kinematik taraması yapıldı.',
    journey: [
      { label: '6. Hafta', step: 'Spontan hareket kalitesi nörolojik ve kas hastalıkları indeksine göre tarandı.' },
      { label: '8. Hafta', step: 'Çocuk nörolojisi uzmanı klinik muayeneyle simetrinin korunduğunu onayladı.' },
      { label: '1 Yaş', step: 'Alp sağlıklı bir tempoda akranlarıyla koşup oynamaya başladı.' },
    ],
    quote:
      'Telefonla çektiğimiz 2 dakikalık video bize hayatımızın en büyük huzurunu ve güvenini kazandırdı.',
    author: "Derya B. (Alp'in Annesi)",
    location: 'İstanbul',
    avatar: '👩🏻‍🦰',
  },
  {
    category: 'Derma-41 Cilt Taraması',
    badge: 'Atopik Cilt Yönetimi',
    title: 'Defne Bebeğin Cilt Hassasiyeti Çözümü',
    babyAge: '4. Ayda Kızarıklık → 1 Haftada İyileşme',
    resultBadge: '🌿 Cilt bariyeri korundu',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80',
    color: 'border-purple-200',
    accentColor: 'text-purple-700',
    tagBg: 'bg-purple-50 border-purple-200 text-purple-800',
    summary:
      'Yanaklarda beliren geçici döküntünün fotoğrafı Derma-41 ile analiz edilerek atopik egzama başlangıcı olduğu tespit edildi.',
    journey: [
      { label: '4. Ay', step: 'Fotoğraf taraması atopik dermatit alarmı verdi ve doğru nemlendirme önerildi.' },
      { label: '3. Gün', step: 'Çocuk hekimi tarafından reçete edilen uygun kremle kaşıntı sona erdi.' },
      { label: '1. Hafta', step: 'Defne’nin cildi tamamen pürüzsüzleşti, gece uykuları düzeldi.' },
    ],
    quote:
      'Kendi başımıza yanlış krem sürmekten kurtulduk, hekimimizin yönlendirmesiyle 1 haftada huzura kavuştuk.',
    author: "Hande G. (Defne'nin Annesi)",
    location: 'Bursa',
    avatar: '👩🏽',
  },
  {
    category: 'Sosyal Belediyecilik İş Birliği',
    badge: 'Kamu Etki Modeli',
    title: '1.200 Aileye Ulaşan Şehir Aile Ekosistemi',
    babyAge: '12 Ayda 1.200 Yeni Doğan Haneye Destek',
    resultBadge: '🏆 %98,4 aile memnuniyeti',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=80',
    color: 'border-emerald-300',
    accentColor: 'text-emerald-700',
    tagBg: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    summary:
      'Belediye yeni doğan ziyaret paketine DijitalBüyükanne erişim lisansı ekleyerek tüm hanelere 7/24 yapay zekâ desteği ulaştırdı.',
    journey: [
      { label: 'Başlangıç', step: '1.200 aileye ücretsiz DijitalBüyükanne mobil erişim kartı teslim edildi.' },
      { label: '3. Ay', step: '28 bebekte erken dönemde nörolojik ve kas hastalıkları desteği yakalandı.' },
      { label: 'Sonuç', step: '%98.4 aile memnuniyetiyle örnek sosyal belediyecilik projesi tescillendi.' },
    ],
    quote:
      'Belediyemizin ailelere verdiği en anlamlı teknolojik şefkat hediyesi oldu. Şehrimizin bebeklerine sahip çıkıyoruz.',
    author: 'Sosyal Hizmetler Dairesi Koordinatörü',
    location: 'Samsun',
    avatar: '🏛️',
  },
];

export default function CaseStudies({ cmsData }: {
  cmsData?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    cases?: any[];
  };
} = {}) {
  const finalCases = cmsData?.cases?.length ? cmsData.cases.map((c, idx) => {
    const fallback = cases[idx % cases.length];
    return { ...fallback, ...c };
  }) : cases;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-[#F5F8FD] relative overflow-hidden" id="basari-hikayeleri">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-sky-700 bg-sky-50 border border-sky-200 px-4 py-1.5 rounded-full mb-4 shadow-xs">
            <Heart size={14} className="text-coral fill-coral" />
            <span>{cmsData?.eyebrow || 'GERÇEK HAYATTAN ETKİ HİKAYELERİ'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1E3B] tracking-tight leading-tight">
            Teknoloji bilimdir. Bir bebeğin adımı ise <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] to-coral">
              hayata tutunan bir mucizedir.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            {cmsData?.subtitle || 'DijitalBüyükanne ekosistemiyle erken fark edilen, zamanında desteklenen ailelerimizin ve öncü belediyelerimizin başarı yolculukları.'}
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-semibold text-slate-600 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Kartların üzerine gelerek başarı hikayelerini durdurup inceleyebilirsiniz</span>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          KAYAN ZEMİN (FLOWING CAROUSEL TRACK) - GÖRSELLİ VE ZENGİN
          ───────────────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden py-6 group select-none">
        
        {/* Soft edge gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F5F8FD] to-transparent z-20 pointer-events-none" />

        {/* Marquee Track: Duplicated array for seamless endless looping */}
        <div className="flex w-max items-stretch gap-6 animate-cases-marquee">
          {[...finalCases, ...finalCases].map((item, idx) => (
            <div
              key={idx}
              className="w-[360px] sm:w-[420px] bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shrink-0 overflow-hidden group/card"
            >
              <div>
                {/* Visual Image Header with Overlay Badges */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 360px, 420px"
                    className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Category Pill on Image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0B1E3B] shadow-xs">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-black/50 text-white backdrop-blur-md">
                      {item.badge}
                    </span>
                  </div>

                  {/* Result Badge on Image Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#0284C7]/90 backdrop-blur-md px-3 py-1 rounded-full shadow-xs">
                      {item.resultBadge}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  <span className="text-[11px] font-mono font-semibold text-[#0284C7] block mb-1">
                    {item.babyAge}
                  </span>
                  
                  <h3 className="text-base sm:text-lg font-black text-[#0B1E3B] leading-snug mb-2 group-hover/card:text-[#0284C7] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Journey Steps */}
                  <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100 space-y-2 mb-4">
                    {item.journey.map((j: any, jIdx: number) => (
                      <div key={jIdx} className="flex items-start gap-2 text-xs">
                        <span className="text-[10px] font-black uppercase text-[#0284C7] bg-white border border-sky-100 px-1.5 py-0.5 rounded shrink-0">
                          {j.label}
                        </span>
                        <span className="text-slate-600 text-[11px] leading-tight">
                          {j.step}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Emotive Quote */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-sky-50/60 to-rose-50/40 border border-slate-100 text-xs italic text-slate-700 leading-relaxed relative">
                    <Quote size={14} className="text-[#0284C7] mb-1 opacity-70" />
                    &ldquo;{item.quote}&rdquo;
                  </div>
                </div>
              </div>

              {/* Author Footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm shadow-xs">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1E3B] leading-tight">
                      {item.author}
                    </h4>
                    <p className="text-[10px] text-slate-500 font-mono">
                      {item.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 font-mono">
                  <CheckCircle2 size={13} />
                  <span>Doğrulanmış Vaka</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Keyframes Animation */}
      <style>{`
        @keyframes casesMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-cases-marquee {
          animation: casesMarquee 55s linear infinite;
        }
        .animate-cases-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
