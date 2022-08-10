/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        alium: "#1E90FF",
        hero: "#525252",
        herotext: "#383838",
        trusted: "#333333",
        herobtn: "#009494",
        landingcard: "#FAFAFA",
        links: "#585858",
        adolfa: "#F3F4F6",
        adolfabase: "#F0AE12",
        gemheart: "#E5E5E5",
        gemheartbase: "#1E90FF",
        pixel: "#23B1BF",
        empire: "#2B43CD",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-scrollbar-hide")],
};
