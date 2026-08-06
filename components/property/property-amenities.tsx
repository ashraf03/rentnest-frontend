import { Check } from "lucide-react";

interface Props {
  amenities: string[];
}

export default function PropertyAmenities({
  amenities,
}: Props) {
  return (
    <section>

      <h2 className="mb-5 text-2xl font-semibold">
        Amenities
      </h2>

      <div className="grid gap-3 sm:grid-cols-2">
        {amenities.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <Check className="h-5 w-5 text-green-600" />

            {item}
          </div>
        ))}
      </div>

    </section>
  );
}