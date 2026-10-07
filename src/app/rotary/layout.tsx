import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

// Sayfa bir client component olduğundan metadata bu layout üzerinden tanımlanır
export const metadata: Metadata = generatePageMetadata({
  title: "Rotary İş Birliği",
  description: "Rotary kulüpleri ve DijitalBüyükanne iş birliği: nöromotor erken teşhis, sosyal etki simülatörü ve kulüp yol haritası.",
  path: "/rotary",
});

export default function RotaryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
