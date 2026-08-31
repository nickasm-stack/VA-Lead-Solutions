import Container from "@/components/ui/Container";
import { callCenter } from "@/data/copy";

export default function CallCenterSolutions() {
  return (
    <section id="call-center" className="bg-mist py-20 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-ink-950 md:text-4xl">
            {callCenter.heading}
          </h2>
          <p className="mt-4 leading-relaxed text-charcoal/85">{callCenter.intro}</p>
        </div>

        <div className="mt-12 divide-y divide-line border-t border-line">
          {callCenter.items.map((item) => (
            <div
              key={item.name}
              className="grid grid-cols-1 gap-2 py-7 md:grid-cols-[280px,1fr] md:gap-10"
            >
              <h3 className="font-display text-xl text-ink-950">{item.name}</h3>
              <p className="text-sm leading-relaxed text-charcoal/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
