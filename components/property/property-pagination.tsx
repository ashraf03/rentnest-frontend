"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";

interface PropertyPaginationProps {
  page: number;
  totalPage: number;
}

export default function PropertyPagination({
  page,
  totalPage,
}: PropertyPaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function changePage(nextPage: number) {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", nextPage.toString());

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mt-10 flex items-center justify-center gap-3">
      <Button
        variant="outline"
        disabled={page <= 1}
        onClick={() => changePage(page - 1)}
      >
        Previous
      </Button>

      <span className="text-sm font-medium">
        Page {page} of {totalPage}
      </span>

      <Button
        variant="outline"
        disabled={page >= totalPage}
        onClick={() => changePage(page + 1)}
      >
        Next
      </Button>
    </div>
  );
}