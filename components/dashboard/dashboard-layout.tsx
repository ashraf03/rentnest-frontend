import DashboardHeader from "./dashboard-header";
import DashboardSidebar from "./dashboard-sidebar";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-muted/30">

      <DashboardHeader />

      <div className="container mx-auto flex">

        <DashboardSidebar />

        <main className="flex-1 p-6">
          {children}
        </main>

      </div>

    </div>
  );
}