import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import { brand, nav } from "@/data/copy";

export const metadata: Metadata = {
  title: `Page not found — ${brand.name}`,
  /**
   * Next injects its own noindex on not-found pages, and the root layout's
   * robots value is inherited alongside it. Without this override an
   * indexable build emits "noindex" and "index, follow" together on the same
   * page. Crawlers resolve that to the most restrictive, so the outcome is
   * right either way, but contradictory directives are not something to leave
   * in the markup. Declaring it here makes both tags agree.
   */
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-va-gradient">
          <Container className="py-28 text-center md:py-36">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-light">
              404
            </p>
            <h1 className="mx-auto mt-6 max-w-2xl text-balance font-display text-4xl italic text-white md:text-5xl">
              That page isn&rsquo;t here.
            </h1>
            <p className="mx-auto mt-6 max-w-md leading-relaxed text-white/75">
              The link may be out of date. Everything on this site lives on one
              page — pick a section below, or call and we&rsquo;ll point you the
              right way.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="/" className="btn btn-invert w-full px-7 py-3.5 text-sm font-semibold sm:w-auto">
                Back to the site
              </a>
              <a
                href={brand.phoneHref}
                className="btn btn-ghost w-full px-7 py-3.5 text-sm font-semibold sm:w-auto"
              >
                Call {brand.phoneDisplay}
              </a>
            </div>

            <nav aria-label="Sections" className="mt-14 border-t border-white/15 pt-8">
              <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
                {nav.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={`/${link.href}`}
                      className="link-underline text-sm text-white/75 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
