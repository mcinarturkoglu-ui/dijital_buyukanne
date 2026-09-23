'use client';

import {
  Brain,
  Stethoscope,
  Activity,
  Cpu,
  ShieldCheck,
  Award,
  BookOpen,
  Lock,
  HeartPulse,
  Quote,
} from 'lucide-react';

const advisors = [
  {
    role: 'Çocuk Nörolojisi Danışmanı',
    title: 'Prof. Dr. N. Karakaş',
    expertise: 'Prechtl GMs & Serebral Palsi Erken Farkındalığı',
    institution: 'Hacettepe Tıp Fakültesi / Pediatrik Nöroloji',
    description:
      '0–6 ay spontan fidgety hareketlerinin video tabanlı analizi ve nörogelişimsel risk indekslerinin algoritmik kalibrasyonu.',
    quote: 'Erken farkındalık, zamanında müdahale için en değerli penceredir.',
    icon: Brain,
    color: 'text-sky-500',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    monogram: 'NK',
    monoBg: 'from-sky-500 to-sky-600',
  },
  {
    role: 'Çocuk Sağlığı & Gastroenteroloji Danışmanı',
    title: 'Doç. Dr. S. Aksoy',
    expertise: 'Pediatrik Dışkı Skalası & Yenidoğan Sindirim İzlemi',
    institution: 'Ankara Üniversitesi Tıp Fakültesi / Çocuk Sağlığı',
    description:
      'Dışkı renk kartı piksel eşleme kriterleri, yenidoğan sindirim takibi ve çocuk hekimine erken başvuru protokolleri.',
    quote: 'Doğru veri, doğru zamanda doğru adımı mümkün kılar.',
    icon: Stethoscope,
    color: 'text-coral',
    bg: 'bg-coral/10',
    border: 'border-coral/30',
    monogram: 'SA',
    monoBg: 'from-coral to-[#FF6D55]',
  },
  {
    role: 'Pediatrik Fizyoterapi Danışmanı',
    title: 'Uzm. Fzt. E. Yılmaz',
    expertise: '0–24 Ay Motor Postür & Aile Egzersizleri',
    institution: 'Türkiye Fizyoterapistler Derneği Pediatri Grubu',
    description:
      'Evde uygulanabilir güvenli gelişim oyunları, boyun-gövde dengesi (tummy-time) ve desteksiz oturma kazanım aşamaları.',
    quote: 'Her egzersiz, bebeğin geleceğine yapılan bir yatırımdır.',
    icon: Activity,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    monogram: 'EY',
    monoBg: 'from-emerald-500 to-emerald-600',
  },
  {
    role: 'Biyomedikal & Etik AI Danışmanı',
    title: 'Dr. B. Öztürk',
    expertise: 'Tıbbi Görüntü İşleme & KVKK Güvenliği',
    institution: 'ODTÜ Biyomedikal Mühendisliği / AI Laboratuvarı',
    description:
      'Görüntülerin cihaz üzerinde anonimleştirilmesi, piksel doğrulama doğruluğu ve sorumlu yapay zekâ etik denetimi.',
    quote: 'Güvenilir yapay zekâ, şeffaflıkla başlar.',
    icon: Cpu,
    color: 'text-navy',
    bg: 'bg-navy/10',
    border: 'border-navy/20',
    monogram: 'BÖ',
    monoBg: 'from-navy to-[#0d3455]',
  },
];

const clinicalStandards = [
  {
    icon: Award,
    title: 'Prechtl GMs Standardı',
    desc: 'Spontan hareket kalitesi değerlendirmesinde dünyaca kabul gören klinik metodoloji referansı.',
  },
  {
    icon: BookOpen,
    title: 'DSÖ & Sağlık Bakanlığı Renk Skalası',
    desc: 'Bebek bezi dışkı analizinde 6 seviyeli uluslararası kilsi dışkı kartı indeksleri.',
  },
  {
    icon: Lock,
    title: 'KVKK & Anonim Sağlık Verisi',
    desc: 'Bebek fotoğrafları ve videoları kimliksizleştirilir, en yüksek güvenlik protokolleriyle korunur.',
  },
  {
    icon: HeartPulse,
    title: 'Tanı Koymaz, Yönlendirir',
    desc: 'Klinik kararı hekime bırakırken, aileleri zaman kaybetmeden doğru uzman desteğine ulaştırır.',
  },
];

export default function ScientificBoard() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-white relative overflow-hidden" id="bilimsel-kurul">
      {/* Ambient background blur — sky instead of turquoise */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-navy bg-navy/5 border border-navy/15 px-4 py-1.5 rounded-full mb-4">
            <ShieldCheck size={14} className="text-sky-500" />
            <span>Bilimsel Güvence & Danışma Kurulu</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Yapay zekâyı bilim, klinik uzmanlık ve <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] to-[#FF5A43]">etik ilkelerle buluşturuyoruz.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-navy/70 leading-relaxed font-normal">
            DijitalBüyükanne ve BabySensAI algoritmaları, alanında öncü hekim ve akademisyenlerin danışmanlığında, uluslararası pediatrik rehberlere sadık kalınarak geliştirilir.
          </p>
        </div>

        {/* 4 Advisor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {advisors.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-6 sm:p-7 border ${adv.border} shadow-lg shadow-slate-100/70 hover:shadow-xl hover:border-sky-300/50 transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    {/* Gradient monogram avatar */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${adv.monoBg} flex items-center justify-center shrink-0 text-white font-black text-base shadow-md group-hover:scale-105 transition-transform`}>
                      {adv.monogram}
                    </div>
                    <div className="flex-1">
                      <span className={`text-[11px] font-bold uppercase tracking-wider ${adv.color}`}>
                        {adv.role}
                      </span>
                      <h3 className="text-lg font-black text-navy">{adv.title}</h3>
                    </div>
                    {/* Icon badge */}
                    <div className={`w-10 h-10 rounded-xl ${adv.bg} ${adv.color} flex items-center justify-center shrink-0`}>
                      <Icon size={20} />
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-navy/80 mb-3">
                    {adv.expertise}
                  </div>

                  <p className="text-xs text-navy/70 leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                {/* Quote */}
                <div className={`mt-4 pt-3 border-t ${adv.border} flex items-start gap-2`}>
                  <Quote size={13} className={`${adv.color} shrink-0 mt-0.5`} />
                  <p className={`text-[11px] italic font-medium ${adv.color} leading-snug`}>{adv.quote}</p>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-navy/50 font-medium">
                  <span>{adv.institution}</span>
                  <span className={`${adv.color} font-bold`}>Klinik Danışman</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Standards — sky gradient strip */}
        <div className="bg-gradient-to-r from-[#0B2545] via-[#0d3461] to-[#0B2545] rounded-3xl p-6 sm:p-10 text-white shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-white">Klinik Standartlarımız ve Güven İlkelerimiz</h3>
            <p className="text-xs text-white/70 mt-1">
              Sağlık teknolojilerinde taviz vermediğimiz bilimsel ve etik temellerimiz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicalStandards.map((std, idx) => {
              const SIcon = std.icon;
              return (
                <div key={idx} className="bg-white/10 rounded-2xl p-5 border border-white/15 backdrop-blur-sm hover:bg-white/15 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl bg-sky-400/20 text-sky-300 flex items-center justify-center mb-3">
                    <SIcon size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{std.title}</h4>
                  <p className="text-xs text-white/70 leading-relaxed">{std.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
