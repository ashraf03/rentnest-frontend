import {
  Property,
} from "@/types/property";

import PropertyCard from "./property-card";

import PropertyEmpty from "./property-empty";

interface Props {
  properties: Property[];
}

export default function PropertyGrid({
  properties,
}: Props) {
  if (properties.length === 0) {
    return <PropertyEmpty />;
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </div>
  );
}