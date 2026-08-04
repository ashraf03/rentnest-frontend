import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function SectionHeader() {
  return (
    <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Featured Properties
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Discover Your Next Home
        </h2>

        <p className="mt-3 max-w-2xl text-muted-foreground">
          Explore our hand-picked featured rental properties from trusted
          landlords across Bangladesh.
        </p>
      </div>

      <Button asChild variant="outline">
        <Link href="/properties">
          View All
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}