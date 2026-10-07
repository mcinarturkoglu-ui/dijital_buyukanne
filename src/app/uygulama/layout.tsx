import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

// Sayfa bir client component olduğundan metadata bu layout üzerinden tanımlanır
export const metadata: Metadata = generatePageMetadata({
  title: "Mobil Uygulama",
  description: "DijitalBüyükanne mobil uygulaması: yapay zekâ destekli değerlendirmeler, dijital aile asistanı ve uzman desteğiyle her an bebeğinizin yanında.",
  path: "/uygulama",
});

export default function UygulamaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
