import { http } from "./http";

import { RentalRequestPayload } from "@/types/rental-request";

export async function createRentalRequest(
  payload: RentalRequestPayload
) {
  return http("/rent-requests", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}