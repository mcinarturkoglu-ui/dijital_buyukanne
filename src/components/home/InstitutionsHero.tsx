import Link from "next/link";
import { Check, ArrowRight, Building2, Smartphone } from "lucide-react";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

export default function InstitutionsHero() {
  const features = [
    "Kuruma özel mobil uygulama yayını",
    "Kurumsal logo ve görsel kimlik uyumu",
    "App Store & Google Play mağaza yayını",
    "Kuruma özel kullanıcı kayıt & referans kodu",
    "Yerel aile ve bebek programları entegrasyonu",
    "Kuruma özel belediye duyuruları & atölyeler",
    "Yetkili kurum yönetim ve takip paneli",
    "Şeffaf sosyal etki analitiği & SROI raporu",
  ];

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-[#082A46] via-[#093254] to-[#0a3558] text-white relative overflow-hidden">
      {/* Background glow & accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-turquoise/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div
        className="absolute bottom-0 left-10 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Sol Kolon: Kurumsal Başlık, Değer Önermesi ve Özellikler */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-turquoise/15 text-turquoise text-xs font-bold tracking-wider uppercase mb-5 border border-turquoise/30 backdrop-blur-md">
              <Building2 size={14} />
              <span>Kurumlar & Belediyeler İçin</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Bu, kurumunuzun kendi{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise via-teal-300 to-turquoise">
                aile uygulaması
              </span>{' '}
              olabilir.
            </h2>

            <p className="text-lg sm:text-xl text-turquoise-300 font-semibold mb-4">
              Şehrinize ve kurumunuza özel DijitalBüyükanne.
            </p>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-normal">
              DijitalBüyükanne altyapısı belediyenizin veya kurumunuzun adı, logosu, kurumsal renkleri ve yerel hizmetleriyle tamamen özelleştirilebilir ve mobil uygulama mağazalarında kurumunuza özel resmi uygulama olarak yayınlanabilir.
            </p>

            {/* Özellikler Matrisi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/5 hover:border-turquoise/30 hover:bg-white/[0.07] transition-all group"
                >
                  <div className="w-5 h-5 rounded-lg bg-turquoise/20 group-hover:bg-turquoise group-hover:text-navy flex items-center justify-center flex-shrink-0 text-turquoise transition-colors">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span className="text-white/90 text-xs font-medium group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Aksiyon Butonları */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/kurumlar"
                className="relative overflow-hidden group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-coral to-[#e8634f] hover:bg-coral-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-glow-coral hover:-translate-y-0.5 active:scale-98 text-sm sm:text-base"
              >
                <span className="relative z-10">Kurumumuz İçin Demo İstiyorum</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#sosyal-etki"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 text-white/90 hover:text-white text-sm font-semibold transition-colors"
              >
                <span>Sosyal Etkiyi Hesapla</span>
              </a>
            </div>
          </div>

          {/* Sağ Kolon: Kurumunuz Adına Özelleştirilmiş Genel Mobil Görsel */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            {/* Arka plan ışıltı halkası */}
            <div className="absolute inset-0 bg-turquoise/20 rounded-[50px] blur-3xl opacity-70 pointer-events-none transform scale-90" />

            {/* Üst Yüzen Rozet */}
            <div className="absolute -top-4 right-2 sm:right-6 z-30 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-turquoise/40 text-turquoise text-[11px] font-bold shadow-xl backdrop-blur-md">
              <Building2 size={13} />
              <span>%100 White-Label</span>
            </div>

            {/* Alt Yüzen Rozet */}
            <div className="absolute -bottom-4 left-2 sm:left-6 z-30 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-white/20 text-white/90 text-[11px] font-semibold shadow-xl backdrop-blur-md">
              <Smartphone size={13} className="text-turquoise" />
              <span>App Store & Google Play</span>
            </div>

            {/* Kurumunuz DijitalBüyükanne Phone Mockup */}
            <div className="relative transform hover:scale-105 transition-all duration-500 group">
              <PhoneMockup size="lg" label="Kurumunuz DijitalBüyükanne">
                <div className="p-4 bg-gray-50 h-full flex flex-col">
                  {/* Kurumsal Header */}
                  <div className="bg-gradient-to-r from-turquoise to-[#0fa29f] text-white p-4 rounded-2xl mb-3.5 text-center shadow-md">
                    <div className="w-10 h-10 mx-auto mb-1.5 rounded-full bg-white/20 flex items-center justify-center font-black text-xs tracking-wider shadow-inner">
                      LOGO
                    </div>
                    <h4 className="text-sm font-extrabold tracking-tight">Kurumunuz Adına</h4>
                    <p className="text-[11px] opacity-90 font-medium">Özel Markalanmış Aile Kapısı</p>
                  </div>

                  {/* Menü / Hizmet Kartları */}
                  <div className="space-y-2.5 flex-1">
                    <div className="bg-white p-3 rounded-xl text-xs shadow-sm border border-gray-100 flex items-center gap-2.5 text-gray-700 hover:border-turquoise transition-colors">
                      <span className="w-2.5 h-2.5 rounded-full bg-turquoise animate-pulse flex-shrink-0" />
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800">Kendi Renk & Logonuz</span>
                        <span className="text-[10px] text-slate-500 font-normal">Kurumsal kimlikle tam uyumlu</span>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl text-xs shadow-sm border border-gray-100 flex items-center gap-2.5 text-gray-700 hover:border-turquoise transition-colors">
                      <span className="w-2.5 h-2.5 rounded-full bg-turquoise flex-shrink-0" />
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800">Özelleştirilmiş Hizmetler</span>
                        <span className="text-[10px] text-slate-500 font-normal">Atölyeler & sosyal yardımlar</span>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl text-xs shadow-sm border border-gray-100 flex items-center gap-2.5 text-gray-700 hover:border-turquoise transition-colors">
                      <span className="w-2.5 h-2.5 rounded-full bg-turquoise flex-shrink-0" />
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800">Şeffaf Etki Raporu</span>
                        <span className="text-[10px] text-slate-500 font-normal">Canlı katma değer ve SROI</span>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl text-xs shadow-sm border border-gray-100 flex items-center gap-2.5 text-gray-700 hover:border-turquoise transition-colors">
                      <span className="w-2.5 h-2.5 rounded-full bg-coral flex-shrink-0" />
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800">Yapay Zekâ + Hekim Köprüsü</span>
                        <span className="text-[10px] text-slate-500 font-normal">7/24 kesintisiz koruma kalkanı</span>
                      </div>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

