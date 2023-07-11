import Hero from "./Hero";
import CommandWindow from "./CommandWindow";

export default function Home() {
  return (
    <div className="flex flex-col space-y-12">
      <Hero />
      <CommandWindow />
    </div>
  );
}
