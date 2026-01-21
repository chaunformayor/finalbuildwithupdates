import Link from "next/link";

const items = [
  { href: "/portal", label: "Dashboard" },
  { href: "/portal/investors", label: "Deal Rooms" },
  { href: "/portal/uploads", label: "Uploads" },
  { href: "/portal/capital-intake", label: "Capital Intake" },
  { href: "/portal/library", label: "PDF Library" }
];

export function PortalNav() {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {items.map((i) => (
        <Link
          key={i.href}
          href={i.href}
          className="rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
        >
          {i.label}
        </Link>
      ))}

      <form method="POST" action="/api/portal/logout" className="ml-auto">
        <button
          type="submit"
          className="rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
        >
          Log out
        </button>
      </form>
    </div>
  );
}
