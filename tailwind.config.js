/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "300px",

        // ...defaultTheme.screens,
      },
      colors: {
        mediumGray: "#141625",
        dimGray: "#040517",
        lightBlue: "#D4E6FB",
        primaryBlue: "#0003FF",
        primaryGreen: "#00BF02",
        primaryYellow: "#DF994F",

        dimWhite: "#0000000D",
        textColor: "#002434",
        darktextColor: "#F2F2F2",
        iconColor: "#595959",
      },
    },
  },
  plugins: [],
};
