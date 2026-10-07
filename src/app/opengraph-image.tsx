import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const alt = "DijitalBüyükanne — Her bebeğin bir Dijital Büyükannesi olsun";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Sosyal medya paylaşımları için varsayılan önizleme görseli (build sırasında statik üretilir)
export default async function OpengraphImage() {
  const logo = await readFile(path.join(process.cwd(), "public/images/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #082A46 0%, #0D3A5C 100%)",
          color: "white",
          padding: 64,
        }}
      >
        <div
          style={{
            display: "flex",
            background: "white",
            borderRadius: 32,
            padding: "24px 40px",
            marginBottom: 48,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={435} height={170} alt="" />
        </div>
        <div style={{ fontSize: 52, fontWeight: 700, textAlign: "center" }}>
          Her bebeğin bir Dijital Büyükannesi olsun
        </div>
        <div style={{ fontSize: 28, marginTop: 20, color: "#9FE7E4", textAlign: "center" }}>
          0–24 ay bebek ve aile destek ekosistemi
        </div>
      </div>
    ),
    size
  );
}
