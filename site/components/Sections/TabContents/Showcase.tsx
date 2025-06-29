"use client";
import { Card } from "@abhyi/components/ui";
import Link from "next/link";

const Showcase = () => {
  return (
    <div className="w-full flex flex-col gap-5 min-h-[200px]">
      <Link href="/work/marvel">
        <Card className="h-min group">
          <h2 className="text-2xl font-medium group-hover:underline text-p-3 dark:text-p-8 group-hover:text-p-0 dark:group-hover:text-p-9 flex-1">
            {"Lessons from building a Product -> Marvel"}
          </h2>
        </Card>
      </Link>
      {/* <Card className="h-min group">
        <h2 className="text-2xl group-hover:underline text-p-3 dark:text-p-8 group-hover:text-p-0 dark:group-hover:text-p-9 flex-1">
          Lessons from building a Design System
        </h2>
      </Card> */}
    </div>
  );
};

export default Showcase;
