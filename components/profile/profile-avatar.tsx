import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface Props {
  name: string;
  avatar?: string | null;
}

export default function ProfileAvatar({
  name,
  avatar,
}: Props) {
  const fallback =
    name
      .split(" ")
      .map((item) => item[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <Avatar className="h-20 w-20">

      {avatar && (
        <AvatarImage
          src={avatar}
          alt={name}
        />
      )}

      <AvatarFallback>
        {fallback}
      </AvatarFallback>

    </Avatar>
  );
}