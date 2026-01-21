import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import path from "path";
import fs from "fs/promises";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const jar = await cookies();
  const authed = jar.get("mis_portal")?.value === "1";
  if (!authed) return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

  const url = new URL(req.url);
  const name = String(url.searchParams.get("name") || "");

  const allow = new Set(["operator-notes.pdf", "capital-intake-checklist.pdf"]);
  if (!allow.has(name)) {
    return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
  }

  const filePath = path.join(process.cwd(), "private", name);
  const buf = await fs.readFile(filePath);

  return new NextResponse(buf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${name}"`
    }
  });
}
