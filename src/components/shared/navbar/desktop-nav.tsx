import NavItem from "./nav-item";
import { navLinks } from "./nav-links";

export default function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navLinks.map((item) => (
        <NavItem
          key={item.href}
          href={item.href}
          title={item.title}
        />
      ))}
    </nav>
  );
}