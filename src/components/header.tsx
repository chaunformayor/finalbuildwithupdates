"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/container";

const NAV = [
  { href: "/invest", label: "Invest With Us" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/track-record", label: "Track Record" },
  { href: "/submit-deal", label: "Submit a Deal" },
  { href: "/market", label: "St. Louis + Midwest" },
  { href: "/contact", label: "Contact" }
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={[
        "text-sm transition-colors",
        active ? "text-zinc-900 font-semibold" : "text-zinc-700 hover:text-zinc-900"
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white shadow-soft">
              MIS
            </span>
            <span className="leading-tight">
              Midwest Investor <span className="text-zinc-500">Services</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((i) => (
              <NavLink key={i.href} href={i.href} label={i.label} />
            ))}
            <Link
              href="/contact#schedule"
              className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Schedule Call
            </Link>
          </nav>

          <button
            className="md:hidden rounded-xl border border-zinc-200 px-3 py-2 text-sm"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </Container>

      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white">
          <Container>
            <div className="py-3">
              <div className="flex flex-col gap-3">
                {NAV.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    className="text-sm text-zinc-700 hover:text-zinc-900"
                    onClick={() => setOpen(false)}
                  >
                    {i.label}
                  </Link>
                ))}
                <Link
                  href="/contact#schedule"
                  className="mt-2 rounded-xl bg-zinc-900 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-zinc-800"
                  onClick={() => setOpen(false)}
                >
                  Schedule Call
                </Link>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
