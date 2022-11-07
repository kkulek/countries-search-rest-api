/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      content: {
        arrow: 'url("./img/left-arrow.svg")'
      }
    },
  },
  plugins: [],
}
