import { navLinks } from "./nav-links";
import NavItem from "./nav-item";

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navLinks.map((link) => (
        <NavItem
          key={link.href}
          href={link.href}
          title={link.title}
        />
      ))}
    </nav>
  );
}