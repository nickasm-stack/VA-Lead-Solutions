import Container from "@/components/ui/Container";
import { brand, footer } from "@/data/copy";

export default function Footer() {
  return (
    <footer className="bg-paper py-16">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr,1fr,1fr,1fr]">
          <div>
            <span className="font-display text-lg text-ink-950">{brand.name}</span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-charcoal/70">
              {footer.tagline}
            </p>
            <div className="mt-5 flex flex-col items-start gap-1.5 text-sm">
              <a href={brand.phoneHref} className="link-underline text-ink-950">
                {brand.phoneDisplay}
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="link-underline text-charcoal/70 hover:text-ink-950"
              >
                {brand.email}
              </a>
            </div>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal/50">
                {column.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="link-underline text-sm text-charcoal/80 hover:text-ink-950"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 border-t border-line pt-6">
          <p className="text-xs text-charcoal/50">
            &copy; {new Date().getFullYear()} {footer.copyrightName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
