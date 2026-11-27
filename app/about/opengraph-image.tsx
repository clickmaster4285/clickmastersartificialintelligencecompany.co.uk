import { OG_SIZE, serviceOgImage } from "../lib/service-og";

// Social sharing image for /about (built at build time).
export const alt = "About ClickMasters Artificial Intelligence Company";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "About ClickMasters",
    accent: "Intelligent ideas, practical solutions",
    rows: [
      [["AI that answers, predicts, automates", "purple"]],
      [["Understand", "plain"], ["Build", "plain"], ["Improve", "plain"]],
      [["Custom software", "teal"], ["Cloud & data", "teal"]],
      [["Built around real business needs", "sun"]],
    ],
  });
}
