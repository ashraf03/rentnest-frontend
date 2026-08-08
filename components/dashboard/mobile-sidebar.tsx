"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import DashboardNav from "./dashboard-nav";

export default function MobileSidebar() {
  return (
    <Sheet>

      <SheetTrigger asChild>

        <Button
          size="icon"
          variant="ghost"
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>

      </SheetTrigger>

      <SheetContent side="left">

        <DashboardNav />

      </SheetContent>

    </Sheet>
  );
}