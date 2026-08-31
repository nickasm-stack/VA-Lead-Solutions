import Image from "next/image";
import Container from "@/components/ui/Container";
import { brand, nav } from "@/data/copy";

export default function Header() {
  return (
    <header className="border-b border-line bg-paper">
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/va-logo.png"
            alt={brand.name}
            width={44}
            height={44}
            className="rounded-sm"
          />
          <span className="font-display text-lg tracking-tight text-ink-950">
            {brand.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-charcoal/80 transition-colors hover:text-ink-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={brand.phoneHref}
          className="rounded-sm bg-teal px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-dark"
        >
          {brand.phoneDisplay}
        </a>
      </Container>
    </header>
  );
}
