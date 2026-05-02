import Image from "next/image";

/**
 * News & achievements.
 *
 * Light-gray (#f3f3f3) section with a rotated, two-line wordmark on the left
 * and three news cards on the right separated by thin vertical dividers.
 * The middle card is intentionally offset down (`md:pt-[120px]`) for visual
 * rhythm. Each card: image (header), short description, and a Read more link
 * with a small arrow-up-right icon.
 *
 * The mobile design link wasn't provided yet, so this falls back to a clean
 * vertical stack on small viewports.
 */

type NewsItem = {
  image: string;
  alt: string;
  description: string;
  href: string;
};

const NEWS: ReadonlyArray<NewsItem> = [
  {
    image: "/news-1-makerspace-2x.avif",
    alt: "Conference hall with crowd and Maker Space banner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "#",
  },
  {
    image: "/news-2-eames-2x.avif",
    alt: "Eames book lying on dark wood with green plant leaves",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "#",
  },
  {
    image: "/news-3-books-2x.avif",
    alt: "Stack of colorful design books on a shelf",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "#",
  },
];

function ArrowUpRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="13" x2="13" y2="5" />
      <polyline points="6,5 13,5 13,12" />
    </svg>
  );
}

function ReadMoreLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 border-b border-black py-1 text-sm font-medium tracking-[-0.04em] text-black transition-opacity hover:opacity-70"
    >
      Read more
      <ArrowUpRight />
    </a>
  );
}

function NewsCard({ item, offset }: { item: NewsItem; offset?: boolean }) {
  return (
    <article
      className={`flex w-full flex-col gap-4 md:w-[353px] md:shrink-0 ${
        offset ? "md:pt-[120px]" : ""
      }`}
    >
      <div className="relative aspect-[353/469] w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 100vw, 353px"
          className="object-cover"
        />
      </div>
      <p className="flex-1 text-sm font-normal leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
        {item.description}
      </p>
      <ReadMoreLink href={item.href} />
    </article>
  );
}

export function NewsSection() {
  return (
    <section className="w-full bg-[#f3f3f3] px-4 py-16 md:px-8 md:py-[120px]">
      <div className="mx-auto w-full max-w-[1920px]">
        {/* DESKTOP — rotated wordmark left, 3 cards with dividers right */}
        <div className="hidden w-full items-end justify-between md:flex">
          {/* Rotated wordmark column */}
          <div className="flex h-[706px] w-[110px] items-center justify-center">
            <div className="-rotate-90">
              <p className="whitespace-nowrap font-light uppercase tracking-[-0.08em] leading-[0.86] text-black text-[clamp(48px,4.5vw,80px)]">
                Keep up with my latest
              </p>
              <p className="whitespace-nowrap font-light uppercase tracking-[-0.08em] leading-[0.86] text-black text-[clamp(48px,4.5vw,80px)]">
                news &amp; achievements
              </p>
            </div>
          </div>

          {/* 3 cards with vertical dividers between them */}
          <div className="flex w-[1020px] items-stretch gap-[31px]">
            <NewsCard item={NEWS[0]} />
            <div
              aria-hidden
              className="w-px shrink-0 self-stretch bg-black"
            />
            <NewsCard item={NEWS[1]} offset />
            <div
              aria-hidden
              className="w-px shrink-0 self-stretch bg-black"
            />
            <NewsCard item={NEWS[2]} />
          </div>
        </div>

        {/* MOBILE — heading on top, single column of cards */}
        <div className="flex flex-col gap-8 md:hidden">
          <h2 className="font-light uppercase tracking-[-0.07em] leading-[0.86] text-black text-[clamp(32px,8vw,48px)]">
            Keep up with my latest
            <br />
            news &amp; achievements
          </h2>
          <div className="flex flex-col gap-10">
            {NEWS.map((item, i) => (
              <NewsCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
