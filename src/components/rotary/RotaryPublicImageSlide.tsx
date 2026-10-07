'use client';

import React from 'react';
import { Smartphone, FileCheck2, Share2, BarChart3, Globe2, ShieldCheck, Award } from 'lucide-react';
import { RotaryWheel } from '@/components/rotary/RotarySlideDeck';

const prCards = [
  {
    icon: Smartphone,
    color: 'bg-[#17458F] text-[#F7A81B]',
    title: '1. Uygulama İçi Daimi Varlık',
    desc: 'Uygulama açılışında logonuz ve "[X] Rotary Kulübü katkılarıyla ailenize %100 ücretsiz armağan edilmiştir" teşekkür mesajı yer alır.',
    badge: 'Mobil Görünürlük',
  },
  {
    icon: FileCheck2,
    color: 'bg-[#F7A81B] text-[#17458F]',
    title: '2. Fiziki Lisans Kartı & Sertifika',
    desc: 'Hastanelerde veya kulüp etkinliklerinde ailelere takdim edilen altın yaldızlı Rotary Geleceğe Umut Sertifikası ve QR aktivasyon kartı.',
    badge: 'Prestij Sertifikası',
  },
  {
    icon: Share2,
    color: 'bg-[#D41367] text-white',
    title: '3. Ulusal & Yerel Basın Lansmanı',
    desc: 'Proje başında Kulüp Başkanı ve Bölge Guvernörü adına TV, gazete ve dijital mecralara hazır profesyonel basın bülteni paketi.',
    badge: 'Medya Yansıması',
  },
  {
    icon: BarChart3,
    color: 'bg-[#0067C8] text-white',
    title: '4. Bölge Konferansı & Asamblesi',
    desc: 'Kulübünüzün dönem ödüllerine aday olmasını sağlayacak tek tıkla indirilebilir infografik başarı karnesi ve Guvernör sunumu.',
    badge: 'Dönem Ödülleri',
  },
  {
    icon: Globe2,
    color: 'bg-[#901F93] text-white',
    title: '5. Uluslararası Rotary Başarı Dosyası',
    desc: '1.4 milyon Rotaryana ilham vermek üzere Rotary International bültenlerine ve Global Grant kardeş kulüplerine hazır format.',
    badge: 'Global Ağ',
  },
  {
    icon: ShieldCheck,
    color: 'bg-[#009739] text-white',
    title: '6. Kulübe Özel Canlı Yönetim Paneli',
    desc: 'Kulüp yönetiminiz kaç bebek kaydoldu, kaç video analiz edildi, kaç erken müdahale sağlandı; 7/24 canlı ekrandan şeffaf izler.',
    badge: 'Canlı Metrik',
  },
];

export default function RotaryPublicImageSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center my-auto select-none py-2">
      <div className="max-w-7xl 2xl:max-w-[1360px] mx-auto w-full">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17458F]/10 border border-[#17458F]/25 text-[#17458F] text-xs font-black uppercase tracking-wider mb-2.5">
            <Award size={14} className="text-[#F7A81B]" />
            <span>TOPLUMSAL İTİBAR VE PUBLIC IMAGE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2 sm:mb-3">
            Kulübünüzün İmzası{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17458F] via-[#0067C8] to-[#F7A81B]">
              Her Ailenin Hafızasında
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Rotaryenlerin toplumdaki saygınlığını taçlandıran ve kulüp üyelerinizin gururla sahipleneceği 6 boyutlu kurumsal itibar paketi:
          </p>
        </div>

        {/* 6 Cards Grid (2 rows x 3 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {prCards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#17458F] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-11 h-11 rounded-2xl ${c.color} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {c.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-slate-900 group-hover:text-[#17458F] transition-colors mb-2">
                    {c.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {c.desc}
                  </p>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center text-[11px] font-bold text-[#17458F]">
                  <span>✓ Protokol Kapsamında Dahil</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
