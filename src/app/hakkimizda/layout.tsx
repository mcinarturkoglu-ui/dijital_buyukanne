import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

// Sayfa bir client component olduğundan metadata bu layout üzerinden tanımlanır
export const metadata: Metadata = generatePageMetadata({
  title: "Hakkımızda",
  description: "DijitalBüyükanne neden var? Misyonumuz, vizyonumuz, değerlerimiz ve iletişim bilgilerimiz.",
  path: "/hakkimizda",
});

export default function HakkimizdaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
