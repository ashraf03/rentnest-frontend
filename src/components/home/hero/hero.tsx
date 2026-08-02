import HeroContent from "./hero-content";
import HeroImage from "./hero-image";
import HeroStats from "./hero-stats";

export default function Hero() {
  return (
    <section className="border-b bg-gradient-to-b from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <HeroContent />

            <HeroStats />
          </div>

          <HeroImage />
        </div>
      </div>
    </section>
  );
}