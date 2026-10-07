'use client';

import React from 'react';
import { Compass, Globe2, Activity, ShieldCheck, CheckCircle2, Heart, Sparkles, Award } from 'lucide-react';
import { RotaryWheel } from '@/components/rotary/RotarySlideDeck';

export default function RotaryPolioSlide() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center my-auto select-none py-2">
      <div className="max-w-7xl 2xl:max-w-[1360px] mx-auto w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17458F]/10 border border-[#17458F]/25 text-[#17458F] text-xs font-black uppercase tracking-wider mb-2.5">
            <Compass size={14} className="text-[#F7A81B]" />
            <span>TARİHİ BİR MİRASIN 21. YÜZYIL TEKNOLOJİSİYLE DEVAMI</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2 sm:mb-3">
            Tıpkı Çocuk Felcine (Polio) Karşı Kazanılan Zafer Gibi:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17458F] via-[#0067C8] to-[#F7A81B]">
              Şimdi Nöromotor Erken Teşhis Seferberliği
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Rotary International, <em>&ldquo;End Polio Now&rdquo;</em> hareketiyle dünyayı çocuk felcinden arındırdı. Bugün ise bebeklik çağının en kritik motor kaybı nedeni <strong>Serebral Palsi ve nöromotor gelişim riskleridir.</strong>
          </p>
        </div>

        {/* 2 Main Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Sol Kolon: 2 Karşılaştırma Kartı */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Kart 1: PolioPlus Mirası */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-[#17458F]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#17458F] border border-blue-200 flex items-center justify-center shrink-0">
                <Globe2 size={24} className="text-[#17458F]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base sm:text-lg font-black text-[#17458F]">
                    1985: PolioPlus Efsanesi
                  </h3>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-[#17458F]">
                    3 Milyar Çocuk Aşılandı
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Rotaryenler kapı kapı dolaşarak aşı damlattı, çocuk felcini %99,9 oranında yeryüzünden sildi ve insanlık tarihine geçti.
                </p>
              </div>
            </div>

            {/* Kart 2: 2026 AI Nöromotor Seferberliği */}
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-amber-50/80 via-white to-blue-50/50 border-2 border-[#F7A81B] shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F7A81B] text-[#17458F] flex items-center justify-center shrink-0 shadow-md">
                <Activity size={24} className="text-[#17458F]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-base sm:text-lg font-black text-slate-900">
                    Bugün: AI ile Nöromotor Erken Teşhis
                  </h3>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#F7A81B]/20 text-[#B87A00] border border-[#F7A81B]/40">
                    0–6 Ay Hayati Fırsat
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  Türkiye&apos;de her yıl doğan 1 milyonu aşkın bebekten <strong>yaklaşık 50.000&apos;i</strong> nöromotor risk taşır. Evde çekilen 2 dakikalık video analiziyle erken yakalanan bebekler zamanında fizyoterapiyle <strong>bağımsız adımlarına kavuşur.</strong>
                </p>
              </div>
            </div>

            {/* Micro Trust Strip */}
            <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
              <span className="flex items-center gap-1.5 font-semibold text-[#17458F]">
                <ShieldCheck size={15} />
                Einspieler & Prechtl GMs Standardı
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-semibold text-emerald-700">
                <CheckCircle2 size={15} />
                Erken Plastisite ile %90+ Tedavi Başarısı
              </span>
            </div>

          </div>

          {/* Sağ Kolon: Büyük 0-6 Ay Altın Vitrin Kartı */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#17458F] via-[#123670] to-[#0A1A36] text-white shadow-2xl border border-white/20 relative overflow-hidden text-center">
              
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F7A81B]/15 rounded-bl-full pointer-events-none" />

              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 p-2 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <RotaryWheel className="w-full h-full text-[#F7A81B]" />
              </div>

              <div className="text-5xl sm:text-6xl font-black text-[#F7A81B] font-mono mb-2 tracking-tight">
                0–6 Ay
              </div>

              <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-wider mb-2">
                Geri Dönülemez Müdahale Penceresi
              </h4>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 font-normal">
                Bebek beyninin nörolojik plastisitesi (yenilenme kabiliyeti) ilk 6 ayda en üst noktadadır. Kaçırılan her hafta kalıcı motor kaybına yol açarken, Rotary desteğiyle erken teşhis edilen bebek <strong>ömür boyu tekerlekli sandalyeden kurtulabilir.</strong>
              </p>

              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 text-left text-xs text-slate-200 flex items-center gap-3">
                <Sparkles size={22} className="text-[#F7A81B] shrink-0" />
                <span>
                  &ldquo;Bir bebeğe bağımsız adımlar armağan etmek, Rotary&apos;nin dünyaya bırakacağı en asil mirastır.&rdquo;
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
