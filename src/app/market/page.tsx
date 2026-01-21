import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Callout } from "@/components/callout";
import { Button } from "@/components/button";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "St. Louis + Midwest Market",
  description: "A buy-and-hold market thesis for St. Louis and Midwest rentals."
};

export default function Market() {
  return (
    <Container>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">{SITE.city} + Midwest market thesis</h1>
        <p className="mt-4 text-lg text-zinc-600">
          We help clients cultivate greater economic and societal returns through real estate investing—anchored by durable cash flow and long-term ownership fundamentals.
        </p>
      </div>

      <Section title="The thesis" description="Why investors keep moving capital into the Midwest.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Cash-flow friendly basis",
              body: "Entry points that allow rents to work without relying on appreciation."
            },
            {
              title: "Durable tenant demand",
              body: "Workforce housing demand supports occupancy and stability."
            },
            {
              title: "Value-add upside",
              body: "Targeted rehab can create equity and improve long-term performance."
            }
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-soft">
              <div className="font-semibold">{c.title}</div>
              <div className="mt-2 text-sm text-zinc-600">{c.body}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What we look for" description="General guidance—deal specifics depend on your buy box.">
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
          <ul className="space-y-2 text-sm text-zinc-700">
            <li>• Solid neighborhoods with durable rental demand</li>
            <li>• Clear rehab scopes and realistic budgets</li>
            <li>• Rents that support your financing and reserve strategy</li>
            <li>• A plan for stabilization and long-term management</li>
          </ul>
        </div>
      </Section>

      <div className="mt-16">
        <Callout
          title="Want our deal criteria for your strategy?"
          body="Join the Investor List and we’ll align your buy box and targets."
        >
          <Button href="/contact#investor-list" variant="secondary" className="bg-white text-zinc-900 hover:bg-zinc-100">
            Join the Investor List
          </Button>
          <Button href="/contact#schedule" variant="ghost" className="text-white hover:bg-white/10">
            Schedule an investor call
          </Button>
        </Callout>
      </div>
    </Container>
  );
}
