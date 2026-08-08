import { http } from "./http";

export async function getMyRequests(
  params: {
    page?: number;
    search?: string;
    status?: string;
  }
) {
  const query = new URLSearchParams({
    page: String(params.page ?? 1),
    search: params.search ?? "",
    status: params.status ?? "",
  });

  return http(
    `/rent-requests/me?${query}`
  );
}