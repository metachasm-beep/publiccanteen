/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#DC2626',
        'brand-light': '#FEF2F2',
        'brand-gold': '#CA8A04',
        'brand-brown': '#450A0A',
      },
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
        heading: ['Playfair Display SC', 'serif'],
      },
    },
  },
  plugins: [],
}
