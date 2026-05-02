import Image from "next/image";

/**
 * Full-bleed editorial photo strip — 100vh tall, image covers the entire
 * viewport. The portrait photo is delivered as a 2880×1800 AVIF (~79 KB)
 * for retina sharpness without bloat.
 */
export function PhotoSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/photo-section-2x.avif"
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="object-cover object-center"
      />
    </section>
  );
}
