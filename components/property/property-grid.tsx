import { getProperties } from "@/services/property.service";

interface PropertyGridProps {
  searchParams: {
    search?: string;
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    page?: string;
  };
}

export default async function PropertyGrid({
  searchParams,
}: PropertyGridProps) {
  const properties =
    await getProperties(searchParams);

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {properties.data.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </div>
  );
}