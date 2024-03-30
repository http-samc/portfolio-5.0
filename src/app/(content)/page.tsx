import Hero from "@/components/home/Hero";
import CommandWindow from "@/components/home/CommandWindow";

export default function Home() {
  return (
    <div className="flex flex-col space-y-24">
      <Hero />
      <CommandWindow />
    </div>
  );
}
