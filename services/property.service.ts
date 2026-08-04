import { API_URL } from "@/constants/api";

import { ApiResponse } from "@/types/api-response";
import { Property } from "@/types/property";

export async function getFeaturedProperties() {
  const response = await fetch(
    `${API_URL}/properties?featured=true`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch properties");
  }

  const result: ApiResponse<Property[]> =
    await response.json();

  return result.data;
}