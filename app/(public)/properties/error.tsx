"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">

      <div className="text-center">

        <h2 className="text-3xl font-bold">
          Failed to load properties
        </h2>

        <p className="mt-4 text-muted-foreground">
          {error.message}
        </p>

        <Button
          className="mt-6"
          onClick={reset}
        >
          Retry
        </Button>

      </div>

    </div>
  );
}