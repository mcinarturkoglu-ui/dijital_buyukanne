import type { Metadata } from "next";
import FullpageDeckContainer from "@/components/home/FullpageDeckContainer";
import FullpageSlide from "@/components/home/FullpageSlide";
import SystemStoryModal from "@/components/home/SystemStoryModal";
import HeroSection from "@/components/home/HeroSection";
import EcosystemPulseTicker from "@/components/home/EcosystemPulseTicker";

import TimelineSection from "@/components/home/TimelineSection";
import ProblemSolutionCompare from "@/components/home/ProblemSolutionCompare";
import MotionAnalysis from "@/components/home/MotionAnalysis";
import SkinAnalysis from "@/components/home/SkinAnalysis";
import StoolAnalysis from "@/components/home/StoolAnalysis";
import DigitalAssistant from "@/components/home/DigitalAssistant";
import HumanAI from "@/components/home/HumanAI";
import InclusiveAccess from "@/components/home/InclusiveAccess";
import InclusiveTargetAudiences from "@/components/home/InclusiveTargetAudiences";
import ScientificBoard from "@/components/home/ScientificBoard";
import SocialImpactCalculator from "@/components/home/SocialImpactCalculator";
import FinalCTA from "@/components/home/FinalCTA";
import siteContent from "@/data/site-content.json";

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
      {/* Anne, Baba ve Bebek Hikayeli Sinematik Açılır Sistem Animasyonu */}
      <SystemStoryModal />

      {/* 13 Odaklı, Tek Konulu ve Ekrana %100 Sığan Donanım Hızlandırmalı Sunum Taşıyıcısı */}
      <FullpageDeckContainer>
        {/* 01: Ekosistem & Bütünsel Vizyon */}
        <FullpageSlide id="bolum-1" badge="01 / 13" category="GİRİŞ VE VİZYON" theme="light">
          <div className="w-full h-full flex flex-col justify-between items-center my-auto py-2 sm:py-3">
            <div className="w-full flex-1 flex flex-col justify-center">
              <HeroSection />
            </div>
            <EcosystemPulseTicker />
          </div>
        </FullpageSlide>

        {/* 02: 0–24 Ay Bilimsel Gelişim Simülatörü */}
        <FullpageSlide id="bolum-2" badge="02 / 13" category="NÖROGELİŞİMSEL DÖNGÜ" theme="slate">
          <div className="w-full h-full flex items-center justify-center my-auto">
            <TimelineSection />
          </div>
        </FullpageSlide>

        {/* 03: Geleneksel vs. DijitalBüyükanne Dönüşümü */}
        <FullpageSlide id="bolum-3" badge="03 / 13" category="KLİNİK VE DİJİTAL DÖNÜŞÜM" theme="white">
          <div className="w-full h-full flex items-center justify-center my-auto">
            <ProblemSolutionCompare />
          </div>
        </FullpageSlide>

        {/* 04: AI Hareket ve Kas Motor Analizi */}
        <FullpageSlide id="bolum-4" badge="04 / 13" category="TARAMA PROTOKOLÜ 1: HAREKET" theme="slate">
          <div className="w-full h-full flex items-center justify-center my-auto">
            <MotionAnalysis />
          </div>
        </FullpageSlide>

        {/* 05: AI Cilt Analizi (Derma-41) */}
        <FullpageSlide id="bolum-5" badge="05 / 13" category="TARAMA PROTOKOLÜ 2: CİLT" theme="white">
          <div className="w-full h-full flex items-center justify-center my-auto">
            <SkinAnalysis />
          </div>
        </FullpageSlide>

        {/* 06: AI Bez & Dışkı Analizi (DSÖ Onaylı Skala) */}
        <FullpageSlide id="bolum-6" badge="06 / 13" category="TARAMA PROTOKOLÜ 3: DIŞKI & BEZ" theme="slate">
          <div className="w-full h-full flex items-center justify-center my-auto">
            <StoolAnalysis />
          </div>
        </FullpageSlide>

        {/* 07: 7/24 Dijital Aile Asistanı */}
        <FullpageSlide id="bolum-7" badge="07 / 13" category="KESİNTİSİZ EBEVEYN REHBERLİĞİ" theme="dark">
          <div className="w-full h-full flex items-center justify-center my-auto">
            <DigitalAssistant />
          </div>
        </FullpageSlide>

        {/* 08: İnsan + AI Denge Radarı & Klinik Güvenlik */}
        <FullpageSlide id="bolum-8" badge="08 / 13" category="KLİNİK ETİK & HEKİM ÜSTÜNLÜĞÜ" theme="white">
          <div className="w-full h-full flex items-center justify-center my-auto">
            <HumanAI />
          </div>
        </FullpageSlide>

        {/* 09: Kapsayıcı Erken Müdahale Simülatörü */}
        <FullpageSlide id="bolum-9" badge="09 / 13" category="ERKEN MÜDAHALE SİMÜLATÖRÜ" theme="slate">
          <div className="w-full h-full flex items-center justify-center my-auto">
            <InclusiveAccess />
          </div>
        </FullpageSlide>

        {/* 10: Kapsayıcı Hizmet Alanlarımız (Hedef Gruplar) */}
        <FullpageSlide id="bolum-10" badge="10 / 13" category="FIRSAT EŞİTLİĞİ & HEDEF GRUPLAR" theme="white">
          <div className="w-full h-full flex items-center justify-center my-auto">
            <InclusiveTargetAudiences />
          </div>
        </FullpageSlide>

        {/* 11: Bilimsel Güvence & Danışma Kurulu */}
        <FullpageSlide id="bolum-11" badge="11 / 13" category="AKADEMİK VE TIBBİ GÜVENCE" theme="light">
          <div className="w-full h-full flex items-center justify-center my-auto">
            <ScientificBoard cmsData={siteContent.scientificBoard} />
          </div>
        </FullpageSlide>

        {/* 12: Sosyal Etki & Kamu Tasarruf Simülasyonu */}
        <FullpageSlide id="bolum-12" badge="12 / 13" category="KAMU & SOSYAL BELEDİYECİLİK" theme="white">
          <div className="w-full h-full flex items-center justify-center my-auto">
            <SocialImpactCalculator />
          </div>
        </FullpageSlide>

        {/* 13: Büyük Katılım & Geleceğe Adım (Final CTA) */}
        <FullpageSlide id="bolum-13" badge="13 / 13" category="BÜYÜK KATILIM ÇAĞRISI" theme="dark">
          <div className="w-full h-full flex items-center justify-center my-auto">
            <FinalCTA />
          </div>
        </FullpageSlide>
      </FullpageDeckContainer>
    </>
  );
}
