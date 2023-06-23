import SocialIconArray from "@abhyi/components/Sections/SocialIconArray";
import { Window } from "@abhyi/components/ui";

export default function Home() {
  return (
    <Window>
      <div className="bg-p-9 dark:bg-p-1 w-full flex justify-center">
        {/* hero */}
        <div className="max-w-5xl w-full p-10 flex flex-col">
          {/* social icons */}
          <div className="flex gap-5 items-center self-end">
            <SocialIconArray />
          </div>
          {/* name */}
          <h1 className="text-4xl font-extralight">
            <span className="text-p-0 dark:text-p-9">Abhishek</span>
            <br />
            <span className="text-p-5">Yanjarappa</span>
          </h1>
          {/* caption */}
          <p className="text-p-0 dark:text-p-10 self-end font-thin mt-8">
            Developer and Designer
            <br />
            based in Bengaluru.
          </p>
        </div>
      </div>
    </Window>
  );
}
