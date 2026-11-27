import { OG_SIZE, serviceOgImage } from "../../lib/service-og";

// Social sharing image for /industries/manufacturing (built at build time).
export const alt = "AI Manufacturing Solutions & Industrial Software UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "AI for Manufacturing",
    accent: "Factory data, better decisions",
    rows: [
      [["Machines", "plain"], ["Sensors", "plain"], ["Operators", "plain"]],
      [["Segmented OT gateway", "sun"]],
      [["MES", "purple"], ["Quality", "purple"], ["Maintenance", "purple"], ["Analytics", "purple"]],
      [["ERP · Supply chain", "teal"]],
    ],
  });
}
