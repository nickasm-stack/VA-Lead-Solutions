import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import { brand, contact } from "@/data/copy";
import { hasRealPhone } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-va-gradient py-20 md:py-28">
      <Container className="text-center">
        <SectionHeading
          eyebrow={contact.eyebrow}
          heading={contact.heading}
          intro={contact.body}
          invert
          center
        />

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center gap-5">
            <a
              href={brand.phoneHref}
              className="link-underline font-display text-3xl text-white md:text-4xl"
            >
              <span className={hasRealPhone ? undefined : "pending"}>
                {brand.phoneDisplay}
              </span>
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
