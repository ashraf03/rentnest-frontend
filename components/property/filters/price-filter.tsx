import { Input } from "@/components/ui/input";

export default function PriceFilter() {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium">
        Price Range
      </label>

      <Input
        type="number"
        placeholder="Minimum Price"
      />

      <Input
        type="number"
        placeholder="Maximum Price"
      />
    </div>
  );
}