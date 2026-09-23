'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  X, 
  Play, 
  Pause, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Activity, 
  ScanLine, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';

export default function SystemStoryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Sahne bilgileri
  const scenes = [
    {
      id: 'ecosystem-intro',
      eyebrow: '01. BÖLÜM: BİLİM, ŞEFKAT VE YAPAY ZEKÂ BULUŞTU',
      title: 'Her Bebeğin Bir Dijital Büyükannesi Olsun',
      description:
        'Bir bebek dünyaya geldiğinde aile için her şey değişir. DijitalBüyükanne; modern tıbbın kanıta dayalı gücünü, bir anneannenin şefkatli bilgeliğini ve en ileri yapay zekâyı aynı çatıda buluşturur. 0–24 ay boyunca hareket analizinden 7/24 rehberliğe kadar ailenizin güvenli sığınağıdır.',
      accentColor: '#FF5A43', // Coral
      tag: 'Bütünleşik Aile Ekosistemi',
      renderVisual: () => (
        <div className="relative w-full h-64 sm:h-72 flex items-center justify-center bg-gradient-to-b from-[#0f1738] via-[#091029] to-[#040714] rounded-3xl overflow-hidden border border-sky-400/25 p-4 sm:p-6 select-none">
          {/* Ambient glowing radial effects */}
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-coral/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }} />

          {/* Subtle Cyber Grid */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#38bdf8 1.2px, transparent 1.2px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Central 3D Mascot Showcase */}
          <div className="relative flex flex-col items-center justify-center z-10 space-y-4">
            {/* Holographic Concentric Rings & Mascot Container */}
            <div className="relative flex items-center justify-center">
              {/* Outer Dashed Rotating Cyber Ring */}
              <div className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-dashed border-sky-400/35 animate-spin-slow pointer-events-none" />

              {/* Middle Pulsing Aura Ring */}
              <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-teal-400/30 animate-pulse pointer-events-none" />

              {/* Soft Backlight Glow */}
              <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-sky-400/30 via-teal-400/20 to-coral/30 blur-2xl animate-pulse" />

              {/* 3D Mascot Glass Capsule */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-white/15 to-slate-950/80 border-2 border-sky-400/50 backdrop-blur-md flex items-center justify-center p-2.5 shadow-[0_0_40px_rgba(56,189,248,0.4)] group overflow-hidden">
                <Image
                  src="/images/mascot.png"
                  alt="Dijital Büyükanne 3D Maskot"
                  width={140}
                  height={140}
                  className="w-full h-full object-contain drop-shadow-2xl animate-subtle-float"
                  priority
                />
              </div>

              {/* Floating AI Shield Tag at Top */}
              <div className="absolute -top-3 bg-gradient-to-r from-sky-500 via-teal-500 to-[#00A896] text-white text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-xl border border-white/30 flex items-center gap-1.5 whitespace-nowrap animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                <span>Yapay Zekâ Koruma Kalkanı</span>
              </div>

              {/* Floating 0-24 Ay Badge at Bottom */}
              <div className="absolute -bottom-2 bg-gradient-to-r from-coral to-coral-600 text-white text-[9px] sm:text-[10px] font-extrabold px-3.5 py-0.5 rounded-full shadow-lg border border-white/20 whitespace-nowrap">
                0–24 Ay İzlem
              </div>

              {/* Ambient Floating Tech Sparks */}
              <span className="absolute top-2 -left-8 text-cyan-300 text-sm animate-bounce" style={{ animationDuration: '3s' }}>✨</span>
              <span className="absolute bottom-4 -right-8 text-amber-300 text-sm animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.6s' }}>⭐</span>
            </div>

            {/* Bottom Slogan Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs font-semibold backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>Teknoloji Aileyi Korur, Şefkat Evi Sarar</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'motion-gma',
      eyebrow: '02. BÖLÜM: SİSTEMİN TEMELİ: 0–6 AY HAREKET ANALİZİ',
      title: 'Prechtl GMA ile Erken Teşhis: Geleceği Korumak',
      description:
        'Sistemimizin temel yapıtaşı 0–6 ay video tabanlı nöromotor taramadır. Evde çekilen 2-3 dakikalık doğal hareket videosu, 18 eklem noktasını tarayan BabySensAI ile analiz edilir; serebral palsi ve gelişimsel riskler henüz klinik belirti vermeden, en kritik ilk 6 aylık erken müdahale penceresinde tespit edilir.',
      accentColor: '#0284C7', // Sky Blue
      tag: 'Temel Yapıtaşı • Nöromotor Erken Teşhis',
      renderVisual: () => (
        <div className="relative w-full h-56 sm:h-64 flex items-center justify-center bg-gradient-to-b from-[#071d33] to-[#04101e] rounded-3xl overflow-hidden border border-sky-400/30 p-4">
          {/* Kinematic tracking laser scanline */}
          <div className="absolute inset-x-4 top-8 bottom-8 border border-sky-400/20 rounded-2xl pointer-events-none flex flex-col justify-between overflow-hidden">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#38bdf8] animate-shimmer-sweep" />
          </div>

          {/* Wireframe Baby Skeleton HUD */}
          <div className="relative w-full max-w-xs flex flex-col items-center justify-center z-10 space-y-2">
            {/* Camera Frame & Skeleton Node Box */}
            <div className="w-full bg-slate-950/80 border border-sky-400/50 rounded-2xl p-3 shadow-2xl relative">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[9px]">
                <span className="text-cyan-300 font-mono font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  Prechtl GMA Kinematik İzlem
                </span>
                <span className="bg-sky-500/20 text-sky-200 border border-sky-400/40 px-2 py-0.5 rounded text-[8px] font-mono font-bold">
                  18 Eklem Aktif
                </span>
              </div>

              {/* Skeleton Wireframe Illustration */}
              <div className="h-24 my-1 flex items-center justify-center relative">
                <svg viewBox="0 0 200 80" className="w-full h-full max-h-24">
                  {/* Spine & Head */}
                  <circle cx="100" cy="20" r="8" fill="#38BDF8" opacity="0.8" className="animate-pulse" />
                  <line x1="100" y1="28" x2="100" y2="52" stroke="#38BDF8" strokeWidth="2.5" />
                  
                  {/* Left Arm Nodes & Bones */}
                  <line x1="100" y1="32" x2="75" y2="28" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="3 2" />
                  <line x1="75" y1="28" x2="58" y2="40" stroke="#0EA5E9" strokeWidth="2" />
                  <circle cx="75" cy="28" r="3.5" fill="#38BDF8" />
                  <circle cx="58" cy="40" r="3" fill="#22D3EE" />

                  {/* Right Arm Nodes & Bones */}
                  <line x1="100" y1="32" x2="125" y2="28" stroke="#0EA5E9" strokeWidth="2" strokeDasharray="3 2" />
                  <line x1="125" y1="28" x2="142" y2="40" stroke="#0EA5E9" strokeWidth="2" />
                  <circle cx="125" cy="28" r="3.5" fill="#38BDF8" />
                  <circle cx="142" cy="40" r="3" fill="#22D3EE" />

                  {/* Left Leg Nodes & Bones */}
                  <line x1="100" y1="52" x2="80" y2="65" stroke="#38BDF8" strokeWidth="2" />
                  <line x1="80" y1="65" x2="68" y2="55" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 2" />
                  <circle cx="80" cy="65" r="3.5" fill="#38BDF8" />
                  <circle cx="68" cy="55" r="3" fill="#22D3EE" />

                  {/* Right Leg Nodes & Bones */}
                  <line x1="100" y1="52" x2="120" y2="65" stroke="#38BDF8" strokeWidth="2" />
                  <line x1="120" y1="65" x2="132" y2="55" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 2" />
                  <circle cx="120" cy="65" r="3.5" fill="#38BDF8" />
                  <circle cx="132" cy="55" r="3" fill="#22D3EE" />

                  {/* Center Core Node */}
                  <circle cx="100" cy="42" r="4" fill="#F43F5E" className="animate-ping" style={{ transformOrigin: '100px 42px' }} />
                </svg>

                {/* Radar Grid overlay */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
                    backgroundSize: '10px 10px',
                  }}
                />
              </div>

              {/* Status Badges */}
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                <div className="bg-emerald-500/15 border border-emerald-400/30 rounded-lg p-1 text-[8px] flex items-center justify-between">
                  <span className="text-emerald-300 font-bold">Fidgety Movements</span>
                  <span className="text-emerald-400 font-bold font-mono">Normal</span>
                </div>
                <div className="bg-sky-500/15 border border-sky-400/30 rounded-lg p-1 text-[8px] flex items-center justify-between">
                  <span className="text-sky-200 font-bold">Motor Simetri</span>
                  <span className="text-cyan-300 font-bold font-mono">%98.4</span>
                </div>
              </div>
            </div>

            {/* Bottom Highlight Callout */}
            <div className="bg-sky-500/20 border border-sky-400/30 px-3 py-1 rounded-full text-[9px] font-bold text-sky-200 flex items-center gap-1.5 backdrop-blur-md">
              <CheckCircle2 size={12} className="text-cyan-300" />
              <span>0–6 Ay Erken Müdahale Penceresi Açık</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'chatbot-assistant',
      eyebrow: '03. BÖLÜM: 7/24 DİJİTAL BÜYÜKANNE ASİSTANI (CHATBOT)',
      title: 'Sorular Mesai Saati Tanımaz: Gece 03:00\'te Bile Yanınızda',
      description:
        'Bebeğiniz sabaha karşı ağladığında, ateşi çıktığında veya emzirme zorlaştığında internetteki çelişkili bilgiler arasında kaybolmayın. Dijital Büyükanne Chatbot; kanıta dayalı pediatrik protokoller ve anneanne şefkatiyle saniyeler içinde yanınızda.',
      accentColor: '#00A896', // Turquoise
      tag: '7/24 Kesintisiz • Şefkatli Pediatrik AI',
      renderVisual: () => (
        <div className="relative w-full h-56 sm:h-64 flex items-center justify-center bg-gradient-to-b from-[#0c2027] to-[#051115] rounded-3xl overflow-hidden border border-[#00A896]/30 p-3 sm:p-4">
          {/* Chat Mockup Window */}
          <div className="w-full max-w-sm bg-slate-950/85 backdrop-blur-md rounded-2xl border border-white/15 p-3 flex flex-col space-y-2 shadow-2xl relative">
            {/* Chat Header */}
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-teal-400 to-[#00A896] flex items-center justify-center text-sm shadow-md">
                  👵
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white flex items-center gap-1.5">
                    <span>Dijital Büyükanne</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <p className="text-[8px] text-teal-300 font-mono">Çevrim İçi • 7/24 AI Rehber</p>
                </div>
              </div>
              <span className="text-[8px] bg-white/10 text-slate-300 px-2 py-0.5 rounded-full font-mono">
                03:14 AM
              </span>
            </div>

            {/* Chat Bubble 1: Anne & Baba (User) */}
            <div className="flex justify-end">
              <div className="max-w-[85%] bg-gradient-to-r from-coral to-coral-600 text-white rounded-2xl rounded-tr-none px-3 py-1.5 shadow-md">
                <p className="text-[9px] sm:text-[10px] leading-snug">
                  &ldquo;Bebeğim 1 saattir ağlıyor, bacaklarını karnına çekiyor. Ne yapmalıyım?&rdquo;
                </p>
              </div>
            </div>

            {/* Chat Bubble 2: Büyükanne AI */}
            <div className="flex justify-start">
              <div className="max-w-[92%] bg-[#102228] border border-[#00A896]/40 rounded-2xl rounded-tl-none p-2.5 shadow-md space-y-1.5">
                <div className="flex items-center gap-1 text-[8px] text-teal-300 font-bold">
                  <Sparkles size={10} />
                  <span>Şefkatli Rehberlik & Pediatri Algoritması</span>
                </div>
                <p className="text-[9px] sm:text-[9.5px] text-slate-100 leading-snug">
                  &ldquo;Korkma canım, bu durum tipik gaz/kolik sancısı olabilir. Hemen uygulayalım:&rdquo;
                </p>
                <div className="bg-black/40 rounded-lg p-1.5 space-y-0.5 text-[8px] text-teal-100 font-medium">
                  <div className="flex items-center gap-1">
                    <span className="text-emerald-400">✓</span> 1. Ilık bezle saat yönünde dairesel karın masajı
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-emerald-400">✓</span> 2. Nazikçe bisiklet bacak egzersizi yaptırın
                  </div>
                </div>
                <div className="text-[7.5px] text-amber-300/90 font-medium flex items-center gap-1 pt-0.5">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  <span>Ateş veya 2 saati aşan durumlarda hemen hekime yönlendirilir.</span>
                </div>
              </div>
            </div>

            {/* Quick action topic tags */}
            <div className="flex items-center gap-1 pt-0.5 overflow-x-auto">
              <span className="text-[7.5px] bg-[#00A896]/20 text-teal-200 border border-[#00A896]/30 px-2 py-0.5 rounded-full shrink-0">
                😴 Uyku & Gaz Rutini
              </span>
              <span className="text-[7.5px] bg-sky-500/20 text-sky-200 border border-sky-400/30 px-2 py-0.5 rounded-full shrink-0">
                🍼 Beslenme
              </span>
              <span className="text-[7.5px] bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 px-2 py-0.5 rounded-full shrink-0">
                🩺 Hekime Danış
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'skin-stool',
      eyebrow: '04. BÖLÜM: 41 CİLT DURUMU & SİNDİRİM ANALİZİ',
      title: 'Evden Çıkmadan Anında Cilt & Bez Analizi',
      description:
        'Bebekte sık görülen kızarıklık, konak, bez pişiği veya sindirim değişimlerinde; anne veya baba tek bir fotoğrafla ön değerlendirme alır. 41 farklı pediatrik cilt lezyonu ve Bristol skalalı bez analiziyle panik yapmadan doğru bakım adımlarını öğrenir.',
      accentColor: '#FF5A43', // Coral
      tag: 'Görsel AI • 41 Cilt Durumu & Bez Taraması',
      renderVisual: () => (
        <div className="relative w-full h-56 sm:h-64 flex items-center justify-center bg-gradient-to-b from-[#1f1629] to-[#0c0915] rounded-3xl overflow-hidden border border-white/10 p-4">
          <div className="w-full max-w-sm grid grid-cols-2 gap-3 z-10">
            {/* Card 1: Cilt Analizi */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 space-y-2 flex flex-col justify-between shadow-lg">
              <div className="flex items-center justify-between text-[9px]">
                <span className="text-coral font-bold flex items-center gap-1">
                  <ScanLine size={12} />
                  Cilt Taraması
                </span>
                <span className="text-white/50 font-mono">41 Lezyon</span>
              </div>

              <div className="w-full h-16 bg-slate-900/80 rounded-xl relative overflow-hidden flex items-center justify-center border border-white/10">
                <span className="text-2xl">👶</span>
                <div className="absolute inset-1.5 border border-coral/40 rounded-lg animate-pulse" />
                <span className="absolute bottom-1 text-[7px] bg-coral/90 text-white px-1.5 rounded font-mono font-bold">
                  Bariyer Analizi
                </span>
              </div>

              <div className="bg-white/5 p-1.5 rounded-lg text-[8px] text-slate-200">
                <p className="font-bold text-coral">Hafif Isı Döküntüsü</p>
                <p className="text-white/60 text-[7px]">Serin tutma & nemlendirme</p>
              </div>
            </div>

            {/* Card 2: Bez & Dışkı Analizi */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 space-y-2 flex flex-col justify-between shadow-lg">
              <div className="flex items-center justify-between text-[9px]">
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <Activity size={12} />
                  Sindirim & Bez
                </span>
                <span className="text-white/50 font-mono">Bristol AI</span>
              </div>

              <div className="w-full h-16 bg-slate-900/80 rounded-xl relative overflow-hidden flex items-center justify-center border border-white/10">
                <span className="text-2xl">🍼</span>
                <div className="absolute inset-1.5 border border-emerald-400/40 rounded-lg animate-pulse" />
                <span className="absolute bottom-1 text-[7px] bg-emerald-600 text-white px-1.5 rounded font-mono font-bold">
                  Renk & Kıvam
                </span>
              </div>

              <div className="bg-white/5 p-1.5 rounded-lg text-[8px] text-slate-200">
                <p className="font-bold text-emerald-400">Normal Anne Sütü Bezi</p>
                <p className="text-white/60 text-[7px]">Hidrasyon dengesi sağlıklı</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'wisdom-growth',
      eyebrow: '05. BÖLÜM: HEKİM GÜVENCESİ & PANİKSİZ BÜYÜME',
      title: 'Yapay Zekâ Destekler, Hekim Karar Verir',
      description:
        'Sistem tek başına tanı koymaz; şüpheli veya asimetrik her durumda aileyi Pediatri Bilim Kurulu standartlarında hekime yönlendirir. İlk gülümsemeden ilk adıma kadar (0–24 ay) ebeveynin endişesi biter, huzurla büyüyen sağlıklı bir nesil kalır.',
      accentColor: '#10B981', // Emerald
      tag: '0–24 Ay Kesintisiz Huzur • Hekim Güvencesi',
      renderVisual: () => (
        <div className="relative w-full h-56 sm:h-64 flex items-center justify-center bg-gradient-to-b from-[#0e2722] to-[#061614] rounded-3xl overflow-hidden border border-emerald-400/30 p-3 sm:p-4">
          <div className="w-full max-w-md flex flex-col items-center justify-center space-y-2.5 z-10">
            {/* Top: Doctor & Grandma Safety Bridge */}
            <div className="grid grid-cols-2 gap-2 w-full">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-2 text-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-400 to-teal-300 mx-auto flex items-center justify-center text-sm shadow">
                  👵
                </div>
                <p className="text-[10px] font-bold text-white">Büyükanne Şefkati</p>
                <p className="text-[8px] text-white/70 line-clamp-1">7/24 Şefkatli Rehberlik</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-emerald-400/30 rounded-xl p-2 text-center space-y-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 mx-auto flex items-center justify-center text-sm shadow">
                  🩺
                </div>
                <p className="text-[10px] font-bold text-emerald-300">Hekim Güvencesi</p>
                <p className="text-[8px] text-white/70 line-clamp-1">Klinik Sevk Protokolü</p>
              </div>
            </div>

            {/* Growth Milestones Grid */}
            <div className="grid grid-cols-2 gap-2 w-full text-[10px]">
              <div className="p-2 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2 backdrop-blur-md">
                <span className="text-sm">✨</span>
                <div>
                  <p className="font-bold text-white text-[9.5px]">İlk Gülümseme</p>
                  <p className="text-white/60 text-[7.5px]">2. Ay • Nörogelişim</p>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2 backdrop-blur-md">
                <span className="text-sm">🔄</span>
                <div>
                  <p className="font-bold text-white text-[9.5px]">İlk Dönüş & Hareket</p>
                  <p className="text-white/60 text-[7.5px]">4-6. Ay • Motor Takip</p>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2 backdrop-blur-md">
                <span className="text-sm">🥣</span>
                <div>
                  <p className="font-bold text-white text-[9.5px]">Ek Gıda & Sindirim</p>
                  <p className="text-white/60 text-[7.5px]">6. Ay • Sağlıklı Beslenme</p>
                </div>
              </div>

              <div className="p-2 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2 backdrop-blur-md">
                <span className="text-sm">👣</span>
                <div>
                  <p className="font-bold text-white text-[9.5px]">İlk Adımlar</p>
                  <p className="text-white/60 text-[7.5px]">12. Ay • Güvenli Büyüme</p>
                </div>
              </div>
            </div>

            {/* Bottom Emotional Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[9px] font-bold">
              <CheckCircle2 size={11} className="text-emerald-400" />
              <span>Paniksiz ebeveynlik, sağlıkla büyüyen bir gelecek.</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Açılışta 1 saniye sonra otomatik açılma (sessionStorage kontrolüyle)
  useEffect(() => {
    const hasSeen = sessionStorage.getItem('db_story_modal_seen');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 900);
      return () => clearTimeout(timer);
    }
  }, []);

  // Otomatik sahne geçişi (Play/Pause)
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const interval = 80; // 80ms tik
    const totalTime = 6500; // Her sahne 6.5 saniye
    const step = (interval / totalTime) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentScene((scene) => (scene + 1) % scenes.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying, currentScene, scenes.length]);

  const handleClose = () => {
    sessionStorage.setItem('db_story_modal_seen', 'true');
    setIsOpen(false);
  };

  const handleNext = () => {
    setProgress(0);
    setCurrentScene((prev) => (prev + 1) % scenes.length);
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentScene((prev) => (prev - 1 + scenes.length) % scenes.length);
  };

  const selectScene = (idx: number) => {
    setProgress(0);
    setCurrentScene(idx);
  };

  const active = scenes[currentScene];

  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          1. EKRANIN SAĞ ALTINDAKİ YÜZEN TETİKLEYİCİ BUTON (HER ZAMAN ERİŞİLEBİLİR)
          ───────────────────────────────────────────────────────────── */}
      <button
        onClick={() => {
          setProgress(0);
          setCurrentScene(0);
          setIsPlaying(true);
          setIsOpen(true);
        }}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-coral via-[#FF6D55] to-[#f0442b] hover:from-coral-600 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-full shadow-2xl shadow-coral/40 flex items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95 group border border-white/20 cursor-pointer"
        title="Sistemin Nasıl Çalıştığını İzleyin"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
        <span className="flex items-center gap-1.5">
          <span>🎬</span>
          <span className="font-extrabold tracking-tight">Sistemi Keşfet (30 Sn)</span>
        </span>
      </button>

      {/* ─────────────────────────────────────────────────────────────
          2. SİNEMATİK AÇILIR ANİMASYON PENCERESİ (MODAL)
          ───────────────────────────────────────────────────────────── */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          {/* Modal Container */}
          <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#111936] to-[#0A1024] text-white rounded-3xl sm:rounded-[32px] border border-white/15 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            
            {/* Top Scene Progress Bars */}
            <div className="grid grid-cols-5 gap-1.5 p-4 sm:p-6 pb-2">
              {scenes.map((s, idx) => (
                <div
                  key={s.id}
                  onClick={() => selectScene(idx)}
                  className="h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer relative"
                  title={s.title}
                >
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 to-coral transition-all duration-100 rounded-full"
                    style={{
                      width:
                        idx < currentScene
                          ? '100%'
                          : idx === currentScene
                          ? `${progress}%`
                          : '0%',
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Header: Scene Badge & Controls */}
            <div className="px-4 sm:px-6 py-2 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider font-mono text-sky-400">
                  {active.eyebrow}
                </span>
                <span className="text-white/30 text-xs">•</span>
                <span className="text-[10px] text-white/60 bg-white/10 px-2 py-0.5 rounded-full font-medium">
                  {active.tag}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Play/Pause Button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-xs"
                  title={isPlaying ? 'Durdur' : 'Oynat'}
                >
                  {isPlaying ? <Pause size={13} /> : <Play size={13} className="ml-0.5" />}
                </button>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  title="Kapat"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Modal Body: Animated Visual & Narrative Copy */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 flex-1">
              {/* Dynamic Interactive Visual Scene */}
              {active.renderVisual()}

              {/* Text Narrative */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                  {active.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {active.description}
                </p>
              </div>
            </div>

            {/* Footer Navigation Bar */}
            <div className="p-4 sm:p-6 pt-3 border-t border-white/10 bg-white/[0.02] flex items-center justify-between gap-3">
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1 transition-all"
              >
                <ChevronLeft size={16} />
                <span className="hidden sm:inline">Önceki</span>
              </button>

              {/* Scene Indicator Dots */}
              <div className="flex items-center gap-2">
                {scenes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => selectScene(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentScene
                        ? 'bg-sky-400 scale-125 ring-2 ring-sky-400/40'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Next or Finish Button */}
              {currentScene < scenes.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-sky-500/20 transition-all"
                >
                  <span>Sonraki</span>
                  <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  onClick={handleClose}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-coral to-coral-600 hover:from-coral-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-coral/30 transition-all cursor-pointer"
                >
                  <span>Sistemi Keşfetmeye Başla</span>
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
