import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

// Sayfa bir client component olduğundan metadata bu layout üzerinden tanımlanır
export const metadata: Metadata = generatePageMetadata({
  title: "Sosyal Etki",
  description: "DijitalBüyükanne ile birlikte yarattığımız ölçülebilir sosyal etki ve kurumsal etki simülatörü.",
  path: "/etkimiz",
});

export default function EtkimizLayout({ children }: { children: React.ReactNode }) {
  return children;
}
