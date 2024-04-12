import Hero from "@/components/home/hero";
import CommandWindow from "@/components/home/command-window";
import { getMostRecentLocation } from "@/lib/queries";
import ImagePreview from "@/components/ui/image-preview";
import GitHubBadge from "@/components/ui/github-badge";

export default async function Home() {
  const location = await getMostRecentLocation();

  return (
    <div className="flex flex-col sm:space-y-24">
      <Hero location={location!.name} />
      <CommandWindow />
    </div>
  );
}
