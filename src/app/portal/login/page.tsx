import { Container } from "@/components/container";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Investor Portal Login",
  description: "Password-gated investor portal."
};

export default async function PortalLogin({
  searchParams
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const sp = await searchParams;
  const error = sp?.error === "1";
  const nextPath = sp?.next || "/portal";

  return (
    <Container>
      <div className="mx-auto max-w-xl py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Investor Portal</h1>
        <p className="mt-3 text-zinc-600">
          This portal is private. Access is provided to approved investors.
        </p>

        <form
          method="POST"
          action="/api/portal/login"
          className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft"
        >
          <input type="hidden" name="next" value={nextPath} />

          <label className="block">
            <div className="text-sm font-semibold">Access code</div>
            <input
              name="password"
              type="password"
              required
              className="mt-2 w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300"
              placeholder="Enter access code"
            />
          </label>

          {error ? (
            <div className="mt-4 rounded-2xl bg-rose-50 p-3 text-sm text-rose-900">
              Incorrect access code. Try again.
            </div>
          ) : null}

          <button
            type="submit"
            className="mt-5 w-full rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            Enter Portal
          </button>

          <div className="mt-4 text-xs text-zinc-500">
            Need access? Email {SITE.email}.
          </div>
        </form>
      </div>
    </Container>
  );
}

