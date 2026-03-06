/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: '#1a2332',       // Deep Navy
        surface: '#fafafa',    // Warm White
        accent: '#d4af37',     // Insurance Gold
        muted: '#4a6b8a',      // Steel Blue
        success: '#2d5a2d',    // Success Green
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'card': '1.5rem',
        'pill': '2rem',
      }
    }
  },
  plugins: [],
}
