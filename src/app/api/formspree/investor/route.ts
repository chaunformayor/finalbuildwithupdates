import { NextResponse } from "next/server";
import { createZohoLead } from "@/lib/zoho";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const fields = (body?.data && typeof body.data === "object") ? body.data : body;

    const lead = {
      Last_Name: fields?.name || "Website Lead",
      Email: fields?.email,
      Phone: fields?.phone,
      Lead_Source: "Formspree",
      Description: `Investor List submission\n\n${JSON.stringify(fields, null, 2)}`
    };

    await createZohoLead(lead);
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "error" }, { status: 500 });
  }
}
