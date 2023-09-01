/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: "'Outfit', 'sans-serif'",
      },
      colors: {
        todoText: "#1d3557",
        cardBackgroundColor: "#a8dadc",
        btnBackgroundColor: "#1d3557",
      },
      boxShadow: {
        cardShadow: "6px 8px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
