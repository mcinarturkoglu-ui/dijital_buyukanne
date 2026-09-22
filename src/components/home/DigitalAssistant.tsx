'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, Moon, Play, Pause, Volume2, Sparkles, Send, Bot, HeartHandshake } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import PhoneMockup from '@/components/ui/PhoneMockup';

const topicsData = [
  {
    topic: 'Uyku & Gece Uyanmaları',
    audioTitle: 'Gece Uyanmaları & Güvenli Uyku Tavsiyesi',
    audioDuration: '00:42',
    transcript:
      'Canım benim hiç telaşlanma. Bebeğin bu ayda büyüme atağında olduğu için gece sık uyanabilir. Sakin bir sesle kucağına al, ışığı yakmadan pışpışla ve karnını nazikçe ov...',
    userMessage: 'Bebeğim gece 03:00’te aniden ağlayarak uyandı, ne yapabilirim?',
    assistantResponse:
      'Merhaba sevgili anne/baba! Gece 03:00 uyanmaları büyüme ataklarında çok yaygındır. Ortamı karartın, doğrudan göz temasını azaltarak fısıltı tonunda konuşun. Ateş veya huzursuzluk belirtisi yoksa sakinleşip uykuya geçişini bekleyin.',
    tips: ['Odayı loş ve serin tutun (21-22°C)', 'Beyaz gürültü / pışpış sesi açın', 'Işıkları açmadan sakinleştirin'],
  },
  {
    topic: 'Gaz Sancısı & Masaj',
    audioTitle: 'Gaz Çıkarma ve Karın Masajı Rehberi',
    audioDuration: '00:38',
    transcript:
      'Yavrumun bacaklarını bisiklet çevirir gibi nazikçe karnına doğru it. Saat yönünde dairesel hareketlerle göbeğinin etrafını sıvazla. Rahatladığını hissedeceksin...',
    userMessage: 'Karnı çok sert ve bacaklarını karnına çekip ağlıyor.',
    assistantResponse:
      'Bu tipik bir gaz sancısı belirtisi olabilir. Bebeğinizi dizlerinize yüzüstü yatırıp sırtını sıvazlayabilir veya bacaklarını bisiklet hareketiyle nazikçe hareket ettirebilirsiniz.',
    tips: ['Bisiklet çevirme hareketi uygulayın', 'Ilık banyo veya ılık havlu desteği', 'Beslenme sonrası dik tutun'],
  },
  {
    topic: 'Emzirme & Beslenme',
    audioTitle: 'Doğru Kavrama ve Tokluk İpuçları',
    audioDuration: '00:45',
    transcript:
      'Bebeğin memeyi tam kavraması için çenesinin iyice yaslandığından ve alt dudağının dışa kıvrıldığından emin ol. Acele etme, sakin bir nefes al...',
    userMessage: 'Yeterince doyup doymadığını nasıl anlarım?',
    assistantResponse:
      'Bebeğinizin günde 5-6 kez bezini ıslatması ve kilo alımının düzenli olması en net tokluk göstergesidir. Meme ucunun tam kavranması emmeyi çok daha verimli kılar.',
    tips: ['Günde 5-6 ıslak bez takibi', 'Memeyi tam kavrama açısı', 'Anne için bol su tüketimi'],
  },
];

function ChatPhoneContent({
  activeTopicData,
  isPlayingAudio,
  setIsPlayingAudio,
}: {
  activeTopicData: (typeof topicsData)[0];
  isPlayingAudio: boolean;
  setIsPlayingAudio: (val: boolean) => void;
}) {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsTyping(true);
    const timer = setTimeout(() => setIsTyping(false), 900);
    return () => clearTimeout(timer);
  }, [activeTopicData]);

  return (
    <div className="h-full flex flex-col bg-[#071927] text-white select-none">
      {/* Chat header */}
      <div className="bg-gradient-to-r from-[#0b2842] to-[#0f3454] px-3.5 py-3 flex items-center justify-between border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-turquoise to-teal-400 flex items-center justify-center text-navy font-black shadow-md">
            👵
          </div>
          <div>
            <p className="text-white font-bold text-xs leading-none">DijitalBüyükanne</p>
            <p className="text-emerald-400 text-[8px] mt-0.5 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Canlı Nöbetçi Rehber • 7/24
            </p>
          </div>
        </div>
        <span className="text-[9px] bg-turquoise/20 text-turquoise border border-turquoise/40 px-2.5 py-0.5 rounded-full font-mono font-bold">
          BabySensAI
        </span>
      </div>

      {/* Embedded Audio Voice Note Widget */}
      <div className="bg-slate-900/90 border-b border-white/10 p-2.5 flex items-center gap-2.5">
        <button
          onClick={() => setIsPlayingAudio(!isPlayingAudio)}
          className="w-8 h-8 rounded-xl bg-coral hover:bg-coral/80 text-white flex items-center justify-center shrink-0 transition-colors shadow-sm cursor-pointer"
          title={isPlayingAudio ? 'Durdur' : 'Sesli Notu Dinle'}
        >
          {isPlayingAudio ? <Pause size={13} /> : <Play size={13} className="ml-0.5" />}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold text-white/90 truncate flex items-center gap-1">
              <Volume2 size={10} className="text-coral" />
              <span>Büyükanne Sesli Notu</span>
            </span>
            <span className="text-[8px] font-mono text-white/50">{activeTopicData.audioDuration}</span>
          </div>

          {/* Soundwave line inside phone */}
          <div className="flex items-center gap-0.5 h-3 mt-1">
            {[40, 80, 50, 90, 60, 30, 85, 70, 95, 40, 60, 80, 50].map((h, i) => (
              <span
                key={i}
                className={`flex-1 rounded-full transition-all duration-150 ${
                  isPlayingAudio ? 'bg-turquoise animate-soundwave' : 'bg-white/20'
                }`}
                style={{
                  height: isPlayingAudio ? `${h}%` : '20%',
                  animationDelay: `${(i % 5) * 0.15}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Chat scroll body */}
      <div className="flex-1 p-3 overflow-y-auto space-y-3">
        {/* User Question Bubble */}
        <div className="flex justify-end">
          <div className="max-w-[85%] bg-coral text-white text-[11px] p-2.5 rounded-2xl rounded-tr-sm shadow-md leading-relaxed">
            <p className="font-medium">{activeTopicData.userMessage}</p>
            <span className="text-[8px] opacity-70 block text-right mt-1 font-mono">03:14</span>
          </div>
        </div>

        {/* Assistant Response Bubble */}
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-turquoise/20 flex items-center justify-center text-xs shrink-0 mt-1">
            👵
          </div>
          <div className="max-w-[85%] bg-slate-900 border border-white/10 text-white text-[11px] p-3 rounded-2xl rounded-tl-sm shadow-md space-y-2 leading-relaxed">
            {isTyping ? (
              <div className="flex items-center gap-1 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-turquoise animate-bounce [animation-delay:0.4s]" />
              </div>
            ) : (
              <>
                <p className="text-white/90">{activeTopicData.assistantResponse}</p>
                <div className="pt-2 border-t border-white/10 space-y-1">
                  <span className="text-[9px] font-bold text-turquoise block">💡 Tavsiye Edilen Adımlar:</span>
                  {activeTopicData.tips.map((t, idx) => (
                    <p key={idx} className="text-[9px] text-white/70 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-turquoise shrink-0" />
                      <span>{t}</span>
                    </p>
                  ))}
                </div>
                <span className="text-[8px] text-white/40 block text-right font-mono">03:15 • BabySensAI Onaylı</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Chat input bar */}
      <div className="p-2.5 bg-slate-900 border-t border-white/10 flex items-center gap-2 shrink-0">
        <input
          type="text"
          placeholder="Sorunuzu buraya yazın..."
          readOnly
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-[10px] text-white/80 placeholder:text-white/30 focus:outline-none"
        />
        <button className="w-7 h-7 rounded-xl bg-turquoise text-navy flex items-center justify-center hover:bg-white transition-colors shrink-0">
          <Send size={12} />
        </button>
      </div>
    </div>
  );
}

export default function DigitalAssistant() {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const activeTopic = topicsData[activeTopicIndex];

  return (
    <section
      className="py-20 md:py-28 px-4 md:px-8 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #051624 0%, #082A46 50%, #0a3355 100%)',
      }}
      id="dijitalbuyukanne"
    >
      {/* Background ambient lighting & grid overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-turquoise/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 -left-24 w-[400px] h-[400px] bg-coral/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text & Audio Voice Experience (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <SectionHeader
              eyebrow="7/24 Dijital Aile Asistanı & Sesli Rehber"
              title="Anne ve babaların soruları mesai saatlerini beklemez."
              light
            />

            {/* Big bold night tagline */}
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-turquoise/20 to-turquoise/5 border border-turquoise/40 flex items-center justify-center shrink-0 shadow-lg shadow-turquoise/10 animate-float-slow">
                <Moon className="w-7 h-7 text-turquoise" />
              </div>
              <div>
                <p className="text-2xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
                  Gece 03.00&apos;te <span className="text-transparent bg-clip-text bg-gradient-to-r from-turquoise to-teal-300">bile yanınızda.</span>
                </p>
                <p className="text-white/70 text-xs sm:text-sm mt-1">
                  Yapay zekâ hızı ve anneanne şefkatiyle bilimsel rehberlik.
                </p>
              </div>
            </div>

            {/* Interactive Voice Note Preview Card */}
            <div className="glass-card-dark rounded-3xl p-6 shadow-2xl relative overflow-hidden border border-white/15">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-coral animate-ping" />
                  <span className="text-xs font-bold text-coral uppercase tracking-wider">
                    Sesli Büyükanne Rehberi
                  </span>
                </div>
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-coral to-[#e8634f] hover:bg-coral/80 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer active:scale-98"
                >
                  {isPlayingAudio ? <Pause size={13} /> : <Play size={13} />}
                  <span>{isPlayingAudio ? 'Durdur' : 'Sesli Dinle'}</span>
                </button>
              </div>

              {/* Spoken Quote Transcript */}
              <blockquote className="text-white/90 text-sm md:text-base italic leading-relaxed pl-4 border-l-2 border-turquoise">
                &ldquo;{activeTopic.transcript}&rdquo;
              </blockquote>

              {/* Dynamic Soundwave Visualizer in Large format */}
              <div className="mt-5 flex items-center gap-1 h-7">
                {[20, 50, 85, 100, 40, 70, 95, 30, 60, 85, 100, 50, 75, 40, 90, 65, 35, 80, 55, 100, 45, 70, 90, 30, 60, 85].map((h, idx) => (
                  <span
                    key={idx}
                    className={`flex-1 rounded-full transition-all duration-200 ${
                      isPlayingAudio ? 'bg-gradient-to-t from-turquoise via-teal-300 to-white animate-soundwave' : 'bg-white/20'
                    }`}
                    style={{
                      height: isPlayingAudio ? `${h}%` : '15%',
                      animationDelay: `${(idx % 6) * 0.12}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Topic Selector Pills */}
            <div className="flex flex-col gap-2.5">
              <p className="text-xs text-white/60 font-bold uppercase tracking-wider">Konu Başlığını Seçin</p>
              <div className="flex flex-wrap gap-2.5">
                {topicsData.map((item, idx) => (
                  <button
                    key={item.topic}
                    onClick={() => {
                      setActiveTopicIndex(idx);
                      setIsPlayingAudio(true);
                    }}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                      activeTopicIndex === idx
                        ? 'bg-turquoise text-navy shadow-lg shadow-turquoise/20 scale-105 ring-2 ring-turquoise/40'
                        : 'border border-turquoise/40 bg-turquoise/10 text-turquoise hover:bg-turquoise/20'
                    }`}
                  >
                    {item.topic}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Phone Mockup (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative animate-float-slow">
              <div className="absolute inset-0 bg-turquoise/25 rounded-[40px] blur-3xl opacity-40 scale-95" />
              <PhoneMockup size="md" dark label="7/24 Canlı Aile Asistanı">
                <ChatPhoneContent
                  activeTopicData={activeTopic}
                  isPlayingAudio={isPlayingAudio}
                  setIsPlayingAudio={setIsPlayingAudio}
                />
              </PhoneMockup>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
