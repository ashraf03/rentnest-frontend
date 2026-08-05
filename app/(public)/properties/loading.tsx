import PropertySkeletonGrid from "@/components/home/featured-properties/property-skeleton-grid";

export default function Loading() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-5">

        <PropertySkeletonGrid />

      </div>
    </section>
  );
}