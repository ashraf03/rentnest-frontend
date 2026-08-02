import Link from "next/link";
import { navLinks } from "./nav-links";

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium transition hover:text-primary"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
}