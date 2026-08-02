import { MapPin } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function LocationInput() {
  return (
    <div className="relative">
      <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <Input
        placeholder="Search by location"
        className="pl-9"
      />
    </div>
  );
}