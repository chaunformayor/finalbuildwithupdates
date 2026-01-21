import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { PortalNav } from "@/components/portal-nav";

export const metadata = {
  title: "Uploads",
  description: "Investor-only uploads."
};

export default function Uploads() {
  return (
    <Container>
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Uploads</h1>
        <p className="mt-4 text-lg text-zinc-600">
          Upload proof of funds, lender letters, or underwriting notes. Investor-only.
        </p>
        <PortalNav />
      </div>

      <Section title="Upload documents" description="Uploads route through Formspree (requires Formspree file upload support).">
        <form
          action={process.env.NEXT_PUBLIC_FORMSPREE_INVESTOR_ENDPOINT || "https://formspree.io/f/maqqyknq"}
          method="POST"
          encType="multipart/form-data"
          className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft"
        >
          <input type="hidden" name="form_type" value="portal_upload" />

          <label className="block">
            <div className="text-sm font-semibold">Name</div>
            <input name="name" className="mt-2 w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm" required />
          </label>

          <label className="mt-4 block">
            <div className="text-sm font-semibold">Email</div>
            <input name="email" type="email" className="mt-2 w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm" required />
          </label>

          <label className="mt-4 block">
            <div className="text-sm font-semibold">Upload file</div>
            <input name="attachment" type="file" className="mt-2 w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm" required />
          </label>

          <label className="mt-4 block">
            <div className="text-sm font-semibold">Notes (optional)</div>
            <textarea name="notes" className="mt-2 min-h-[120px] w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm" />
          </label>

          <button className="mt-5 rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800">
            Submit Upload
          </button>

          <div className="mt-3 text-xs text-zinc-500">
            If your Formspree plan doesn’t support file uploads, we can switch this to Drive/Dropbox or S3 storage.
          </div>
        </form>
      </Section>
    </Container>
  );
}
