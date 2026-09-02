import type { Metadata } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import "./globals.css";
import { brand, hero } from "@/data/copy";
import { siteUrl, isIndexable } from "@/lib/site";
import StructuredData from "@/components/StructuredData";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  // Only the regular weight is used; the display face carries emphasis
  // through size and italic rather than through weight.
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  // Next ships a fixed table of font metrics used to synthesise a
  // size-adjusted fallback, and Newsreader is not in it, so every build
  // logged "Failed to find font override values" with an error glyph for
  // something it could not do anyway. Asking explicitly for no adjustment
  // stops the noise without changing behaviour: measured CLS is 0.0000
  // either way, because Newsreader and Georgia render this page's headings
  // at identical heights.
  adjustFontFallback: false,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "500", "600"],
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

const title = `${brand.name} | Lead Generation & Call Center Solutions`;
const description =
  "Real-time and aged leads across mortgage, legal, home services, and business lending, plus call center staffing and dialer solutions.";

export const metadata: Metadata = {
  // Required for canonical and Open Graph URLs to resolve to absolute ones.
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: brand.name,
  keywords: [
    "lead generation",
    "exclusive real-time leads",
    "aged leads",
    "call center solutions",
    "mortgage leads",
    "legal leads",
    "home services leads",
    "business lending leads",
  ],
  alternates: { canonical: "/" },
  // Flipped by NEXT_PUBLIC_SITE_INDEXABLE; see lib/site.ts.
  robots: isIndexable
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: brand.name,
    title,
    description,
    url: "/",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${brand.name}: ${hero.headline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
  formatDetection: { telephone: true, email: true, address: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${publicSans.variable}`}>
      <head>
        {/* Scroll-reveal elements are hidden by default in the stylesheet, so
            that they never flash in before animating. This puts them back for
            anyone browsing without JavaScript, where nothing would ever
            un-hide them. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: "[data-reveal]{opacity:1!important;transform:none!important}",
            }}
          />
        </noscript>
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}
