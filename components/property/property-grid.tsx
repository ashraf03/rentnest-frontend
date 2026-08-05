import PropertyCard from "@/components/home/featured-properties/property-card";

import PropertyEmpty from "./property-empty";
import PropertyPagination from "./property-pagination";
import PropertyResults from "./property-results";

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
  const response = await getProperties(searchParams);

  if (response.data.length === 0) {
    return <PropertyEmpty />;
  }

  return (
    <>
      <PropertyResults total={response.meta.total} />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {response.data.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
          />
        ))}
      </div>

      <PropertyPagination
        page={response.meta.page}
        totalPage={response.meta.totalPage}
      />
    </>
  );
}