import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
      },
    },
  },
  plugins: [react(),tailwindcss(

  )],
  server: {
    host: '0.0.0.0',  // Allow access from network
    port: 5173,       // Use a specific port
  }
})


