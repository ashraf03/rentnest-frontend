"use client";

import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <div className="space-y-6 text-center">
        <h2 className="text-3xl font-bold">
          Something went wrong
        </h2>

        <p className="text-muted-foreground">
          {error.message}
        </p>

        <Button onClick={reset}>
          Try Again
        </Button>
      </div>
    </main>
  );
}