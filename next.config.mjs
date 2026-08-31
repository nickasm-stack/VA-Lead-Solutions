/** @type {import('next').NextConfig} */

/**
 * The site is static, has no forms, no user input, and no third-party
 * requests — it contacts only its own origin. These headers are therefore
 * defence in depth rather than mitigations for a known hole: they mainly
 * stop someone else's injected content from doing anything useful, and stop
 * the page being framed.
 *
 * NOTE: headers() only takes effect when a Next server (or Vercel) serves the
 * site. Behind a static export on S3/Netlify/Cloudflare these must be set on
 * the host instead — see README, "Security".
 */
const securityHeaders = [
  {
    // 'unsafe-inline' is required for scripts: Next inlines its hydration
    // payload, and a nonce-based policy needs middleware, which would make
    // every page dynamic. It still blocks script from any other origin,
    // which is the attack this actually defends against.
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self'",
      "connect-src 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  // Two years, and only meaningful once HTTPS is confirmed working on the
  // real domain. Preloading is deliberately not claimed here — see README.
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // The site asks for none of these; deny them so injected content cannot either.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
  { key: "X-DNS-Prefetch-Control", value: "off" },
];

const nextConfig = {
  reactStrictMode: true,
  // The only image on the site is a 40px logo, pre-sized to 160px in
  // public/va-logo-web.png. Leaving the optimizer on would expose
  // /_next/image, which answers arbitrary w/q permutations — each a
  // CPU-bound resize, and on Vercel a billed transformation. Off, it is not
  // reachable at all, and the site stays statically exportable.
  images: { unoptimized: true },
  // Don't advertise the framework and version to scanners.
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
