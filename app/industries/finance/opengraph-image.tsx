import { OG_SIZE, serviceOgImage } from "../../lib/service-og";

// Social sharing image for /industries/finance (built at build time).
export const alt = "AI Solutions for Financial Services UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "AI for Financial Services",
    accent: "Automation and insight, with people in control",
    rows: [
      [["Invoices", "plain"], ["Statements", "plain"], ["Forms", "plain"], ["Policies", "plain"]],
      [["Classify", "purple"], ["Extract", "purple"], ["Validate", "purple"]],
      [["Analyst review", "sun"]],
      [["Finance · Cases · Reporting", "teal"]],
    ],
  });
}
