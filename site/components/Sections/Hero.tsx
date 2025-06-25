import SocialIconArray from "./SocialIconArray";

const Hero = () => {
  return (
    <div className="bg-p-9 dark:bg-p-1 w-full flex justify-center">
      {/* hero */}
      <div className="max-w-4xl w-full p-10 flex flex-col">
        {/* social icons */}
        <div className="flex gap-5 items-center self-end">
          <SocialIconArray />
        </div>
        {/* name */}
        <h1 className="text-4xl font-light mt-12 md:mt-0">
          <span className="text-p-0 dark:text-p-9">Abhishek</span>
          <span className="text-p-5">Y</span>
        </h1>
        {/* caption */}
        <p className="text-p-0 dark:text-p-10 self-end text-sm dark:font-light mt-[90px] md:mt-12">
          Cloud Engineer & Software Developer
          <br />
          based in Bengaluru.
        </p>
      </div>
    </div>
  );
};

export default Hero;
