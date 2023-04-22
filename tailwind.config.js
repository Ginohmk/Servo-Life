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
    height: {
      '98vh': '98vh',
    },
    textColor: {
      white: '#ffffff',
    },
    boxShadow: {
      primary_shadow: '0px 4px 58px rgba(18, 33, 130, 0.66)',
    },
  },
  plugins: [],
};
