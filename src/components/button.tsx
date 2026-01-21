import Link from "next/link";
import type { ReactNode } from "react";

type Props =
  | { href: string; children: ReactNode; variant?: "primary" | "secondary" | "ghost"; className?: string }
  | { onClick: () => void; children: ReactNode; variant?: "primary" | "secondary" | "ghost"; className?: string };

const styles = {
  primary:
    "rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400",
  secondary:
    "rounded-2xl border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-300",
  ghost:
    "rounded-2xl px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-300"
} as const;

export function Button(props: Props) {
  const variant = (props as any).variant ?? "primary";
  const cls = `${styles[variant as keyof typeof styles]} ${(props as any).className ?? ""}`.trim();

  if ("href" in props) {
    return (
      <Link href={props.href} className={cls}>
        {props.children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={props.onClick} className={cls}>
      {props.children}
    </button>
  );
}
