'use client';

import { BookOpen, BarChart2, HeartHandshake } from 'lucide-react';

const needs = [
  {
    icon: <BookOpen size={28} />,
    title: 'Güvenilir bilgiye erişim',
    description:
      'Her aile, bebek gelişimi konusunda doğru ve güncel bilgiye kolayca ulaşabilmeli. İnternetteki çelişkili içerikler arasında güvenilir rehberlik çok değerli.',
  },
  {
    icon: <BarChart2 size={28} />,
    title: 'Gelişimin düzenli takibi',
    description:
      'Bebeğin motor, bilişsel ve sosyal gelişimini zaman içinde izlemek, gerektiğinde doğru adımı atmayı kolaylaştırır.',
  },
  {
    icon: <HeartHandshake size={28} />,
    title: 'Gerektiğinde doğru desteğe ulaşım',
    description:
      'Bir endişe belirdiğinde nereye başvuracağını bilmek, ailelerin en çok ihtiyaç duyduğu şeylerden biri. Erişim, imkândan bağımsız olmalı.',
  },
];

export default function NeedSection() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-[#EDF3F4]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-sm font-semibold tracking-wider uppercase text-[#14BBB7] block mb-3">
            İhtiyaç
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#082A46] leading-tight">
            Her aile aynı imkânlara sahip değil.
          </h2>
        </div>

        {/* Need Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {needs.map((need, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-card hover:shadow-card-hover hover:-translate-y-2 border border-gray-100/80 hover:border-turquoise/30 transition-all duration-300 p-8 flex flex-col gap-4 group cursor-default"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-turquoise/10 text-turquoise flex items-center justify-center group-hover:bg-turquoise group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                {need.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-navy group-hover:text-turquoise transition-colors duration-200">{need.title}</h3>

              {/* Description */}
              <p className="text-navy/70 text-sm leading-relaxed">{need.description}</p>
            </div>
          ))}
        </div>


        {/* Blockquote Highlight */}
        <div className="relative bg-[#082A46] rounded-3xl px-8 md:px-12 py-8 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl bg-[#14BBB7]" />
          <div
            className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, #14BBB7, transparent)' }}
          />
          <div className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <span className="text-[#14BBB7] text-6xl font-serif leading-none opacity-60 select-none shrink-0">
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
