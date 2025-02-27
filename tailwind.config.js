/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#8615AD',
      'secondary': '#EC615B',
      'pink': '#E374E6',
      'blue': '#19297B',
      'white': '#ffffff',
      'grey': '#D9D9D9',
      'skyblue': '#349BE0',
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
