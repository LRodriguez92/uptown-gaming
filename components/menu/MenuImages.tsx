import Image from "next/image";

type MenuImagesProps = {
  images: string[];
};

export function MenuImages({ images }: MenuImagesProps) {
  if (images.length === 0) {
    return (
      <p className="text-center text-(--foreground)/80">
        Menu images are not available right now.
      </p>
    );
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Menu page ${index + 1}`}
          width={1200}
          height={1600}
          sizes="(max-width: 768px) 92vw, 768px"
          className="h-auto w-full rounded-lg border border-(--foreground)/10 bg-(--surface-dark)"
          priority={index === 0}
        />
      ))}
    </div>
  );
}
