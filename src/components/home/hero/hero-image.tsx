import Image from "next/image";

import HeroFloatingCard from "./hero-floating-card";

export default function HeroImage() {
    return (
        <div className="relative flex justify-center">
            <Image

                priority

                sizes="(max-width:768px)100vw,
    (max-width:1200px)50vw,
    40vw"

            />

            <HeroFloatingCard />
        </div>
    );
}