import { links, enquiryHref } from "@/content/site";
import { Icon } from "./Icon";

/** Thumb-reach action bar on phones; a floating WhatsApp button on larger screens. */
export function MobileActions() {
  return (
    <>
      <nav className="mobile-actions" aria-label="Quick contact">
        <a href={links.tel}>
          <Icon name="phone" size={20} />
          Call
        </a>
        <a href={links.whatsapp()} target="_blank" rel="noopener noreferrer">
          <Icon name="whatsapp" size={20} />
          WhatsApp
        </a>
        <a href={enquiryHref} className="mobile-actions__primary">
          <Icon name="mail" size={20} />
          Quotation
        </a>
      </nav>
      <a href={links.whatsapp()} className="wa-float" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
        <Icon name="whatsapp" size={26} />
      </a>
    </>
  );
}
