import {
  Home,
} from "lucide-react";

export default function PropertyEmpty() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed text-center">

      <Home className="h-12 w-12 text-muted-foreground" />

      <h2 className="mt-5 text-xl font-semibold">
        No Properties Found
      </h2>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        We couldn't find any available
        properties right now. Please check
        again later.
      </p>

    </div>
  );
}