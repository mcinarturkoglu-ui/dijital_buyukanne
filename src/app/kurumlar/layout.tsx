import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

// Sayfa bir client component olduğundan metadata bu layout üzerinden tanımlanır
export const metadata: Metadata = generatePageMetadata({
  title: "Kurumlar İçin",
  description: "Belediyeler, valilikler, vakıflar ve sosyal sorumluluk kurumları için DijitalBüyükanne iş birliği, pilot program ve demo talebi.",
  path: "/kurumlar",
});

export default function KurumlarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
