'use client';

import React from 'react';
import Image from 'next/image';
import { Gift, Heart, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { RotaryWheel } from '@/components/rotary/RotarySlideDeck';

export default function RotaryGiftSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center my-auto select-none py-2">
      <div className="max-w-7xl 2xl:max-w-[1360px] mx-auto w-full">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-[#B87A00] text-xs font-black uppercase tracking-wider mb-2.5">
            <Gift size={14} />
            <span>SİSTEMİ KULLANACAK BEBEKLERE KULÜP HEDİYESİ</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2 sm:mb-3">
            Her Bebeğe ve Annesine Özel{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17458F] via-[#0067C8] to-[#F7A81B]">
              Rotary Kulüp İpek Fuları & Hoş Geldin Hediyesi
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Projeniz kapsamında yapay zekâ taramasına dâhil edilen her bebeğe ve annesine, Rotary kulübünüzün sevgisini simgeleyen <strong>özel tasarım %100 saf ipek bandana ve fular</strong> hediye kutusuyla doğrudan evlerine ulaştırılır.
          </p>
        </div>

        {/* 2 Columns: Image on Left, 4 Benefits on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Sol Kolon: Gerçek Fotoğraf Görseli */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#17458F]/20 bg-white group max-w-lg w-full">
              <Image
                src="/images/rotary-bebek-hediyesi.jpg"
                alt="Rotary Bebek ve Anne İpek Fuları Hediyesi"
                width={700}
                height={460}
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute top-3.5 left-3.5 bg-[#17458F] text-white text-[11px] font-black uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-white/20">
                <RotaryWheel className="w-3.5 h-3.5 text-[#F7A81B]" />
                <span>Rotary Kulübü Özel Armağanı</span>
              </div>
              <div className="absolute bottom-3.5 right-3.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1 rounded-full border border-white/20">
                %100 Saf Bursa İpeği
              </div>
            </div>
          </div>

          {/* Sağ Kolon: 4 Ayrıcalık Kartı */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-3.5">
            
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5 hover:border-[#17458F] transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#B87A00] flex items-center justify-center shrink-0">
                <Gift size={20} />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#17458F]">Lüks %100 Saf İpek Kumaş</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                  Bebeğin hassas cildine uygun, terletmeyen, nefes alan, pürüzsüz dokulu geleneksel Bursa ipeği.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5 hover:border-[#17458F] transition-all">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0067C8] flex items-center justify-center shrink-0">
                <Heart size={20} />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#17458F]">Bebek Bandanası & Anne Fuları</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                  Bebek için sevimli bir boyun bandanası, anne için zarif bir boyun fuları olarak ikili kullanılabilir.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5 hover:border-[#17458F] transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-[#17458F] flex items-center justify-center shrink-0">
                <Award size={20} />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#17458F]">Kalıcı Altın Yaldızlı Amblem</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                  Altın yaldızlı Rotary Çarkı ve kulüp ismiyle dokunmuş, nesiller boyu saklanacak prestijli bir hatıra.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5 hover:border-[#17458F] transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#009739] flex items-center justify-center shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#17458F]">Doğrudan Evlere Teslimat</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                  Kulüp başkanınızın iyi dilek mektubu ve aktivasyon sertifikasıyla birlikte ailelerin kapısına kargolanır.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
