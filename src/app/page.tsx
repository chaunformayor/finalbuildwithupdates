import Link from "next/link";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Stat } from "@/components/stat";
import { Callout } from "@/components/callout";
import { SITE } from "@/lib/site";

export default function Home() {
  return (
    <Container>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700">
            Midwest-focused • Out-of-state investor friendly
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Midwest rental real estate, executed by operators—not marketers.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            We help investors acquire, renovate, and operate buy-and-hold rental properties in St. Louis and across the Midwest. Our focus is execution, cash flow, and long-term asset control.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact#schedule" variant="primary">
              Schedule an Investor Call
            </Button>
            <Button href="/contact#investor-list" variant="secondary">
              Join the Investor List
            </Button>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700">
              We are your partner—from analysis to execution—built around buy‑and‑hold investors.
            </div>
            <div className="rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700">
              Private investor education is invite-only for qualified buyers.
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-b from-zinc-50 to-white p-8 shadow-soft">
          <div className="text-sm font-semibold">What we deliver</div>
          <ul className="mt-4 space-y-3 text-sm text-zinc-700">
            <li>• Deal sourcing + underwriting support</li>
            <li>• Rehab execution with clear scope, budget, and timeline visibility</li>
            <li>• Tenant placement + ongoing management for long-term performance</li>
            <li>• Market expertise in {SITE.city} and the Midwest</li>
          </ul>

          <div className="mt-6 flex gap-3 overflow-x-auto sm:grid sm:grid-cols-2">
            <Stat label="Full rehabs completed" value="34" />
            <Stat label="Maintenance calls completed" value="298" />
            <Stat label="New roofs installed" value="15" />
            <Stat label="Consulting hours logged" value="248" />
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            Metrics shown represent recent operating performance.
          </p>
        </div>
      </div>


<Section
  eyebrow="Core services"
  title="We have you covered"
  description="A complete operator stack for investors—especially out-of-state buy-and-hold."
>
  <div className="grid gap-4 md:grid-cols-3">
    {[
      {
        title: "Analysis",
        body: "Investment property analysis is a key element of any good strategy. We help you underwrite with discipline."
      },
      {
        title: "Make Ready",
        body: "Our construction team gets your property rent-ready and cash flowing quickly—with clear scope and timelines."
      },
      {
        title: "Fix to Flip / Value-Add",
        body: "From full gut rehabs to new construction: we execute value-add plans that build equity and stabilize cash flow."
      }
    ].map((c) => (
      <div key={c.title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-soft">
        <div className="font-semibold">{c.title}</div>
        <div className="mt-2 text-sm text-zinc-600">{c.body}</div>
      </div>
    ))}
  </div>
  <div className="mt-8">
    <a
      href="/invest"
      className="text-sm font-semibold text-zinc-900 underline underline-offset-4"
    >
      View services for investors →
    </a>
  </div>
</Section>


<Section
  title="What we do"
  description="We work with investors who want results, not theory."
>
  <div className="grid gap-4 md:grid-cols-3">
    {[
      {
        title: "Deal screening",
        body: "We focus on fundamentals first. If the numbers don’t work, the deal stops there."
      },
      {
        title: "Rehab execution",
        body: "Scope, budget, and timeline discipline—managed locally with clear accountability."
      },
      {
        title: "Operations & management",
        body: "Tenant placement and long-term management built to protect cash flow and asset condition."
      }
    ].map((c) => (
      <div key={c.title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-soft">
        <div className="font-semibold">{c.title}</div>
        <div className="mt-2 text-sm text-zinc-600">{c.body}</div>
      </div>
    ))}
  </div>
</Section>

      <Section
        title="How it works"
        description="A straightforward operating system designed for long-term ownership."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {[
            {
              title: "1) Define your buy box",
              body: "Price range, neighborhoods, strategy, and timeline."
            },
            {
              title: "2) Identify opportunities",
              body: "We surface and review deals that match your criteria."
            },
            {
              title: "3) Execute the plan",
              body: "Rehab, scope control, and stabilization—done with clarity."
            },
            {
              title: "4) Manage for cash flow",
              body: "Tenant placement, reporting, and long-term operations."
            }
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-soft"
            >
              <div className="font-semibold">{s.title}</div>
              <div className="mt-2 text-sm text-zinc-600">{s.body}</div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/how-it-works"
            className="text-sm font-semibold text-zinc-900 underline underline-offset-4"
          >
            See the full process →
          </Link>
        </div>
      </Section>

      <Section
        title={`Why ${SITE.city} + the Midwest`}
        description="Affordable entry points, durable rental demand, and strong long-term fundamentals."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Affordable basis",
              body: "Buy at a cost basis that supports real cash flow—not speculation."
            },
            {
              title: "Durable demand",
              body: "Workforce rentals and long-term tenants drive consistent occupancy."
            },
            {
              title: "Room to improve",
              body: "Value-add opportunities where rehab execution creates real equity."
            }
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-soft">
              <div className="font-semibold">{c.title}</div>
              <div className="mt-2 text-sm text-zinc-600">{c.body}</div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/market" variant="secondary">
            Read the market thesis
          </Button>
        </div>
      </Section>

      <div className="mt-16">
        <Callout
          title="Ready to build a Midwest rental portfolio?"
          body="Start with a short investor call. We’ll align your buy box, timeline, and approach."
        >
          <Button href="/contact#schedule" variant="secondary" className="bg-white text-zinc-900 hover:bg-zinc-100">
            Schedule an Investor Call
          </Button>
          <Button href="/invest" variant="ghost" className="text-white hover:bg-white/10">
            Learn how we work with investors
          </Button>
        </Callout>
      </div>
    </Container>
  );
}
