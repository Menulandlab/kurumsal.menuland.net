// tailwind.config.ts

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
        menuland: "#ff4d00",
      },
      // YENİ EKLENEN BÖLÜM
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;