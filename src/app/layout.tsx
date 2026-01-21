import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileCTA } from "@/components/mobile-cta";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Invest in ${SITE.city} & the Midwest`,
    template: `%s | ${SITE.name}`
  },
  description:
    "We help investors acquire, rehab, and manage buy-and-hold rentals in St. Louis and the Midwest. Built for cash flow and longevity.",
  openGraph: {
    title: SITE.name,
    description:
      "Acquire, rehab, and manage Midwest rentals with an operator team built for long-term cash flow.",
    url: SITE.url,
    type: "website"
  },
  alternates: {
    canonical: SITE.url
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900">
        <Header />
        {/* Extra bottom padding so the mobile sticky CTA doesn't cover content */}
        <main className="py-10 pb-24 md:pb-10">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
