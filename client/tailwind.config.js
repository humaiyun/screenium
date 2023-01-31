/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          primary: "#318986",
          secondary: "#D8ECEB",
          background: "#000732"
        }
      }
    },
  },
  plugins: [],
}