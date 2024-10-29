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
          medium: "#77aba2",
          dark: "#c3cfd9",
        },
        tertiary: {
          light: "#ffffff",
          medium: "#dfe6ed",
          dark: "#384651",
        },
      },
    },
  },
  plugins: [],
};
