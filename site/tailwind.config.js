/** @type {import('tailwindcss').Config} */

const primaryHue = 0;
const secondaryHue = 170;

module.exports = {
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "hsla(0,0%,0%,0)",
      //primary
      p: {
        0: `hsla(${primaryHue}, 0%, 0%, 1)`,
        1: `hsla(${primaryHue}, 0%, 7%, 1)`,
        2: `hsla(${primaryHue}, 0%, 18%, 1)`,
        3: `hsla(${primaryHue}, 0%, 27%, 1)`,
        4: `hsla(${primaryHue}, 0%, 36%, 1)`,

        5: `hsla(${primaryHue}, 0%, 50%, 1)`,
        6: `hsla(${primaryHue}, 0%, 66%, 1)`,
        7: `hsla(${primaryHue}, 0%, 73%, 1)`,
        8: `hsla(${primaryHue}, 0%, 83%, 1)`,
        9: `hsla(${primaryHue}, 0%, 91%, 1)`,
        10: `hsla(${primaryHue}, 0%, 100%, 1)`,
      },

      //secondary
      s: {
        0: `hsla(${secondaryHue}, 60%, 5%, 1)`,
        1: `hsla(${secondaryHue}, 60%, 9%, 1)`,
        2: `hsla(${secondaryHue}, 60%, 18%, 1)`,
        3: `hsla(${secondaryHue}, 60%, 27%, 1)`,
        4: `hsla(${secondaryHue}, 60%, 36%, 1)`,

        5: `hsla(${secondaryHue}, 65%, 57%, 1)`,
        6: `hsla(${secondaryHue}, 65%, 66%, 1)`,
        7: `hsla(${secondaryHue}, 65%, 73%, 1)`,
        8: `hsla(${secondaryHue}, 70%, 82%, 1)`,
        9: `hsla(${secondaryHue}, 70%, 91%, 1)`,
        10: `hsla(${secondaryHue}, 100%, 95%, 1)`,
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Playfair Display", "serif"],
      mono: ["Spline Sans Mono", "monospace"],
    },
    extend: {
      zIndex: {
        max: "100",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair-serif)"],
        mono: ["var(--font-spline-mono)"],
      },
    },
  },
  plugins: [
    require("tailwindcss-bg-patterns"),
    require("@tailwindcss/typography"),
  ],
};
