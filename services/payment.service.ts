import { Payment } from "../types/payment";
import { http } from "./http";

import { PaymentResponse } from "@/types/payment";

interface PaymentParams {
  page?: number;
  search?: string;
  status?: string;
}

export async function getMyPayments(
  params: PaymentParams = {}
) {
  const query = new URLSearchParams();

  query.set(
    "page",
    String(params.page ?? 1)
  );

  if (params.search) {
    query.set("search", params.search);
  }

  if (params.status) {
    query.set("status", params.status);
  }

  return http<PaymentResponse>(
    `/payments/me?${query.toString()}`
  );
}


export async function getPaymentById(
  id: string
) {
  return http<{
    data: Payment;
  }>(
    `/payments/${id}`
  );
}