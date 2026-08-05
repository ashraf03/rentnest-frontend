import { Checkbox } from "@/components/ui/checkbox";

export default function AvailabilityFilter() {
  return (
    <div className="flex items-center gap-3">
      <Checkbox id="available" />

      <label
        htmlFor="available"
        className="text-sm font-medium"
      >
        Available Only
      </label>
    </div>
  );
}