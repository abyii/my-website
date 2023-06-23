export const Window: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <main
      className={
        className +
        " bg-p-10 dark:bg-p-0 w-full h-full min-h-screen overflow-x-hidden"
      }
    >
      {children}
    </main>
  );
};
