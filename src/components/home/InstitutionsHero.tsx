import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, Building2, Smartphone } from "lucide-react";

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
            <div className="absolute -top-3 right-2 sm:right-8 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-turquoise/40 text-turquoise text-[11px] font-bold shadow-xl backdrop-blur-md">
              <Building2 size={13} />
              <span>%100 White-Label</span>
            </div>

            {/* Alt Yüzen Rozet */}
            <div className="absolute -bottom-3 left-2 sm:left-8 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-white/20 text-white/90 text-[11px] font-semibold shadow-xl backdrop-blur-md">
              <Smartphone size={13} className="text-turquoise" />
              <span>App Store & Google Play</span>
            </div>

            {/* Kurumunuz DijitalBüyükanne Gerçek Görsel */}
            <div className="relative group max-w-[300px] sm:max-w-[340px] mx-auto transform hover:scale-[1.03] transition-all duration-500">
              <Image
                src="/images/kurumunuz-dijitalbuyukanne.png"
                alt="Kurumunuz DijitalBüyükanne Özel Mobil Uygulaması"
                width={340}
                height={660}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl rounded-3xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

