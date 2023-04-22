/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
    colors: {
      primary_color: '#122182',
    },
    fontFamily: {
      Playfair: ['"Playfair Display"', 'serif'],
    },
    width: {
      '90%': '90%',
    },
    height: {
      '98vh': '98vh',
    },
    gridTemplateColumns: {
      grid_4: 'repeat(auto-fit, minmax(240px, 1fr))',
    },
    textColor: {
      white: '#ffffff',
      primary_color: '#122182',
    },
    boxShadow: {
      primary_shadow: '0px 4px 58px rgba(18, 33, 130, 0.66)',
      card_shadow: '0px 4px 58px rgba(18, 33, 130, 0.25)',
      default: '0px 3px 8px rgba(0, 0, 0, 0.24)',
    },
  },
  plugins: [],
};
