import Container from "@/components/ui/Container";
import { whyUs } from "@/data/copy";

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-ink-950 md:text-4xl">
            {whyUs.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-charcoal/85">
            {whyUs.body}
          </p>
        </div>
      </Container>
    </section>
  );
}
