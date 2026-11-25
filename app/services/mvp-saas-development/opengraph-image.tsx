import { OG_SIZE, serviceOgImage } from "../../lib/service-og";

// Social sharing image for /services/mvp-saas-development (built at build time).
export const alt = "MVP & SaaS Development Services UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "MVP & SaaS Development Services",
    accent: "Validate, launch and scale your product",
    rows: [
      [["Discovery", "plain"], ["MVP in 6–8 weeks", "purple"]],
      [["Launch", "plain"], ["Iterate", "plain"], ["Feedback", "plain"]],
      [["Multi-tenant", "teal"], ["Roles", "teal"], ["SSO", "teal"]],
      [["Subscriptions & billing", "sun"]],
    ],
  });
}
