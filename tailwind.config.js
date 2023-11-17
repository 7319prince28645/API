/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(250px, 1fr))",
      },
      dark: {
        "bg-gray-800": "#1a202c",
        "text-white": "#ffffff",
      },
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-dark-blue": "hsl(207, 26%, 17%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
}

