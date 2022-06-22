/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: 'var(--background)',
        accent: 'var(--accent)',
        primary: 'var(--primary)',
        muted: 'var(--muted)',
      },
    },
  },
  plugins: [require('tailwindcss-bg-patterns')],
};
