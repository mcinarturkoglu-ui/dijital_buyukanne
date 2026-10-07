'use client';

import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  Building,
  FileText,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Award,
} from 'lucide-react';
import { RotaryWheel } from '@/components/rotary/RotarySlideDeck';

const steps = [
  {
    step: '01',
    title: 'Kulüp Kararı',
    desc: 'Kulüp Yönetim Kurulu veya Hizmet Komitesinde bebek sağlığı projesi onayı.',
    badge: '1 Gün',
  },
  {
    step: '02',
    title: 'Protokol & Kontenjan',
    desc: 'Desteklenecek bebek sayısı (100–2.500) ve kulüp logolarının sisteme tanımlanması.',
    badge: '2 Gün',
  },
  {
    step: '03',
    title: 'Hediye Kitleri & Dağıtım',
    desc: 'Saf ipek fular kutuları ve QR kartların ailelere veya hastanelere ulaştırılması.',
    badge: '1 Hafta',
  },
  {
    step: '04',
    title: 'Guvernörlük Raporu',
    desc: 'Dönem sonu konferansı için tek tıkla indirilebilir infografik başarı karnesi.',
    badge: 'Dönem Sonu',
  },
];

export default function RotaryCtaSlide({
  onOpenModal,
}: {
  onOpenModal: () => void;
}) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center my-auto select-none py-2">
      <div className="max-w-7xl 2xl:max-w-[1360px] mx-auto w-full">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17458F]/10 border border-[#17458F]/25 text-[#17458F] text-xs font-black uppercase tracking-wider mb-2">
            <RotaryWheel className="w-4 h-4 text-[#F7A81B]" />
            <span>KULÜP BAŞKANLARI VE GUVERNÖRLÜK İÇİN RESMÎ PROTOKOL PORTALI</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-2">
            Geleceğe Umut Olacak İlk Adımı{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17458F] via-[#0067C8] to-[#F7A81B]">
              Kulübünüzle Birlikte Atın
            </span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Rotary kulübünüzün dönem projesi için 24 saat içinde kişiselleştirilmiş protokol ve bütçe dosyanızı hazırlıyoruz.
          </p>
        </div>

        {/* 4 Horizontal Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-5 sm:mb-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between hover:border-[#17458F] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base font-black font-mono text-[#F7A81B] bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200">
                    ADIM {s.step}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono font-bold">{s.badge}</span>
                </div>
                <h4 className="text-sm font-black text-slate-900 mb-1">{s.title}</h4>
                <p className="text-[11px] text-slate-600 leading-snug">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact & Executive Portal Card */}
        <div className="bg-gradient-to-br from-[#17458F] via-[#123670] to-[#0A1A36] rounded-3xl p-5 sm:p-6 text-white shadow-2xl border border-white/20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Sol: İletişim Detayları */}
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F7A81B] bg-white/10 px-3 py-1 rounded-full border border-white/20">
                <Sparkles size={13} />
                <span>ROTARY DÖNEM PROJELERİ KOORDİNATÖRLÜĞÜ</span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-white">
                Kulüp Sunumu ve Resmî Protokol İçin Bize Ulaşın
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/10 border border-white/10">
                  <Phone size={15} className="text-[#F7A81B] shrink-0" />
                  <div>
                    <span className="text-slate-300 block text-[10px]">Doğrudan Hat:</span>
                    <a href="tel:05428461232" className="font-mono font-bold hover:text-[#F7A81B]">
                      0542 846 12 32
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/10 border border-white/10">
                  <Mail size={15} className="text-[#F7A81B] shrink-0" />
                  <div>
                    <span className="text-slate-300 block text-[10px]">Rotary Masası:</span>
                    <a href="mailto:rotary@adapha.com" className="font-mono font-bold hover:text-[#F7A81B]">
                      rotary@adapha.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-300 pt-1">
                <Building size={14} className="text-[#F7A81B] shrink-0" />
                <span>Ondokuz Mayıs Üniversitesi Kurupelit Kampüsü, Samsun Teknopark</span>
              </div>
            </div>

            {/* Sağ: Aksiyon Butonları */}
            <div className="lg:col-span-5 flex flex-col gap-2.5 justify-center">
              <a
                href="tel:05428461232"
                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-[#F7A81B] to-[#d48906] hover:from-[#e59b13] text-[#0A1A36] font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-102 active:scale-98 transition-all cursor-pointer"
              >
                <Phone size={16} />
                <span>📞 Proje Koordinatörünü Ara</span>
              </a>

              <Link
                href="/sunum?deck=rotary"
                target="_blank"
                className="w-full py-3 px-4 rounded-2xl bg-white hover:bg-slate-100 text-[#17458F] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-white/30 transition-all cursor-pointer shadow-md"
              >
                <FileText size={16} className="text-[#F7A81B]" />
                <span>Rotary Resmî Sunumunu İncele</span>
              </Link>

              <button
                onClick={onOpenModal}
                className="w-full py-2.5 px-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-white/20 transition-all cursor-pointer"
              >
                <RotaryWheel className="w-4 h-4 text-[#F7A81B]" />
                <span>Canlı Rotary Ekosistem Pencerisi</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
