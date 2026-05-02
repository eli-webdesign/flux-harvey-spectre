import Image from "next/image";

/**
 * Testimonials.
 *
 * Desktop: a giant "Testimonials" wordmark sits centered in the section while
 *          four testimonial cards are scattered around it at hand-tuned
 *          positions and rotations. The cards are absolutely positioned with
 *          percentage X coordinates so the composition holds across desktop
 *          widths.
 * Mobile:  the wordmark scales down to ~64px and we render only the first
 *          two cards in a row, intentionally letting the second one bleed
 *          past the right edge (matching the Figma mobile frame).
 */

type Testimonial = {
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  quote: string;
  author: string;
};

type DesktopPos = {
  left: string;
  top: string;
  rotate: string;
};

const TESTIMONIALS: ReadonlyArray<Testimonial & { desktop: DesktopPos }> = [
  {
    logo: "/testimonial-logo-2.svg",
    logoAlt: "Logoipsum logo",
    logoWidth: 143,
    logoHeight: 19,
    quote:
      "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    author: "Marko Stojković",
    desktop: { left: "2%", top: "60px", rotate: "-6.85deg" },
  },
  {
    logo: "/testimonial-logo-1.svg",
    logoAlt: "Logoipsum logo",
    logoWidth: 138,
    logoHeight: 19,
    quote:
      "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    author: "Lukas Weber",
    desktop: { left: "58%", top: "130px", rotate: "2.9deg" },
  },
  {
    logo: "/testimonial-logo-3.svg",
    logoAlt: "Logoipsum University logo",
    logoWidth: 109,
    logoHeight: 31,
    quote:
      "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    author: "Sarah Jenkins",
    desktop: { left: "21%", top: "553px", rotate: "2.23deg" },
  },
  {
    logo: "/testimonial-logo-4.svg",
    logoAlt: "Logoipsum signature logo",
    logoWidth: 81,
    logoHeight: 36,
    quote:
      "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    author: "Sofia Martínez",
    desktop: { left: "68%", top: "546px", rotate: "-4.15deg" },
  },
];

function TestimonialCard({
  data,
  className,
  style,
  width,
}: {
  data: Testimonial;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
}) {
  return (
    <article
      style={style}
      className={`flex flex-col items-start gap-4 rounded-[4px] border border-[#ddd] bg-[#f1f1f1] p-6 ${className ?? ""}`}
    >
      <Image
        src={data.logo}
        alt={data.logoAlt}
        width={data.logoWidth}
        height={data.logoHeight}
        unoptimized
      />
      <p
        className="text-[18px] font-normal leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]"
        style={width ? { width } : undefined}
      >
        {data.quote}
      </p>
      <p className="text-base font-black uppercase tracking-[-0.04em] leading-[1.1] text-black">
        {data.author}
      </p>
    </article>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-16 md:px-8 md:py-[120px]">
      {/* DESKTOP — wordmark behind, 4 rotated cards positioned absolutely */}
      <div className="relative mx-auto hidden h-[820px] w-full max-w-[1440px] md:block">
        {/* The Testimonials wordmark, centered vertically in the section */}
        <h2 className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-medium capitalize leading-[1.1] tracking-[-0.07em] text-black text-[clamp(80px,14vw,220px)]">
          Testimonials
        </h2>

        {/* Cards floated on top of the wordmark */}
        {TESTIMONIALS.map((t) => (
          <TestimonialCard
            key={t.author}
            data={t}
            width={305}
            className="absolute w-[353px] shadow-sm"
            style={{
              left: t.desktop.left,
              top: t.desktop.top,
              transform: `rotate(${t.desktop.rotate})`,
            }}
          />
        ))}
      </div>

      {/* MOBILE — wordmark on top, 2 cards in a row that intentionally bleed
          off the right edge */}
      <div className="flex flex-col items-stretch gap-8 md:hidden">
        <h2 className="text-center font-medium capitalize leading-[0.8] tracking-[-0.07em] text-black text-[64px]">
          Testimonials
        </h2>

        <div className="-mx-4 flex items-center gap-3 overflow-visible pl-4">
          {/* Card 1 - Marko, slightly tilted left */}
          <div className="shrink-0" style={{ transform: "rotate(-3.5deg)" }}>
            <TestimonialCard
              data={TESTIMONIALS[0]}
              width={211}
              className="w-[260px] shadow-sm"
            />
          </div>
          {/* Card 2 - Sofia, slightly tilted right */}
          <div className="shrink-0" style={{ transform: "rotate(2deg)" }}>
            <TestimonialCard
              data={TESTIMONIALS[3]}
              width={211}
              className="w-[260px] shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
