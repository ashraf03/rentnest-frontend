export type PaymentStatus =
  | "PENDING"
  | "PAID"
  | "FAILED"
  | "CANCELLED";

export interface Payment {
  id: string;

  amount: number;

  status: PaymentStatus;

  transactionId?: string;

  paymentMethod?: string;

  paidAt?: string;

  createdAt: string;

  rentalRequest: {
    id: string;

    property: {
      id: string;
      title: string;
      location: string;
    };
  };
}

export interface PaymentResponse {
  data: Payment[];

  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}