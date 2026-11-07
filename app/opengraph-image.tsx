import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Default social sharing image for every page (generated at build time).
export const alt = "ClickMasters – AI Software Development Company UK";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/assets/logo.png"));
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
          background: "#ffffff",
          borderBottom: "16px solid #A000DF",
          fontFamily: "serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={542} height={74} alt="" />
        <div style={{ marginTop: 56, fontSize: 64, fontWeight: 700, color: "#333333" }}>
          AI Software Development
        </div>
        <div style={{ marginTop: 8, fontSize: 56, fontStyle: "italic", color: "#A000DF" }}>
          That Scales Your Business
        </div>
      </div>
    ),
    size
  );
}
