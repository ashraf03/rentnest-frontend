const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL!;

export async function http<T>(
  endpoint: string,
  init?: RequestInit
): Promise<T> {
  const response = await fetch(
    `${BASE_URL}${endpoint}`,
    {
      ...init,

      credentials: "include",

      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },

      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Request Failed");
  }

  return response.json();
}