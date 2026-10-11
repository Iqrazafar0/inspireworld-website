/**
 * Policy pages: Terms & Conditions, Privacy, Returns & Refunds, Delivery.
 *
 * Numbers that are business decisions live in `policy` below, so they can be
 * changed once and stay consistent across every page. Have these texts reviewed
 * by a UAE lawyer before relying on them.
 */
import { company, addressLine, lines } from "./site";

export const policy = {
  lastUpdated: "30 September 2026",
  quoteValidityDays: 7,
  claimWorkingDays: 3,
  refundWorkingDays: 14,
  vatRate: "5%",
};

export type Block = string | { list: string[] } | { note: string };
export type Section = { id: string; heading: string; blocks: Block[] };
export type LegalDoc = {
  slug: "terms" | "privacy" | "returns" | "delivery";
  title: string;
  intro: string;
  sections: Section[];
};

const who = `${company.legalName} ("${company.shortName}", "we", "us")`;
const contactLine = `${company.email} · ${company.phoneDisplay} · ${addressLine}`;

export const terms: LegalDoc = {
  slug: "terms",
  title: "Terms & Conditions of Sale",
  intro: `These terms apply to every quotation, order and sale made by ${company.shortName}. Please read them before placing an order. By confirming an order you accept them.`,
  sections: [
    {
      id: "company",
      heading: "1. Who we are",
      blocks: [
        `${who} is a limited liability company registered in the Emirate of Dubai.`,
        {
          list: [
            `Trade licence number: ${company.licenceNo}, issued by the ${company.licenceAuthority}`,
            `Registered office: ${addressLine}`,
            `Email: ${company.email}`,
            `Telephone / WhatsApp: ${company.phoneDisplay}`,
          ],
        },
        `We are licensed to trade in: ${lines.map((l) => l.name).join(", ")}. We only supply goods within these licensed activities.`,
      ],
    },
    {
      id: "scope",
      heading: "2. Who these terms apply to",
      blocks: [
        "We sell to businesses: retailers, wholesalers, merchants, schools, organisations and other trade buyers (\"the Buyer\"). These terms apply to all our sales, whether ordered online, by email, WhatsApp, phone or in person.",
        "Any terms the Buyer proposes, for example on a purchase order, do not apply unless we agree to them in writing.",
      ],
    },
    {
      id: "quotations",
      heading: "3. Quotations and orders",
      blocks: [
        `Our quotations are in writing and remain valid for ${policy.quoteValidityDays} days from their date unless the quotation states otherwise. Prices and availability are subject to stock at the time of confirmation.`,
        "An order becomes binding when we issue a proforma invoice (or written order confirmation) and the Buyer accepts it, by signature, email or payment.",
        "Product photos on this website illustrate the categories we supply. Exact designs, colours, sizes and packing are as stated on the quotation and proforma invoice.",
      ],
    },
    {
      id: "prices",
      heading: "4. Prices and VAT",
      blocks: [
        "Prices are quoted in UAE dirhams (AED) unless the quotation states another currency.",
        `Where we are registered for UAE VAT, VAT at the applicable rate (currently ${policy.vatRate}) is added and shown separately on a tax invoice carrying our Tax Registration Number (TRN), in line with UAE VAT law.`,
        "Delivery charges, if any, are shown separately on the quotation. See our Delivery Policy.",
      ],
    },
    {
      id: "payment",
      heading: "5. Payment",
      blocks: [
        "Payment terms are stated on the proforma invoice. Unless agreed otherwise in writing, orders are paid in full before goods are released.",
        `Payment is accepted only by bank transfer to, or cheque made payable to, the UAE bank account held in the name of ${company.legalName}. We never ask for payment to a personal or third-party account.`,
        "Payments must come from the Buyer's own business account. We do not accept payments from unrelated third parties, and may return any such payment.",
        {
          note: `Protect yourself from payment fraud: our bank details never change by email or WhatsApp alone. If you receive a message saying they have changed, call us on ${company.phoneDisplay} before paying.`,
        },
        "If a cheque is returned unpaid, or a payment is late, we may suspend deliveries until the amount is settled.",
      ],
    },
    {
      id: "compliance",
      heading: "6. Customer checks and compliance",
      blocks: [
        "To meet our obligations under UAE law, including anti-money-laundering and sanctions requirements, we may ask new Buyers for business documents before accepting an order, such as:",
        {
          list: [
            "a copy of the valid trade licence;",
            "the VAT registration certificate, where registered;",
            "identification of the authorised signatory (Emirates ID or passport).",
          ],
        },
        "We may decline or cancel any order, and refund any payment received, where these documents are not provided or where we cannot complete our checks.",
      ],
    },
    {
      id: "delivery",
      heading: "7. Delivery, risk and ownership",
      blocks: [
        "Delivery dates are estimates. We will tell the Buyer promptly about any delay. Full details are in our Delivery Policy.",
        "Goods are delivered against a delivery note, which the Buyer or its representative signs on receipt. The signed delivery note is proof of delivery of the quantities shown.",
        "Risk in the goods passes to the Buyer on delivery, or on handover to the Buyer's carrier or freight forwarder. Ownership passes once we have received payment in full.",
      ],
    },
    {
      id: "inspection",
      heading: "8. Inspection and claims",
      blocks: [
        `The Buyer should check the goods on delivery and report any shortage, damage or wrong item in writing within ${policy.claimWorkingDays} working days of delivery, with photos and the delivery note number.`,
        "Returns, replacements and refunds are handled under our Returns & Refunds Policy.",
      ],
    },
    {
      id: "goods",
      heading: "9. The goods",
      blocks: [
        "We supply genuine goods only. We do not buy, sell or display counterfeit or imitation products. Brand names and characters appearing on goods belong to their respective owners.",
        "The Buyer is responsible for checking that goods suit its intended use and meet any import rules in its own market.",
      ],
    },
    {
      id: "liability",
      heading: "10. Liability",
      blocks: [
        "Our total liability for any order is limited to the price paid for the goods concerned. We are not liable for loss of profit, loss of business or indirect loss.",
        "Nothing in these terms limits any liability that cannot be limited under UAE law.",
      ],
    },
    {
      id: "force-majeure",
      heading: "11. Events outside our control",
      blocks: [
        "We are not responsible for delay or failure caused by events outside our reasonable control, including port or customs delays, supplier failure, extreme weather, government action or disruption to transport.",
      ],
    },
    {
      id: "law",
      heading: "12. Governing law and disputes",
      blocks: [
        "These terms and every sale are governed by the laws of the Emirate of Dubai and the applicable federal laws of the United Arab Emirates.",
        "We will first try to settle any dispute by discussion. If that fails, the courts of Dubai have exclusive jurisdiction.",
      ],
    },
    {
      id: "changes",
      heading: "13. Changes and contact",
      blocks: [
        "We may update these terms from time to time. The version on this page on the date of the order applies to that order.",
        `Questions about these terms: ${contactLine}.`,
      ],
    },
  ],
};

export const privacy: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  intro: `This policy explains what personal information ${company.shortName} collects through this website and in the course of trade, and how we use it. We handle personal data in line with UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data.`,
  sections: [
    {
      id: "controller",
      heading: "1. Who is responsible",
      blocks: [`${who}, ${addressLine}. Contact: ${company.email}.`],
    },
    {
      id: "collect",
      heading: "2. What we collect",
      blocks: [
        {
          list: [
            "Details you send through the enquiry form, email, WhatsApp or phone: name, company, email, phone number, delivery country and the details of your enquiry.",
            "Business documents requested for customer checks, such as trade licence, VAT certificate and identification of the authorised signatory.",
            "Order, invoice, delivery and payment records.",
          ],
        },
        "This website does not use advertising or analytics cookies, and does not track you across other websites.",
      ],
    },
    {
      id: "use",
      heading: "3. How we use it",
      blocks: [
        {
          list: [
            "to reply to enquiries and send quotations;",
            "to process, deliver and invoice orders;",
            "to carry out customer checks required by UAE law;",
            "to keep accounting, VAT and commercial records required by UAE law.",
          ],
        },
        "We do not sell or rent personal data, and we do not use it for unrelated marketing.",
      ],
    },
    {
      id: "share",
      heading: "4. Who we share it with",
      blocks: [
        "Only with parties who help us run the business, and only as needed: our email and website hosting providers, the service that delivers enquiry-form emails, delivery companies, our bank, our accountants and auditors, and government authorities where the law requires it.",
      ],
    },
    {
      id: "keep",
      heading: "5. How long we keep it",
      blocks: [
        "Enquiries that do not lead to an order are deleted when no longer needed. Order, invoice and customer-check records are kept for the periods required by UAE commercial, tax and anti-money-laundering laws.",
      ],
    },
    {
      id: "rights",
      heading: "6. Your rights",
      blocks: [
        `You can ask to see, correct or delete the personal data we hold about you, or object to how we use it, by writing to ${company.email}. We may need to keep some records where the law requires it.`,
      ],
    },
    {
      id: "security",
      heading: "7. Security and changes",
      blocks: [
        "We take reasonable steps to protect personal data from loss and unauthorised access. We may update this policy; the date at the top shows the latest version.",
      ],
    },
  ],
};

export const returns: LegalDoc = {
  slug: "returns",
  title: "Returns, Refunds & Cancellation Policy",
  intro: `This policy explains how ${company.shortName} handles delivery claims, returns, refunds and order cancellations for trade orders.`,
  sections: [
    {
      id: "check",
      heading: "1. Check goods on delivery",
      blocks: [
        "Please count and inspect goods when they arrive, and note any visible damage on the delivery note before signing.",
        `Report shortages, damage or wrong items in writing to ${company.email} or on WhatsApp ${company.phoneDisplay} within ${policy.claimWorkingDays} working days of delivery, with photos and the delivery note or invoice number.`,
      ],
    },
    {
      id: "accepted",
      heading: "2. What we accept back",
      blocks: [
        {
          list: [
            "goods that are defective or damaged on arrival;",
            "goods that differ from the proforma invoice (wrong item, design, size or quantity).",
          ],
        },
        "For these, we will, at our choice, replace the goods, supply the missing quantity, or issue a credit note or refund for the affected items.",
      ],
    },
    {
      id: "not-accepted",
      heading: "3. What we cannot accept back",
      blocks: [
        {
          list: [
            "goods reported after the claim period above;",
            "goods that have been used, altered, printed on or removed from their original packing;",
            "made-to-order, custom-printed or specially sourced goods, unless defective;",
            "returns for change of mind or unsold stock, unless agreed in writing beforehand.",
          ],
        },
      ],
    },
    {
      id: "how",
      heading: "4. How to return goods",
      blocks: [
        "Please do not send goods back until we have approved the return in writing. We will arrange collection or tell you where to deliver them. We cover the cost of returning goods that were defective or wrongly supplied.",
      ],
    },
    {
      id: "refunds",
      heading: "5. Refunds",
      blocks: [
        `Approved refunds are paid within ${policy.refundWorkingDays} working days of our receiving and checking the returned goods.`,
        "Refunds are made only by bank transfer to the same business account the payment came from. We do not refund in cash or to a different account.",
        "Where VAT was charged, we issue a tax credit note.",
      ],
    },
    {
      id: "cancel",
      heading: "6. Cancelling an order",
      blocks: [
        {
          list: [
            "Before you accept the proforma invoice: cancel at no charge.",
            "After acceptance, before dispatch: we refund the amount paid, less any costs we have already incurred for the order (such as sourcing, printing or transport), which we will show you.",
            "Made-to-order or custom-printed goods cannot be cancelled once production has started.",
          ],
        },
      ],
    },
  ],
};

export const delivery: LegalDoc = {
  slug: "delivery",
  title: "Delivery & Shipping Policy",
  intro: `This policy explains how ${company.shortName} delivers orders within the UAE and hands over goods for export.`,
  sections: [
    {
      id: "uae",
      heading: "1. Deliveries in the UAE",
      blocks: [
        "We deliver within Dubai and to other emirates using our own arrangements or a courier. Buyers may also collect from an agreed location in Dubai.",
        "The estimated delivery date is given on the quotation and confirmed on the proforma invoice. Stock items are usually dispatched after payment is received; sourced or made-to-order goods take longer, as stated on the quotation.",
      ],
    },
    {
      id: "charges",
      heading: "2. Delivery charges",
      blocks: [
        "Any delivery charge is shown separately on the quotation and invoice before you confirm the order. There are no hidden charges.",
      ],
    },
    {
      id: "receipt",
      heading: "3. Receiving goods",
      blocks: [
        "Someone authorised by the Buyer must be available to receive the goods and sign the delivery note. Please check the number of cartons and any visible damage before signing.",
        "If a delivery cannot be made because nobody is available or the address is wrong, a second delivery may be charged.",
      ],
    },
    {
      id: "export",
      heading: "4. Export orders",
      blocks: [
        "For goods leaving the UAE, we hand over to the Buyer's nominated freight forwarder in Dubai, or ship on the Incoterms stated on the quotation.",
        "We provide a commercial invoice and packing list. Other documents, such as a certificate of origin, can be arranged on request.",
        "Import duties, taxes and clearance in the destination country are the Buyer's responsibility unless the quotation states otherwise.",
      ],
    },
    {
      id: "risk",
      heading: "5. Risk and delays",
      blocks: [
        "Risk passes to the Buyer on delivery, or on handover to the Buyer's carrier or forwarder. Ownership passes once payment is received in full.",
        "If a delivery is delayed, we will tell you as soon as we know and give a new date.",
      ],
    },
  ],
};

export const legalDocs = { terms, privacy, returns, delivery };
