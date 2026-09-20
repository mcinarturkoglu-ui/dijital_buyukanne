import { MessageCircle, Moon } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import PhoneMockup from '@/components/ui/PhoneMockup';

const topics = ['Uyku', 'Beslenme', 'Emzirme', 'Gelişim', 'Bakım'];

function ChatPhoneContent() {
  return (
    <div className="h-full flex flex-col bg-[#0D1F30]">
      {/* Chat header */}
      <div className="bg-turquoise px-3 py-3 flex items-center gap-2 flex-shrink-0">
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <MessageCircle className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-white font-bold text-xs leading-none">DijitalBüyükanne</p>
          <p className="text-white/70 text-[8px] mt-0.5">Çevrimiçi • 7/24</p>
        </div>
        <div className="ml-auto w-2 h-2 rounded-full bg-green-400 shadow-sm" />
      </div>

      {/* Chat messages */}
      <div className="flex-1 px-3 py-3 flex flex-col gap-3 overflow-hidden">
        <p className="text-center text-[7px] text-white/30 font-medium">Gece 03:12</p>

        {/* User bubble */}
        <div className="flex justify-end">
          <div className="bg-white/10 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[80%]">
            <p className="text-white text-[8px] leading-relaxed">
              Bebeğim gece çok sık uyanıyor. Ne yapabilirim?
            </p>
          </div>
        </div>

        {/* Assistant bubble */}
        <div className="flex justify-start">
          <div className="bg-turquoise rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
            <p className="text-white text-[8px] leading-relaxed">
              Merhaba! Bu çok yaygın bir durum. 0–6 ay arası bebeklerde gece uyanmaları normaldir.
              Uyku rutini oluşturmak yardımcı olabilir.
            </p>
            <div className="mt-1.5 flex flex-col gap-0.5">
              {['Uyku saatini sabitleyin', 'Uyku öncesi rutin oluşturun', 'Ortamı karartın'].map((tip) => (
                <p key={tip} className="text-white/80 text-[7px] flex items-start gap-1">
                  <span className="text-white font-bold mt-0.5">·</span> {tip}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Second user bubble */}
        <div className="flex justify-end">
          <div className="bg-white/10 rounded-2xl rounded-tr-sm px-3 py-2 max-w-[75%]">
            <p className="text-white text-[8px] leading-relaxed">
              Ne zaman doktora gitmeliyim?
            </p>
          </div>
        </div>

        {/* Second assistant bubble */}
        <div className="flex justify-start">
          <div className="bg-turquoise rounded-2xl rounded-tl-sm px-3 py-2 max-w-[85%]">
            <p className="text-white text-[8px] leading-relaxed">
              Bebek ateşleniyorsa veya beslenemiyorsa doktorunuza başvurmanızı öneririm.
            </p>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="flex-shrink-0 px-3 pb-3 pt-2">
        <div className="bg-white/10 rounded-full flex items-center px-3 py-2 gap-2">
          <p className="text-white/30 text-[8px] flex-1">Mesajınızı yazın...</p>
          <div className="w-5 h-5 rounded-full bg-turquoise flex items-center justify-center">
            <MessageCircle className="w-2.5 h-2.5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DigitalAssistant() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-navy">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-8">
            <SectionHeader
              eyebrow="Dijital Aile Asistanı"
              title="Anne ve babaların soruları mesai saatlerini beklemez."
              light
            />

            {/* Big bold night tagline */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-turquoise/20 border border-turquoise/30 flex items-center justify-center flex-shrink-0">
                <Moon className="w-6 h-6 text-turquoise" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Gece 03.00&apos;te<br />bile yanında.
              </p>
            </div>

            {/* Topic pills */}
            <div className="flex flex-col gap-3">
              <p className="text-sm text-white/50 font-medium">Konu başlıkları</p>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-4 py-2 rounded-full border border-turquoise/40 bg-turquoise/10 text-turquoise text-sm font-semibold"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom text */}
            <p className="text-white/60 text-sm leading-relaxed border-t border-white/10 pt-6">
              0–24 ay boyunca yaşa uygun dijital rehberlik.
            </p>
          </div>

          {/* Right: Phone mockup */}
          <div className="flex justify-center">
            <PhoneMockup size="md" dark label="Dijital Asistan">
              <ChatPhoneContent />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
}
