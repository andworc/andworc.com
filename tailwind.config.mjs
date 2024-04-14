/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      display: [
        "InterDisplay",
        {
          fontFeatureSettings: '"cv11", "cv05"',
        },
      ],
      body: ["InterVariable", "Inter", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        accent: {
          low: "#009069",
          DEFAULT: "#009069",
          high: "009069",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
