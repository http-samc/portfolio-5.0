import Hero from "@/components/home/hero";
import CommandWindow from "@/components/home/command-window";
import { getMostRecentLocation } from "@/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    noimageindex: true,
  },
};

export default async function Home() {
  const location = await getMostRecentLocation();

  return (
    <div className="flex flex-col sm:space-y-16">
      <Hero location={location!.name} />
      <CommandWindow />
    </div>
  );
}
