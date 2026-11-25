/*
 * Trust content for the /services hub and /services/ai-development.
 *
 * TODO: Add real, verifiable client logos, testimonials and case-study
 * metrics, each with the client's written permission. Leave the arrays empty
 * until then: <TrustSection /> renders nothing while they are empty.
 * Never add invented clients, quotes, statistics or awards.
 */

export type TrustLogo = { name: string; src: string; width: number; height: number };
export type TrustTestimonial = { quote: string; name: string; role: string; company: string };
export type TrustMetric = { value: string; label: string; caseStudyHref?: string };

export const TRUST: {
  logos: TrustLogo[];
  testimonials: TrustTestimonial[];
  metrics: TrustMetric[];
} = {
  logos: [],
  testimonials: [],
  metrics: [],
};
