/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [require('daisyui')],
};