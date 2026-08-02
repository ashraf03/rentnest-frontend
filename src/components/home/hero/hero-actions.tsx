import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HeroActions() {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
      <Button asChild size="lg">
        <Link href="/properties">
          Browse Properties

          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>

      <Button
        asChild
        size="lg"
        variant="outline"
      >
        <Link href="/auth/register">
          Become a Landlord
        </Link>
      </Button>
    </div>
  );
}