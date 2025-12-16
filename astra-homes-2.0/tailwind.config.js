/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F6D75E',
          DEFAULT: '#C7A008',
          dark: '#B08A06',
        },
        charcoal: '#2C2C2C',
        beige: '#FAF7F0',
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'sans-serif'],
        body: ['var(--font-opensans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
