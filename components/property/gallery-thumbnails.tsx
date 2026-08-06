import Image from "next/image";

interface Props {
  images: string[];
}

export default function GalleryThumbnails({
  images,
}: Props) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((image) => (
        <div
          key={image}
          className="overflow-hidden rounded-xl border"
        >
          <Image
            src={image}
            alt="Property"
            width={300}
            height={200}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}