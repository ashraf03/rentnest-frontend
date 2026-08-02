import HeroBackground from "./hero-background";
import HeroContent from "./hero-content";
import HeroImage from "./hero-image";
import HeroStats from "./hero-stats";
import ScrollIndicator from "./scroll-indicator";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <HeroBackground />

      <div className="container relative mx-auto px-5 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <HeroContent />

            <HeroStats />

            <ScrollIndicator />
          </div>

          <HeroImage />
        </div>
      </div>
    </section>
  );
}