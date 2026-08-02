import HeroSearch from "./hero-search";

export default function HeroContent() {
  return (
    <>
      <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
        Find Your Dream Rental
      </span>

      <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
        Find Your Perfect
        <span className="block text-primary">
          Rental Home
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-muted-foreground">
        Browse verified apartments, flats, and family homes across Bangladesh.
        Connect with trusted landlords and discover your next home with ease.
      </p>

      <div className="mt-8">
        <HeroSearch />
      </div>
    </>
  );
}