import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  getHeroImage,
  getOptimizedHeroSrc,
  type HeroImageKey,
} from "@/lib/hero-images";

type PageHeroProps = {
  /** Preset image key from hero-images.ts */
  image?: HeroImageKey;
  /** Override image URL (e.g. blog RSS cover) */
  imageSrc?: string;
  imageAlt?: string;
  children: ReactNode;
  className?: string;
  /** Taller hero for homepage */
  size?: "default" | "large";
  priority?: boolean;
};

export function PageHero({
  image = "guides",
  imageSrc,
  imageAlt,
  children,
  className,
  size = "default",
  priority = false,
}: PageHeroProps) {
  const preset = getHeroImage(image);
  const src = getOptimizedHeroSrc(imageSrc ?? preset.src);
  const alt = imageAlt ?? preset.alt;

  return (
    <section
      className={cn(
        "hero-photo relative isolate flex flex-col items-center justify-center overflow-hidden px-4 text-center",
        size === "large" ? "min-h-[60vh] py-16 md:py-20" : "min-h-[44vh] py-14 md:py-16",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center"
        quality={85}
      />
      <div className="hero-photo-overlay pointer-events-none absolute inset-0" aria-hidden />
      <div className="hero-photo-content relative z-10 w-full max-w-5xl">{children}</div>
    </section>
  );
}
