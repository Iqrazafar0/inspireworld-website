import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import { company, lines, addressLine } from "@/content/site";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const sans = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const lineNames = lines.map((l) => l.name);
const description = `${company.legalName}: Dubai general trading company supplying ${lineNames
  .slice(0, 3)
  .join(", ")
  .toLowerCase()}, bags, luggage, oud, gifts and personal care to retailers, wholesalers and importers. ${addressLine}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.shortName} | Readymade Garments & General Trading, Dubai`,
    template: `%s | ${company.shortName}`,
  },
  description,
  applicationName: company.shortName,
  keywords: [
    "readymade garments trading Dubai",
    "garments wholesaler Dubai",
    "textile trading UAE",
    "shoes wholesale Dubai",
    "sandals and slippers supplier UAE",
    "handbags leather goods trading Dubai",
    "luggage suitcases wholesale Dubai",
    "oud agarwood incense trading",
    "soap hair care products supplier UAE",
    "gifts trading Dubai",
    "Al Garhoud trading company",
    company.shortName,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: company.shortName,
    title: `${company.shortName}: garments, footwear and lifestyle goods traded from Dubai`,
    description,
    locale: "en_AE",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: `${company.legalName}, Dubai` }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = { themeColor: "#15241f", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WholesaleStore",
  "@id": `${siteUrl}/#business`,
  name: company.legalName,
  alternateName: company.shortName,
  url: siteUrl,
  image: `${siteUrl}/images/og.jpg`,
  telephone: company.phoneE164,
  email: company.email,
  foundingDate: company.established,
  founder: { "@type": "Person", name: company.owner },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.office}, ${company.address.building}`,
    addressLocality: `${company.address.area}, ${company.address.city}`,
    addressRegion: company.address.city,
    addressCountry: company.address.countryCode,
  },
  areaServed: ["AE", "GCC", "Worldwide"],
  description,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Product lines",
    itemListElement: lineNames.map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Product", name },
    })),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
