import DashboardNav from "./dashboard-nav";

export default function DashboardSidebar() {
  return (
    <aside className="hidden w-64 border-r bg-background lg:block">

      <div className="p-6 text-2xl font-bold">
        RentNest
      </div>

      <DashboardNav />

    </aside>
  );
}