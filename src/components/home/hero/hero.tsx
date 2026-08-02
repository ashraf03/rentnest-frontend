import Image from "next/image";

import HeroContent from "./hero-content";
import HeroStats from "./hero-stats";

export default function Hero() {
  return (
    <section className="border-b bg-muted/30">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <HeroContent />

            <HeroStats />
          </div>

          {/* Right */}
          <div className="relative">
            <Image
              src="/images/hero/hero-banner.png"
              alt="RentNest Hero"
              width={700}
              height={700}
              priority
              className="mx-auto h-auto w-full max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}