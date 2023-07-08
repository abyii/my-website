import Link from "next/link";
import React from "react";

const Writing = () => {
  return (
    <div className="w-full flex justify-center p-5 text-p-5 min-h-[200px]">
      <span>
        🪧 Work in progress. I&apos;ll add my first article here when I finish
        writing it. Meanwhile, You can read this&nbsp;
        <Link href={"/work/marvel"} className="font-semibold underline">
          other thing that I wrote
        </Link>
      </span>
    </div>
  );
};

export default Writing;
