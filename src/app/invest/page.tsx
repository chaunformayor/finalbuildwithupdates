import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Callout } from "@/components/callout";
import { Button } from "@/components/button";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Invest With Us",
  description:
    "How Midwest Investor Services works with investors to acquire, rehab, and manage buy-and-hold rentals in St. Louis and the Midwest."
};

export default function Invest() {
  return (
    <Container>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Work with a local operator team built for buy-and-hold investors.</h1>
        <p className="mt-4 text-lg text-zinc-600">
          We partner with investors who value discipline, transparency, and long-term performance. If you’re chasing quick flips or unrealistic returns, we’re not a fit.
        </p>
      </div>

      <Section title="Who we’re best for" description="If this is you, we should talk.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Out-of-state investors",
              body: "You want a local team that can execute and communicate clearly."
            },
            {
              title: "Buy-and-hold builders",
              body: "You’re scaling rentals and need repeatable acquisition + operations."
            },
            {
              title: "Value-add operators",
              body: "You want real equity creation through rehab and stabilization."
            }
          ].map((x) => (
            <div key={x.title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-soft">
              <div className="font-semibold">{x.title}</div>
              <div className="mt-2 text-sm text-zinc-600">{x.body}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Our investor operating system" description="The core steps, done with discipline.">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Deal alignment",
              body: "We confirm your buy box, underwriting expectations, and strategy before we ever talk property."
            },
            {
              title: "Opportunity review",
              body: "We review candidates against your criteria and focus on deals that make sense on paper first."
            },
            {
              title: "Rehab execution (if needed)",
              body: "Scope, budget, and timeline visibility. Clear milestones and decisions—no surprises."
            },
            {
              title: "Stabilize + manage",
              body: "Tenant placement and ongoing management to protect cash flow and asset condition."
            }
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-soft">
              <div className="font-semibold">{s.title}</div>
              <div className="mt-2 text-sm text-zinc-600">{s.body}</div>
            </div>
          ))}
        </div>
      </Section>


<Section
  title="Services"
  description="We support investors at all experience levels. Common engagements include:"
>
  <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
    <ul className="grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
      <li>• Entity creation</li>
      <li>• Registered agent</li>
      <li>• Property inspections</li>
      <li>• Pre‑purchase analysis</li>
      <li>• General contracting</li>
      <li>• Consultation</li>
    </ul>
  </div>
</Section>

      <Section title="Invite-only investor education" description="Kept private on purpose.">
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
          <div className="font-semibold">Why it’s invite-only</div>
          <p className="mt-2 text-sm text-zinc-700">
            We prioritize serious investors who are actively buying and operating. Private education is available by invitation
            after you join the Investor List or complete an investor call.
          </p>
        </div>
      </Section>

      <div className="mt-16">
        <Callout
          title="Next step: schedule a short investor call"
          body="We’ll clarify your buy box, timeline, and what “success” looks like for your portfolio."
        >
          <Button href="/contact#schedule" variant="secondary" className="bg-white text-zinc-900 hover:bg-zinc-100">
            Schedule an Investor Call
          </Button>
          <Button href="/contact#investor-list" variant="ghost" className="text-white hover:bg-white/10">
            Join the Investor List
          </Button>
        </Callout>
      </div>
    </Container>
  );
}
