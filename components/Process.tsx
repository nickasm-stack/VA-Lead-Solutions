import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import { process } from "@/data/copy";
import AdamPrompt from "@/components/ui/AdamPrompt";

export default function Process() {
  return (
    <section id="process" className="bg-mist py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={process.eyebrow}
          heading={process.heading}
          intro={process.intro}
        />

        {/* Numbered because these are genuinely sequential: the order is
            information, not decoration. */}
        <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-line sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <Reveal as="li" key={step.name} delay={i * 80} className="step h-full">
              <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="step__title">{step.name}</h3>
              <p className="step__body">
                <AdamPrompt>{step.description}</AdamPrompt>
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
