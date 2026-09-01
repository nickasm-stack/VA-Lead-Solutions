import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/ui/Icon";
import { whyUs } from "@/data/copy";
import AdamPrompt from "@/components/ui/AdamPrompt";

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-mist py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={whyUs.eyebrow}
          heading={whyUs.heading}
          intro={whyUs.intro}
        />

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {whyUs.points.map((point, i) => (
            <Reveal key={point.name} delay={i * 70} className="h-full">
              <div className="feature h-full">
                <span className="feature__icon">
                  <Icon name={point.icon} />
                </span>
                <div>
                  <h3 className="feature__title">{point.name}</h3>
                  <p className="feature__body">
                    <AdamPrompt>{point.description}</AdamPrompt>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
