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
    "Real-time and aged leads, trained agents, and dialer infrastructure from one partner, so your sales team always has qualified pipeline in front of it.",
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
    "Two ways to buy across every vertical we cover. Pricing is set by lead type, volume, exclusivity, and industry, so every campaign is quoted against your criteria rather than a fixed rate card.",
  types: [
    {
      name: "Real-Time Leads",
      icon: "bolt" as const,
      description:
        "Delivered the moment they are generated, so your team reaches the consumer while intent is still high.",
      points: [
        "Posted to your CRM by API in real time, or routed to your floor as a live transfer",
        "Scheduled CSV or Dropbox delivery available where batch intake fits your workflow better",
        "Exclusive to you, or semi-exclusive across two to three buyers. Confirmed before purchase, never after",
      ],
    },
    {
      name: "Aged Leads",
      icon: "layers" as const,
      description:
        "A cost-efficient way to scale outreach volume when you have the agent capacity to work it.",
      points: [
        "Available at 1 to 7 days, 30 to 90 days, and older tiers depending on the vertical",
        "Priced by age, so older records carry a lower cost per lead",
        "Age and price disclosed upfront on every order",
      ],
    },
  ],
};

export const industries = {
  eyebrow: "Coverage",
  heading: "Industries we serve",
  intro:
    "Qualification criteria, screening, and agent scripting are built per vertical. Four of the twenty-plus industries we cover:",
  items: [
    {
      name: "Mortgage",
      icon: "home" as const,
      description:
        "Purchase and refinance leads, filterable by credit score, LTV, loan balance, property value, and loan type across VA, FHA, and conventional.",
    },
    {
      name: "Legal",
      icon: "scale" as const,
      description:
        "Mass tort, personal injury, disability, and tax debt intake.",
    },
    {
      name: "Home Services",
      icon: "wrench" as const,
      description: "Roofing, solar, HVAC, and window replacement.",
    },
    {
      name: "Business Lending",
      icon: "briefcase" as const,
      description:
        "Merchant cash advance and short-term working capital, for businesses that need funding faster than a conventional loan process allows.",
    },
  ],
};

export const callCenter = {
  eyebrow: "Capacity",
  heading: "Call Center Solutions",
  intro:
    "Trained agents and dialer infrastructure that scale with your campaign, without the cost of building a floor of your own.",
  items: [
    {
      name: "Onshore & Offshore Agents",
      icon: "headset" as const,
      description:
        "Onshore agents based in Michigan, available 8am to midnight ET, alongside offshore centers in South America, India, Belize, the Philippines, and Mexico. Agents are matched to the role rather than assigned at random, because sales, answering service, and intake each demand a different skill set. No minimum seat commitment.",
    },
    {
      name: "Real Agents, Not AI",
      icon: "spark" as const,
      description:
        "Every call is handled by a trained person. We have benchmarked our agents against AI dialers repeatedly, and they consistently outperform them at a cost that stays competitive with automation.",
    },
    {
      name: "Dialer Solutions",
      icon: "phone" as const,
      description:
        "We operate on every major dialer platform, including VICIdial and Five9, so campaigns run on the stack you already use.",
    },
  ],
};

export const process = {
  eyebrow: "How it works",
  heading: "From criteria to closed",
  intro:
    "The same four steps whether you are buying leads, agent capacity, or both.",
  // A real sequence, so the steps are numbered.
  steps: [
    {
      name: "Define your criteria",
      description:
        "Industry, geography, volume, and what qualifies a lead for your sales team. Minimum spend is typically $5,000, with pilot programs available from $1,500.",
    },
    {
      name: "We build the campaign",
      description:
        "Sourcing, script development, compliance review, and a test batch. You get progress updates throughout, not just a delivery date.",
    },
    {
      name: "Delivery begins",
      description:
        "Most campaigns are live within 48 hours. Aged lead orders can begin delivering in as little as 12.",
    },
    {
      name: "We optimize on your data",
      description:
        "Call recordings and disposition reporting come back to us, and every lead is traced to its source. Performance becomes measurable instead of assumed.",
    },
  ],
};

export const whyUs = {
  eyebrow: "Why us",
  heading: "Why VA Lead Solutions",
  intro:
    "A team with more than 100 years of combined experience, and years of testing behind every campaign we run.",
  points: [
    {
      name: "Exclusivity on your terms",
      icon: "lock" as const,
      description:
        "Buy a lead sold only to you, or take a semi-exclusive shared across two to three buyers at a lower cost. You know which you are getting before you commit.",
    },
    {
      name: "Leads and agents from one partner",
      icon: "link" as const,
      description:
        "Most vendors sell one or the other. Sourcing both from one partner removes the handoff between whoever generates the lead and whoever calls it.",
    },
    {
      name: "Documented consent",
      icon: "shield" as const,
      description:
        "Every lead ships with a TrustedForm or Jornaya certificate recording the consumer's consent at the point of capture. DNC scrubbing is available on request.",
    },
    {
      name: "Pricing that scales",
      icon: "tag" as const,
      description:
        "Rates move with volume, exclusivity, and industry, so growing campaigns are not billed against a flat rate card.",
    },
  ],
};

export const faq = {
  eyebrow: "Questions",
  heading: "Frequently asked",
  items: [
    {
      q: "What does a lead cost?",
      a: "Cost is driven by lead type, volume, exclusivity, and industry, so we quote against your criteria rather than publishing a rate card. Minimum spend is typically $5,000, with pilot programs available from $1,500. Call or email us and we will price your campaign.",
    },
    {
      q: "How are leads delivered?",
      a: "Real-time leads post directly to your CRM by API as they are generated, or arrive as a live transfer to your floor when the lead originates on a call. Scheduled CSV and Dropbox delivery are available where batch intake suits your workflow better.",
    },
    {
      q: "What happens if a lead is bad?",
      a: "The replacement policy depends on the price point, and we confirm which applies before you order. High-volume leads priced under a dollar are sold as delivered, with that variance already built into the price. On higher-value leads, where a single record can reach $80, credits are reviewed case by case.",
    },
    {
      q: "Is there a minimum order or contract?",
      a: "There is no contract term and no lock-in. Minimum spend is typically $5,000, and we run pilot programs from $1,500 for buyers who want to prove the fit first.",
    },
    {
      q: "What compliance documentation comes with each lead?",
      a: "Every lead is delivered with a TrustedForm or Jornaya certificate documenting the consumer's consent at the moment it was captured. DNC scrubbing is available on request. Obligations that attach to the party placing the call, including time-of-day restrictions and your internal do-not-call list, remain with the buyer.",
    },
    {
      q: "Can I buy agents without buying leads?",
      a: "Yes. Many clients contract agents alone, and there is no minimum seat commitment.",
    },
  ],
};

export const contact = {
  eyebrow: "Get started",
  heading: "Get pricing",
  body:
    "Pricing is set by lead type, volume, exclusivity, and industry. Call or email us with your criteria and we will put a quote together.",
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
