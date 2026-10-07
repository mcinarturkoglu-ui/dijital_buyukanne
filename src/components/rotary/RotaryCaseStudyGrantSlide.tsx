'use client';

import React from 'react';
import { Heart, Globe2, CheckCircle2, Award, Quote, Sparkles, ShieldCheck } from 'lucide-react';
import { RotaryWheel } from '@/components/rotary/RotarySlideDeck';

const grantCriteria = [
  { title: '1. Anne ve Çocuk Sağlığı Uyumu', desc: 'Rotary 7 Odak Alanından en öncelikli olanına doğrudan ve ölçülebilir katkı.' },
  { title: '2. Sürdürülebilirlik & Yerel Güç', desc: '0–24 ay boyunca ailelerin ve sağlık ocaklarının kesintisiz kullanım altyapısı.' },
  { title: '3. Ölçülebilir Sağlık Çıktıları', desc: 'Kaç bebek tarandı, kaç asimetri tespit edildi; Guvernörlüğe denetlenebilir veri.' },
  { title: '4. Kapsayıcılık & Eşit Erişim', desc: 'Sosyoekonomik durumuna bakılmaksızın her anne-bebeğe %100 ücretsiz erişim.' },
  { title: '5. Şeffaf Mali & Operasyonel Takip', desc: 'Kulübe özel canlı kontrol paneli ile anlık harcama ve etki karnesi.' },
  { title: '6. Uluslararası Kardeş Kulüp Desteği', desc: 'Global Grant başvurularında yabancı kulüplerin heyecanla fonlayacağı yenilikçi yapı.' },
];

export default function RotaryCaseStudyGrantSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center my-auto select-none py-2">
      <div className="max-w-7xl 2xl:max-w-[1360px] mx-auto w-full">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17458F]/10 border border-[#17458F]/25 text-[#17458F] text-xs font-black uppercase tracking-wider mb-2.5">
            <Globe2 size={14} className="text-[#F7A81B]" />
            <span>KANITLANMIŞ ETKİ & THE ROTARY FOUNDATION (TRF) HİBE UYUMU</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2 sm:mb-3">
            Teknoloji Bilimdir,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17458F] via-[#0067C8] to-[#F7A81B]">
              Bir Bebeğin İlk Adımı Mucizedir
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Rotary desteğiyle hayata tutunan ailelerimizin başarı yolculuğu ve Global Grant kriterlerine %100 uyum:
          </p>
        </div>

        {/* 2 Main Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Sol Kolon: Zeynep Bebek Başarı Hikayesi */}
          <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-white via-amber-50/30 to-blue-50/40 border border-slate-200/90 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-100 text-[#B87A00] border border-amber-300">
                👶 Gerçek Hayattan Etki Öyküsü
              </span>
              <span className="text-xs text-slate-500 font-medium">32. Hafta Prematüre Doğum</span>
            </div>

            <h3 className="text-lg sm:text-xl font-black text-[#17458F]">
              Zeynep Bebeğin Bağımsız Yürüyüş Zaferi
            </h3>

            {/* 4 Journey Steps */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/90 border border-slate-200 text-xs text-slate-700">
                <span className="font-mono font-black text-[#17458F] shrink-0 bg-blue-100 px-2 py-0.5 rounded">2. Ay</span>
                <p>Rotary armağanı uygulamadan çekilen 2 dakikalık video nöromotor asimetri sinyali verdi.</p>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/90 border border-slate-200 text-xs text-slate-700">
                <span className="font-mono font-black text-[#B87A00] shrink-0 bg-amber-100 px-2 py-0.5 rounded">3. Ay</span>
                <p>Sistem üzerinden yönlendirilen pediatrik fizyoterapist ile ev egzersiz programı başlatıldı.</p>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/90 border border-slate-200 text-xs text-slate-700">
                <span className="font-mono font-black text-emerald-700 shrink-0 bg-emerald-100 px-2 py-0.5 rounded">14. Ay</span>
                <p className="font-bold text-slate-900">Zeynep hiçbir yardımcı cihaza gerek kalmadan ilk bağımsız adımlarını attı! 🎉</p>
              </div>
            </div>

            {/* Family Quote */}
            <div className="p-3.5 rounded-2xl bg-[#17458F]/5 border border-[#17458F]/15 text-xs text-slate-700 italic flex items-start gap-2.5">
              <Quote size={18} className="text-[#F7A81B] shrink-0 mt-0.5" />
              <span>
                &ldquo;İyi ki &apos;zamanla geçer&apos; diyerek beklememişiz. Rotary Kulübü&apos;nün bu desteği olmasaydı kızım belki de yürüyemeyecekti. Minnettarız.&rdquo;
                <strong className="block not-italic text-[#17458F] mt-1 font-bold">— Elif K. (Zeynep&apos;in Annesi, Ankara)</strong>
              </span>
            </div>
          </div>

          {/* Sağ Kolon: TRF 6 Temel Şartı */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <RotaryWheel className="w-5 h-5 text-[#F7A81B]" />
              <h4 className="text-sm font-black text-[#17458F] uppercase tracking-wider">
                The Rotary Foundation (TRF) Hibe Kriterlerine %100 Uyum
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {grantCriteria.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#17458F] transition-all"
                >
                  <div className="flex items-center gap-1.5 text-xs font-black text-[#17458F] mb-1">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    <span className="truncate">{item.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#17458F] to-[#0A1A36] text-white flex items-center justify-between text-xs font-bold shadow-md">
              <span className="flex items-center gap-2">
                <Sparkles size={16} className="text-[#F7A81B]" />
                District Grant & Global Grant Başvurularına Anahtar Teslim Hazır
              </span>
              <span className="text-[#F7A81B] font-mono">%100 Hibe Uyumu</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
