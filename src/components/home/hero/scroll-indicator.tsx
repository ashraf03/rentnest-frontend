import { Mouse } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <div className="mt-14 hidden items-center gap-3 lg:flex">
      <Mouse className="h-5 w-5 animate-bounce text-primary" />

      <span className="text-sm text-muted-foreground">
        Scroll to explore
      </span>
    </div>
  );
}