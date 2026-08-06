import {
  Bath,
  Bed,
  Ruler,
  Sofa,
} from "lucide-react";

import { Property } from "@/types/property";

interface Props {
  property: Property;
}

export default function PropertyFeatures({
  property,
}: Props) {
  return (
    <section>

      <h2 className="mb-5 text-2xl font-semibold">
        Features
      </h2>

      <div className="grid gap-5 sm:grid-cols-2">

        <Feature
          icon={<Bed className="h-5 w-5" />}
          label="Bedrooms"
          value={property.bedrooms}
        />

        <Feature
          icon={<Bath className="h-5 w-5" />}
          label="Bathrooms"
          value={property.bathrooms}
        />

        <Feature
          icon={<Ruler className="h-5 w-5" />}
          label="Area"
          value={`${property.area} sqft`}
        />

        <Feature
          icon={<Sofa className="h-5 w-5" />}
          label="Furnished"
          value={
            property.furnished
              ? "Yes"
              : "No"
          }
        />

      </div>

    </section>
  );
}

function Feature({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border p-5">
      {icon}

      <div>
        <p className="text-sm text-muted-foreground">
          {label}
        </p>

        <h4 className="font-semibold">
          {value}
        </h4>
      </div>
    </div>
  );
}