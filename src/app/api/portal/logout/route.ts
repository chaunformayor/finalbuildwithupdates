import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const jar = await cookies();
  jar.set("mis_portal", "", { path: "/", maxAge: 0 });
  return NextResponse.redirect(new URL("/portal/login", req.url));
}
