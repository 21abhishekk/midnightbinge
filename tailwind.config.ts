import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink:   "#0B2F3A",
        deep:  "#07222B",
        moon:  "#C85A32",
        ember: "#B34A24",
        mist:  "#0B2F3A",
        gold:  "#B34A24",
        rose:  "#9C1F63",
        sky:   "#17636D",
        "sky-dark": "#114C54",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body:    ["var(--font-body)"],
        script:  ["var(--font-script)"],
      },
    },
  },
} satisfies Config;
