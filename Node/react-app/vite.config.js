import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   hmr: {
  //     port: 8080,
  //     host: "localhost",
  //     protocol: "ws",
  //   },
  // },
})
