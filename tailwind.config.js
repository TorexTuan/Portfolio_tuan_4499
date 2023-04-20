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
      boxShadow: {
        '2xl': ' 0 0.5rem 1rem rgba(0, 0, 0, 0.2)',
      },
      animation: {
        scaleHover: 'scaleHover .5s ease-in-out forwards'
      },
      container: {
        maxWidth: {
          lg: "768px"
        }
      }
    }
  },
  plugins: [],
}
