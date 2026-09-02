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
    "We generate the leads and staff the agents who call them. One partner instead of three.",
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
    "Two ways to buy, priced to your criteria rather than a rate card.",
  types: [
    {
      name: "Real-Time Leads",
      icon: "bolt" as const,
      description:
        "Delivered at the moment of intent, while the consumer is still looking.",
      points: [
        "API post to your CRM, or a live transfer to your floor",
        "Scheduled CSV or Dropbox delivery on request",
        "Exclusive, or semi-exclusive across two to three buyers. Disclosed before you buy",
      ],
    },
    {
      name: "Aged Leads",
      icon: "layers" as const,
      description:
        "Volume outreach at a lower cost per lead, for teams with the agents to work it.",
      points: [
        "Tiers from 1 to 7 days, 30 to 90 days, and older",
        "Priced by age. Older records cost less",
        "Age and price stated on every order",
      ],
    },
  ],
};

export const industries = {
  eyebrow: "Coverage",
  heading: "Industries we serve",
  intro:
    "Criteria, screening, and scripting are built per vertical. Four of the twenty-plus industries we cover:",
  items: [
    {
      name: "Mortgage",
      icon: "home" as const,
      description:
        "Purchase and refinance, filtered on credit score, LTV, loan balance, property value, and loan type across VA, FHA, and conventional.",
    },
    {
      name: "Legal",
      icon: "scale" as const,
      description:
        "Mass tort, personal injury, disability, and tax debt.",
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
        "Merchant cash advance and working capital, for businesses that need funding faster than a conventional loan allows.",
    },
  ],
};

export const callCenter = {
  eyebrow: "Capacity",
  heading: "Call Center Solutions",
  intro:
    "Agents and dialers that scale with the campaign, without building a floor of your own.",
  items: [
    {
      name: "Onshore & Offshore Agents",
      icon: "headset" as const,
      description:
        "Onshore in Michigan, 8am to midnight ET. Offshore across South America, India, Belize, the Philippines, and Mexico. Agents are matched to the work, not assigned at random. No seat minimum.",
    },
    {
      name: "Real Agents, Not AI",
      icon: "spark" as const,
      description:
        "Every call is handled by a person. We have benchmarked our agents against AI repeatedly, and they win on conversion at comparable cost.",
    },
    {
      name: "Dialer Solutions",
      icon: "phone" as const,
      description:
        "We run on every major platform, VICIdial and Five9 included.",
    },
  ],
};

export const process = {
  eyebrow: "How it works",
  heading: "From criteria to closed",
  intro:
    "Four steps, whether you are buying leads, agents, or both.",
  // A real sequence, so the steps are numbered.
  steps: [
    {
      name: "Define your criteria",
      description:
        "Industry, geography, volume, and what counts as qualified for your team. Minimum spend is typically $5,000; pilots start at $1,500.",
    },
    {
      name: "Build the campaign",
      description:
        "Sourcing, scripting, compliance review, and a test batch, with progress updates throughout.",
    },
    {
      name: "Go live",
      description:
        "Most campaigns are live in 48 hours. Aged orders can start in 12.",
    },
    {
      name: "Optimize on your data",
      description:
        "Call recordings and dispositions come back to us, and every lead traces to its source. Performance gets measured, not assumed.",
    },
  ],
};

export const whyUs = {
  eyebrow: "Why us",
  heading: "Why VA Lead Solutions",
  intro:
    "More than 100 years of combined experience, and testing behind every campaign we run.",
  points: [
    {
      name: "Exclusivity on your terms",
      icon: "lock" as const,
      description:
        "Exclusive to you, or semi-exclusive across two to three buyers at lower cost. You know which before you buy.",
    },
    {
      name: "Leads and agents from one partner",
      icon: "link" as const,
      description:
        "Most vendors sell one or the other. Sourcing both here removes the handoff between who generates the lead and who calls it.",
    },
    {
      name: "Documented consent",
      icon: "shield" as const,
      description:
        "Every lead ships with a TrustedForm or Jornaya certificate recording consent at capture. DNC scrubbing on request.",
    },
    {
      name: "Pricing that scales",
      icon: "tag" as const,
      description:
        "Rates move with volume, exclusivity, and industry. No flat rate card.",
    },
  ],
};

export const faq = {
  eyebrow: "Questions",
  heading: "Frequently asked",
  items: [
    {
      q: "What does a lead cost?",
      a: "It depends on lead type, volume, exclusivity, and industry, so we quote against your criteria rather than a rate card. Minimum spend is typically $5,000, with pilots from $1,500.",
    },
    {
      q: "How are leads delivered?",
      a: "Real-time leads post to your CRM by API as they are generated, or arrive as a live transfer when the lead starts on a call. Scheduled CSV and Dropbox delivery are available on request.",
    },
    {
      q: "What happens if a lead is bad?",
      a: "It depends on the price point, and we confirm which applies before you order. Leads under a dollar are sold as delivered, with that variance priced in; on higher-value leads, where one record can reach $80, credits are reviewed case by case.",
    },
    {
      q: "Is there a minimum order or contract?",
      a: "No contract term and no lock-in. Minimum spend is typically $5,000, and we run pilots from $1,500 to prove the fit first.",
    },
    {
      q: "What compliance documentation comes with each lead?",
      a: "Every lead carries a TrustedForm or Jornaya certificate documenting consent at the moment it was captured, and DNC scrubbing is available on request. Obligations that attach to the party placing the call, including time-of-day rules and your internal do-not-call list, stay with the buyer.",
    },
    {
      q: "Can I buy agents without buying leads?",
      a: "Yes. Many clients contract agents only, and there is no seat minimum.",
    },
  ],
};

export const contact = {
  eyebrow: "Get started",
  heading: "Get pricing",
  body:
    "Tell us your criteria and we will quote against it. Call or email.",
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
