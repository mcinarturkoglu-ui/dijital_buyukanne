'use client';

import { BookOpen, BarChart2, HeartHandshake } from 'lucide-react';

const needs = [
  {
    icon: <BookOpen size={28} />,
    number: '01',
    title: 'Güvenilir bilgiye erişim',
    description:
      'Her aile, bebek gelişimi konusunda doğru ve güncel bilgiye kolayca ulaşabilmeli. İnternetteki çelişkili içerikler arasında güvenilir rehberlik çok değerli.',
    accent: 'from-turquoise/20 to-turquoise/5',
    iconHoverBg: 'group-hover:bg-turquoise',
  },
  {
    icon: <BarChart2 size={28} />,
    number: '02',
    title: 'Gelişimin düzenli takibi',
    description:
      'Bebeğin motor, bilişsel ve sosyal gelişimini zaman içinde izlemek, gerektiğinde doğru adımı atmayı kolaylaştırır.',
    accent: 'from-navy/10 to-navy/5',
    iconHoverBg: 'group-hover:bg-navy',
  },
  {
    icon: <HeartHandshake size={28} />,
    number: '03',
    title: 'Gerektiğinde doğru desteğe ulaşım',
    description:
      'Bir endişe belirdiğinde nereye başvuracağını bilmek, ailelerin en çok ihtiyaç duyduğu şeylerden biri. Erişim, imkândan bağımsız olmalı.',
    accent: 'from-coral/15 to-coral/5',
    iconHoverBg: 'group-hover:bg-coral',
  },
];

export default function NeedSection() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-[#EDF3F4] relative">
      {/* Subtle top gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-turquoise bg-turquoise/5 border border-turquoise/15 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-pulse" />
              İhtiyaç
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#082A46] leading-tight">
            Her aile aynı imkânlara sahip değil.
          </h2>
        </div>

        {/* Need Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {needs.map((need, i) => (
            <div
              key={i}
              className="premium-card border border-gray-100/80 hover:border-turquoise/30 p-8 flex flex-col gap-5 group cursor-default"
            >
              {/* Number badge */}
              <span className="text-xs font-black text-turquoise/30 tracking-widest">{need.number}</span>

              {/* Icon with gradient bg */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${need.accent} text-turquoise flex items-center justify-center ${need.iconHoverBg} group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm`}>
                {need.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-navy group-hover:text-turquoise transition-colors duration-300">{need.title}</h3>

              {/* Description */}
              <p className="text-navy/65 text-sm leading-relaxed">{need.description}</p>

              {/* Bottom accent line */}
              <div className="mt-auto pt-4">
                <div className="w-12 h-0.5 bg-turquoise/20 group-hover:w-full group-hover:bg-turquoise/40 rounded-full transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>


        {/* Blockquote Highlight */}
        <div className="relative bg-gradient-to-r from-[#082A46] to-[#0e3b61] rounded-3xl px-8 md:px-12 py-8 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl bg-gradient-to-b from-turquoise to-teal-400" />
          <div
            className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, #14BBB7, transparent)' }}
          />
          <div
            className="absolute right-20 bottom-0 w-32 h-32 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #FF7965, transparent)' }}
          />
          <div className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <span className="text-[#14BBB7] text-6xl font-serif leading-none opacity-50 select-none shrink-0">
              &ldquo;
            </span>
            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed">
              Teknoloji, destek hizmetlerine erişimde yeni bir köprü olabilir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
