/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary_color: '#122182',
        my_gray: '#787878',
        white: '#ffffff',
      },
      fontFamily: {
        Playfair: ['"Playfair Display"', 'serif'],
      },
      width: {
        '95%': '95%',
        5: '5px',
        250: '250px',
        16: '16px',
        367: '367px',
        395: '395px',
        '64_px': '64px',
      },
      height: {
        '98vh': '98vh',
        110: '110px',
        15.56: '15.56px',
        363: '363px',
        350: '350px',
        '64_px': '64px',
      },
      gridTemplateColumns: {
        grid_sizer: 'repeat(auto-fit, minmax(240px, 1fr))',
        grid_right_larger: '1fr 2fr',
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
  },
  plugins: [],
};
