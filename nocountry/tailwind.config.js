/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        autoColums: 'repeat( auto-fit, minmax(250px, 1fr) );',
      },
    },
  },
  plugins: [],
}
