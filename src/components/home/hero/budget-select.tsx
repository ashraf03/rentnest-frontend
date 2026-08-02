import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BudgetSelect() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Budget" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="10000">
          Under ৳10,000
        </SelectItem>

        <SelectItem value="20000">
          Under ৳20,000
        </SelectItem>

        <SelectItem value="30000">
          Under ৳30,000
        </SelectItem>

        <SelectItem value="50000">
          Under ৳50,000
        </SelectItem>
      </SelectContent>
    </Select>
  );
}