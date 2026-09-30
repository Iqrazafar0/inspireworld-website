"use client";

import { useEffect, useRef, useState } from "react";
import { lines, company, links } from "@/content/site";
import { Icon } from "./Icon";

type Status = "idle" | "sending" | "sent" | "unavailable" | "error";
type Errors = Partial<Record<Field, string>>;
type Field = "name" | "company" | "email" | "phone" | "line" | "quantity" | "destination" | "message";

const REQUIRED: Field[] = ["name", "email", "phone", "line", "quantity", "destination"];
const LABELS: Record<Field, string> = {
  name: "Your name",
  company: "Company",
  email: "Email",
  phone: "Phone / WhatsApp",
  line: "Product line",
  quantity: "Approximate quantity",
  destination: "Delivery country",
  message: "Details",
};

function validate(data: Record<string, string>): Errors {
  const errors: Errors = {};
  for (const f of REQUIRED) if (!data[f]?.trim()) errors[f] = `Please enter ${LABELS[f].toLowerCase()}.`;
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Please enter a valid email address.";
  if (data.phone && data.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a phone number we can reach.";
  return errors;
}

function whatsappSummary(d: Record<string, string>) {
  const lineName = lines.find((l) => l.id === d.line)?.headline ?? "Several product lines";
  return [
    `Hello ${company.shortName}, I'd like a quotation.`,
    `Product line: ${lineName}`,
    `Quantity: ${d.quantity}`,
    `Deliver to: ${d.destination}`,
    d.company && `Company: ${d.company}`,
    d.message && `Details: ${d.message}`,
    `— ${d.name}, ${d.phone}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [line, setLine] = useState("");
  const [lastData, setLastData] = useState<Record<string, string> | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // Pre-select the product line when arriving from a "Request a quotation" link (?line=<id>).
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("line");
    if (id && lines.some((l) => l.id === id)) setLine(id);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setLastData(data);
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
        setLine("");
      } else {
        setStatus(res.status === 503 ? "unavailable" : "error");
      }
    } catch {
      setStatus("error");
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  if (status === "sent") {
    return (
      <div className="form-done" ref={statusRef} tabIndex={-1} role="status">
        <span className="form-done__icon">
          <Icon name="check" size={28} />
        </span>
        <h3>Thank you, your enquiry has been sent.</h3>
        <p>We will reply by email or WhatsApp as soon as possible.</p>
        <button type="button" className="btn btn--outline" onClick={() => setStatus("idle")}>
          Send another enquiry
        </button>
      </div>
    );
  }

  const field = (name: Field) => ({
    id: `f-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `f-${name}-err` : undefined,
  });
  const err = (name: Field) =>
    errors[name] ? (
      <span className="field__error" id={`f-${name}-err`}>
        {errors[name]}
      </span>
    ) : null;
  const req = <span aria-hidden="true" className="field__req">*</span>;

  return (
    <form ref={formRef} className="form" onSubmit={onSubmit} noValidate>
      <div className="form__grid">
        <div className="field">
          <label htmlFor="f-name">{LABELS.name}{req}</label>
          <input {...field("name")} autoComplete="name" required />
          {err("name")}
        </div>
        <div className="field">
          <label htmlFor="f-company">{LABELS.company}</label>
          <input {...field("company")} autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="f-email">{LABELS.email}{req}</label>
          <input {...field("email")} type="email" autoComplete="email" inputMode="email" required />
          {err("email")}
        </div>
        <div className="field">
          <label htmlFor="f-phone">{LABELS.phone}{req}</label>
          <input {...field("phone")} type="tel" autoComplete="tel" inputMode="tel" placeholder="+971" required />
          {err("phone")}
        </div>
        <div className="field field--full">
          <label htmlFor="f-line">{LABELS.line}{req}</label>
          <select {...field("line")} value={line} onChange={(e) => setLine(e.target.value)} required>
            <option value="" disabled>
              Select a product line
            </option>
            {lines.map((l) => (
              <option key={l.id} value={l.id}>
                {l.headline}
              </option>
            ))}
            <option value="multiple">Several lines (list them below)</option>
          </select>
          {err("line")}
        </div>
        <div className="field">
          <label htmlFor="f-quantity">{LABELS.quantity}{req}</label>
          <input {...field("quantity")} placeholder="e.g. 2,000 pcs or 1 × 40ft" required />
          {err("quantity")}
        </div>
        <div className="field">
          <label htmlFor="f-destination">{LABELS.destination}{req}</label>
          <input {...field("destination")} autoComplete="country-name" placeholder="e.g. UAE, Kenya, Iraq" required />
          {err("destination")}
        </div>
        <div className="field field--full">
          <label htmlFor="f-message">{LABELS.message}</label>
          <textarea {...field("message")} rows={4} placeholder="Styles, sizes, colours, materials, packing or target price" />
        </div>
        {/* Honeypot: hidden from people, tempting to bots. */}
        <div className="hp" aria-hidden="true">
          <label htmlFor="f-website">Website</label>
          <input id="f-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {(status === "unavailable" || status === "error") && lastData ? (
        <div className="form__notice" ref={statusRef} tabIndex={-1} role="alert">
          <p>
            {status === "unavailable"
              ? "Online enquiries are being set up. Please send the same details on WhatsApp. We've written the message for you."
              : "Your enquiry could not be sent just now. Please send the same details on WhatsApp (we've written the message for you) or call us."}
          </p>
          <div className="form__notice-actions">
            <a className="btn btn--primary btn--sm" href={links.whatsapp(whatsappSummary(lastData))} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={16} /> Send on WhatsApp
            </a>
            <a className="btn btn--outline btn--sm" href={links.tel}>
              <Icon name="phone" size={16} /> {company.phoneDisplay}
            </a>
          </div>
        </div>
      ) : null}

      <div className="form__foot">
        <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"} <Icon name="arrow" size={18} />
        </button>
        <p className="form__small">Fields marked * are required. We only use your details to reply to this enquiry.</p>
      </div>
    </form>
  );
}
