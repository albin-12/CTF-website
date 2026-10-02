import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0a0a0a",
        card: "#0f0f10",
        ctfGreen: {
          DEFAULT: "#10b981",
          bright: "#22c55e",
          glow: "rgba(34, 197, 94, 0.25)",
          dim: "rgba(16, 185, 129, 0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(circle at center, rgba(34, 197, 94, 0.12) 0%, transparent 70%)",
        "radial-dark": "radial-gradient(circle at 50% 30%, rgba(20, 20, 25, 0.6) 0%, rgba(5, 5, 5, 1) 100%)",
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.35em",
      },
    },
  },
  plugins: [],
};

export default config;
