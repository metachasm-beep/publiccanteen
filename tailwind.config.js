/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#fafafa', // zinc-50
          text: '#09090b', // zinc-950
          accent: '#e11d48', // rose-600
          accentHover: '#be123c', // rose-700
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
