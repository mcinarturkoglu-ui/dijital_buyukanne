import Link from 'next/link';
import { MapPin, ArrowRight, Building2, Heart } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import supportersData from '@/data/supporters.json';

export default function SupportersPreview() {
  // Aktif ve öne çıkan destekçiler (eğer öne çıkan yoksa aktif olan ilk 3)
  const allSupporters = supportersData.supporters || [];
  let displaySupporters = allSupporters.filter((s: any) => s.active && s.featured);

  if (displaySupporters.length === 0) {
    displaySupporters = allSupporters.filter((s: any) => s.active).slice(0, 3);
  }

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-[#F5F8FD] relative overflow-hidden" id="destekciler">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none opacity-20" />
      <div className="absolute top-0 right-1/3 w-72 h-72 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          eyebrow="Destekçilerimiz"
          title="Bu yolculuğu birlikte büyütüyoruz."
          subtitle="Programı hayata geçiren kurumların katkısıyla daha fazla bebeğe ve aileye ulaşıyoruz."
          centered
        />

        {/* Supporter Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {displaySupporters.map((s: any) => {
            const cardColor = s.color || '#0284C7';
            const initials = s.shortName || s.name.slice(0, 2).toUpperCase();

            return (
              <div
                key={s.id}
                className="bg-white rounded-3xl overflow-hidden flex flex-col border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Card top gradient bar */}
                <div
                  className="h-1.5 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${cardColor}, #0EA5E9)`,
                  }}
                />

                <div className="p-7 flex flex-col flex-1">
                  {/* Monogram Badge */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg mb-5 flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: cardColor }}
                  >
                    {initials}
                  </div>

                  {/* Institution name */}
                  <h3 className="text-navy font-bold text-lg leading-tight group-hover:text-sky-600 transition-colors duration-300">
                    {s.name}
                  </h3>

                  {/* Program name */}
                  <p className="text-sm font-semibold mt-1 mb-1 text-sky-600">
                    {s.program}
                  </p>

                  {/* City & Type */}
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {s.city}
                    </span>
                    <span>•</span>
                    <span className="uppercase text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      {s.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {s.description || 'Aile ve bebek gelişim süreçlerini desteklemek amacıyla hayata geçirilen program.'}
                  </p>

                  {/* Link */}
                  <div className="mt-6 pt-5 border-t border-gray-100">
                    <Link
                      href={`/destekciler/${s.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-700 hover:gap-2.5 transition-all duration-300 group/link"
                    >
                      Detayları Gör
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-gray-400 mt-8 italic">
          Kurumlar yönetim paneli üzerinden anlık olarak güncellenmekte ve yeni paydaşlar dahil edilmektedir.
        </p>

        {/* Split CTA Banner */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-[#0284C7] to-[#0EA5E9] rounded-2xl p-6 flex items-center gap-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm leading-tight">Kurumunuzu Dahil Edin</p>
              <p className="text-white/80 text-xs mt-0.5">Belediye, vakıf veya şirket olarak destek olun</p>
            </div>
            <Link href="/kurumlar" className="bg-white text-sky-700 font-bold text-xs px-4 py-2 rounded-xl hover:bg-sky-50 transition-colors shrink-0">
              Başvur
            </Link>
          </div>
          <div className="bg-white border-2 border-navy/10 rounded-2xl p-6 flex items-center gap-4 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-coral fill-coral" />
            </div>
            <div className="flex-1">
              <p className="text-navy font-bold text-sm leading-tight">Demo Talep Edin</p>
              <p className="text-navy/60 text-xs mt-0.5">Uygulamayı canlı deneyin, soruları sorun</p>
            </div>
            <Link href="/kurumlar#form" className="bg-navy text-white font-bold text-xs px-4 py-2 rounded-xl hover:bg-[#0d3455] transition-colors shrink-0">
              Demo Al
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
