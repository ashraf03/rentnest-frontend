import { Property } from "@/types/property";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <div className="rounded-xl border bg-background p-5 shadow-sm transition hover:shadow-md">
      <h3 className="text-lg font-semibold">
        {property.title}
      </h3>

      <p className="mt-2 text-muted-foreground">
        {property.location}
      </p>

      <p className="mt-4 text-xl font-bold text-primary">
        ৳ {property.rent.toLocaleString()}
      </p>
    </div>
  );
}