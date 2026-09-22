import type { Metadata } from "next";
import Link from "next/link";
import { 
  Smartphone, 
  Baby, 
  Activity, 
  Sparkles, 
  MessageCircle, 
  UserCheck, 
  Moon, 
  Apple, 
  HeartHandshake, 
  ShieldCheck, 
  Calendar,
  CheckCircle,
  Download,
  ArrowRight,
  Droplets,
} from "lucide-react";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Mobil Uygulama",
  description: "DijitalBüyükanne mobil uygulaması ile 0-24 ay bebek ve aile gelişim takibi, hareket ve cilt analizi, uzman desteği cebinizde.",
  path: "/uygulama",
});

export default function UygulamaPage() {
  const modules = [
    { title: "Bebeğim", desc: "Kişiselleştirilmiş gelişim günlüğü ve profil", icon: Baby },
    { title: "Hareket Analizi", desc: "0-6 ay yapay zekâ destekli video değerlendirmesi", icon: Activity },
    { title: "Cilt Analizi", desc: "Fotoğraf üzerinden ön bilgilendirme ve yönlendirme", icon: Sparkles },
    { title: "Bebek Bezi Analizi", desc: "Dışkı rengi, kıvamı ve pediatrik renk kartı taraması", icon: Droplets },
    { title: "Büyükanne'ye Sor", desc: "7/24 yaşa uygun dijital aile asistanı rehberliği", icon: MessageCircle },
    { title: "Uzmanına Danış", desc: "İhtiyaç halinde alanında uzman desteğine erişim", icon: UserCheck },
    { title: "Uyku Düzeni", desc: "Aylık uyku rutinleri, yatış ve uyanış önerileri", icon: Moon },
    { title: "Beslenme", desc: "Ek gıdaya geçiş ve sağlıklı tarif önerileri", icon: Apple },
    { title: "Emzirme", desc: "Doğru emzirme teknikleri ve anne sütü takibi", icon: HeartHandshake },
    { title: "Bebek Bakımı", desc: "Banyo, masaj, pişik önleme ve temel hijyen", icon: ShieldCheck },
    { title: "Gelişim Takibi", desc: "Motor, bilişsel ve sosyal kilometre taşları", icon: Calendar },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-[#0c3556] text-white py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-turquoise/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="max-w-xl text-center lg:text-left">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-turquoise/20 text-turquoise text-xs font-semibold tracking-wider uppercase mb-4">
              0–24 Ay Aile Destek Ekosistemi
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              DijitalBüyükanne <br />
              <span className="text-turquoise">her zaman yanında.</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Bebeğinizin büyüme adımlarını güvenle takip edin. Yapay zekâ analizleri, dijital rehberlik ve ihtiyaç anında uzman hekim & pedagog desteği tek ekranda.
            </p>

            {/* App Store & Play Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl px-5 py-3 transition-colors text-left"
              >
                <Download size={22} className="text-turquoise" />
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider">İndir</p>
                  <p className="text-white font-bold text-sm">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl px-5 py-3 transition-colors text-left"
              >
                <Download size={22} className="text-turquoise" />
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider">İndir</p>
                  <p className="text-white font-bold text-sm">Google Play</p>
                </div>
              </a>
            </div>

            {/* QR Code Container */}
            <div className="inline-flex items-center gap-4 p-3 bg-white/5 border border-white/10 rounded-2xl">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-1 shadow-inner">
                <div className="w-full h-full border-2 border-dashed border-navy rounded flex items-center justify-center text-[10px] font-bold text-navy text-center leading-none">
                  QR KOD
                </div>
              </div>
              <div className="text-left text-xs text-white/70">
                <p className="font-semibold text-white">Kameranızla tarayın</p>
                <p>Doğrudan mağazadan indirin</p>
              </div>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="relative">
            <PhoneMockup size="lg" label="DijitalBüyükanne v2.0">
              <div className="bg-slate-50 h-full flex flex-col text-slate-800">
                {/* Header */}
                <div className="bg-turquoise text-white p-4 rounded-b-2xl shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm">DijitalBüyükanne</span>
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">0-24 Ay</span>
                  </div>
                  <p className="text-xs text-white/90">Hoş geldiniz, Selin & Ali (4 Aylık)</p>
                </div>

                {/* Dashboard content */}
                <div className="p-3.5 space-y-2.5 flex-1 overflow-y-auto text-xs">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                    <p className="font-bold text-navy mb-1">Gelişimsel Takvim</p>
                    <p className="text-[11px] text-gray-600">Bugün 4. ay baş kontrolü ve dönüş refleksleri dönemi.</p>
                  </div>
                  <div className="bg-coral/10 p-3 rounded-xl border border-coral/20">
                    <p className="font-bold text-coral mb-0.5">0-6 Ay Hareket Analizi</p>
                    <p className="text-[11px] text-gray-700">30 saniyelik doğal hareket videosu yükleyin.</p>
                  </div>
                  <div className="bg-turquoise/10 p-3 rounded-xl border border-turquoise/20">
                    <p className="font-bold text-turquoise-700 mb-0.5">Büyükanne&apos;ye Sor</p>
                    <p className="text-[11px] text-gray-700">&quot;Gece uykusunda sık uyanma normal mi?&quot;</p>
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-turquoise">Zengin İçerik</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
            Uygulamanın Modülleri
          </h2>
          <p className="text-gray-600">
            0-24 aylık bebeğinizin tüm gelişim adımlarında yanınızda olan 10 temel destek alanı.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {modules.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="premium-card bg-white p-5 rounded-2xl border border-gray-100/90 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-turquoise/10 text-turquoise group-hover:bg-turquoise group-hover:text-navy flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-navy text-sm mb-1 group-hover:text-turquoise transition-colors">{m.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Branded Section */}
      <section className="bg-navy text-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs uppercase tracking-wider text-turquoise font-semibold">Kurumsal Model</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">
            Kurumunuza Özel Uygulama
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-12">
            DijitalBüyükanne altyapısı belediyeniz, vakfınız veya STK&apos;nız için özel logo ve renklerle bağımsız bir mobil uygulama olarak App Store ve Google Play&apos;de yayınlanabilir.
          </p>
          <Link
            href="/kurumlar"
            className="inline-flex items-center gap-2 px-8 py-4 bg-coral hover:bg-coral-600 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl"
          >
            <span>Kurumunuz İçin İnceleyin</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
