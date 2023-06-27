import { Window } from "@abhyi/components/ui";
import Mdx from "./marvel.mdx";
import { AppBar } from "@abhyi/components/ui/AppBar";

export default function page() {
  return (
    <>
      <Window className="flex flex-col items-center bg-p-9 dark:bg-p-1">
        <AppBar />
        <div className="w-full h-full py-52 prose prose-zinc dark:prose-invert prose-headings:font-semibold">
          <Mdx />
        </div>
      </Window>
    </>
  );
}
