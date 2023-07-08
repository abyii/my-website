import Link from "next/link";
import React from "react";

const Photography = () => {
  return (
    <div className="w-full flex justify-center p-5 text-p-5 min-h-[200px]">
      <span>
        🪧 Work in progress. I&apos;m curating a nice collection. I&apos;ll add
        them here when I&apos;m done. Meanwhile, you can check out&nbsp;
        <Link href={"/work/marvel"} className="font-semibold underline">
          something I wrote
        </Link>
      </span>
    </div>
  );
};

export default Photography;
