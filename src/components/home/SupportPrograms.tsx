import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { Check, Users, ArrowRight } from 'lucide-react';

const featuredChecklist = [
  '500 bebeğin programa dahil edilmesi',
  'Ailelerin mobil uygulamaya erişimi',
  'Dijital değerlendirmeler',
  'Dijital Aile Asistanı',
  'Gerektiğinde uzman desteği',
  'Gelişimsel takip',
  'Kullanım analitiği',
  'Sosyal etki raporu',
];

const variantPrograms = [
  {
    scale: '100',
    label: 'Pilot Program',
    desc: 'Başlangıç için ideal ölçek. Deneyim ve veri birikimi.',
    color: 'border-coral/40',
    badge: 'bg-coral/10 text-coral',
  },
  {
    scale: '250',
    label: 'Büyüme Paketi',
    desc: 'Kurumsal görünürlük ve ölçeklenebilir sosyal etki.',
    color: 'border-navy/40',
    badge: 'bg-navy/10 text-navy',
  },
  {
    scale: '1.000',
    label: 'Etki Paketi',
    desc: 'Maksimum kapsam, güçlü sosyal etki raporu.',
    color: 'border-turquoise/40',
    badge: 'bg-turquoise/10 text-turquoise',
  },
];

export default function SupportPrograms() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-off-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Destek Programları"
          title="Bir kurum yüzlerce bebeğin gelişim yolculuğuna eşlik edebilir."
          subtitle="Program içerikleri ve ölçeği kurumunuzun hedeflerine göre birlikte tasarlanır."
          centered
        />

        {/* Featured Program Card */}
        <div className="mt-14 relative rounded-3xl p-px bg-gradient-to-br from-turquoise via-navy to-turquoise shadow-card-hover">
          <div className="bg-white rounded-[calc(1.5rem-1px)] p-8 md:p-12">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
              <div>
                <span className="inline-block bg-turquoise/10 text-turquoise text-xs font-bold tracking-wider uppercase rounded-full px-3 py-1 mb-3">
                  Örnek Program
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-navy leading-snug">
                  500 Bebeğe DijitalBüyükanne Desteği
                </h3>
              </div>
              <div className="flex items-center gap-2 bg-soft-gray rounded-2xl px-5 py-3 self-start flex-shrink-0">
                <Users className="w-5 h-5 text-navy" />
                <span className="text-navy font-bold text-lg">500</span>
                <span className="text-gray-500 text-sm">bebek</span>
              </div>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {featuredChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-turquoise flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/kurumlar#form"
                className="btn-primary inline-flex items-center gap-2 group"
              >
                Bir Destek Programı Oluşturalım
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                Program içerikleri kurumun ihtiyaçlarına göre özelleştirilebilir.
              </p>
            </div>
          </div>
        </div>

        {/* Variant Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {variantPrograms.map(({ scale, label, desc, color, badge }) => (
            <div
              key={scale}
              className={`bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 p-6 border-2 ${color}`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <span className={`text-xs font-bold tracking-wide uppercase rounded-full px-2.5 py-1 ${badge}`}>
                    {label}
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-navy">{scale}</span>
                  <span className="text-gray-400 text-xs">bebek</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
