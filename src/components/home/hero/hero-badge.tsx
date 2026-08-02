import { ShieldCheck } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
      <ShieldCheck className="h-4 w-4 text-primary" />

      <span className="text-sm font-medium">
        Trusted by 10,000+ renters
      </span>
    </div>
  );
}