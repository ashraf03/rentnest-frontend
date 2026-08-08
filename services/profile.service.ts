import { http } from "./http";

import {
  UserProfile,
} from "@/types/profile";

import {
  ProfileFormValues,
  ChangePasswordFormValues,
} from "@/schemas/profile.schema";

export async function getProfile() {
  return http<{
    data: UserProfile;
  }>("/users/me");
}

export async function updateProfile(
  payload: ProfileFormValues
) {
  return http<{
    data: UserProfile;
  }>("/users/me", {
    method: "PATCH",

    body: JSON.stringify(payload),
  });
}

export async function changePassword(
  payload: ChangePasswordFormValues
) {
  return http(
    "/users/change-password",
    {
      method: "PATCH",

      body: JSON.stringify({
        currentPassword:
          payload.currentPassword,

        newPassword:
          payload.newPassword,
      }),
    }
  );
}