import type { Config } from "tailwindcss";

const config = {
  darkMode: ["selector"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
