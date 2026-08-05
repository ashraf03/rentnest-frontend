import { ApiResponse } from "../types/api-response";
import { PropertyFilters } from "../types/filters";
import { Property } from "../types/property";
import { http } from "./http";
import { createQueryString } from "@/lib/query-string";

export async function getProperties(
  filters: PropertyFilters
) {
  const query =
    createQueryString(filters);

  return http<ApiResponse<Property[]>>(
    `/properties?${query}`
  );
}