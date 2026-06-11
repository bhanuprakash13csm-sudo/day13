import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // or '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repository-name/', // <-- ADD THIS LINE (Replace with your exact GitHub repo name)
})
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
