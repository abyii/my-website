import SocialIconArray from "./SocialIconArray";

export default () => {
  return (
    <div className="bg-p-9 dark:bg-p-1 w-full flex justify-center">
      {/* hero */}
      <div className="max-w-4xl w-full p-10 flex flex-col">
        {/* social icons */}
        <div className="flex gap-5 items-center self-end">
          <SocialIconArray />
        </div>
        {/* name */}
        <h1 className="text-4xl font-light dark:font-extralight mt-12 md:mt-0">
          <span className="text-p-0 dark:text-p-9">Abhishek</span>
          <br />
          <span className="text-p-5">Yanjarappa</span>
        </h1>
        {/* caption */}
        <p className="text-p-0 dark:text-p-10 self-end text-sm dark:font-thin mt-16 md:mt-10">
          Developer and Designer
          <br />
          based in Bengaluru.
        </p>
      </div>
    </div>
  );
};
