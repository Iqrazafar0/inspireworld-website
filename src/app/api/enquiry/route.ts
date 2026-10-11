import { NextResponse } from "next/server";
import { lines, company } from "@/content/site";

/**
 * Enquiry endpoint: validates the quotation form and emails it to the company inbox.
 *
 * Recipient: ENQUIRY_TO_EMAIL if set, otherwise the email in src/content/site.ts.
 *
 * Delivery (first match wins):
 *  1. SMTP — set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (for Gmail: smtp.gmail.com, 465,
 *     the Gmail address, and a Google "App password"). Most reliable; sent from your own mailbox.
 *  2. FormSubmit (https://formsubmit.co) — no setup or account. The FIRST enquiry triggers an
 *     "Activate form" email to the recipient; click it once and every later enquiry is delivered.
 *
 * If delivery fails, the form offers the visitor a pre-written WhatsApp message instead,
 * so no enquiry is lost.
 */

export const runtime = "nodejs";

const REQUIRED = ["name", "email", "phone", "line", "quantity", "destination"] as const;
const OPTIONAL = ["company", "message"] as const;
const MAX = 2000;
const LABELS: Record<string, string> = {
  name: "Name",
  company: "Company",
  email: "Email",
  phone: "Phone / WhatsApp",
  lineName: "Product line",
  quantity: "Quantity",
  destination: "Delivery country",
  message: "Details",
};

const esc = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot filled in: almost certainly a bot. Pretend success.
  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const clean: Record<string, string> = {};
  for (const key of [...REQUIRED, ...OPTIONAL]) {
    const v = body[key];
    clean[key] = typeof v === "string" ? v.trim().slice(0, MAX) : "";
  }

  const missing = REQUIRED.filter((k) => !clean[k]);
  const validLine = clean.line === "multiple" || lines.some((l) => l.id === clean.line);
  if (missing.length || !validLine || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) {
    return NextResponse.json({ ok: false, error: "Missing or invalid fields", missing }, { status: 422 });
  }

  const found = lines.find((l) => l.id === clean.line);
  const lineName = found ? `${found.headline} (${found.name})` : "Several product lines";
  const fields: Record<string, string> = { ...clean, lineName };
  const order = ["name", "company", "email", "phone", "lineName", "quantity", "destination", "message"];
  const rows = order.filter((k) => fields[k]).map((k) => [LABELS[k], fields[k]] as const);

  const to = process.env.ENQUIRY_TO_EMAIL || company.email;
  const subject = `New quotation request: ${lineName} (${clean.name})`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nSent from the ${company.shortName} website.`;
  const html = `<h2 style="font-family:Arial,sans-serif;color:#15241f">New quotation request</h2>
<table cellpadding="8" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
${rows.map(([k, v]) => `<tr><td style="border-bottom:1px solid #ddd;color:#56625c;white-space:nowrap"><b>${esc(k)}</b></td><td style="border-bottom:1px solid #ddd">${esc(v).replace(/\n/g, "<br>")}</td></tr>`).join("\n")}
</table>
<p style="font-family:Arial,sans-serif;font-size:12px;color:#888">Reply to this email to answer ${esc(clean.name)} directly.</p>`;

  try {
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const { createTransport } = await import("nodemailer");
      const port = Number(process.env.SMTP_PORT || 465);
      const transport = createTransport({
        host: process.env.SMTP_HOST,
        port,
        secure: port === 465,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      await transport.sendMail({
        from: `"${company.shortName} Website" <${process.env.SMTP_USER}>`,
        to,
        replyTo: `"${clean.name.replace(/"/g, "")}" <${clean.email}>`,
        subject,
        text,
        html,
      });
    } else {
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json", Origin: siteUrl, Referer: `${siteUrl}/` },
        body: JSON.stringify({
          ...Object.fromEntries(rows),
          _subject: subject,
          _replyto: clean.email,
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
      if (!res.ok || String(data.success) !== "true") throw new Error(`FormSubmit: ${data.message ?? res.status}`);
    }
  } catch (e) {
    console.error("[enquiry] email delivery failed", e);
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
