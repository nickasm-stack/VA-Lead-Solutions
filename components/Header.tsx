"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import MobileNav from "@/components/MobileNav";
import { brand, nav } from "@/data/copy";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Header sits flush over the hero at rest and gains a border + shadow once
  // the page moves, so it reads as lifted rather than always-boxed.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <Container className="flex items-center justify-between py-3.5">
        <a href="#" className="group flex items-center gap-3" aria-label={brand.name}>
          <Image
            src="/va-logo-web.png"
            alt=""
            width={40}
            height={40}
            className="rounded-sm transition-transform duration-200 ease-out group-hover:scale-105 group-active:scale-100"
          />
          <span className="font-display text-lg text-ink-950 transition-colors duration-200 group-hover:text-teal">
            {brand.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm text-charcoal/80 hover:text-ink-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={brand.phoneHref}
            className="btn btn-primary hidden px-4 py-2.5 text-sm font-semibold sm:inline-flex"
          >
            {brand.phoneDisplay}
          </a>
          <MobileNav links={nav.links} />
        </div>
      </Container>
    </header>
  );
}
