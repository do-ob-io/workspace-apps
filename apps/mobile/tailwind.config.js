/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('nativewind/preset'),
  ],
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@nextui-org/react').nextui()
  ],
};
