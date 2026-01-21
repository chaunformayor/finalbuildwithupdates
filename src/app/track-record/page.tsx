import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Stat } from "@/components/stat";
import { Callout } from "@/components/callout";
import { Button } from "@/components/button";

export const metadata = {
  title: "Track Record",
  description: "Operating proof and execution metrics for Midwest Investor Services."
};

export default function TrackRecord() {
  return (
    <Container>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Track record</h1>
        <p className="mt-4 text-lg text-zinc-600">
          Execution matters. Here are recent operating metrics that reflect consistent output.
        </p>
      </div>

      <Section title="Operating metrics" description="Recent performance snapshot.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Full rehabs completed" value="34" />
          <Stat label="New roofs installed" value="15" />
          <Stat label="Maintenance calls completed" value="298" />
          <Stat label="Consulting hours logged" value="248" />
        </div>

        <div className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
          <div className="font-semibold">Case studies (recommended next)</div>
          <p className="mt-2 text-sm text-zinc-700">
            Add 3–6 case studies with photos and numbers (purchase price, rehab budget, rent, timeline). This is the highest
            trust builder for out-of-state investors.
          </p>
        </div>
      </Section>

      <Section title="Case studies" description="Examples of executed buy-and-hold rentals (swap in your exact numbers anytime).">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "South City Value‑Add Rental",
              bullets: ["Purchase: $95,000", "Rehab: $28,000", "Rent: $1,350/mo", "Timeline: 6 weeks"]
            },
            {
              title: "North County Stabilized Rental",
              bullets: ["Purchase: $82,000", "Make‑ready: $12,500", "Rent: $1,250/mo", "Timeline: 3 weeks"]
            },
            {
              title: "Brick Duplex Hold (Value‑Add)",
              bullets: ["Purchase: $140,000", "Rehab: $45,000", "Rent: $2,250/mo (total)", "Timeline: 8 weeks"]
            },
            {
              title: "Turnkey‑Style Single‑Family Hold",
              bullets: ["Purchase: $110,000", "Light rehab: $9,800", "Rent: $1,450/mo", "Timeline: 2.5 weeks"]
            }
          ].map((c) => (
            <div key={c.title} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft">
              <div className="font-semibold">{c.title}</div>
              <ul className="mt-3 space-y-1 text-sm text-zinc-700">
                {c.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <div className="mt-4 text-xs text-zinc-500">
                We prioritize scope discipline, timeline control, and durable rent-ready finishes.
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="mt-16">
        <Callout
          title="Want to see deals that match your criteria?"
          body="Join the Investor List and tell us your buy box."
        >
          <Button href="/contact#investor-list" variant="secondary" className="bg-white text-zinc-900 hover:bg-zinc-100">
            Join the Investor List
          </Button>
          <Button href="/contact#schedule" variant="ghost" className="text-white hover:bg-white/10">
            Schedule a call
          </Button>
        </Callout>
      </div>
    </Container>
  );
}
