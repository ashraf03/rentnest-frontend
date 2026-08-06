import { Property } from "@/types/property";

interface Props {
  property: Property;
}

export default function PropertyInformation({
  property,
}: Props) {
  return (
    <div className="rounded-xl border p-6">

      <h1 className="text-4xl font-bold">
        {property.title}
      </h1>

      <p className="mt-4 text-muted-foreground">
        {property.location}
      </p>

      <div className="mt-6 text-3xl font-bold text-primary">
        ৳ {property.rent.toLocaleString()}
      </div>

    </div>
  );
}S