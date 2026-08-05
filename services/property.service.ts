interface GetPropertiesParams {
  search?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  page?: string;
}

export async function getProperties(
  params: GetPropertiesParams
) {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      query.set(key, value);
    }
  });

  const response = await fetch(
    `${API_URL}/properties?${query.toString()}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch properties.");
  }

  return response.json();
}