import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        axon: {
          dark: "#060A12",
          surface: "#0D1421",
          blue: "#2B7FFF",
          muted: "#8892A4",
          border: "#1A2740",
          light: "#F7F9FC",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Outfit", "system-ui", "sans-serif"],
      },
      boxShadow: {
        axon: "0 22px 70px rgba(6, 10, 18, 0.14)",
        glow: "0 22px 68px rgba(43, 127, 255, 0.16)",
      },
      backgroundImage: {
        "axon-grid":
          "linear-gradient(rgba(43,127,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(43,127,255,.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
