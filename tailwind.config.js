/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

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
        title: "Koulen, sans-serif",
        sans: "Open Sans"
      },
    
      borderWidth: {
        '2': '2px',
      },

      fontSize: {
        '2.2rem': '2.2rem',
        'l': '1.125rem',
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
    },
  },
  plugins: [
    plugin(function({ addComponents, theme }) {
      addComponents({
        '.containerSmall': {
          '@apply mx-auto px-[25px]': {},
          '@screen lg': {
            maxWidth: '1190px',
          },
        },
        '.containerBig': {
          '@apply mx-auto px-[25px]': {},
          '@screen lg': {
            maxWidth: '1390px',
          },
        },
      });
    }),

    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',     /* Firefox */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none',  /* Chrome, Safari, and Opera */
        },
      })
    }),
  ],
}