"use client";

import { useMemo, useState } from "react";
import { FORMSPREE } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

export function DealSubmissionForm() {
  const endpoint = useMemo(() => FORMSPREE.dealEndpoint(), []);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    if (!endpoint) {
      setStatus("error");
      setMessage("Missing Formspree endpoint for deal submissions.");
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
        setMessage("Deal submitted — thank you. We’ll review and follow up.");
        form.reset();
      } else {
        const payload = await res.json().catch(() => null);
        setStatus("error");
        setMessage(payload?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Your name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" />

        <Field label="Property address" name="address" required />
        <Field label="Asking price" name="asking_price" />
        <Field label="Estimated rehab" name="estimated_rehab" />

        <Field label="ARV (if known)" name="arv" />
        <Field label="Current rent / projected rent" name="rent" />

        <Textarea
          label="Deal notes"
          name="notes"
          placeholder="Occupancy, condition, timeline, access, anything else"
        />
      </div>

      <div className="hidden">
        <label>
          Do not fill this out: <input name="_gotcha" />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-50"
      >
        {status === "sending" ? "Submitting…" : "Submit Deal"}
      </button>

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

      <p className="mt-3 text-xs text-zinc-500">
        Submissions are reviewed based on investor criteria and market fit.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required
}: {
  label: string;
  name: string;
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
        className="mt-2 min-h-[120px] w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
}
