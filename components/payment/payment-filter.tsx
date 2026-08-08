"use client";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PaymentFilter() {
  const router = useRouter();

  const pathname = usePathname();

  const searchParams =
    useSearchParams();

  const currentStatus =
    searchParams.get("status") ?? "ALL";

  function handleChange(
    value: string
  ) {
    const params =
      new URLSearchParams(searchParams);

    if (value === "ALL") {
      params.delete("status");
    } else {
      params.set("status", value);
    }

    params.set("page", "1");

    router.push(
      `${pathname}?${params.toString()}`
    );
  }

  return (
    <Select
      value={currentStatus}
      onValueChange={handleChange}
    >
      <SelectTrigger className="md:w-[180px]">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>

        <SelectItem value="ALL">
          All Payments
        </SelectItem>

        <SelectItem value="PAID">
          Paid
        </SelectItem>

        <SelectItem value="PENDING">
          Pending
        </SelectItem>

        <SelectItem value="FAILED">
          Failed
        </SelectItem>

        <SelectItem value="CANCELLED">
          Cancelled
        </SelectItem>

      </SelectContent>
    </Select>
  );
}