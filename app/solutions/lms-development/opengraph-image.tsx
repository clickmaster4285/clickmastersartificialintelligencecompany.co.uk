import { OG_SIZE, serviceOgImage } from "../../lib/service-og";

// Social sharing image for /solutions/lms-development (built at build time).
export const alt = "LMS Development Solutions UK – ClickMasters";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return serviceOgImage({
    title: "LMS Development Solutions",
    accent: "Custom learning platforms",
    rows: [
      [["Courses · Assessments", "purple"]],
      [["Learners", "plain"], ["Tutors", "plain"], ["Managers", "plain"]],
      [["Dashboards", "teal"], ["Reporting", "teal"]],
      [["HR · CRM · Sign-in", "sun"]],
    ],
  });
}
