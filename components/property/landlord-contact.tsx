import { Mail, Phone } from "lucide-react";

interface Props {
  email: string;
  phone: string;
}

export default function LandlordContact({
  email,
  phone,
}: Props) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm">
        <Mail className="h-4 w-4" />
        {email}
      </div>

      <div className="flex items-center gap-2 text-sm">
        <Phone className="h-4 w-4" />
        {phone}
      </div>
    </div>
  );
}