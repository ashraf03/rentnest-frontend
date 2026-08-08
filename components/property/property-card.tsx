import Image from "next/image";

import Link from "next/link";

import {
  BedDouble,
  Bath,
  Maximize,
  MapPin,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
  Badge,
} from "@/components/ui/badge";

import {
  Property,
} from "@/types/property";

interface Props {
  property: Property;
}

export default function PropertyCard({
  property,
}: Props) {
  const image =
    property.images?.[0] ||
    "/placeholder-property.jpg";

  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-lg">

      {/* Image */}

      <div className="relative aspect-[4/3] overflow-hidden">

        <Image
          src={image}
          alt={property.title}
          fill
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            25vw
          "
          className="
            object-cover
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />

        {/* Availability */}

        <div className="absolute left-3 top-3">

          <Badge
            variant={
              property.isAvailable
                ? "default"
                : "secondary"
            }
          >
            {property.isAvailable
              ? "Available"
              : "Unavailable"}
          </Badge>

        </div>

        {/* Property Type */}

        <div className="absolute right-3 top-3">

          <Badge variant="secondary">
            {property.propertyType}
          </Badge>

        </div>

      </div>

      {/* Content */}

      <CardContent className="p-5">

        <div className="space-y-3">

          {/* Price */}

          <div>
            <span className="text-2xl font-bold">
              ৳{property.price.toLocaleString()}
            </span>

            <span className="ml-1 text-sm text-muted-foreground">
              /month
            </span>
          </div>

          {/* Title */}

          <h2 className="line-clamp-1 text-lg font-semibold">
            {property.title}
          </h2>

          {/* Location */}

          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">

            <MapPin className="h-4 w-4 shrink-0" />

            <span className="line-clamp-1">
              {property.location}
            </span>

          </div>

          {/* Features */}

          <div className="grid grid-cols-3 gap-2 border-t pt-4">

            <div className="flex items-center gap-1.5 text-sm">

              <BedDouble className="h-4 w-4 text-muted-foreground" />

              <span>
                {property.bedrooms} Beds
              </span>

            </div>

            <div className="flex items-center gap-1.5 text-sm">

              <Bath className="h-4 w-4 text-muted-foreground" />

              <span>
                {property.bathrooms} Baths
              </span>

            </div>

            <div className="flex items-center gap-1.5 text-sm">

              <Maximize className="h-4 w-4 text-muted-foreground" />

              <span>
                {property.area} sqft
              </span>

            </div>

          </div>

        </div>

      </CardContent>

      {/* Footer */}

      <CardFooter className="p-5 pt-0">

        <Button
          asChild
          className="w-full"
        >
          <Link
            href={`/properties/${property.id}`}
          >
            View Details
          </Link>
        </Button>

      </CardFooter>

    </Card>
  );
}