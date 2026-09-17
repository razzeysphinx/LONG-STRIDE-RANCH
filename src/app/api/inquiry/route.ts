import { NextResponse } from "next/server";

type InquiryPayload = {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  preferredLocation?: string;
  riderExperience?: string;
  discipline?: string;
  horse?: string;
  message?: string;
  website?: string;
};
const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export async function POST(request: Request) {
  try {
    const data: InquiryPayload = await request.json();
    if (data.website) return NextResponse.json({ ok: true });
    if (!data.name || !data.email || !data.message)
      return NextResponse.json(
        { ok: false, error: "Please complete the required fields." },
        { status: 400 },
      );
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.INQUIRY_FROM_EMAIL;
    const to = process.env.INQUIRY_TO_EMAIL ?? "danielle@longstrideranch.com";
    if (!apiKey || !from)
      return NextResponse.json(
        {
          ok: false,
          fallback: true,
          error: "Online submission is not configured yet.",
        },
        { status: 503 },
      );
    const details = [
      ["Name", data.name],
      ["Email", data.email],
      ["Phone", data.phone],
      ["Interest", data.interest],
      ["Location", data.preferredLocation],
      ["Horse", data.horse],
      ["Rider experience", data.riderExperience],
      ["Discipline", data.discipline],
      ["Message", data.message],
    ]
      .filter(([, value]) => Boolean(value))
      .map(
        ([label, value]) =>
          `<p><strong>${escapeHtml(String(label))}</strong><br>${escapeHtml(String(value))}</p>`,
      )
      .join("");
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `Long Stride inquiry: ${data.interest ?? "General"}`,
        html: `<h1>New Long Stride Ranch Inquiry</h1>${details}`,
      }),
    });
    if (!response.ok) throw new Error("Email provider rejected the request.");
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Inquiry submission failed:", error);
    return NextResponse.json(
      { ok: false, error: "We could not send your inquiry." },
      { status: 500 },
    );
  }
}
