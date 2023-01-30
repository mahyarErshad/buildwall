/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#ffe618",
      secondary: "#222930",
      customGray: "#f5f5f1",
      customBlack: "#222931",
    },
  },
  plugins: [],
};
