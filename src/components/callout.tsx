import type { ReactNode } from "react";

export function Callout({
  title,
  body,
  children
}: {
  title: string;
  body: string;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-zinc-900 p-8 text-white shadow-soft">
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-white/80">{body}</p>
      {children ? <div className="mt-6 flex flex-col gap-3 sm:flex-row">{children}</div> : null}
    </div>
  );
}
