'use client';

import { useState } from 'react';
import FullpageDeckContainer, { SlideInfo } from '@/components/home/FullpageDeckContainer';
import FullpageSlide from '@/components/home/FullpageSlide';
import RotaryEcosystemModal from '@/components/rotary/RotaryEcosystemModal';
import RotaryHeroSlide from '@/components/rotary/RotaryHeroSlide';
import RotaryPolioSlide from '@/components/rotary/RotaryPolioSlide';
import RotaryFourWaySlide from '@/components/rotary/RotaryFourWaySlide';
import RotaryPublicImageSlide from '@/components/rotary/RotaryPublicImageSlide';
import RotaryGiftSlide from '@/components/rotary/RotaryGiftSlide';
import RotarySimulatorSlide from '@/components/rotary/RotarySimulatorSlide';
import RotaryCaseStudyGrantSlide from '@/components/rotary/RotaryCaseStudyGrantSlide';
import RotaryCtaSlide from '@/components/rotary/RotaryCtaSlide';

const rotarySlides: SlideInfo[] = [
  { id: 'rotary-1', badge: '01 / 08', title: 'Rotary & DijitalBüyükanne İttifakı', shortName: 'Vizyon', category: 'Giriş' },
  { id: 'rotary-2', badge: '02 / 08', title: "Tarihi Miras: Polio'dan Nöromotor Erken Teşhise", shortName: 'Tarihi Miras', category: 'Polio & CP' },
  { id: 'rotary-3', badge: '03 / 08', title: "Rotary 4'lü Özdenetim İlkelerine %100 Uyum", shortName: '4-Way Test', category: 'Etik & Değer' },
  { id: 'rotary-4', badge: '04 / 08', title: '6 Boyutlu Toplumsal İtibar & Public Image', shortName: 'Public Image', category: 'İtibar & PR' },
  { id: 'rotary-5', badge: '05 / 08', title: 'Kulüp Hediyesi: İpek Bebek Fuları & Bandana', shortName: 'Kulüp Hediyesi', category: 'Armağan' },
  { id: 'rotary-6', badge: '06 / 08', title: 'Kanıta Dayalı Rotary Sosyal Etki Simülatörü', shortName: 'Etki Simülatörü', category: 'TRF Denetim' },
  { id: 'rotary-7', badge: '07 / 08', title: 'Gerçek Etki Hikayesi & Global Grant Uyumu', shortName: 'Etki & Grant', category: 'Hibe Kriteri' },
  { id: 'rotary-8', badge: '08 / 08', title: '4 Adımda Kulüp Yol Haritası & Katılım', shortName: 'Yol Haritası (CTA)', category: 'Katılım' },
];

export default function RotaryPartnershipPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* İsteğe Bağlı İnteraktif Ekosistem Penceresi */}
      <RotaryEcosystemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* 8 Odaklı, Ekrana %100 Sığan Donanım Hızlandırmalı Rotary Sunum Deck Taşıyıcısı */}
      <FullpageDeckContainer slides={rotarySlides}>
        {/* 01: Rotary Vizyonu & Canlı Ortaklık Nabzı */}
        <FullpageSlide id="rotary-1" badge="01 / 08" category="ROTARY & DİJİTALBÜYÜKANNE" theme="light">
          <RotaryHeroSlide onOpenModal={() => setIsModalOpen(true)} />
        </FullpageSlide>

        {/* 02: Tarihsel Misyon (Polio -> Serebral Palsi Erken Teşhisi) */}
        <FullpageSlide id="rotary-2" badge="02 / 08" category="TARİHSEL MİSYON" theme="white">
          <RotaryPolioSlide />
        </FullpageSlide>

        {/* 03: Rotary 4'lü Özdenetim (The 4-Way Test) İlkelerine %100 Uyum */}
        <FullpageSlide id="rotary-3" badge="03 / 08" category="DÖRTLÜ ÖZDENETİM" theme="slate">
          <RotaryFourWaySlide />
        </FullpageSlide>

        {/* 04: 6 Boyutlu Toplumsal İtibar & Public Image */}
        <FullpageSlide id="rotary-4" badge="04 / 08" category="TOPLUMSAL İTİBAR" theme="light">
          <RotaryPublicImageSlide />
        </FullpageSlide>

        {/* 05: Kulüp Hediyesi: %100 Saf İpek Bebek Fuları & Bandanası */}
        <FullpageSlide id="rotary-5" badge="05 / 08" category="KULÜP HEDİYESİ" theme="white">
          <RotaryGiftSlide />
        </FullpageSlide>

        {/* 06: Kanıta Dayalı Rotary Sosyal Etki Simülatörü */}
        <FullpageSlide id="rotary-6" badge="06 / 08" category="KANITA DAYALI ETKİ" theme="slate">
          <RotarySimulatorSlide />
        </FullpageSlide>

        {/* 07: Gerçek Etki Hikayesi & TRF Global Grant Kriterleri */}
        <FullpageSlide id="rotary-7" badge="07 / 08" category="TRF HİBE UYUMU" theme="light">
          <RotaryCaseStudyGrantSlide />
        </FullpageSlide>

        {/* 08: 4 Adımda Kulüp Yol Haritası & Protokol Portalı */}
        <FullpageSlide id="rotary-8" badge="08 / 08" category="PROTOKOL PORTALI" theme="white">
          <RotaryCtaSlide onOpenModal={() => setIsModalOpen(true)} />
        </FullpageSlide>
      </FullpageDeckContainer>
    </>
  );
}
