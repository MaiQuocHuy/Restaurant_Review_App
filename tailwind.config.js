/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        POPPINS_BLACK: ['Poppins-Black'],
        POPPINS_BOLD: ['Poppins-Bold'],
        POPPINS_EXTRA_BOLD: ['Poppins-ExtraBold'],
        POPPINS_EXTRA_LIGHT: ['Poppins-ExtraLight'],
        POPPINS_LIGHT: ['Poppins-Light'],
        POPPINS_MEDIUM: ['Poppins-Medium'],
        POPPINS_REGULAR: ['Poppins-Regular'],
        POPPINS_SEMI_BOLD: ['Poppins-SemiBold'],
      },
    },
    colors: {
      DEFAULT_BLACK: '#0E122B',
      DEFAULT_GREEN: '#0A8791',
      DEFAULT_YELLOW: '#FBA83C',
      DEFAULT_GREY: '#C2C2CB',
      DEFAULT_WHITE: '#FFFFFF',
      DEFAULT_RED: '#F53920',
    },
  },
  plugins: [],
};
