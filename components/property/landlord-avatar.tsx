import Image from "next/image";

interface Props {
  name: string;
  avatar: string;
}

export default function LandlordAvatar({
  name,
  avatar,
}: Props) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={avatar}
        alt={name}
        width={64}
        height={64}
        className="rounded-full object-cover"
      />

      <div>
        <h3 className="font-semibold text-lg">
          {name}
        </h3>
      </div>
    </div>
  );
}