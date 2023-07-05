import About from "@abhyi/components/Sections/About";
import Hero from "@abhyi/components/Sections/Hero";
import TabsAndContent from "@abhyi/components/Sections/TabsStructure";
import { Window } from "@abhyi/components/ui";

export default function Home() {
  return (
    <Window>
      <Hero />
      <About />
      <TabsAndContent />
    </Window>
  );
}
