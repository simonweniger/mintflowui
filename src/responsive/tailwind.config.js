const plugin = require('tailwindcss/plugin')
module.exports = {
  theme: {
    colors: require('../../colors'),
    fontSize: {
      "xs": "0.5rem",
      "sm": "0.65rem",
      "base": "0.75rem",
      "md": "0.875rem",
      "lg": "1rem",
      "xl": "1.125rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.5rem",
      "5xl": "3rem",
      "6xl": "5rem"
    },
  },
  
  plugins: [
    plugin(function({ addBase, addUtilities }) {
      addBase(require('../../dist/resets/general'))
      addUtilities(require('../../dist/utilities/borderRadius'),{ variants: ['responsive'] })
      addUtilities(require('../../dist/utilities/fontSize'),{ variants: ['responsive'] })
      addUtilities(require('../../dist/utilities/glass'),{ variants: ['responsive'] })
      addUtilities(require('../../dist/utilities/sizing'),{ variants: ['responsive'] })
      addUtilities(require('../../dist/utilities/typography'))
      addUtilities(require('../../dist/utilities/variables'))
    })
  ],
}
