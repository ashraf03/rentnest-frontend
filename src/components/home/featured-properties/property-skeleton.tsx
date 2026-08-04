import { Skeleton } from "@/components/ui/skeleton";

export default function PropertySkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border">
      <Skeleton className="aspect-[4/3] w-full" />

      <div className="space-y-4 p-5">
        <Skeleton className="h-6 w-3/4" />

        <Skeleton className="h-4 w-1/2" />

        <Skeleton className="h-4 w-full" />

        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}