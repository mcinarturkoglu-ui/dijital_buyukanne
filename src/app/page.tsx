import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import EmotionalIntro from "@/components/home/EmotionalIntro";
import NeedSection from "@/components/home/NeedSection";
import TimelineSection from "@/components/home/TimelineSection";
import SolutionSection from "@/components/home/SolutionSection";
import MotionAnalysis from "@/components/home/MotionAnalysis";
import SkinAnalysis from "@/components/home/SkinAnalysis";
import DigitalAssistant from "@/components/home/DigitalAssistant";
import HumanAI from "@/components/home/HumanAI";
import InstitutionsHero from "@/components/home/InstitutionsHero";
import MunicipalityGateway from "@/components/home/MunicipalityGateway";
import InstitutionValue from "@/components/home/InstitutionValue";
import SocialImpactModel from "@/components/home/SocialImpactModel";
import ImpactJourney from "@/components/home/ImpactJourney";
import InclusiveAccess from "@/components/home/InclusiveAccess";
import SupportPrograms from "@/components/home/SupportPrograms";
import MeasurableImpact from "@/components/home/MeasurableImpact";
import TransparentReporting from "@/components/home/TransparentReporting";
import Visibility from "@/components/home/Visibility";
import SupportersPreview from "@/components/home/SupportersPreview";
import PilotModel from "@/components/home/PilotModel";
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
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Emotional Intro */}
      <EmotionalIntro />

      {/* Section 3: Need / Problem */}
      <NeedSection />

      {/* Section 4: 0-24 Month Timeline */}
      <TimelineSection />

      {/* Section 5: Solution / App */}
      <SolutionSection />

      {/* Section 6: Motion Analysis */}
      <MotionAnalysis />

      {/* Section 7: Skin Analysis */}
      <SkinAnalysis />

      {/* Section 8: Digital Assistant */}
      <DigitalAssistant />

      {/* Section 9: Human + AI */}
      <HumanAI />

      {/* Section 10: Institutions Hero */}
      <InstitutionsHero />

      {/* Section 11: Municipality Gateway */}
      <MunicipalityGateway />

      {/* Section 12: Institution Values */}
      <InstitutionValue />

      {/* Section 13: Social Impact Model */}
      <SocialImpactModel />

      {/* Section 14: Impact Journey */}
      <ImpactJourney />

      {/* Section 15: Inclusive Access */}
      <InclusiveAccess />

      {/* Section 16: Support Programs */}
      <SupportPrograms />

      {/* Section 17: Measurable Impact */}
      <MeasurableImpact />

      {/* Section 18: Transparent Reporting */}
      <TransparentReporting />

      {/* Section 19: Visibility */}
      <Visibility />

      {/* Section 20: Supporters Preview */}
      <SupportersPreview />

      {/* Section 21: Pilot Model */}
      <PilotModel />

      {/* Section 22: Final CTA */}
      <FinalCTA />
    </>
  );
}
