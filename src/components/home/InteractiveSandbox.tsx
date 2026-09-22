'use client';

import { useState } from 'react';
import {
  Sparkles,
  Camera,
  MessageSquare,
  AlertTriangle,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Send,
  RotateCcw,
  ShieldCheck,
  Heart,
  ChevronRight,
} from 'lucide-react';

/* Sample types for Stool Demo */
interface StoolSample {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  colorSwatch: string;
  colorHex: string;
  severity: 'normal' | 'critical' | 'warning';
  scaleCode: string;
  aiConfidence: string;
  findings: string;
  guidance: string;
}

const stoolSamples: StoolSample[] = [
  {
    id: 'sample-1',
    title: 'Sağlıklı Anne Sütü Dışkısı',
    subtitle: 'Hardal sarısı, pütürlü ve tipik sağlıklı yenidoğan paterni',
    badge: 'Normal / Sağlıklı',
    colorSwatch: 'bg-amber-400',
    colorHex: '#FBBF24',
    severity: 'normal',
    scaleCode: 'Renk Kartı: No. 6 (Normal)',
    aiConfidence: '%99.1 Doğruluk',
    findings: 'Safra pigmentasyonu normal, mukus veya kan izi bulunmuyor. Sindirim fizyolojik seyrediyor.',
    guidance: 'Bebeğinizin beslenmesi ve sindirimi tamamen olağan seyrindedir. Herhangi bir tıbbi müdahaleye gerek yoktur.',
  },
  {
    id: 'sample-2',
    title: 'Açık Renkli / Kilsi Dışkı (Akoli)',
    subtitle: 'Soluk beyaz-gri tonlu dışkı; safra akışında engel şüphesi',
    badge: 'Kritik Erken Uyarı',
    colorSwatch: 'bg-slate-200 border-2 border-red-400',
    colorHex: '#E2E8F0',
    severity: 'critical',
    scaleCode: 'Renk Kartı: No. 1 (Anormal - Akolik)',
    aiConfidence: '%98.7 Kritik Uyarı',
    findings: 'Safra yolu pigmenti (sterkobilin) tespit edilemedi. Biliyer Atrezi veya neonatal kolestaz riski.',
    guidance: 'ACİL YÖNLENDİRME: Bebeğinizi vakit kaybetmeden en geç 48 saat içinde bir Çocuk Gastroenterolojisi veya Çocuk Cerrahisi uzmanına götürünüz. Kasai operasyonu için ilk 60 gün hayatidir!',
  },
  {
    id: 'sample-3',
    title: 'Mukuslu & Çizgili Numune',
    subtitle: 'Yeşilimsi-kahve, jel kıvamlı ve mikro çizgi dokusu',
    badge: 'Dikkat / Takip',
    colorSwatch: 'bg-lime-700',
    colorHex: '#4D7C0F',
    severity: 'warning',
    scaleCode: 'Renk Kartı: No. 4 (Takip Gerektirir)',
    aiConfidence: '%96.4 Eşleşme',
    findings: 'Bağırsak florasında hafif irritasyon veya inek sütü proteini alerjisi (İSPA) ön sinyali.',
    guidance: 'Bebeğinizin sonraki 2 bezini daha fotoğraflayarak kaydedin. Kusma, huzursuzluk veya kilo alımında yavaşlama varsa çocuk hekiminizle paylaşınız.',
  },
];

/* Sample questions for Assistant Demo */
const presetQuestions = [
  {
    q: 'Bebeğim gece 03:30’da aniden uyandı ve bacaklarını karnına çekerek sürekli ağlıyor, ne yapabilirim?',
    a: 'Kıymetli anneciğim/babacığım, derin bir nefes al; bu durum 0–4 ay arası bebeklerde çok sık görülen klasik gaz ve infantil kolik krampına işaret ediyor. Bebeğini hafif dik pozisyonda kucağına alıp sırtını nazikçe yukarıdan aşağıya ovala. Bacaklarına yumuşakça "bisiklet çevirme" hareketi yaptırabilir ve karnına ılık avuç içinle saat yönünde dairesel masaj uygulayabilirsin. Eğer ateşi 38°C üzerindeyse veya kusma eşlik ediyorsa hekimine başvurmayı unutma.',
  },
  {
    q: 'Bebeğim 4. ayını bitirdi, ek gıdaya ve meyve sularına ne zaman başlamalıyız?',
    a: 'Güzel yavrumuzun büyüme adımları ne heyecan verici! Dünya Sağlık Örgütü ve çocuk hekimlerimizin altın standardı: Bebeğinizin ilk 6 ay boyunca SADECE anne sütü (veya hekiminizin önerdiği formül mama) ile beslenmesidir. 6. aydan önce erken ek gıda başlanması bebeğin henüz olgunlaşmamış böbreklerini ve bağırsak florasını yorabilir. 6. ay dolduğunda tekli sebze tadımlarıyla başlamak en güvenli yoldur.',
  },
  {
    q: 'Bebeğim 3 aylık, sürekli sadece sağ tarafına dönüp yatıyor, sol tarafına pek bakmıyor. Bu bir sorun mu?',
    a: 'Bu çok değerli bir erken gözlem, tebrik ederim! Bebeklerin tek bir yönü sürekli tercih etmesi "pozisyonel tortikollis" veya boyun kaslarındaki hafif bir gerginlikten kaynaklanabilir. Bebeğinizi uyanıkken gün içinde yere yüzüstü (tummy time) yatırıp renkli oyuncakları sol tarafına koyarak sola bakmasını teşvik edin. Birkaç gün içinde asimetri devam ederse BabySensAI hareket videosunu çekip hekiminiz veya pediatrik fizyoterapistiniz ile paylaşmanız harika bir erken önlem olur.',
  },
];

export default function InteractiveSandbox() {
  const [activeTab, setActiveTab] = useState<'stool' | 'chat'>('stool');

  // Stool Test States
  const [selectedStool, setSelectedStool] = useState<StoolSample>(stoolSamples[1]); // Default to sample 2 to show early detection power
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  // Chat Test States
  const [selectedQuestion, setSelectedQuestion] = useState(presetQuestions[0]);
  const [displayedAnswer, setDisplayedAnswer] = useState(presetQuestions[0].a);
  const [customQuestion, setCustomQuestion] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const runStoolScan = (sample: StoolSample) => {
    setSelectedStool(sample);
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 1400);
  };

  const handleSelectQuestion = (qObj: typeof presetQuestions[0]) => {
    setSelectedQuestion(qObj);
    setIsTyping(true);
    setDisplayedAnswer('');
    let i = 0;
    const text = qObj.a;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedAnswer(text.slice(0, i + 3));
        i += 3;
      } else {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 20);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;
    const newQ = {
      q: customQuestion,
      a: `Canım ailemiz, sorduğunuz "${customQuestion}" sorusu gelişim sürecinde çok önemlidir. 0–24 ay rehberliğimizde bebeğinizin ayına uygun güvenli adımlar, sakinleştirici rutinler ve gerektiğinde hekim yönlendirmeleri uzmanlarımız tarafından 7/24 yanınızdadır.`,
    };
    handleSelectQuestion(newQ);
    setCustomQuestion('');
  };

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-white via-soft-gray/30 to-slate-50 relative overflow-hidden" id="canli-demo">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-coral/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-turquoise bg-turquoise/10 border border-turquoise/25 px-4 py-1.5 rounded-full mb-4">
            <Sparkles size={14} className="text-turquoise animate-spin" style={{ animationDuration: '6s' }} />
            <span>Canlı Deneyim Odası</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Teknolojimizi şimdi <br className="hidden sm:inline" />
            <span className="text-turquoise">bizzat test edin.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-navy/70 leading-relaxed font-normal">
            Aşağıdaki iki interaktif modülden birini seçerek yapay zekâ destekli bebek bezi dışkı analizini veya Dijital Büyükanne gece asistanını anında deneyimleyin.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab('stool')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === 'stool'
                  ? 'bg-navy text-white shadow-md'
                  : 'text-navy/70 hover:text-navy hover:bg-white/60'
              }`}
            >
              <Camera size={16} className={activeTab === 'stool' ? 'text-coral' : ''} />
              <span>AI Dışkı & Bez Renk Analizi</span>
            </button>

            <button
              onClick={() => setActiveTab('chat')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === 'chat'
                  ? 'bg-navy text-white shadow-md'
                  : 'text-navy/70 hover:text-navy hover:bg-white/60'
              }`}
            >
              <MessageSquare size={16} className={activeTab === 'chat' ? 'text-turquoise' : ''} />
              <span>7/24 Dijital Büyükanne Asistanı</span>
            </button>
          </div>
        </div>

        {/* TAB 1: STOOL & DIAPER SCANNER DEMO */}
        {activeTab === 'stool' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Sample Selectors */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-coral bg-coral/10 px-2.5 py-1 rounded-full">
                  Adım 1: Test Numunesi Seçin
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-navy leading-tight">
                Bebek Bezi Renk & Doku Taraması
              </h3>
              <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
                Yapay zekâ modelimiz, Dünya Sağlık Örgütü ve Sağlık Bakanlığı onaylı <strong>Dışkı Renk Kartı</strong> indekslerini piksel hassasiyetinde tarayarak safra tıkanıklığı (Biliyer Atrezi) riskini saniyeler içinde analiz eder.
              </p>

              {/* Sample Cards */}
              <div className="flex flex-col gap-2.5 mt-2">
                {stoolSamples.map((sample) => (
                  <button
                    key={sample.id}
                    onClick={() => runStoolScan(sample)}
                    className={`p-3.5 rounded-2xl text-left border transition-all flex items-center gap-3 ${
                      selectedStool.id === sample.id
                        ? 'bg-soft-gray border-turquoise shadow-md scale-[1.01]'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl shrink-0 ${sample.colorSwatch} shadow-inner flex items-center justify-center`}
                    >
                      <Camera size={16} className="text-navy/40" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-bold text-navy truncate">{sample.title}</p>
                        <span
                          className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                            sample.severity === 'normal'
                              ? 'bg-emerald-100 text-emerald-700'
                              : sample.severity === 'critical'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-amber-100 text-amber-700'
                          }`}
                        >
                          {sample.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-navy/60 truncate mt-0.5">{sample.subtitle}</p>
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => runStoolScan(selectedStool)}
                disabled={isScanning}
                className="w-full py-3 rounded-xl bg-turquoise hover:bg-turquoise/90 text-navy font-bold text-xs sm:text-sm shadow-md shadow-turquoise/20 flex items-center justify-center gap-2 transition-all mt-2 disabled:opacity-60"
              >
                {isScanning ? (
                  <span>Nöral Piksel Taraması Yapılıyor...</span>
                ) : (
                  <>
                    <Camera size={16} />
                    <span>Seçili Numuneyi Analiz Et</span>
                  </>
                )}
              </button>
            </div>

            {/* Right Column: Simulated Camera Viewfinder & Report */}
            <div className="lg:col-span-7 bg-navy rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl">
              {/* Top scanner reticle */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                  <span className="text-[11px] font-mono text-turquoise tracking-wider font-bold">
                    BABYSENSAI OPUS SCAN v2.4
                  </span>
                </div>
                <span className="text-[10px] font-mono text-white/50">{selectedStool.scaleCode}</span>
              </div>

              {/* Viewfinder Center Box */}
              <div className="relative aspect-video rounded-2xl bg-black/40 border border-white/20 p-4 flex flex-col items-center justify-center overflow-hidden">
                {/* Laser scan line animation */}
                {isScanning && (
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-turquoise to-transparent animate-pulse top-1/2 -translate-y-1/2 shadow-lg shadow-turquoise" />
                )}

                {/* Sample visual preview */}
                <div
                  className={`w-24 h-24 rounded-full ${selectedStool.colorSwatch} shadow-2xl flex items-center justify-center relative transition-transform duration-500 ${
                    isScanning ? 'scale-110' : 'scale-100'
                  }`}
                >
                  <div className="absolute inset-0 rounded-full border-2 border-white/40 border-dashed animate-spin" style={{ animationDuration: '20s' }} />
                  <span className="text-[10px] font-mono font-bold text-navy/70 bg-white/80 px-2 py-0.5 rounded-full">
                    {selectedStool.colorHex}
                  </span>
                </div>

                <p className="text-xs font-mono text-white/70 mt-3">
                  {isScanning ? 'Piksel spektrumu ve kilsi renk kartı taranıyor...' : 'Görüntü İşleme Hazır'}
                </p>
              </div>

              {/* Analysis Result Output Card */}
              <div className="mt-4 p-4 rounded-2xl bg-white/10 border border-white/15">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                      selectedStool.severity === 'normal'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                        : selectedStool.severity === 'critical'
                        ? 'bg-red-500/20 text-red-300 border border-red-400/30 animate-pulse'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
                    }`}
                  >
                    {selectedStool.badge} ({selectedStool.aiConfidence})
                  </span>
                  <span className="text-[11px] font-mono text-turquoise font-bold">
                    {selectedStool.scaleCode}
                  </span>
                </div>

                <p className="text-xs text-white/90 font-medium leading-relaxed mb-2">
                  <strong className="text-turquoise">Tespit:</strong> {selectedStool.findings}
                </p>

                <div
                  className={`p-3 rounded-xl text-xs leading-relaxed border ${
                    selectedStool.severity === 'critical'
                      ? 'bg-red-950/60 border-red-500/40 text-red-200'
                      : 'bg-white/5 border-white/10 text-white/80'
                  }`}
                >
                  <strong className="block mb-0.5">Uzman Klinik Yönlendirmesi:</strong>
                  {selectedStool.guidance}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: 7/24 DIGITAL GRANDMOTHER CHAT DEMO */}
        {activeTab === 'chat' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Preset Questions */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-turquoise bg-turquoise/10 px-2.5 py-1 rounded-full">
                  Gece 03:00&apos;te Yanınızda
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-navy leading-tight">
                Dijital Büyükanne&apos;ye Canlı Soru Sorun
              </h3>
              <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
                Tıbbi bilgi kirliliği ve panik yerine; pediatri temelli, sevgi dolu ve sakinleştirici rehberlik. Aşağıdaki sık karşılaşılan ebeveyn sorularından birini seçin:
              </p>

              {/* Preset question pills */}
              <div className="flex flex-col gap-2.5 mt-2">
                {presetQuestions.map((qObj, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectQuestion(qObj)}
                    className={`p-3 rounded-2xl text-left border transition-all text-xs font-medium flex items-start gap-2.5 ${
                      selectedQuestion.q === qObj.q
                        ? 'bg-navy text-white border-navy shadow-md'
                        : 'bg-slate-50 text-navy hover:bg-turquoise/10 border-slate-200'
                    }`}
                  >
                    <HelpCircle size={16} className="shrink-0 mt-0.5 text-turquoise" />
                    <span className="line-clamp-2">{qObj.q}</span>
                  </button>
                ))}
              </div>

              {/* Custom question form */}
              <form onSubmit={handleCustomSubmit} className="mt-2 flex gap-2">
                <input
                  type="text"
                  placeholder="Kendi sorunuzu yazın (örn: Diş çıkarma ateşi)..."
                  value={customQuestion}
                  onChange={(e) => setCustomQuestion(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-navy focus:bg-white focus:border-turquoise focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-turquoise hover:bg-turquoise/90 text-navy font-bold text-xs shrink-0 flex items-center justify-center transition-all"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>

            {/* Right Column: Chat Interface Mockup */}
            <div className="lg:col-span-7 bg-[#082A46] rounded-3xl p-6 text-white shadow-2xl flex flex-col justify-between min-h-[420px]">
              
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-turquoise to-emerald-400 flex items-center justify-center text-navy font-bold text-sm shadow-md">
                    👵🏻
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                      Dijital Büyükanne
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </h4>
                    <p className="text-[10px] text-turquoise">7/24 Şefkatli Pediatrik Rehber</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-white/50">Gece Modu Aktif</span>
              </div>

              {/* Chat Message History */}
              <div className="flex-1 flex flex-col gap-3.5 justify-center py-2">
                
                {/* User Bubble */}
                <div className="self-end max-w-[85%] bg-white/15 backdrop-blur-sm border border-white/20 p-3.5 rounded-2xl rounded-tr-none text-xs text-white leading-relaxed">
                  <p className="font-medium">{selectedQuestion.q}</p>
                  <span className="block text-[9px] text-white/50 text-right mt-1">03:32 • Siz</span>
                </div>

                {/* Grandmother Response Bubble */}
                <div className="self-start max-w-[90%] bg-gradient-to-br from-turquoise/25 via-navy/90 to-transparent border border-turquoise/40 p-4 rounded-2xl rounded-tl-none text-xs text-white leading-relaxed shadow-lg">
                  <div className="flex items-center gap-1.5 text-turquoise text-[10px] font-bold mb-1.5">
                    <Heart size={12} className="text-coral fill-coral" />
                    <span>Şefkatli Rehberlik</span>
                  </div>
                  <p className="text-white/95 text-xs sm:text-[13px] leading-relaxed">
                    {displayedAnswer}
                    {isTyping && <span className="inline-block w-1.5 h-3.5 bg-turquoise animate-ping ml-1" />}
                  </p>
                  <span className="block text-[9px] text-turquoise/70 mt-2">03:32 • DijitalBüyükanne AI</span>
                </div>

              </div>

              {/* Chat Footer Note */}
              <div className="border-t border-white/10 pt-3 mt-2 text-center">
                <p className="text-[10px] text-white/50">
                  ⚠️ Bilgilendirme amaçlıdır; tıbbi acil durumlarda lütfen doğrudan 112 veya çocuk hekiminize başvurunuz.
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
