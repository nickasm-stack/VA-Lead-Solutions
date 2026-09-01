"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Small-screen navigation. The primary nav is hidden below `lg`, so without
 * this the section links are unreachable on a phone.
 */
export default function MobileNav({
  links,
}: {
  links: Array<{ label: string; href: string }>;
}) {
  const [open, setOpen] = useState(false);

  // Close on Escape, and don't let the page scroll behind the open panel.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  // CSS hides the panel at lg and up, but the scroll lock is not CSS. Without
  // this, rotating a tablet past the breakpoint with the menu open leaves the
  // page unscrollable and nothing visible to close.
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)");
    const closeIfWide = () => {
      if (wide.matches) setOpen(false);
    };

    closeIfWide();
    wide.addEventListener("change", closeIfWide);
    return () => wide.removeEventListener("change", closeIfWide);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="btn -mr-2 h-10 w-10 text-ink-950 hover:bg-mist"
      >
        {/* Three rules that fold into an X. */}
        <span className="relative block h-4 w-5" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={cn(
                "absolute left-0 block h-px w-full bg-current transition-all duration-200",
                i === 0 && (open ? "top-1/2 rotate-45" : "top-0"),
                i === 1 && cn("top-1/2", open && "opacity-0"),
                i === 2 && (open ? "top-1/2 -rotate-45" : "top-full"),
              )}
            />
          ))}
        </span>
      </button>

      <div
        id="mobile-nav"
        hidden={!open}
        className="absolute inset-x-0 top-full z-20 border-b border-line bg-paper shadow-lg"
      >
        <nav
          aria-label="Mobile"
          className="flex flex-col px-6 py-2"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/70 py-3.5 text-base text-charcoal/90 transition-colors last:border-0 hover:text-teal active:text-teal-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
