import {
  BadgeCheck,
  Star,
} from "lucide-react";

export default function HeroFloatingCard() {
  return (
    <>
      <div className="absolute left-0 top-16 hidden rounded-xl border bg-background p-4 shadow-xl lg:block">
        <div className="flex items-center gap-3">
          <BadgeCheck className="text-primary" />

          <div>
            <h4 className="font-semibold">
              Verified Property
            </h4>

            <p className="text-sm text-muted-foreground">
              5000+ Listings
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-0 hidden rounded-xl border bg-background p-4 shadow-xl lg:block">
        <div className="flex items-center gap-3">
          <Star className="fill-yellow-400 text-yellow-400" />

          <div>
            <h4 className="font-semibold">
              4.9 Rating
            </h4>

            <p className="text-sm text-muted-foreground">
              Happy Tenants
            </p>
          </div>
        </div>
      </div>
    </>
  );
}