import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PortalNav } from "@/components/portal-nav";

export const metadata = {
  title: "Deal Room",
  description: "Investor deal room."
};

export default async function DealRoom({
  params
}: {
  params: Promise<{ investorId: string }>;
}) {
  const { investorId } = await params;

  return (
    <Container>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Deal Room</h1>
        <p className="mt-4 text-lg text-zinc-600">
          Investor: <span className="font-semibold text-zinc-900">{investorId}</span>
        </p>
        <PortalNav />
      </div>

      <Section title="Current pipeline" description="Add active deals here as you review them.">
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 text-sm text-zinc-700">
          <div className="font-semibold">Starter template</div>
          <ul className="mt-3 space-y-2">
            <li>• Deal 1 — address / all-in / rent / timeline</li>
            <li>• Deal 2 — address / all-in / rent / timeline</li>
            <li>• Notes — decisions, next steps, constraints</li>
          </ul>
        </div>
      </Section>

      <Section title="Investor-only docs" description="Gated PDFs served through the portal API.">
        <div className="grid gap-3 md:grid-cols-2">
          <a
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft hover:bg-zinc-50"
            href="/api/portal/file?name=operator-notes.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="font-semibold">Operator Notes (PDF)</div>
            <div className="mt-2 text-sm text-zinc-600">Execution principles and guardrails.</div>
          </a>
          <a
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft hover:bg-zinc-50"
            href="/api/portal/file?name=capital-intake-checklist.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div className="font-semibold">Capital Intake Checklist (PDF)</div>
            <div className="mt-2 text-sm text-zinc-600">What we need to move quickly.</div>
          </a>
        </div>
      </Section>
    </Container>
  );
}
