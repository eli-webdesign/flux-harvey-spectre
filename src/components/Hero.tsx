import Image from "next/image";
import { Navbar } from "./Navbar";

/**
 * Stacked progressive-blur layers. Each layer carries a stronger blur radius
 * and is masked to a band that overlaps with the next, so the visual result
 * fades smoothly from no blur (top) to heavy blur (bottom) — no hard cut.
 */
const PROGRESSIVE_BLUR_LAYERS: ReadonlyArray<{
  blur: number;
  mask: string;
}> = [
  // light blur, fades in across the whole region, fully gone at the top
  {
    blur: 6,
    mask: "linear-gradient(to top, black 0%, black 70%, transparent 100%)",
  },
  // medium blur, anchored to the lower ~half
  {
    blur: 16,
    mask: "linear-gradient(to top, black 0%, black 35%, transparent 70%)",
  },
  // heavy blur, anchored near the bottom
  {
    blur: 32,
    mask: "linear-gradient(to top, black 0%, black 10%, transparent 40%)",
  },
];

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#c9cfd1]">
      {/* Background portrait. The Pexels source has the man at ~40% from the
          left, so on desktop we shift right (translateX) and zoom (scale 1.4)
          to put him at viewport center. On mobile the natural object-cover
          framing already fills the viewport tightly so we use a much milder
          transform. */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero-2x.jpg"
          alt=""
          fill
          priority
          quality={90}
          sizes="(max-width: 768px) 100vw, 140vw"
          className="object-cover [object-position:40%_35%] [transform:scale(1.05)] [transform-origin:center_30%] md:[object-position:center_30%] md:[transform:translateX(6%)_scale(1.4)]"
        />
      </div>

      {/* Progressive blur stack at the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%]"
      >
        {PROGRESSIVE_BLUR_LAYERS.map((layer, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${layer.blur}px)`,
              WebkitBackdropFilter: `blur(${layer.blur}px)`,
              maskImage: layer.mask,
              WebkitMaskImage: layer.mask,
            }}
          />
        ))}
      </div>

      {/* Navbar — full viewport width (outside the 1920px text container) */}
      <div className="absolute inset-x-0 top-0 z-30 px-4 md:px-8">
        <Navbar />
      </div>

      {/* Text content. On mobile: a single centered column (Hello / Harvey /
          Specter / paragraph / CTA), wordmark stacked, satellites left-aligned.
          On desktop (md+): a 12-col grid with Harvey & Specter as bookends,
          satellites flanking them. Capped at 1920px on the desktop grid. */}
      <div className="pointer-events-none absolute inset-0 mx-auto flex w-full max-w-[1920px] px-4 md:px-8">
        {/* MOBILE LAYOUT — flex column, hidden on md+ */}
        <div className="flex h-full w-full flex-col pb-6 pt-24 md:hidden">
          {/* Wordmark group — vertically centered, with [Hello I'm] just above */}
          <div className="flex flex-1 flex-col items-center justify-center">
            <p className="mb-7 font-mono text-xs uppercase leading-[1.1] tracking-[-0.04em] text-white mix-blend-overlay">
              [ Hello I&rsquo;m ]
            </p>
            <h1 className="w-full text-center font-medium capitalize leading-[0.85] tracking-[-0.07em] text-white mix-blend-overlay text-[clamp(72px,28vw,180px)]">
              Harvey
            </h1>
            <h1 className="w-full text-center font-medium capitalize leading-[0.85] tracking-[-0.07em] text-white mix-blend-overlay text-[clamp(72px,28vw,180px)]">
              Specter
            </h1>
          </div>

          {/* Bottom group — paragraph + CTA, left-aligned */}
          <div className="pointer-events-auto flex flex-col items-start gap-[17px]">
            <p className="max-w-[294px] text-sm font-bold italic uppercase leading-[1.1] tracking-[-0.04em] text-[#1f1f1f]">
              <span>H.Studio is a </span>
              <span className="font-normal">full-service</span>
              <span>
                {" "}
                creative studio creating beautiful digital experiences and
                products. We are an{" "}
              </span>
              <span className="font-normal">award winning</span>
              <span>
                {" "}
                desing and art group specializing in branding, web design and
                engineering.
              </span>
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-3xl bg-black px-4 py-3 text-sm font-medium tracking-[-0.04em] text-white transition-opacity hover:opacity-90"
            >
              Let&rsquo;s talk
            </a>
          </div>
        </div>

        {/* DESKTOP LAYOUT — 12-col grid, hidden below md */}
        <div className="hidden h-full w-full grid-cols-12 grid-rows-[1fr_auto_1fr] gap-x-4 pb-10 pt-28 md:grid">
          {/* Row 1, Left col: "[ HELLO I'M ]" sits at the bottom of row 1, just above Harvey */}
          <p className="col-start-1 col-end-7 row-start-1 self-end pb-4 font-mono text-sm uppercase leading-[1.1] tracking-[-0.04em] text-white mix-blend-overlay">
            [ Hello I&rsquo;m ]
          </p>

          {/* Row 2: wordmark — Harvey left, Specter right, both with overlay blend */}
          <h1 className="col-start-1 col-end-7 row-start-2 text-left font-medium capitalize leading-[0.9] tracking-[-0.06em] text-white mix-blend-overlay text-[clamp(64px,14vw,260px)]">
            Harvey
          </h1>
          <h1 className="col-start-7 col-end-13 row-start-2 text-right font-medium capitalize leading-[0.9] tracking-[-0.06em] text-white mix-blend-overlay text-[clamp(64px,14vw,260px)]">
            Specter
          </h1>

          {/* Row 3, Right col: paragraph + CTA, sit at the top of row 3, just below Specter */}
          <div className="pointer-events-auto col-start-7 col-end-13 row-start-3 flex flex-col items-end gap-[17px] pt-4">
            <p className="max-w-[294px] text-sm font-bold italic uppercase leading-[1.1] tracking-[-0.04em] text-[#1f1f1f]">
              <span>H.Studio is a </span>
              <span className="font-normal">full-service</span>
              <span>
                {" "}
                creative studio creating beautiful digital experiences and
                products. We are an{" "}
              </span>
              <span className="font-normal">award winning</span>
              <span>
                {" "}
                desing and art group specializing in branding, web design and
                engineering.
              </span>
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-3xl bg-black px-4 py-3 text-sm font-medium tracking-[-0.04em] text-white transition-opacity hover:opacity-90"
            >
              Let&rsquo;s talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
