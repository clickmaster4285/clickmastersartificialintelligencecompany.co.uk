import { OG_SIZE, serviceOgImage } from "../../lib/service-og";

// Social sharing image for /services/custom-software-development (built at build time).
export const alt = "Custom Software Development Services UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "Custom Software Development Services",
    accent: "Built around how your business works",
    rows: [
      [["Web app", "plain"], ["Mobile", "plain"], ["Portal", "plain"]],
      [["API layer · roles · audit log", "purple"]],
      [["Orders", "teal"], ["CRM", "teal"], ["Workflows", "teal"]],
      [["Payments · Accounting · Legacy", "sun"]],
    ],
  });
}
