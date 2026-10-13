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
  :root { --ink:#15241f; --paper:#f3f1ec; --muted:#56625c; --accent:#1c6a72; --accent-soft:#8cc3c4; --line:rgba(21,36,31,.14); --ease:cubic-bezier(.22,.61,.36,1); }
  * { box-sizing: border-box; }
  html, body { height: 100%; }
  body { margin: 0; display: grid; place-items: center; padding: 32px 20px; background: var(--paper); color: var(--ink); overflow-x: hidden;
         font: 400 1rem/1.6 "Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif; text-align: center; position: relative; }

  /* Faint arches behind the content: the Gulf-arch motif from the logo, breathing slowly */
  .bg { position: fixed; inset: 0; display: grid; place-items: center; pointer-events: none; z-index: 0; }
  .bg span { position: absolute; border: 1px solid rgba(21,36,31,.07); border-bottom: 0; border-radius: 999px 999px 0 0;
             bottom: -10vh; opacity: 0; animation: arch-in 2.4s var(--ease) forwards, breathe 9s ease-in-out 2.4s infinite; }
  .bg span:nth-child(1) { width: min(560px, 92vw); height: 78vh; animation-delay: .2s, 2.6s; }
  .bg span:nth-child(2) { width: min(820px, 130vw); height: 96vh; animation-delay: .45s, 2.85s; }
  .bg span:nth-child(3) { width: min(1100px, 170vw); height: 114vh; animation-delay: .7s, 3.1s; }
  @keyframes arch-in { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: none; } }
  @keyframes breathe { 0%, 100% { transform: none; } 50% { transform: translateY(-10px); } }

  main { position: relative; z-index: 1; max-width: 560px; }

  /* Logo: the arch draws itself, then the globe inside keeps turning */
  .mark { width: 84px; height: 84px; margin: 0 auto 26px; display: block; overflow: visible; }
  .mark .arch { stroke-dasharray: 80; stroke-dashoffset: 80; animation: draw 1.2s var(--ease) .1s forwards; }
  .mark .base { stroke-dasharray: 30; stroke-dashoffset: 30; animation: draw .8s var(--ease) .6s forwards; }
  .mark .globe { opacity: 0; animation: fade .8s ease .9s forwards; }
  @keyframes draw { to { stroke-dashoffset: 0; } }
  @keyframes fade { to { opacity: 1; } }

  /* Text rises in, one line after another */
  .rise { opacity: 0; transform: translateY(14px); animation: rise .9s var(--ease) forwards; }
  .d1 { animation-delay: .6s; } .d2 { animation-delay: .72s; } .d3 { animation-delay: .86s; } .d4 { animation-delay: 1s; } .d5 { animation-delay: 1.12s; }
  @keyframes rise { to { opacity: 1; transform: none; } }

  h1 { margin: 0; font: 500 clamp(2.4rem, 7vw, 3.6rem)/1.05 "Cormorant Garamond", Georgia, serif; letter-spacing: -.01em; text-wrap: balance; }
  .name { margin: 0 0 18px; font-size: .78rem; letter-spacing: .16em; text-transform: uppercase; color: var(--accent); font-weight: 600; }
  p.lead { margin: 18px auto 0; color: var(--muted); font-size: 1.08rem; max-width: 44ch; }

  /* "Updating" bar: a soft turquoise light travelling along a thin line */
  .progress { position: relative; width: 180px; height: 2px; margin: 28px auto 0; background: var(--line); border-radius: 2px; overflow: hidden; }
  .progress::after { content: ""; position: absolute; top: 0; left: -40%; width: 40%; height: 100%; border-radius: 2px;
                     background: linear-gradient(90deg, transparent, var(--accent), transparent); animation: travel 2.2s ease-in-out infinite; }
  @keyframes travel { to { left: 100%; } }

  .contact { margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--line); display: grid; gap: 10px; justify-items: center; }
  .contact a { color: var(--ink); font-weight: 600; text-decoration: none; overflow-wrap: anywhere; transition: color .2s; }
  .contact a:hover { color: var(--accent); }
  .btn { display: inline-flex; align-items: center; gap: 8px; margin-top: 4px; padding: 12px 22px; border-radius: 999px; background: var(--ink); color: var(--paper) !important;
         transition: background-color .25s var(--ease), transform .25s var(--ease); }
  .btn:hover { background: var(--accent); transform: translateY(-1px); }
  a:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 6px; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation: none !important; transition: none !important; }
    .rise, .bg span, .mark .globe { opacity: 1; transform: none; }
    .mark .arch, .mark .base { stroke-dashoffset: 0; }
  }
</style>
</head>
<body>
<div class="bg" aria-hidden="true"><span></span><span></span><span></span></div>
<main>
  <svg class="mark" viewBox="0 0 40 40" aria-hidden="true">
    <defs><clipPath id="inside"><path d="M9 34V18a11 11 0 0 1 22 0v16Z"/></clipPath></defs>
    <g class="globe" clip-path="url(#inside)" fill="none" stroke="#1c6a72" stroke-width="1.3">
      <ellipse cx="20" cy="20.5" rx="11" ry="13.5"><animate attributeName="rx" values="11;0.4;11" dur="7s" repeatCount="indefinite"/></ellipse>
      <ellipse cx="20" cy="20.5" rx="5.5" ry="13.5"><animate attributeName="rx" values="11;0.4;11" dur="7s" begin="-2.33s" repeatCount="indefinite"/></ellipse>
      <ellipse cx="20" cy="20.5" rx="5.5" ry="13.5"><animate attributeName="rx" values="11;0.4;11" dur="7s" begin="-4.66s" repeatCount="indefinite"/></ellipse>
      <path d="M9 22h22"/>
    </g>
    <path class="arch" d="M9 34V18a11 11 0 0 1 22 0v16" fill="none" stroke="#15241f" stroke-width="2.2"/>
    <path class="base" d="M5 34h30" stroke="#15241f" stroke-width="2.2" stroke-linecap="round"/>
  </svg>
  <p class="name rise d1">${esc(company.shortName)}</p>
  <h1 class="rise d2">Our website is being updated.</h1>
  <p class="lead rise d3">We'll be back online shortly. For quotations and orders, please contact us directly.</p>
  <div class="progress rise d4" role="progressbar" aria-label="Website update in progress"></div>
  <div class="contact rise d5">
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
