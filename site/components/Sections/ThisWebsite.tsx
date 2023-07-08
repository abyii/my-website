import React from "react";
import { MdxStyler } from "../ui";

const ThisWebsite = () => {
  return (
    <div className="w-full bg-p-10 dark:bg-p-0 flex justify-center">
      <div className="w-full max-w-4xl px-10 py-16">
        <MdxStyler className="prose-headings:text-p-3 dark:prose-headings:text-p-7 dark:prose-p:text-p-8">
          <h2>About this Website.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-16">
            <p>
              This is a simple website made by me. To showcase and write about
              stuff that's also made by me.
            </p>
            <p>
              A place on the internet with infinite creative freedom. Built with
              Next.js, TailwindCSS, some Radix Components, and MDX.
            </p>
          </div>
        </MdxStyler>
      </div>
    </div>
  );
};

export default ThisWebsite;
