import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface Props {
  children: React.ReactNode;
}

export default function AuthCard({
  children,
}: Props) {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-8">
        {children}
      </CardContent>
    </Card>
  );
}