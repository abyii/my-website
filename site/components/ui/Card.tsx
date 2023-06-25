import clsx from "clsx";
import React from "react";

export const Card: React.FC<JSX.IntrinsicElements["div"]> = ({ ...props }) => {
  return (
    <div
      className={clsx(
        "bg-p-10 dark:bg-p-0 rounded-md shadow hover:shadow-lg cursor-pointer",
        "transition-all duration-100 ease-out p-5",
        "active:shadow",
        props?.className
      )}
    >
      {props?.children}
    </div>
  );
};
