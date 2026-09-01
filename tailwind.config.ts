import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sampled directly from the VA Lead Solutions logo gradient
        ink: {
          950: "#091116", // top of logo gradient: near-black navy
          800: "#172A37", // upper-mid gradient
          700: "#244254", // mid gradient
          600: "#3C677F", // bottom of logo gradient: teal-blue accent
        },
        teal: {
          DEFAULT: "#3C677F",
          light: "#5C89A0",
          dark: "#2A4A5C",
        },
        charcoal: "#4D4B4B", // wordmark gray, used for body copy
        paper: "#FFFFFF",
        mist: "#F4F6F7", // faint off-white for section separation
        line: "#E1E5E7",
      },
      fontFamily: {
        // Fallbacks live in app/layout.tsx, where next/font bakes them into
        // these variables. Repeating them here only duplicates the tail.
        display: ["var(--font-newsreader)"],
        body: ["var(--font-public-sans)"],
      },
      backgroundImage: {
        "va-gradient": "linear-gradient(180deg, #091116 0%, #172A37 45%, #244254 75%, #3C677F 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
