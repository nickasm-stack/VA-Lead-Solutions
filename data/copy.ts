// ─────────────────────────────────────────────────────────────────────────
// SITE COPY — everything editable lives here.
//
// Anything wrapped like [THIS] is a placeholder that needs a real answer
// from Adam before launch. Search this file for "[" to find every one of
// them in one pass. Nothing else in the codebase needs to change once
// these are filled in.
// ─────────────────────────────────────────────────────────────────────────

export const brand = {
  name: "VA Lead Solutions",
  phoneDisplay: "1-800-000-0000", // ⚠️ PLACEHOLDER — swap for the real number
  phoneHref: "tel:+18000000000", // ⚠️ update to match phoneDisplay once real
  email: "Info@valeadsolutions.com",
  addressLine: "[CITY, STATE — Adam to confirm business address, or omit if none to share]",
};

export const nav = {
  links: [
    { label: "Leads", href: "#leads" },
    { label: "Call Center Solutions", href: "#call-center" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],
};

export const hero = {
  eyebrow: "Lead Generation & Call Center Solutions",
  headline: "Qualified leads. Reliable call support.",
  subheadline:
    "VA Lead Solutions provides exclusive real-time and aged leads, along with call center staffing and dialer solutions, for businesses that need consistent, qualified pipeline.",
  cta: "Call for pricing",
};

export const leads = {
  heading: "Leads",
  intro:
    "Two ways to buy, four industries we serve. Pricing depends on volume, exclusivity, and industry — call for a quote.",
  types: [
    {
      name: "Exclusive Real-Time Leads",
      description:
        "Delivered the moment they're generated, sold to you and no one else. [Adam: confirm delivery method — e.g. \"delivered within minutes via API, CRM integration, or live transfer\"] [Adam: confirm typical delivery speed, e.g. \"within 60 seconds of generation\"].",
    },
    {
      name: "Aged Leads",
      description:
        "A lower-cost way to expand outreach volume, pulled from [Adam: confirm aged lead age range, e.g. \"30–90 days old\"] and [Adam: confirm sourcing/vetting process, e.g. \"re-verified before resale\"].",
    },
  ],
  industries: ["Mortgage", "Legal", "Home Services", "Business Lending"],
};

export const callCenter = {
  heading: "Call Center Solutions",
  intro:
    "Staffing and technology to support your outbound and inbound calling, without building the infrastructure yourself.",
  items: [
    {
      name: "Onshore & Offshore Agents",
      description:
        "Trained call center agents available [Adam: confirm hours/timezone coverage, e.g. \"across all U.S. time zones, with 24/7 coverage available\"]. [Adam: confirm agent locations — which onshore and offshore regions?] [Adam: confirm minimum seat/agent commitment, if any].",
    },
    {
      name: "AI Agent Alternatives",
      description:
        "[Adam: what specifically makes this a \"better alternative\" than typical AI agents? e.g. higher connect rate, human escalation path, custom scripting, faster response time — needs a real, specific claim, not a generic one].",
    },
    {
      name: "Dialer Solutions",
      description:
        "[Adam: confirm dialer type/platform — e.g. predictive dialer, power dialer, specific software name] [Adam: confirm any compliance features worth naming, e.g. TCPA-compliant, DNC scrubbing].",
    },
  ],
};

export const whyUs = {
  heading: "Why VA Lead Solutions",
  // This paragraph is the one section that most needs Adam's real input —
  // keep it short (2–3 sentences) once filled in, not a wall of text.
  body:
    "[Adam: fill in 2–3 real, specific details — e.g. \"Founded in [YEAR]\", \"[X] leads delivered to date\", \"[X] active clients across mortgage, legal, home services, and business lending\", any compliance certifications (TCPA, DNC scrubbing, TrustedForm/Jornaya), or what makes VA Lead Solutions' leads or agents different from competitors. Real, checkable specifics only — no invented stats.]",
};

export const contact = {
  heading: "Get pricing",
  body:
    "Pricing depends on lead type, volume, exclusivity, and industry. Call or email and we'll put together a quote.",
  callLabel: "Call",
  emailLabel: "Email",
};

export const footer = {
  tagline: "Lead generation and call center solutions.",
  copyrightName: brand.name,
};
