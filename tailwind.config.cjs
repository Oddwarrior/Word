/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-primary": '#f72585',
        "theme-primary-dark": '#950e4c',
        "theme-primary-light": '#e895bb'
      }
    },
  },
  plugins: [],
}
