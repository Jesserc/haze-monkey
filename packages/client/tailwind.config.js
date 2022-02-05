module.exports = {
  purge: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // screens: {
    //   's': '400px',
    // },
    extend: {
      colors: {
        'green1': '#012515',
        'green4': '#FAFFF2',
        'green5': '#1B2621',
        'green2': '#101714'
      },
      spacing: {
        '12.5': '3.1875rem',
        '65': '16.5rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
