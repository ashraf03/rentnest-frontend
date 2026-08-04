import { Bath, Bed, MapPin } from "lucide-react";

interface PropertyMetaProps {
  location: string;
  bedrooms: number;
  bathrooms: number;
}

export default function PropertyMeta({
  location,
  bedrooms,
  bathrooms,
}: PropertyMetaProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4" />
        {location}
      </div>

      <div className="flex gap-6 text-sm">
        <div className="flex items-center gap-2">
          <Bed className="h-4 w-4" />
          {bedrooms} Beds
        </div>

        <div className="flex items-center gap-2">
          <Bath className="h-4 w-4" />
          {bathrooms} Baths
        </div>
      </div>
    </div>
  );
}