import Image from "next/image";

import HeroFloatingCard from "./hero-floating-card";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center">
      <Image
        src="/images/hero/hero-banner.png"
        alt="Hero Banner"
        width={650}
        height={650}
        priority
        className="w-full max-w-xl rounded-3xl"
      />

      <HeroFloatingCard />
    </div>
  );
}