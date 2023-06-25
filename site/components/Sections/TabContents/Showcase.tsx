import { Card } from "@abhyi/components/ui";
import clsx from "clsx";

export default () => {
  return (
    <div className="w-full flex gap-5 flex-wrap min-h-screen">
      <Card className="h-[400px] flex items-end max-w-xs">
        <h2 className="text-3xl">Lessons from building a Design System</h2>
      </Card>
    </div>
  );
};
