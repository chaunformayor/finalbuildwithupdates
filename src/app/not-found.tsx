import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <Container>
      <div className="py-20 max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-3 text-zinc-600">The page you’re looking for doesn’t exist.</p>
        <div className="mt-6 flex gap-3">
          <Button href="/" variant="primary">Go home</Button>
          <Link href="/contact" className="rounded-2xl border border-zinc-300 px-6 py-3 text-sm font-semibold hover:bg-zinc-50">
            Contact
          </Link>
        </div>
      </div>
    </Container>
  );
}
