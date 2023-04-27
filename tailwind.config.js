/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'neon-yellow': '#FFFF99',
    },
    gridTemplateColumns: {
      custom: 'repeat(auto-fit, minmax(250px, 1fr))',
    },
  },
  plugins: [],
};
