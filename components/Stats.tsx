import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import { stats } from "@/data/copy";

export default function Stats() {
  return (
    <section className="border-y border-line bg-paper py-16">
      <Container>
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 70}>
              <div className="stat">
                <dt className="stat__label">{item.label}</dt>
                <dd className="stat__value">{item.value}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
        <Reveal>
          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-charcoal/45">
            {stats.note}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
