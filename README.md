# Inspire World Readymade Garments Trading L.L.C. — Website

A single-page B2B site built with **Next.js 15 (App Router), React 19 and TypeScript**. There are no UI libraries: the site uses plain CSS with design tokens and inline SVG icons, so it stays fast and easy to maintain.

## Run it

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Requires Node.js 18.18 or newer (20 LTS recommended).

## Deploy (Vercel, recommended)

1. Push this folder to a GitHub repository.
2. In Vercel, click **Add New → Project**, import the repository and keep the defaults (Next.js is detected automatically).
3. Under **Settings → Environment Variables**, add the variables from `.env.example`:
   - `NEXT_PUBLIC_SITE_URL`: the live domain, for example `https://www.inspireworldgarments.com`
   - `ENQUIRY_TO_EMAIL`: `info@inspireworldgarments.com`
   - Optional SMTP sending: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER` (info@inspireworldgarments.com) and `SMTP_PASS`, from the email provider
4. Deploy, then connect the domain under **Settings → Domains**.
5. Submit one test enquiry on the live site. If the Gmail variables are not set, click the **Activate Form** email from FormSubmit.

Any Node host works too: `npm install && npm run build && npm start` (port 3000). The enquiry form needs a server (the `/api/enquiry` route), so a static-only host will not work.

> Note for the developer: this version adds 7 pages. It passes `tsc --noEmit` against the installed Next.js 15.5 and React 19 types, and every page was rendered and checked (links, anchors, mobile layout, form). Run `npm install && npm run build` before deploying.

## Before going live

1. **Enquiry emails.** Every quotation request is emailed to **info@inspireworldgarments.com** (change it with `ENQUIRY_TO_EMAIL` or `company.email` in `site.ts`). Replying to the email replies to the buyer. There are two ways it can be sent:
   - **FormSubmit (works with no setup).** After the site is live, send one test enquiry. FormSubmit emails an **"Activate Form"** link to the inbox. Click it once, and every enquiry after that is delivered.
   - **SMTP (recommended).** Put the SMTP host, port, username (info@inspireworldgarments.com) and password from the email provider into `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER` and `SMTP_PASS` (see `.env.example`). Emails are then sent from the company's own mailbox, with no third party involved.

   If sending ever fails, the form gives the visitor a pre-written WhatsApp message instead, so no enquiry is lost. The handler is in `src/app/api/enquiry/route.ts`.
2. **Domain.** Set `NEXT_PUBLIC_SITE_URL`. It is used for SEO metadata, `sitemap.xml` and `robots.txt`.
3. **Email.** The site uses info@inspireworldgarments.com. Make sure this mailbox is set up and receiving mail before launch. For SMTP sending, use that mailbox's own SMTP settings (from the email host) instead of Gmail.
4. **Photos.** The images in `public/images/` are free Unsplash photos, cropped and colour-graded to one warm tone. Close-up photos of the client's own stock (a school bag, a trolley bag and a gift set on a plain wall, for example) would be better. Keep the same file names, or update the `image` paths in `site.ts`.
5. **Policies.** The Terms & Conditions, Privacy, Returns & Refunds and Delivery pages are written for B2B trade in Dubai. Business numbers (quotation validity, claim window, refund time) are set once in `policy` in `src/content/legal.ts`. **Have a UAE lawyer review these texts before launch.**
6. **Licence match.** Each product card shows the licensed activity it falls under, so the site matches trade licence 1627014. Don't add products outside those nine activities (for example stationery) unless the activity is first added to the licence.

## Pages

| Page | Route | File |
|---|---|---|
| Home | `/` | `src/app/page.tsx` |
| Products (all 9 lines, with filters) | `/products` | `src/app/products/page.tsx` |
| About | `/about` | `src/app/about/page.tsx` |
| Contact & quotation form | `/contact` | `src/app/contact/page.tsx` |
| Terms & Conditions | `/terms` | content in `src/content/legal.ts` |
| Privacy Policy | `/privacy` | content in `src/content/legal.ts` |
| Returns & Refunds | `/returns` | content in `src/content/legal.ts` |
| Delivery Policy | `/delivery` | content in `src/content/legal.ts` |

Every "Request a quotation" button on a product links to `/contact?line=<id>#enquiry`, which pre-selects that product line in the form.

## Where to edit

| What | File |
|---|---|
| Company name, address, phone, email, licence number | `src/content/site.ts` → `company` |
| The 9 product lines (licence name, headline, description, examples, image) | `src/content/site.ts` → `lines` |
| Home, About, seasons, trade-terms summary, process copy | `src/content/site.ts` |
| Policy pages and their business numbers | `src/content/legal.ts` |
| Colours, fonts, spacing | `src/app/globals.css` (tokens at the top) |
| SEO title, description, structured data | `src/app/layout.tsx` and each page's `metadata` |
| Shared header, footer, mobile bar | `src/app/layout.tsx` |

## Built in

- **Responsive:** works from 360px to wide desktop. Phones get a mobile menu that closes with Escape, a Call / WhatsApp / Quotation bar at the bottom of the screen, and a floating WhatsApp button on larger screens.
- **Product lines:** can be filtered by group. Each card's "Enquire" link pre-selects that line in the form.
- **Accessibility:** skip link, landmarks, labelled form fields with inline errors and focus management, visible focus rings and reduced-motion support.
- **SEO:** metadata, Open Graph image (`public/images/og.jpg`), `WholesaleStore` JSON-LD with address, phone and product catalogue, plus sitemap and robots files.
- **Performance:** `next/image` serves AVIF/WebP, `next/font` self-hosts the fonts, and client JavaScript is limited to the header, filters, form and scroll reveal.

## Photo credits

The photos are from Unsplash under the Unsplash License, which allows free commercial use without attribution. Source IDs:

- Garments: `photo-1562657916-d8ce834d5f50`
- Textiles: `photo-1640746942093-cec8e647596d`
- Shoes: `photo-1625357165350-bdbcb6d7d524`
- Sandals: `photo-1613662632164-7f2b081a5b46`
- School bags: `photo-1726726192148-af52008ff663`
- Backpack (home page): `photo-1765516833058-c322c800fee1`
- Warehouse (About): `photo-1769355104335-acef3aa4c9b6`
- Luggage: `photo-1670888616427-764112453941`
- Gifts: `photo-1512418490979-92798cec1380`
- Oud: `photo-1738414808975-201966230c59`
- Soap & hair care: `photo-1749856727296-481414df24e5`
- Dubai Creek: `photo-1579524655638-351438cb80d2`
