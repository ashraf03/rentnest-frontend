import { getTenantDashboard } from "@/services/tenant-dashboard.service";

import DashboardStats from "@/components/dashboard/tenant/dashboard-stats";

import RecentRequests from "@/components/dashboard/tenant/recent-requests";

import RecentPayments from "@/components/dashboard/tenant/recent-payments";

import QuickActions from "@/components/dashboard/tenant/quick-actions";

export default async function TenantDashboardPage() {
  const response =
    await getTenantDashboard();

  const dashboard =
    response.data;

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">
          Welcome back 👋
        </h1>

        <p className="mt-2 text-muted-foreground">
          Here's what's happening with
          your rentals.
        </p>
      </div>

      {/* Stats */}

      <DashboardStats
        stats={dashboard.stats}
      />

      {/* Recent Data */}

      <div className="grid gap-6 lg:grid-cols-2">

        <RecentRequests
          requests={
            dashboard.recentRequests
          }
        />

        <RecentPayments
          payments={
            dashboard.recentPayments
          }
        />

      </div>

      {/* Quick Actions */}

      <QuickActions />

    </div>
  );
}