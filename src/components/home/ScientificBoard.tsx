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
  const [activeCms, setActiveCms] = React.useState(cmsData);

  React.useEffect(() => {
    setActiveCms(cmsData);
    const syncLocal = () => {
      try {
        const stored = localStorage.getItem('dijitalbuyukanne_site_content');
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed?.scientificBoard) {
            setActiveCms(parsed.scientificBoard);
          }
        }
      } catch {}
    };
    syncLocal();
    window.addEventListener('dijitalbuyukanne_content_updated', syncLocal);
    return () => window.removeEventListener('dijitalbuyukanne_content_updated', syncLocal);
  }, [cmsData]);

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

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-white relative overflow-hidden" id="bilimsel-kurul">
      {/* Ambient background blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-navy bg-navy/5 border border-navy/15 px-4 py-1.5 rounded-full mb-4">
            <ShieldCheck size={14} className="text-sky-500" />
            <span>{activeCms?.eyebrow || 'Bilimsel Güvence & Danışma Kurulu'}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            {activeCms?.title ? (
              <span dangerouslySetInnerHTML={{ __html: activeCms.title.replace('etik ilkelerle buluşturuyoruz.', '<span class="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] to-[#FF5A43]">etik ilkelerle buluşturuyoruz.</span>') }} />
            ) : (
              <>
                Yapay zekâyı bilim, klinik uzmanlık ve <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] to-[#FF5A43]">etik ilkelerle buluşturuyoruz.</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-base md:text-lg text-navy/70 leading-relaxed font-normal">
            {activeCms?.subtitle || 'DijitalBüyükanne ve BabySensAI algoritmaları, alanında öncü hekim ve akademisyenlerin danışmanlığında, uluslararası pediatrik rehberlere sadık kalınarak geliştirilir.'}
          </p>
          <div className="pt-3">
            <a
              href="https://www.adapha.com/tr/hakkimizda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:text-[#0369a1] bg-sky-50 hover:bg-sky-100/80 px-3.5 py-1.5 rounded-full border border-sky-200 transition-all shadow-2xs"
            >
              <span>Adapha Yapay Zeka Ar-Ge Kadrosu & Akademik Künye</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* 3 Advisor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {finalAdvisors.map((adv, idx) => {
            const Icon = adv.icon || Brain;
            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-6 sm:p-7 border ${adv.border || 'border-slate-200'} shadow-lg shadow-slate-100/70 hover:shadow-xl hover:border-sky-300/50 transition-all duration-300 flex flex-col justify-between group relative`}
              >
                <div>
                  <div className="flex items-start gap-3.5 mb-4">
                    {/* Profil Fotoğrafı veya Monogram Avatar */}
                    {adv.image ? (
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shadow-md shrink-0 border-2 border-white ring-2 ring-sky-100 group-hover:scale-105 transition-transform duration-300 bg-slate-100">
                        <Image
                          src={adv.image}
                          alt={adv.title}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${adv.monoBg || 'from-sky-500 to-sky-600'} flex items-center justify-center shrink-0 text-white font-black text-base shadow-md group-hover:scale-105 transition-transform`}>
                        {adv.monogram || 'DK'}
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-wider block truncate ${adv.color || 'text-sky-600'}`}>
                        {adv.role}
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-navy leading-snug mt-0.5 truncate">
                        {adv.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
                        {adv.institution.split('/')[0]}
                      </p>
                    </div>

                    {/* Icon badge */}
                    <div className={`w-9 h-9 rounded-xl ${adv.bg || 'bg-sky-50'} ${adv.color || 'text-sky-600'} flex items-center justify-center shrink-0`}>
                      <Icon size={18} />
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-navy/80 mb-3 leading-snug">
                    {adv.expertise}
                  </div>

                  <p className="text-xs text-navy/70 leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                {/* Quote & Footer */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2.5">
                  <div className="flex items-start gap-2">
                    <Quote size={13} className={`${adv.color || 'text-sky-600'} shrink-0 mt-0.5`} />
                    <p className={`text-[11px] italic font-medium ${adv.color || 'text-sky-600'} leading-snug`}>
                      &ldquo;{adv.quote}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-navy/50 font-medium pt-1 border-t border-slate-50">
                    <span className="truncate max-w-[200px]">{adv.institution}</span>
                    <span className="flex items-center gap-1 text-emerald-600 font-bold shrink-0">
                      <CheckCircle2 size={12} />
                      Doğrulanmış
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 🏢 Kurumsal İş Birlikleri & Ar-Ge Ortakları Vitrini */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-mono font-bold text-sky-700 uppercase tracking-widest block">
                AKADEMİK VE RESMÎ İŞ BİRLİKLERİ
              </span>
              <h3 className="text-lg sm:text-xl font-black text-navy mt-0.5">
                Türkiye&apos;nin Öncü Sağlık Kuruluşları ve Üniversite Ortaklığı
              </h3>
            </div>
            <a
              href="https://www.adapha.com/tr/hakkimizda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-slate-600 hover:text-navy flex items-center gap-1.5 self-start md:self-auto shrink-0"
            >
              <span>Tüm Ortaklar ve Protokoller</span>
              <ExternalLink size={13} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {institutionalPartners.map((item, pIdx) => (
              <div
                key={pIdx}
                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center gap-3.5 hover:border-sky-300 hover:shadow-sm transition-all"
              >
                <div className="relative w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 p-1.5">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="object-contain max-h-9 w-auto"
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wide block truncate">
                    {item.category}
                  </span>
                  <h4 className="text-xs font-black text-navy leading-tight line-clamp-2 mt-0.5">
                    {item.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
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
            {finalStandards.map((std, idx) => {
              const SIcon = std.icon || Award;
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
