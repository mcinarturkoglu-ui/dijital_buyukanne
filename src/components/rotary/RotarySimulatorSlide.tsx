'use client';

import { useState } from 'react';
import { TrendingUp, Baby, Stethoscope, Moon, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { RotaryWheel } from '@/components/rotary/RotarySlideDeck';

export default function RotarySimulatorSlide() {
  const [babyCount, setBabyCount] = useState<number>(500);

  const motorRisk = Math.max(1, Math.round(babyCount * 0.044));
  const skinDigest = Math.max(1, Math.round(babyCount * 0.038));
  const anxiousMoms = Math.max(1, Math.round(babyCount * 0.214));
  const avoidableER = Math.max(1, Math.round(babyCount * 0.52));

  return (
    <div className="w-full h-full flex flex-col justify-center items-center my-auto select-none py-2">
      <div className="max-w-7xl 2xl:max-w-[1360px] mx-auto w-full">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17458F]/10 border border-[#17458F]/25 text-[#17458F] text-xs font-black uppercase tracking-wider mb-2">
            <TrendingUp size={14} className="text-[#F7A81B]" />
            <span>KANITA DAYALI ROTARY ETKİ VE TRF DENETİM SİMÜLATÖRÜ</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2">
            Kulübünüz Kaç Bebeğin{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17458F] via-[#0067C8] to-[#F7A81B]">
              Hayatına Dokunacak?
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto">
            Hedeflediğiniz bebek ve aile sayısını belirleyin; <strong>Rotary 7 Odak Alanı</strong> standartlarında ve <strong>The Rotary Foundation (TRF)</strong> denetimine hazır somut sağlık dönüşümünü canlı simüle edin.
          </p>
        </div>

        {/* Slider Card */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-lg border border-slate-200/90 mb-5 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <h3 className="text-xs sm:text-sm font-black text-[#17458F] flex items-center gap-2">
                <RotaryWheel className="w-4 h-4 text-[#F7A81B]" />
                Kulübünüzün / Bölgenizin Destekleyeceği Bebek Sayısı:
              </h3>
              <p className="text-[11px] text-slate-500">
                Aşağıdaki Rotary hibe modellerinden birini seçin veya kaydırıcıyı hareket ettirin.
              </p>
            </div>

            <div className="inline-flex items-baseline gap-2 bg-gradient-to-r from-[#17458F] to-[#0A1A36] px-5 py-2.5 rounded-2xl shadow-md">
              <span className="text-2xl sm:text-3xl font-black text-[#F7A81B] font-mono tracking-tight">
                {babyCount.toLocaleString('tr-TR')}
              </span>
              <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider">
                Bebek & Anne
              </span>
            </div>
          </div>

          {/* Slider Track */}
          <div className="relative mb-4">
            <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#17458F] via-[#0067C8] to-[#F7A81B] rounded-full transition-all duration-150"
                style={{ width: `${Math.min(100, Math.max(0, ((babyCount - 100) / (2500 - 100)) * 100))}%` }}
              />
            </div>
            <input
              type="range"
              min={100}
              max={2500}
              step={50}
              value={babyCount}
              onChange={(e) => setBabyCount(Number(e.target.value))}
              className="absolute inset-0 w-full h-3 opacity-0 cursor-pointer"
            />
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            <span className="text-[10px] font-bold text-slate-400 mr-1">Proje Seviyesi:</span>
            {[
              { label: '100 Bebek', tier: 'Kulüp Pilotu', count: 100, emoji: '🎯' },
              { label: '250 Bebek', tier: 'Genişletilmiş', count: 250, emoji: '🎖️' },
              { label: '500 Bebek', tier: 'District Grant', count: 500, emoji: '🏛️' },
              { label: '1.000 Bebek', tier: 'Ortak Kulüpler', count: 1000, emoji: '🤝' },
              { label: '2.500 Bebek', tier: 'Global Grant', count: 2500, emoji: '🌍' },
            ].map((item) => (
              <button
                key={item.count}
                onClick={() => setBabyCount(item.count)}
                className={`px-3 py-1.5 rounded-xl text-xs transition-all border flex items-center gap-1.5 cursor-pointer ${
                  babyCount === item.count
                    ? 'bg-[#17458F] text-white border-[#17458F] font-bold shadow-md scale-102'
                    : 'bg-slate-50 text-slate-700 hover:border-slate-300 border-slate-200'
                }`}
              >
                <span>{item.emoji}</span>
                <span className="font-bold">{item.label}</span>
                <span className={`text-[10px] ${babyCount === item.count ? 'text-amber-300' : 'text-slate-400'}`}>
                  ({item.tier})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 4 Output Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          
          {/* Card 1: Motor Risk */}
          <div className="p-4 sm:p-5 rounded-3xl bg-blue-50/70 border border-blue-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">👶</span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#17458F]/10 text-[#17458F]">
                  %4,4 Prechtl GMs
                </span>
              </div>
              <div className="text-3xl font-black text-[#17458F] font-mono leading-none mb-1.5">
                ~{motorRisk} Bebek
              </div>
              <h4 className="text-xs font-black text-slate-900 mb-1">
                Nöromotor Erken Teşhis
              </h4>
              <p className="text-[11px] text-slate-600 leading-snug">
                0–6 ayda erken yakalanıp fizyoterapiyle serebral palsi kalıcı engelinden kurtarılan bebek.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-blue-200/60 text-[10px] text-[#17458F] font-bold">
              💡 Ömür boyu bağımsız adımlar
            </div>
          </div>

          {/* Card 2: Hekim Sevk */}
          <div className="p-4 sm:p-5 rounded-3xl bg-amber-50/70 border border-amber-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🩺</span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                  %3,8 DSÖ & AAP
                </span>
              </div>
              <div className="text-3xl font-black text-[#B87A00] font-mono leading-none mb-1.5">
                ~{skinDigest} Bebek
              </div>
              <h4 className="text-xs font-black text-slate-900 mb-1">
                Hekime Zamanında Sevk
              </h4>
              <p className="text-[11px] text-slate-600 leading-snug">
                Dışkı rengi ve cilt bariyer analizinde kritik günde hekim muayenesine ulaştırılan bebek.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-amber-200/60 text-[10px] text-[#B87A00] font-bold">
              💡 Erken tedavi köprüsü
            </div>
          </div>

          {/* Card 3: Lohusalık Anne */}
          <div className="p-4 sm:p-5 rounded-3xl bg-indigo-50/70 border border-indigo-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🌙</span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-900">
                  %21,4 Anne Sağlığı
                </span>
              </div>
              <div className="text-3xl font-black text-indigo-700 font-mono leading-none mb-1.5">
                ~{anxiousMoms} Anne
              </div>
              <h4 className="text-xs font-black text-slate-900 mb-1">
                Lohusalık Stresi Giderilen Anne
              </h4>
              <p className="text-[11px] text-slate-600 leading-snug">
                Gece 03:00 bebek ağlarken şefkatli 7/24 rehber asistanla yalnızlığı ve evhamı giderilen anne.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-indigo-200/60 text-[10px] text-indigo-700 font-bold">
              💡 Anne psikolojik refahı
            </div>
          </div>

          {/* Card 4: Önlenebilir Acil Servis */}
          <div className="p-4 sm:p-5 rounded-3xl bg-emerald-50/70 border border-emerald-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🏥</span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900">
                  %52 Önleme
                </span>
              </div>
              <div className="text-3xl font-black text-emerald-700 font-mono leading-none mb-1.5">
                ~{avoidableER} Başvuru
              </div>
              <h4 className="text-xs font-black text-slate-900 mb-1">
                Gereksiz Acil Servis Önleme
              </h4>
              <p className="text-[11px] text-slate-600 leading-snug">
                Gece panikle acile gitmek yerine evde bilimsel güvenle sakinleştirilen ve enfeksiyondan korunan aile.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-emerald-200/60 text-[10px] text-emerald-700 font-bold">
              💡 Sağlık sistemi tasarrufu
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
