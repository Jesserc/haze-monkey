module.exports = {
  purge: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // screens: {
    //   's': '400px',
    // },
    extend: {
      colors: {
        green4: '#FAFFF2',
        green2: '#101714',
        green5: '#1B2621',
        buttonGreen: '#aeed47',
        brown: 'var(--brown1)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
