/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    colors:{
      primary : '#101218',
      secondary : '#E55204',
      info : '#AEE5FF',
      success : '#C3FFD2'
    }},

  },
  plugins: [],
}

