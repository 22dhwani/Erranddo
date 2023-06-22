/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        xs: "300px",

        // ...defaultTheme.screens,
      },
      colors: {
        mediumGray: "#A1ACB8",
        dimGray: "#1A1B1C",
        primaryBlue: "rgb(14, 165, 233)",
        dimWhite: "#FAFAFA",
        textColor: "#212121",
        iconColor: "#595959",
        primary: "#F0F0F0",
        primaryRed: "#FF3636",
      },
    },
  },
  plugins: [],
};
