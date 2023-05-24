/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "slideup": "slideup 0.7s ease-out forwards",
      },
      keyframes: {
        slideup: {
          "0%": {transform: "translateY(30px)", opacity: "0"},
          "100%": {transform: "translateY(0px)", opacity: "1"}
        },
      }
    },
  },
  plugins: [],
}

