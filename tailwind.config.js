/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'ivory': '#E6DAC7',
      'brown': '#2A2118',
      'gold': '#B99E3C',
      'black': '#040404',
      'white': '#F5F5F5',
      'gray': '#7A7A7A'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
