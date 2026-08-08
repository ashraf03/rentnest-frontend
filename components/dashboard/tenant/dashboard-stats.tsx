import {
  FileText,
  Clock,
  CheckCircle,
  CreditCard,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  TenantDashboardStats,
} from "@/types/tenant-dashboard";

interface Props {
  stats: TenantDashboardStats;
}

export default function DashboardStats({
  stats,
}: Props) {
  const items = [
    {
      title: "Total Requests",
      value: stats.totalRequests,
      icon: FileText,
    },
    {
      title: "Pending Requests",
      value: stats.pendingRequests,
      icon: Clock,
    },
    {
      title: "Approved Rentals",
      value: stats.approvedRequests,
      icon: CheckCircle,
    },
    {
      title: "Total Payments",
      value: `৳${stats.totalPayments.toLocaleString()}`,
      icon: CreditCard,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.title}>

            <CardHeader className="flex flex-row items-center justify-between">

              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>

              <Icon className="h-5 w-5 text-muted-foreground" />

            </CardHeader>

            <CardContent>

              <p className="text-3xl font-bold">
                {item.value}
              </p>

            </CardContent>

          </Card>
        );
      })}

    </div>
  );
}