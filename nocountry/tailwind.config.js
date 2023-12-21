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
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        palette: {
          primary: '#152D2F',
          secondary: '#529296',
          tertiary: '#599A6A',
          quaternary: '#8F5D3D',
          quinary: '#FFC692',
          senary: '#F6DCB1',
          septenary: '#FFFAC2',
          octonary: '#4CAF50',
          nonary: '#C8BFA9',
        },
      },
    },
  },
  plugins: [],
}
