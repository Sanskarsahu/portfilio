/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/img/image.png')",
        "pic":"url('/img/1787.png')",
      }
    },
  },
  plugins: [],
}

