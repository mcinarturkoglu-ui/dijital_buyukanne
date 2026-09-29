'use client';

import {
  ShieldCheck,
  Award,
  Globe2,
  Heart,
  Lock,
  Building2,
  Sparkles,
  Stethoscope,
} from 'lucide-react';

const standards = [
  {
    icon: Award,
    title: 'Nörolojik ve Kas Hastalıkları Standardı',
    desc: 'Uluslararası Spontan Hareket Metodolojisi',
    badge: 'Nöromotor Referansı',
  },
  {
    icon: Globe2,
    title: 'DSÖ (WHO) Kılavuzları',
    desc: 'Erken Çocukluk Gelişim Normları',
    badge: 'Global Standart',
  },
  {
    icon: Heart,
    title: 'Rotary 7 Odak Alanı',
    desc: 'Anne & Çocuk Sağlığı, Hastalıkların Önlenmesi',
    badge: 'TRF Global Grant Uyumu',
  },
  {
    icon: Lock,
    title: 'KVKK & Anonim Sağlık Verisi',
    desc: 'Uçtan Uca Şifreli Cihaz İçi Anonimleştirme',
    badge: 'Yüksek Güvenlik',
  },
  {
    icon: Stethoscope,
    title: 'AAP Pediatri Protokolleri',
    desc: 'Kanıta Dayalı Çocuk Sağlığı & Sevk Köprüsü',
    badge: 'Klinik Güvence',
  },
  {
    icon: Building2,
    title: 'OMÜ Samsun Teknopark & Tıp Fakültesi',
    desc: 'Adapha Yapay Zeka Ar-Ge ve Klinik Danışmanlık Üssü',
    badge: 'Akademik Ar-Ge',
  },
  {
    icon: Globe2,
    title: 'Anadolu Ajansı & CNN Türk Onayı',
    desc: 'Bebeklerde Erken Tanı Teknolojisi Ulusal Basın Vitrini',
    badge: 'Ulusal Medya',
  },
  {
    icon: ShieldCheck,
    title: 'Pediatrik Danışma Kurulu',
    desc: 'Çocuk Nörolojisi, Fizyoterapi ve AI Akademisyenleri',
    badge: 'Bilimsel Omurga',
  },
];

export default function StandardsMarquee() {
  return (
    <div className="relative py-6 bg-gradient-to-r from-[#0B1E3B] via-[#0D2A54] to-[#0B1E3B] text-white overflow-hidden border-y border-white/10 select-none shadow-md">
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#0B1E3B] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#0B1E3B] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max items-center animate-marquee gap-6">
        {/* Double the array for seamless infinite loop */}
        {[...standards, ...standards].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3.5 bg-white/[0.06] hover:bg-white/[0.12] transition-colors border border-white/10 px-5 py-2.5 rounded-2xl shrink-0 backdrop-blur-sm group"
            >
              <div className="w-8 h-8 rounded-xl bg-sky-400/20 text-sky-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Icon size={16} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white tracking-wide">
                    {item.title}
                  </span>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-sky-200 border border-white/15">
                    {item.badge}
                  </span>
                </div>
                <p className="text-[10px] text-white/60 mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
