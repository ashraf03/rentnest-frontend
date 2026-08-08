export interface TenantDashboardStats {
  totalRequests: number;

  pendingRequests: number;

  approvedRequests: number;

  totalPayments: number;
}

export interface RecentRequest {
  id: string;

  status:
    | "PENDING"
    | "APPROVED"
    | "REJECTED";

  createdAt: string;

  property: {
    id: string;
    title: string;
    location: string;
  };
}

export interface RecentPayment {
  id: string;

  amount: number;

  status:
    | "PENDING"
    | "PAID"
    | "FAILED"
    | "CANCELLED";

  createdAt: string;

  property: {
    title: string;
  };
}

export interface TenantDashboard {
  stats: TenantDashboardStats;

  recentRequests: RecentRequest[];

  recentPayments: RecentPayment[];
}