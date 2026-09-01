import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/ui/Icon";
import { leads } from "@/data/copy";
import AdamPrompt from "@/components/ui/AdamPrompt";

export default function Leads() {
  return (
    <section id="leads" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={leads.eyebrow}
          heading={leads.heading}
          intro={leads.intro}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {leads.types.map((type, i) => (
            <Reveal key={type.name} delay={i * 90} className="h-full">
              <article className="card-lead h-full">
                <span className="card-lead__icon">
                  <Icon name={type.icon} className="h-6 w-6" />
                </span>
                <h3 className="card-lead__title">{type.name}</h3>
                <p className="card-lead__body">{type.description}</p>
                <ul className="card-lead__list">
                  {type.points.map((point) => (
                    <li key={point}>
                      <span className="card-lead__dot" aria-hidden="true" />
                      <span>
                        <AdamPrompt>{point}</AdamPrompt>
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
