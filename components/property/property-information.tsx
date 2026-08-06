import { Badge } from "@/components/ui/badge";

import { MapPin } from "lucide-react";

import { Property } from "@/types/property";

import PropertyPriceCard from "./property-price-card";
import PropertyAmenities from "./property-amenities";
import PropertyDescription from "./property-description";
import PropertyFeatures from "./property-features";

interface Props {
  property: Property;
}

export default function PropertyInformation({
  property,
}: Props) {
  return (
    <div className="space-y-8">

      <div>

        <Badge>
          {property.category.name}
        </Badge>

        <h1 className="mt-4 text-4xl font-bold">
          {property.title}
        </h1>

        <div className="mt-3 flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {property.location}
        </div>

      </div>

      <PropertyPriceCard
        rent={property.rent}
      />

      <PropertyDescription
        description={property.description}
      />

      <PropertyAmenities
        amenities={property.amenities}
      />

      <PropertyFeatures
        property={property}
      />

    </div>
  );
}