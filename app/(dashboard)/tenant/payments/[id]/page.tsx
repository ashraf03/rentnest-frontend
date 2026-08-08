import { notFound } from "next/navigation";

import { getPaymentById } from "@/services/payment.service";

import PaymentStatusBadge from "@/components/payment/payment-status-badge";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function PaymentDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const response =
    await getPaymentById(id);

  if (!response?.data) {
    notFound();
  }

  const payment = response.data;

  return (
    <div className="mx-auto max-w-3xl space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Payment Details
        </h1>

        <p className="text-muted-foreground">
          Transaction information
        </p>
      </div>

      <div className="rounded-xl border bg-background p-6">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-semibold">
            {payment.rentalRequest.property.title}
          </h2>

          <PaymentStatusBadge
            status={payment.status}
          />

        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">

          <div>
            <p className="text-sm text-muted-foreground">
              Amount
            </p>

            <p className="text-2xl font-bold">
              ৳ {payment.amount.toLocaleString()}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Payment Method
            </p>

            <p className="font-medium">
              {payment.paymentMethod ?? "—"}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Transaction ID
            </p>

            <p className="font-medium">
              {payment.transactionId ?? "—"}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">
              Payment Date
            </p>

            <p className="font-medium">
              {payment.paidAt
                ? new Date(
                    payment.paidAt
                  ).toLocaleDateString()
                : "—"}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}