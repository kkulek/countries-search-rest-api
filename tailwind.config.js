/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      content: {
        arrow: 'url("./img/left-arrow.svg")'
      },
      backgroundImage: {
        'icon-moon': 'url("./img/moon-icon.svg")',
        'icon-sun': 'url("./img/sun-color-icon.svg")'
      }
    },
  },
  plugins: [],
}
