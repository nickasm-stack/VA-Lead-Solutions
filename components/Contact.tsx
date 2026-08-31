import Container from "@/components/ui/Container";
import { brand, contact } from "@/data/copy";

export default function Contact() {
  return (
    <section id="contact" className="bg-va-gradient py-20 md:py-24">
      <Container className="text-center">
        <h2 className="font-display text-3xl text-white md:text-4xl">
          {contact.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-white/75">
          {contact.body}
        </p>

        <div className="mt-9 flex flex-col items-center gap-4">
          <a
            href={brand.phoneHref}
            className="font-display text-3xl text-white transition-opacity hover:opacity-80 md:text-4xl"
          >
            {brand.phoneDisplay}
          </a>
          <a
            href={`mailto:${brand.email}`}
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            {contact.emailLabel}: {brand.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
