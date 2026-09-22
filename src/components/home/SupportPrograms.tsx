import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { Check, Users, ArrowRight, Sparkles } from 'lucide-react';

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
    gradient: 'from-coral/20 to-transparent',
  },
  {
    scale: '250',
    label: 'Büyüme Paketi',
    desc: 'Kurumsal görünürlük ve ölçeklenebilir sosyal etki.',
    color: 'border-navy/40',
    badge: 'bg-navy/10 text-navy',
    gradient: 'from-navy/20 to-transparent',
  },
  {
    scale: '1.000',
    label: 'Etki Paketi',
    desc: 'Maksimum kapsam, güçlü sosyal etki raporu.',
    color: 'border-turquoise/40',
    badge: 'bg-turquoise/10 text-turquoise',
    gradient: 'from-turquoise/20 to-transparent',
  },
];

export default function SupportPrograms() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-off-white relative overflow-hidden">
      {/* Decorative ambient blur */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-turquoise/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Destek Programları"
          title="Bir kurum yüzlerce bebeğin gelişim yolculuğuna eşlik edebilir."
          subtitle="Program içerikleri ve ölçeği kurumunuzun hedeflerine göre birlikte tasarlanır."
          centered
        />

        {/* Featured Program Card */}
        <div className="mt-14 relative rounded-3xl p-px bg-gradient-to-br from-turquoise via-navy to-coral shadow-card-hover group">
          <div className="bg-white rounded-[calc(1.5rem-1px)] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-turquoise/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-turquoise/10 text-turquoise text-xs font-bold tracking-wider uppercase rounded-full px-3.5 py-1 mb-3 border border-turquoise/20">
                  <Sparkles size={12} />
                  Örnek Program
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-navy leading-snug">
                  500 Bebeğe DijitalBüyükanne Desteği
                </h3>
              </div>
              <div className="flex items-center gap-2.5 bg-gradient-to-r from-soft-gray to-gray-100 rounded-2xl px-5 py-3 self-start flex-shrink-0 border border-gray-200 shadow-sm">
                <Users className="w-5 h-5 text-turquoise" />
                <span className="text-navy font-black text-xl">500</span>
                <span className="text-gray-500 text-sm font-semibold">bebek</span>
              </div>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
              {featuredChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3 p-2 rounded-xl hover:bg-soft-gray transition-colors">
                  <div className="w-5 h-5 rounded-full bg-turquoise flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 text-sm font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-6 border-t border-gray-100">
              <Link
                href="/kurumlar#form"
                className="relative overflow-hidden group btn-primary inline-flex items-center gap-2 text-sm md:text-base font-bold shadow-md hover:shadow-glow-coral active:scale-98 transition-all"
              >
                <span>Bir Destek Programı Oluşturalım</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>

              <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
                Program içerikleri ve bütçelendirme kurumun ihtiyaçlarına göre ölçeklendirilir.
              </p>
            </div>
          </div>
        </div>

        {/* Variant Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {variantPrograms.map(({ scale, label, desc, color, badge, gradient }) => (
            <div
              key={scale}
              className={`premium-card bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 p-6 border-2 ${color} relative overflow-hidden group`}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${gradient} rounded-full blur-xl pointer-events-none`} />
              
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <span className={`text-xs font-bold tracking-wide uppercase rounded-full px-3 py-1 ${badge}`}>
                    {label}
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-navy">{scale}</span>
                  <span className="text-gray-400 text-xs font-semibold">bebek</span>
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
