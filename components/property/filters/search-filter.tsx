import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchFilter() {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        Search
      </label>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          placeholder="Search property..."
          className="pl-9"
        />
      </div>
    </div>
  );
}
