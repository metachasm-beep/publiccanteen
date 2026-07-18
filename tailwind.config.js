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
          bg: '#F8FAFC',
          text: '#1E293B',
          primary: '#3B82F6',
          secondary: '#60A5FA',
          cta: '#F97316',
        }
      },
      fontFamily: {
        heading: ['"Playfair Display SC"', 'serif'],
        sans: ['Karla', 'sans-serif'],
        serif: ['"Playfair Display SC"', 'serif'],
      }
    },
  },
  plugins: [],
}
