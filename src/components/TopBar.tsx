import { company, links } from "@/content/site";
import { Icon } from "./Icon";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <p className="topbar__note">Readymade garments, footwear &amp; lifestyle goods · Trade supply from Dubai</p>
        <ul className="topbar__contact">
          <li>
            <a href={links.mail}>
              <Icon name="mail" size={15} />
              {company.email}
            </a>
          </li>
          <li>
            <a href={links.tel}>
              <Icon name="phone" size={15} />
              {company.phoneDisplay}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
