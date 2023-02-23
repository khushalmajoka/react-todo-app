/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: "'Outfit', 'sans-serif'",
      },
      colors: {
        todoText: "#1F1F1F",
        cardBackgroundColor: "#D3E0FF",
        btnBackgroundColor: "#056DC7",
      },
      boxShadow: {
        cardShadow: "6px 8px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
