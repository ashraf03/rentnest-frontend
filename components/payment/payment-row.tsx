import Link from "next/link";

import { Button } from "@/components/ui/button";

import PaymentStatusBadge from "./payment-status-badge";

import { Payment } from "@/types/payment";

interface Props {
  payment: Payment;
}

export default function PaymentRow({
  payment,
}: Props) {
  return (
    <tr className="border-b">

      <td className="p-4">
        <div>
          <p className="font-medium">
            {payment.rentalRequest.property.title}
          </p>

          <p className="text-sm text-muted-foreground">
            {payment.rentalRequest.property.location}
          </p>
        </div>
      </td>

      <td className="p-4">
        ৳ {payment.amount.toLocaleString()}
      </td>

      <td className="p-4">
        <PaymentStatusBadge
          status={payment.status}
        />
      </td>

      <td className="p-4">
        {payment.paymentMethod ?? "—"}
      </td>

      <td className="p-4">
        {new Date(
          payment.createdAt
        ).toLocaleDateString()}
      </td>

      <td className="p-4">
        <Button
          asChild
          variant="outline"
          size="sm"
        >
          <Link
            href={`/dashboard/tenant/payments/${payment.id}`}
          >
            View
          </Link>
        </Button>
      </td>

    </tr>
  );
}