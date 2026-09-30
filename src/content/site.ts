/**
 * ─────────────────────────────────────────────────────────────
 *  Inspire World — single source of truth for website content.
 *  Every component reads from this file, so the company name,
 *  address, contact details and product lines stay identical
 *  everywhere. Edit here, not inside components.
 * ─────────────────────────────────────────────────────────────
 */

export const company = {
  legalName: "Inspire World Readymade Garments Trading L.L.C.",
  shortName: "Inspire World",
  tagline: "General trading house · Dubai",
  established: "2026",
  owner: "Palash Debnath",
  ownerRole: "Owner & Managing Director",

  address: {
    office: "Office 103",
    building: "Zalfa Building",
    area: "Al Garhoud",
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
  },

  phoneDisplay: "+971 55 531 6933",
  phoneLocal: "055 531 6933",
  phoneE164: "+971555316933",
  whatsapp: "971555316933",
  email: "subhan.mondal525@gmail.com",
} as const;

/** One-line and multi-line address — use these everywhere so it never drifts. */
export const addressLine = `${company.address.office}, ${company.address.building}, ${company.address.area}, ${company.address.city}, UAE`;
export const addressLines = [
  `${company.address.office}, ${company.address.building}`,
  `${company.address.area}, ${company.address.city}`,
  company.address.country,
];

export const links = {
  tel: `tel:${company.phoneE164}`,
  mail: `mailto:${company.email}`,
  whatsapp: (text?: string) =>
    `https://wa.me/${company.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`,
  map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${company.address.building}, ${company.address.area}, ${company.address.city}`,
  )}`,
};

export const nav = [
  { label: "Product lines", href: "#lines" },
  { label: "About", href: "#about" },
  { label: "How we work", href: "#process" },
  { label: "Who we supply", href: "#supply" },
  { label: "Contact", href: "#contact" },
] as const;

export const enquiryHref = "#enquiry";

/* ── Product lines ─────────────────────────────────────────── */

export type GroupId = "apparel" | "footwear" | "bags" | "lifestyle";

export const groups: { id: GroupId; label: string }[] = [
  { id: "apparel", label: "Apparel & Textiles" },
  { id: "footwear", label: "Footwear" },
  { id: "bags", label: "Bags & Travel" },
  { id: "lifestyle", label: "Fragrance, Gifts & Care" },
];

export type Line = {
  id: string;
  /** Product line name. */
  name: string;
  group: GroupId;
  summary: string;
  examples: string[];
  image: string;
  alt: string;
};

/** The nine product lines — the company's lead line (readymade garments) first. */
export const lines: Line[] = [
  {
    id: "readymade-garments",
    name: "Readymade Garments",
    group: "apparel",
    summary: "Menswear, womenswear and kidswear in bulk, packed by size ratio for retail and wholesale.",
    examples: ["Shirts & T-shirts", "Trousers & denim", "Abayas & modest wear", "Kidswear"],
    image: "/images/garments.webp",
    alt: "Stack of folded cotton shirts in soft pastel colours",
  },
  {
    id: "textiles",
    name: "Textiles",
    group: "apparel",
    summary: "Woven and knitted fabrics by the roll or metre, for garment makers, tailors and retailers.",
    examples: ["Cotton & poly-cotton", "Suiting & shirting", "Knits & jersey", "Printed fabrics"],
    image: "/images/textiles.webp",
    alt: "Folded lengths of dyed fabric in a range of colours",
  },
  {
    id: "shoes",
    name: "Shoes",
    group: "footwear",
    summary: "Formal, casual and sports shoes for men, women and children, in mixed size runs.",
    examples: ["Leather formal shoes", "Casual & loafers", "Sneakers", "School shoes"],
    image: "/images/shoes.webp",
    alt: "Pair of brown leather lace-up shoes viewed from above",
  },
  {
    id: "slippers-sandals",
    name: "Slippers & Sandals",
    group: "footwear",
    summary: "Everyday and occasion sandals, slides and slippers, including hotel and bulk packs.",
    examples: ["Leather sandals", "Slides & flip-flops", "Arabic sandals", "Hotel slippers"],
    image: "/images/sandals.webp",
    alt: "Tan leather cross-strap sandal on a pale background",
  },
  {
    id: "handbags-leather",
    name: "Handbags & Leather Products",
    group: "bags",
    summary: "Handbags, wallets, belts and small leather goods in genuine and synthetic leather.",
    examples: ["Handbags & totes", "Wallets & purses", "Belts", "Small leather goods"],
    image: "/images/bags.webp",
    alt: "Brown leather handbag with buckled straps",
  },
  {
    id: "suitcases-travel",
    name: "Suitcases & Travel Requisites",
    group: "bags",
    summary: "Hard- and soft-shell luggage sets and the travel accessories that sell alongside them.",
    examples: ["Trolley luggage sets", "Cabin bags", "Duffels & backpacks", "Travel accessories"],
    image: "/images/luggage.webp",
    alt: "Dark hard-shell cabin suitcase standing against a timber wall",
  },
  {
    id: "gifts",
    name: "Gifts",
    group: "lifestyle",
    summary: "Gift sets and packaged items for retail, corporate gifting and seasonal occasions.",
    examples: ["Gift sets & hampers", "Corporate gifts", "Ramadan & Eid gifting", "Gift packaging"],
    image: "/images/gifts.webp",
    alt: "Small kraft-paper gift boxes tied with string",
  },
  {
    id: "agarwood-incense",
    name: "Agarwood & Incense",
    group: "lifestyle",
    summary: "Oud, bakhoor and incense in the grades and pack sizes the Gulf market expects.",
    examples: ["Oud oil (dehn al oud)", "Agarwood chips", "Bakhoor", "Incense & burners"],
    image: "/images/oud.webp",
    alt: "Small gold-capped bottle of oud oil beside an incense burner",
  },
  {
    id: "soap-hair-care",
    name: "Soap & Hair Care Products",
    group: "lifestyle",
    summary: "Bar and liquid soaps, shampoos and hair care for retail shelves and hospitality.",
    examples: ["Bar & liquid soap", "Shampoo & conditioner", "Hair oils", "Hotel amenities"],
    image: "/images/care.webp",
    alt: "Shampoo and conditioner pump bottles on a wooden shelf",
  },
];

/* ── Page copy ─────────────────────────────────────────────── */

export const hero = {
  eyebrow: "General trading · Dubai, UAE",
  title: "Garments, footwear and lifestyle goods, traded from Dubai.",
  subtitle:
    "Inspire World supplies retailers, wholesalers and importers with nine product lines, from readymade garments and textiles to leather goods, luggage, oud and personal care, consolidated into one order.",
};

export const about = {
  title: "A Dubai trading house, built for consolidated orders.",
  paragraphs: [
    `${company.legalName} is a Dubai trading company supplying garments, textiles, footwear, bags, luggage, oud, gifts and personal care products to trade buyers.`,
    "Our office sits in Al Garhoud, between Dubai International Airport and the Deira trading district on Dubai Creek, the part of the city where the region's garment, textile and general trading has always been done.",
    "We work with buyers who want several product lines from one supplier: one point of contact, one quotation and one consignment, whether the goods are for shops in the UAE or for re-export.",
  ],
  imageCaption: "Dhows moored on Dubai Creek, Deira",
};

export const process = [
  {
    title: "Send your requirement",
    body: "Tell us the product line, specifications, quantities and where the goods are going. Photos or reference samples help.",
  },
  {
    title: "Receive a quotation",
    body: "We come back with pricing, minimum quantities, available sizes and colours, and lead time. Samples can be arranged where stock allows.",
  },
  {
    title: "Confirm the order",
    body: "A proforma invoice sets out the agreed goods, terms and UAE VAT where it applies. Production or allocation starts on confirmation.",
  },
  {
    title: "Packed and handed over",
    body: "Goods are checked, packed and labelled to your instructions, then delivered in the UAE or handed to your freight forwarder.",
  },
];

export const audiences = [
  { title: "Retailers & boutiques", body: "Seasonal and core stock across garments, footwear and accessories." },
  { title: "Wholesalers & distributors", body: "Bulk quantities in size-ratio packs and mixed containers." },
  { title: "Importers & re-exporters", body: "Consolidated multi-line orders shipped from Dubai." },
  { title: "Corporate & gifting buyers", body: "Gift sets, leather goods and oud for occasions and clients." },
  { title: "Hotels & hospitality", body: "Slippers, soaps and hair care amenities in bulk packs." },
];
