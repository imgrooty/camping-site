/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ecfdf5',
          // ... other emerald shades
          600: '#059669',
          700: '#047857',
        },
        teal: {
          500: '#14b8a6',
        },
      },
    },
  },
  plugins: [],
}