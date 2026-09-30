const fs = require('fs');
const path = require('path');

function createPdfDocument(pagesData, docTitle) {
  // A4 Landscape: 842 x 595 pt
  const width = 842;
  const height = 595;

  let objects = [];
  let byteOffset = 0;

  function addObject(content) {
    const id = objects.length + 1;
    const str = `${id} 0 obj\n${content}\nendobj\n`;
    objects.push({ id, str, offset: 0 });
    return id;
  }

  // Placeholder for catalog and pages
  // We will build objects in order:
  // 1: Catalog
  // 2: Pages
  // 3: Font Helvetica
  // 4: Font Helvetica-Bold
  // 5+: Page and Content stream objects

  const fontRegId = 3;
  const fontBoldId = 4;

  const pageObjIds = [];
  const contentObjIds = [];

  // Pre-calculate page count
  const numPages = pagesData.length;

  // We will reserve IDs:
  // 1: Catalog
  // 2: Pages
  // 3: Font Reg
  // 4: Font Bold
  // Then for each page:
  // Page Obj ID = 5 + (i * 2)
  // Content Obj ID = 5 + (i * 2) + 1

  let currentId = 4;
  for (let i = 0; i < numPages; i++) {
    currentId++;
    pageObjIds.push(currentId);
    currentId++;
    contentObjIds.push(currentId);
  }

  // Build stream content for each page
  const contentStreams = pagesData.map((page, idx) => {
    let s = '';

    // Helper functions
    const escapeText = (text) => {
      return text
        .replace(/\\/g, '\\\\')
        .replace(/\(/g, '\\(')
        .replace(/\)/g, '\\)')
        // Clean Turkish characters for universal standard PDF font compatibility
        .replace(/Ğ/g, 'G')
        .replace(/ğ/g, 'g')
        .replace(/Ü/g, 'U')
        .replace(/ü/g, 'u')
        .replace(/Ş/g, 'S')
        .replace(/ş/g, 's')
        .replace(/İ/g, 'I')
        .replace(/ı/g, 'i')
        .replace(/Ö/g, 'O')
        .replace(/ö/g, 'o')
        .replace(/Ç/g, 'C')
        .replace(/ç/g, 'c');
    };

    // Draw background
    if (page.bgType === 'dark') {
      // Deep Navy (#0B1E3B)
      s += `0.043 0.118 0.231 rg 0 0 ${width} ${height} re f\n`;
      // Header accent bar
      s += `0.008 0.518 0.780 rg 0 ${height - 6} ${width} 6 re f\n`;
      // Radial glow effect simulation with lighter box
      s += `0.067 0.165 0.314 rg 40 40 ${width - 80} ${height - 80} re f\n`;
    } else {
      // Crisp Light (#F8FAFC)
      s += `0.973 0.980 0.988 rg 0 0 ${width} ${height} re f\n`;
      // Top header gradient simulation bar (#0284C7 to #FF5A43)
      s += `0.008 0.518 0.780 rg 0 ${height - 6} ${width / 2} 6 re f\n`;
      s += `1.0 0.353 0.263 rg ${width / 2} ${height - 6} ${width / 2} 6 re f\n`;
      // White inner canvas
      s += `1 1 1 rg 30 30 ${width - 60} ${height - 60} re f\n`;
      // Border
      s += `0.88 0.91 0.94 RG 1 w 30 30 ${width - 60} ${height - 60} re S\n`;
    }

    // Header Tag / Eyebrow pill
    if (page.eyebrow) {
      if (page.bgType === 'dark') {
        s += `0.008 0.518 0.780 rg 50 ${height - 75} 240 24 re f\n`;
        s += `BT /F2 10 Tf 1 1 1 rg 60 ${height - 67} Td (${escapeText(page.eyebrow.toUpperCase())}) Tj ET\n`;
      } else {
        s += `0.92 0.96 0.99 rg 50 ${height - 75} 260 24 re f\n`;
        s += `0.008 0.518 0.780 RG 1 w 50 ${height - 75} 260 24 re S\n`;
        s += `BT /F2 10 Tf 0.008 0.518 0.780 rg 60 ${height - 67} Td (${escapeText(page.eyebrow.toUpperCase())}) Tj ET\n`;
      }
    }

    // Title
    if (page.title) {
      const textColor = page.bgType === 'dark' ? '1 1 1' : '0.043 0.118 0.231';
      s += `BT /F2 22 Tf ${textColor} rg 50 ${height - 110} Td (${escapeText(page.title)}) Tj ET\n`;
    }

    // Subtitle
    if (page.subtitle) {
      const subColor = page.bgType === 'dark' ? '0.7 0.8 0.9' : '0.35 0.42 0.50';
      s += `BT /F1 12 Tf ${subColor} rg 50 ${height - 132} Td (${escapeText(page.subtitle)}) Tj ET\n`;
    }

    // Divider line
    const divColor = page.bgType === 'dark' ? '0.2 0.3 0.4' : '0.90 0.92 0.95';
    s += `${divColor} RG 1 w 50 ${height - 145} ${width - 100} 0 re S\n`;

    // Content Blocks / Cards
    if (page.cards && page.cards.length > 0) {
      const numCards = page.cards.length;
      const startY = height - 165;
      const availableHeight = startY - 80;

      if (page.layout === 'grid-3') {
        // 3 Columns
        const cardW = (width - 100 - (numCards - 1) * 20) / numCards;
        const cardH = availableHeight;
        page.cards.forEach((card, cIdx) => {
          const cardX = 50 + cIdx * (cardW + 20);
          const cardY = startY - cardH;

          // Card background
          if (page.bgType === 'dark') {
            s += `0.09 0.20 0.36 rg ${cardX} ${cardY} ${cardW} ${cardH} re f\n`;
            s += `0.15 0.30 0.50 RG 1 w ${cardX} ${cardY} ${cardW} ${cardH} re S\n`;
          } else {
            s += `0.97 0.98 0.99 rg ${cardX} ${cardY} ${cardW} ${cardH} re f\n`;
            s += `0.88 0.91 0.94 RG 1 w ${cardX} ${cardY} ${cardW} ${cardH} re S\n`;
          }

          // Card header bar
          const barColor = card.color || '0.008 0.518 0.780';
          s += `${barColor} rg ${cardX} ${cardY + cardH - 5} ${cardW} 5 re f\n`;

          // Card Title
          const cardTitleColor = page.bgType === 'dark' ? '1 1 1' : '0.043 0.118 0.231';
          s += `BT /F2 13 Tf ${cardTitleColor} rg ${cardX + 16} ${cardY + cardH - 30} Td (${escapeText(card.title || '')}) Tj ET\n`;

          // Card Tag / Subtitle
          if (card.tag) {
            s += `BT /F2 9 Tf ${barColor} rg ${cardX + 16} ${cardY + cardH - 46} Td (${escapeText(card.tag)}) Tj ET\n`;
          }

          // Card Description Lines
          if (card.items && Array.isArray(card.items)) {
            let lineY = cardY + cardH - 70;
            const itemColor = page.bgType === 'dark' ? '0.80 0.85 0.92' : '0.25 0.30 0.38';
            card.items.forEach((item) => {
              // bullet point
              s += `${barColor} rg ${cardX + 18} ${lineY + 3} 4 4 re f\n`;
              s += `BT /F1 10 Tf ${itemColor} rg ${cardX + 28} ${lineY} Td (${escapeText(item)}) Tj ET\n`;
              lineY -= 22;
            });
          } else if (card.text) {
            const descColor = page.bgType === 'dark' ? '0.78 0.84 0.92' : '0.35 0.42 0.50';
            const words = card.text.split(' ');
            let line = '';
            let lineY = cardY + cardH - 70;
            words.forEach((w) => {
              if ((line + ' ' + w).length > 32) {
                s += `BT /F1 10 Tf ${descColor} rg ${cardX + 16} ${lineY} Td (${escapeText(line)}) Tj ET\n`;
                lineY -= 16;
                line = w;
              } else {
                line = line ? line + ' ' + w : w;
              }
            });
            if (line) {
              s += `BT /F1 10 Tf ${descColor} rg ${cardX + 16} ${lineY} Td (${escapeText(line)}) Tj ET\n`;
            }
          }

          // Quote or footer note in card
          if (card.footer) {
            s += `BT /F1 9 Tf 0.5 0.6 0.7 rg ${cardX + 16} ${cardY + 16} Td (${escapeText(card.footer)}) Tj ET\n`;
          }
        });
      } else if (page.layout === 'grid-2') {
        // 2 Columns
        const cardW = (width - 100 - 24) / 2;
        const cardH = availableHeight;
        page.cards.forEach((card, cIdx) => {
          const cardX = 50 + cIdx * (cardW + 24);
          const cardY = startY - cardH;

          if (page.bgType === 'dark') {
            s += `0.09 0.20 0.36 rg ${cardX} ${cardY} ${cardW} ${cardH} re f\n`;
            s += `0.15 0.30 0.50 RG 1 w ${cardX} ${cardY} ${cardW} ${cardH} re S\n`;
          } else {
            s += `0.97 0.98 0.99 rg ${cardX} ${cardY} ${cardW} ${cardH} re f\n`;
            s += `0.88 0.91 0.94 RG 1 w ${cardX} ${cardY} ${cardW} ${cardH} re S\n`;
          }

          const barColor = card.color || '0.008 0.518 0.780';
          s += `${barColor} rg ${cardX} ${cardY + cardH - 5} ${cardW} 5 re f\n`;

          const cardTitleColor = page.bgType === 'dark' ? '1 1 1' : '0.043 0.118 0.231';
          s += `BT /F2 15 Tf ${cardTitleColor} rg ${cardX + 22} ${cardY + cardH - 34} Td (${escapeText(card.title || '')}) Tj ET\n`;

          if (card.tag) {
            s += `BT /F2 10 Tf ${barColor} rg ${cardX + 22} ${cardY + cardH - 52} Td (${escapeText(card.tag)}) Tj ET\n`;
          }

          if (card.items && Array.isArray(card.items)) {
            let lineY = cardY + cardH - 80;
            const itemColor = page.bgType === 'dark' ? '0.85 0.90 0.96' : '0.25 0.30 0.38';
            card.items.forEach((item) => {
              s += `${barColor} rg ${cardX + 24} ${lineY + 3} 5 5 re f\n`;
              s += `BT /F1 11 Tf ${itemColor} rg ${cardX + 38} ${lineY} Td (${escapeText(item)}) Tj ET\n`;
              lineY -= 26;
            });
          }
        });
      }
    }

    // Cover page layout
    if (page.isCover) {
      // Big Hero Center layout
      s += `BT /F2 36 Tf 1 1 1 rg 60 ${height - 230} Td (${escapeText(page.heroTitle || 'DijitalBuyukanne')}) Tj ET\n`;
      s += `BT /F2 20 Tf 0.008 0.518 0.780 rg 60 ${height - 265} Td (${escapeText(page.heroSub || '0-24 Ay Bebek ve Aile Destek Platformu')}) Tj ET\n`;
      s += `BT /F1 14 Tf 0.75 0.85 0.95 rg 60 ${height - 305} Td (${escapeText(page.heroDesc || 'Geleneksel buyukanne sefkatini ileri yapay zeka teknolojisiyle bulusturan dijital saglik ekosistemi.')}) Tj ET\n`;

      // Stat badges at bottom
      const badges = [
        { label: '0-24 Ay Takip', value: '18-Eklem AI Analizi', x: 60 },
        { label: 'Bilimsel Dayanak', value: 'OMU Samsun Teknopark', x: 280 },
        { label: 'Kesintisiz Destek', value: '7/24 Dijital Rehberlik', x: 500 },
      ];

      badges.forEach((b) => {
        s += `0.09 0.20 0.36 rg ${b.x} 120 200 65 re f\n`;
        s += `0.15 0.30 0.50 RG 1 w ${b.x} 120 200 65 re S\n`;
        s += `BT /F2 11 Tf 0.008 0.518 0.780 rg ${b.x + 16} 160 Td (${escapeText(b.label)}) Tj ET\n`;
        s += `BT /F2 13 Tf 1 1 1 rg ${b.x + 16} 138 Td (${escapeText(b.value)}) Tj ET\n`;
      });
    }

    // Footer bar
    const footerTextColor = page.bgType === 'dark' ? '0.45 0.55 0.65' : '0.55 0.62 0.70';
    s += `BT /F1 9 Tf ${footerTextColor} rg 50 42 Td (${escapeText(docTitle)}  |  Kurumsal Sunum Dosyasi  |  Gizli ve Ozel) Tj ET\n`;
    s += `BT /F2 9 Tf ${footerTextColor} rg ${width - 100} 42 Td (Sayfa ${idx + 1} / ${numPages}) Tj ET\n`;

    return s;
  });

  // Construct PDF Objects string
  let pdf = `%PDF-1.4\n%âãÏÓ\n`;

  // Object 1: Catalog
  const obj1Offset = pdf.length;
  pdf += `1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n`;

  // Object 2: Pages
  const obj2Offset = pdf.length;
  const kidsStr = pageObjIds.map((id) => `${id} 0 R`).join(' ');
  pdf += `2 0 obj\n<< /Type /Pages /Kids [${kidsStr}] /Count ${numPages} >>\nendobj\n`;

  // Object 3: Font Regular (Helvetica)
  const obj3Offset = pdf.length;
  pdf += `3 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>\nendobj\n`;

  // Object 4: Font Bold (Helvetica-Bold)
  const obj4Offset = pdf.length;
  pdf += `4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>\nendobj\n`;

  const offsets = [obj1Offset, obj2Offset, obj3Offset, obj4Offset];

  // Add Page objects and Content stream objects
  for (let i = 0; i < numPages; i++) {
    const pageId = pageObjIds[i];
    const contentId = contentObjIds[i];
    const stream = contentStreams[i];
    const streamLen = Buffer.byteLength(stream, 'utf-8');

    // Page object
    offsets.push(pdf.length);
    pdf += `${pageId} 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentId} 0 R >>\nendobj\n`;

    // Content object
    offsets.push(pdf.length);
    pdf += `${contentId} 0 obj\n<< /Length ${streamLen} >>\nstream\n${stream}\nendstream\nendobj\n`;
  }

  // Cross-reference table
  const startXref = pdf.length;
  const totalObjects = 4 + numPages * 2;
  pdf += `xref\n0 ${totalObjects + 1}\n0000000000 65535 f \n`;

  for (let i = 0; i < offsets.length; i++) {
    const offsetStr = String(offsets[i]).padStart(10, '0');
    pdf += `${offsetStr} 00000 n \n`;
  }

  // Trailer
  pdf += `trailer\n<< /Size ${totalObjects + 1} /Root 1 0 R >>\nstartxref\n${startXref}\n%%EOF\n`;

  return Buffer.from(pdf, 'utf-8');
}

// Data for General Presentation (DijitalBüyükanne)
const generalPresentationData = [
  // 1. Kapak
  {
    isCover: true,
    bgType: 'dark',
    heroTitle: 'Dijital Buyukanne',
    heroSub: 'Her bebegin bir Dijital Buyukannesi olsun.',
    heroDesc: '0-24 Ay Bebek ve Aile Destek Platformu. Yapay Zeka Destekli Erken Tarama & Hekim Guvencesi.',
  },
  // 2. Vizyon ve Yonetici Ozeti
  {
    bgType: 'light',
    eyebrow: 'Bolum 01: Ekosistem ve Vizyon',
    title: 'Geleneksel Sefkat, Ileri Biyomedikal Teknoloji',
    subtitle: 'Turkiyenin ilk yerli yapay zeka destekli pediatrik erken tarama ve aile rehberlik platformu.',
    layout: 'grid-3',
    cards: [
      {
        title: 'Aile Odakli Erisim',
        tag: '7/24 Kesintisiz Rehberlik',
        color: '0.008 0.518 0.780',
        items: [
          'Evden yapilan 2 dakikalik video taramalari',
          'Gece 03:00 acil olmayan huzursuzluk destegi',
          'Pediatrik onayli sefkatli ses tonu ve dil',
          'Akilli bildirimlerle kritik donem uyarilari',
        ],
      },
      {
        title: '3 Akilli Tarama Modeli',
        tag: 'BabySensAI Algoritmasi',
        color: '1.0 0.353 0.263',
        items: [
          '18-Eklem kinematik video hareket analizi',
          'AI destekli bebek cilt hassasiyet taramasi',
          'DSÖ renk skalasina gore diski & sindirim analizi',
          'Hekime erken basvuru ve risk skorlamasi',
        ],
      },
      {
        title: 'Kurumsal Sosyal Etki',
        tag: 'Belediyeler & Vakiflar',
        color: '0.063 0.725 0.506',
        items: [
          'Yenidogan ziyaret paketlerine entegre erisim',
          'Sosyal belediyecilikte olculebilir saglik etkisi',
          'Kamu sagligi risk haritasi ve veri paneli',
          'Dar gelirli hanelere tam esit erisim firsati',
        ],
      },
    ],
  },
  // 3. Problem ve Ihtiyac Analizi
  {
    bgType: 'light',
    eyebrow: 'Bolum 02: Ihtiyac Analizi',
    title: 'Erken Donemde Fark Edilmeyen Riskler & Cozumumuz',
    subtitle: 'Neden erken farkindalik bir bebegin gelecegi icin en kritik donemdir?',
    layout: 'grid-2',
    cards: [
      {
        title: 'Geleneksel Surecin Karsilastigi Engeller',
        tag: 'Mevcut Durum & Zorluklar',
        color: '0.90 0.25 0.25',
        items: [
          'Zamanla gecer algisiyla kaybedilen kritik 0-6 ay motor gelisim penceresi',
          'Internetteki kontrolsuz bilgi kirliliginin ailelerde yarattigi panik',
          'Hastaneler ve hekimlere gecikmeli basvurular nedeniyle artan saglik maliyetleri',
          'Sehirlerarasi uzman hekim erisimindeki cografi ve ekonomik esitsizlikler',
        ],
      },
      {
        title: 'DijitalBuyukanne ile Getirilen Cozum',
        tag: 'Yeni Nesil Biyomedikal Yaklasim',
        color: '0.063 0.725 0.506',
        items: [
          'Evde cekilen 2 dakikalik videodan algoritmik hareket simetrisi takibi',
          'Uluslararasi pediatrik rehberlere sadik, hekim denetimli guvenli icerik',
          'Gereksiz acil basvurularini azaltan, riskli durumlarda derhal sevk eden model',
          'Belediyeler araciligiyla her haneye ulasan demokratik ve ucretsiz erisim',
        ],
      },
    ],
  },
  // 4. BabySensAI Teknolojisi
  {
    bgType: 'dark',
    eyebrow: 'Bolum 03: Patentli Ar-Ge Teknolojisi',
    title: 'BabySensAI: 3 Akilli Klinik Tarama Protokolu',
    subtitle: 'Derin ogrenme modelleri ve goruntu isleme algoritmalarinin yenidogan sagligindaki gucu.',
    layout: 'grid-3',
    cards: [
      {
        title: '18-Eklem Kinematik Video',
        tag: 'Noromotor & Hareket Analizi',
        color: '0.008 0.518 0.780',
        items: [
          '0-6 ay spontan hareket (fidgety) kalitesi',
          '18 eklem noktasinin milisaniyelik takibi',
          'Sag-sol motor asimetrisi erken tespiti',
          'Norolojik ve kas hastaliklari risk indeksi',
        ],
      },
      {
        title: 'Piksel Bazli AI Cilt Analizi',
        tag: 'Dermatolojik On Tarama',
        color: '1.0 0.353 0.263',
        items: [
          'Konak, pisik ve atopi erken sinyalleri',
          'RGB renk uzayi ve doku homojenlik analizi',
          'Evde dogru bakim ve hekim sevk uyarisi',
          'Yanlis krem kullaniminin onune gecilmesi',
        ],
      },
      {
        title: 'Pediatrik Diski & Sindirim',
        tag: 'DSÖ 6-Seviyeli Renk Skalasi',
        color: '0.90 0.65 0.15',
        items: [
          'Bebek bezi fotografindan piksel esleme',
          'Safra yolu tikanikligi & kolestaz tespiti',
          'Besin alerjisi ve dehidratasyon takibi',
          'Hekime gosterilmek uzere dijital saglik kaydi',
        ],
      },
    ],
  },
  // 5. Bilim Kurulu ve Akademik Kadro
  {
    bgType: 'light',
    eyebrow: 'Bolum 04: Bilimsel Guvence & Danisma Kurulu',
    title: 'Yapay Zekayi Klinik Uzmanlik ve Etik Ilkelerle Bulusturuyoruz',
    subtitle: 'OMU Samsun Teknopark bunyesinde, alaninda oncu hekim ve akademisyenler rehberliginde.',
    layout: 'grid-3',
    cards: [
      {
        title: 'Ogr. Gor. Dr. Sema Gul',
        tag: 'Adapha Kurucu / Biyomedikal Sistemler',
        color: '0.008 0.518 0.780',
        items: [
          'OMU Samsun Teknopark / Adapha AI',
          'Yapay Zeka Destekli Erken Tani Modelleri',
          'Biyomedikal Saglik Veri Analitigi Mimari',
          'Erken teshis teknolojileriyle saglikli gelecek',
        ],
      },
      {
        title: 'Doc. Dr. Muammer Turkoglu',
        tag: 'Adapha Ortagi / Teknik Sorumlu (CTO)',
        color: '1.0 0.353 0.263',
        items: [
          'OMU Muhendislik Fakultesi / Adapha',
          'Derin Ogrenme & 18-Eklem Kinematik Video',
          'Yuksek dogruluklu norogelisimsel AI modelleri',
          'Bilimsel veriyi ileri yapay zeka ile bulusturma',
        ],
      },
      {
        title: 'Prof. Dr. Canan Seren',
        tag: 'Klinik Danisman / Neonatoloji Uzmani',
        color: '0.063 0.725 0.506',
        items: [
          'OMU Tip Fakultesi Pediatri Anabilim Dali',
          'Neonatoloji Bilim Dali Baskani / Klinik Protokol',
          'Yenidogan gelisim dongusu ve noromotor takip',
          'Klinik uzmanlik ve dogru zamanlamanin degeri',
        ],
      },
    ],
  },
  // 6. Gercek Hayat Etki Hikayeleri
  {
    bgType: 'light',
    eyebrow: 'Bolum 05: Gercek Hayattan Etki Hikayeleri',
    title: 'Teknoloji Bilimdir, Bir Bebegin Adimi Ise Bir Mucizedir',
    subtitle: 'Erken farkindalikla zamaninda uzman destegine ulasan ailelerimizin basari yolculuklari.',
    layout: 'grid-2',
    cards: [
      {
        title: '32 Haftalik Zeynep Bebegin Bagimsiz Yuruyusu',
        tag: 'Erken Noromotor Mudahale - Ankara',
        color: '0.008 0.518 0.780',
        items: [
          '32. haftada premature dogan Zeynepin bacak itisindeki asimetri 9. haftada tespit edildi.',
          'Evden cekilen video ile pediatrik noroloji ve fizyoterapist destegi derhal baslatildi.',
          '14. ayda Zeynep hicbir yardim almadan ilk bagimsiz adimlarini guvenle atti.',
          'Iyi ki zamanla gecer diyerek beklememisiz. (Anne Elif K.)',
        ],
      },
      {
        title: '1.200 Haneye Ulasan Sehir Aile Ekosistemi',
        tag: 'Sosyal Belediyecilik Is Birligi - Samsun',
        color: '0.063 0.725 0.506',
        items: [
          'Belediye yenidogan ziyaret paketine DijitalBuyukanne erisim lisansi entegre edildi.',
          '12 ay icerisinde 1.200 yeni dogan haneye 7/24 yapay zeka ve uzman destegi ulasti.',
          '28 bebekte erken donemde motor gelisim gecikmesi sinyali hekimlere yonlendirildi.',
          '%98.4 aile memnuniyetiyle ornek sosyal belediyecilik tescillendi.',
        ],
      },
    ],
  },
  // 7. Kurumsal Model ve Belediyeler
  {
    bgType: 'dark',
    eyebrow: 'Bolum 06: Yerel Yonetimler & Kurumsal Model',
    title: 'Sehir Olceginde Sosyal Belediyecilik ve Kamu Sagligi',
    subtitle: 'Her haneye ulasan dijital altyapi, sifir donanim maliyeti, yuksek sosyal fayda.',
    layout: 'grid-3',
    cards: [
      {
        title: 'Hazir Entegrasyon',
        tag: 'Mobil & Web Altyapisi',
        color: '0.008 0.518 0.780',
        items: [
          'Belediye kurumsal kimligine ozel QR kartlar',
          'iOS ve Android marketlerden kolay indirme',
          'Aileler icin tamamen ucretsiz erisim',
          'KVKK ve saglik verisi tam koruma standardi',
        ],
      },
      {
        title: 'Veri & Etki Paneli',
        tag: 'Yonetici Paneli (Dashboard)',
        color: '1.0 0.353 0.263',
        items: [
          'Ilce/mahalle bazli yenidogan saglik egilimleri',
          'Erken yonlendirilen vaka sayilari ve basari orani',
          'Olculebilir sosyal getiri (SROI) raporlamasi',
          'Donemsel stratejik kamu sagligi bultenleri',
        ],
      },
      {
        title: 'Hekim & Uzman Agy',
        tag: 'Kesintisiz Yonlendirme',
        color: '0.063 0.725 0.506',
        items: [
          'Yerel hekim ve saglik merkezleriyle koordinasyon',
          'Gereksiz tetkik ve acil masraflarinin onune gecis',
          'Premature ve ozel gereksinimli bebek onceligi',
          'Aile hekimligi ile entegre veri destegi',
        ],
      },
    ],
  },
  // 8. Iletisim ve Is Birligi
  {
    bgType: 'dark',
    eyebrow: 'Bolum 07: Birlikte Gelecegi Buyutelim',
    title: 'Iletisim & Kurumsal Is Birligi Masasi',
    subtitle: 'Kurumunuzu veya belediyenizi DijitalBuyukanne ekosistemine dahil edin.',
    layout: 'grid-2',
    cards: [
      {
        title: 'Kurumsal Is Birligi & Protokol',
        tag: 'Genel Koordinasyon Masasi',
        color: '0.008 0.518 0.780',
        items: [
          'E-Posta: bilgi@dijitalbuyukanne.com',
          'Web: https://dijitalbuyukanne.vercel.app',
          'Telefon: +90 (850) 840 00 00',
          'OMU Samsun Teknopark Ar-Ge Binasi No: 42',
        ],
      },
      {
        title: 'Adapha Yapay Zeka Ar-Ge Kadrosu',
        tag: 'Teknik & Bilimsel Ortaklik',
        color: '1.0 0.353 0.263',
        items: [
          'Adapha Saglik Teknolojileri Ltd. Sti.',
          'Web: https://www.adapha.com/tr',
          'BabySensAI Patentli Goruntu Isleme Altyapisi',
          'Uluslararasi Pediatrik Arastirma Standartlari',
        ],
      },
    ],
  },
];

// Data for Rotary Presentation
const rotaryPresentationData = [
  // 1. Kapak
  {
    isCover: true,
    bgType: 'dark',
    heroTitle: 'Rotary & Dijital Buyukanne',
    heroSub: 'Anne ve Cocuk Sagligi Projesi Resmi Sunumu',
    heroDesc: 'Rotary Kulubu 2430. Bolge | Kendinden Once Hizmet Anlayisiyla Bebeklerimizin Yanindayiz.',
  },
  // 2. Rotary Odak Alanı
  {
    bgType: 'light',
    eyebrow: 'Rotary Oncelikli Alan',
    title: 'Anne ve Cocuk Sagliginda Teknolojik Hamle',
    subtitle: 'Rotarynin en temel 7 odak alanindan biri olan anne ve cocuk sagliginda yapay zeka rehberligi.',
    layout: 'grid-3',
    cards: [
      {
        title: 'Rotary Vizyonu',
        tag: 'Kendinden Once Hizmet',
        color: '0.090 0.271 0.561',
        items: [
          'Toplumsal kalkinmada cocuk sagligi onceligi',
          'Her yenidogana esit ve kaliteli saglik imkani',
          'Rotary kulup uyelerinin ortak gonullu destegi',
          'Surdurulebilir ve olculebilir sosyal fayda',
        ],
      },
      {
        title: 'Hediyelik Fular Projesi',
        tag: 'Sevgiyle Orulen Bag',
        color: '0.968 0.658 0.105',
        items: [
          'Her yenidogan bebege Rotary amblemli fular',
          'Fular uzerinde ozel QR kodlu mobil erisim',
          'Aileye Rotary sefkatini ve destegini hissettirme',
          'Hastanelerde ve ziyaretlerde torensel teslim',
        ],
      },
      {
        title: 'Yapay Zeka Destegi',
        tag: 'DijitalBuyukanne & BabySensAI',
        color: '0.008 0.518 0.780',
        items: [
          '0-24 ay boyunca aileye ucretsiz erisim lisansi',
          'Evden yapilan 18-eklem noromotor video tarama',
          'Gece gunduz uzman filtreli yapay zeka asistani',
          'Rotary adina gerceklestirilen buyuk sosyal etki',
        ],
      },
    ],
  },
  // 3. Proje Uygulama Aşamaları
  {
    bgType: 'light',
    eyebrow: 'Uygulama Modeli',
    title: 'Rotary Kulup ve Bolge Duzeyinde Proje Isleyisi',
    subtitle: 'Bir kulubun baslatabilecegi, tum bolgeye ornek olacak asamali calisma plani.',
    layout: 'grid-2',
    cards: [
      {
        title: '1. Asama: Hazirlik ve Sponsorluk',
        tag: 'Kulup ici Organizasyon',
        color: '0.090 0.271 0.561',
        items: [
          'Kulup baskanligi ve donem projeleri komitesi karari',
          'Rotary fularlarinin temini ve QR kod entegrasyonu',
          'Yerel devlet hastaneleri ve kadin-dogum servisleri protokolleri',
          'Ilce saglik mudurlukleri ve belediye is birligi',
        ],
      },
      {
        title: '2. Asama: Dagitim ve Etki Raporu',
        tag: 'Saha ve Olcumleme',
        color: '0.968 0.658 0.105',
        items: [
          'Yenidogan ailelerine hediye fular ve dijital kart teslimi',
          'Ailelerin mobil uygulamaya kaydolmasi ve taramalarin baslamasi',
          'Rotary bultenlerinde ve medyada projenin yer almasi',
          'Yil sonunda Bolge Guvarnorlugune sunulacak etki karnesi',
        ],
      },
    ],
  },
  // 4. Rotary Iletisim
  {
    bgType: 'dark',
    eyebrow: 'Birlikte Hizmet Edelim',
    title: 'Rotary Proje Koordinasyon ve Iletisim Masasi',
    subtitle: 'Kulubunuzde bu projeyi hayata gecirmek icin bizimle hemen irtibata gecin.',
    layout: 'grid-2',
    cards: [
      {
        title: 'Rotary Is Birligi Masasi',
        tag: 'Proje Komitesi Destegi',
        color: '0.968 0.658 0.105',
        items: [
          'E-Posta: rotary@dijitalbuyukanne.com',
          'Web: https://dijitalbuyukanne.vercel.app/rotary',
          'Telefon: +90 (850) 840 00 00',
          'Rotary 2430. Bolge Kulup Temsilciligi',
        ],
      },
      {
        title: 'Bilimsel ve Teknik Destek',
        tag: 'Adapha Yapay Zeka Ar-Ge',
        color: '0.008 0.518 0.780',
        items: [
          'OMU Samsun Teknopark Ar-Ge Merkezi',
          'Pediatrik Noroloji ve Neonatoloji Rehberligi',
          'Uygulama Gelistirme ve Lisanslama Altyapisi',
          'Rotary Sunum ve Bulten Materyalleri Temini',
        ],
      },
    ],
  },
];

// Ensure public/docs folder exists
const docsDir = path.join(__dirname, '..', 'public', 'docs');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

// Generate general presentation PDF
const generalPdf = createPdfDocument(generalPresentationData, 'DijitalBuyukanne');
const generalPdfPath = path.join(docsDir, 'dijital-buyukanne-sunum.pdf');
fs.writeFileSync(generalPdfPath, generalPdf);
console.log('Successfully generated:', generalPdfPath, `(${generalPdf.length} bytes)`);

// Generate Rotary presentation PDF
const rotaryPdf = createPdfDocument(rotaryPresentationData, 'Rotary & DijitalBuyukanne');
const rotaryPdfPath = path.join(docsDir, 'rotary-dijital-buyukanne-sunum.pdf');
fs.writeFileSync(rotaryPdfPath, rotaryPdf);
console.log('Successfully generated:', rotaryPdfPath, `(${rotaryPdf.length} bytes)`);
