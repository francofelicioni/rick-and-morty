/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        yanone:['Yanone Kaffeesatz', 'sans-serif'],
      },
      colors: {
        'white': '#ffffff',
        'brown': '#44281d',
        'light-salmon': '#e4a788',
        'yellow': '#f0e14a',
        'green': '	#97ce4c',
        'pink': '#e89ac7',
        'violet': '79069F',
      },
    },
  },
  plugins: [],
}