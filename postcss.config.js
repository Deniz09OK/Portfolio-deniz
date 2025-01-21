/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'noto-serif-jp': ['"Noto Serif JP"', 'serif'],
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};