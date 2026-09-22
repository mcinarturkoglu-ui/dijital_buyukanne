import Link from "next/link";
import { Check, ArrowRight, Sparkles, Building2, Smartphone } from "lucide-react";
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
    <section className="py-24 md:py-28 px-4 md:px-8 bg-gradient-to-b from-[#082A46] via-[#093254] to-[#0a3558] text-white relative overflow-hidden">
      {/* Background glow & accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-turquoise/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-turquoise/15 text-turquoise text-xs font-bold tracking-wider uppercase mb-5 border border-turquoise/30 backdrop-blur-md">
            <Building2 size={14} />
            <span>Kurumlar & Belediyeler İçin</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight text-white leading-tight">
            Bu, kurumunuzun kendi{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise via-teal-300 to-turquoise">
              aile uygulaması
            </span>{' '}
            olabilir.
          </h2>
          <p className="text-xl md:text-2xl text-turquoise-300 font-semibold mb-6">
            Şehrinize özel bir DijitalBüyükanne.
          </p>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            DijitalBüyükanne altyapısı belediyenizin veya kurumunuzun adı, logosu,
            renkleri ve hizmetleriyle özelleştirilebilir ve mobil uygulama
            mağazalarında kurumunuza özel olarak yayınlanabilir.
          </p>
        </div>

        {/* 3 Phone Mockups */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8 mb-20 pt-4">
          {/* Ankara */}
          <div className="transform md:-rotate-3 md:translate-y-4 transition-all duration-500 hover:rotate-0 hover:translate-y-0 hover:scale-105 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#E31E24]/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <PhoneMockup size="sm" label="Ankara DijitalBüyükanne">
                <div className="p-4 bg-gray-50 h-full flex flex-col">
                  <div className="bg-[#E31E24] text-white p-3 rounded-2xl mb-3 text-center shadow-md">
                    <div className="w-8 h-8 mx-auto mb-1 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                      ABB
                    </div>
                    <h4 className="text-xs font-bold">Ankara Büyükşehir</h4>
                    <p className="text-[10px] opacity-80">DijitalBüyükanne</p>
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="bg-white p-2 rounded-xl text-[11px] shadow-sm border border-gray-100 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E31E24] animate-pulse"></span>
                      <span className="font-medium text-gray-700">Başkent Bebek Paketi</span>
                    </div>
                    <div className="bg-white p-2 rounded-xl text-[11px] shadow-sm border border-gray-100 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E31E24]"></span>
                      <span className="font-medium text-gray-700">Gelişimsel Takip</span>
                    </div>
                    <div className="bg-white p-2 rounded-xl text-[11px] shadow-sm border border-gray-100 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E31E24]"></span>
                      <span className="font-medium text-gray-700">Anne-Çocuk Sağlığı</span>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>

          {/* Keçiören (Featured Center) */}
          <div className="transform md:scale-105 z-20 shadow-2xl transition-all duration-500 hover:scale-110 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#0066B3]/35 rounded-[40px] blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow" />
              <PhoneMockup size="md" label="Keçiören DijitalBüyükanne">
                <div className="p-4 bg-gray-50 h-full flex flex-col">
                  <div className="bg-gradient-to-br from-[#0066B3] to-[#004e8a] text-white p-3.5 rounded-2xl mb-3 text-center shadow-lg">
                    <div className="w-9 h-9 mx-auto mb-1 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                      KB
                    </div>
                    <h4 className="text-sm font-bold">Keçiören Belediyesi</h4>
                    <p className="text-[11px] opacity-90 font-medium">DijitalBüyükanne Aile Kapısı</p>
                  </div>
                  <div className="space-y-2 flex-1 text-gray-700">
                    <div className="bg-white p-2.5 rounded-xl text-xs font-semibold shadow-sm border border-gray-100 flex items-center justify-between hover:border-turquoise transition-colors">
                      <span>Anne & Bebek Atölyesi</span>
                      <span className="text-[10px] bg-blue-50 text-[#0066B3] px-1.5 py-0.5 rounded font-bold">Aktif</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl text-xs font-semibold shadow-sm border border-gray-100 flex items-center justify-between hover:border-turquoise transition-colors">
                      <span>Hareket & Cilt Analizi</span>
                      <span className="text-[10px] bg-teal-50 text-turquoise px-1.5 py-0.5 rounded font-bold">AI Destekli</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl text-xs font-semibold shadow-sm border border-gray-100 flex items-center justify-between hover:border-turquoise transition-colors">
                      <span>Uzman Danışmanlığı</span>
                      <span className="text-[10px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded font-bold">Ücretsiz</span>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>

          {/* Kurumunuz */}
          <div className="transform md:rotate-3 md:translate-y-4 transition-all duration-500 hover:rotate-0 hover:translate-y-0 hover:scale-105 group">
            <div className="relative">
              <div className="absolute inset-0 bg-turquoise/30 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <PhoneMockup size="sm" label="Kurumunuz DijitalBüyükanne">
                <div className="p-4 bg-gray-50 h-full flex flex-col">
                  <div className="bg-gradient-to-r from-turquoise to-[#0fa29f] text-white p-3 rounded-2xl mb-3 text-center shadow-md">
                    <div className="w-8 h-8 mx-auto mb-1 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                      LOGO
                    </div>
                    <h4 className="text-xs font-bold">Kurumunuz Adına</h4>
                    <p className="text-[10px] opacity-80">Özel Markalanmış</p>
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="bg-white p-2 rounded-xl text-[11px] shadow-sm border border-gray-100 flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-turquoise animate-pulse"></span>
                      <span className="font-medium">Kendi Renk & Logonuz</span>
                    </div>
                    <div className="bg-white p-2 rounded-xl text-[11px] shadow-sm border border-gray-100 flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-turquoise"></span>
                      <span className="font-medium">Özelleştirilmiş Hizmetler</span>
                    </div>
                    <div className="bg-white p-2 rounded-xl text-[11px] shadow-sm border border-gray-100 flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-turquoise"></span>
                      <span className="font-medium">Şeffaf Etki Raporu</span>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>
        </div>

        {/* Feature list checklist */}
        <div className="glass-card-dark rounded-3xl p-8 lg:p-10 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-turquoise/10 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
            <Sparkles size={20} className="text-turquoise" />
            <span>Kurumsal Çözüm Kapsamında Neler Sunuluyor?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.04] border border-white/5 hover:border-turquoise/30 hover:bg-white/[0.08] transition-all duration-200 group cursor-default"
              >
                <div className="w-7 h-7 rounded-xl bg-turquoise/20 group-hover:bg-turquoise group-hover:text-navy flex items-center justify-center flex-shrink-0 text-turquoise transition-all duration-200">
                  <Check size={14} className="stroke-[3]" />
                </div>
                <span className="text-white/90 text-sm font-medium group-hover:text-white transition-colors">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/kurumlar"
            className="relative overflow-hidden group inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-coral to-[#e8634f] hover:bg-coral-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-glow-coral hover:-translate-y-0.5 active:scale-98"
          >
            {/* Shimmer sweep */}
            <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
            <span className="relative z-10">Kurumumuz İçin Demo İstiyorum</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
