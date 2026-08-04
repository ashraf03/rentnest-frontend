import { Suspense } from "react";

import Hero from "@/components/home/hero/hero";

import {
  FeaturedProperties,
  PropertySkeletonGrid,
} from "@/components/home/featured-properties";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Suspense
        fallback={<PropertySkeletonGrid />}
      >
        <FeaturedProperties />
      </Suspense>
    </>
  );
}