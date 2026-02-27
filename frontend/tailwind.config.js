/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f0f0f',
        darkCard: '#1a1a1a',
        accent: '#ff006e',
        accentLight: '#fb5607'
      }
    }
  },
  plugins: []
}
