"use client";

import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function FavoriteButton() {
  return (
    <Button
      size="icon"
      variant="secondary"
      className="absolute right-4 top-4 rounded-full"
      aria-label="Add to wishlist"
    >
      <Heart className="h-4 w-4" />
    </Button>
  );
}