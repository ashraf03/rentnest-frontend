"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import Logo from "./logo";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { navLinks } from "./nav-links";
import NavItem from "./nav-item";

export default function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-72">
          <div className="mt-10 flex flex-col gap-5">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.href}>
                <Link href={link.href}>
                  <NavItem
                    href={link.href}
                    title={link.title}
                  />
                </Link>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}