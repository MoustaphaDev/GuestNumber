module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        pacifico: "'Pacifico', cursive",
        poppins: "'Poppins', sans-serif"
      },
      animation: {
        mybounce: 'flash linear 1s 2 forwards'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
