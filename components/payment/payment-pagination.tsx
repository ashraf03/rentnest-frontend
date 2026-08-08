"use client";

import Link from "next/link";

import {
  usePathname,
  useSearchParams,
} from "next/navigation";

import { Button } from "@/components/ui/button";

interface Props {
  page: number;
  totalPages: number;
}

export default function PaymentPagination({
  page,
  totalPages,
}: Props) {
  const pathname = usePathname();

  const searchParams =
    useSearchParams();

  function getUrl(nextPage: number) {
    const params =
      new URLSearchParams(searchParams);

    params.set(
      "page",
      String(nextPage)
    );

    return `${pathname}?${params.toString()}`;
  }

  return (
    <div className="flex items-center justify-between">

      <Button
        asChild
        variant="outline"
        disabled={page <= 1}
      >
        <Link href={getUrl(page - 1)}>
          Previous
        </Link>
      </Button>

      <span className="text-sm text-muted-foreground">
        Page {page} of {totalPages}
      </span>

      <Button
        asChild
        variant="outline"
        disabled={page >= totalPages}
      >
        <Link href={getUrl(page + 1)}>
          Next
        </Link>
      </Button>

    </div>
  );
}