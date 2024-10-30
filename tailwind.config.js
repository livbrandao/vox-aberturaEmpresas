/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#2c8bda",
          medium: "#002e69",
          dark: "#3b4a55",
        },
        secondary: {
          light: "#95c3ec",
          medium: "#c3cfd9",
          dark: "#7c8b99",
        },
        tertiary: {
          light: "#ffffff",
          medium: "#dfe6ed",
          dark: "#4b5c6b",
        },
      },
    },
  },
  plugins: [],
};
