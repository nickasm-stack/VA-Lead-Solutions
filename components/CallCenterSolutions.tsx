import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/ui/Icon";
import { callCenter } from "@/data/copy";

export default function CallCenterSolutions() {
  return (
    <section id="call-center" className="bg-ink-950 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={callCenter.eyebrow}
          heading={callCenter.heading}
          intro={callCenter.intro}
          invert
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {callCenter.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 80} className="h-full">
              <article className="tile tile--dark h-full">
                <span className="tile__icon tile__icon--dark">
                  <Icon name={item.icon} />
                </span>
                <h3 className="tile__title tile__title--dark">{item.name}</h3>
                <p className="tile__body tile__body--dark">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
