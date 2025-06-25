const About = () => {
  return (
    <div
      className="w-full flex justify-center pattern-dots pattern-opacity-100 pattern-p-9 dark:pattern-p-1 pattern-bg-p-10 dark:pattern-bg-p-0 
  pattern-size-4"
    >
      <div className="max-w-4xl w-full px-10 py-20 font-mono text-sm italic text-p-0 dark:text-p-9">
        <p>
          {/* <span className="not-italic font-semibold">ನಮಸ್ಕಾರ.</span> */}
          {
            "Abhishek, an engineer passionate about building digital experiences from the user-facing code down to the cloud infrastructure that powers them."
          }
        </p>
        <p className="mt-5">
          {
            "My work spans a wide spectrum of software engineering, where I'm equally intrigued by crafting elegant user interfaces and architecting robust, scalable systems."
          }
        </p>
        <p className="mt-5">
          {
            "My core toolkit for cloud and DevOps includes: Python, Kubernetes, AWS, OCI, Terraform, and Grafana. On the application side, I'm proficient with TypeScript, React, and Next.js, a combination that gives me a unique, end-to-end perspective on system architecture."
          }
        </p>
        <p className="mt-5">
          {
            "I like to guiltlessly explore passions in fields that are often unrelated. Typography, and Sound Design are some of the things that intrigue me."
          }
        </p>
      </div>
    </div>
  );
};

export default About;
