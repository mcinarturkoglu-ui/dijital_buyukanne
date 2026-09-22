import type { Metadata } from "next";
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
      {/* 1. Hero: Etkileşimli Simülatör ve Ana Giriş */}
      <HeroSection />

      {/* 2. İnteraktif 0-24 Ay Bebek Gelişim Simülatörü & Kilometre Taşları */}
      <TimelineSection />

      {/* 3. Çözüm: Tek Uygulama, 5 Güçlü Hizmet */}
      <SolutionSection />

      {/* 4. Canlı Deneyim Odası: AI Dışkı/Bez Analizi & Gece Asistanı Canlı Testi */}
      <InteractiveSandbox />

      {/* 5. AI Hareket Analizi Video Stüdyosu */}
      <MotionAnalysis />

      {/* 6. AI Cilt Analizi Kamera Vizörü */}
      <SkinAnalysis />

      {/* 7. AI Bebek Bezi & Dışkı Analizi (Biliyer Atrezi & Alerji Taraması) */}
      <StoolAnalysis />

      {/* 8. 7/24 Dijital Büyükanne & Ses Dalgalı Gece Asistanı */}
      <DigitalAssistant />

      {/* 9. İnsan + Yapay Zekâ Nöral Ekosistem Radarı */}
      <HumanAI />

      {/* 10. Kapsayıcı Sağlık: Özel Gereksinimli Çocuklar İçin Erken Müdahale & Sağlıklı Büyüme Simülasyonu */}
      <InclusiveAccess />

      {/* 11. Bilimsel Danışma Kurulu & Klinik Güven Çerçevesi */}
      <ScientificBoard />

      {/* 12. Gerçek Hayattan Etki Hikayeleri (Zeynep Bebek, Emir Bebek & Pilot Belediye) */}
      <CaseStudies />

      {/* 13. Kurumlar & Belediyeler İçin Şehir Uygulaması (Ankara, Keçiören vb.) */}
      <InstitutionsHero />

      {/* 14. Sosyal Etki & Bütçe Hesaplayıcısı (Belediyeler İçin Canlı ROI & Protokol Modalı) */}
      <SocialImpactCalculator />

      {/* 15. Ölçülebilir Sosyal Etki Paneli */}
      <MeasurableImpact />

      {/* 16. Destekçilerimiz & Güven Ağı */}
      <SupportersPreview />

      {/* 17. Duygusal Kapanış & Çift Yönlü Aksiyon */}
      <FinalCTA />
    </>
  );
}
