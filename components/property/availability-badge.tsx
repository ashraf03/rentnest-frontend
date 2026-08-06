import { Badge } from "@/components/ui/badge";

interface Props {
  available: boolean;
}

export default function AvailabilityBadge({
  available,
}: Props) {
  return (
    <Badge
      variant={available ? "default" : "secondary"}
    >
      {available
        ? "Available"
        : "Not Available"}
    </Badge>
  );
}