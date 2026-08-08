"use client";

import { useAuth } from "@/hooks/use-auth";

import LogoutButton from "@/components/auth/logout-button";

export default function UserNav() {
  const { user } = useAuth();

  return (
    <div className="flex items-center gap-3">

      <div className="text-right">

        <p className="font-medium">
          {user?.name}
        </p>

        <p className="text-xs text-muted-foreground">
          {user?.role}
        </p>

      </div>

      <LogoutButton />

    </div>
  );
}