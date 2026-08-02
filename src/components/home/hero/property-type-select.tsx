import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PropertyTypeSelect() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Property Type" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="apartment">
          Apartment
        </SelectItem>

        <SelectItem value="flat">
          Flat
        </SelectItem>

        <SelectItem value="family-house">
          Family House
        </SelectItem>

        <SelectItem value="office">
          Office
        </SelectItem>
      </SelectContent>
    </Select>
  );
}