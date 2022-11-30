/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Quicksand: ["Quicksand", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        app: {
          white: "#FFFFFF",
          black: "#000000",
          dark: "#232830",
          silver: "#C7C7C7",
          alabaster: "#F7F7F7",
          green: "#ACD9B2",
        },
      },

      custom: {},
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
