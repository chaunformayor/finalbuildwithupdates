export const dynamic = "force-static";
export const revalidate = 86400;

import { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();
  const pages = ["", "/invest", "/how-it-works", "/track-record", "/submit-deal", "/market", "/contact"];
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7
  }));
}
