// ─────────────────────────────────────────────────────────────────────────
// SITE COPY: everything editable lives here.
//
// Every [bracketed] item is a question for Adam. Search this file for "["
// to find them all in one pass. Nothing else in the codebase needs to change
// once the answers are in.
// ─────────────────────────────────────────────────────────────────────────

export const brand = {
  name: "VA Lead Solutions",
  phoneDisplay: "1-800-000-0000", // PLACEHOLDER: real number goes here
  phoneHref: "tel:+18000000000", // update to match phoneDisplay
  email: "Info@valeadsolutions.com",
  address: {
    street: "30095 Northwestern Highway",
    suite: "Suite 10A",
    city: "Farmington Hills",
    state: "MI",
    zip: "48334",
    country: "US",
  },
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
  // The value slot stays short so the strip keeps its shape; the question
  // sits in the label.
  trust: [
    { value: "?", label: "[Leads delivered to date?]" },
    { value: "?", label: "[Active clients?]" },
    { value: "4", label: "Industries served" },
    { value: "?", label: "[Years in business?]" },
  ],
};

export const leads = {
  heading: "Leads",
  eyebrow: "What we sell",
  intro:
    "Two ways to buy, four industries we serve. Pricing depends on volume, exclusivity, and industry. Call for a quote.",
  types: [
    {
      name: "Exclusive Real-Time Leads",
      icon: "bolt" as const,
      description:
        "Delivered the moment they're generated, sold to you and no one else.",
      points: [
        "[How are real-time leads delivered: API, CRM integration, live transfer?]",
        "[How quickly do they arrive after being generated?]",
        "Sold once, never resold",
      ],
    },
    {
      name: "Aged Leads",
      icon: "layers" as const,
      description:
        "A lower-cost way to expand outreach volume when you have the capacity to work them.",
      points: [
        "[How old are aged leads, typically?]",
        "[How are they sourced and vetted before resale?]",
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
      description: "[What defines a mortgage lead: purchase or refinance, credit band, LTV?]",
    },
    {
      name: "Legal",
      icon: "scale" as const,
      description: "[Which case types do you cover: mass tort, personal injury, disability?]",
    },
    {
      name: "Home Services",
      icon: "wrench" as const,
      description: "[Which trades do you cover: roofing, solar, HVAC, windows?]",
    },
    {
      name: "Business Lending",
      icon: "briefcase" as const,
      description: "[What defines a business lending lead: revenue floor, time in business?]",
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
        "Trained call center agents. [What hours and time zones do you cover? Which onshore and offshore regions are agents based in? Is there a minimum seat commitment?]",
    },
    {
      name: "AI Agent Alternatives",
      icon: "spark" as const,
      description:
        "[What makes this a better alternative to typical AI agents: connect rate, human escalation, custom scripting, response time?]",
    },
    {
      name: "Dialer Solutions",
      icon: "phone" as const,
      description:
        "[Which dialer platform do you use: predictive, power, or a named product? Which compliance features should we name: TCPA, DNC scrubbing?]",
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
        "Industry, geography, volume, and what a qualified lead looks like for your team. [Is there a minimum order?]",
    },
    {
      name: "We build the campaign",
      description:
        "[What happens at this stage: sourcing, script development, compliance review, a test batch?]",
    },
    {
      name: "Leads and calls start",
      description: "[How long from agreement to first delivery?]",
    },
    {
      name: "We adjust on your feedback",
      description:
        "[How is performance reviewed, and how do filters get tuned: weekly calls, a dashboard, a replacement policy?]",
    },
  ],
};

export const whyUs = {
  eyebrow: "Why us",
  heading: "Why VA Lead Solutions",
  intro:
    "[What should this section say? Founding year, leads delivered to date, active clients, certifications, or what makes your leads and agents different from competitors.]",
  points: [
    {
      name: "Exclusive means exclusive",
      icon: "lock" as const,
      description: "Real-time leads are sold once. [Is that contractual?]",
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
        "[Which of these apply: TCPA compliance, DNC scrubbing, TrustedForm or Jornaya certificates, consent capture?]",
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
  note: "[Can you fill in these four numbers? If any of them aren't something you want published, tell us and we'll drop that tile.]",
  items: [
    { value: "?", label: "[Leads delivered to date?]" },
    { value: "?", label: "[Active clients?]" },
    { value: "?", label: "[Agents available?]" },
    { value: "?", label: "[Average delivery time?]" },
  ],
};

export const faq = {
  eyebrow: "Questions",
  heading: "Frequently asked",
  items: [
    {
      q: "What does a lead cost?",
      a: "Pricing depends on lead type, volume, exclusivity, and industry, so there's no flat rate card. Call and we'll quote against your criteria. [Do you want to publish a starting price, or keep it call-only?]",
    },
    {
      q: "How are exclusive leads delivered?",
      a: "[How are leads delivered, and how fast?]",
    },
    {
      q: "What happens if a lead is bad?",
      a: "[What is the replacement or credit policy, and how long do buyers have to report a bad lead?]",
    },
    {
      q: "Is there a minimum order or contract?",
      a: "[Is there a minimum spend, minimum volume, or contract length?]",
    },
    {
      q: "Are the leads TCPA compliant?",
      a: "[How is consent captured? Do TrustedForm or Jornaya certificates come with each lead, and is DNC scrubbing applied?]",
    },
    {
      q: "Can I buy agents without buying leads?",
      a: "[Can call center staffing be bought on its own, and is there a minimum seat commitment?]",
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
