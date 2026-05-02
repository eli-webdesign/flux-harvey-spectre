import Image from "next/image";

/**
 * Selected Work / Portfolio.
 *
 * Header row: a two-line "Selected / Work" wordmark (Inter Light) with a "004"
 * marker beside it and a vertical "[ portfolio ]" eyebrow on the far right.
 * Cards: four project cards each with a background image, two pill tags
 * floating in the lower-left of the image, and a title + arrow link below.
 * CTA card: italic invitation copy + "Let's talk" button, framed by L-shaped
 * corner brackets.
 *
 * Desktop: two columns with intentional vertical offset between them — left
 * col holds cards 1, 2, and the CTA; right col is padded down so cards 3, 4
 * sit visually in between the left col's beats. Mobile: all cards stacked.
 */

// ---- corner brackets (also used in IntroSection) ----
type Position = "tl" | "tr" | "bl" | "br";
const ROTATIONS: Record<Position, number> = { tl: 0, tr: 90, br: 180, bl: 270 };

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
      <path d="M0 12 L0 0 L12 0" />
    </svg>
  );
}

// ---- arrow icon (used on each project card) ----
function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <line x1="9" y1="23" x2="23" y2="9" />
      <polyline points="11,9 23,9 23,21" />
    </svg>
  );
}

// ---- project data ----
type Project = {
  title: string;
  tags: ReadonlyArray<string>;
  image: string;
  alt: string;
  // Aspect ratio used for the card's image area. Two values from Figma: 744h
  // ("tall") for cards 1 & 4, 699h ("short") for cards 2 & 3 — all on a
  // ~676px wide column.
  ratio: "tall" | "short";
};

const PROJECTS: ReadonlyArray<Project> = [
  {
    title: "Surfers paradise",
    tags: ["Social Media", "Photography"],
    image: "/portfolio-1-surfers-2x.avif",
    alt: "Yellow surfboard standing in beach sand",
    ratio: "tall",
  },
  {
    title: "Cyberpunk caffe",
    tags: ["Social Media", "Photography"],
    image: "/portfolio-2-cyberpunk-2x.avif",
    alt: "Person with glowing green visor against red lit backdrop",
    ratio: "short",
  },
  {
    title: "Agency 976",
    tags: ["Social Media", "Photography"],
    image: "/portfolio-3-agency-2x.avif",
    alt: "Portrait with glowing green visor against red backdrop",
    ratio: "short",
  },
  {
    title: "Minimal Playground",
    tags: ["Social Media", "Photography"],
    image: "/portfolio-4-minimal-2x.avif",
    alt: "Modern white architectural facade with green accent",
    ratio: "tall",
  },
];

const RATIO_CLASS: Record<Project["ratio"], string> = {
  tall: "aspect-[676/744]",
  short: "aspect-[676/699]",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex w-full flex-col gap-[10px]">
      {/* Image area with tag pills overlaid */}
      <div
        className={`relative w-full overflow-hidden ${RATIO_CLASS[project.ratio]}`}
      >
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4 flex gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center justify-center rounded-3xl bg-white/30 px-2 py-1 text-sm font-medium tracking-[-0.04em] text-[#111] backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Title + arrow link */}
      <div className="flex w-full items-center justify-between">
        <h3 className="font-black uppercase tracking-[-0.04em] leading-[1.1] text-black text-[clamp(20px,2vw,40px)] md:text-[clamp(24px,2.5vw,40px)]">
          {project.title}
        </h3>
        <ArrowUpRight className="size-8 shrink-0 text-black" />
      </div>
    </article>
  );
}

function CTACard() {
  return (
    <div className="flex w-full max-w-[465px] items-stretch gap-3">
      {/* Left corner column */}
      <div className="flex w-6 shrink-0 flex-col items-start justify-between text-[#1f1f1f]">
        <CornerBracket position="tl" />
        <CornerBracket position="bl" />
      </div>

      {/* Center: italic copy + CTA button */}
      <div className="flex flex-1 flex-col items-start justify-center gap-[10px] py-3">
        <p className="text-sm font-normal italic leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
          Discover how my creativity transforms ideas into impactful digital
          experiences — schedule a call with me to get started.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-3xl bg-black px-4 py-3 text-sm font-medium tracking-[-0.04em] text-white transition-opacity hover:opacity-90"
        >
          Let&rsquo;s talk
        </a>
      </div>

      {/* Right corner column */}
      <div className="flex w-6 shrink-0 flex-col items-end justify-between text-[#1f1f1f]">
        <CornerBracket position="tr" />
        <CornerBracket position="br" />
      </div>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section className="w-full bg-white px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-8 md:gap-[60px]">
        {/* HEADER */}
        {/* Mobile: vertical eyebrow + horizontal "Selected Work" with 004.
            Desktop: "Selected Work" wordmark + "004" inline, plus a
            -90°-rotated "[ portfolio ]" eyebrow at the far right. */}
        <div className="flex w-full items-start justify-between md:items-center">
          {/* Mobile eyebrow */}
          <div className="flex flex-col items-start gap-4 md:hidden">
            <p className="font-mono text-sm uppercase leading-[1.1] text-[#1f1f1f]">
              [ portfolio ]
            </p>
            <div className="flex w-full items-start justify-between">
              <div className="flex flex-col font-light uppercase tracking-[-0.08em] text-black text-[32px] leading-[0.86]">
                <span>Selected</span>
                <span>Work</span>
              </div>
              <p className="font-mono text-sm uppercase leading-[1.1] text-[#1f1f1f]">
                004
              </p>
            </div>
          </div>

          {/* Desktop wordmark */}
          <div className="hidden items-start gap-3 md:flex">
            <div className="flex flex-col font-light uppercase tracking-[-0.08em] text-black text-[clamp(48px,6.7vw,140px)] leading-[0.86]">
              <span>Selected</span>
              <span>Work</span>
            </div>
            <p className="mt-1 font-mono text-sm uppercase leading-[1.1] text-[#1f1f1f]">
              004
            </p>
          </div>

          {/* Desktop vertical eyebrow */}
          <p className="hidden font-mono text-sm uppercase leading-[1.1] text-[#1f1f1f] [writing-mode:vertical-rl] [transform:rotate(180deg)] md:block">
            [ portfolio ]
          </p>
        </div>

        {/* CARDS */}
        {/* MOBILE — single column stack of all 4 projects, then CTA */}
        <div className="flex flex-col gap-6 md:hidden">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
          <CTACard />
        </div>

        {/* DESKTOP — two columns. Left col: cards 1, 2, CTA stacked with
            equal-ish gaps. Right col: padded top so its cards visually
            interleave with the left col. */}
        <div className="hidden w-full items-start gap-6 md:flex">
          <div className="flex flex-1 flex-col gap-[120px]">
            <ProjectCard project={PROJECTS[0]} />
            <ProjectCard project={PROJECTS[1]} />
            <CTACard />
          </div>
          <div className="flex flex-1 flex-col gap-[117px] pt-[240px]">
            <ProjectCard project={PROJECTS[2]} />
            <ProjectCard project={PROJECTS[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
