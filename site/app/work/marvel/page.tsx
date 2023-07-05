import { Window } from "@abhyi/components/ui";
import Mdx from "./marvel.mdx";
import { AppBar } from "@abhyi/components/ui/AppBar";
import clsx from "clsx";

export default function page() {
  return (
    <>
      <Window className="flex flex-col items-center bg-p-10 dark:bg-p-1">
        <AppBar />
        <div
          className={clsx(
            "w-full max-w-5xl h-full py-40 px-8",
            "prose dark:prose-invert prose-neutral",
            "prose-headings:font-semibold prose-headings:text-p-0 dark:prose-headings:text-p-9",
            "prose-p:text-p-0 dark:prose-p:text-p-9 prose-p:font-normal prose-p:leading-normal prose-p:text-[15px]",
            "prose-hr:border-p-6"
          )}
        >
          <Mdx />
        </div>
      </Window>
    </>
  );
}
