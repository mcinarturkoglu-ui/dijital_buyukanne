export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DijitalBüyükanne",
    url: "https://dijitalbuyukanne.com",
    logo: "https://dijitalbuyukanne.com/images/logo.svg",
    description:
      "DijitalBüyükanne; aileleri, uzmanları, teknolojiyi ve sosyal destek sağlayan kurumları aynı dijital ekosistemde buluşturan 0–24 ay bebek ve aile destek platformudur.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "info@dijitalbuyukanne.com",
      availableLanguage: "Turkish",
    },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DijitalBüyükanne",
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Android",
    description:
      "0–24 ay bebek ve aile destek uygulaması. Yapay zekâ destekli hareket analizi, cilt analizi, dijital aile asistanı ve uzman danışmanlığı.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TRY",
    },
    inLanguage: "tr",
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
