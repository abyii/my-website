import clsx from "clsx";
import React from "react";

export const MdxStyler: React.FC<JSX.IntrinsicElements["div"]> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "w-full max-w-5xl h-full",
        "prose dark:prose-invert prose-neutral",
        "prose-headings:font-semibold prose-headings:text-p-0 dark:prose-headings:text-p-9",
        "prose-p:text-p-0 dark:prose-p:text-p-9 prose-p:font-normal prose-p:leading-normal prose-p:text-[15px]",
        "prose-hr:border-p-6",
        "prose-li:text-[15px]",
        className
      )}
    >
      {children}
    </div>
  );
};
