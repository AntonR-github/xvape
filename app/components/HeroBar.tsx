import Image from "next/image";

interface HeroBarProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt?: string;
}

export default function HeroBar({ title, subtitle, imageSrc, imageAlt = "Hero image" }: HeroBarProps) {
  return (
<section className="bg-black py-6 sm:py-8 lg:py-10">
  <div className="px-6 lg:px-12 w-full flex justify-center">
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_2fr] items-center gap-x-20 max-w-7xl w-full">
      {/* Text on RIGHT (first column) */}
      <div className="text-start lg:text-start">
        <h1 className="title-h1 mb-5 text-4xl sm:text-5xl lg:text-[clamp(2.25rem,6vw,4.5rem)]">
          {title}
        </h1>
        {subtitle && (
          <p className="subtitle text-lg sm:text-xl">{subtitle}</p>
        )}
      </div>

      {/* Image on LEFT (second column) */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-[700px] h-[250px] sm:h-[350px] lg:h-[450px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  </div>
</section>
  );
}