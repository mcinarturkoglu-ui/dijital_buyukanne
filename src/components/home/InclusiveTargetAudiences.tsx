'use client';

import React from 'react';
import { Activity, Brain, TrendingUp, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function InclusiveTargetAudiences() {
  const cards = [
    {
      icon: Activity,
      title: 'Prematüre Doğan Bebekler',
      badge: 'Erken İzlem',
      desc: 'Erken doğan bebeklerde nörolojik ve motor takip hayati önem taşır; evde dijital video izlemi süreci hızlandırır.',
      color: 'text-sky-600',
      bg: 'bg-sky-50',
      border: 'border-sky-200',
    },
    {
      icon: Brain,
      title: 'Serebral Palsi & Motor Risk',
      badge: 'Nöroplastisite',
      desc: 'Kas ve nöromotor gelişim taramaları, kalıcı engellilik riskini erken aşamada fark etmeyi sağlar.',
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      border: 'border-rose-200',
    },
    {
      icon: TrendingUp,
      title: 'Gelişimsel Takip İhtiyacı',
      badge: 'Motor Denge',
      desc: 'Oturma, dönme veya yürümede aksama yaşayan bebekler için düzenli ve yapılandırılmış egzersiz rehberliği.',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
    },
    {
      icon: HeartHandshake,
      title: 'Eşit Sağlık Erişimi',
      badge: 'Fırsat Eşitliği',
      desc: 'Sosyoekonomik imkânı kısıtlı ailelerin uzman fizyoterapist ve hekim desteğine teknolojiyle ücretsiz erişebilmesi.',
      color: 'text-teal-600',
      bg: 'bg-teal-50',
      border: 'border-teal-200',
    },
  ];

  return (
    <div className="w-full max-w-7xl 2xl:max-w-[1360px] mx-auto flex flex-col justify-center my-auto px-2 sm:px-4">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-sky-800 bg-sky-50 border border-sky-200 px-3.5 py-1 rounded-full mb-2 shadow-2xs">
          <HeartHandshake size={14} className="text-sky-600" />
          <span>Kapsayıcı Hizmet Alanlarımız</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1E3B] tracking-tight">
          Kimler İçin Hayati Bir Değer Taşır?
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Nörogelişimsel risk taşıyan veya özel gereksinimi olan tüm bebeklerin erken müdahale fırsatına eşit erişimi
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-6">
        {cards.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-7 bg-white border ${item.border} shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[220px]`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center font-bold shadow-2xs`}>
                    <Icon size={24} />
                  </div>
                  <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full ${item.bg} ${item.color}`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-[#0B1E3B] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Responsible AI Disclaimer */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center max-w-4xl mx-auto shadow-2xs">
        <p className="text-xs text-slate-600 leading-relaxed">
          <span className="font-bold text-sky-700">Bilgilendirme ve Etik İlke: </span>
          DijitalBüyükanne ve BabySensAI klinik kesin tanı koymaz. Amacımız, 0–24 ay nöroplastisite penceresinde ailelerin 
          erken farkındalık kazanmasını ve ihtiyaç duyulduğunda en doğru çocuk hekimlerine ve fizyoterapistlere zaman kaybetmeden ulaşmasını sağlamaktır.
        </p>
      </div>
    </div>
  );
}
