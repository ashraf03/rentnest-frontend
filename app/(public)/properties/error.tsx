"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">

      <div className="text-center">

        <h2 className="text-2xl font-bold">
          Failed to load property
        </h2>

        <Button
          className="mt-5"
          onClick={reset}
        >
          Try Again
        </Button>

      </div>

    </div>
  );
}