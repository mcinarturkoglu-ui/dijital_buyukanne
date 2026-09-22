import { Zap, ShieldCheck, Check, Sparkles } from 'lucide-react';
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
  const centerSize = 100;

  return (
    <div className="relative w-84 h-84 md:w-96 md:h-96 flex items-center justify-center mx-auto my-4">
      {/* Outermost rotating/pulsing glow ring */}
      <div className="absolute inset-0 rounded-full bg-turquoise/5 border-2 border-dashed border-turquoise/20 animate-spin" style={{ animationDuration: '35s' }} />
      {/* Mid ring */}
      <div className="absolute w-72 h-72 rounded-full bg-turquoise/5 border border-turquoise/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
      {/* Inner glow */}
      <div className="absolute w-52 h-52 rounded-full bg-turquoise/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      {/* Inner navy circle */}
      <div
        className="absolute rounded-full bg-gradient-to-br from-navy to-[#0e3b61] flex flex-col items-center justify-center shadow-2xl z-10 border-4 border-white/15 transition-transform duration-300 hover:scale-110 cursor-default"
        style={{ width: centerSize, height: centerSize, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <p className="text-white font-black text-[11px] tracking-wider text-center leading-tight uppercase px-2">
          Uzman<br /><span className="text-turquoise">Desteği</span>
        </p>
      </div>

      {/* Segment labels placed around the circle */}
      {segments.map(({ label, angle }) => {
        const rad = (angle - 90) * (Math.PI / 180);
        const x = 50 + radius * Math.cos(rad) / 1.7;
        const y = 50 + radius * Math.sin(rad) / 1.7;
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
            <span className="bg-white border border-turquoise/20 text-navy text-[11px] font-bold px-3 py-1.5 rounded-2xl shadow-card hover:bg-turquoise hover:text-white hover:scale-110 hover:shadow-card-glow transition-all duration-300 cursor-default whitespace-nowrap">
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
    <section className="py-20 md:py-28 px-4 md:px-8 bg-off-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
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
          <div className="premium-card p-8 border border-turquoise/10 hover:border-turquoise/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-turquoise/15 to-turquoise/5 flex items-center justify-center">
                <Zap className="w-6 h-6 text-turquoise" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy">Yapay Zekâ</h3>
                <p className="text-xs text-navy/40">BabySensAI Motoru</p>
              </div>
            </div>
            <ul className="flex flex-col gap-4">
              {aiBullets.map((item) => (
                <li key={item} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-turquoise/10 group-hover:bg-turquoise flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <Check className="w-3.5 h-3.5 text-turquoise group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-navy/75 text-sm font-medium group-hover:text-navy transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expert column */}
          <div className="premium-card p-8 border border-navy/10 hover:border-navy/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-navy/10 to-navy/5 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy">Uzman Desteği</h3>
                <p className="text-xs text-navy/40">Klinik Değerlendirme</p>
              </div>
            </div>
            <ul className="flex flex-col gap-4">
              {expertBullets.map((item) => (
                <li key={item} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-navy/10 group-hover:bg-navy flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <Check className="w-3.5 h-3.5 text-navy group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-navy/75 text-sm font-medium group-hover:text-navy transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-12 flex justify-center">
          <div className="shimmer-btn inline-flex items-center gap-3 bg-gradient-to-r from-navy via-[#0e3b61] to-navy text-white px-8 py-4 rounded-full shadow-lg">
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
