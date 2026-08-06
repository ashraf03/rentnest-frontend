import { http } from "./http";

import { Property } from "@/types/property";
import { ApiResponse } from "@/types/api-response";

export async function getPropertyBySlug(
  slug: string
) {
  return http<ApiResponse<Property>>(
    `/properties/${slug}`
  );
}