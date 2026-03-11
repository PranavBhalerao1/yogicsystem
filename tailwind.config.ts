import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          50: "#fff8f2",
          100: "#ffe5d0",
          200: "#ffc79b",
          300: "#ffa264",
          400: "#ff8344",
          500: "#f76220",
          600: "#da4a18",
          700: "#a93713",
          800: "#77240e",
          900: "#4a1508"
        },
        earth: {
          50: "#f7f5f1",
          100: "#ebe7df",
          200: "#ddd8c7",
          300: "#cfc9b0",
          400: "#c3beaa",
          500: "#b5b199",
          600: "#99927e",
          700: "#7a775f",
          800: "#5b5a43",
          900: "#3e3d2c"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-merriweather)", "Georgia", "serif"]
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem"
      },
      boxShadow: {
        "card-soft": "0 20px 45px rgba(15, 23, 42, 0.1)"
      }
    }
  },
  plugins: []
};

export default config;
