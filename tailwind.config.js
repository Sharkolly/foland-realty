/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
       screens: {
        'max-360': {'max': '360px'},  // Custom max-width media query
        'max-400': {'max': '400px'},  // Another example
        // You can add as many as you want
      },
    },
  },
  plugins: [],
}
