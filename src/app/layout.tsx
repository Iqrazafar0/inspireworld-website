import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import { company, lines, addressLine } from "@/content/site";
import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActions } from "@/components/MobileActions";
import { Reveal } from "@/components/Reveal";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"], variable: "--font-display", display: "swap" });
const sans = Instrument_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const description = `${company.legalName}, Dubai: wholesale supplier of school bags, backpacks, trolley bags, luggage, gift sets, occasion items and readymade garments to merchants and retailers. ${addressLine}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.shortName} | School Bags, Luggage & Gifts Wholesale, Dubai`,
    template: `%s | ${company.shortName}`,
  },
  description,
  applicationName: company.shortName,
  keywords: [
    "school bags wholesale Dubai",
    "backpacks supplier UAE",
    "trolley school bags Dubai",
    "luggage wholesale Dubai",
    "gift sets supplier Dubai",
    "National Day gift items UAE",
    "readymade garments trading Dubai",
    "Al Garhoud trading company",
    company.shortName,
  ],
  openGraph: {
    type: "website",
    siteName: company.shortName,
    title: `${company.shortName}: school bags, travel bags and gifts supplied to Dubai merchants`,
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
  areaServed: "AE",
  description,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Product lines",
    itemListElement: lines.map((l) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name: l.name } })),
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
        <TopBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileActions />
        <Reveal />
      </body>
    </html>
  );
}
