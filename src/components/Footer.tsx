import Link from "next/link";
import { company, lines, nav, legalNav, links, addressLine } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo tone="light" />
            <p className="footer__legal">{company.legalName}</p>
            <p>Wholesale supply of bags, luggage, gifts and garments to merchants in Dubai.</p>
          </div>

          <nav className="footer__col" aria-label="Product lines">
            <h2>Products</h2>
            <ul>
              {lines.map((l) => (
                <li key={l.id}>
                  <Link href={`/products#line-${l.id}`}>{l.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Company">
            <h2>Company</h2>
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
            <h2 className="footer__sub">Policies</h2>
            <ul>
              {legalNav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h2>Contact</h2>
            <ul>
              <li>
                <a href={links.tel}>{company.phoneDisplay}</a>
              </li>
              <li>
                <a href={links.whatsapp()} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={links.mail} className="break">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p>{addressLine}</p>
        </div>
      </div>
    </footer>
  );
}
