import { OG_SIZE, serviceOgImage } from "../../lib/service-og";

// Social sharing image for /solutions/crm-software (built at build time).
export const alt = "Custom CRM Software Development UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "Custom CRM Software",
    accent: "Built around how your team sells and serves",
    rows: [
      [["Lead", "plain"], ["Qualified", "plain"], ["Proposal", "plain"], ["Won", "purple"]],
      [["Contacts", "teal"], ["Pipeline", "teal"], ["Service", "teal"]],
      [["Automated follow-ups", "purple"]],
      [["Website · Email · ERP", "sun"]],
    ],
  });
}
