/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        autoColums: 'repeat( auto-fit, minmax(250px, 1fr) );',
      },
      boxShadow: {
        default: '0 3px 10px 5px  rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
