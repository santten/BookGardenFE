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
        white: "#FFFFFF",
        warning: "#FB554C",
        accent: "#F4BB44",
        grey: {
          dark: "#4E4F51",
          DEFAULT: "#CCD4D6",
          light: "#F5F4F3",
        },
        primary: {
          dark: "#8DBAB5",
          DEFAULT: "#CCE0DE",
          light: "#EEF1EC",
        },
        secondary: {
          DEFAULT: "#B49A82",
          light: "#E1D6CC",
        },
      },
      fontFamily: {
        title: "Koulen",
        sans: "Open Sans"
      },
    
      borderWidth: {
        '2': '2px',
      },

      borderRadius: {
        'half': '9999px',
        '4xl': '32px',
      },

      container: {
        center: true,
        padding: { 
          DEFAULT: '25px',
        },
        screens: {
          lg: '1330px',
        },
      },
      containerSmall: {
        center: true,
        padding: { 
          DEFAULT: '25px',
        },
        screens: {
          lg: '1190px',
        },
      },
      containerBig: {
        center: true,
        padding: { 
          DEFAULT: '25px',
        },
        screens: {
          lg: '1390px',
        },
      },
    },
  },
  plugins: [],
}