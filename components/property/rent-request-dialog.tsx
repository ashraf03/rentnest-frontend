"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import RentRequestForm from "./rent-request-form";

interface Props {
  propertyId: string;
}

export default function RentRequestDialog({
  propertyId,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">
          Request to Rent
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Request to Rent
          </DialogTitle>
        </DialogHeader>

        <RentRequestForm
          propertyId={propertyId}
        />
      </DialogContent>
    </Dialog>
  );
}