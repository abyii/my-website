import clsx from "clsx";

export default function WorkLayout({
  meta,
  ...props
}: JSX.IntrinsicElements["div"] & { meta?: any }) {
  return (
    <div className={clsx("w-full", props?.className)}>
      {meta?.title && <h1 className="text-3xl font-bold">{meta?.title}</h1>}
      <div className="w-full prose">{props?.children}</div>
    </div>
  );
}
