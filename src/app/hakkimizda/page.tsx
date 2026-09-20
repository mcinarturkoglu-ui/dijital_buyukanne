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
      <section className="bg-gradient-to-b from-navy to-[#082e4e] text-white py-20 px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-turquoise mb-3 inline-block">
            Biz Kimiz?
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white">
            DijitalBüyükanne <br />
            <span className="text-turquoise">neden var?</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Bir bebeğin dünyaya gelmesiyle başlayan o eşsiz ve hassas yolculukta, hiçbir ailenin yalnız hissetmemesi için yola çıktık.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-coral/10 text-coral flex items-center justify-center mb-5">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-3">Misyonumuz</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Teknolojinin sunduğu imkânları, bilimsel pediatrik bilgi ve uzman desteğiyle harmanlayarak; Türkiye&apos;deki tüm bebeklerin ilk 24 aylık gelişim döneminde eşit, güvenilir ve sürekli bir rehberlik ağına erişebilmesini sağlamak.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-turquoise/10 text-turquoise flex items-center justify-center mb-5">
              <Eye size={24} />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-3">Vizyonumuz</h3>
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
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-4">
                    <Icon size={20} className="text-turquoise" />
                  </div>
                  <h4 className="font-bold text-navy text-base mb-2">{v.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-24 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-turquoise uppercase tracking-wider">Bize Ulaşın</span>
            <h2 className="text-3xl font-bold text-navy mt-1">İletişim</h2>
            <p className="text-gray-600 text-sm mt-2">
              Soru, öneri, akademik işbirlikleri veya kurumsal destek talepleriniz için bize her zaman yazabilirsiniz.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-turquoise" />
              <span>info@dijitalbuyukanne.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-turquoise" />
              <span>Ankara & İstanbul, Türkiye</span>
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
