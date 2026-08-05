import { Button } from "@/components/ui/button";

export default function FilterActions() {
  return (
    <div className="flex flex-col gap-3">
      <Button className="w-full">
        Apply Filters
      </Button>

      <Button
        variant="outline"
        className="w-full"
      >
        Reset
      </Button>
    </div>
  );
}