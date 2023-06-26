import { Window } from "@abhyi/components/ui";
import Mdx from "./marvel.mdx";

export default function page() {
  return (
    <Window className="flex justify-center bg-p-10 dark:bg-p-1">
      <div className="w-full h-full py-52 prose prose-headings:font-semibold prose-p:font-normal ">
        <Mdx />
      </div>
    </Window>
  );
}
