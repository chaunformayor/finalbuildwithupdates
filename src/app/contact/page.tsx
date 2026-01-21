import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { InvestorListForm } from "@/components/investor-list-form";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Schedule an investor call or join the investor list."
};

export default function Contact() {
  return (
    <Container>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-4 text-lg text-zinc-600">
          The fastest way to start is to schedule a short investor call or join the Investor List.
        </p>
        <div className="mt-4 text-sm text-zinc-700">
          <div><span className="font-semibold">Phone:</span> {SITE.phone}</div>
          <div><span className="font-semibold">Email:</span> {SITE.email}</div>
        </div>
      </div>

      <Section
        title="Schedule an Investor Call"
        description="Embed your scheduling link here (Calendly recommended)."
      >
        <div id="schedule" className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft">
          <div className="text-sm text-zinc-600">
            Schedule a 30‑minute investor introduction call.
          </div>
          <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200">
            <iframe
              title="Schedule an Investor Call"
              src="https://calendly.com/mhs-stlouis/30min"
              className="h-[720px] w-full"
            />
          </div>
          <div className="mt-3 text-xs text-zinc-500">
            Tip: Use a 15-minute “Investor Intro Call” event type.
          </div>
        </div>
      </Section>

      <Section
        title="Join the Investor List"
        description="Tell us your buy box and we’ll follow up with relevant opportunities."
      >
        <div id="investor-list">
          <InvestorListForm />
        </div>
      </Section>

      <div className="mt-10 text-xs text-zinc-500">
        Private investor education is invite-only and shared after qualification.
      </div>
    </Container>
  );
}

