/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0a6b75",
          dark: "#084f56",
          light: "#0f8e9a"
        }
      }
    },
  },
  plugins: [],
}
