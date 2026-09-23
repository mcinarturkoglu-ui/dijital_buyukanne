import type { Metadata } from "next";
import Link from "next/link";
import { 
  Cpu, 
  Video, 
  Scan, 
  Activity, 
  GraduationCap, 
  ExternalLink, 
  CheckCircle,
  Shield,
  Layers,
  Droplets,
} from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "BabySensAI — Yapay Zekâ Teknolojisi",
  description: "DijitalBüyükanne ekosisteminin arkasındaki video hareket analizi ve görüntü değerlendirme yapay zekâ altyapısı.",
  path: "/babysensai",
});

export default function BabySensAIPage() {
  const techAreas = [
    {
      title: "Video Tabanlı Hareket Analizi",
      desc: "0-6 ay dönemindeki bebeklerin doğal spontan hareketlerini kısa videolardan değerlendiren derin öğrenme modelleri.",
      icon: Video,
    },
    {
      title: "Görüntü İşleme & Cilt Analizi",
      desc: "Fotoğraflar üzerinden ciltteki yaygın lezyon ve kızarıklıklar için bilgilendirici ön sınıflandırma.",
      icon: Scan,
    },
    {
      title: "Bebek Bezi & Dışkı Spektrofotometrisi",
      desc: "Dışkı rengini uluslararası Pediatrik Renk Skalası (akolik renk skalası ve alerjik sindirim kartları) ile eşleştiren optik analiz modeli.",
      icon: Droplets,
    },
    {
      title: "Dijital Gelişim Takip Modeli",
      desc: "Bebeklerin kronolojik yaşına göre motor ve bilişsel gelişim basamaklarını eş zamanlı izleyen algoritmalar.",
      icon: Activity,
    },
    {
      title: "Bilimsel & Klinik Temel",
      desc: "Pediatri, çocuk nörolojisi ve fizyoterapi literatürüne uygun olarak tasarlanmış değerlendirme prensipleri.",
      icon: GraduationCap,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-navy to-[#07243c] text-white py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-turquoise/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-turquoise/20 text-turquoise text-xs font-semibold mb-6">
            <Cpu size={14} />
            <span>Teknoloji & Yapay Zekâ Altyapısı</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-white">
            DijitalBüyükanne&apos;nin arkasındaki <br className="hidden sm:inline" />
            <span className="text-turquoise">yapay zekâ teknolojilerinden biri.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            BabySensAI; bebek gelişiminde erken farkındalık yaratmak üzere tasarlanmış, video ve görüntü işleme tabanlı tescilli bir yapay zekâ araştırma ve teknoloji platformudur.
          </p>

          <a
            href="https://babysensai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-turquoise hover:bg-turquoise-600 text-navy font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>BabySensAI.com&apos;u Ziyaret Et</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </section>

      {/* Brand Architecture Explanation */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-turquoise">Net Ayrım</span>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mt-1">
              Marka Mimarisi & Konumlandırma
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Kullanıcı dostu sosyal etki platformu ile arkasındaki derin teknolojinin dengeli birlikteliği.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-coral/20 bg-coral/5 p-6 rounded-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-coral">Kullanıcı Markası</span>
              <h3 className="text-xl font-bold text-navy mt-1 mb-3">DijitalBüyükanne</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Ailelerin her gün kullandığı, belediye ve kurumların destek programlarına entegre ettiği sosyal etki ve toplumsal fayda markasıdır.
              </p>
              <ul className="text-xs space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-coral" />
                  <span>Aile dostu mobil arayüz & Türkçe dil desteği</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-coral" />
                  <span>Belediyelere ve kurumlara özel markalama</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-coral" />
                  <span>Uzman rehberliği ve sosyal sorumluluk odaklı yaklaşım</span>
                </li>
              </ul>
            </div>

            <div className="border border-turquoise/20 bg-turquoise/5 p-6 rounded-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-turquoise-700">Teknoloji Altyapısı</span>
              <h3 className="text-xl font-bold text-navy mt-1 mb-3">BabySensAI</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                DijitalBüyükanne platformundaki hareket analizi ve ön değerlendirme modüllerine güç veren yapay zekâ ve algoritma omurgasıdır.
              </p>
              <ul className="text-xs space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-turquoise" />
                  <span>Gelişmiş video & görüntü işleme modelleri</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-turquoise" />
                  <span>Bilimsel araştırmalara dayalı veri setleri</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-turquoise" />
                  <span>Sürekli öğrenen ve optimize edilen çıkarım motoru</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Tech Areas */}
      <section className="bg-[#EDF3F4] py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-wider text-turquoise">Ar-Ge & İnovasyon</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2">
              Yapay Zekâ Yetenekleri
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techAreas.map((t, idx) => {
              const Icon = t.icon;
              return (
                <div
                  key={idx}
                  className="premium-card bg-white p-6 rounded-3xl border border-gray-100/90 shadow-sm hover:shadow-card-hover transition-all duration-300 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-2xl bg-navy/5 text-navy group-hover:bg-turquoise/10 flex items-center justify-center mb-4 transition-colors">
                    <Icon size={24} className="text-turquoise group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-bold text-navy text-base mb-2 group-hover:text-turquoise transition-colors">{t.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{t.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Ethical Disclaimer */}
          <div className="mt-12 bg-white/70 border border-gray-200/60 rounded-2xl p-6 text-center max-w-3xl mx-auto">
            <Shield size={20} className="mx-auto text-turquoise mb-2" />
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong className="text-navy">Önemli Hatırlatma:</strong> BabySensAI teknolojileri kesin klinik teşhis ve tanı aracı değildir. Ailelerin ve uzmanların erken farkındalık kazanmasını amaçlayan destekleyici bir dijital değerlendirme hizmetidir.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
