/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },

  // ✔ Force Tailwind to use RGB colors (fixes react-to-pdf OKLCH error)
  safelist: [],
  corePlugins: {
    preflight: true,
  },

  // ✔ Disable modern color functions like OKLCH
  future: {
    disableColorOpacityUtilitiesByDefault: false,
  },

  experimental: {
    disableColorMix: true,
  },
};
