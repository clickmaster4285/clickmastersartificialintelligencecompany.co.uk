import { OG_SIZE, serviceOgImage } from "../../lib/service-og";

// Social sharing image for /services/web-application-development (built at build time).
export const alt = "Web Application Development Services UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "Web Application Development Services",
    accent: "Secure, scalable business apps",
    rows: [
      [["React / Next.js UI", "purple"]],
      [["Auth", "plain"], ["Roles", "plain"], ["Business rules", "plain"]],
      [["Database", "teal"], ["Cache", "teal"], ["Files", "teal"]],
      [["Payments · CRM · ERP APIs", "sun"]],
    ],
  });
}
