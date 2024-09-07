/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        smoke: "#4E4F51",
        white: "#FFFFFF",
        crayola: "#FB554C",
        mango: "#F4BB44",
        opal: "#8DBAB5",
        seafoam: "#CCE0DE",
        sage: "#EEF1EC",
        timber: "#BBA28B",
        oyster: "#FFD6AD",
        cloudy: "#F5F4F3",
        grey: "#CCD4D6"
      },
      fontFamily: {
        title: "Koulen",
        sans: "Open Sans"
      }
    },
  },
  plugins: [],
}