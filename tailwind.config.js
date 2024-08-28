/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'Home': "url('/src/assets/Home.jpg')"
      }
    },
  },
  plugins: [],
}

