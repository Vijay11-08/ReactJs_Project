import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
 // This is the entry point of our application.
 // Vite will automatically handle the rest.
 // In this case, it will transpile our JSX code into JavaScript and include it in the bundle.

// The 'src' directory contains our application's source code.
// The 'public' directory contains static assets that will be served directly by the server.
// The 'index.html' file is the entry point of our application.