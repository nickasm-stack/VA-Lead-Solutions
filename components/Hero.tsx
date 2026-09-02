import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import { brand, hero } from "@/data/copy";
import { isPending, hasRealPhone } from "@/lib/site";
import AdamPrompt from "@/components/ui/AdamPrompt";

export default function Hero() {
  return (
    <section className="bg-va-gradient">
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
              {hero.cta} &middot;{" "}
              <span className={hasRealPhone ? undefined : "pending"}>
                {brand.phoneDisplay}
              </span>
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
          <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-3">
            {hero.trust.map((item) => (
              <div key={item.label} className="trust">
                <dd className={`trust__value${isPending(item.value) ? " pending" : ""}`}>
                  {item.value}
                </dd>
                <dt className="trust__label">
                  <AdamPrompt>{item.label}</AdamPrompt>
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
