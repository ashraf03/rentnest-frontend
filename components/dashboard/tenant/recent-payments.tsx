import Link from "next/link";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import PaymentStatusBadge from "@/components/payment/payment-status-badge";

import {
  RecentPayment,
} from "@/types/tenant-dashboard";

interface Props {
  payments: RecentPayment[];
}

export default function RecentPayments({
  payments,
}: Props) {
  return (
    <Card>

      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle>
          Recent Payments
        </CardTitle>

        <Button
          asChild
          variant="ghost"
          size="sm"
        >
          <Link href="/dashboard/tenant/payments">
            View All
          </Link>
        </Button>

      </CardHeader>

      <CardContent>

        {payments.length === 0 ? (
          <p className="py-8 text-center text-muted-foreground">
            No payments yet.
          </p>
        ) : (
          <div className="space-y-4">

            {payments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between gap-4 border-b pb-4 last:border-0 last:pb-0"
              >

                <div className="min-w-0">

                  <p className="truncate font-medium">
                    {payment.property.title}
                  </p>

                  <p className="font-semibold">
                    ৳{" "}
                    {payment.amount.toLocaleString()}
                  </p>

                </div>

                <PaymentStatusBadge
                  status={payment.status}
                />

              </div>
            ))}

          </div>
        )}

      </CardContent>

    </Card>
  );
}