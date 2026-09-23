import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { ArrowLeft, MapPin, Calendar, Heart, Users, CheckCircle, Info } from "lucide-react";
import supportersData from "@/data/supporters.json";

export const dynamic = "force-dynamic";

function getLiveSupporters(): any[] {
  try {
    const dataFilePath = path.join(process.cwd(), "src/data/supporters.json");
    const content = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(content).supporters || [];
  } catch {
    return supportersData.supporters || [];
  }
}

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const supporters = getLiveSupporters();
  return supporters.map((s) => ({
    slug: s.slug,
  }));
}

export default function DestekciDetailPage({ params }: Props) {
  const supporters = getLiveSupporters();
  const supporter = supporters.find((s: any) => s.slug === params.slug);

  if (!supporter) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb & Navigation */}
      <div className="bg-white border-b border-gray-100 py-4 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/destekciler"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy/70 hover:text-navy transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Tüm Destekçilere Dön</span>
          </Link>
          <div className="text-xs text-gray-500">
            <span>Destekçiler</span> &gt; <span className="text-navy font-medium">{supporter.name}</span>
          </div>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-gradient-to-b from-navy to-[#0a3150] text-white py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div
              className="w-16 h-16 md:w-20 md:md-20 rounded-3xl flex items-center justify-center font-bold text-white text-xl md:text-2xl shadow-lg flex-shrink-0"
              style={{ backgroundColor: supporter.color || "#14BBB7" }}
            >
              {supporter.shortName?.slice(0, 2) || "DB"}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-turquoise">
                  {supporter.type}
                </span>
                <span className="text-xs text-white/60 flex items-center gap-1">
                  <MapPin size={12} />
                  {supporter.city}
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                {supporter.name}
              </h1>
              <p className="text-turquoise text-sm md:text-base font-semibold mt-1">
                {supporter.program}
              </p>
            </div>
          </div>

          <Link
            href="/kurumlar"
            className="px-6 py-3 bg-coral hover:bg-coral-600 text-white font-bold rounded-xl text-xs md:text-sm transition-all shadow-md self-start md:self-auto"
          >
            Benzer Program Başlat
          </Link>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Main Info */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-navy mb-4">Program Hakkında</h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {supporter.description}
              </p>
              <p className="text-gray-600 text-xs leading-relaxed">
                Bu program kapsamında, ilgili bölgedeki ailelerin 0-24 aylık bebeklerinin gelişimleri düzenli olarak takip edilmekte; yapay zekâ destekli analizler ve uzman danışmanlığı ile ailelere rehberlik edilmektedir.
              </p>
            </div>

            {/* Scope / Deliverables */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-navy mb-4">Sağlanan Hizmetler</h3>
              <ul className="space-y-3 text-xs md:text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-turquoise mt-0.5 flex-shrink-0" />
                  <span>Kuruma özel markalanmış mobil uygulama erişimi</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-turquoise mt-0.5 flex-shrink-0" />
                  <span>0–6 ay yapay zekâ destekli video hareket analizi</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-turquoise mt-0.5 flex-shrink-0" />
                  <span>Yapay zekâ destekli cilt analizi & bilgilendirme</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-turquoise mt-0.5 flex-shrink-0" />
                  <span>7/24 Dijital Aile Asistanı rehberliği</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-turquoise mt-0.5 flex-shrink-0" />
                  <span>Kuruma özel yönetim paneli ve etki analitiği</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-4">
                Program Göstergeleri
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center">
                    <Heart size={18} />
                  </div>
                  <div>
                    <span className="text-lg font-extrabold text-navy">0+</span>
                    <p className="text-[11px] text-gray-500">Hedeflenen Bebek</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-turquoise/10 text-turquoise flex items-center justify-center">
                    <Users size={18} />
                  </div>
                  <div>
                    <span className="text-lg font-extrabold text-navy">0+</span>
                    <p className="text-[11px] text-gray-500">Aktif Aile</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 text-navy flex items-center justify-center">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-navy">{supporter.startDate || "2024"}</span>
                    <p className="text-[11px] text-gray-500">Başlangıç Yılı</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-[11px] text-gray-500">
                <Info size={14} className="text-gray-400 flex-shrink-0" />
                <span>Veriler kurumsal yönetim paneli üzerinden güncellenmektedir.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Media Placeholder */}
        <div className="bg-slate-50 border border-dashed border-gray-200 rounded-3xl p-10 text-center">
          <p className="text-xs md:text-sm font-semibold text-gray-500">
            Saha fotoğrafları, etkinlik kayıtları ve sosyal etki video içerikleri programa ait materyaller geldikçe burada yayınlanacaktır.
          </p>
        </div>
      </section>
    </div>
  );
}
