"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PortalNav } from "@/components/portal-nav";
import { FORMSPREE } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

export default function CapitalIntake() {
  const endpoint = useMemo(() => FORMSPREE.investorEndpoint(), []);
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("form_type", "capital_intake");

    try {
      const res = await fetch(endpoint, { method: "POST", headers: { Accept: "application/json" }, body: data });
      if (res.ok) {
        setStatus("success");
        setMsg("Capital intake submitted. We’ll review and follow up.");
        form.reset();
      } else {
        setStatus("error");
        setMsg("Submission failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setMsg("Network error. Please try again.");
    }
  }

  return (
    <Container>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Capital Intake</h1>
        <p className="mt-4 text-lg text-zinc-600">
          This locks your buy box and execution constraints so we can move fast.
        </p>
        <PortalNav />
      </div>

      <Section title="Investor profile" description="Be specific. Clarity prevents wasted time.">
        <form onSubmit={onSubmit} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" />
            <Field label="Entity (LLC/Trust/etc.)" name="entity" />

            <Field label="Budget range" name="budget_range" placeholder="$80k–$150k" />
            <Field label="Target areas" name="target_areas" placeholder="South City, Florissant, etc." />

            <Field label="Property type" name="property_type" placeholder="SFH, duplex, etc." />
            <Field label="Timeline to deploy" name="timeline" placeholder="0–30 days, 60–90 days, etc." />

            <Field label="Funding profile" name="funding" placeholder="Cash, hard money, bank, etc." />
            <Field label="Renovation tolerance" name="rehab_tolerance" placeholder="Light / medium / heavy" />

            <Textarea label="Buy box notes" name="buy_box_notes" placeholder="Beds/baths, rent targets, deal breakers, etc." />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-50"
          >
            {status === "sending" ? "Submitting…" : "Submit Capital Intake"}
          </button>

          {msg ? (
            <div className={"mt-4 rounded-2xl p-3 text-sm " + (status === "success" ? "bg-emerald-50 text-emerald-900" : "bg-rose-50 text-rose-900")}>
              {msg}
            </div>
          ) : null}
        </form>
      </Section>
    </Container>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <div className="text-sm font-semibold">{label}</div>
      <input
        className="mt-2 w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
      />
    </label>
  );
}

function Textarea({
  label,
  name,
  placeholder
}: {
  label: string;
  name: string;
  placeholder?: string;
}) {
  return (
    <label className="block md:col-span-2">
      <div className="text-sm font-semibold">{label}</div>
      <textarea
        className="mt-2 min-h-[120px] w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
}
