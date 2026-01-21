import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PortalNav } from "@/components/portal-nav";

export const metadata = {
  title: "PDF Library",
  description: "Gated PDF library."
};

export default function Library() {
  return (
    <Container>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">PDF Library</h1>
        <p className="mt-4 text-lg text-zinc-600">Investor-only PDFs served through the portal.</p>
        <PortalNav />
      </div>

      <Section title="Documents" description="These links require an active portal session.">
        <div className="grid gap-3 md:grid-cols-2">
          <a className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft hover:bg-zinc-50" href="/api/portal/file?name=operator-notes.pdf" target="_blank" rel="noreferrer">
            <div className="font-semibold">Operator Notes (PDF)</div>
            <div className="mt-2 text-sm text-zinc-600">Execution principles and guardrails.</div>
          </a>
          <a className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft hover:bg-zinc-50" href="/api/portal/file?name=capital-intake-checklist.pdf" target="_blank" rel="noreferrer">
            <div className="font-semibold">Capital Intake Checklist (PDF)</div>
            <div className="mt-2 text-sm text-zinc-600">What we need to move quickly.</div>
          </a>
        </div>
      </Section>
    </Container>
  );
}
