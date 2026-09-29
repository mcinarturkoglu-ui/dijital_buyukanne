"use client";

import { useState } from "react";
import { 
  Heart, 
  Target, 
  Eye, 
  ShieldCheck, 
  Users2, 
  Send, 
  CheckCircle2, 
  Mail, 
  MapPin 
} from "lucide-react";

export default function HakkimizdaPage() {
  const [sent, setSent] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const values = [
    {
      title: "Erişilebilirlik",
      desc: "Coğrafi ve sosyoekonomik koşul fark etmeksizin her ailenin kaliteli rehberliğe ulaşabilmesi.",
      icon: Users2,
    },
    {
      title: "Güven ve Şeffaflık",
      desc: "Yanıltıcı vaatlerden uzak, kanıta ve uzman görüşlerine dayanan doğru bilgilendirme.",
      icon: ShieldCheck,
    },
    {
      title: "Bilim ve İnovasyon",
      desc: "En güncel yapay zekâ ve pediatri araştırmalarını toplumsal fayda için birleştirmek.",
      icon: Target,
    },
    {
      title: "Sosyal Etki ve Dayanışma",
      desc: "Kamusal ve sivil aktörleri ortak bir geleceğe yatırım hedefinde buluşturmak.",
      icon: Heart,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#07172E] via-[#0B2546] to-[#0A1E38] text-white py-20 lg:py-24 px-4 md:px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0284C7]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-sky-300 mb-3 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-white/15">
            BİZ KİMİZ & HİKAYEMİZ
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight text-white">
            DijitalBüyükanne <br />
            <span className="bg-gradient-to-r from-sky-300 via-teal-200 to-rose-300 bg-clip-text text-transparent">
              Neden Var?
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Bir bebeğin dünyaya gelmesiyle başlayan o eşsiz ve hassas yolculukta, hiçbir ailenin yalnız hissetmemesi ve hiçbir gelişimsel gecikmenin gözden kaçmaması için yola çıktık.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="premium-card bg-white p-8 md:p-10 rounded-3xl border border-gray-100/90 shadow-sm hover:shadow-card-hover transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-coral/10 text-coral flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Target size={26} />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-coral transition-colors">Misyonumuz</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Teknolojinin sunduğu imkânları, bilimsel pediatrik bilgi ve uzman desteğiyle harmanlayarak; Türkiye&apos;deki tüm bebeklerin ilk 24 aylık gelişim döneminde eşit, güvenilir ve sürekli bir rehberlik ağına erişebilmesini sağlamak.
            </p>
          </div>

          <div className="premium-card bg-white p-8 md:p-10 rounded-3xl border border-gray-100/90 shadow-sm hover:shadow-card-hover transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-turquoise/10 text-turquoise flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Eye size={26} />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-turquoise transition-colors">Vizyonumuz</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Yerel yönetimlerin, sivil toplumun ve ailelerin aynı dijital çatıda buluştuğu; erken dönem farkındalığının en üst seviyeye ulaştığı, çocuk odaklı dijital belediyecilik ve sosyal destek standartlarını yeniden tanımlamak.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#EDF3F4] py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-wider text-turquoise">Temel İlkelerimiz</span>
            <h2 className="text-3xl font-bold text-navy mt-1">Değerlerimiz</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="premium-card bg-white p-6 rounded-3xl border border-gray-100/90 shadow-sm hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-navy/5 text-navy group-hover:bg-turquoise/10 flex items-center justify-center mb-4 transition-colors">
                    <Icon size={22} className="text-turquoise group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-bold text-navy text-base mb-2 group-hover:text-turquoise transition-colors">{v.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech & Ar-Ge Section: Adapha Yapay Zeka */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-navy via-[#0C2B4C] to-[#071F36] rounded-3xl p-8 md:p-12 text-white border border-white/10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-turquoise/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-turquoise text-xs font-mono font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Teknoloji ve Ar-Ge Ortağımız</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Adapha Yapay Zeka & Samsun Teknopark
              </h2>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                DijitalBüyükanne&apos;nin omurgasını oluşturan <strong>BabySensAI</strong> hareket analizi ve <strong>Derma-41</strong> cilt tarama algoritmaları; <strong>Adapha Yapay Zeka</strong> tarafından Ondokuz Mayıs Üniversitesi (OMÜ) Kurupelit Kampüsü Samsun Teknopark bünyesinde geliştirilmektedir.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-bold text-turquoise block mb-0.5">OMÜ Tıp Fakültesi İş Birliği</span>
                  <span className="text-white/60 text-[11px]">Çocuk Nörolojisi ve Pediatri klinik danışmanlığı</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-bold text-coral block mb-0.5">Samsun Büyükşehir Belediyesi</span>
                  <span className="text-white/60 text-[11px]">Aktif saha entegrasyonu ve pilot aile desteği</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <a
                href="https://www.adapha.com/tr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-turquoise hover:bg-turquoise-600 text-navy font-bold rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 text-xs text-center"
              >
                <span>Adapha.com&apos;u Ziyaret Et</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-turquoise uppercase tracking-wider">Bize Ulaşın</span>
            <h2 className="text-3xl font-bold text-navy mt-1">İletişim</h2>
            <p className="text-gray-600 text-sm mt-2">
              Soru, öneri, akademik işbirlikleri veya kurumsal destek talepleriniz için bize her zaman yazabilir veya doğrudan arayabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-xs text-gray-700">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
              <Mail size={18} className="text-turquoise mb-2" />
              <strong className="text-navy text-xs mb-1">E-Posta</strong>
              <a href="mailto:info@adapha.com" className="text-turquoise hover:underline">info@adapha.com</a>
              <a href="mailto:info@babysensai.com" className="text-gray-500 hover:underline text-[11px] mt-0.5">info@babysensai.com</a>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
              <span className="text-lg mb-1">📞</span>
              <strong className="text-navy text-xs mb-1">Telefon</strong>
              <a href="tel:05428461232" className="text-turquoise font-mono font-bold hover:underline">0542 846 12 32</a>
              <span className="text-gray-400 text-[10px] mt-0.5">Pzt - Cum: 09:00 - 18:00</span>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
              <MapPin size={18} className="text-coral mb-2" />
              <strong className="text-navy text-xs mb-1">Ar-Ge & Şirket Adresi</strong>
              <span className="text-gray-600 leading-snug text-[11px]">OMÜ Kurupelit Kampüsü, Samsun Teknopark, Atakum / Samsun</span>
            </div>
          </div>

          {sent ? (
            <div className="bg-emerald-50 text-emerald-800 p-6 rounded-2xl text-center border border-emerald-200">
              <CheckCircle2 size={36} className="mx-auto mb-2 text-emerald-600" />
              <p className="font-bold text-base">Mesajınız İletildi!</p>
              <p className="text-xs mt-1">En kısa sürede e-posta adresiniz üzerinden geri dönüş yapacağız.</p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Adınız Soyadınız *</label>
                  <input
                    type="text"
                    required
                    placeholder="Adınız Soyadınız"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy mb-1">E-posta Adresiniz *</label>
                  <input
                    type="email"
                    required
                    placeholder="ornek@alanadi.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">Konu</label>
                <input
                  type="text"
                  placeholder="Mesaj konusu"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise"
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">Mesajınız *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Mesajınızı buraya yazabilirsiniz..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-navy hover:bg-[#0c395e] text-white font-bold rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
              >
                <span>Mesajı Gönder</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
