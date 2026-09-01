import Container from "@/components/ui/Container";
import Reveal from "@/components/Reveal";
import { stats } from "@/data/copy";
import { isPending } from "@/lib/site";
import AdamPrompt from "@/components/ui/AdamPrompt";

export default function Stats() {
  return (
    <section className="border-y border-line bg-paper py-16">
      <Container>
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 70} className="stat">
              <dt className="stat__label">{item.label}</dt>
              <dd className="stat__value">{item.value}</dd>
            </Reveal>
          ))}
        </dl>
        <Reveal>
          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-charcoal/80">
            <AdamPrompt>{stats.note}</AdamPrompt>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
