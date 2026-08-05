"use client";

import { SlidersHorizontal } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import PropertySidebar from "../property-sidebar";

export default function MobileFilterSheet() {
  return (
    <div className="lg:hidden mb-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Filter Properties</SheetTitle>
          </SheetHeader>

          <div className="mt-6">
            <PropertySidebar />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}