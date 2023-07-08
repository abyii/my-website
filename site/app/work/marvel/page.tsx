import { Window } from "@abhyi/components/ui";
import Mdx from "./marvel.mdx";
import { AppBar } from "@abhyi/components/ui/AppBar";
import { MdxStyler } from "@abhyi/components/ui/MdxStyler";

export default function page() {
  return (
    <>
      <Window className="flex flex-col items-center bg-p-10 dark:bg-p-1">
        <AppBar />
        <MdxStyler className="py-40 px-8">
          <Mdx />
        </MdxStyler>
      </Window>
    </>
  );
}
