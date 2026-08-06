"use client";

import { useRouter } from "next/navigation";

import RentRequestDialog from "./rent-request-dialog";

interface Props {
  property: Property;
  user: User | null;
}

export default function RequestRentCard({
  property,
  user,
}: Props) {
  const router = useRouter();

  function handleRequest() {
    if (!user) {
      router.push("/auth/login");

      return;
    }

    if (user.role !== "TENANT") {
      alert(
        "Only tenants can request rentals."
      );

      return;
    }
  }

  return (
    <>
      {!user ||
      user.role !== "TENANT" ? (
        <button
          onClick={handleRequest}
          className="w-full rounded-lg border px-4 py-2"
        >
          Request to Rent
        </button>
      ) : (
        <RentRequestDialog
          propertyId={property.id}
        />
      )}
    </>
  );
}