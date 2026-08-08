import { getMyPayments } from "@/services/payment.service";

import PaymentTable from "@/components/payment/payment-table";

interface Props {
  searchParams: Promise<{
    page?: string;
    search?: string;
    status?: string;
  }>;
}

export default async function PaymentsPage({
  searchParams,
}: Props) {
  const params = await searchParams;

  const page =
    Number(params.page) || 1;

  const response =
    await getMyPayments({
      page,
      search: params.search,
      status: params.status,
    });

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Payment History
        </h1>

        <p className="mt-2 text-muted-foreground">
          View and manage your rental payments.
        </p>
      </div>

      <PaymentTable
        payments={response.data}
        meta={response.meta}
      />

    </div>
  );
}