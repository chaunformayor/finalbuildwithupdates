import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const form = await req.formData();
  const password = String(form.get("password") || "");
  const nextPath = String(form.get("next") || "/portal");

  if (!process.env.PORTAL_PASSWORD || password !== process.env.PORTAL_PASSWORD) {
    return NextResponse.redirect(new URL("/portal/login?error=1", req.url));
  }

  const jar = await cookies();
  jar.set("mis_portal", "1", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30
  });

  return NextResponse.redirect(new URL(nextPath, req.url));
}
