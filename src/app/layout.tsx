import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyBottomCTA from "@/components/mobile/StickyBottomCTA";
import { organizationSchema, softwareApplicationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: "DijitalBüyükanne — Her bebeğin bir Dijital Büyükannesi olsun",
    template: "%s | DijitalBüyükanne",
  },
  description:
    "DijitalBüyükanne; aileleri, uzmanları, teknolojiyi ve sosyal destek sağlayan kurumları aynı dijital ekosistemde buluşturan 0–24 ay bebek ve aile destek platformudur.",
  metadataBase: new URL("https://dijitalbuyukanne.com"),
  openGraph: {
    siteName: "DijitalBüyükanne",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema()),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyBottomCTA />
      </body>
    </html>
  );
}
