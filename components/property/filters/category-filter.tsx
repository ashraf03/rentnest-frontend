import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CategoryFilterProps {
  defaultValue?: string;
}

export default function CategoryFilter({
  defaultValue,
}: CategoryFilterProps) {
  return (
    <Select name="category" defaultValue={defaultValue}>
      <SelectTrigger>
        <SelectValue placeholder="Select category" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="apartment">
          Apartment
        </SelectItem>

        <SelectItem value="flat">
          Flat
        </SelectItem>

        <SelectItem value="house">
          House
        </SelectItem>

        <SelectItem value="office">
          Office
        </SelectItem>
      </SelectContent>
    </Select>
  );
}