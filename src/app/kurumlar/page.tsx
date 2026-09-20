"use client";

import { useState } from "react";
import Link from "next/link";
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
  Sparkles
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
      <section className="bg-gradient-to-b from-navy to-[#0a3150] text-white py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-turquoise/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-turquoise/20 text-turquoise text-xs font-semibold tracking-wider uppercase mb-4">
            Belediyeler, STK&apos;lar ve Sosyal Sorumluluk Kuruluşları
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white leading-tight">
            Kurumunuzun sosyal etkisini <br className="hidden sm:inline" />
            <span className="text-turquoise">teknolojiyle büyütün.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            DijitalBüyükanne; kamu ve sivil toplum kuruluşları için özelleştirilebilir, ölçülebilir ve sürdürülebilir dijital aile destek altyapısı sunar.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#form"
              className="px-8 py-4 bg-coral hover:bg-coral-600 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Görüşme Talep Et
            </a>
            <a
              href="#ozellikler"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-2xl transition-all"
            >
              Hizmetleri Keşfet
            </a>
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
                className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-turquoise/10 text-turquoise flex items-center justify-center mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">{f.title}</h3>
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
            <div className="bg-white p-5 rounded-2xl shadow-sm">
              <span className="text-coral font-bold text-xs uppercase tracking-wider">Aşama 01</span>
              <h4 className="font-bold text-navy mt-1 mb-2">Pilot</h4>
              <p className="text-xs text-gray-600">Belirli sayıda hedef aileyle sistemi canlıya alın.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm">
              <span className="text-turquoise font-bold text-xs uppercase tracking-wider">Aşama 02</span>
              <h4 className="font-bold text-navy mt-1 mb-2">Ölçümle</h4>
              <p className="text-xs text-gray-600">Katılım ve memnuniyet metriklerini panelden izleyin.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm">
              <span className="text-navy font-bold text-xs uppercase tracking-wider">Aşama 03</span>
              <h4 className="font-bold text-navy mt-1 mb-2">Geliştir</h4>
              <p className="text-xs text-gray-600">Yerel ihtiyaçlara göre içerik ve servisleri uyarlayın.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm">
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
