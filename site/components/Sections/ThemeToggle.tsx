"use client";

import React from "react";
import { IconButton } from "../ui";
import { useTheme } from "next-themes";
import LightModeIcon from "../Icons/LightMode";
import DarkModeIcon from "../Icons/DarkMode";

const ThemeToggle = () => {
  const theme = useTheme();

  return (
    <div className="w-full bg-p-9 dark:bg-p-1 flex justify-center">
      <div className="w-full max-w-4xl p-10 flex justify-between md:justify-start md:gap-5 items-center">
        <p className="font-medium">{`Prefer ${
          theme?.theme === "dark" ? "Light" : "Dark"
        } Mode? Switch ->`}</p>
        <IconButton
          variant="text"
          onClick={() =>
            theme.setTheme(theme?.theme === "light" ? "dark" : "light")
          }
        >
          {theme?.theme === "dark" ? (
            <LightModeIcon className={"w-4 h-4 text-p-3 dark:text-p-9"} />
          ) : (
            <DarkModeIcon className={"w-4 h-4 text-p-3 dark:text-p-9"} />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default ThemeToggle;
