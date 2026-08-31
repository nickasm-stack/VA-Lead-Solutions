import Container from "@/components/ui/Container";
import { brand, footer } from "@/data/copy";

export default function Footer() {
  return (
    <footer className="bg-paper py-10">
      <Container className="flex flex-col items-center gap-3 text-center">
        <span className="font-display text-lg text-ink-950">{brand.name}</span>
        <p className="text-sm text-charcoal/70">{footer.tagline}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-charcoal/70">
          <a href={brand.phoneHref} className="hover:text-ink-950">
            {brand.phoneDisplay}
          </a>
          <span aria-hidden="true">·</span>
          <a href={`mailto:${brand.email}`} className="hover:text-ink-950">
            {brand.email}
          </a>
        </div>
        <p className="mt-2 text-xs text-charcoal/50">
          © {new Date().getFullYear()} {footer.copyrightName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
