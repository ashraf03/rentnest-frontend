import { Skeleton } from "@/components/ui/skeleton";

export default function TenantDashboardLoading() {
  return (
    <div className="space-y-8">

      <div className="space-y-2">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-96" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {Array.from({
          length: 4,
        }).map((_, index) => (
          <Skeleton
            key={index}
            className="h-32"
          />
        ))}

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <Skeleton className="h-80" />

        <Skeleton className="h-80" />

      </div>

    </div>
  );
}