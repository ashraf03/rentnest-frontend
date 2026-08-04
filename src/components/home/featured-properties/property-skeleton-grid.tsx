import PropertySkeleton from "./property-skeleton";

export default function PropertySkeletonGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <PropertySkeleton key={index} />
      ))}
    </div>
  );
}