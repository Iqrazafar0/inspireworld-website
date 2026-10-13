import { NextResponse } from "next/server";
import { company } from "@/content/site";

/**
 * Maintenance mode.
 *
 * Turn ON:  in Vercel → Settings → Environment Variables, add MAINTENANCE_MODE = on, then Redeploy.
 * Turn OFF: delete the variable (or set it to off), then Redeploy.
 *
 * While on, every page shows the maintenance page below with HTTP status 503,
 * which tells Google the site is only temporarily unavailable (rankings are kept).
 */
const ON = ["on", "true", "1", "yes"].includes((process.env.MAINTENANCE_MODE ?? "").trim().toLowerCase());

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${esc(company.shortName)} | Back soon</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Instrument+Sans:wght@400;600&display=swap">
<style>
  :root { --ink:#15241f; --paper:#f3f1ec; --muted:#56625c; --accent:#1c6a72; --line:rgba(21,36,31,.14); }
  * { box-sizing: border-box; }
  html, body { height: 100%; }
  body { margin: 0; display: grid; place-items: center; padding: 32px 20px; background: var(--paper); color: var(--ink);
         font: 400 1rem/1.6 "Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif; text-align: center; }
  main { max-width: 560px; }
  svg { margin: 0 auto 28px; display: block; }
  h1 { margin: 0; font: 500 clamp(2.4rem, 7vw, 3.6rem)/1.05 "Cormorant Garamond", Georgia, serif; letter-spacing: -.01em; }
  .name { margin: 0 0 18px; font-size: .78rem; letter-spacing: .16em; text-transform: uppercase; color: var(--accent); font-weight: 600; }
  p.lead { margin: 18px auto 0; color: var(--muted); font-size: 1.08rem; max-width: 44ch; }
  .contact { margin-top: 36px; padding-top: 24px; border-top: 1px solid var(--line); display: grid; gap: 10px; justify-items: center; }
  .contact a { color: var(--ink); font-weight: 600; text-decoration: none; overflow-wrap: anywhere; }
  .contact a:hover { color: var(--accent); }
  .btn { display: inline-block; margin-top: 8px; padding: 12px 22px; border-radius: 999px; background: var(--ink); color: var(--paper) !important; }
  .btn:hover { background: var(--accent); }
</style>
</head>
<body>
<main>
  <svg width="56" height="56" viewBox="0 0 40 40" aria-hidden="true">
    <path d="M9 34V18a11 11 0 0 1 22 0v16" fill="none" stroke="#15241f" stroke-width="2.2"/>
    <path d="M20 7.5c-4.6 5.4-4.6 21.2 0 26.5M20 7.5c4.6 5.4 4.6 21.2 0 26.5M9 22h22" fill="none" stroke="#1c6a72" stroke-width="1.6"/>
    <path d="M5 34h30" stroke="#15241f" stroke-width="2.2" stroke-linecap="round"/>
  </svg>
  <p class="name">${esc(company.shortName)}</p>
  <h1>Our website is being updated.</h1>
  <p class="lead">We'll be back online shortly. For quotations and orders, please contact us directly.</p>
  <div class="contact">
    <a class="btn" href="https://wa.me/${company.whatsapp}">WhatsApp ${esc(company.phoneDisplay)}</a>
    <a href="tel:${company.phoneE164}">${esc(company.phoneDisplay)}</a>
    <a href="mailto:${company.email}">${esc(company.email)}</a>
  </div>
</main>
</body>
</html>`;

export function middleware() {
  if (!ON) return NextResponse.next();
  return new NextResponse(page, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": "86400",
      "Cache-Control": "no-store",
    },
  });
}

// Run on every page and API route, but not on Next.js build files.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
