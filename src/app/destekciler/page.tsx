"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Building, MapPin, ArrowRight, Sparkles } from "lucide-react";
import supportersData from "@/data/supporters.json";

export default function DestekcilerPage() {
  const [filter, setFilter] = useState("all");
  const [supporters, setSupporters] = useState<any[]>(supportersData.supporters);

  useEffect(() => {
    fetch('/api/admin/supporters')
      .then((res) => res.json())
      .then((data) => {
        if (data?.supporters) {
          setSupporters(data.supporters);
        }
      })
      .catch(() => {});
  }, []);

  const categories = [
    { id: "all", label: "Tümü" },
    { id: "belediye", label: "Belediyeler" },
    { id: "stk", label: "STK" },
    { id: "vakif", label: "Vakıflar" },
    { id: "dernek", label: "Dernekler" },
    { id: "sirket", label: "Şirketler" },
    { id: "diger", label: "Diğer" },
  ];

  const filteredSupporters = supporters.filter((s) => {
    if (!s.active && s.active !== undefined) return false;
    if (filter === "all") return true;
    return s.type.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy to-[#0b2f4d] text-white py-20 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-turquoise mb-3 inline-block">
            İşbirliklerimiz & Paydaşlar
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white">
            Bu yolculuğu birlikte büyütüyoruz.
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Ailelerin ve bebeklerin yanında olan, sosyal sorumluluğu teknolojiyle buluşturan öncü kurumlarımız.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-gray-100 py-6 px-4 md:px-8 sticky top-16 md:top-20 z-30">
        <div className="max-w-6xl mx-auto flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-5 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all whitespace-nowrap ${
                filter === c.id
                  ? "bg-turquoise text-white shadow-sm"
                  : "bg-gray-100 text-navy/70 hover:bg-gray-200"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Supporters Grid */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto min-h-[400px]">
        {filteredSupporters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSupporters.map((s) => (
              <div
                key={s.id}
                className="premium-card bg-white border border-gray-100/90 rounded-3xl p-6 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-white text-sm shadow-sm"
                      style={{ backgroundColor: s.color || "#14BBB7" }}
                    >
                      {s.shortName?.slice(0, 2) || "DB"}
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {s.type}
                    </span>
                  </div>

                  <h3 className="font-bold text-navy text-lg mb-1">{s.name}</h3>
                  <p className="text-xs font-semibold text-turquoise mb-3">{s.program}</p>
                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    {s.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <MapPin size={14} className="text-gray-400" />
                    <span>{s.city}</span>
                  </div>
                  <Link
                    href={`/destekciler/${s.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-coral hover:text-coral-600 transition-colors"
                  >
                    <span>Detayları Gör</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-gray-100 rounded-3xl p-12 text-center max-w-md mx-auto">
            <Building size={36} className="mx-auto text-gray-400 mb-3" />
            <h4 className="font-bold text-navy mb-1">Henüz Kayıt Yok</h4>
            <p className="text-xs text-gray-500">
              Bu filtrede henüz yayınlanmış bir destekçi bulunmamaktadır.
            </p>
          </div>
        )}

        {/* Join Supporters CTA */}
        <div className="mt-20 bg-gradient-to-r from-navy to-[#0f3d63] text-white rounded-3xl p-8 md:p-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-turquoise text-xs font-semibold mb-3">
            <Sparkles size={14} />
            <span>Siz de Yer Alın</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
            Kurumunuzu Destekçilerimiz Arasında Görün
          </h3>
          <p className="text-white/70 text-sm max-w-xl mx-auto mb-8">
            Belediyeniz veya vakfınız adına özelleştirilmiş bir DijitalBüyükanne destek programı başlatalım.
          </p>
          <Link
            href="/kurumlar"
            className="inline-flex items-center gap-2 px-8 py-4 bg-coral hover:bg-coral-600 text-white font-bold rounded-2xl transition-all shadow-md text-sm"
          >
            <span>Destekçi Olmak İstiyorum</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
