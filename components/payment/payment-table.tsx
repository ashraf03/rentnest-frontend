import PaymentRow from "./payment-row";

import PaymentSearch from "./payment-search";
import PaymentFilter from "./payment-filter";

import PaymentEmpty from "./payment-empty";

import PaymentPagination from "./payment-pagination";

import { Payment } from "@/types/payment";

interface Props {
  payments: Payment[];

  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export default function PaymentTable({
  payments,
  meta,
}: Props) {
  return (
    <div className="space-y-6">

      <div className="flex flex-col gap-4 md:flex-row">

        <PaymentSearch />

        <PaymentFilter />

      </div>

      {payments.length === 0 ? (
        <PaymentEmpty />
      ) : (
        <>
          <div className="overflow-x-auto rounded-xl border bg-background">

            <table className="w-full min-w-[900px]">

              <thead className="border-b bg-muted/50">

                <tr>
                  <th className="p-4 text-left">
                    Property
                  </th>

                  <th className="p-4 text-left">
                    Amount
                  </th>

                  <th className="p-4 text-left">
                    Status
                  </th>

                  <th className="p-4 text-left">
                    Method
                  </th>

                  <th className="p-4 text-left">
                    Date
                  </th>

                  <th className="p-4 text-left">
                    Action
                  </th>
                </tr>

              </thead>

              <tbody>

                {payments.map((payment) => (
                  <PaymentRow
                    key={payment.id}
                    payment={payment}
                  />
                ))}

              </tbody>

            </table>

          </div>

          <PaymentPagination
            page={meta.page}
            totalPages={meta.totalPages}
          />
        </>
      )}

    </div>
  );
}