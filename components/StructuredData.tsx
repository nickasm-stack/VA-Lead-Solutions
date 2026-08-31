import { brand, faq } from "@/data/copy";
import { siteUrl, hasPlaceholder, hasRealPhone } from "@/lib/site";

/**
 * JSON-LD for the organisation and the FAQ.
 *
 * Every field here is a factual claim a search engine may surface directly,
 * so anything still carrying a bracketed placeholder is omitted rather than
 * published. Structured data that contradicts the page (or states a dummy
 * phone number) risks a manual action, and is worse than emitting nothing.
 */
export default function StructuredData() {
  const organization = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: brand.name,
    url: siteUrl,
    logo: `${siteUrl}/va-logo-web.png`,
    email: brand.email,
    ...(hasRealPhone && {
      telephone: brand.phoneDisplay,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: brand.phoneDisplay,
        email: brand.email,
        contactType: "sales",
        areaServed: "US",
        availableLanguage: "English",
      },
    }),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: brand.name,
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  // Only questions that have a real answer. A FAQPage whose answers read
  // "[Adam: confirm...]" would be eligible for rich results and show exactly
  // that text under the search listing.
  const answered = faq.items.filter(
    (item) => !hasPlaceholder(item.q) && !hasPlaceholder(item.a),
  );

  const faqPage =
    answered.length > 0
      ? [
          {
            "@type": "FAQPage",
            "@id": `${siteUrl}/#faq`,
            mainEntity: answered.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          },
        ]
      : [];

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website, ...faqPage],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is escaped for the one sequence that could
      // break out of the script element.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
