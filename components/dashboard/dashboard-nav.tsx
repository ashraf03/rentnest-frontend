"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { tenantNavigation } from "@/config/dashboard-nav";

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-2 p-4">
      {tenantNavigation.map((item) => {
        const Icon = item.icon;

        const active =
          pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
              active
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            }`}
          >
            <Icon className="h-5 w-5" />

            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}