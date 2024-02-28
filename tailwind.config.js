/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {    colors:{
      primary : '#101218',
      secondary : '#E55204'
    }},

  },
  plugins: [require('flowbite/plugin'),],
}

