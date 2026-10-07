'use client';

import React from 'react';
import Image from 'next/image';
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
  Building2,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

const defaultAdvisors = [
  {
    role: 'Adapha Kurucu / Biyomedikal Sistemler',
    title: 'Öğr. Gör. Dr. Sema Gül',
    expertise: 'Yapay Zekâ Destekli Erken Tanı & Biyomedikal Sağlık Sistemleri',
    institution: 'Ondokuz Mayıs Üniversitesi (OMÜ) Samsun Teknopark / Adapha',
    description:
      'Yenidoğan ve bebek sağlığında yapay zekâ tabanlı erken tarama modelleri, klinik doğruluk algoritmaları ve biyomedikal veri analitiği mimarisinin geliştirilmesi ve yönetimi.',
    quote: 'Erken teşhis teknolojileriyle her bebeğin sağlıklı bir geleceğe adım atmasını mümkün kılıyoruz.',
    icon: Brain,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    monogram: 'SG',
    monoBg: 'from-sky-500 to-sky-600',
    image: '/images/team/sema-gul.jpg',
  },
  {
    role: 'Adapha Ortağı / Teknik Sorumlu (CTO)',
    title: 'Doç. Dr. Muammer Türkoğlu',
    expertise: 'Derin Öğrenme & 18-Eklem Kinematik Video Analizi',
    institution: 'Ondokuz Mayıs Üniversitesi / OMÜ Samsun Teknopark',
    description:
      '0–6 ay spontan hareket analizi, 18-eklem iskelet kinematik haritalaması, derin öğrenme algoritmaları ve yüksek doğruluklu nörogelişimsel AI modellerinin kalibrasyonu.',
    quote: 'Bilimsel veriyi ileri yapay zekâ modelleriyle işleyerek insan hayatına doğrudan dokunuyoruz.',
    icon: Cpu,
    color: 'text-coral',
    bg: 'bg-coral/10',
    border: 'border-coral/30',
    monogram: 'MT',
    monoBg: 'from-coral to-[#FF6D55]',
    image: '/images/team/muammer-turkoglu.jpg',
  },
  {
    role: 'Klinik Danışman & Neonatoloji Uzmanı',
    title: 'Prof. Dr. Canan Seren',
    expertise: 'Neonatoloji, Yenidoğan Nörogelişimsel İzlemi & Pediatri',
    institution: 'OMÜ Tıp Fakültesi Pediatri Anabilim Dalı Neonatoloji Bilim Dalı',
    description:
      'Yenidoğan gelişim döngüsü, erken nöromotor asimetri riskleri, klinik yönlendirme kriterleri ve algoritmaların uluslararası tıp kılavuzlarına tam uyum denetimi.',
    quote: 'Klinik uzmanlık ve doğru zamanlama, bir bebeğin gelişimindeki en kritik güçtür.',
    icon: Stethoscope,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    monogram: 'CS',
    monoBg: 'from-emerald-500 to-emerald-600',
    image: '/images/team/canan-seren.jpg',
  },
];

const clinicalStandards = [
  {
    icon: Award,
    title: 'Nörolojik ve Kas Hastalıkları Standardı',
    desc: 'Spontan hareket kalitesi ve kas tonusu değerlendirmesinde klinik metodoloji referansı.',
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

const institutionalPartners = [
  {
    name: 'OMÜ Tıp Fakültesi Pediatri Anabilim Dalı Neonatoloji Bilim Dalı',
    category: 'Klinik & Tıbbi Protokol Ortağı',
    logo: '/images/logos/omu-logo.png',
  },
  {
    name: 'OMÜ Gelişimsel Eğitim Uygulama ve Araştırma Merkezi',
    category: 'Pediatrik Gelişim & Araştırma',
    logo: '/images/logos/omu-logo.png',
  },
  {
    name: 'Samsun Büyükşehir Belediyesi',
    category: 'Sosyal Belediyecilik & Saha Uygulaması',
    logo: '/images/logos/samsun-bb-logo.jpg',
  },
];

type BoardView = 'advisors' | 'standards';

export default function ScientificBoard({ cmsData }: {
  cmsData?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
    advisors?: Array<{
      role: string;
      title: string;
      expertise: string;
      institution: string;
      description: string;
      quote: string;
      monogram?: string;
      image?: string;
    }>;
    clinicalStandards?: Array<{ title: string; desc: string }>;
  };
} = {}) {
  // Purge any old deprecated admin cache from user's browser
  React.useEffect(() => {
    try {
      localStorage.removeItem('dijitalbuyukanne_site_content');
    } catch {}
  }, []);

  const activeCms = cmsData;

  const finalAdvisors = activeCms?.advisors?.length
    ? activeCms.advisors.map((adv, idx) => {
        const fallback = defaultAdvisors[idx % defaultAdvisors.length];
        return { ...fallback, ...adv };
      })
    : defaultAdvisors;

  const finalStandards = activeCms?.clinicalStandards?.length
    ? activeCms.clinicalStandards.map((std, idx) => {
        const fallback = clinicalStandards[idx % clinicalStandards.length];
        return { ...fallback, ...std };
      })
    : clinicalStandards;

  const [activeView, setActiveView] = React.useState<BoardView>('advisors');

  return (
    <section className="py-2 px-2 sm:px-4 bg-transparent relative overflow-hidden w-full flex flex-col justify-center my-auto" id="bilimsel-kurul">
      {/* Ambient background blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1360px] mx-auto relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-navy bg-navy/5 border border-navy/15 px-3.5 py-1 rounded-full mb-1.5 shadow-2xs">
            <ShieldCheck size={14} className="text-sky-500" />
            <span>{activeCms?.eyebrow || 'Bilimsel Güvence & Danışma Kurulu'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight leading-tight">
            Yapay zekâyı bilim, klinik uzmanlık ve{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] to-[#FF5A43]">
              etik ilkelerle buluşturuyoruz.
            </span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-navy/70 leading-relaxed font-normal max-w-2xl mx-auto">
            {activeCms?.subtitle || 'DijitalBüyükanne ve BabySensAI algoritmaları, alanında öncü hekim ve akademisyenlerin danışmanlığında geliştirilir.'}
          </p>

          {/* Sub-view Switcher Tabs */}
          <div className="mt-3.5 flex items-center justify-center gap-2.5">
            <button
              onClick={() => setActiveView('advisors')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeView === 'advisors'
                  ? 'bg-[#0B1E3B] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              👨‍⚕️ Danışma Kurulu Üyeleri
            </button>
            <button
              onClick={() => setActiveView('standards')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeView === 'standards'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              🏛️ Klinik Standartlar & Üniversite Ortaklığı
            </button>
          </div>
        </div>

        {/* 3 Advisor Cards */}
        {activeView === 'advisors' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-2">
          {finalAdvisors.map((adv, idx) => {
            const Icon = adv.icon || Brain;
            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-5 sm:p-6 border ${adv.border || 'border-slate-200'} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative`}
              >
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    {/* Profil Fotoğrafı veya Monogram Avatar */}
                    {adv.image ? (
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-xs shrink-0 border-2 border-white ring-1 ring-sky-100 group-hover:scale-105 transition-transform duration-300 bg-slate-100">
                        <Image
                          src={adv.image}
                          alt={adv.title}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${adv.monoBg || 'from-sky-500 to-sky-600'} flex items-center justify-center shrink-0 text-white font-black text-sm shadow-xs group-hover:scale-105 transition-transform`}>
                        {adv.monogram || 'DK'}
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <span className={`text-[10px] font-bold uppercase tracking-wider block truncate ${adv.color || 'text-sky-600'}`}>
                        {adv.role}
                      </span>
                      <h3 className="text-sm sm:text-base font-black text-navy leading-snug mt-0.5 truncate">
                        {adv.title}
                      </h3>
                      <p className="text-[10px] text-slate-500 font-medium truncate mt-0.5">
                        {adv.institution.split('/')[0]}
                      </p>
                    </div>

                    {/* Icon badge */}
                    <div className={`w-8 h-8 rounded-lg ${adv.bg || 'bg-sky-50'} ${adv.color || 'text-sky-600'} flex items-center justify-center shrink-0`}>
                      <Icon size={16} />
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[11px] font-semibold text-navy/80 mb-2 leading-snug">
                    {adv.expertise}
                  </div>

                  <p className="text-[11px] text-navy/70 leading-relaxed line-clamp-2">
                    {adv.description}
                  </p>
                </div>

                {/* Quote & Footer */}
                <div className="mt-3 pt-2 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-start gap-1.5">
                    <Quote size={11} className={`${adv.color || 'text-sky-600'} shrink-0 mt-0.5`} />
                    <p className={`text-[10px] italic font-medium ${adv.color || 'text-sky-600'} leading-tight line-clamp-1`}>
                      &ldquo;{adv.quote}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-navy/50 font-medium pt-1 border-t border-slate-50">
                    <span className="truncate max-w-[180px]">{adv.institution}</span>
                    <span className="flex items-center gap-1 text-emerald-600 font-bold shrink-0">
                      <CheckCircle2 size={11} />
                      Doğrulanmış
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

        {/* 🏢 Kurumsal İş Birlikleri & Klinik Standartlar */}
        {activeView === 'standards' && (
          <div className="flex flex-col gap-4">
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold text-sky-700 uppercase tracking-widest block">
                  AKADEMİK VE RESMÎ İŞ BİRLİKLERİ
                </span>
                <a
                  href="https://www.adapha.com/tr/hakkimizda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-slate-600 hover:text-navy flex items-center gap-1.5"
                >
                  <span>Tüm Ortaklar ve Protokoller</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {institutionalPartners.map((item, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5 hover:border-sky-300 transition-all"
                  >
                    <div className="relative w-9 h-9 rounded-lg bg-white border border-slate-100 flex items-center justify-center shrink-0 p-1">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={30}
                        height={30}
                        className="object-contain max-h-7 w-auto"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] font-bold text-sky-600 uppercase tracking-wide block truncate">
                        {item.category}
                      </span>
                      <h4 className="text-xs font-bold text-navy truncate">
                        {item.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical Standards */}
            <div className="bg-gradient-to-r from-[#0B2545] via-[#0d3461] to-[#0B2545] rounded-2xl p-4 text-white shadow-md">
              <div className="text-center max-w-xl mx-auto mb-3">
                <h3 className="text-sm font-black text-white">Klinik Standartlarımız ve Güven İlkelerimiz</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {finalStandards.map((std, idx) => {
                  const SIcon = std.icon || Award;
                  return (
                    <div key={idx} className="bg-white/10 rounded-xl p-3 border border-white/15">
                      <div className="w-6 h-6 rounded-lg bg-sky-400/20 text-sky-300 flex items-center justify-center mb-1.5">
                        <SIcon size={14} />
                      </div>
                      <h4 className="text-xs font-bold text-white mb-0.5">{std.title}</h4>
                      <p className="text-[10px] text-white/70 leading-snug line-clamp-2">{std.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
