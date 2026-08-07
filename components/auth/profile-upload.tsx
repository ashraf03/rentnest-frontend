import { Input } from "@/components/ui/input";

interface Props {
  value: string;
  onChange: (
    value: string
  ) => void;
}

export default function ProfileUpload({
  value,
  onChange,
}: Props) {
  return (
    <Input
      placeholder="Profile image URL (optional)"
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
    />
  );
}