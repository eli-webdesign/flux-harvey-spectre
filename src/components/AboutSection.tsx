/**
 * About / bio strip — the section directly under the hero.
 *
 * On desktop: a typographic statement rendered as five staggered lines in
 * 96px Inter Light with a Playfair Display italic ampersand. The "001"
 * marker sits at the top-right of the first line; "[ creative freelancer ]"
 * sits at the bottom-left below the last line. Indentation values come
 * from Figma pixel values (214px / 610px / 606px) resolved against the
 * 1376px content column.
 *
 * On mobile: the same statement collapses into a single centered column
 * at 32px (~8.5vw). The "001" marker moves above the headline stack
 * (centered) and "[ creative freelancer ]" sits below (centered).
 */
export function AboutSection() {
  return (
    <section className="w-full bg-white px-4 py-12 md:px-8 md:py-[120px]">
      <div className="mx-auto w-full max-w-[1920px]">
        {/* Top label + divider line — identical on both breakpoints */}
        <div className="mb-2 flex w-full justify-end md:mb-3">
          <p className="font-mono text-sm uppercase leading-[1.1] text-[#1f1f1f]">
            [ 8+ years in industry ]
          </p>
        </div>
        <hr className="w-full border-t border-black" />

        {/* MOBILE LAYOUT — single centered column */}
        <div className="mt-6 flex flex-col items-center gap-3 md:hidden">
          <p className="font-mono text-sm uppercase leading-[1.1] text-[#1f1f1f]">
            001
          </p>
          <p className="whitespace-pre text-center font-light uppercase leading-[0.84] tracking-[-0.08em] text-black text-[clamp(28px,8.5vw,40px)]">
            {`A creative director   /`}
          </p>
          <p className="text-center font-light uppercase leading-[0.84] tracking-[-0.08em] text-black text-[clamp(28px,8.5vw,40px)]">
            Photographer
          </p>
          <p className="text-center font-light uppercase leading-[0.84] tracking-[-0.08em] text-black text-[clamp(28px,8.5vw,40px)]">
            Born{" "}
            <span className="font-[family-name:var(--font-playfair)] font-normal italic">
              &amp;
            </span>{" "}
            raised
          </p>
          <p className="text-center font-light uppercase leading-[0.84] tracking-[-0.08em] text-black text-[clamp(28px,8.5vw,40px)]">
            on the south side
          </p>
          <p className="text-center font-light uppercase leading-[0.84] tracking-[-0.08em] text-black text-[clamp(28px,8.5vw,40px)]">
            of Chicago.
          </p>
          <p className="font-mono text-sm uppercase leading-[1.1] text-[#1f1f1f]">
            [ creative freelancer ]
          </p>
        </div>

        {/* DESKTOP LAYOUT — staircase / stagger pattern */}
        <div className="mt-6 hidden flex-col gap-2 md:flex">
          {/* Line 1: A creative director  /  + 001 */}
          <div className="flex w-full items-start justify-between gap-3 uppercase">
            <p className="whitespace-pre font-light leading-[0.84] tracking-[-0.08em] text-black text-[clamp(40px,6.7vw,140px)]">
              {`A creative director   /`}
            </p>
            <p className="mt-3 shrink-0 font-mono text-sm uppercase leading-[1.1] text-[#1f1f1f]">
              001
            </p>
          </div>

          {/* Line 2: Photographer */}
          <p className="pl-[15.5%] font-light uppercase leading-[0.84] tracking-[-0.08em] text-black text-[clamp(40px,6.7vw,140px)]">
            Photographer
          </p>

          {/* Line 3: Born & raised */}
          <p className="pl-[44%] font-light uppercase leading-[0.84] tracking-[-0.08em] text-black text-[clamp(40px,6.7vw,140px)]">
            Born{" "}
            <span className="font-[family-name:var(--font-playfair)] font-normal italic">
              &amp;
            </span>{" "}
            raised
          </p>

          {/* Line 4: on the south side */}
          <p className="font-light uppercase leading-[0.84] tracking-[-0.08em] text-black text-[clamp(40px,6.7vw,140px)]">
            on the south side
          </p>

          {/* Line 5: of Chicago. */}
          <p className="pl-[44%] font-light uppercase leading-[0.84] tracking-[-0.08em] text-black text-[clamp(40px,6.7vw,140px)]">
            of Chicago.
          </p>

          {/* Bottom-left label (desktop only) */}
          <p className="mt-4 font-mono text-sm uppercase leading-[1.1] text-[#1f1f1f]">
            [ creative freelancer ]
          </p>
        </div>
      </div>
    </section>
  );
}
