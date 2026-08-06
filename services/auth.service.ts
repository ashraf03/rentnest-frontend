import { http } from "./http";

import {
  LoginPayload,
  RegisterPayload,
} from "@/types/auth";

export async function login(
  payload: LoginPayload
) {
  return http("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function register(
  payload: RegisterPayload
) {
  return http("/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}