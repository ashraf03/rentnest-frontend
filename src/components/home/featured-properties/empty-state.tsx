import { Home } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed py-16 text-center">
      <Home className="mx-auto h-12 w-12 text-muted-foreground" />

      <h3 className="mt-5 text-xl font-semibold">
        No Featured Properties
      </h3>

      <p className="mt-2 text-muted-foreground">
        Please check back later.
      </p>
    </div>
  );
}