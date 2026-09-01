import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/ui/Icon";
import { industries } from "@/data/copy";
import AdamPrompt from "@/components/ui/AdamPrompt";

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={industries.eyebrow}
          heading={industries.heading}
          intro={industries.intro}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 70} className="h-full">
              <article className="tile h-full">
                <span className="tile__icon">
                  <Icon name={item.icon} />
                </span>
                <h3 className="tile__title">{item.name}</h3>
                <p className="tile__body">
                  <AdamPrompt>{item.description}</AdamPrompt>
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
