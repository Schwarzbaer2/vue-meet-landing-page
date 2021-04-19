module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: "768px",
      // => @media (min-width: 768px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        redHat: ["Red Hat Display", "Sans-serif"],
      },
      colors: {
        mainBlue: "#4D96A9",
        mainPurple: "#855FB1",
        mainDark: "#28283D",
        mainGrey: "#87879D",
        mainMauve: "#D9B8FF",
        mainWhite: "#FAFAFA",
        secondaryBlue: "#8FE3F9",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
