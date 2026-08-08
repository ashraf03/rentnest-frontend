import { Badge } from "@/components/ui/badge";

import { PaymentStatus } from "@/types/payment";

interface Props {
  status: PaymentStatus;
}

export default function PaymentStatusBadge({
  status,
}: Props) {
  if (status === "PAID") {
    return (
      <Badge>
        Paid
      </Badge>
    );
  }

  if (status === "PENDING") {
    return (
      <Badge variant="secondary">
        Pending
      </Badge>
    );
  }

  if (status === "FAILED") {
    return (
      <Badge variant="destructive">
        Failed
      </Badge>
    );
  }

  return (
    <Badge variant="outline">
      Cancelled
    </Badge>
  );
}