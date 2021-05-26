module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'body': ['Karla', 'sans-serif'],
      'heading': ['Montserrat', 'sans-serif'],
    },
  },
  variants: {
    extend: {}
 },
  plugins: [
    require('mintflowui'),
  ],
}
