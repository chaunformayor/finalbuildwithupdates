import Link from "next/link";
import { Container } from "@/components/container";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200">
      <Container>
        <div className="py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="font-semibold">{SITE.name}</div>
              <p className="mt-2 text-sm text-zinc-600">
                Acquire, rehab, and manage buy-and-hold rentals in {SITE.city} and the Midwest.
              </p>
            </div>

            <div className="text-sm">
              <div className="font-semibold">Contact</div>
              <div className="mt-2 text-zinc-600 space-y-1">
                <div>Phone: {SITE.phone}</div>
                <div>Email: {SITE.email}</div>
              </div>
            </div>

            <div className="text-sm">
              <div className="font-semibold">Investor note</div>
              <p className="mt-2 text-zinc-600">
                Education programs are invite-only for qualified investors.
              </p>
              <div className="mt-3 flex gap-4">
                <Link className="text-zinc-700 hover:text-zinc-900" href="/invest">
                  Invest
                </Link>
                <Link className="text-zinc-700 hover:text-zinc-900" href="/portal">Portal</Link>
              <Link className="text-zinc-700 hover:text-zinc-900" href="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 text-xs text-zinc-500">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
