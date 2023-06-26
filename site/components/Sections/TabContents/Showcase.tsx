"use client";
import { Card } from "@abhyi/components/ui";
import Link from "next/link";

export default () => {
  return (
    <div className="w-full flex flex-col gap-5 min-h-screen">
      <Link href="/work/marvel">
        <Card className="h-min group">
          <h2 className="font-medium group-hover:underline text-p-3 group-hover:text-p-0 flex-1">
            Lessons from building a Product
          </h2>
        </Card>
      </Link>
      <Card className="h-min group">
        <h2 className="font-medium group-hover:underline text-p-3 group-hover:text-p-0 flex-1">
          Lessons from building a Design System
        </h2>
      </Card>
    </div>
  );
};
