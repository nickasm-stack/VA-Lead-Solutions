import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import { brand, hero } from "@/data/copy";

export default function Hero() {
  return (
    <section className="hero bg-va-gradient">
      <Container className="relative py-24 text-center md:py-32">
        <Reveal>
          <p className="eyebrow text-teal-light">
            {hero.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance font-display text-4xl italic text-white sm:text-5xl md:text-6xl">
            {hero.headline}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-white/75 md:text-lg">
            {hero.subheadline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={brand.phoneHref}
              className="btn btn-invert w-full px-7 py-3.5 text-sm font-semibold sm:w-auto"
            >
              {hero.cta} &middot; {brand.phoneDisplay}
            </a>
            <a
              href="#leads"
              className="btn btn-ghost w-full px-7 py-3.5 text-sm font-semibold sm:w-auto"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-4">
            {hero.trust.map((item) => (
              <div key={item.label} className="trust">
                <dd className="trust__value">{item.value}</dd>
                <dt className="trust__label">{item.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
