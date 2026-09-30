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
   - `NEXT_PUBLIC_SITE_URL`: the live domain, for example `https://www.inspireworld.ae`
   - `ENQUIRY_TO_EMAIL`: `subhan.mondal525@gmail.com`
   - Optional Gmail sending: `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=465`, `SMTP_USER` (the Gmail address) and `SMTP_PASS` (a Gmail App password)
4. Deploy, then connect the domain under **Settings → Domains**.
5. Submit one test enquiry on the live site. If the Gmail variables are not set, click the **Activate Form** email from FormSubmit.

Any Node host works too: `npm install && npm run build && npm start` (port 3000). The enquiry form needs a server (the `/api/enquiry` route), so a static-only host will not work.

> Note for the developer: this project was written and tested as rendered React (all sections, the mobile menu, filters and form validation), but `next build` has not been run yet. Please run `npm install && npm run build` first and fix anything the TypeScript check flags.

## Before going live

1. **Enquiry emails.** Every quotation request is emailed to **subhan.mondal525@gmail.com** (change it with `ENQUIRY_TO_EMAIL` or `company.email` in `site.ts`). Replying to the email replies to the buyer. There are two ways it can be sent:
   - **FormSubmit (works with no setup).** After the site is live, send one test enquiry. FormSubmit emails an **"Activate Form"** link to the inbox. Click it once, and every enquiry after that is delivered.
   - **Gmail SMTP (recommended).** In the Gmail account, turn on 2-Step Verification and create an App password. Put the Gmail address in `SMTP_USER` and the app password in `SMTP_PASS` (see `.env.example`). Emails are then sent from your own mailbox, with no third party involved.

   If sending ever fails, the form gives the visitor a pre-written WhatsApp message instead, so no enquiry is lost. The handler is in `src/app/api/enquiry/route.ts`.
2. **Domain.** Set `NEXT_PUBLIC_SITE_URL`. It is used for SEO metadata, `sitemap.xml` and `robots.txt`.
3. **Email.** The site currently shows a Gmail address. An address on the company domain (for example `info@inspireworld.ae`) reads as more credible to trade buyers. Change it in one place: `company.email` in `src/content/site.ts`.
4. **Photos.** The images in `public/images/` are free Unsplash photos, cropped to 4:5 and colour-graded to one warm tone. When real product or warehouse photos are available, replace them. Keep the same file names, or update the `image` paths in `site.ts`.
5. **Product examples.** Each product line lists typical items (for example "Abayas & modest wear" or "Hotel slippers"). Confirm these match what the company actually trades.

## Where to edit

| What | File |
|---|---|
| Company name, address, phone, email | `src/content/site.ts` → `company` |
| The 9 product lines (names, descriptions, examples, images) | `src/content/site.ts` → `lines` |
| Hero, About, process steps, "Who we supply" copy | `src/content/site.ts` |
| Colours, fonts, spacing | `src/app/globals.css` (tokens at the top) |
| SEO title, description, structured data | `src/app/layout.tsx` |
| Section order | `src/app/page.tsx` |
| Individual sections | `src/components/*.tsx` |

Every component reads the name, address and product lines from `site.ts`. That keeps them identical across the product lines, About facts, contact cards, footer and structured data.

## Sections and anchors

- Product lines: `#lines`, with a card per line at `#line-<id>`
- About: `#about`
- How we work: `#process`
- Who we supply: `#supply`
- Request a quotation: `#enquiry`
- Contact: `#contact`

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
- Handbags: `photo-1691480150204-66dd1eb77391`
- Luggage: `photo-1670888616427-764112453941`
- Gifts: `photo-1512418490979-92798cec1380`
- Oud: `photo-1738414808975-201966230c59`
- Soap & hair care: `photo-1749856727296-481414df24e5`
- Dubai Creek: `photo-1579524655638-351438cb80d2`
