'use client';

import { useState } from 'react';
import {
  XCircle,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Shield,
  Heart,
  Scale,
} from 'lucide-react';

const comparisonData = [
  {
    title: 'Gece Yarısı Ağlama & Huzursuzluk',
    problem: {
      tag: 'Geleneksel Yol',
      headline: 'İnternette Kafa Karıştıran Aramalar & Panik',
      desc: 'Gece 03:00\'te arama motorlarında birbirini tutmayan, korkutan makaleler. Ebeveyn çaresizliği ve artan uykusuzluk krizi.',
    },
    solution: {
      tag: 'DijitalBüyükanne',
      headline: '7/24 Şefkatli, Sakinleştirici ve Bilimsel Rehberlik',
      desc: 'Bebeğin ayına ve atak dönemine özel anında sakinleştirici yönlendirme. Evham yerine adım adım huzurlu uyku rutini.',
    },
  },
  {
    title: 'Nöromotor Gelişim & Asimetriler',
    problem: {
      tag: 'Geleneksel Yol',
      headline: '"Büyüyünce Geçer" Yanılgısı & Kaybedilen Zaman',
      desc: 'İlk 6 aydaki hafif bacak veya boyun hareket asimetrileri gözden kaçar; serebral palsi gibi riskler kritik müdahale penceresi geçtikten sonra fark edilir.',
    },
    solution: {
      tag: 'DijitalBüyükanne',
      headline: 'Nörolojik ve Kas Hastalıklarında Evden Erken Hareket Taraması',
      desc: 'Kısa bir videoyla 18 eklem noktası taranır; riskler henüz klinik belirti vermeden ilk aylarda tespit edilerek fizyoterapiye yönlendirilir.',
    },
  },
  {
    title: 'Bebek Bezi & Cilt Döküntüleri',
    problem: {
      tag: 'Geleneksel Yol',
      headline: 'Kulaktan Dolma Tavsiyeler & Yanlış Müdahaleler',
      desc: 'Komşulardan veya sosyal medyadan alınan kontrolsüz krem ve besin önerileri; alerji ve enfeksiyonun derinleşmesi riski.',
    },
    solution: {
      tag: 'DijitalBüyükanne',
      headline: 'Pediatrik Renk Skalası & Doğrudan Hekim Sevk Köprüsü',
      desc: 'Dışkı ve cilt fotoğrafları klinik referans kartlarıyla taranır; tanı koyulmaz, en doğru anda çocuk hekimine güvenli köprü kurulur.',
    },
  },
  {
    title: 'Hastane Acil Servis Başvuruları',
    problem: {
      tag: 'Geleneksel Yol',
      headline: 'Gereksiz Acil Koşuşturması & Hastane Enfeksiyonu',
      desc: 'Basit gaz sancısı veya hafif ısı değişimi için gece yarısı acil koridorlarında saatlerce yorucu bekleyiş ve aile içi stres.',
    },
    solution: {
      tag: 'DijitalBüyükanne',
      headline: 'Önlenebilir %52 Başvurunun Evde Huzurla Yönetimi',
      desc: 'Tıbbi aciliyet gerektirmeyen durumlar bilimsel filtreden geçer; aile hastanede tükenmek yerine evinde bebeğine güvenle sarılır.',
    },
  },
  {
    title: 'Anne Psikolojisi & Lohusalık',
    problem: {
      tag: 'Geleneksel Yol',
      headline: 'Yalnızlık Hissi, Suçluluk ve Lohusalık Anksiyetesi',
      desc: 'Yeni annelerin %21,4\'ü klinik düzeyde anksiyete yaşar; "bebeğime yetemiyorum" korkusu ve yalnızlık hissi giderek derinleşir.',
    },
    solution: {
      tag: 'DijitalBüyükanne',
      headline: 'Büyükanne Bilgeliği + Modern Bilim Desteği',
      desc: 'Günün her dakikasında anneye psikolojik alan açan, yargılamayan, şefkatli bir yol arkadaşı. Güçlü anne, sağlıklı büyüyen bebek.',
    },
  },
];

export default function ProblemSolutionCompare() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-2 px-2 sm:px-4 bg-transparent relative overflow-hidden w-full flex flex-col justify-center my-auto" id="karsilastirma">
      {/* Soft ambient backgrounds */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1360px] mx-auto relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy/5 text-navy text-xs font-mono font-bold tracking-widest uppercase mb-1.5 border border-navy/10 shadow-2xs">
            <Scale size={13} className="text-[#0284C7]" />
            <span>NEDEN DİJİTALBÜYÜKANNE?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1E3B] tracking-tight leading-tight">
            Geleneksel Çaresizlik vs.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] to-[#FF5A43]">
              DijitalBüyükanne Güvencesi
            </span>
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Bir aile eve geldiğinde karşılaştığı belirsizlikleri, yapay zekâ ve klinik uzmanlıkla huzura dönüştürüyoruz.
          </p>
        </div>

        {/* Dimension Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-5 max-w-5xl mx-auto">
          {comparisonData.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                activeTab === idx
                  ? 'bg-[#0B1E3B] text-white border-[#0B1E3B] shadow-md scale-102 ring-1 ring-sky-400/40'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
              }`}
            >
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Active Comparison Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl 2xl:max-w-[1260px] mx-auto items-stretch">
          
          {/* Sol: Geleneksel Yol (Kırmızı/Gül Tonu) */}
          <div className="p-6 sm:p-8 lg:p-9 rounded-3xl bg-gradient-to-br from-rose-50/70 via-white to-rose-50/30 border border-rose-200 shadow-md flex flex-col justify-between relative overflow-hidden min-h-[350px] sm:min-h-[390px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/30 rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="text-xs font-black uppercase tracking-wider text-rose-700 bg-rose-100 border border-rose-200 px-3 py-1 rounded-full flex items-center gap-1.5 font-mono shadow-2xs">
                  <XCircle size={14} className="text-rose-600" />
                  {comparisonData[activeTab].problem.tag}
                </span>
                <span className="text-2xl">⚠️</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 leading-snug">
                {comparisonData[activeTab].problem.headline}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-5">
                {comparisonData[activeTab].problem.desc}
              </p>
            </div>

            <div className="mt-4 pt-3.5 border-t border-rose-100 flex items-center gap-2.5 text-xs sm:text-sm font-bold text-rose-800 bg-rose-100/60 p-3.5 rounded-2xl shadow-2xs">
              <span className="shrink-0">❌ Sonuç:</span>
              <span>Yorulmuş ebeveyn, geciken kritik müdahale, artan kaygı.</span>
            </div>
          </div>

          {/* Sağ: DijitalBüyükanne Yolu (Mavi/Zümrüt Tonu) */}
          <div className="p-6 sm:p-8 lg:p-9 rounded-3xl bg-gradient-to-br from-sky-50/70 via-white to-emerald-50/40 border border-sky-300 shadow-xl flex flex-col justify-between relative overflow-hidden ring-1 ring-sky-400/30 min-h-[350px] sm:min-h-[390px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/40 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="text-xs font-black uppercase tracking-wider text-[#0284C7] bg-sky-100 border border-sky-200 px-3 py-1 rounded-full flex items-center gap-1.5 font-mono shadow-2xs">
                  <CheckCircle2 size={14} className="text-[#0284C7]" />
                  {comparisonData[activeTab].solution.tag}
                </span>
                <span className="text-2xl">✨</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#0B1E3B] mb-3 leading-snug">
                {comparisonData[activeTab].solution.headline}
              </h3>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-5">
                {comparisonData[activeTab].solution.desc}
              </p>
            </div>

            <div className="mt-4 pt-3.5 border-t border-sky-100 flex items-center gap-2.5 text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 p-3.5 rounded-2xl shadow-2xs">
              <span className="shrink-0">✅ Çıktı:</span>
              <span>Zamanında erken farkındalık, 7/24 huzurlu ev, güvenli büyüme.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
