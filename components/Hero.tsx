import Container from "@/components/ui/Container";
import { brand, hero } from "@/data/copy";

export default function Hero() {
  return (
    <section className="bg-va-gradient">
      <Container className="py-20 md:py-28 text-center">
        <p className="text-sm font-medium tracking-wide text-teal-light/90 md:text-base">
          {hero.eyebrow}
        </p>

        <h1 className="mx-auto mt-5 max-w-3xl text-balance font-display text-4xl italic text-white sm:text-5xl md:text-6xl">
          {hero.headline}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-white/75 md:text-lg">
          {hero.subheadline}
        </p>

        <div className="mt-9">
          <a
            href={brand.phoneHref}
            className="inline-flex items-center justify-center rounded-sm bg-white px-7 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-white/90"
          >
            {hero.cta} · {brand.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
