import { Badge } from "@/components/ui/badge";

interface PropertyBadgeProps {
  available: boolean;
}

export default function PropertyBadge({
  available,
}: PropertyBadgeProps) {
  return (
    <Badge
      variant={available ? "default" : "secondary"}
      className="absolute left-4 top-4"
    >
      {available ? "Available" : "Rented"}
    </Badge>
  );
}