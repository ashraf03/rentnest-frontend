import DashboardLayout from "@/components/dashboard/dashboard-layout";

interface Props {
  children: React.ReactNode;
}

export default function TenantLayout({
  children,
}: Props) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}