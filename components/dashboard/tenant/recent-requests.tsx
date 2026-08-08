import Link from "next/link";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
  RecentRequest,
} from "@/types/tenant-dashboard";

import RequestStatusBadge from "@/components/requests/request-status-badge";

interface Props {
  requests: RecentRequest[];
}

export default function RecentRequests({
  requests,
}: Props) {
  return (
    <Card>

      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle>
          Recent Requests
        </CardTitle>

        <Button
          asChild
          variant="ghost"
          size="sm"
        >
          <Link href="/dashboard/tenant/requests">
            View All
          </Link>
        </Button>

      </CardHeader>

      <CardContent>

        {requests.length === 0 ? (
          <p className="py-8 text-center text-muted-foreground">
            No rental requests yet.
          </p>
        ) : (
          <div className="space-y-4">

            {requests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between gap-4 border-b pb-4 last:border-0 last:pb-0"
              >

                <div className="min-w-0">

                  <p className="truncate font-medium">
                    {request.property.title}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {request.property.location}
                  </p>

                </div>

                <RequestStatusBadge
                  status={request.status}
                />

              </div>
            ))}

          </div>
        )}

      </CardContent>

    </Card>
  );
}