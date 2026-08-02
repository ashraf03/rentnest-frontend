export interface NavLink {
  title: string;
  href: string;
}

export const navLinks: NavLink[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Properties",
    href: "/properties",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];