/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'post-yellow': '#FFFF99',
      'post-blue': '#A3DBFD',
    },
    gridTemplateColumns: {
      custom: 'repeat(auto-fit, minmax(250px, 1fr))',
    },
  },
  plugins: [],
};
