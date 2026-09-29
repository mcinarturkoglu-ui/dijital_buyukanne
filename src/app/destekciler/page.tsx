"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Building2, MapPin, ArrowRight, Sparkles, ShieldCheck, Heart, Award, Users, CheckCircle2 } from "lucide-react";
import supportersData from "@/data/supporters.json";

export default function DestekcilerPage() {
  const [filter, setFilter] = useState("all");
  const [supporters, setSupporters] = useState<any[]>(supportersData.supporters);

  useEffect(() => {
    fetch('/api/admin/supporters')
      .then((res) => res.json())
      .then((data) => {
        if (data?.supporters && data.supporters.length > 0) {
          setSupporters(data.supporters);
        }
      })
      .catch(() => {});
  }, []);

  const categories = [
    { id: "all", label: "Tüm Destekçiler" },
    { id: "belediye", label: "Belediyeler" },
    { id: "akademi", label: "Üniversite & Ar-Ge" },
    { id: "stk", label: "Sivil Toplum & STK" },
    { id: "sirket", label: "Teknoloji Şirketleri" },
  ];

  const filteredSupporters = supporters.filter((s) => {
    if (!s.active && s.active !== undefined) return false;
    if (filter === "all") return true;
    return s.type?.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="pt-20 bg-[#F8FAFC]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#07172E] via-[#0B2546] to-[#0A1E38] text-white py-20 lg:py-24 px-4 md:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0284C7]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sky-200 text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-xs">
            <Award size={14} className="text-emerald-400" />
            <span>İŞ BİRLİKLERİ & RESMÎ PAYDAŞLAR</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight text-white">
            Geleceği Birlikte <br />
            <span className="bg-gradient-to-r from-sky-300 via-teal-200 to-rose-300 bg-clip-text text-transparent">
              Büyütüyoruz
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Ailelerin ve bebeklerin yanında olan, sosyal sorumluluğu ileri yapay zekâ teknolojisiyle buluşturan öncü kamu kurumları, üniversiteler ve sivil toplum paydaşlarımız.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white/80 backdrop-blur-xl border-b border-slate-200/80 py-5 px-4 md:px-8 sticky top-16 md:top-20 z-30 shadow-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                filter === c.id
                  ? "bg-[#0B1E3B] text-white shadow-md shadow-slate-900/10 scale-102"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              <span>{c.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Supporters Grid */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-6xl mx-auto min-h-[450px]">
        {filteredSupporters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSupporters.map((s) => (
              <div
                key={s.id}
                className="bg-white border border-slate-200/90 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="px-4 py-2 rounded-2xl flex items-center justify-center font-black text-white text-xs tracking-wider shadow-sm"
                      style={{ backgroundColor: s.color || "#0284C7" }}
                    >
                      {s.shortName || s.name.slice(0, 8)}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {s.type}
                    </span>
                  </div>

                  <h3 className="font-bold text-[#0B1E3B] text-xl mb-1 group-hover:text-[#0284C7] transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-xs font-bold text-[#0284C7] mb-3">
                    {s.program}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {s.description}
                  </p>
                </div>

                <div>
                  {/* Sayısal Bilgi Rozetleri */}
                  {(s.babies > 0 || s.families > 0) && (
                    <div className="flex items-center gap-3 mb-4 text-xs font-bold">
                      {s.babies > 0 && (
                        <span className="px-3 py-1 rounded-xl bg-sky-50 text-[#0284C7] border border-sky-100 flex items-center gap-1.5">
                          <Users size={13} />
                          {s.babies.toLocaleString('tr-TR')} Bebek
                        </span>
                      )}
                      {s.families > 0 && (
                        <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1.5">
                          <Heart size={13} />
                          {s.families.toLocaleString('tr-TR')} Aile
                        </span>
                      )}
                    </div>
                  )}

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                      <MapPin size={14} className="text-[#0284C7]" />
                      <span>{s.city}</span>
                    </div>
                    <Link
                      href={`/destekciler/${s.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-coral hover:text-coral-600 transition-colors group-hover:gap-2"
                    >
                      <span>Detayları İncele</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center max-w-md mx-auto shadow-sm">
            <Building2 size={36} className="mx-auto text-slate-400 mb-3" />
            <h4 className="font-bold text-[#0B1E3B] mb-1">Bu Kategoride Kayıt Yok</h4>
            <p className="text-xs text-slate-500">
              Seçilen filtre için henüz listelenmiş aktif paydaş bulunmamaktadır.
            </p>
          </div>
        )}

        {/* Join Supporters CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#0B1E3B] via-[#0E2850] to-[#0A1F3D] text-white rounded-3xl p-8 md:p-12 text-center shadow-xl border border-white/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-mono font-bold uppercase mb-4">
            <Sparkles size={14} />
            <span>KURUMSAL AĞA KATILIN</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black mb-3 text-white">
            Kurumunuzu Destekçilerimiz Arasında Görün
          </h3>
          <p className="text-white/80 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Belediyeniz, vakfınız veya kuruluşunuz adına özelleştirilmiş bir DijitalBüyükanne destek protokolü başlatalım.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/kurumlar"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-coral to-[#e8634f] hover:from-coral-600 text-white font-bold rounded-2xl transition-all shadow-md text-sm"
            >
              <span>Destekçi Protokolü Başlat</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/sunum"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-2xl transition-all text-sm"
            >
              <span>Kurumsal PDF Sunum</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
