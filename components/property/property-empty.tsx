import { Home } from "lucide-react";

export default function PropertyEmpty() {
  return (
    <div className="rounded-xl border border-dashed py-20 text-center">
      <Home className="mx-auto h-12 w-12 text-muted-foreground" />

      <h3 className="mt-6 text-2xl font-semibold">
        No Properties Found
      </h3>

      <p className="mt-2 text-muted-foreground">
        Try changing your filters.
      </p>
    </div>
  );
}