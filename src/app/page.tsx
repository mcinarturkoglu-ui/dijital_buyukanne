import type { Metadata } from "next";
import StoryProgressTracker from "@/components/home/StoryProgressTracker";
import StoryChapterRibbon from "@/components/home/StoryChapterRibbon";
import HeroSection from "@/components/home/HeroSection";
import TimelineSection from "@/components/home/TimelineSection";
import SolutionSection from "@/components/home/SolutionSection";
import InteractiveSandbox from "@/components/home/InteractiveSandbox";
import MotionAnalysis from "@/components/home/MotionAnalysis";
import SkinAnalysis from "@/components/home/SkinAnalysis";
import StoolAnalysis from "@/components/home/StoolAnalysis";
import DigitalAssistant from "@/components/home/DigitalAssistant";
import HumanAI from "@/components/home/HumanAI";
import InclusiveAccess from "@/components/home/InclusiveAccess";
import ScientificBoard from "@/components/home/ScientificBoard";
import CaseStudies from "@/components/home/CaseStudies";
import InstitutionsHero from "@/components/home/InstitutionsHero";
import SocialImpactCalculator from "@/components/home/SocialImpactCalculator";
import MeasurableImpact from "@/components/home/MeasurableImpact";
import SupportersPreview from "@/components/home/SupportersPreview";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "DijitalBüyükanne — Her bebeğin bir Dijital Büyükannesi olsun",
  description:
    "DijitalBüyükanne; aileleri, uzmanları, teknolojiyi ve sosyal destek sağlayan kurumları aynı dijital ekosistemde buluşturan 0–24 ay bebek ve aile destek platformudur.",
  openGraph: {
    title: "DijitalBüyükanne — Her bebeğin bir Dijital Büyükannesi olsun",
    description:
      "0–24 ay bebek ve aile destek ekosistemi. Yapay zekâ destekli değerlendirme, dijital aile asistanı, uzman danışmanlığı.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Yönetici Düzeyi Akıllı Gezinme Çubuğu (Masaüstü) */}
      <StoryProgressTracker />

      {/* ─────────────────────────────────────────────────────────────
          BÖLÜM 01: EKOSİSTEM VE VİZYON
          0-24 Ay Bebek ve Aile Destek Platformu Ana Giriş
          ───────────────────────────────────────────────────────────── */}
      <div id="bolum-1" className="scroll-mt-16">
        <HeroSection />
      </div>

      {/* Kurumsal Geçiş 01 -> 02 */}
      <StoryChapterRibbon
        chapterNumber="BÖLÜM 02"
        chapterTitle="NÖROGELİŞİMSEL DÖNGÜ"
        headline="İlk 24 Ay: Büyümenin Kritik Kilometre Taşları"
        description="İlk iki yılda beyin ve motor gelişiminin temelleri atılır. Yapılandırılmış simülatörümüzle her ayın nörogelişimsel sıçramalarını yakından takip edin."
        anchorId="ribbon-2"
        theme="light"
        accent="coral"
      />

      {/* ─────────────────────────────────────────────────────────────
          BÖLÜM 02: 0–24 AY BİLİMSEL GELİŞİM TAKİBİ
          İnteraktif kilometre taşları ve ay bazlı gelişim simülatörü
          ───────────────────────────────────────────────────────────── */}
      <div id="bolum-2" className="scroll-mt-16">
        <TimelineSection />
      </div>

      {/* Kurumsal Geçiş 02 -> 03 */}
      <StoryChapterRibbon
        chapterNumber="BÖLÜM 03"
        chapterTitle="KLİNİK TARAMA PROTOKOLLERİ"
        headline="Yapay Zekâ Destekli 3 Hayati Koruma Kalkanı"
        description="Ebeveyn gözünden kaçabilecek erken motor asimetrileri, cilt hassasiyetleri ve sindirim ipuçları için algoritmik ön tarama ve hekim sevk köprüsü."
        anchorId="ribbon-3"
        theme="light"
        accent="turquoise"
      />

      {/* ─────────────────────────────────────────────────────────────
          BÖLÜM 03: YAPAY ZEKÂ TARAMA PROTOKOLLERİ
          Hareket, Cilt ve Dışkı/Bez Analizi Canlı Deneyim Odası
          ───────────────────────────────────────────────────────────── */}
      <div id="bolum-3" className="scroll-mt-16">
        <SolutionSection />
        <InteractiveSandbox />
        <MotionAnalysis />
        <SkinAnalysis />
        <StoolAnalysis />
      </div>

      {/* Kurumsal Geçiş 03 -> 04 */}
      <StoryChapterRibbon
        chapterNumber="BÖLÜM 04"
        chapterTitle="KESİNTİSİZ DESTEK EKOSİSTEMİ"
        headline="7/24 Dijital Rehberlik ve Hekim Güvencesi"
        description="Günün her saatinde güvenilir ilk danışma ve yapay zekâ filtreli uzman yönlendirmesiyle ailelerin yanındayız. Klinik kararlar uzman hekimlerin sorumluluğunda yürütülür."
        anchorId="ribbon-4"
        theme="dark"
        accent="turquoise"
      />

      {/* ─────────────────────────────────────────────────────────────
          BÖLÜM 04: 7/24 DİJİTAL ASİSTAN & HEKİM GÜVENCESİ
          7/24 Dijital Asistan & İnsan-AI Denge Radarı
          ───────────────────────────────────────────────────────────── */}
      <div id="bolum-4" className="scroll-mt-16">
        <DigitalAssistant />
        <HumanAI />
      </div>

      {/* Kurumsal Geçiş 04 -> 05 */}
      <StoryChapterRibbon
        chapterNumber="BÖLÜM 05"
        chapterTitle="KAPSAYICI SAĞLIK & BİLİM"
        headline="Özel Gereksinimli Çocuklar ve Bilimsel Çerçeve"
        description="Prematüre doğum, serebral palsi riski veya gelişimsel gecikmelerde erken müdahale penceresini yakalayan klinik metodoloji ve bağımsız Bilimsel Danışma Kurulu güvencesi."
        anchorId="ribbon-5"
        theme="dark"
        accent="emerald"
      />

      {/* ─────────────────────────────────────────────────────────────
          BÖLÜM 05: KAPSAYICI SAĞLIK & BİLİMSEL OMURGA
          Erken Müdahale, Bilim Kurulu & Gerçek Hayat Başarı Hikayeleri
          ───────────────────────────────────────────────────────────── */}
      <div id="bolum-5" className="scroll-mt-16">
        <InclusiveAccess />
        <ScientificBoard />
        <CaseStudies />
      </div>

      {/* Kurumsal Geçiş 05 -> 06 */}
      <StoryChapterRibbon
        chapterNumber="BÖLÜM 06"
        chapterTitle="KAMU İŞ BİRLİĞİ & SOSYAL ETKİ"
        headline="Yerel Yönetimler İçin Şehir Ölçeğinde Koruma"
        description="Büyükşehir ve ilçe belediyeleriyle entegre olarak her haneye ücretsiz ulaşan kurumsal mobil altyapı, ölçülebilir sosyal etki ve veri destekli kamu sağlığı yönetimi."
        anchorId="ribbon-6"
        theme="light"
        accent="coral"
      />

      {/* ─────────────────────────────────────────────────────────────
          BÖLÜM 06: KURUMSAL MODEL & SOSYAL ETKİ
          Kurumsal Çözümler, Sosyal Etki & Bütçe Hesaplayıcı, Büyük Çağrı
          ───────────────────────────────────────────────────────────── */}
      <div id="bolum-6" className="scroll-mt-16">
        <InstitutionsHero />
        <SocialImpactCalculator />
        <MeasurableImpact />
        <SupportersPreview />
        <FinalCTA />
      </div>
    </>
  );
}
