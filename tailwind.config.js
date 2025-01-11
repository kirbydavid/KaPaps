/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#0038A8",
        customYellow: "#FCD116",
        customRed: "#CE1126",
      }
      
    },
  },
  plugins: [],
}

