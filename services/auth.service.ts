import { http } from "./http";

import { User } from "@/types/user";
import { ApiResponse } from "@/types/api-response";

export async function getCurrentUser() {
  return http<ApiResponse<User>>(
    "/auth/me",
    {
      method: "GET",
    }
  );
}

export async function logout() {
  return http("/auth/logout", {
    method: "POST",
  });
}