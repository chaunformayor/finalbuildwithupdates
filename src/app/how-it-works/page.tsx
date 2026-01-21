import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Callout } from "@/components/callout";
import { Button } from "@/components/button";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "How It Works",
  description: "A clear, repeatable process for acquiring, rehabbing, and managing rentals in St. Louis and the Midwest."
};

export default function HowItWorks() {
  return (
    <Container>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">How it works</h1>
        <p className="mt-4 text-lg text-zinc-600">
          A repeatable process designed for buy-and-hold investors who want clarity, control, and long-term performance.
        </p>
      </div>

      <Section title="Step-by-step" description="This is how we approach investor operations.">
        <div className="space-y-4">
          {[
            {
              n: "01",
              title: "Define your buy box",
              body: "Price range, neighborhoods, strategy, funding type, and any non-negotiables."
            },
            {
              n: "02",
              title: "Opportunity review",
              body: "We screen candidates and focus on deals that pencil first—before emotion or hype."
            },
            {
              n: "03",
              title: "Acquisition support",
              body: "We coordinate next steps and ensure expectations align before you close."
            },
            {
              n: "04",
              title: "Rehab execution (if needed)",
              body: "Scope, budget, and milestones. Decisions get made quickly to protect timelines."
            },
            {
              n: "05",
              title: "Stabilize + manage",
              body: "Tenant placement, inspections, maintenance workflows, and reporting to protect cash flow."
            }
          ].map((s) => (
            <div key={s.n} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold tracking-wide text-zinc-600 uppercase">Step {s.n}</div>
                  <div className="mt-2 text-xl font-semibold">{s.title}</div>
                  <p className="mt-2 text-sm text-zinc-600">{s.body}</p>
                </div>
                <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 text-white font-semibold">
                  {s.n}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="mt-16">
        <Callout
          title={`Want to invest in ${SITE.city} with a local operator team?`}
          body="Start with a short investor call. We’ll align your buy box and timeline."
        >
          <Button href="/contact#schedule" variant="secondary" className="bg-white text-zinc-900 hover:bg-zinc-100">
            Schedule an Investor Call
          </Button>
        </Callout>
      </div>
    </Container>
  );
}
