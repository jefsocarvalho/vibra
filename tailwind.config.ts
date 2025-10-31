import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: "#f6f1f9",
          100: "#ede3f3",
          200: "#d8c0e6",
          300: "#c3a0d8",
          400: "#ad7dcb",
          500: "#9560b5",
          600: "#74498e",
          700: "#543368",
          800: "#362042",
          900: "#1c1024"
        },
        gold: {
          100: "#fdf5e6",
          200: "#f9e0b7",
          300: "#f5cc89",
          400: "#f1b65b",
          500: "#eda02d"
        }
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(149, 96, 181, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
