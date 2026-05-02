import Image from "next/image";

/**
 * Services / Deliverables — black-on-white-text editorial section.
 *
 * Top row: "[ services ]" eyebrow.
 * Headline row: "[4]" left, "Deliverables" right (Inter Light, ~96px desktop / 32px mobile).
 * Then four DeliverableItem rows, each with a number marker, divider, title, blurb, and a 151px square thumbnail.
 *
 * Desktop layout per item: title left, blurb + image right (justify-between).
 * Mobile  layout per item: stacked vertically.
 */

type Deliverable = {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const ITEMS: ReadonlyArray<Deliverable> = [
  {
    number: "1",
    title: "Brand Discovery",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/service-1-brand-2x.avif",
    alt: "Brand discovery work sample",
  },
  {
    number: "2",
    title: "Web design & Dev",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/service-2-web-2x.avif",
    alt: "Web design and development work sample",
  },
  {
    number: "3",
    title: "Marketing",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/service-3-marketing-2x.avif",
    alt: "Marketing work sample",
  },
  {
    number: "4",
    title: "Photography",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/service-4-photography-2x.avif",
    alt: "Photography work sample",
  },
];

function DeliverableItem({ item }: { item: Deliverable }) {
  return (
    <div className="flex w-full flex-col gap-[9px]">
      {/* Number marker + divider */}
      <p className="font-mono text-sm uppercase leading-[1.1] text-white">
        [ {item.number} ]
      </p>
      <hr className="w-full border-t border-white" />

      {/* Content row — desktop: title left, blurb + image right.
          Mobile: stacked vertically. */}
      <div className="flex w-full flex-col items-start gap-4 md:flex-row md:items-start md:justify-between md:gap-6">
        <h3 className="font-bold italic uppercase tracking-[-0.04em] leading-[1.1] text-white text-[36px] md:text-[clamp(36px,2.5vw,48px)]">
          {item.title}
        </h3>

        {/* Right column on desktop — blurb + thumbnail side-by-side.
            Mobile — both children stack via flex-col. */}
        <div className="flex w-full flex-col items-start gap-4 md:w-auto md:flex-row md:items-start md:gap-6">
          <p className="text-sm font-normal leading-[1.3] tracking-[-0.04em] text-white md:w-[393px]">
            {item.description}
          </p>
          <div className="relative size-[151px] shrink-0 overflow-hidden">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="151px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="w-full bg-black px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-8 md:gap-12">
        {/* Eyebrow */}
        <p className="font-mono text-sm uppercase leading-[1.1] text-white">
          [ services ]
        </p>

        {/* Headline row: [4]  ←—→  Deliverables */}
        <div className="flex w-full items-center justify-between font-light uppercase tracking-[-0.08em] leading-none text-white text-[clamp(32px,6.7vw,140px)]">
          <span>[4]</span>
          <span>Deliverables</span>
        </div>

        {/* 4 deliverable rows */}
        <div className="flex w-full flex-col gap-12">
          {ITEMS.map((item) => (
            <DeliverableItem key={item.number} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
