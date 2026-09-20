import Link from 'next/link';
import { FileText, BarChart2, PieChart, TrendingUp, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const reportSections = [
  { label: 'Desteklenen bebek sayısı', icon: BarChart2, color: 'text-turquoise' },
  { label: 'Aktif aile sayısı', icon: TrendingUp, color: 'text-navy' },
  { label: 'Değerlendirme sayısı', icon: BarChart2, color: 'text-turquoise' },
  { label: 'Danışmanlık kullanımı', icon: PieChart, color: 'text-navy' },
  { label: 'Takip oranı', icon: TrendingUp, color: 'text-turquoise' },
  { label: 'Memnuniyet', icon: PieChart, color: 'text-navy' },
  { label: 'Program süresi', icon: BarChart2, color: 'text-turquoise' },
  { label: 'Şehir/ilçe dağılımı', icon: PieChart, color: 'text-navy' },
];

const included = [
  'Her çeyrek dönem için otomatik rapor oluşturma',
  'Görsel grafikler ve özet kartlar',
  'Kuruma özel marka kimliğiyle sunulabilir format',
  'PDF ve dijital paylaşım seçenekleri',
];

export default function TransparentReporting() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-soft-gray">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <SectionHeader
              eyebrow="Raporlama"
              title="Desteğinizin karşılığını görün."
              subtitle="Şeffaf. Ölçülebilir. Raporlanabilir."
            />

            <p className="text-gray-600 mt-6 mb-8 leading-relaxed">
              Her destekçi kuruma, programın sosyal etkisini belgeleleyen periyodik raporlar sunulur.
              Bu raporlar, kurumunuzun iletişim materyallerinde ve paydaş sunumlarında doğrudan kullanılabilir.
            </p>

            <ul className="space-y-3 mb-10">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-turquoise/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-turquoise" />
                  </span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/kurumlar#form"
              className="inline-flex items-center gap-2 bg-coral text-white font-semibold px-7 py-3.5 rounded-2xl hover:bg-coral/90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Örnek Etki Raporunu İncele
              <ArrowRight className="w-4 h-4" />
            </Link>

          </div>

          {/* Right: Report Mockup */}
          <div className="relative">
            {/* ÖRNEK GÖRÜNÜM ribbon */}
            <div className="absolute -top-3 -right-3 z-10">
              <span className="bg-coral text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md">
                ÖRNEK GÖRÜNÜM
              </span>
            </div>

            <div className="bg-white rounded-3xl shadow-card overflow-hidden border border-gray-100">
              {/* Report Header */}
              <div className="bg-navy px-6 py-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-turquoise/20 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-turquoise" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider">Sosyal Etki Raporu</p>
                    <p className="text-white font-bold text-sm">DijitalBüyükanne · Q1 2024</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-3">
                  {['Ocak', 'Şubat', 'Mart'].map((m) => (
                    <span key={m} className="text-white/40 text-xs">{m}</span>
                  ))}
                </div>
              </div>

              {/* Report Body */}
              <div className="p-6">
                {/* Mini chart placeholder */}
                <div className="flex items-end gap-1.5 h-16 mb-6 px-2">
                  {[55, 70, 45, 85, 60, 95, 75, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i % 2 === 0 ? '#14BBB7' : '#082A46',
                        opacity: i % 2 === 0 ? 0.8 : 0.3,
                      }}
                    />
                  ))}
                </div>

                {/* Section rows */}
                <div className="space-y-2">
                  {reportSections.map(({ label, icon: Icon, color }, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-3.5 h-3.5 ${color} opacity-70`} />
                        <span className="text-sm text-gray-700">{label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-1.5 bg-soft-gray rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-turquoise/40"
                            style={{ width: `${30 + (i * 13) % 55}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-300 w-4 text-right">—</span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-gray-400 mt-4 italic text-center">
                  Veriler kuruma özel raporda gösterilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
