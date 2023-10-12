/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'brown': '#44281d',
        'light-salmon': '#e4a788',
        'yellow': '#f0e14a',
        'green': '	#97ce4c',
        'pink': '#e89ac7',
        'violet': '79069F',
        'grey-background' : '#3C3E44',
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