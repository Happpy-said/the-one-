/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",     // inclut tout dans app/
    "./components/**/*.{js,ts,jsx,tsx}" // inclut les composants
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
