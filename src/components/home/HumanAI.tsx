import { Zap, ShieldCheck, Check } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const segments = [
  { label: 'Uyku', angle: 0 },
  { label: 'Beslenme', angle: 60 },
  { label: 'Emzirme', angle: 120 },
  { label: 'Hareket', angle: 180 },
  { label: 'Cilt', angle: 240 },
  { label: 'Genel Gelişim', angle: 300 },
];

const aiBullets = [
  '7/24 erişim',
  'Hızlı yanıt',
  'Kişiselleştirilmiş rehberlik',
];

const expertBullets = [
  'Güven',
  'Klinik değerlendirme',
  'Gerektiğinde devreye girer',
];

function RadialDiagram() {
  const radius = 120;
  const centerSize = 96;

  return (
    <div className="relative w-80 h-80 flex items-center justify-center mx-auto">
      {/* Outermost glow ring */}
      <div className="absolute inset-0 rounded-full bg-turquoise/10 border border-turquoise/20" />
      {/* Mid ring */}
      <div className="absolute w-64 h-64 rounded-full bg-turquoise/15 border border-turquoise/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      {/* Inner navy circle */}
      <div
        className="absolute rounded-full bg-navy flex flex-col items-center justify-center shadow-xl z-10"
        style={{ width: centerSize, height: centerSize, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <p className="text-white font-black text-[9px] tracking-widest text-center leading-tight uppercase px-1">
          Uzman<br />Desteği
        </p>
      </div>

      {/* Segment labels placed around the circle */}
      {segments.map(({ label, angle }) => {
        const rad = (angle - 90) * (Math.PI / 180);
        const x = 50 + radius * Math.cos(rad) / 1.6;
        const y = 50 + radius * Math.sin(rad) / 1.6;
        return (
          <div
            key={label}
            className="absolute flex items-center justify-center"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <span className="bg-white border border-turquoise/30 text-navy text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm whitespace-nowrap">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default function HumanAI() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-off-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="İnsan + Yapay Zekâ"
          title="Yapay zekâ destekler. Uzman gerektiğinde devreye girer."
          subtitle="Dijital teknolojiler ailelerin bilgiye ve desteğe ulaşmasını kolaylaştırırken insan uzmanlığı güvenin merkezinde kalır."
          centered
        />

        {/* Circular diagram */}
        <div className="mt-16 flex justify-center">
          <RadialDiagram />
        </div>

        {/* Two-column bullets */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AI column */}
          <div className="bg-white rounded-3xl shadow-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-turquoise/15 flex items-center justify-center">
                <Zap className="w-5 h-5 text-turquoise" />
              </div>
              <h3 className="text-xl font-bold text-navy">Yapay Zekâ</h3>
            </div>
            <ul className="flex flex-col gap-4">
              {aiBullets.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-turquoise/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-turquoise" />
                  </div>
                  <span className="text-navy/80 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expert column */}
          <div className="bg-white rounded-3xl shadow-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy">Uzman Desteği</h3>
            </div>
            <ul className="flex flex-col gap-4">
              {expertBullets.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-navy" />
                  </div>
                  <span className="text-navy/80 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-full shadow-lg">
            <Zap className="w-4 h-4 text-turquoise" />
            <p className="font-semibold text-sm tracking-wide">
              Yapay zekâ + uzmanlık + sürekli takip
            </p>
            <ShieldCheck className="w-4 h-4 text-turquoise" />
          </div>
        </div>
      </div>
    </section>
  );
}
