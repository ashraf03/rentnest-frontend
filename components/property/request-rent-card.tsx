import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Property } from "@/types/property";

import AvailabilityBadge from "./availability-badge";

interface Props {
  property: Property;
}

export default function RequestRentCard({
  property,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Rent Summary
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">

        <div>
          <p className="text-sm text-muted-foreground">
            Monthly Rent
          </p>

          <h2 className="text-3xl font-bold">
            ৳ {property.rent.toLocaleString()}
          </h2>
        </div>

        <AvailabilityBadge
          available={property.available}
        />

        <Button
          className="w-full"
          disabled={!property.available}
        >
          Request to Rent
        </Button>

      </CardContent>
    </Card>
  );
}