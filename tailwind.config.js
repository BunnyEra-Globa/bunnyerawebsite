/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fdf4ff',
          100: '#f9e8ff',
          200: '#f2d0fe',
          300: '#e8abfc',
          400: '#d878f9',
          500: '#c44bf3',
          600: '#a928d8',
          700: '#8e1fb5',
          800: '#751e94',
          900: '#611c78',
          950: '#420653',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
