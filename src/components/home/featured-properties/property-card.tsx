import Image from "next/image";

import { Property } from "@/types/property";

import FavoriteButton from "./favorite-button";
import PropertyBadge from "./property-badge";
import PropertyMeta from "./property-meta";
import PropertyPrice from "./property-price";
import ViewDetailsButton from "./view-details-button";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <Image
          src={property.thumbnail}
          alt={property.title}
          width={600}
          height={400}
          className="aspect-[4/3] w-full object-cover"
        />

        <PropertyBadge available={property.available} />

        <FavoriteButton />
      </div>

      <div className="space-y-5 p-5">
        <div>
          <h3 className="line-clamp-1 text-xl font-semibold">
            {property.title}
          </h3>
        </div>

        <PropertyMeta
          location={property.location}
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
        />

        <PropertyPrice rent={property.rent} />

        <ViewDetailsButton
          slug={property.slug}
        />
      </div>
    </article>
  );
}