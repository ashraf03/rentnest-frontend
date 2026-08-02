import HeroActions from "./hero-actions";
import HeroBadge from "./hero-badge";
import HeroSearch from "./hero-search";

export default function HeroContent() {
  return (
    <>
      <HeroBadge />

      <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
        Find Your Perfect
        <span className="block text-primary">
          Rental Home
        </span>
        in Bangladesh
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
        Browse verified apartments, family homes, and premium
        rental properties across Bangladesh. Connect with trusted
        landlords and move into your dream home with confidence.
      </p>

      <div className="mt-8">
        <HeroSearch />
      </div>

      <HeroActions />
    </>
  );
}