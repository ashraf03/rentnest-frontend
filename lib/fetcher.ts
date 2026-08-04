export async function fetcher<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
}