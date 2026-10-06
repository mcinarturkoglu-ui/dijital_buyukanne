import type { Metadata } from "next";
import StoryProgressTracker from "@/components/home/StoryProgressTracker";
import SystemStoryModal from "@/components/home/SystemStoryModal";
import StoryChapterRibbon from "@/components/home/StoryChapterRibbon";
import StorySection from "@/components/home/StorySection";
import HeroSection from "@/components/home/HeroSection";
import TimelineSection from "@/components/home/TimelineSection";
import SolutionSection from "@/components/home/SolutionSection";
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
import SupportersPreview from "@/components/home/SupportersPreview";
import FinalCTA from "@/components/home/FinalCTA";
import EcosystemPulseTicker from "@/components/home/EcosystemPulseTicker";
import ProblemSolutionCompare from "@/components/home/ProblemSolutionCompare";
import NationalMediaPress from "@/components/home/NationalMediaPress";
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
  const ribbons = siteContent.chapterRibbons || {};

  return (
    <>
      {/* Yönetici Düzeyi Akıllı Gezinme Çubuğu (Masaüstü) */}
      <StoryProgressTracker />

      {/* Anne, Baba ve Bebek Hikayeli Sinematik Açılır Sistem Animasyonu */}
      <SystemStoryModal />

      {/* ─────────────────────────────────────────────────────────────
          BÖLÜM 01: EKOSİSTEM VE VİZYON
          0-24 Ay Bebek ve Aile Destek Platformu Ana Giriş
          ───────────────────────────────────────────────────────────── */}
      <StorySection id="bolum-1" className="scroll-mt-16" chapterBadge="BÖLÜM 01" storyStep="Ekosistem & Vizyon">
        <HeroSection />
        <EcosystemPulseTicker />
      </StorySection>

      {/* Kurumsal Geçiş 01 -> 02 */}
      <StoryChapterRibbon
        chapterNumber={ribbons.ribbon2?.chapterNumber || "BÖLÜM 02"}
        chapterTitle={ribbons.ribbon2?.chapterTitle || "NÖROGELİŞİMSEL DÖNGÜ"}
        headline={ribbons.ribbon2?.headline || "İlk 24 Ay: Büyümenin Kritik Kilometre Taşları"}
        description={ribbons.ribbon2?.description || "İlk iki yılda beyin ve motor gelişiminin temelleri atılır. Yapılandırılmış simülatörümüzle her ayın nörogelişimsel sıçramalarını yakından takip edin."}
        anchorId="ribbon-2"
        theme="light"
        accent="coral"
      />

      {/* ─────────────────────────────────────────────────────────────
          BÖLÜM 02: 0–24 AY BİLİMSEL GELİŞİM TAKİBİ
          İnteraktif kilometre taşları ve ay bazlı gelişim simülatörü
          ───────────────────────────────────────────────────────────── */}
      <StorySection id="bolum-2" className="scroll-mt-16" chapterBadge="BÖLÜM 02" storyStep="Gelişim Simülatörü">
        <TimelineSection />
      </StorySection>

      {/* İnteraktif Problem & Çözüm Karşılaştırması */}
      <StorySection chapterBadge="BÖLÜM 02" storyStep="Neden DijitalBüyükanne?">
        <ProblemSolutionCompare />
      </StorySection>

      {/* Kurumsal Geçiş 02 -> 03 */}
      <StoryChapterRibbon
        chapterNumber={ribbons.ribbon3?.chapterNumber || "BÖLÜM 03"}
        chapterTitle={ribbons.ribbon3?.chapterTitle || "KLİNİK TARAMA PROTOKOLLERİ"}
        headline={ribbons.ribbon3?.headline || "Yapay Zekâ Destekli 3 Akıllı Tarama Protokolü"}
        description={ribbons.ribbon3?.description || "Ebeveyn gözünden kaçabilecek erken motor asimetrileri, cilt hassasiyetleri ve sindirim ipuçları için algoritmik ön tarama ve hekim sevk köprüsü."}
        anchorId="ribbon-3"
        theme="light"
        accent="sky"
      />

      {/* ─────────────────────────────────────────────────────────────
          BÖLÜM 03: YAPAY ZEKÂ TARAMA PROTOKOLLERİ
          Hareket, Cilt ve Dışkı/Bez Analizi Canlı Deneyim Odası
          ───────────────────────────────────────────────────────────── */}
      <div id="bolum-3" className="scroll-mt-16">
        <StorySection chapterBadge="BÖLÜM 03" storyStep="1. Bütünsel Ön Tarama">
          <SolutionSection />
        </StorySection>

        <StorySection chapterBadge="BÖLÜM 03" storyStep="2. AI Hareket Analizi">
          <MotionAnalysis />
        </StorySection>

        <StorySection chapterBadge="BÖLÜM 03" storyStep="3. AI Cilt Analizi (Derma-41)">
          <SkinAnalysis />
        </StorySection>

        <StorySection chapterBadge="BÖLÜM 03" storyStep="4. AI Bez & Dışkı Analizi">
          <StoolAnalysis />
        </StorySection>
      </div>

      {/* Kurumsal Geçiş 03 -> 04 */}
      <StoryChapterRibbon
        chapterNumber={ribbons.ribbon4?.chapterNumber || "BÖLÜM 04"}
        chapterTitle={ribbons.ribbon4?.chapterTitle || "KESİNTİSİZ DESTEK EKOSİSTEMİ"}
        headline={ribbons.ribbon4?.headline || "7/24 Dijital Rehberlik ve Hekim Güvencesi"}
        description={ribbons.ribbon4?.description || "Günün her saatinde güvenilir ilk danışma ve yapay zekâ filtreli uzman yönlendirmesiyle ailelerin yanındayız. Klinik kararlar uzman hekimlerin sorumluluğunda yürütülür."}
        anchorId="ribbon-4"
        theme="light"
        accent="coral"
      />

      {/* ─────────────────────────────────────────────────────────────
          BÖLÜM 04: 7/24 DİJİTAL ASİSTAN & HEKİM GÜVENCESİ
          7/24 Dijital Asistan & İnsan-AI Denge Radarı
          ───────────────────────────────────────────────────────────── */}
      <div id="bolum-4" className="scroll-mt-16">
        <StorySection chapterBadge="BÖLÜM 04" storyStep="7/24 Dijital Asistan">
          <DigitalAssistant />
        </StorySection>

        <StorySection chapterBadge="BÖLÜM 04" storyStep="İnsan + AI Dengesi">
          <HumanAI />
        </StorySection>
      </div>

      {/* Kurumsal Geçiş 04 -> 05 */}
      <StoryChapterRibbon
        chapterNumber={ribbons.ribbon5?.chapterNumber || "BÖLÜM 05"}
        chapterTitle={ribbons.ribbon5?.chapterTitle || "KAPSAYICI SAĞLIK & BİLİM"}
        headline={ribbons.ribbon5?.headline || "Özel Gereksinimli Çocuklar ve Bilimsel Çerçeve"}
        description={ribbons.ribbon5?.description || "Prematüre doğum, serebral palsi riski veya gelişimsel gecikmelerde erken müdahale penceresini yakalayan klinik metodoloji ve bağımsız Bilimsel Danışma Kurulu güvencesi."}
        anchorId="ribbon-5"
        theme="light"
        accent="coral"
      />

      {/* ─────────────────────────────────────────────────────────────
          BÖLÜM 05: KAPSAYICI SAĞLIK & BİLİMSEL OMURGA
          Erken Müdahale, Bilim Kurulu & Gerçek Hayat Başarı Hikayeleri
          ───────────────────────────────────────────────────────────── */}
      <div id="bolum-5" className="scroll-mt-16">
        <StorySection chapterBadge="BÖLÜM 05" storyStep="Kapsayıcı Sağlık & Erken Müdahale">
          <InclusiveAccess />
        </StorySection>

        <StorySection chapterBadge="BÖLÜM 05" storyStep="Bilimsel Danışma Kurulu">
          <ScientificBoard cmsData={siteContent.scientificBoard} />
        </StorySection>

        <StorySection chapterBadge="BÖLÜM 05" storyStep="Etki Hikayeleri">
          <CaseStudies cmsData={siteContent.caseStudies} />
        </StorySection>

        <StorySection chapterBadge="BÖLÜM 05" storyStep="Ulusal Medya & Basın">
          <NationalMediaPress />
        </StorySection>
      </div>

      {/* Kurumsal Geçiş 05 -> 06 */}
      <StoryChapterRibbon
        chapterNumber={ribbons.ribbon6?.chapterNumber || "BÖLÜM 06"}
        chapterTitle={ribbons.ribbon6?.chapterTitle || "KAMU İŞ BİRLİĞİ & SOSYAL ETKİ"}
        headline={ribbons.ribbon6?.headline || "Yerel Yönetimler İçin Şehir Ölçeğinde Aile Ekosistemi"}
        description={ribbons.ribbon6?.description || "Büyükşehir ve ilçe belediyeleriyle entegre olarak her haneye ücretsiz ulaşan kurumsal mobil altyapı, ölçülebilir sosyal etki ve veri destekli kamu sağlığı yönetimi."}
        anchorId="ribbon-6"
        theme="light"
        accent="sky"
      />

      {/* ─────────────────────────────────────────────────────────────
          BÖLÜM 06: KURUMSAL MODEL & SOSYAL ETKİ
          Kurumsal Çözümler, Sosyal Etki & Bütçe Hesaplayıcı, Büyük Çağrı
          ───────────────────────────────────────────────────────────── */}
      <div id="bolum-6" className="scroll-mt-16">
        <StorySection chapterBadge="BÖLÜM 06" storyStep="Kurumlar & Belediyeler">
          <InstitutionsHero />
        </StorySection>

        <StorySection chapterBadge="BÖLÜM 06" storyStep="Sosyal Etki Simülasyonu">
          <SocialImpactCalculator />
        </StorySection>

        <StorySection chapterBadge="BÖLÜM 06" storyStep="Destekçi Kuruluşlar">
          <SupportersPreview />
        </StorySection>

        <StorySection chapterBadge="BÖLÜM 06" storyStep="Büyük Katılım Çağrısı">
          <FinalCTA />
        </StorySection>
      </div>
    </>
  );
}
