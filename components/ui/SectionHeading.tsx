import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  heading,
  intro,
  invert = false,
  center = false,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  invert?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal>
      <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        {eyebrow && (
          <p
            className={`eyebrow ${invert ? "text-teal-light" : "text-teal"}`}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={`mt-3 text-balance font-display text-[32px] leading-tight md:text-[40px] ${
            invert ? "text-white" : "text-ink-950"
          }`}
        >
          {heading}
        </h2>
        {intro && (
          <p
            className={`mt-5 text-lg leading-relaxed ${
              invert ? "text-white/75" : "text-charcoal/85"
            }`}
          >
            {intro}
          </p>
        )}
      </div>
    </Reveal>
  );
}
