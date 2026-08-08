"use client";

import { Button } from "@/components/ui/button";

interface Props {
  reset: () => void;
}

export default function TenantDashboardError({
  reset,
}: Props) {
  return (
    <div className="flex min-h-[400px] items-center justify-center">

      <div className="text-center">

        <h2 className="text-2xl font-bold">
          Something went wrong
        </h2>

        <p className="mt-2 text-muted-foreground">
          We couldn't load your dashboard.
        </p>

        <Button
          onClick={() => reset()}
          className="mt-5"
        >
          Try Again
        </Button>

      </div>

    </div>
  );
}