import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Enquiry } from "@/components/Enquiry";
import { ContactCards } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact & quotations",
  description: "Request a quotation or contact Inspire World in Al Garhoud, Dubai, by phone, WhatsApp or email.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero crumb="Contact" eyebrow="Contact" title="Request a quotation or get in touch." intro="Send the form below, message us on WhatsApp or email us. Every quotation is sent in writing." />
      <Enquiry />
      <ContactCards />
    </>
  );
}
