"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createRentalRequest } from "@/services/rental-request.service";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Props {
  propertyId: string;
}

export default function RentRequestForm({
  propertyId,
}: Props) {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(
      e.currentTarget
    );

    await createRentalRequest({
      propertyId,

      moveInDate:
        formData.get("moveInDate") as string,

      message:
        formData.get("message") as string,
    });

    setLoading(false);

    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <Input
        type="date"
        name="moveInDate"
        required
      />

      <Textarea
        name="message"
        placeholder="Message"
      />

      <Button
        className="w-full"
        disabled={loading}
      >
        {loading
          ? "Submitting..."
          : "Submit Request"}
      </Button>
    </form>
  );
}