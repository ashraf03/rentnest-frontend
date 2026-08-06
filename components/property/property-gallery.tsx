import Image from "next/image";

import { Property } from "@/types/property";

import GalleryThumbnails from "./gallery-thumbnails";

interface Props {
  property: Property;
}

export default function PropertyGallery({
  property,
}: Props) {
  return (
    <div className="space-y-4">

      <div className="overflow-hidden rounded-2xl border">
        <Image
          src={property.thumbnail}
          alt={property.title}
          width={1200}
          height={700}
          priority
          className="aspect-[16/9] w-full object-cover"
        />
      </div>

      <GalleryThumbnails
        images={property.images}
      />

    </div>
  );
}