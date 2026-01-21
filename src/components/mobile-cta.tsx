"use client";

import Link from "next/link";

// Mobile-only sticky CTA bar (thumb-friendly)
export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-zinc-200 bg-white px-4 py-3">
      <div className="flex gap-3">
        <Link
          href="/contact#schedule"
          className="flex-1 rounded-xl bg-zinc-900 py-3 text-center text-sm font-semibold text-white"
        >
          Schedule Call
        </Link>
        <Link
          href="/contact#investor-list"
          className="flex-1 rounded-xl border border-zinc-300 py-3 text-center text-sm font-semibold"
        >
          Investor List
        </Link>
      </div>
    </div>
  );
}
