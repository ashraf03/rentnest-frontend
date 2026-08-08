"use client";

import { Button } from "@/components/ui/button";

interface Props {
  reset: () => void;
}

export default function PropertiesError({
  reset,
}: Props) {
  return (
    <main className="container mx-auto px-4 py-20">

      <div className="mx-auto max-w-md text-center">

        <h2 className="text-2xl font-bold">
          Something went wrong!
        </h2>

        <p className="mt-3 text-muted-foreground">
          We couldn't load the properties.
          Please try again.
        </p>

        <Button
          onClick={reset}
          className="mt-6"
        >
          Try Again
        </Button>

      </div>

    </main>
  );
}