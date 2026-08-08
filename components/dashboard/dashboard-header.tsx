"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import MobileSidebar from "./mobile-sidebar";
import UserNav from "./user-nav";

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">

      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        <div className="flex items-center gap-3">

          <MobileSidebar />

          <h2 className="text-xl font-bold">
            Tenant Dashboard
          </h2>

        </div>

        <UserNav />

      </div>

    </header>
  );
}