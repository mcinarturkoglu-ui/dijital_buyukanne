"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  Users, 
  Cpu, 
  PlusCircle, 
  LayoutDashboard, 
  BarChart3, 
  FileText, 
  PlayCircle, 
  TrendingUp, 
  CheckCircle2, 
  Send,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Award
} from "lucide-react";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

export default function KurumlarPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    role: "",
    phone: "",
    email: "",
    city: "",
    institutionType: "Belediye",
    targetBabies: "100-500",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const features = [
    {
      title: "Kurumunuza Özel Mobil Uygulama",
      desc: "Kendi adınız, logonuz ve kurumsal renklerinizle App Store & Play Store'da yayında.",
      icon: Building2,
    },
    {
      title: "Ailelere Doğrudan Erişim",
      desc: "İlçenizdeki veya hedef kitlenizdeki tüm yeni anne-babalara mobil bildirim kanalı.",
      icon: Users,
    },
    {
      title: "Yapay Zekâ Destekli Dijital Hizmetler",
      desc: "BabySensAI tabanlı video hareket analizi, cilt değerlendirmesi ve 7/24 rehberlik.",
      icon: Cpu,
    },
    {
      title: "Kendi Hizmetlerinizi Ekleyin",
      desc: "Anne-bebek atölyeleri, ayni yardımlar, yerel seminer ve sağlık taramalarını entegre edin.",
      icon: PlusCircle,
    },
    {
      title: "Gelişmiş Yönetim Paneli",
      desc: "Kullanıcı kayıtları, referans kodları, duyuru yönetimi ve anlık kullanım metrikleri.",
      icon: LayoutDashboard,
    },
    {
      title: "Ölçülebilir Sosyal Etki",
      desc: "Kaç bebeğe ulaşıldı, kaç ön değerlendirme yapıldı gibi somut çıktıları anlık takip edin.",
      icon: BarChart3,
    },
    {
      title: "Şeffaf Dönemsel Raporlama",
      desc: "Meclis sunumları, denetimler ve kamuoyu bilgilendirmesi için hazır infografik raporlar.",
      icon: FileText,
    },
    {
      title: "Risk Almadan Pilot Uygulama",
      desc: "100 veya 250 ailelik pilot grupla başlayıp sahadan gelen verilerle modeli test edin.",
      icon: PlayCircle,
    },
    {
      title: "Şehir Geneline Kolay Ölçekleme",
      desc: "Başarısı kanıtlanan modeli tüm ilçe veya ile kademeli olarak yaygınlaştırın.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#061e33] via-[#082A46] to-[#0a3558] text-white py-20 lg:py-28 px-4 md:px-8 relative overflow-hidden">
        {/* Ambient lighting glows */}
        <div className="absolute top-0 right-1/4 w-[550px] h-[550px] bg-turquoise/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Sol Kolon: Kurumsal Değer & Aksiyon */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Luminous Institution Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] text-turquoise text-xs font-bold tracking-wider uppercase mb-6 border border-turquoise/30 backdrop-blur-md shadow-lg shadow-turquoise/10">
                <Building2 size={15} />
                <span>Belediyeler, Kamu Kurumları ve Sosyal Sorumluluk Liderleri</span>
              </div>

              {/* H1 Manşet */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 tracking-tight text-white leading-[1.14]">
                Kurumunuzun sosyal etkisini <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise via-teal-300 to-coral">
                  teknoloji ve şefkatle büyütün.
                </span>
              </h1>

              {/* Açıklama */}
              <p className="text-base sm:text-lg lg:text-xl text-white/85 mb-8 leading-relaxed font-normal max-w-2xl">
                DijitalBüyükanne; kamu ve sivil toplum kuruluşları için <strong>kendi adınız ve kurumsal kimliğinizle</strong> ailelere uzanan, ilk 1.000 günde her haneye eşit ulaşan ve <strong>şeffaf meclis sunumlarına hazır</strong> yeni nesil dijital sosyal belediyecilik altyapısı sunar.
              </p>

              {/* 3 Kurumsal Değer Kartı */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-8">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:bg-white/[0.07] transition-all">
                  <span className="text-turquoise text-xs font-bold block mb-1 flex items-center gap-1.5">
                    <Smartphone size={14} />
                    %100 White-Label
                  </span>
                  <span className="text-white/70 text-xs leading-relaxed">
                    Kendi logonuz ve kurumsal renklerinizle resmi mağaza yayını.
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:bg-white/[0.07] transition-all">
                  <span className="text-coral text-xs font-bold block mb-1 flex items-center gap-1.5">
                    <FileText size={14} />
                    Meclis Karar Taslağı
                  </span>
                  <span className="text-white/70 text-xs leading-relaxed">
                    Mevzuata uygun, hazır kurumsal iş birliği ve protokol paketi.
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:bg-white/[0.07] transition-all">
                  <span className="text-emerald-400 text-xs font-bold block mb-1 flex items-center gap-1.5">
                    <ShieldCheck size={14} />
                    Risk Taşımayan Pilot
                  </span>
                  <span className="text-white/70 text-xs leading-relaxed">
                    100–500 aile ile hızlı başlangıç ve kademeli yaygınlaştırma.
                  </span>
                </div>
              </div>

              {/* Aksiyon Butonları */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#form"
                  className="relative overflow-hidden group px-8 py-4 bg-gradient-to-r from-coral to-[#e8634f] hover:bg-coral-600 text-white font-bold rounded-2xl transition-all shadow-xl shadow-coral/30 hover:shadow-coral/50 hover:-translate-y-0.5 active:scale-98 text-sm sm:text-base inline-flex items-center gap-2.5"
                >
                  <span className="relative z-10">Kurumsal Protokol Görüşmesi Talep Et</span>
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#ozellikler"
                  className="px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold rounded-2xl transition-all text-sm sm:text-base inline-flex items-center gap-2"
                >
                  <span>Hizmetleri Keşfet</span>
                </a>

                <Link
                  href="/#sosyal-etki"
                  className="text-turquoise hover:text-white transition-colors text-sm font-semibold inline-flex items-center gap-1.5 px-3 py-2 group"
                >
                  <span>Sosyal Etki Simülatörü</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Sağ Kolon: Kurumsal White-Label Mobil Vitrini */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative group max-w-[310px] sm:max-w-[340px] mx-auto transform hover:scale-[1.02] transition-all duration-500">
                {/* Glow backdrop */}
                <div className="absolute inset-0 bg-gradient-to-tr from-turquoise/30 via-teal-500/20 to-coral/20 rounded-[48px] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Yüzen Rozet Üst */}
                <div className="absolute -top-3 right-2 sm:right-6 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-turquoise/40 text-turquoise text-[11px] font-bold shadow-xl backdrop-blur-md">
                  <Award size={13} />
                  <span>Şeffaf SROI Raporu</span>
                </div>

                {/* Yüzen Rozet Alt */}
                <div className="absolute -bottom-3 left-2 sm:left-6 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-white/20 text-white/90 text-[11px] font-semibold shadow-xl backdrop-blur-md">
                  <CheckCircle2 size={13} className="text-turquoise" />
                  <span>Sayıştay & Mevzuat Uyumlu</span>
                </div>

                {/* Gerçek Görsel */}
                <div className="relative z-10">
                  <Image
                    src="/images/kurumunuz-dijitalbuyukanne.png"
                    alt="Kurumunuz Adına Özelleştirilmiş DijitalBüyükanne Uygulaması"
                    width={340}
                    height={660}
                    priority
                    className="w-full h-auto object-contain drop-shadow-2xl rounded-3xl"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9 Features */}
      <section id="ozellikler" className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-turquoise">Platform Avantajları</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
            Kurumunuza Ne Sağlar?
          </h2>
          <p className="text-gray-600">
            Yalnızca bir mobil uygulama değil; uçtan uca yönetilen, veriye dayalı bir sosyal hizmet ekosistemi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="premium-card bg-white p-7 rounded-3xl border border-gray-100/90 shadow-sm hover:shadow-card-hover transition-all duration-300 group cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-turquoise/10 text-turquoise group-hover:bg-turquoise group-hover:text-navy flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-turquoise transition-colors">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pilot Model Highlight */}
      <section id="pilot" className="bg-[#EDF3F4] py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs uppercase tracking-wider font-bold text-navy/60">Kademeli Yaklaşım</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
            Büyük Bütçeler Yerine Pilot İle Başlayın
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Önce 100-500 ailelik belirlenmiş bir hedef grupla pilot çalışma yaparak etkiyi ölçün; sonuçları gördükten sonra tüm şehre yaygınlaştırın.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
            <div className="premium-card bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-100/80 transition-all duration-300">
              <span className="text-coral font-bold text-xs uppercase tracking-wider">Aşama 01</span>
              <h4 className="font-bold text-navy mt-1 mb-2">Pilot</h4>
              <p className="text-xs text-gray-600">Belirli sayıda hedef aileyle sistemi canlıya alın.</p>
            </div>
            <div className="premium-card bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-100/80 transition-all duration-300">
              <span className="text-turquoise font-bold text-xs uppercase tracking-wider">Aşama 02</span>
              <h4 className="font-bold text-navy mt-1 mb-2">Ölçümle</h4>
              <p className="text-xs text-gray-600">Katılım ve memnuniyet metriklerini panelden izleyin.</p>
            </div>
            <div className="premium-card bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-100/80 transition-all duration-300">
              <span className="text-navy font-bold text-xs uppercase tracking-wider">Aşama 03</span>
              <h4 className="font-bold text-navy mt-1 mb-2">Geliştir</h4>
              <p className="text-xs text-gray-600">Yerel ihtiyaçlara göre içerik ve servisleri uyarlayın.</p>
            </div>
            <div className="premium-card bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-100/80 transition-all duration-300">
              <span className="text-coral font-bold text-xs uppercase tracking-wider">Aşama 04</span>
              <h4 className="font-bold text-navy mt-1 mb-2">Ölçekle</h4>
              <p className="text-xs text-gray-600">Başarısı tescillenen modeli ilçe veya il geneline açın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="form" className="py-24 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral/10 text-coral text-xs font-semibold mb-3">
              <Sparkles size={14} />
              <span>İletişime Geçin</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy">
              Kurumunuz İçin DijitalBüyükanne
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Formu doldurun; uzman ekibimiz demo sunumu ve pilot program detayları için en kısa sürede sizinle iletişime geçsin.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-2xl text-center">
              <CheckCircle2 size={48} className="mx-auto mb-3 text-emerald-600" />
              <h3 className="text-xl font-bold mb-2">Talebiniz Alındı!</h3>
              <p className="text-sm max-w-md mx-auto">
                Kurumsal temsilcimiz en geç 24 saat içerisinde sizinle iletişime geçerek detaylı demo sunumunu organize edecektir.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Ad Soyad *</label>
                  <input
                    type="text"
                    required
                    placeholder="Adınız Soyadınız"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Kurum Adı *</label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: X Belediyesi / Y Vakfı"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Göreviniz</label>
                  <input
                    type="text"
                    placeholder="Örn: Sosyal Hizmetler Müdürü"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Telefon *</label>
                  <input
                    type="tel"
                    required
                    placeholder="05XX XXX XX XX"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy mb-1">E-posta *</label>
                  <input
                    type="email"
                    required
                    placeholder="ornek@kurum.bel.tr"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Şehir</label>
                  <input
                    type="text"
                    placeholder="Şehir"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy mb-1">Kurum Türü</label>
                  <select
                    className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-turquoise"
                    value={formData.institutionType}
                    onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                  >
                    <option value="Belediye">Belediye</option>
                    <option value="Vakıf">Vakıf</option>
                    <option value="STK">STK / Dernek</option>
                    <option value="Şirket">Şirket / CSR</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">Tahmini Hedef Aile/Bebek Sayısı</label>
                <select
                  className="w-full border border-gray-200 rounded-xl px-3 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-turquoise"
                  value={formData.targetBabies}
                  onChange={(e) => setFormData({ ...formData, targetBabies: e.target.value })}
                >
                  <option value="100'den az">100&apos;den az (Pilot)</option>
                  <option value="100-500">100 - 500 Bebek</option>
                  <option value="500-1000">500 - 1.000 Bebek</option>
                  <option value="1000+">1.000+ Bebek (İl / İlçe Geneli)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy mb-1">Mesajınız / Notlar</label>
                <textarea
                  rows={3}
                  placeholder="Hedefleriniz, pilot çalışma düşünceniz veya sormak istedikleriniz..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-coral hover:bg-coral-600 text-white font-bold rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Görüşme Talep Et</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
