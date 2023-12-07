/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        yanone:['Yanone Kaffeesatz', 'sans-serif'],
      },
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'brown': '#44281d',
        'light-salmon': '#e4a788',
        'yellow': '#f0e14a',
        'green': '	#97ce4c',
        'pink': '#E762D7',
        'violet': '79069F',
        'grey-background' : '#3C3E44',
        'light-blue': '#69C8EC',
        //Character status colors
        'alive':'#16a34a',
        'dead': '#dc2626',
        'unknown' : '#6b7280'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}