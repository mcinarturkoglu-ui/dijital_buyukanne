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
    <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-white via-[#F0F8FF] to-white text-[#0B1E3B] relative overflow-hidden">
      {/* Background glow & accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div
        className="absolute bottom-0 left-10 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0284C7 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Sol Kolon: Kurumsal Başlık, Değer Önermesi ve Özellikler */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 text-sky-950 text-xs font-bold tracking-wider uppercase mb-5 border border-sky-200/80 shadow-xs backdrop-blur-md">
              <Building2 size={14} className="text-sky-600" />
              <span>Kurumlar & Belediyeler İçin</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1E3B] leading-tight mb-4">
              Bu, kurumunuzun kendi{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#FF5A43]">
                aile uygulaması
              </span>{' '}
              olabilir.
            </h2>

            <p className="text-lg sm:text-xl text-sky-900 font-semibold mb-4">
              Şehrinize ve kurumunuza özel DijitalBüyükanne.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-normal">
              DijitalBüyükanne altyapısı belediyenizin veya kurumunuzun adı, logosu, kurumsal renkleri ve yerel hizmetleriyle tamamen özelleştirilebilir ve mobil uygulama mağazalarında kurumunuza özel resmi uygulama olarak yayınlanabilir.
            </p>

            {/* Özellikler Matrisi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-sky-100 hover:border-sky-300 hover:shadow-xs transition-all group"
                >
                  <div className="w-5 h-5 rounded-lg bg-sky-100 text-sky-700 group-hover:bg-sky-600 group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span className="text-slate-800 text-xs font-medium transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Aksiyon Butonları */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/kurumlar"
                className="relative overflow-hidden group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#FF5A43] via-[#FF6D55] to-[#F0442B] hover:bg-coral-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-coral/30 hover:shadow-coral/50 hover:-translate-y-0.5 active:scale-98 text-sm sm:text-base"
              >
                <span className="relative z-10">Kurumumuz İçin Demo İstiyorum</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#sosyal-etki"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl border border-sky-200/90 bg-white text-[#0B1E3B] hover:bg-slate-50 text-sm font-semibold transition-colors shadow-xs"
              >
                <span>Sosyal Etkiyi Hesapla</span>
              </a>
            </div>
          </div>

          {/* Sağ Kolon: Kurumunuz Adına Özelleştirilmiş Genel Mobil Görsel */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            {/* Arka plan ışıltı halkası */}
            <div className="absolute inset-0 bg-sky-200/40 rounded-[50px] blur-3xl opacity-70 pointer-events-none transform scale-90" />

            {/* Üst Yüzen Rozet */}
            <div className="absolute -top-3 right-2 sm:right-8 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-sky-200 text-sky-950 text-[11px] font-bold shadow-xl backdrop-blur-md">
              <Building2 size={13} className="text-sky-600" />
              <span>%100 White-Label</span>
            </div>

            {/* Alt Yüzen Rozet */}
            <div className="absolute -bottom-3 left-2 sm:left-8 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-sky-200 text-slate-800 text-[11px] font-semibold shadow-xl backdrop-blur-md">
              <Smartphone size={13} className="text-sky-600" />
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

