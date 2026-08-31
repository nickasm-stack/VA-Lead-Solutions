import Container from "@/components/ui/Container";
import { leads } from "@/data/copy";

export default function Leads() {
  return (
    <section id="leads" className="py-20 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-ink-950 md:text-4xl">
            {leads.heading}
          </h2>
          <p className="mt-4 leading-relaxed text-charcoal/85">{leads.intro}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {leads.types.map((type) => (
            <div key={type.name} className="border-l-2 border-teal pl-6">
              <h3 className="font-display text-xl text-ink-950">{type.name}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-charcoal/80">
                {type.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <p className="text-sm font-medium text-charcoal/70">Industries served</p>
          <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
            {leads.industries.map((industry, i) => (
              <span key={industry} className="flex items-center gap-8">
                <span className="font-display text-lg text-ink-950">{industry}</span>
                {i < leads.industries.length - 1 && (
                  <span className="hidden h-1 w-1 rounded-full bg-line md:inline-block" />
                )}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
