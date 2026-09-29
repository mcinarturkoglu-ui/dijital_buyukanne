'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import {
  Quote,
  Heart,
  CheckCircle2,
  Sparkles,
  Award,
  ArrowRight,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  MousePointer,
} from 'lucide-react';

// Official Rotary Wheel SVG Component
function RotaryWheelSmall({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="4" />
      {Array.from({ length: 24 }).map((_, i) => (
        <rect
          key={i}
          x="47.5"
          y="0"
          width="5"
          height="8"
          rx="1"
          transform={`rotate(${i * 15} 50 50)`}
          fill="currentColor"
        />
      ))}
      <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="4" />
      {Array.from({ length: 6 }).map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2="50"
          y2="12"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          transform={`rotate(${i * 60} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="16" fill="currentColor" />
      <circle cx="50" cy="50" r="8" fill="#17458F" />
      <rect x="47.5" y="42" width="5" height="6" fill="#17458F" />
    </svg>
  );
}

const rotaryCases = [
  {
    club: 'Kadıköy Rotary Kulübü',
    tier: 'Kulüp Pilot Projesi',
    category: 'Erken Nöromotor Müdahale',
    badge: 'Prematüre Gelişim',
    title: '32 Haftalık Zeynep Bebeğin Bağımsız Yürüyüşü',
    babyAge: '2. Ayda Farkındalık → 14. Ayda İlk Adımlar',
    resultBadge: '🎉 Bağımsız yürüyüş kazanıldı',
    image: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&auto=format&fit=crop&q=80',
    color: 'border-sky-200',
    accentColor: 'text-[#17458F]',
    tagBg: 'bg-sky-50 border-sky-200 text-sky-800',
    summary:
      "Kadıköy Rotary Kulübü'nün lisansıyla taranan 32 haftalık Zeynep'in bacak itişindeki asimetri, video analiziyle 9. haftada erkenden tespit edildi.",
    journey: [
      { label: '2. Ay', step: 'Rotary lisansıyla evden çekilen video asimetri sinyali verdi.' },
      { label: '3. Ay', step: 'Pediatrik fizyoterapistle ev egzersiz programı başlatıldı.' },
      { label: '14. Ay', step: 'Zeynep hiçbir destek almadan ilk bağımsız adımlarını attı!' },
    ],
    quote:
      'İyi ki Rotary Kulübümüz kapımızı çaldı. En kritik ilk 3 ayı değerlendirerek kızımızın yürümesini sağladık.',
    author: "Elif K. (Zeynep'in Annesi)",
    location: 'İstanbul',
    avatar: '👩🏻',
  },
  {
    club: 'Samsun Rotary Kulübü',
    tier: 'Yerel Toplum Hizmeti',
    category: 'Bebek Bezi & Sindirim Desteği',
    badge: 'Sindirim & Besin Uyumu',
    title: 'Kırsal Hanede Emir Bebeğin Sindirim İpucu',
    babyAge: '1. Ay Taraması → Sağlıklı Büyüme',
    resultBadge: '✅ Gelişim eğrisi normale döndü',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&auto=format&fit=crop&q=80',
    color: 'border-amber-200',
    accentColor: 'text-[#B87A00]',
    tagBg: 'bg-amber-50 border-amber-200 text-amber-900',
    summary:
      'Samsun Rotary Kulübü kırsal taramasında ulaşılan Emir bebeğin bezindeki sarılık tonu pediatrik renk kartıyla erkenden yakalandı.',
    journey: [
      { label: '1. Ay', step: 'Bez fotoğrafı yüklendi; sistem renk skalasına göre hekim önerdi.' },
      { label: 'Ertesi Gün', step: 'OMÜ Tıp Kliniği’ne başvurularak doğru beslenme başlandı.' },
      { label: 'Bugün', step: 'Sindirim huzursuzluğu bitti; gelişim ideal seyrine ulaştı.' },
    ],
    quote:
      'Köyümüzde hekime hemen gidemezdik. Rotary sayesinde rehber bebeğimizi doğru hekime vaktinde ulaştırdı.',
    author: "Merve T. (Emir'in Annesi)",
    location: 'Samsun',
    avatar: '👩🏼',
  },
  {
    club: 'Çankaya Rotary Kulübü',
    tier: 'Anne & Çocuk Sağlığı',
    category: 'Kas Tonusu & Postür Gelişimi',
    badge: 'Fizyoterapi Desteği',
    title: 'Can Bebeğin Boyun ve Gövde Dengesi',
    babyAge: '3. Ay Taraması → Güçlü Baş & Gövde Kontrolü',
    resultBadge: '💪 Baş & gövde kontrolü sağlandı',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&auto=format&fit=crop&q=80',
    color: 'border-teal-200',
    accentColor: 'text-teal-700',
    tagBg: 'bg-teal-50 border-teal-200 text-teal-800',
    summary:
      'Çankaya Rotary projesinde Can bebeğin boyun kaslarındaki hafif gerginlik nörolojik ve kas hastalıkları modülüyle erken saptandı.',
    journey: [
      { label: '3. Ay', step: 'Baş tutma testinde sol taraf kas tonusu gerginliği uyarısı alındı.' },
      { label: '4. Ay', step: 'Günde 15 dakikalık ev pozisyonlama oyunları uygulandı.' },
      { label: '6. Ay', step: 'Desteksiz oturma ve baş-boyun dengesi kazanıldı.' },
    ],
    quote:
      'Kulübün hediye ettiği ipek bandana ve lisans hayatımıza dokundu. Can şimdi dengede ve çok mutlu.',
    author: "Selin & Burak A. (Can'ın Ailesi)",
    location: 'Ankara',
    avatar: '👨‍👩‍👦',
  },
  {
    club: 'Rotary 2430. Bölge Federasyonu',
    tier: 'District Grant Projesi',
    category: 'Bölge Hibe Seferberliği',
    badge: '500 Bebeğe Umut',
    title: '500 Ailelik Bölge Çapında Erken Tarama Seferberliği',
    babyAge: '1 Dönemde 500 Bebeğe %100 Ücretsiz Destek',
    resultBadge: '🏛️ 22 bebekte erken farkındalık',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=80',
    color: 'border-amber-300',
    accentColor: 'text-[#17458F]',
    tagBg: 'bg-amber-100/70 border-amber-300 text-amber-900',
    summary:
      'Rotary 2430. Bölge hibe fonuyla 500 bebeğe nöromotor erken tarama ve özel tasarım Rotary ipek bebek fuları armağan edildi.',
    journey: [
      { label: 'Lansman', step: 'Bölge genelinde 500 aileye ücretsiz lisans kartı ulaştırıldı.' },
      { label: '3. Ay', step: '22 bebekte evde fark edilemeyecek asimetri erken aşamada yakalandı.' },
      { label: 'Dönem Sonu', step: '%98,6 memnuniyetle Guvernörlük resmi dönem ödülü tescillendi.' },
    ],
    quote:
      'Bebeklerimize bilim ve şefkatle el uzatmak, Rotaryen olarak duyduğumuz en büyük gurur oldu.',
    author: 'Rotary Bölge Komite Başkanı',
    location: 'Ankara / Samsun / Adana',
    avatar: '🎗️',
  },
  {
    club: 'İzmir Rotary Kulüpleri',
    tier: 'Ortak Kulüpler Projesi',
    category: 'Nörolojik ve Kas Takibi',
    badge: 'Spontan Hareket Kalitesi',
    title: 'Doruk Bebeğin Spontan Hareket Doğrulaması',
    babyAge: '6. Haftada Video Analizi → Huzurlu Aile',
    resultBadge: '🌟 Zamanında klinik güvence',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&auto=format&fit=crop&q=80',
    color: 'border-rose-200',
    accentColor: 'text-rose-700',
    tagBg: 'bg-rose-50 border-rose-200 text-rose-800',
    summary:
      'Ailenin asimetri şüphesi üzerine evde çekilen video üzerinden 18 eklem kinematik nörolojik ve kas hastalıkları taraması yapıldı.',
    journey: [
      { label: '6. Hafta', step: 'Spontan hareket kalitesi algoritmasıyla tarandı.' },
      { label: '8. Hafta', step: 'Çocuk nöroloğu klinik muayeneyle simetriyi onayladı.' },
      { label: '1 Yaş', step: 'Doruk sağlıklı bir tempoda akranlarıyla güvenle koşmaya başladı.' },
    ],
    quote:
      'Rotary kulübünün rehberliği bize hayatımızın en büyük huzurunu ve güvenini kazandırdı.',
    author: "Derya B. (Doruk'un Annesi)",
    location: 'İzmir',
    avatar: '👩🏻‍🦰',
  },
  {
    club: 'Rotary International & Vakfı',
    tier: 'Global Grant Projesi',
    category: 'Küresel Bağış Seferberliği',
    badge: 'The Rotary Foundation',
    title: 'Uluslararası Kardeş Kulüplerle 1.500 Bebeğe Yaşam Güvencesi',
    babyAge: '1.500 Aileye Eşit Sağlık Erişimi',
    resultBadge: '🌍 Global Grant Standartlarında',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80',
    color: 'border-purple-300',
    accentColor: 'text-purple-700',
    tagBg: 'bg-purple-50 border-purple-200 text-purple-800',
    summary:
      'Yurt dışı kardeş Rotary kulübü ve TRF eşleşmeli küresel hibe programıyla binlerce aileye 7/24 pediatrik yapay zekâ ulaştırıldı.',
    journey: [
      { label: 'Grant Onayı', step: 'The Rotary Foundation Anne & Çocuk Sağlığı hibe kriteriyle onaylandı.' },
      { label: '6. Ay', step: '1.500 hanede 6.800’den fazla yapay zekâ taraması şeffaf konsoldan raporlandı.' },
      { label: 'Etki', step: 'Uluslararası "The Rotarian" bülteninde örnek Türk-Rotary projesi olarak yer buldu.' },
    ],
    quote:
      'Kendinden Önce Hizmet idealinin en saf tecellisi, bir bebeğin gelecekte bağımsız adımlar atabilmesidir.',
    author: 'Global Grant Proje Lideri',
    location: 'Uluslararası Ağ',
    avatar: '🏛️',
  },
];

export default function RotaryCaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate for seamless endless looping
  const displayCases = [...rotaryCases, ...rotaryCases];

  // Continuous ambient auto-scroll with requestAnimationFrame
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animationId: number;

    const scrollSpeed = 0.7; // px per frame

    const autoLoop = () => {
      if (!isHovered && !isDragging) {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollSpeed;
        }
      }
      animationId = requestAnimationFrame(autoLoop);
    };

    animationId = requestAnimationFrame(autoLoop);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, isDragging]);

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeftPos(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  // Manual Arrow Scroll Helpers
  const scrollPrev = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  };
  const scrollNext = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#F0F5FC] via-white to-[#F0F5FC] border-b border-slate-200 overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#17458F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#F7A81B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#17458F]/20 text-[#17458F] text-[11px] font-mono font-bold tracking-widest uppercase shadow-xs mb-2">
          <RotaryWheelSmall className="w-4 h-4 text-[#F7A81B]" />
          <span>KULÜPLERİMİZİN DOKUNDUĞU GERÇEK HAYATLAR</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
          Teknoloji Bilimdir. Bir Bebeğin Adımı İse{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17458F] via-[#0067C8] to-[#F7A81B]">
            Hayata Tutunan Bir Mucizedir.
          </span>
        </h2>

        <p className="mt-2 text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Rotary kulüplerimizin &ldquo;Kendinden Önce Hizmet&rdquo; idealiyle desteklediği ailelerimizin gerçek başarı öyküleri.
        </p>

        {/* Interactive Mouse & Drag Control Indicator */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-[11px] text-slate-600 font-medium">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
            <MousePointer size={12} className="text-[#17458F]" />
            <span>Fareyle tutup sürükleyebilir veya oklarla gezinebilirsiniz</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[#17458F]">
            <Award size={13} className="text-[#F7A81B]" />
            Rotary 7 Odak Alanı Uyumlu
          </span>
        </div>
      </div>

      {/* DRAGGABLE & INFINITE FLOWING TRACK CONTAINER */}
      <div className="relative w-full max-w-[1440px] mx-auto px-4 group">
        
        {/* Left Manual Arrow Button */}
        <button
          onClick={scrollPrev}
          aria-label="Önceki Slaytlar"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 text-[#17458F] shadow-xl border border-slate-200 flex items-center justify-center hover:bg-[#17458F] hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer opacity-80 hover:opacity-100"
          title="Geri Kaydır"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Manual Arrow Button */}
        <button
          onClick={scrollNext}
          aria-label="Sonraki Slaytlar"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 text-[#17458F] shadow-xl border border-slate-200 flex items-center justify-center hover:bg-[#17458F] hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer opacity-80 hover:opacity-100"
          title="İleri Kaydır"
        >
          <ChevronRight size={20} />
        </button>

        {/* Soft edge gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#F0F5FC] via-[#F0F5FC]/70 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#F0F5FC] via-[#F0F5FC]/70 to-transparent z-10 pointer-events-none" />

        {/* Scrollable Viewport */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setIsHovered(true)}
          className="flex gap-4 overflow-x-auto no-scrollbar py-2 px-2 select-none cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayCases.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className="w-[280px] sm:w-[310px] shrink-0 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#17458F] transition-all duration-300 flex flex-col justify-between overflow-hidden group/card"
            >
              {/* Card Header with Compact Photo & Rotary Club Badge */}
              <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 280px, 310px"
                  className="object-cover group-hover/card:scale-105 transition-transform duration-500 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/35 to-transparent pointer-events-none" />

                {/* Rotary Club Pill Overlay */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#17458F]/95 backdrop-blur-md text-white text-[10px] font-black shadow-sm border border-white/20">
                  <RotaryWheelSmall className="w-3 h-3 text-[#F7A81B]" />
                  <span>{item.club}</span>
                </div>

                {/* Tier Badge */}
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-[#F7A81B] text-[#17458F] text-[9px] font-black uppercase tracking-wider shadow-xs">
                  {item.tier}
                </div>

                {/* Bottom title & result pill */}
                <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-600/90 text-white text-[9px] font-bold backdrop-blur-sm mb-0.5">
                    {item.resultBadge}
                  </span>
                  <h3 className="text-xs sm:text-[13px] font-black leading-snug drop-shadow-sm line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Body - Compact & Tight */}
              <div className="p-3.5 space-y-2.5 flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1.5 font-mono">
                    <span className="font-bold text-[#17458F] truncate max-w-[150px]">{item.category}</span>
                    <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 font-sans truncate">
                      {item.babyAge.split('→')[0]}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-600 leading-snug line-clamp-2">
                    {item.summary}
                  </p>
                </div>

                {/* Journey Milestone Steps - Compact */}
                <div className="space-y-1 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[10px]">
                  <p className="font-bold text-slate-400 uppercase tracking-wider text-[9px]">
                    Gelişim Yolculuğu
                  </p>
                  {item.journey.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-1.5 text-slate-700">
                      <span className="font-bold text-[#17458F] shrink-0">
                        {step.label}:
                      </span>
                      <span className="leading-tight text-slate-600 line-clamp-1">{step.step}</span>
                    </div>
                  ))}
                </div>

                {/* Family Quote Bubble - Compact */}
                <div className="relative p-2.5 rounded-xl bg-amber-50/70 border border-[#F7A81B]/30 space-y-1">
                  <Quote size={13} className="text-[#F7A81B] absolute -top-1.5 -left-1 bg-white rounded-full p-0.5 border border-[#F7A81B]/40" />
                  <p className="text-[10px] italic text-slate-700 leading-snug line-clamp-2">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="flex items-center justify-between pt-1 border-t border-amber-200/60 text-[10px]">
                    <span className="font-bold text-slate-900 truncate">{item.author}</span>
                    <span className="text-slate-500 font-mono text-[9px] shrink-0">{item.location}</span>
                  </div>
                </div>

                {/* Verified Footer */}
                <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-600 font-bold">
                    <CheckCircle2 size={12} />
                    Rotary Onaylı
                  </span>
                  <span className="text-[9px] text-slate-400 font-mono">0–6 Ay Erken Teşhis</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
