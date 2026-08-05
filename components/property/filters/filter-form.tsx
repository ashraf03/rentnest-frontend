"use client";

import { useRouter, useSearchParams } from "next/navigation";

import SearchFilter from "./search-filter";
import CategoryFilter from "./category-filter";
import PriceFilter from "./price-filter";
import AvailabilityFilter from "./availability-filter";
import FilterActions from "./filter-actions";

export default function FilterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const params = new URLSearchParams(
      searchParams.toString()
    );

    formData.forEach((value, key) => {
      if (value) {
        params.set(key, value.toString());
      } else {
        params.delete(key);
      }
    });

    params.set("page", "1");

    router.push(`/properties?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <SearchFilter
        defaultValue={
          searchParams.get("search") ?? ""
        }
      />

      <CategoryFilter
        defaultValue={
          searchParams.get("category") ?? ""
        }
      />

      <PriceFilter />

      <AvailabilityFilter />

      <FilterActions />
    </form>
  );
}