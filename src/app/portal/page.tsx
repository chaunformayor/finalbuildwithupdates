import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PortalNav } from "@/components/portal-nav";

export const metadata = {
  title: "Investor Portal",
  description: "Private investor portal."
};

export default function PortalHome() {
  return (
    <Container>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Investor Portal</h1>
        <p className="mt-4 text-lg text-zinc-600">
          Private resources for approved investors. Keep this link confidential.
        </p>
        <PortalNav />
      </div>

      <Section title="Quick actions" description="Move fast. Keep execution tight.">
        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="/portal/capital-intake"
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft hover:bg-zinc-50"
          >
            <div className="font-semibold">Complete Capital Intake</div>
            <div className="mt-2 text-sm text-zinc-600">
              Lock buy box, budget, timeline, and funding profile.
            </div>
          </a>
          <a
            href="/portal/uploads"
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft hover:bg-zinc-50"
          >
            <div className="font-semibold">Upload docs</div>
            <div className="mt-2 text-sm text-zinc-600">
              Proof of funds, lender letter, or underwriting notes.
            </div>
          </a>
        </div>
      </Section>
    </Container>
  );
}
