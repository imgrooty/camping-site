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
        'sage': {
          50: '#f8faf8',
          100: '#f0f4f1',
        },
        'forest': {
          500: '#2d5f3e',
          600: '#234b31',
          700: '#1a3724',
          900: '#0f2116',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '75%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        slideDown: 'slideDown 0.5s ease-out',
        shake: 'shake 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}