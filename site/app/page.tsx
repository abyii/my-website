import About from "@abhyi/components/Sections/About";
import Hero from "@abhyi/components/Sections/Hero";
import TabsAndContent from "@abhyi/components/Sections/TabsStructure";
import ThemeToggle from "@abhyi/components/Sections/ThemeToggle";
import ThisWebsite from "@abhyi/components/Sections/ThisWebsite";
import { Window } from "@abhyi/components/ui";

export default function Home() {
  return (
    <Window>
      <Hero />
      <About />
      <TabsAndContent />
      <ThisWebsite />
      <ThemeToggle />
    </Window>
  );
}
