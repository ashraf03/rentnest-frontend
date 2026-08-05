import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CategoryFilter() {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        Category
      </label>

      <Select>
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
    </div>
  );
}