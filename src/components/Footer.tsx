/**
 * Site footer.
 *
 * Desktop: a row with the "Have a project in mind?" CTA on the left, two
 *          columns of social links centered/right, separated by a hairline
 *          divider. Underneath is a giant 290px "H.Studio" wordmark that
 *          overflows the container's right edge, with a vertical
 *          "[ Coded By Claude ]" mark on its left and the legal links
 *          anchored to the bottom-right.
 * Mobile:  CTA + button, then social links stacked vertically, divider,
 *          then centered legal links, then a horizontal "[ Coded By Claude ]"
 *          label above a clipped "H.Studio" wordmark.
 */

const SOCIAL_LEFT = ["Facebook", "Instagram"] as const;
const SOCIAL_RIGHT = ["x.com", "Linkedin"] as const;

function ProjectCTA() {
  return (
    <div className="flex w-[298px] flex-col items-start gap-3">
      <p className="text-[24px] font-light italic uppercase leading-[1.1] tracking-[-0.04em] text-white">
        Have a <strong className="font-black not-italic">project</strong> in
        mind?
      </p>
      <a
        href="#contact"
        className="inline-flex items-center justify-center rounded-3xl border border-white px-4 py-3 text-sm font-medium tracking-[-0.04em] text-white transition-colors hover:bg-white hover:text-black"
      >
        Let&rsquo;s talk
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-black px-4 pt-12 md:px-8">
      {/* DESKTOP TOP ROW — 3 columns: CTA / centered socials / right-aligned socials */}
      <div className="mx-auto hidden w-full max-w-[1920px] flex-col gap-12 md:flex">
        <div className="flex w-full items-start justify-between">
          <ProjectCTA />

          <div className="flex w-[298px] flex-col items-center text-[18px] font-normal uppercase leading-[1.1] tracking-[-0.04em] text-white">
            {SOCIAL_LEFT.map((label) => (
              <a
                key={label}
                href="#"
                className="transition-opacity hover:opacity-70"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex w-[298px] flex-col items-end text-[18px] font-normal uppercase leading-[1.1] tracking-[-0.04em] text-white">
            {SOCIAL_RIGHT.map((label) => (
              <a
                key={label}
                href="#"
                className="transition-opacity hover:opacity-70"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Hairline divider */}
        <hr className="border-t border-white" />

        {/* BOTTOM — giant wordmark + vertical credit + legal links */}
        <div className="flex w-full items-end justify-between">
          {/* Giant H.Studio with vertical credit overlay; container clips on
              the right so the wordmark bleeds into the page edge */}
          <div className="relative h-[219px] w-[1093px] overflow-clip">
            {/* Vertical [ Coded By Claude ] on the far left */}
            <p
              className="absolute left-0 top-1/2 -translate-y-1/2 origin-center font-mono text-sm uppercase leading-[1.1] text-white [writing-mode:vertical-rl] [transform:translateY(-50%)_rotate(180deg)]"
              style={{ writingMode: "vertical-rl" }}
            >
              [ Coded By Claude ]
            </p>

            {/* Wordmark — anchored just inside the container's left edge so
                it bleeds past the right edge into the page margin */}
            <p className="absolute bottom-0 left-[5px] whitespace-nowrap font-semibold capitalize leading-[0.8] tracking-[-0.06em] text-white text-[clamp(180px,20vw,290px)]">
              H.Studio
            </p>
          </div>

          {/* Legal links bottom-right */}
          <div className="flex items-center gap-[34px] pb-8 text-xs font-normal uppercase leading-[1.1] tracking-[-0.04em] text-white">
            <a href="#" className="underline transition-opacity hover:opacity-70">
              Licences
            </a>
            <a href="#" className="underline transition-opacity hover:opacity-70">
              Privacy policy
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE — stacked layout */}
      <div className="flex flex-col gap-12 md:hidden">
        <div className="flex flex-col gap-6">
          <ProjectCTA />

          {/* All four social links stacked, left-aligned */}
          <div className="flex w-full flex-col gap-3 text-[18px] font-normal uppercase leading-[1.1] tracking-[-0.04em] text-white">
            {[...SOCIAL_LEFT, ...SOCIAL_RIGHT].map((label) => (
              <a
                key={label}
                href="#"
                className="transition-opacity hover:opacity-70"
              >
                {label}
              </a>
            ))}
          </div>

          <hr className="border-t border-white" />
        </div>

        {/* Bottom on mobile — centered legal then credit + wordmark */}
        <div className="flex flex-col gap-4 overflow-clip">
          <div className="flex items-center justify-center gap-[34px] pb-2 text-xs font-normal uppercase leading-[1.1] tracking-[-0.04em] text-white">
            <a href="#" className="underline transition-opacity hover:opacity-70">
              Licences
            </a>
            <a href="#" className="underline transition-opacity hover:opacity-70">
              Privacy policy
            </a>
          </div>
          <p className="font-mono text-[10px] uppercase leading-[1.1] text-white">
            [ Coded By Claude ]
          </p>
          <p className="whitespace-nowrap font-semibold capitalize leading-[0.8] tracking-[-0.06em] text-white text-[91px]">
            H.Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
