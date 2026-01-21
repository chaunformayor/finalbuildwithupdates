import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  description,
  children
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="mt-14">
      {eyebrow ? (
        <div className="text-xs font-semibold tracking-wide text-zinc-600 uppercase">{eyebrow}</div>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h2>
      {description ? <p className="mt-2 text-zinc-600">{description}</p> : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </section>
  );
}
