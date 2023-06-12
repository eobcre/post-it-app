/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'post-yellow': '#FEE864',
      'post-blue': '#A3DBFD',
      nude: '#DAC8AE',
    },
    gridTemplateColumns: {
      custom: 'repeat(auto-fit, minmax(250px, 1fr))',
    },
  },
  plugins: [],
};
