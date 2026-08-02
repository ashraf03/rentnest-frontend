"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../../lib/utils";

interface NavItemProps {
  href: string;
  title: string;
}

export default function NavItem({
  href,
  title,
}: NavItemProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "relative text-sm font-medium transition-all duration-200",
        isActive
            ? "text-primary"
            : "text-muted-foreground hover:text-primary"
        )}
    >
      {title}
    </Link>
  );
}