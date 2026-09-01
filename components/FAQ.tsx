"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import { faq } from "@/data/copy";
import AdamPrompt from "@/components/ui/AdamPrompt";

export default function FAQ() {
  // Single-open accordion: opening one closes whichever was open.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={faq.eyebrow}
          heading={faq.heading}
          center
        />

        <div className="mx-auto mt-12 max-w-3xl">
          {faq.items.map((item, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div className="faq-item">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? null : i)}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-trigger-${i}`}
                      className="faq-trigger"
                    >
                      <span className="faq-question">
                        <AdamPrompt>{item.q}</AdamPrompt>
                      </span>
                      <span className="faq-icon" aria-hidden="true">
                        <span className="faq-icon__bar" />
                        <span className="faq-icon__bar faq-icon__bar--v" />
                      </span>
                    </button>
                  </h3>

                  {/* Height animates via grid-template-rows 0fr -> 1fr, so the
                      panel opens smoothly without measuring it in JS. */}
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${i}`}
                    className="faq-panel"
                    data-open={open ? "" : undefined}
                  >
                    <div className="faq-panel__inner">
                      <p className="faq-answer">
                        <AdamPrompt>{item.a}</AdamPrompt>
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
