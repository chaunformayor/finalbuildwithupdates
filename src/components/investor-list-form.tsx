"use client";

import { useMemo, useState } from "react";
import { FORMSPREE } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

export function InvestorListForm() {
  const endpoint = useMemo(() => FORMSPREE.investorEndpoint(), []);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    if (!endpoint) {
      setStatus("error");
      setMessage("Missing Formspree form ID. Set NEXT_PUBLIC_FORMSPREE_FORM_ID in .env.local.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Thanks — you’re on the list. We’ll follow up shortly.");
        form.reset();
      } else {
        const payload = await res.json().catch(() => null);
        setStatus("error");
        setMessage(payload?.error || "Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again or email us directly.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" name="name" placeholder="Your name" required />
        <Field label="Email" name="email" placeholder="you@email.com" type="email" required />
        <Field label="Phone" name="phone" placeholder="(###) ###-####" />
        <Field
          label="Local or out-of-state?"
          name="location_type"
          placeholder="Local / Out-of-state"
        />

        <Select
          label="Funds type"
          name="funds_type"
          options={["Cash", "Conventional", "Hard money", "Private capital", "Other"]}
        />
        <Select
          label="Timeline to buy"
          name="timeline"
          options={["0–30 days", "30–90 days", "90+ days", "Just researching"]}
        />

        <Field label="Target purchase range" name="price_range" placeholder="$80k–$160k" />
        <Select
          label="Strategy"
          name="strategy"
          options={["BRRRR", "Turnkey", "Value-add", "Section 8", "Mixed / Unsure"]}
        />

        <Textarea
          label="Buy box / neighborhoods / notes"
          name="buy_box"
          placeholder="Areas, beds/baths, anything you won’t buy (main roads, septic, etc.)"
        />
        <Textarea
          label="What are you trying to accomplish this year?"
          name="goals"
          placeholder="Example: Buy 2 rentals, BRRRR one property, stabilize cash flow, etc."
        />
      </div>

      {/* Honeypot */}
      <div className="hidden">
        <label>
          Do not fill this out: <input name="_gotcha" />
        </label>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-50"
        >
          {status === "sending" ? "Submitting…" : "Join the Investor List"}
        </button>

        <div className="text-xs text-zinc-500">
          Private education is invite-only for qualified investors.
        </div>
      </div>

      {message ? (
        <div
          className={[
            "mt-4 rounded-2xl p-3 text-sm",
            status === "success" ? "bg-emerald-50 text-emerald-900" : "bg-rose-50 text-rose-900"
          ].join(" ")}
        >
          {message}
        </div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <div className="text-sm font-semibold">{label}</div>
      <input
        className="mt-2 w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
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
        className="mt-2 min-h-[110px] w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
}

function Select({
  label,
  name,
  options
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <div className="text-sm font-semibold">{label}</div>
      <select
        className="mt-2 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
        name={name}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
