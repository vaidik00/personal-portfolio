/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Clash Display', 'Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        electric: '#7b65ff',
        softBlue: '#78d7ff',
        neonMint: '#8ef5d8',
      },
    },
  },
  plugins: [],
};
