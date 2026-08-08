"use client";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import { Input } from "@/components/ui/input";

export default function PaymentSearch() {
  const router = useRouter();

  const pathname = usePathname();

  const searchParams =
    useSearchParams();

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key !== "Enter") {
      return;
    }

    const params =
      new URLSearchParams(searchParams);

    const value =
      event.currentTarget.value.trim();

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    params.set("page", "1");

    router.push(
      `${pathname}?${params.toString()}`
    );
  }

  return (
    <Input
      className="md:max-w-sm"
      placeholder="Search property..."
      defaultValue={
        searchParams.get("search") ?? ""
      }
      onKeyDown={handleKeyDown}
    />
  );
}