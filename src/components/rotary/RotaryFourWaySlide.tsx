'use client';

import React from 'react';
import { Scale, CheckCircle2, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';
import { RotaryWheel } from '@/components/rotary/RotarySlideDeck';

const fourWayTests = [
  {
    number: '1. SORU',
    question: 'Gerçeğe uygun mu?',
    answer: 'Avrupa Pediatri ve nöromotor hastalık standartlarında, Einspieler & Prechtl metodolojisine sadık kalınarak geliştirilmiş kinematik algoritma (%90–98 klinik korelasyon).',
    badge: 'Bilimsel Kanıt',
    icon: '🔬',
  },
  {
    number: '2. SORU',
    question: 'İlgililerin tümü için adil mi?',
    answer: 'Ailenin sosyoekonomik durumuna, coğrafi konumuna veya gelirine bakılmaksızın; Rotary kulübünüzün desteğiyle her bebeğe eşit, tarafsız ve %100 ücretsiz erişim.',
    badge: 'Fırsat Eşitliği',
    icon: '⚖️',
  },
  {
    number: '3. SORU',
    question: 'Dostluk ve iyi niyeti geliştirir mi?',
    answer: 'Rotaryenler ile toplum arasında ömür boyu sürecek derin bir şefkat bağı kurar. Anne-babalar uygulamayı her açtığında kulübünüze dua ve minnetle bağlanır.',
    badge: 'Kalıcı Minnet Bağı',
    icon: '🤝',
  },
  {
    number: '4. SORU',
    question: 'İlgililerin tümü için yararlı mı?',
    answer: 'Bebek için bağımsız yürüyüş imkânı, anne için gece 03:00 lohusalık huzuru, kamu sağlık sistemi için milyonlarca liralık gereksiz harcamanın önlenmesi.',
    badge: 'Bütünsel Fayda',
    icon: '🌱',
  },
];

export default function RotaryFourWaySlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center my-auto select-none py-2">
      <div className="max-w-7xl 2xl:max-w-[1360px] mx-auto w-full">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17458F]/10 border border-[#17458F]/25 text-[#17458F] text-xs font-black uppercase tracking-wider mb-2.5">
            <Scale size={14} className="text-[#F7A81B]" />
            <span>ROTARY ETİK DEĞERLER VE KUSURSUZ GÜVENCE MATRİSİ</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2 sm:mb-3">
            Rotary&apos;nin 4&apos;lü Özdenetim İlkelerine{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17458F] via-[#0067C8] to-[#F7A81B]">
              %100 Sadakat ve Uyum
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Düşündüğümüz, söylediğimiz ve yaptığımız her şeyde Rotary felsefesinin evrensel 4 sorusuna eksiksiz yanıt veren klinik teknoloji:
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {fourWayTests.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#17458F] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-black px-2.5 py-1 rounded-lg bg-amber-100 text-[#B87A00] border border-amber-300/60">
                    {item.number}
                  </span>
                  <span className="text-2xl">{item.icon}</span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#17458F] group-hover:text-[#0067C8] transition-colors mb-2.5">
                  {item.question}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.answer}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
                <span className="text-[#17458F] font-mono">{item.badge}</span>
                <CheckCircle2 size={14} className="text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
