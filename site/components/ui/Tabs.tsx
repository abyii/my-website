"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import clsx from "clsx";
import { motion } from "framer-motion";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={clsx(
      "inline-flex h-min items-center rounded-lg bg-p-8 dark:bg-p-2 p-1 shadow-inner select-none",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={clsx(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md",
      "px-3 py-2 text-sm transition-all",
      "focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-p-10 data-[state=active]:dark:bg-p-0 data-[state=active]:shadow",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

type TabsContentProps = {
  direction: "none" | "left" | "right";
  magnitude: number;
} & React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, children, direction, magnitude, ...props }, ref) => {
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={clsx("mt-5 focus-visible:outline-none", className)}
      {...props}
    >
      <motion.div
        initial={{
          opacity: direction == "none" ? 1 : 0.2,
          translateX:
            direction === "left"
              ? magnitude * 10
              : direction === "right"
              ? -magnitude * 10
              : 0,
        }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </TabsPrimitive.Content>
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
