import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };

type Tone = "plain" | "purple" | "teal" | "sun";
const TONES: Record<Tone, [string, string, string]> = {
  plain: ["#ffffff", "#D9CDE3", "#1a1a1a"],
  purple: ["#F7EFFA", "#AF00E8", "#7a00a8"],
  teal: ["#E3F7F5", "#0F9F94", "#1a1a1a"],
  sun: ["#FDF4D7", "#E3A600", "#1a1a1a"],
};

/**
 * Social sharing image for a service page: logo, title and accent line on the
 * left, a small stack of labelled boxes on the right (rows of [label, tone]).
 */
export async function serviceOgImage({
  title,
  accent,
  rows,
}: {
  title: string;
  accent: string;
  rows: [string, Tone][][];
}) {
  const logo = await readFile(join(process.cwd(), "public/assets/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#faf9f7", borderBottom: "16px solid #AF00E8" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 0 0 72px", width: 640 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={330} height={45} alt="" />
          <div style={{ marginTop: 44, fontSize: 58, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.08, fontFamily: "serif" }}>{title}</div>
          <div style={{ marginTop: 14, fontSize: 36, fontStyle: "italic", color: "#AF00E8", fontFamily: "serif" }}>{accent}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 18, padding: "0 60px 0 20px", flex: 1 }}>
          {rows.map((row, i) => (
            <div key={i} style={{ display: "flex", gap: 12 }}>
              {row.map(([text, tone]) => {
                const [bg, border, color] = TONES[tone];
                return (
                  <div
                    key={text}
                    style={{ display: "flex", alignItems: "center", padding: "0 22px", height: 58, flexGrow: 1, borderRadius: 14, background: bg, border: `2px solid ${border}`, color, fontSize: 22, fontWeight: 600 }}
                  >
                    {text}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    ),
    OG_SIZE
  );
}
