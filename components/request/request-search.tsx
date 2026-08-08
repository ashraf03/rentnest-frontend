"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input";

export default function RequestSearch() {
  const router = useRouter();

  const searchParams =
    useSearchParams();

  return (
    <Input
      placeholder="Search property..."
      defaultValue={
        searchParams.get("search") ??
        ""
      }
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          const params =
            new URLSearchParams(
              searchParams
            );

          params.set(
            "search",
            e.currentTarget.value
          );

          router.push(
            `?${params.toString()}`
          );
        }
      }}
    />
  );
}