/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a2559',
        'navy-dark': '#071a40',
        orange: '#f7791f',
        'orange-dark': '#e56a10',
      },
      fontFamily: {
        display: ['Poppins', 'Segoe UI', 'sans-serif'],
        body: ['Inter', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}