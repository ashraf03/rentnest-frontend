import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function SearchButton() {
  return (
    <Button className="w-full md:w-auto">
      <Search className="mr-2 h-4 w-4" />

      Search
    </Button>
  );
}