import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ShieldCheck } from "lucide-react";

import { Property } from "@/types/property";

import LandlordAvatar from "./landlord-avatar";
import LandlordContact from "./landlord-contact";

interface Props {
  property: Property;
}

export default function LandlordCard({
  property,
}: Props) {
  const landlord = property.landlord;

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Landlord Information
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">

        <LandlordAvatar
          name={landlord.name}
          avatar={landlord.avatar}
        />

        {landlord.verified && (
          <div className="flex items-center gap-2 text-green-600">
            <ShieldCheck className="h-5 w-5" />
            Verified Landlord
          </div>
        )}

        <LandlordContact
          email={landlord.email}
          phone={landlord.phone}
        />

      </CardContent>
    </Card>
  );
}