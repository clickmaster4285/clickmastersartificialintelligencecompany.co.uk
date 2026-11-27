import { OG_SIZE, serviceOgImage } from "../../lib/service-og";

// Social sharing image for /industries/enterprise-saas (built at build time).
export const alt = "Enterprise SaaS Development & AI Software UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "Enterprise SaaS",
    accent: "Scales, integrates and lasts",
    rows: [
      [["SSO", "plain"], ["Roles", "plain"], ["Audit logs", "plain"], ["APIs", "plain"]],
      [["Search", "purple"], ["Assistants", "purple"], ["Agents", "purple"]],
      [["Tenant A", "teal"], ["Tenant B", "teal"], ["Tenant C", "teal"]],
      [["CRM · ERP · Billing · Identity", "sun"]],
    ],
  });
}
