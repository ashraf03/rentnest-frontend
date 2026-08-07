"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function RoleSelect({
  value,
  onChange,
}: Props) {
  return (
    <Select
      value={value}
      onValueChange={onChange}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select role" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="TENANT">
          Tenant
        </SelectItem>

        <SelectItem value="LANDLORD">
          Landlord
        </SelectItem>
      </SelectContent>
    </Select>
  );
}