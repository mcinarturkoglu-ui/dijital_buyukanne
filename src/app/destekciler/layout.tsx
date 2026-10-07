import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

// Sayfa bir client component olduğundan metadata bu layout üzerinden tanımlanır
export const metadata: Metadata = generatePageMetadata({
  title: "Destekçilerimiz",
  description: "DijitalBüyükanne ekosistemini birlikte büyüttüğümüz kurumlar, kuruluşlar ve paydaşlar.",
  path: "/destekciler",
});

export default function DestekcilerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
