import SectionHeader from "@/components/home/featured-properties/section-header";
import PropertySkeletonGrid from "@/components/home/featured-properties/property-skeleton-grid";

export default function Loading() {
  return (
    <main>
      <section className="py-20">
        <div className="container mx-auto px-5">
          <SectionHeader />

          <PropertySkeletonGrid />
        </div>
      </section>
    </main>
  );
}