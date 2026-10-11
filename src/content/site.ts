/**
 * ─────────────────────────────────────────────────────────────
 *  Inspire World — single source of truth for website content.
 *  Every page reads from this file (and legal.ts for the policy
 *  pages), so the company name, address, contact details and
 *  product lines stay identical everywhere. Edit here, not in
 *  the components.
 * ─────────────────────────────────────────────────────────────
 */

export const company = {
  legalName: "Inspire World Readymade Garments Trading L.L.C.",
  shortName: "Inspire World",
  established: "2026",
  owner: "Palash Debnath",
  ownerRole: "Owner & Managing Director",

  /** Shown only in the Terms & Conditions company-details clause, where banks look for it. */
  licenceNo: "1627014",
  licenceAuthority: "Department of Economy and Tourism, Government of Dubai",

  address: {
    office: "Office 103",
    building: "Zalfa Building",
    area: "Al Garhoud",
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
  },

  phoneDisplay: "+971 58 825 5339",
  phoneLocal: "058 825 5339",
  phoneE164: "+971588255339",
  whatsapp: "971588255339",
  email: "info@inspireworldgarments.com",
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

/* ── Site map ──────────────────────────────────────────────── */

export const nav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Trade terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalNav = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Returns & Refunds", href: "/returns" },
  { label: "Delivery Policy", href: "/delivery" },
] as const;

export const enquiryHref = "/contact#enquiry";
export const enquiryFor = (lineId: string) => `/contact?line=${lineId}#enquiry`;

/* ── Product lines ─────────────────────────────────────────── */

export type GroupId = "bags" | "gifts" | "apparel" | "footwear" | "care";

export const groups: { id: GroupId; label: string }[] = [
  { id: "bags", label: "Bags & Travel" },
  { id: "gifts", label: "Gifts & Occasions" },
  { id: "apparel", label: "Apparel & Textiles" },
  { id: "footwear", label: "Footwear" },
  { id: "care", label: "Fragrance & Care" },
];

export type Line = {
  id: string;
  /** Exactly as written on the trade licence, so banks can match website to licence. */
  name: string;
  /** Plain-language heading shown above the licence name. */
  headline: string;
  group: GroupId;
  /** Main lines appear on the home page. */
  featured: boolean;
  summary: string;
  examples: string[];
  image: string;
  alt: string;
};

/**
 * The nine activities on the trade licence. Ordered by what the business
 * trades most: school and travel bags, gifts and occasion items, garments.
 */
export const lines: Line[] = [
  {
    id: "handbags-leather",
    name: "Handbags & Leather Products",
    headline: "School bags, backpacks & handbags",
    group: "bags",
    featured: true,
    summary:
      "Children's school bags and backpacks, character and printed designs, handbags and leather goods, supplied in carton quantities for back-to-school and year-round retail.",
    examples: ["Kids' school bags", "Backpacks", "Lunch & pencil bags", "Handbags & wallets"],
    image: "/images/school-bags.webp",
    alt: "Yellow children's school backpack with rabbit patches",
  },
  {
    id: "suitcases-travel",
    name: "Suitcases & Travel Requisites",
    headline: "Trolley bags & luggage",
    group: "bags",
    featured: true,
    summary:
      "Wheeled school trolley bags, cabin and check-in luggage sets, and the travel accessories that sell alongside them.",
    examples: ["Trolley school bags", "Luggage sets", "Cabin bags", "Travel accessories"],
    image: "/images/luggage.webp",
    alt: "Dark hard-shell cabin suitcase standing against a timber wall",
  },
  {
    id: "gifts",
    name: "Gifts",
    headline: "Gift sets & occasion items",
    group: "gifts",
    featured: true,
    summary:
      "Boxed gift sets for children and adults, and seasonal gift items for UAE National Day, Ramadan, Eid and the school year.",
    examples: ["Kids' gift sets", "National Day items", "Ramadan & Eid gifts", "Gift packaging"],
    image: "/images/gifts.webp",
    alt: "Small kraft-paper gift boxes tied with string",
  },
  {
    id: "readymade-garments",
    name: "Readymade Garments",
    headline: "Readymade garments",
    group: "apparel",
    featured: true,
    summary:
      "Kidswear, menswear and womenswear in bulk, including printed T-shirts for National Day and school events, packed by size ratio.",
    examples: ["Kidswear", "Printed T-shirts", "Shirts & trousers", "Occasion wear"],
    image: "/images/garments.webp",
    alt: "Stack of folded cotton shirts in soft pastel colours",
  },
  {
    id: "textiles",
    name: "Textiles",
    headline: "Fabrics",
    group: "apparel",
    featured: false,
    summary: "Woven and knitted fabrics by the roll or metre, for garment makers, tailors and retailers.",
    examples: ["Cotton & poly-cotton", "Suiting & shirting", "Knits & jersey", "Printed fabrics"],
    image: "/images/textiles.webp",
    alt: "Folded lengths of dyed fabric in a range of colours",
  },
  {
    id: "shoes",
    name: "Shoes",
    headline: "Shoes",
    group: "footwear",
    featured: false,
    summary: "School, casual and formal shoes for children and adults, in mixed size runs.",
    examples: ["School shoes", "Sneakers", "Casual shoes", "Formal shoes"],
    image: "/images/shoes.webp",
    alt: "Pair of brown leather lace-up shoes viewed from above",
  },
  {
    id: "slippers-sandals",
    name: "Slippers & Sandals",
    headline: "Slippers & sandals",
    group: "footwear",
    featured: false,
    summary: "Everyday sandals, slides and slippers for all ages, including bulk packs.",
    examples: ["Kids' sandals", "Slides & flip-flops", "Arabic sandals", "House slippers"],
    image: "/images/sandals.webp",
    alt: "Tan leather cross-strap sandal on a pale background",
  },
  {
    id: "agarwood-incense",
    name: "Agarwood & Incense",
    headline: "Oud & bakhoor",
    group: "care",
    featured: false,
    summary: "Oud, bakhoor and incense in the grades and pack sizes the Gulf market expects.",
    examples: ["Oud oil", "Agarwood chips", "Bakhoor", "Incense & burners"],
    image: "/images/oud.webp",
    alt: "Small gold-capped bottle of oud oil beside an incense burner",
  },
  {
    id: "soap-hair-care",
    name: "Soap & Hair Care Products",
    headline: "Soap & hair care",
    group: "care",
    featured: false,
    summary: "Bar and liquid soaps, shampoos and hair care for retail shelves and hospitality.",
    examples: ["Bar & liquid soap", "Shampoo & conditioner", "Hair oils", "Hotel amenities"],
    image: "/images/care.webp",
    alt: "Shampoo and conditioner pump bottles on a wooden shelf",
  },
];

/* ── Page copy ─────────────────────────────────────────────── */

export const hero = {
  eyebrow: "Wholesale supply · Dubai, UAE",
  title: "School bags, travel bags and gifts, supplied to Dubai merchants.",
  subtitle:
    "Inspire World supplies retailers and merchants with school bags, backpacks, trolley bags, luggage, gift sets, occasion items and readymade garments, on clear written terms for every order.",
};

/** Dubai's retail calendar: the seasons the product range is bought for. */
export const seasons = [
  { when: "Jul – Sep", title: "Back to school", body: "School bags, trolley bags, lunch bags, shoes and kidswear." },
  { when: "Nov – 2 Dec", title: "UAE National Day", body: "National Day gift items and printed T-shirts." },
  { when: "Lunar calendar", title: "Ramadan & Eid", body: "Gift sets, oud and bakhoor, occasion wear." },
  { when: "Jun – Aug", title: "Summer travel", body: "Luggage sets, cabin bags and travel accessories." },
];

/** Short, factual summary of the trade terms — the full text lives on /terms. */
export const termsAtGlance = [
  { title: "Written quotation", body: "Every order starts with a written quotation stating goods, quantities, prices and validity." },
  { title: "Proforma, then tax invoice", body: "Orders are confirmed on a proforma invoice. A tax invoice is issued on supply, with VAT shown separately where it applies." },
  { title: "Company bank account only", body: "Payment is made by bank transfer or cheque to the company's own UAE bank account. Never to a personal account." },
  { title: "Signed delivery note", body: "Goods are delivered against a delivery note signed by the buyer, which records quantities received." },
  { title: "Claims within 3 working days", body: "Shortages or damage are reported in writing within 3 working days of delivery, with photos." },
  { title: "UAE law, Dubai courts", body: "Our terms are governed by the laws of the UAE as applied in Dubai." },
];

export const about = {
  title: "A Dubai trading company for bags, gifts and garments.",
  paragraphs: [
    `${company.legalName} is a Dubai trading company, established in ${company.established}. We supply merchants and retailers with school bags and backpacks, trolley bags and luggage, gift sets and occasion items, readymade garments, and the other product lines on our trade licence.`,
    "Our office is in Al Garhoud, close to Dubai International Airport and the Deira trading district on Dubai Creek, where much of the city's wholesale trade in bags, garments and general goods is done.",
    "We keep our dealings documented: a written quotation, a proforma invoice, a tax invoice and a signed delivery note for every order, with payment to the company's own bank account. It keeps things simple for our customers and their banks.",
  ],
  imageCaption: "Dhows moored on Dubai Creek, Deira",
};

export const commitments = [
  { title: "Genuine goods only", body: "We do not buy, sell or display counterfeit or imitation goods." },
  { title: "Documented trade", body: "Quotation, proforma, tax invoice and delivery note on every order." },
  { title: "Transparent pricing", body: "Prices in AED, with VAT shown separately wherever it applies." },
  { title: "Compliance", body: "We follow UAE commercial, VAT and anti-money-laundering requirements and may ask new customers for business documents." },
];

export const process = [
  {
    title: "Send your requirement",
    body: "Tell us the product line, designs, quantities and delivery location. Photos or reference samples help.",
  },
  {
    title: "Receive a quotation",
    body: "We reply with prices, available designs and sizes, minimum quantities and lead time, in writing.",
  },
  {
    title: "Confirm and pay",
    body: "You confirm on a proforma invoice and pay to our company bank account on the agreed terms.",
  },
  {
    title: "Delivered and signed for",
    body: "Goods are checked, packed and delivered with a delivery note, and a tax invoice is issued.",
  },
];

export const audiences = [
  { title: "Retail shops & stationers", body: "School bags, trolley bags and gift items ahead of each season." },
  { title: "Wholesalers & merchants", body: "Carton and bulk quantities across several product lines." },
  { title: "Schools & organisations", body: "Bags, printed T-shirts and gift sets for events and programmes." },
  { title: "Corporate & gifting buyers", body: "Gift sets, National Day items, oud and leather goods." },
  { title: "Importers & re-exporters", body: "Consolidated multi-line orders shipped from Dubai." },
];
