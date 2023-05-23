/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./src/**/*.ts", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'title': ['Monteserrat', 'sans-serif']
      },
      colors:{
        'primary': '#560bad',
      }
    }
  },
  plugins: [],
}

