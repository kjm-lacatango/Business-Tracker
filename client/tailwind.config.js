/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  important: true,
  content: [
    "./src/**/*.{html,scss,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#009644'
      }
    },
  },
  plugins: [],
}

