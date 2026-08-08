import { http } from "./http";

import {
  TenantDashboard,
} from "@/types/tenant-dashboard";

export async function getTenantDashboard() {
  return http<{
    data: TenantDashboard;
  }>("/tenant/dashboard");
}