const About = () => {
  return (
    <div
      className="w-full flex justify-center pattern-dots pattern-opacity-100 pattern-p-9 dark:pattern-p-1 pattern-bg-p-10 dark:pattern-bg-p-0 
  pattern-size-4"
    >
      <div className="max-w-4xl w-full px-10 py-20 font-mono text-sm italic text-p-0 dark:text-p-9">
        <p>
          {/* <span className="not-italic font-semibold">ನಮಸ್ಕಾರ.</span>  */}
          My name is Abhishek, I&apos;m a 20 y.o He/Him and I like crafting
          digital experiences!.
        </p>
        <p className="mt-5">
          Most of my experience so far has been in crafting for the Web.
          I&apos;ve worked on building Design Systems, and Full-Stack apps. I
          enjoy solving problems through Design and Code.
        </p>
        <p className="mt-5">
          Some neat things i like using: Typescript, React, Monorepos, Next.js,
          Prisma, Tailwind CSS, and Figma amoung others.
        </p>
        <p className="mt-5">
          I like to guiltlessly explore passion and interests in fields that are
          often unrelated. Typography, Layout Design, Visualizing data with
          Python notebooks, 3D Modelling, and Sound Design are some of the
          things that intrigue me.
        </p>
      </div>
    </div>
  );
};

export default About;
