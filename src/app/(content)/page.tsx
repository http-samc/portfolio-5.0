import Hero from "@/components/home/Hero";
import CommandWindow from "@/components/home/CommandWindow";
import { getMostRecentLocation } from "@/lib/queries";

export default async function Home() {
  const location = await getMostRecentLocation();

  return (
    <div className="flex flex-col sm:space-y-24">
      <Hero location={location!.name} />
      <CommandWindow />
    </div>
  );
}
