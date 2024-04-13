/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'md': '950px',
        'lg': '1000px',
      },
    },
  },
  plugins: [],
}