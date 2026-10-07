import type { Metadata } from "next";
import config from "@/data/config.json";

const { siteName, siteUrl } = config.seo;

interface MetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description = "DijitalBüyükanne; aileleri, uzmanları, teknolojiyi ve sosyal destek sağlayan kurumları aynı dijital ekosistemde buluşturan 0–24 ay bebek ve aile destek platformudur.",
  path = "/",
  // app/opengraph-image.tsx ile build sırasında üretilen varsayılan paylaşım görseli
  ogImage = "/opengraph-image",
  noIndex = false,
}: MetadataOptions = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} — Her bebeğin bir Dijital Büyükannesi olsun`;
  const url = `${siteUrl}${path}`;

  return {
    // Kök layout'taki "%s | DijitalBüyükanne" şablonu başlığa ikinci kez eklenmesin
    title: { absolute: fullTitle },
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      type: "website",
      locale: "tr_TR",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}
