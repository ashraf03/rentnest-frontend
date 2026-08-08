import Link from "next/link";

import {
  Search,
  FileText,
  CreditCard,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export default function QuickActions() {
  return (
    <Card>

      <CardHeader>

        <CardTitle>
          Quick Actions
        </CardTitle>

      </CardHeader>

      <CardContent>

        <div className="flex flex-col gap-3 sm:flex-row">

          <Button
            asChild
            className="flex-1"
          >
            <Link href="/properties">
              <Search className="mr-2 h-4 w-4" />
              Browse Properties
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="flex-1"
          >
            <Link href="/dashboard/tenant/requests">
              <FileText className="mr-2 h-4 w-4" />
              My Requests
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="flex-1"
          >
            <Link href="/dashboard/tenant/payments">
              <CreditCard className="mr-2 h-4 w-4" />
              Payments
            </Link>
          </Button>

        </div>

      </CardContent>

    </Card>
  );
}