"use client";

import Link from "next/link";
import { 
  Heart, 
  Users, 
  Building, 
  MapPin, 
  Activity, 
  Stethoscope, 
  ArrowRight,
  Info
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function EtkimizPage() {
  const metrics = [
    { label: "Desteklenen Bebek", value: 0, icon: Heart, color: "text-coral" },
    { label: "Aktif Aile", value: 0, icon: Users, color: "text-turquoise" },
    { label: "Destekçi Kurum", value: 0, icon: Building, color: "text-navy" },
    { label: "Kapsanan Şehir", value: 0, icon: MapPin, color: "text-turquoise-700" },
    { label: "Dijital Değerlendirme", value: 0, icon: Activity, color: "text-coral" },
    { label: "Uzman Görüşmesi", value: 0, icon: Stethoscope, color: "text-navy" },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy to-[#0c3252] text-white py-20 px-4 md:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs uppercase font-bold tracking-widest text-turquoise mb-3 inline-block">
            Sosyal Etki & Göstergeler
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white">
            Birlikte yarattığımız etki.
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Teknoloji bizden, sosyal etki işbirliklerimizden. Ulaşılan her aile ve takip edilen her bebek için şeffaf etki göstergeleri.
          </p>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Sample appearance notice */}
        <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-2xl mb-12 flex items-center gap-3 text-xs md:text-sm">
          <Info size={18} className="text-amber-600 flex-shrink-0" />
          <span>
            <strong>Örnek Görünüm:</strong> Aşağıdaki istatistikler platformun ölçüm göstergelerini temsil eder. Pilot programlar devreye girdikçe gerçek zamanlı veriler kurumsal panellerle senkronize edilecektir.
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center mb-4">
                  <Icon size={24} className={m.color} />
                </div>
                <AnimatedCounter
                  value={m.value}
                  label={m.label}
                  isPlaceholder={true}
                />
              </div>
            );
          })}
        </div>

        {/* Turkey Map Showcase Placeholder */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs uppercase font-bold text-turquoise tracking-wider">Ulusal Yaygınlaşma</span>
            <h3 className="text-2xl md:text-3xl font-bold text-navy mt-1">
              Türkiye Genelinde Etki Ağı
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Belediyeler ve yerel paydaşlarla genişleyen dijital aile kapısı.
            </p>
          </div>

          <div className="relative bg-slate-50 border border-slate-100 rounded-2xl p-8 min-h-[300px] flex flex-col items-center justify-center text-center">
            {/* Minimal SVG outline representation */}
            <div className="max-w-md w-full my-6 text-slate-300">
              <svg viewBox="0 0 800 350" fill="none" className="w-full h-auto stroke-slate-300 stroke-[2] fill-slate-100">
                <path d="M 50 150 Q 150 100 250 120 T 450 110 T 650 130 T 750 180 Q 700 250 550 240 T 350 260 T 150 230 Z" />
              </svg>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-turquoise/10 text-turquoise-800 font-medium">
                <span className="w-2 h-2 rounded-full bg-turquoise"></span>
                Ankara (Pilot Hazırlığı)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/10 text-navy font-medium">
                <span className="w-2 h-2 rounded-full bg-navy"></span>
                Keçiören (Planlanan)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                Diğer Şehirler (Yakında)
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-navy text-white rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Siz de bu sosyal etki hareketine katılın.
          </h3>
          <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto mb-8">
            Şehrinizde veya hedef kitlenizde kaç bebeğe destek olabileceğinizi birlikte planlayalım.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/kurumlar"
              className="px-8 py-4 bg-coral hover:bg-coral-600 text-white font-bold rounded-2xl transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>Kurum Olarak Katıl</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/hakkimizda"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-2xl transition-all"
            >
              Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
