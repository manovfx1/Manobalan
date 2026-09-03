import Image from "next/image";

interface ModelGridTileProps {
  image: string;
  alt: string;
  onClick?: () => void;
}

export default function ModelGridTile({ image, alt, onClick }: ModelGridTileProps) {
  return (
    <div
      className={`cursor-target relative aspect-square w-full overflow-hidden detail-media-bg ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      <Image src={image} alt={alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
    </div>
  );
}
