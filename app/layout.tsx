import type { Metadata } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import "./globals.css";
import { brand } from "@/data/copy";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${brand.name} — Lead Generation & Call Center Solutions`,
  description:
    "Exclusive real-time and aged leads across mortgage, legal, home services, and business lending — plus call center staffing and dialer solutions.",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
