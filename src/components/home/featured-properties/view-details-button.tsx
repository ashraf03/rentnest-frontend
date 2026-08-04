import Link from "next/link";

import { Button } from "@/components/ui/button";

interface ViewDetailsButtonProps {
  slug: string;
}

export default function ViewDetailsButton({
  slug,
}: ViewDetailsButtonProps) {
  return (
    <Button asChild className="w-full">
      <Link href={`/properties/${slug}`}>
        View Details
      </Link>
    </Button>
  );
}