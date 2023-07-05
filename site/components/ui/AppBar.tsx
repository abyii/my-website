"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconButton } from "./Buttons";
import { useTheme } from "next-themes";
import LightModeIcon from "../Icons/LightMode";
import DarkModeIcon from "../Icons/DarkMode";
import clsx from "clsx";

export const AppBar: React.FC<JSX.IntrinsicElements["nav"]> = () => {
  const theme = useTheme();
  return (
    <motion.div className="w-full flex justify-center p-5 fixed top-0 bg-gradient-to-b from-p-10 dark:from-p-1 to-transparent ">
      <nav
        className={clsx(
          "flex justify-between items-center rounded-md w-full max-w-3xl shadow-md active:shadow dark:shadow-lg",
          "bg-p-10 dark:bg-p-0 px-5 py-3 border border-p-8 dark:border-p-2",
          "transition-shadow duration-200"
        )}
      >
        <Link href={"/"}>
          <h6 className="font-semibold text-lg text-p-5 dark:text-p-6 hover:text-p-1 dark:hover:text-p-9 transition-all duration-200 ease-out">
            abhyi
          </h6>
        </Link>

        <IconButton
          variant="text"
          onClick={() =>
            theme.setTheme(theme?.theme === "light" ? "dark" : "light")
          }
        >
          {theme?.theme === "dark" ? (
            <LightModeIcon className={"w-4 h-4 text-p-5 dark:text-p-6"} />
          ) : (
            <DarkModeIcon className={"w-4 h-4 text-p-5 dark:text-p-6"} />
          )}
        </IconButton>
      </nav>
    </motion.div>
  );
};
