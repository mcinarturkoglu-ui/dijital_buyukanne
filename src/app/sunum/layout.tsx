import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

// Sayfa bir client component olduğundan metadata bu layout üzerinden tanımlanır
export const metadata: Metadata = generatePageMetadata({
  title: "Kurumsal Sunum",
  description: "DijitalBüyükanne kurumsal sunum dosyası.",
  path: "/sunum",
});

export default function SunumLayout({ children }: { children: React.ReactNode }) {
  return children;
}
