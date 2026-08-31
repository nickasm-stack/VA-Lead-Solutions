// ─────────────────────────────────────────────────────────────────────────
// SITE COPY — everything editable lives here.
//
// Anything wrapped like [THIS] is a placeholder that needs a real answer
// from Adam before launch. Search this file for "[" to find every one of
// them in one pass. Nothing else in the codebase needs to change once
// these are filled in.
//
// Nothing in this file invents a number, a client name, or a testimonial.
// Where a section needs one, the placeholder says so.
// ─────────────────────────────────────────────────────────────────────────

export const brand = {
  name: "VA Lead Solutions",
  phoneDisplay: "1-800-000-0000", // ⚠️ PLACEHOLDER — swap for the real number
  phoneHref: "tel:+18000000000", // ⚠️ update to match phoneDisplay once real
  email: "Info@valeadsolutions.com",
};

export const nav = {
  links: [
    { label: "Leads", href: "#leads" },
    { label: "Call Center", href: "#call-center" },
    { label: "How It Works", href: "#process" },
    { label: "Industries", href: "#industries" },
    { label: "FAQ", href: "#faq" },
  ],
};

export const hero = {
  eyebrow: "Lead Generation & Call Center Solutions",
  headline: "Qualified leads. Reliable call support.",
  subheadline:
    "VA Lead Solutions provides exclusive real-time and aged leads, along with call center staffing and dialer solutions, for businesses that need consistent, qualified pipeline.",
  cta: "Call for pricing",
  ctaSecondary: "See what we deliver",
  // Shown as a strip under the hero. These are claims, so they stay as
  // placeholders — see stats.note below.
  trust: [
    { value: "[X]", label: "Leads delivered" },
    { value: "[X]", label: "Active clients" },
    { value: "4", label: "Industries served" },
    { value: "[X]", label: "Years in business" },
  ],
};

export const leads = {
  heading: "Leads",
  eyebrow: "What we sell",
  intro:
    "Two ways to buy, four industries we serve. Pricing depends on volume, exclusivity, and industry — call for a quote.",
  types: [
    {
      name: "Exclusive Real-Time Leads",
      icon: "bolt" as const,
      description:
        "Delivered the moment they're generated, sold to you and no one else.",
      points: [
        '[Adam: confirm delivery method — e.g. "via API, CRM integration, or live transfer"]',
        '[Adam: confirm typical delivery speed, e.g. "within 60 seconds of generation"]',
        "Sold once, never resold",
      ],
    },
    {
      name: "Aged Leads",
      icon: "layers" as const,
      description:
        "A lower-cost way to expand outreach volume when you have the capacity to work them.",
      points: [
        '[Adam: confirm aged lead age range, e.g. "30–90 days old"]',
        '[Adam: confirm sourcing/vetting process, e.g. "re-verified before resale"]',
        "Priced below real-time volume",
      ],
    },
  ],
};

export const industries = {
  eyebrow: "Coverage",
  heading: "Industries we serve",
  intro:
    "Lead criteria, screening, and agent scripting differ by vertical. These are the four we cover.",
  items: [
    {
      name: "Mortgage",
      icon: "home" as const,
      description: "[Adam: confirm mortgage lead criteria — purchase, refinance, credit band, LTV?]",
    },
    {
      name: "Legal",
      icon: "scale" as const,
      description: "[Adam: confirm legal case types — mass tort, personal injury, disability?]",
    },
    {
      name: "Home Services",
      icon: "wrench" as const,
      description: "[Adam: confirm home services trades — roofing, solar, HVAC, windows?]",
    },
    {
      name: "Business Lending",
      icon: "briefcase" as const,
      description: "[Adam: confirm business lending criteria — revenue floor, time in business?]",
    },
  ],
};

export const callCenter = {
  eyebrow: "Capacity",
  heading: "Call Center Solutions",
  intro:
    "Staffing and technology to support your outbound and inbound calling, without building the infrastructure yourself.",
  items: [
    {
      name: "Onshore & Offshore Agents",
      icon: "headset" as const,
      description:
        'Trained call center agents available [Adam: confirm hours/timezone coverage, e.g. "across all U.S. time zones, with 24/7 coverage available"]. [Adam: confirm agent locations — which onshore and offshore regions?] [Adam: confirm minimum seat/agent commitment, if any].',
    },
    {
      name: "AI Agent Alternatives",
      icon: "spark" as const,
      description:
        '[Adam: what specifically makes this a "better alternative" than typical AI agents? e.g. higher connect rate, human escalation path, custom scripting, faster response time — needs a real, specific claim, not a generic one].',
    },
    {
      name: "Dialer Solutions",
      icon: "phone" as const,
      description:
        "[Adam: confirm dialer type/platform — e.g. predictive dialer, power dialer, specific software name] [Adam: confirm any compliance features worth naming, e.g. TCPA-compliant, DNC scrubbing].",
    },
  ],
};

export const process = {
  eyebrow: "How it works",
  heading: "From criteria to closed",
  intro:
    "The same four steps whether you're buying leads, agent capacity, or both.",
  // A real sequence, so the steps are numbered.
  steps: [
    {
      name: "Tell us your criteria",
      description:
        "Industry, geography, volume, and what a qualified lead looks like for your team. [Adam: confirm whether there is a minimum order].",
    },
    {
      name: "We build the campaign",
      description:
        "[Adam: confirm what happens here — sourcing, script development, compliance review, test batch?]",
    },
    {
      name: "Leads and calls start",
      description:
        "[Adam: confirm typical time from agreement to first delivery, e.g. \"within X business days\"].",
    },
    {
      name: "We adjust on your feedback",
      description:
        "[Adam: confirm how performance is reviewed and how filters get tuned — weekly calls, dashboard, replacement policy for bad leads?]",
    },
  ],
};

export const whyUs = {
  eyebrow: "Why us",
  heading: "Why VA Lead Solutions",
  // This section most needs Adam's real input. Each card below is a claim,
  // so each stays bracketed until he confirms it.
  intro:
    "[Adam: fill in 2–3 real, specific details — e.g. \"Founded in [YEAR]\", \"[X] leads delivered to date\", \"[X] active clients\", or what makes these leads or agents different from competitors. Real, checkable specifics only — no invented stats.]",
  points: [
    {
      name: "Exclusive means exclusive",
      icon: "lock" as const,
      description:
        "Real-time leads are sold once. [Adam: confirm this is accurate and whether it's contractual].",
    },
    {
      name: "Leads and agents together",
      icon: "link" as const,
      description:
        "Most vendors sell one or the other. You can source the lead and the person who calls it from the same place.",
    },
    {
      name: "Compliance",
      icon: "shield" as const,
      description:
        "[Adam: confirm which apply — TCPA compliance, DNC scrubbing, TrustedForm/Jornaya certificates, consent capture].",
    },
    {
      name: "Priced to your volume",
      icon: "tag" as const,
      description:
        "Pricing moves with volume, exclusivity, and industry rather than a flat rate card.",
    },
  ],
};

export const stats = {
  // ⚠️ Every value here is a placeholder. Do not replace these with estimates
  // or illustrative figures — a marketing site that states a number is making
  // a factual claim about the business. Fill in from Adam's real records, or
  // delete this section from app/page.tsx.
  note: "[Adam: these four numbers need to come from real records. If the numbers aren't ready, this whole section should come off the page rather than ship with estimates.]",
  items: [
    { value: "[X]", label: "Leads delivered to date" },
    { value: "[X]", label: "Active clients" },
    { value: "[X]", label: "Agents available" },
    { value: "[X]", label: "Average delivery time" },
  ],
};

export const faq = {
  eyebrow: "Questions",
  heading: "Frequently asked",
  items: [
    {
      q: "What does a lead cost?",
      a: "Pricing depends on lead type, volume, exclusivity, and industry, so there's no flat rate card. Call and we'll quote against your criteria. [Adam: confirm whether you want to publish a starting price or keep it call-only].",
    },
    {
      q: "How are exclusive leads delivered?",
      a: '[Adam: confirm delivery method and speed — e.g. "posted to your CRM via API within 60 seconds of generation, or delivered as a live transfer"].',
    },
    {
      q: "What happens if a lead is bad?",
      a: "[Adam: confirm the replacement or credit policy, and the window for reporting a bad lead. This is the single most common question buyers ask — it needs a real answer].",
    },
    {
      q: "Is there a minimum order or contract?",
      a: "[Adam: confirm minimum spend, minimum volume, and contract length, if any].",
    },
    {
      q: "Are the leads TCPA compliant?",
      a: "[Adam: confirm compliance posture — consent capture, TrustedForm/Jornaya certificates, DNC scrubbing. Answer precisely; this one carries legal weight].",
    },
    {
      q: "Can I buy agents without buying leads?",
      a: "[Adam: confirm whether call center staffing can be purchased standalone, and any minimum seat commitment].",
    },
  ],
};

export const contact = {
  eyebrow: "Get started",
  heading: "Get pricing",
  body:
    "Pricing depends on lead type, volume, exclusivity, and industry. Call or email and we'll put together a quote.",
  emailLabel: "Email",
};

export const footer = {
  tagline: "Lead generation and call center solutions.",
  copyrightName: brand.name,
  columns: [
    {
      title: "Leads",
      links: [
        { label: "Exclusive Real-Time", href: "#leads" },
        { label: "Aged Leads", href: "#leads" },
        { label: "Industries", href: "#industries" },
      ],
    },
    {
      title: "Call Center",
      links: [
        { label: "Onshore & Offshore Agents", href: "#call-center" },
        { label: "AI Agent Alternatives", href: "#call-center" },
        { label: "Dialer Solutions", href: "#call-center" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "How It Works", href: "#process" },
        { label: "Why Us", href: "#why-us" },
        { label: "FAQ", href: "#faq" },
      ],
    },
  ],
};
