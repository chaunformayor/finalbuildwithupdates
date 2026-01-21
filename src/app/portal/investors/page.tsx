import Link from "next/link";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PortalNav } from "@/components/portal-nav";

const investors = [
  { id: "sample-investor-a", name: "Sample Investor A" },
  { id: "sample-investor-b", name: "Sample Investor B" }
];

export const metadata = {
  title: "Deal Rooms",
  description: "Per-investor deal rooms."
};

export default function Investors() {
  return (
    <Container>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Deal Rooms</h1>
        <p className="mt-4 text-lg text-zinc-600">
          One room per investor. Keep communication clean and decision-ready.
        </p>
        <PortalNav />
      </div>

      <Section title="Investors" description="Select a room. Replace these with your real investor list.">
        <div className="grid gap-4 md:grid-cols-2">
          {investors.map((i) => (
            <Link
              key={i.id}
              href={`/portal/investors/${i.id}`}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft hover:bg-zinc-50"
            >
              <div className="font-semibold">{i.name}</div>
              <div className="mt-2 text-sm text-zinc-600">Deal pipeline, docs, and notes.</div>
            </Link>
          ))}
        </div>
      </Section>
    </Container>
  );
}
