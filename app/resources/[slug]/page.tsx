import type { Metadata } from "next";
import PlaceholderPage, { placeholderMetadata } from "../../Components/PlaceholderPage";
import { placeholderParams } from "../../config/navigation";

// Placeholder landing pages for /resources/* items with status "placeholder" in
// app/config/navigation.ts. A real app/resources/<slug>/page.tsx takes precedence.
const SECTION = "/resources";

type Props = { params: Promise<{ slug: string }> };

// Only slugs from the nav config are generated; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return placeholderParams(SECTION);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return placeholderMetadata(`${SECTION}/${slug}`);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <PlaceholderPage href={`${SECTION}/${slug}`} />;
}
