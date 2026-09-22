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
} from 'lucide-react';

const advisors = [
  {
    role: 'Çocuk Nörolojisi Danışmanı',
    title: 'Prof. Dr. N. Karakaş',
    expertise: 'Prechtl GMs & Serebral Palsi Erken Farkındalığı',
    institution: 'Hacettepe Tıp Fakültesi / Pediatrik Nöroloji',
    description:
      '0–6 ay spontan fidgety hareketlerinin video tabanlı analizi ve nörogelişimsel risk indekslerinin algoritmik kalibrasyonu.',
    icon: Brain,
    color: 'text-turquoise',
    bg: 'bg-turquoise/10',
    border: 'border-turquoise/30',
  },
  {
    role: 'Çocuk Gastroenteroloji Danışmanı',
    title: 'Doç. Dr. S. Aksoy',
    expertise: 'Biliyer Atrezi & Neonatal Kolestaz İndeksi',
    institution: 'Ankara Üniversitesi Tıp Fakültesi / Çocuk Sağlığı',
    description:
      'Dışkı renk kartı piksel eşleme kriterleri, yenidoğan sarılığı takibi ve erken cerrahiye (Kasai) zaman kazandıran protokoller.',
    icon: Stethoscope,
    color: 'text-coral',
    bg: 'bg-coral/10',
    border: 'border-coral/30',
  },
  {
    role: 'Pediatrik Fizyoterapi Danışmanı',
    title: 'Uzm. Fzt. E. Yılmaz',
    expertise: '0–24 Ay Motor Postür & Aile Egzersizleri',
    institution: 'Türkiye Fizyoterapistler Derneği Pediatri Grubu',
    description:
      'Evde uygulanabilir güvenli gelişim oyunları, boyun-gövde dengesi (tummy-time) ve desteksiz oturma kazanım aşamaları.',
    icon: Activity,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  {
    role: 'Biyomedikal & Etik AI Danışmanı',
    title: 'Dr. B. Öztürk',
    expertise: 'Tıbbi Görüntü İşleme & KVKK Güvenliği',
    institution: 'ODTÜ Biyomedikal Mühendisliği / AI Laboratuvarı',
    description:
      'Görüntülerin cihaz üzerinde anonimleştirilmesi, piksel doğrulama doğruluğu ve sorumlu yapay zekâ etik denetimi.',
    icon: Cpu,
    color: 'text-navy',
    bg: 'bg-navy/10',
    border: 'border-navy/20',
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
      {/* Ambient background blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-navy bg-navy/5 border border-navy/15 px-4 py-1.5 rounded-full mb-4">
            <ShieldCheck size={14} className="text-turquoise" />
            <span>Bilimsel Güvence & Danışma Kurulu</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Yapay zekâyı bilim, klinik uzmanlık ve <br className="hidden sm:inline" />
            <span className="text-turquoise">etik ilkelerle buluşturuyoruz.</span>
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
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-lg shadow-slate-100/70 hover:shadow-xl hover:border-turquoise/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl ${adv.bg} ${adv.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-turquoise">
                          {adv.role}
                        </span>
                        <h3 className="text-lg font-black text-navy">{adv.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-navy/80 mb-3">
                    {adv.expertise}
                  </div>

                  <p className="text-xs text-navy/70 leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-navy/50 font-medium">
                  <span>{adv.institution}</span>
                  <span className="text-turquoise font-bold">Klinik Danışman</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Standards Horizontal Strip */}
        <div className="bg-gradient-to-r from-navy via-[#0d3b61] to-navy rounded-3xl p-6 sm:p-10 text-white shadow-2xl">
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
                <div key={idx} className="bg-white/10 rounded-2xl p-5 border border-white/15 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-xl bg-turquoise/20 text-turquoise flex items-center justify-center mb-3">
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
