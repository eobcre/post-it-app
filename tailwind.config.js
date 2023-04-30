/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'post-yellow': '#FFFF99',
      'post-blue': '#43C1E9',
    },
    gridTemplateColumns: {
      custom: 'repeat(auto-fit, minmax(250px, 1fr))',
    },
  },
  plugins: [],
};
