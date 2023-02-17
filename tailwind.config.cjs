/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ACD9B2",
        alabaster: "#F7F7F7",
        boulder: "#797979",
      },

      custom: {},
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
