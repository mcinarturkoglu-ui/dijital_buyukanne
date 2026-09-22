import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TimelineSection from "@/components/home/TimelineSection";
import SolutionSection from "@/components/home/SolutionSection";
import MotionAnalysis from "@/components/home/MotionAnalysis";
import SkinAnalysis from "@/components/home/SkinAnalysis";
import StoolAnalysis from "@/components/home/StoolAnalysis";
import DigitalAssistant from "@/components/home/DigitalAssistant";
import HumanAI from "@/components/home/HumanAI";
import InclusiveAccess from "@/components/home/InclusiveAccess";
import InstitutionsHero from "@/components/home/InstitutionsHero";
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

      {/* 4. AI Hareket Analizi Video Stüdyosu */}
      <MotionAnalysis />

      {/* 5. AI Cilt Analizi Kamera Vizörü */}
      <SkinAnalysis />

      {/* 6. AI Bebek Bezi & Dışkı Analizi (Biliyer Atrezi & Alerji Taraması) */}
      <StoolAnalysis />

      {/* 7. 7/24 Dijital Büyükanne & Ses Dalgalı Gece Asistanı */}
      <DigitalAssistant />

      {/* 8. İnsan + Yapay Zekâ Nöral Ekosistem Radarı */}
      <HumanAI />

      {/* 9. Kapsayıcı Sağlık: Özel Gereksinimli Çocuklar İçin Erken Müdahale & Sağlıklı Büyüme Simülasyonu */}
      <InclusiveAccess />

      {/* 10. Kurumlar & Belediyeler İçin Şehir Uygulaması (Ankara, Keçiören vb.) */}
      <InstitutionsHero />

      {/* 10. Ölçülebilir Sosyal Etki Paneli */}
      <MeasurableImpact />

      {/* 11. Destekçilerimiz & Güven Ağı */}
      <SupportersPreview />

      {/* 12. Duygusal Kapanış & Çift Yönlü Aksiyon */}
      <FinalCTA />
    </>
  );
}
