import { Property } from "@/types/property";

import LandlordCard from "./landlord-card";
import RequestRentCard from "./request-rent-card";

interface Props {
  property: Property;
}

export default function PropertySidebar({
  property,
}: Props) {
  return (
    <div className="space-y-6">

      <LandlordCard
        property={property}
      />

      <RequestRentCard
        property={property}
      />

    </div>
  );
}