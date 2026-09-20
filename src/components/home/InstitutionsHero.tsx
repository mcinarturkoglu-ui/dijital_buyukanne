import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

export default function InstitutionsHero() {
  const features = [
    "Kuruma özel mobil uygulama",
    "Kurumsal logo ve görsel kimlik",
    "App Store / Google Play yayını",
    "Kuruma özel kullanıcı kayıt sistemi",
    "Referans kodu desteği",
    "Aile ve bebek programları",
    "Kuruma özel hizmetler",
    "Belediye/kurum duyuruları",
    "Yönetim paneli",
    "Etki ve kullanım istatistikleri",
    "Sosyal etki raporlaması",
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#082A46] to-[#0a3558] text-white relative overflow-hidden">
      {/* Background glow & accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-turquoise/20 text-turquoise text-xs font-semibold tracking-wider uppercase mb-4">
            Kurumlar & Belediyeler İçin
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Bu, kurumunuzun kendi aile uygulaması olabilir.
          </h2>
          <p className="text-xl text-turquoise-300 font-medium mb-6">
            Şehrinize özel bir DijitalBüyükanne.
          </p>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            DijitalBüyükanne altyapısı belediyenizin veya kurumunuzun adı, logosu,
            renkleri ve hizmetleriyle özelleştirilebilir ve mobil uygulama
            mağazalarında kurumunuza özel olarak yayınlanabilir.
          </p>
        </div>

        {/* 3 Phone Mockups */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8 mb-16 pt-4">
          {/* Ankara */}
          <div className="transform md:-rotate-3 md:translate-y-4 transition-transform hover:rotate-0 duration-300">
            <PhoneMockup size="sm" label="Ankara DijitalBüyükanne">
              <div className="p-4 bg-gray-50 h-full flex flex-col">
                <div className="bg-[#E31E24] text-white p-3 rounded-2xl mb-3 text-center shadow-sm">
                  <div className="w-8 h-8 mx-auto mb-1 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                    ABB
                  </div>
                  <h4 className="text-xs font-bold">Ankara Büyükşehir</h4>
                  <p className="text-[10px] opacity-80">DijitalBüyükanne</p>
                </div>
                <div className="space-y-2 flex-1">
                  <div className="bg-white p-2 rounded-xl text-[11px] shadow-sm border border-gray-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E31E24]"></span>
                    Başkent Bebek Paketi
                  </div>
                  <div className="bg-white p-2 rounded-xl text-[11px] shadow-sm border border-gray-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E31E24]"></span>
                    Gelişimsel Takip
                  </div>
                  <div className="bg-white p-2 rounded-xl text-[11px] shadow-sm border border-gray-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E31E24]"></span>
                    Anne-Çocuk Sağlığı
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </div>

          {/* Keçiören (Featured Center) */}
          <div className="transform md:scale-105 z-20 shadow-2xl transition-transform duration-300">
            <PhoneMockup size="md" label="Keçiören DijitalBüyükanne">
              <div className="p-4 bg-gray-50 h-full flex flex-col">
                <div className="bg-[#0066B3] text-white p-3.5 rounded-2xl mb-3 text-center shadow-md">
                  <div className="w-9 h-9 mx-auto mb-1 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                    KB
                  </div>
                  <h4 className="text-sm font-bold">Keçiören Belediyesi</h4>
                  <p className="text-[11px] opacity-90 font-medium">DijitalBüyükanne Aile Kapısı</p>
                </div>
                <div className="space-y-2 flex-1 text-gray-700">
                  <div className="bg-white p-2.5 rounded-xl text-xs font-medium shadow-sm border border-gray-100 flex items-center justify-between">
                    <span>Anne & Bebek Atölyesi</span>
                    <span className="text-[10px] bg-blue-50 text-[#0066B3] px-1.5 py-0.5 rounded">Aktif</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl text-xs font-medium shadow-sm border border-gray-100 flex items-center justify-between">
                    <span>Hareket & Cilt Analizi</span>
                    <span className="text-[10px] bg-teal-50 text-turquoise px-1.5 py-0.5 rounded">AI Destekli</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl text-xs font-medium shadow-sm border border-gray-100 flex items-center justify-between">
                    <span>Uzman Danışmanlığı</span>
                    <span className="text-[10px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded">Ücretsiz</span>
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </div>

          {/* Kurumunuz */}
          <div className="transform md:rotate-3 md:translate-y-4 transition-transform hover:rotate-0 duration-300">
            <PhoneMockup size="sm" label="Kurumunuz DijitalBüyükanne">
              <div className="p-4 bg-gray-50 h-full flex flex-col">
                <div className="bg-gradient-to-r from-turquoise to-turquoise-600 text-white p-3 rounded-2xl mb-3 text-center shadow-sm">
                  <div className="w-8 h-8 mx-auto mb-1 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                    LOGO
                  </div>
                  <h4 className="text-xs font-bold">Kurumunuz Adına</h4>
                  <p className="text-[10px] opacity-80">Özel Markalanmış</p>
                </div>
                <div className="space-y-2 flex-1">
                  <div className="bg-white p-2 rounded-xl text-[11px] shadow-sm border border-gray-100 flex items-center gap-2 text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-turquoise"></span>
                    Kendi Renk & Logonuz
                  </div>
                  <div className="bg-white p-2 rounded-xl text-[11px] shadow-sm border border-gray-100 flex items-center gap-2 text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-turquoise"></span>
                    Özelleştirilmiş Hizmetler
                  </div>
                  <div className="bg-white p-2 rounded-xl text-[11px] shadow-sm border border-gray-100 flex items-center gap-2 text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-turquoise"></span>
                    Şeffaf Etki Raporu
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </div>
        </div>

        {/* Feature list checklist */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 mb-12 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Kurumsal Çözüm Kapsamında Neler Sunuluyor?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-turquoise/20 flex items-center justify-center flex-shrink-0 text-turquoise">
                  <Check size={14} className="stroke-[3]" />
                </div>
                <span className="text-white/90 text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/kurumlar"
            className="inline-flex items-center gap-2 px-8 py-4 bg-coral hover:bg-coral-600 text-white font-bold rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Kurumumuz İçin Demo İstiyorum</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
