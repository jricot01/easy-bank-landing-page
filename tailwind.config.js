/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "dark-blue": "#3E436A",
        "lime-green": "#31D35C",
        "bright-cyan": "#2BB7DA",
        // Neutral Colors
        "grayish-blue": "#9698A6",
        "light-grayish-blue": "#F3F4F6",
        "light-gray": "#FAFAFA",
      },
    },
  },
  plugins: [],
};
