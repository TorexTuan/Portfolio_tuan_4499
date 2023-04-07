/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        scaleHover: {
          to: {
            transform: 'scale(1.4)'
          }
        }
      },
      animation: {
        scaleHover: 'scaleHover .5s ease-in-out forwards'
      }
    }
  },
  plugins: [],
}
