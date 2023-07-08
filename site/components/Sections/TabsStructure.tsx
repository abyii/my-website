"use client";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@abhyi/components/ui/Tabs";
import { useReducer } from "react";
import Showcase from "./TabContents/Showcase";
import Writing from "./TabContents/Writing";
import Photography from "./TabContents/Photography";

const tabVals = ["Showcase", "Writing", "Photography"] as const;
const directions = ["right", "left", "none"] as const;

type ActiveTab = {
  value: (typeof tabVals)[number];
  direction: "right" | "left" | "none";
  magnitude: number;
};

const handleTabChange = (
  state: ActiveTab,
  action: (typeof tabVals)[number]
): ActiveTab => {
  const prevIndex = tabVals.indexOf(state.value);
  const newIndex = tabVals.indexOf(action);
  if (newIndex - prevIndex > 0) {
    return {
      value: action,
      direction: "left" as (typeof directions)[number],
      magnitude: Math.abs(newIndex - prevIndex),
    };
  } else if (newIndex - prevIndex < 0) {
    return {
      value: action,
      direction: "right" as (typeof directions)[number],
      magnitude: Math.abs(newIndex - prevIndex),
    };
  } else {
    return {
      value: action,
      direction: "none" as (typeof directions)[number],
      magnitude: Math.abs(newIndex - prevIndex),
    };
  }
};

export default () => {
  const [activeTab, setActiveTab] = useReducer(handleTabChange, {
    value: "Showcase",
    direction: "none",
    magnitude: 0,
  } as ActiveTab);
  return (
    <div className="w-full bg-p-9 dark:bg-p-1 flex justify-center">
      <div className="w-full max-w-4xl p-5 md:p-10 md:py-16">
        <Tabs
          defaultValue="account"
          value={activeTab.value}
          onValueChange={(value) =>
            setActiveTab(value as (typeof tabVals)[number])
          }
        >
          <TabsList>
            {tabVals.map((t, k) => (
              <TabsTrigger value={t} key={k}>
                {t}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent
            value={tabVals[0]}
            direction={activeTab.direction}
            magnitude={activeTab.magnitude}
          >
            <Showcase />
          </TabsContent>
          <TabsContent
            value={tabVals[1]}
            direction={activeTab.direction}
            magnitude={activeTab.magnitude}
          >
            <Writing />
          </TabsContent>
          <TabsContent
            value={tabVals[2]}
            direction={activeTab.direction}
            magnitude={activeTab.magnitude}
          >
            <Photography />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
