import SectionHeader from "./section-header";
import EmptyState from "./empty-state";
import PropertyCard from "./property-card";

import { getFeaturedProperties } from "@/services/property.service";

export default async function FeaturedProperties() {
  const properties = await getFeaturedProperties();

  return (
    <section className="py-20">
      <div className="container mx-auto px-5">
        <SectionHeader />

        {properties.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}