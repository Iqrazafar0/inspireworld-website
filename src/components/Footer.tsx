import { company, lines, nav, links, addressLine } from "@/content/site";
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
          </div>

          <nav className="footer__col" aria-label="Product lines">
            <h2>Product lines</h2>
            <ul>
              {lines.map((l) => (
                <li key={l.id}>
                  <a href={`#line-${l.id}`}>{l.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Company">
            <h2>Company</h2>
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
              <li>
                <a href="#enquiry">Request a quotation</a>
              </li>
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
            © {year} {company.legalName}
          </p>
          <p>{addressLine}</p>
        </div>
      </div>
    </footer>
  );
}
