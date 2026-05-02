"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
] as const;

function HamburgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav className="relative flex w-full items-center justify-between py-6">
        {/* Brand */}
        <a
          href="/"
          className="text-base font-semibold capitalize tracking-[-0.04em] text-black"
        >
          H.Studio
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-14 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-base font-semibold capitalize tracking-[-0.04em] text-black transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden items-center justify-center rounded-3xl bg-black px-4 py-3 text-sm font-medium tracking-[-0.04em] text-white transition-opacity hover:opacity-90 md:inline-flex"
        >
          Let&rsquo;s talk
        </a>

        {/* Mobile menu open toggle */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex size-6 items-center justify-center text-black md:hidden"
        >
          <HamburgerIcon />
        </button>
      </nav>

      {/* Mobile menu overlay — fixed, full viewport, with its own header */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-50 bg-white transition-opacity duration-300 ease-out md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-4 pb-10">
          {/* Header bar inside overlay — H.Studio + close button */}
          <div className="flex items-center justify-between py-6">
            <a
              href="/"
              onClick={() => setOpen(false)}
              className="text-base font-semibold capitalize tracking-[-0.04em] text-black"
            >
              H.Studio
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex size-6 items-center justify-center text-black"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Links — large, stacked, vertically centered */}
          <ul className="flex flex-1 flex-col items-start justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-5xl font-medium capitalize tracking-[-0.04em] text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Bottom CTA */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex w-fit items-center justify-center rounded-3xl bg-black px-5 py-3 text-base font-medium tracking-[-0.04em] text-white"
          >
            Let&rsquo;s talk
          </a>
        </div>
      </div>
    </>
  );
}
