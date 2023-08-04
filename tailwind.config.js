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
        dimGray: "#1A1B1C",
        lightBlue: "#D4E6FB",
        primaryBlue: "#0003FF",
        primaryGreen: "#00BF02",
        primaryYellow: "#DF994F",
        simpleGray: "#7987a1",
        dimWhite: "#0000000DD",
        textColor: "#002434",
        darktextColor: "#777E90",
        iconColor: "#595959",
        lineColor: "#353945",
      },
    },
  },
  plugins: [],
};
