/**
 * Inline line icons. Kept in the bundle rather than pulled from an icon
 * package so the set stays small and the stroke weight matches the type.
 */
export type IconName =
  | "bolt" | "layers" | "home" | "scale" | "wrench" | "briefcase"
  | "headset" | "spark" | "phone" | "lock" | "link" | "shield" | "tag";

const paths: Record<IconName, React.ReactNode> = {
  bolt: <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z" />,
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </>
  ),
  home: (
    <>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9.5Z" />
      <path d="M9.5 21v-6h5v6" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18" />
      <path d="M6 21h12" />
      <path d="M3 8h18" />
      <path d="m6.5 8-3 6h6l-3-6Z" />
      <path d="m17.5 8-3 6h6l-3-6Z" />
    </>
  ),
  wrench: <path d="M15 7a4 4 0 0 1 5.5 4.8l-8.7 8.7a2.1 2.1 0 0 1-3-3l8.7-8.7A4 4 0 0 1 15 7Z" />,
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="1.5" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
      <path d="M3 12h18" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
      <path d="M20 19v.5a2.5 2.5 0 0 1-2.5 2.5H13" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8.5 13.4 11l2.6 1-2.6 1-1.4 2.5L10.6 13 8 12l2.6-1L12 8.5Z" />
    </>
  ),
  phone: <path d="M6 3h3l1.5 4.5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2L20 14v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4 5.2 2 2 0 0 1 6 3Z" />,
  lock: (
    <>
      <rect x="4.5" y="10" width="15" height="11" rx="1.5" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  link: (
    <>
      <path d="M10.5 13.5a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1.5 1.5" />
      <path d="M13.5 10.5a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5L12 17" />
    </>
  ),
  shield: <path d="M12 3l7.5 3v5.5c0 4.5-3 8.2-7.5 9.5-4.5-1.3-7.5-5-7.5-9.5V6L12 3Z" />,
  tag: (
    <>
      <path d="M3 11.5V4.5A1.5 1.5 0 0 1 4.5 3h7l9 9-8 8-9.5-8.5Z" />
      <circle cx="8" cy="8" r="1.4" />
    </>
  ),
};

export default function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
