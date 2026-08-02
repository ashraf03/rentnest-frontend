import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HeroSearch() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-background p-4 shadow-sm md:flex-row">
      <Input
        placeholder="Search by location..."
        className="flex-1"
      />

      <Button className="md:px-8">
        Search
      </Button>
    </div>
  );
}