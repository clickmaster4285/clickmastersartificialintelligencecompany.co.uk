import PlaceholderPage, { placeholderMetadata } from "../Components/PlaceholderPage";

// Hub page for /hire. Uses the placeholder template (noindex) while its status
// is "placeholder" in app/config/navigation.ts.
// TODO: replace with a real hub page, then set the status to "live".
export const metadata = placeholderMetadata("/hire");

export default function Page() {
  return <PlaceholderPage href="/hire" />;
}
