import Image from "next/image";

/**
 * "About" section — paragraph + portrait + framing brackets.
 *
 * Desktop:  [ABOUT] top-left, the rest fits in a 983px right column with the
 *           paragraph (wrapped in corner brackets) bottom-left and "002" + a
 *           436×614 portrait bottom-right. Items end-align so the image's top
 *           sits at the section's top edge.
 * Mobile:   vertical stack — 002, [ABOUT], paragraph (with corners),
 *           full-width portrait at the same 422:594 aspect.
 *
 * The four corner brackets framing the paragraph are inline SVGs of a single
 * top-left "L" rotated 0/90/180/270 to land at the right corner.
 */

type Position = "tl" | "tr" | "bl" | "br";

const ROTATIONS: Record<Position, number> = {
  tl: 0,
  tr: 90,
  br: 180,
  bl: 270,
};

function CornerBracket({ position }: { position: Position }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      style={{ transform: `rotate(${ROTATIONS[position]}deg)` }}
    >
      {/* Top-left L: down the left side, then across the top */}
      <path d="M0 12 L0 0 L12 0" />
    </svg>
  );
}

const PARAGRAPH = (
  <>
    Placeholder paragraph one. This is where you introduce yourself — your
    background, your passion for your craft, and what drives you creatively.
    Two to three sentences work best here. Placeholder paragraph two. Here you
    can describe your technical approach, how you collaborate with clients, or
    what sets your work apart from others in your field.
  </>
);

/**
 * Paragraph wrapped with four corner brackets. Renders consistently on both
 * breakpoints — only the surrounding layout changes.
 */
function FramedParagraph() {
  return (
    <div className="flex flex-1 items-stretch gap-3">
      {/* Left column — TL + BL corners stacked top/bottom */}
      <div className="flex w-6 shrink-0 flex-col items-start justify-between text-[#1f1f1f]">
        <CornerBracket position="tl" />
        <CornerBracket position="bl" />
      </div>

      {/* Paragraph */}
      <p className="flex-1 self-center py-3 text-sm font-normal leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
        {PARAGRAPH}
      </p>

      {/* Right column — TR + BR corners */}
      <div className="flex w-6 shrink-0 flex-col items-end justify-between text-[#1f1f1f]">
        <CornerBracket position="tr" />
        <CornerBracket position="br" />
      </div>
    </div>
  );
}

export function IntroSection() {
  return (
    <section className="w-full bg-white px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-[1920px]">
        {/* DESKTOP — [ABOUT] top-left, paragraph + 002 + portrait on right */}
        <div className="hidden w-full items-start justify-between md:flex">
          {/* Top-left ABOUT label */}
          <p className="font-mono text-sm uppercase leading-[1.1] text-[#1f1f1f]">
            [ About ]
          </p>

          {/* Right column at 983px — bottom-aligned so the image's top defines
              the row's top edge and the paragraph hugs the bottom-left of it */}
          <div className="flex w-[983px] items-end gap-8">
            <FramedParagraph />

            {/* 002 + portrait, top-aligned within the row */}
            <div className="flex shrink-0 items-start gap-6">
              <p className="font-mono text-sm uppercase leading-[1.1] text-[#1f1f1f]">
                002
              </p>
              <div className="relative h-[614px] w-[436px] overflow-hidden">
                <Image
                  src="/portrait-about-2x.avif"
                  alt=""
                  fill
                  sizes="436px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE — vertical stack */}
        <div className="flex w-full flex-col gap-5 md:hidden">
          <p className="font-mono text-sm uppercase leading-[1.1] text-[#1f1f1f]">
            002
          </p>
          <p className="font-mono text-sm uppercase leading-[1.1] text-[#1f1f1f]">
            [ About ]
          </p>
          <FramedParagraph />
          <div className="relative aspect-[422/594] w-full overflow-hidden">
            <Image
              src="/portrait-about-2x.avif"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
