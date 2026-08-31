import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import { brand, contact } from "@/data/copy";

export default function Contact() {
  return (
    <section id="contact" className="bg-va-gradient py-20 md:py-28">
      <Container className="text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-light">
            {contact.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
            {contact.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-white/75">
            {contact.body}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center gap-5">
            <a
              href={brand.phoneHref}
              className="link-underline font-display text-3xl text-white md:text-4xl"
            >
              {brand.phoneDisplay}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="link-underline text-sm text-white/70 hover:text-white"
            >
              {contact.emailLabel}: {brand.email}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
