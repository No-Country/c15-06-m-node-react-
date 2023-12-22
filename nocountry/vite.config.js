// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Agrega alias para resolver tus módulos aquí
      './userSlice': '../nocountry/src/redux/UserSlice.js',
      '../imgs/VidaSustentable.jpg': '/path/to/your/VidaSustentable.jpg',
    },
  },
})
