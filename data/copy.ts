// ─────────────────────────────────────────────────────────────────────────
// SITE COPY: everything editable lives here.
//
// Every [bracketed] item is a question for Adam. Search this file for "["
// to find them all in one pass. Nothing else in the codebase needs to change
// once the answers are in.
// ─────────────────────────────────────────────────────────────────────────

export const brand = {
  name: "VA Lead Solutions",
  // PLACEHOLDER until the real number arrives. lib/site.ts treats anything
  // that is not purely digits and phone punctuation as pending, which is what
  // keeps it flagged in red.
  phoneDisplay: "X-XXX-XXX-XXXX",
  // Points at the contact section while the number is unknown, so the call
  // buttons still go somewhere sensible. Change to `tel:+1...` alongside
  // phoneDisplay.
  phoneHref: "#contact",
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
    "VA Lead Solutions provides real-time and aged leads, along with call center staffing and dialer solutions, for businesses that need consistent, qualified pipeline.",
  cta: "Call for pricing",
  ctaSecondary: "See what we deliver",
  trust: [
    { value: "Millions", label: "Leads delivered" },
    { value: "20+", label: "Industries served" },
    { value: "100+", label: "Years combined experience" },
  ],
};

export const leads = {
  heading: "Leads",
  eyebrow: "What we sell",
  intro:
    "Two ways to buy, across the verticals we cover. Pricing depends on lead type, volume, exclusivity, and industry, so we quote against your criteria rather than a rate card.",
  types: [
    {
      name: "Real-Time Leads",
      icon: "bolt" as const,
      description:
        "Delivered as they are generated, so you reach people while they are still looking.",
      points: [
        "Posted by API in real time, or handed over as a live transfer when it is a call",
        "Scheduled delivery by CSV or Dropbox where that suits you better",
        "Exclusive, or semi-exclusive shared with two or three buyers. Agreed before you buy, never after",
      ],
    },
    {
      name: "Aged Leads",
      icon: "layers" as const,
      description:
        "A lower-cost way to expand outreach volume when you have the capacity to work them.",
      points: [
        "Aged 1 to 7 days, 30 to 90 days, or older, depending on the vertical",
        "Priced by age: the older the lead, the cheaper it is",
        "Age and price stated upfront, every time",
      ],
    },
  ],
};

export const industries = {
  eyebrow: "Coverage",
  heading: "Industries we serve",
  intro:
    "Lead criteria, screening, and agent scripting differ by vertical. These are four of the ones we cover.",
  items: [
    {
      name: "Mortgage",
      icon: "home" as const,
      description:
        "Purchase and refinance, filtered by credit score, LTV, loan balance, property value, and loan type including VA, FHA, and conventional.",
    },
    {
      name: "Legal",
      icon: "scale" as const,
      description: "Mass tort, personal injury, disability, and tax debt.",
    },
    {
      name: "Home Services",
      icon: "wrench" as const,
      description: "Roofing, solar, HVAC, and windows.",
    },
    {
      name: "Business Lending",
      icon: "briefcase" as const,
      description:
        "Primarily merchant cash advance, for businesses that need capital quickly rather than waiting out a long loan process.",
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
        "Onshore agents in Michigan, 8am to midnight ET. Offshore centers across South America, India, Belize, the Philippines, and Mexico, matched to the work rather than assigned at random: sales, answering service, and intake all call for something different. No minimum seat commitment.",
    },
    {
      name: "Real Agents, Not AI",
      icon: "spark" as const,
      description:
        "Every call is handled by a person. We have tested our agents head to head against AI several times and they outperform it every time, at a cost that competes with automation.",
    },
    {
      name: "Dialer Solutions",
      icon: "phone" as const,
      description:
        "We dial on all the major platforms, including VICIdial and Five9.",
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
        "Industry, geography, volume, and what a qualified lead looks like for your team. Minimum spend is usually $5,000, though we have started tests at $1,500.",
    },
    {
      name: "We build the campaign",
      description:
        "Sourcing, script development, compliance review, and a test batch. We do the legwork and keep you posted while we do it.",
    },
    {
      name: "Leads and calls start",
      description:
        "Most campaigns are live within 48 hours. Aged lead orders can start inside 12.",
    },
    {
      name: "We adjust on your feedback",
      description:
        "Calls and disposition reports. We trace leads back to their source, so what is converting and what is not stops being guesswork.",
    },
  ],
};

export const whyUs = {
  eyebrow: "Why us",
  heading: "Why VA Lead Solutions",
  intro:
    "Years in this industry and a lot of testing to find what actually works, behind a team with more than 100 years of combined experience.",
  points: [
    {
      name: "Exclusive or semi-exclusive, your call",
      icon: "lock" as const,
      description:
        "Buy a lead sold only to you, or a semi-exclusive shared with two or three buyers at a lower price. You know which one you are getting before you buy it.",
    },
    {
      name: "Leads and agents together",
      icon: "link" as const,
      description:
        "Most vendors sell one or the other. You can source the lead and the person who calls it from the same place.",
    },
    {
      name: "Consent on every lead",
      icon: "shield" as const,
      description:
        "Every lead ships with a TrustedForm or Jornaya certificate recording the consumer's consent at the point of capture. DNC scrubbing is available on request.",
    },
    {
      name: "Priced to your volume",
      icon: "tag" as const,
      description:
        "Pricing moves with volume, exclusivity, and industry rather than a flat rate card.",
    },
  ],
};

export const faq = {
  eyebrow: "Questions",
  heading: "Frequently asked",
  items: [
    {
      q: "What does a lead cost?",
      a: "It depends on lead type, volume, exclusivity, and industry, so there is no flat rate card. Minimum spend is usually $5,000, though we have started tests at $1,500. Call or email and we will quote against your criteria.",
    },
    {
      q: "How are leads delivered?",
      a: "Real-time leads post by API as they are generated, or come to you as a live transfer when it is a call. We can also deliver on a schedule by CSV or Dropbox if that fits your workflow better.",
    },
    {
      q: "What happens if a lead is bad?",
      a: "That depends on the price point, and we will tell you which applies before you buy. Most of what we sell is under a dollar per lead, priced on the assumption that not every one will land, and those are sold without replacement. On higher-value leads, where a single lead can run to $80, we can look at a credit.",
    },
    {
      q: "Is there a minimum order or contract?",
      a: "No contract length, and no lock-in. Minimum spend is usually $5,000, though we have run tests as small as $1,500 to prove the fit first.",
    },
    {
      q: "What compliance documentation comes with each lead?",
      a: "Every lead comes with a TrustedForm or Jornaya certificate, which records the consumer's consent at the moment it was given. DNC scrubbing is available on request. Calling obligations that sit with whoever places the call, such as time-of-day rules and your own internal do-not-call list, remain yours.",
    },
    {
      q: "Can I buy agents without buying leads?",
      a: "Yes. Plenty of clients take agents only, and there is no minimum number of seats.",
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
        { label: "Real-Time Leads", href: "#leads" },
        { label: "Aged Leads", href: "#leads" },
        { label: "Industries", href: "#industries" },
      ],
    },
    {
      title: "Call Center",
      links: [
        { label: "Onshore & Offshore Agents", href: "#call-center" },
        { label: "Real Agents, Not AI", href: "#call-center" },
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
