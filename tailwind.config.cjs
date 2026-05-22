/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#121212",
        accent: "#8B0000",
        gold: "#D4AF37",
        glass: "rgba(255, 255, 255, 0.05)",
      },
      fontFamily: {
        cinematic: ["Cinzel", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}