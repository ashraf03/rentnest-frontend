import { API_URL } from "@/constants/api";
import { Property } from "@/types/property";

export async function getFeaturedProperties() {
  const res = await fetch(
    `${API_URL}/properties?featured=true`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error(
      "Failed to fetch properties."
    );
  }

  const data = await res.json();

  return data.data as Property[];
}