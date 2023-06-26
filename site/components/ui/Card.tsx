"use client";

import clsx from "clsx";
import React from "react";

export const Card: React.FC<JSX.IntrinsicElements["div"]> = ({
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx(
        "bg-p-10 dark:bg-p-0 rounded-md shadow hover:shadow-md cursor-pointer",
        "transition-all duration-200 ease-out p-5",
        "active:shadow-none",
        props?.className
      )}
    >
      {children}
    </div>
  );
};
